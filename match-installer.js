// SteadFlow — AI installer matching (Cloudflare Pages Function)
//
// This file automatically becomes a live endpoint at /api/match-installer
// once deployed to Cloudflare Pages — no extra routing setup needed.
//
// HOW TO CONNECT YOUR GEMINI KEY (do this in the Cloudflare dashboard, never in code):
// 1. Get a free key from https://aistudio.google.com/apikey
// 2. In Cloudflare: your Pages project > Settings > Environment variables
// 3. Add a variable named GEMINI_API_KEY, paste your key as the value, mark it "Secret"
// 4. Redeploy — this function will then read it via context.env.GEMINI_API_KEY
//
// Until that's set up, this function returns a clear error instead of crashing,
// and installers.html falls back to a friendly "not connected yet" message.

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'GEMINI_API_KEY is not set in Cloudflare environment variables yet.' }),
      { status: 501, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
  }

  const { location, businessType, powerNeed, installers } = body;

  if (!location || !businessType || !Array.isArray(installers)) {
    return new Response(JSON.stringify({ error: 'Missing location, businessType, or installers list.' }), { status: 400 });
  }

  // Keep only the fields Gemini needs — no need to send full bios/portfolios
  const installerSummaries = installers.map(i => ({
    id: i.id,
    name: i.name,
    location: i.location,
    serviceAreas: i.serviceAreas,
    experienceYears: i.experienceYears,
    specializations: i.specializations,
    score: i.score,
    verification: i.verification,
  }));

  const prompt = `You are matching a customer to the best installer from a list.
Customer needs: business type "${businessType}", located in "${location}", estimated power requirement "${powerNeed || 'unknown'}".

Installers (JSON): ${JSON.stringify(installerSummaries)}

Pick the single best-matched installer. Respond with ONLY valid JSON, no markdown, in this exact shape:
{"installerId": "...", "installerName": "...", "matchPercent": 0-100, "reason": "one or two sentences explaining the match"}`;

  try {
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return new Response(JSON.stringify({ error: 'Gemini API error', detail: errText }), { status: 502 });
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Gemini sometimes wraps JSON in markdown fences — strip those if present
    const cleaned = rawText.replace(/```json|```/g, '').trim();
    const match = JSON.parse(cleaned);

    return new Response(JSON.stringify(match), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Matching failed', detail: String(err) }), { status: 500 });
  }
}

// SteadFlow — Resources (educational video library)
//
// HOW TO ADD YOUR OWN VIDEOS:
// Replace each "videoId" below with your real YouTube video ID — that's the
// part of a YouTube URL after "v=". For example, in
// https://www.youtube.com/watch?v=dQw4w9WgXcQ, the video ID is dQw4w9WgXcQ.
// The thumbnail and embed both update automatically from the ID — nothing
// else needs to change.

const RESOURCES = [
  {
    id: "how-solar-works",
    title: "How Solar Power Works, Explained Simply",
    category: "Basics",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "A plain-language walkthrough of how sunlight becomes usable electricity in your shop — panels, inverter, battery, and how they work together."
  },
  {
    id: "sizing-your-system",
    title: "How to Size a Solar System for Your Business",
    category: "Planning",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "How to estimate your power needs from your equipment list, and why guessing at panel count usually leads to an undersized system."
  },
  {
    id: "kva-vs-kw",
    title: "kVA vs kW: What's the Difference?",
    category: "Basics",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "The inverter-sizing question every first-time buyer asks — cleared up in under five minutes."
  },
  {
    id: "battery-lifespan",
    title: "Getting the Most Out of Your Lithium Battery",
    category: "Maintenance",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "Simple habits that extend battery lifespan, and the early warning signs of degradation worth watching for."
  },
  {
    id: "installation-day",
    title: "What to Expect on Installation Day",
    category: "Installation",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "A walkthrough of a real SteadFlow installation from arrival to commissioning, so you know what's involved before your own install."
  },
  {
    id: "generator-vs-solar",
    title: "Generator vs Solar: The Real Cost Comparison",
    category: "Planning",
    videoId: "YOUR_VIDEO_ID_HERE",
    summary: "A side-by-side look at fuel spend versus solar running costs over time, using real Nigerian pricing."
  }
];

function getResourceById(id) {
  return RESOURCES.find(r => r.id === id) || null;
}

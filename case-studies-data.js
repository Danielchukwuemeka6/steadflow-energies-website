// SteadFlow — "Our Work" case studies data
// Photos live in a "case-studies-pictures" folder at your project root, same
// extension-fallback approach as product photos (tries .avif, then .png, then .jpg).

const CASE_STUDY_EXTENSIONS = ["avif", "png", "jpg", "jpeg", "webp"];

function caseImgSrc(basePath, extIndex) {
  return encodeURI(`case-studies-pictures/${basePath}.${CASE_STUDY_EXTENSIONS[extIndex]}`);
}

function caseImgFallback(imgEl) {
  const nextIndex = parseInt(imgEl.dataset.extIdx || "0", 10) + 1;
  if (nextIndex < CASE_STUDY_EXTENSIONS.length) {
    imgEl.dataset.extIdx = nextIndex;
    imgEl.src = caseImgSrc(imgEl.dataset.base, nextIndex);
  } else {
    imgEl.onerror = null;
    imgEl.src = "https://placehold.co/700x500/1b5e44/faf7f0?text=Installation+Photo";
  }
}

function caseImgTag(basePath, altText, extraAttrs) {
  const safeAlt = String(altText).replace(/"/g, "&quot;");
  return `<img src="${caseImgSrc(basePath, 0)}" data-base="${basePath.replace(/"/g, '&quot;')}" data-ext-idx="0" onerror="caseImgFallback(this)" alt="${safeAlt}" ${extraAttrs || ""}>`;
}

// PLACEHOLDER DATA — replace with your real completed projects.
// images: array of 3 base filenames (no extension) in case-studies-pictures/
const CASE_STUDIES = [
  {
    id: "ikotun-frozen-foods",
    title: "5kW SME Solar Installation",
    customerType: "Frozen foods retailer",
    location: "Ikotun Market, Lagos",
    date: "2026-03",
    images: ["Islamic street", "Islamic street02", "Islamic street03"],
    summary: "A frozen foods shop moved off diesel entirely, keeping freezers running through daily outages.",
    systemInstalled: ["5.5kW solar PV array", "5kW pure sine wave inverter", "10kWh lithium battery bank", "Smart monitoring via SteadFlow IQ"],
    story: "This Ikotun Market retailer was spending a significant share of daily revenue on diesel to keep freezers running through outages. SteadFlow assessed the shop's load — primarily refrigeration, lighting, and POS — and sized a 5.5kW system with 10kWh of lithium storage to cover a full day and night cycle. Installation was completed in two days with no disruption to trading hours.",
    testimonial: { quote: "We used to close the shop whenever fuel prices spiked. Now the freezers run all day and I've stopped budgeting for petrol.", name: "Amaka O.", role: "Shop owner" }
  },
  {
    id: "ikotun-salon",
    title: "3kW Salon Installation",
    customerType: "Hair & beauty salon",
    location: "Ikotun Market, Lagos",
    date: "2026-04",
    images: ["Ikotun market", "Ikotun market02", "Ikotun market03"],
    summary: "A salon shifted dryer and styling equipment usage to daytime solar hours, cutting evening grid load in half.",
    systemInstalled: ["3kW solar PV array", "3kVA inverter", "5kWh lithium battery"],
    story: "Salons carry a spikier load profile than most SMEs — dryers and styling tools draw heavily but intermittently. SteadFlow IQ's usage dashboard helped this customer identify that shifting dryer use to daytime hours, when solar generation peaks, meaningfully reduced evening grid and generator dependence.",
    testimonial: { quote: "The dashboard tells me exactly what my salon is using. I moved my dryers to daytime hours and cut my evening load in half.", name: "Tunde A.", role: "Salon owner" }
  }
];

function getCaseStudyById(id) {
  return CASE_STUDIES.find(c => c.id === id) || null;
}

function formatCaseDate(isoMonth) {
  const [year, month] = isoMonth.split("-");
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

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
    id: "Tailoring materials shop",
    title: "450W Monocrystalline Solar Panel with 12V 200Ah Deep Cycle Gel Battery",
    customerType: "Tailoring materials shop",
    location: "Ikotun Market, Lagos",
    date: "2026-03",
    images: ["Ikotun market", "Ikotun market02", "Ikotun market03"],
    summary: "A tailoring materials shop reduced its dependence on petrol-generated power and now uses its solar system to support its main shop and two additional shops.",
    systemInstalled: ["550W Monocrystalline Solar Panel", "10kVA Pure Sine Wave Inverter (48V)", "G12V200AH Gel Battery – 12V 200Ah Deep Cycle"],
    story: "This Ikotun Market retailer was spending a significant share of daily revenue on diesel to keep freezers running through outages. SteadFlow assessed the shop's load — primarily refrigeration, lighting, and POS — and sized a 5.5kW system with 10kWh of lithium storage to cover a full day and night cycle. Installation was completed in two days with no disruption to trading hours.",
    testimonial: { quote: "We were spending over ₦4.4 million every year on petrol for the generator. Since installing solar, we no longer have to carry that same fuel burden, and we can now use the power to support our two other shops.", name: "Ifeanyi Ezeani.", role: "CEO, Ifeze enterprises" }
  },
  {
    id: "ikotun-Cold Room",
    title: "7.2kW Lithium Battery Solar Installation",
    customerType: "Cold Room",
    location: "Ikotun Market, Lagos",
    date: "2026-04",
    images: ["Islamic street", "Islamic street02", "Islamic street03"],
    summary: "A cold room adopted solar power to support refrigeration and reduce dependence on petrol-generated electricity during frequent power outages.",
    systemInstalled: ["4 X 550W Monocrystalline Solar Panels", "10kVA Pure Sine Wave Inverter (48V)", "7.2KW Wall-Mount Lithium Battery"],
    story: "This cold room in Ikotun Market depends on continuous electricity to preserve frozen and temperature-sensitive products. Frequent power outages meant relying heavily on petrol-generated electricity, increasing operating costs and creating the risk of disruption to refrigeration. SteadyFlow coordinated the procurement of a solar power system designed to support the cold room's refrigeration load and provide a more reliable source of electricity. The installation has helped the business reduce its dependence on petrol generation and maintain more consistent power for its refrigeration operations.",
    testimonial: { quote: "Reliable electricity is very important for our cold room. Since installing the solar system, we have been able to keep our refrigeration running with much less dependence on the generator.", name: "Tunde A.", role: "CEO Ikotun Cold room" }
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

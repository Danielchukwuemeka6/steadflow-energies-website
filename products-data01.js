// SteadFlow Market — demo product catalog
// This array is a stand-in for what will eventually live in the `products`
// table in Supabase. Each object below maps directly to one database row:
//   id -> product_id, category -> category, price -> price (in kobo/NGN), etc.
// When the backend is ready, this file gets replaced by a fetch() call —
// nothing else on the page needs to change if the shape stays the same.

const CATEGORIES = [
  "Solar Panels",
  "Batteries",
  "Inverters",
  "Solar Lights",
  "Solar Pumps",
  "Accessories"
];

const PRODUCTS = [
  // ---- Solar Panels ----
  { id: "p01", name: "400W Monocrystalline Panel", category: "Solar Panels", vendor: "SunTech Nigeria", price: 185000, rating: 4.6, stock: 24, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=400W+Panel", description: "High-efficiency monocrystalline panel suited to compact rooftops and stall canopies. 25-year performance warranty." },
  { id: "p02", name: "550W Monocrystalline Panel", category: "Solar Panels", vendor: "SunTech Nigeria", price: 245000, rating: 4.7, stock: 15, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=550W+Panel", description: "Higher-output panel for larger roofs and Business/Enterprise packages." },
  { id: "p03", name: "150W Portable Panel", category: "Solar Panels", vendor: "Ikeja Solar Supplies", price: 68000, rating: 4.3, stock: 40, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=150W+Panel", description: "Lightweight, foldable panel for market stalls and small kiosks." },
  { id: "p04", name: "300W Polycrystalline Panel", category: "Solar Panels", vendor: "Ikeja Solar Supplies", price: 132000, rating: 4.2, stock: 30, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=300W+Panel", description: "Budget-friendly panel option for Starter package customers." },

  // ---- Batteries ----
  { id: "b01", name: "5kWh Lithium Battery", category: "Batteries", vendor: "PowerCell Africa", price: 620000, rating: 4.8, stock: 12, image: "https://placehold.co/500x500/0b2e4a/faf7f0?text=5kWh+Lithium", description: "Compact storage for overnight lighting, POS and refrigeration. 10-year design life." },
  { id: "b02", name: "10kWh Lithium Battery", category: "Batteries", vendor: "PowerCell Africa", price: 1150000, rating: 4.8, stock: 6, image: "https://placehold.co/500x500/0b2e4a/faf7f0?text=10kWh+Lithium", description: "For Business and Enterprise packages with fridges and multiple appliances." },
  { id: "b03", name: "200Ah Deep-Cycle Battery", category: "Batteries", vendor: "Balogun Battery Co.", price: 210000, rating: 4.1, stock: 22, image: "https://placehold.co/500x500/0b2e4a/faf7f0?text=200Ah+Deep-Cycle", description: "Reliable, lower-cost storage option for Starter systems." },

  // ---- Inverters ----
  { id: "i01", name: "3kVA Pure Sine Inverter", category: "Inverters", vendor: "SunTech Nigeria", price: 285000, rating: 4.5, stock: 18, image: "https://placehold.co/500x500/f4b93e/10241c?text=3kVA+Inverter", description: "Clean power output, safe for sensitive electronics and freezers." },
  { id: "i02", name: "5kVA Pure Sine Inverter", category: "Inverters", vendor: "SunTech Nigeria", price: 410000, rating: 4.6, stock: 10, image: "https://placehold.co/500x500/f4b93e/10241c?text=5kVA+Inverter", description: "Higher-capacity inverter for Business and Enterprise packages." },
  { id: "i03", name: "1.5kVA Compact Inverter", category: "Inverters", vendor: "Ikeja Solar Supplies", price: 96000, rating: 4.0, stock: 26, image: "https://placehold.co/500x500/f4b93e/10241c?text=1.5kVA+Inverter", description: "Entry-level inverter for lighting and phone/device charging only." },

  // ---- Solar Lights ----
  { id: "l01", name: "Solar Street Light 60W", category: "Solar Lights", vendor: "BrightPath Energy", price: 45000, rating: 4.4, stock: 50, image: "https://placehold.co/500x500/e8a021/10241c?text=Street+Light", description: "All-in-one solar street light with motion sensor, for compounds and market entrances." },
  { id: "l02", name: "Indoor LED Solar Bulb Kit", category: "Solar Lights", vendor: "BrightPath Energy", price: 14500, rating: 4.2, stock: 80, image: "https://placehold.co/500x500/e8a021/10241c?text=Bulb+Kit", description: "3-bulb kit with switch panel and USB charging port, ideal for single stalls." },
  { id: "l03", name: "Solar Security Floodlight", category: "Solar Lights", vendor: "Alaba Electricals", price: 32000, rating: 4.3, stock: 35, image: "https://placehold.co/500x500/e8a021/10241c?text=Floodlight", description: "Motion-activated floodlight for shop fronts and storage areas." },

  // ---- Solar Pumps ----
  { id: "u01", name: "Solar Borehole Pump 1HP", category: "Solar Pumps", vendor: "AquaSolar Systems", price: 380000, rating: 4.5, stock: 8, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=Borehole+Pump", description: "For agriculture and small industry water needs, works directly off solar panels." },
  { id: "u02", name: "Solar Surface Pump 0.5HP", category: "Solar Pumps", vendor: "AquaSolar Systems", price: 165000, rating: 4.1, stock: 14, image: "https://placehold.co/500x500/1b5e44/faf7f0?text=Surface+Pump", description: "Lighter-duty pump for shallow wells and irrigation." },

  // ---- Accessories ----
  { id: "a01", name: "MC4 Solar Cable Set (10m)", category: "Accessories", vendor: "Ikeja Solar Supplies", price: 8500, rating: 4.4, stock: 100, image: "https://placehold.co/500x500/8d998f/10241c?text=Cable+Set", description: "Weatherproof cabling and connectors for panel-to-inverter wiring." },
  { id: "a02", name: "30A Charge Controller", category: "Accessories", vendor: "PowerCell Africa", price: 22000, rating: 4.3, stock: 40, image: "https://placehold.co/500x500/8d998f/10241c?text=Charge+Controller", description: "Regulates charging between panels and battery to protect against overcharge." },
  { id: "a03", name: "Roof Mounting Kit", category: "Accessories", vendor: "Balogun Battery Co.", price: 27000, rating: 4.0, stock: 33, image: "https://placehold.co/500x500/8d998f/10241c?text=Mounting+Kit", description: "Aluminium rail and clamp set for securing panels to corrugated or flat roofs." }
];

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

// SteadFlow Market — product catalog (real Felicity Solar inventory)
// This array is a stand-in for what will eventually live in the `products`
// table in Supabase. When the backend is ready, this file gets replaced by
// a fetch() call — nothing else on the page needs to change if the shape stays the same.
//
// IMAGES: photo files live in a "product_pictures" folder at your project root
// (same level as index.html). Each product's `images` array holds 3 filenames
// WITHOUT extensions — the code below automatically tries .avif first, then
// falls back to .png, then .jpg, so it doesn't matter which format each file
// actually is. Just make sure the base filename (before the extension) matches
// exactly, spaces and punctuation included.

const CATEGORIES = [
  "Solar Panels",
  "Batteries",
  "Inverters",
  "Charge Controllers",
  "Solar Lights",
  "Street Lights",
  "Solar Pumps",
  "Accessories"
];

// Extensions tried in this order until one loads successfully
const IMG_EXTENSIONS = ["avif", "png", "jpg", "jpeg", "webp"];

function productImgSrc(basePath, extIndex) {
  return encodeURI(`product_pictures/${basePath}.${IMG_EXTENSIONS[extIndex]}`);
}

// Called automatically by the onerror handler on every product <img> —
// tries the next file extension, and if none work, shows a placeholder.
function imgExtFallback(imgEl) {
  const nextIndex = parseInt(imgEl.dataset.extIdx || "0", 10) + 1;
  if (nextIndex < IMG_EXTENSIONS.length) {
    imgEl.dataset.extIdx = nextIndex;
    imgEl.src = productImgSrc(imgEl.dataset.base, nextIndex);
  } else {
    imgEl.onerror = null;
    imgEl.src = "https://placehold.co/500x500/e9dfc9/5c6b62?text=Photo+not+found";
  }
}

// Builds a full <img> tag with the extension-fallback wiring built in.
function productImgTag(basePath, altText, extraAttrs) {
  const safeAlt = String(altText).replace(/"/g, "&quot;");
  return `<img src="${productImgSrc(basePath, 0)}" data-base="${basePath.replace(/"/g, '&quot;')}" data-ext-idx="0" onerror="imgExtFallback(this)" alt="${safeAlt}" ${extraAttrs || ""}>`;
}

const PRODUCTS = [
  // ---- Solar Panels ----
  { id: "panel-550w", name: "Felicity Solar 550W Monocrystalline Solar Panel", category: "Solar Panels", vendor: "SteadFlow Energies", price: 221370, originalPrice: 273000, rating: 4.5, stock: 10,
    images: ["550 Mon Solar Panel", "550 Mon Solar Panel02", "550 Mon Solar Panel03"],
    features: ["550W rated output — ideal for higher energy demands.", "Monocrystalline half-cell design for improved efficiency and reduced shading losses.", "Strong aluminium frame and tempered glass for long-lasting, all-weather performance.", "Dimensions: approximately 2278 × 1134 × 35 mm; weight: about 27–30 kg.", "Compatible with 51V systems, making it easy to integrate into large-scale setups.", "Built to withstand Nigeria's intense sun, heat, and humidity."],
    description: "The Felicity Solar 550W Monocrystalline Solar Panel is built for Nigeria's solar market — offering high output and reliable performance even under tropical conditions. With premium monocrystalline and half-cell technology, this panel is ideal for large homes, commercial systems, and off-grid setups in Nigeria." },

  { id: "panel-450w", name: "Felicity Solar 450W Monocrystalline Solar Panel", category: "Solar Panels", vendor: "SteadFlow Energies", price: 199160, originalPrice: 232000, rating: 4.5, stock: 10,
    images: ["450 W Mono Solar Panel", "450 W Mono Solar Panel02", "450 W Mono Solar Panel03"],
    features: ["450W rated output for robust power generation.", "Monocrystalline cells for higher efficiency and space-saving layout.", "Sturdy aluminium frame and tempered glass for weather resilience.", "Low-light optimized: kicks in early morning & late afternoon.", "Ideal for off-grid and hybrid systems in the Nigerian environment."],
    description: "The Felicity Solar 450W mono-crystalline solar panel delivers high-efficiency power output, designed for residential and small commercial installations in Nigeria. Built with durable frames and a low-light cell design, this panel ensures reliable performance even during cloudy days or grid fluctuations." },

  // ---- Batteries ----
  { id: "batt-hope1000", name: "The HOPE1000 Portable Lithium Battery", category: "Batteries", vendor: "SteadFlow Energies", price: 381950, originalPrice: 415000, rating: 4.5, stock: 10,
    images: ["The HOPE1000 Battery", "The HOPE1000 Battery01", "The HOPE1000 Battery02"],
    features: ["1kWh LiFePO4 battery for long lifespan and stable power storage.", "250W output power suitable for TVs, fans, lights, laptops, and small appliances.", "Built-in inverter & MPPT charge controller for all-in-one solar backup functionality.", "Supports solar charging up to 200W for off-grid and renewable energy use.", "UPS automatic switching for uninterrupted power during outages.", "Portable lightweight design (~8.7kg) for easy movement and installation.", "Plug-and-play operation for simple setup without complex wiring.", "Long battery life with up to 8,000 charge cycles.", "Quiet & fuel-free operation as an eco-friendly alternative to generators.", "Can operate with grid, solar panels, or battery power for flexible energy usage."],
    description: "The HOPE1000 is a compact and portable solar backup power solution designed for homes, offices, shops, and outdoor use. It combines an inverter, lithium battery, and MPPT solar charge controller in one unit for easy plug-and-play operation, with automatic switching to battery power during outages." },

  { id: "batt-tower-512kwh", name: "Felicity Lithium Battery (Tower Type) 5.12kWh", category: "Batteries", vendor: "SteadFlow Energies", price: 1647200, originalPrice: 1850000, rating: 4.5, stock: 10,
    images: ["Felicity Lithium Battery Tower Type Battery", "Felicity Lithium Battery Tower Type 02", "Felicity Lithium Battery Tower Type 03"],
    features: ["5.12kWh modular capacity (expandable).", "Lithium LiFePO₄ technology.", "Long lifespan & fast charging.", "Smart BMS protection system.", "Stackable, space-saving tower design.", "Ideal for home & commercial solar systems."],
    description: "A high-performance lithium energy storage battery designed for reliable solar power backup. Built with advanced LiFePO₄ technology, it delivers long life, stable performance, and seamless compatibility with Felicity inverters." },

  { id: "batt-flh48100ug1", name: "Felicity FLH-48100UG1 – 48V 100Ah LiFePO4 Battery Module (5.12kWh)", category: "Batteries", vendor: "SteadFlow Energies", price: 1446540, originalPrice: 1700000, rating: 4.5, stock: 10,
    images: ["Felicity FLH-48100UG1 Battery", "Felicity FLH-48100UG1 Battery02", "Felicity FLH-48100UG1 Battery03"],
    features: ["Model: FLH-48100UG1.", "Battery type: 48V 100Ah LiFePO4 (Lithium Iron Phosphate).", "Capacity: 5.12kWh per unit.", "Cycle life: ≥6000 cycles @ 80% DOD.", "BMS included: built-in Battery Management System for safety & performance.", "Display: LCD screen showing SOC, voltage, current, and alarms.", "Communication: RS485 / CAN / WiFi for smart inverter compatibility.", "Mounting: 19-inch rack mountable (fits Felicity battery cabinet).", "Safety: overcharge, over-discharge, short-circuit, and temperature protection."],
    description: "The Felicity FLH-48100UG1 is a 48V 100Ah (5.12kWh) LiFePO4 lithium battery designed for solar energy storage systems. Engineered for reliability and efficiency, this smart battery module offers long cycle life, real-time monitoring, and seamless scalability with rack-mount installation." },

  { id: "batt-lpbf24200m", name: "Felicity LPBF24200-M – 24V 5KW 200Ah LiFePO4 Battery", category: "Batteries", vendor: "SteadFlow Energies", price: 1228000, originalPrice: 1360000, rating: 4.5, stock: 10,
    images: ["Felicity LPBF24200-M Battery", "Felicity LPBF24200-M Battery02", "Felicity LPBF24200-M Battery03"],
    features: ["24V 200Ah lithium (LiFePO₄) technology.", "Long lifespan: over 6000 cycles @ 80% DOD.", "Built-in smart BMS for safety and performance.", "Compact and lightweight for easy installation.", "High energy density and low self-discharge.", "Compatible with inverters and solar charge controllers."],
    description: "The Felicity 24V 200Ah lithium battery is a compact and durable energy storage solution ideal for solar and hybrid systems. Designed with LiFePO₄ technology, it offers high safety, long life, and reliable performance for both residential and commercial use." },

  { id: "batt-fla48300", name: "Felicity FLA48300 – 48V 15KW 300Ah Lithium Battery (Low Voltage ESS)", category: "Batteries", vendor: "SteadFlow Energies", price: 3486080, originalPrice: 3723000, rating: 4.5, stock: 10,
    images: ["Felicity FLA48300 Battery", "Felicity FLA48300 Battery02", "Felicity FLA48300 Battery03"],
    features: ["48V 300Ah LiFePO₄ technology.", "Safe, low-voltage design with intelligent BMS.", "Long lifespan: over 6000 cycles @ 80% DOD.", "High energy density & compact design.", "Scalable for higher energy demands.", "Plug-and-play with most inverter brands.", "Wheels for easy mobility."],
    description: "The Felicity FLA48300 is a high-capacity 48V 300Ah lithium battery designed for residential and commercial energy storage applications. Engineered for efficiency, safety, and long lifespan, it delivers stable power supply and seamless integration with solar systems and hybrid inverters." },

  { id: "batt-fla48500", name: "Felicity FLA48500 25KW Lithium Battery (48V 500Ah)", category: "Batteries", vendor: "SteadFlow Energies", price: 5665000, originalPrice: 6000000, rating: 4.5, stock: 10,
    images: ["Felicity FLA48500 Battery", "Felicity FLA48500 Battery02", "Felicity FLA48500 Battery03"],
    features: ["48V 500Ah lithium iron phosphate (LiFePO4) battery.", "Long lifespan: 6,000+ cycles @ 80% DoD.", "Smart Battery Management System (BMS) for safety.", "High energy density, compact and modular design.", "Fast charging, low self-discharge rate.", "Compatible with inverters and solar charge controllers.", "Suitable for solar, backup, and off-grid systems."],
    description: "The Felicity FLA48500 is a high-capacity 48V 500Ah LiFePO4 lithium battery designed for solar energy storage. It delivers long life, fast charging, and reliable backup power for homes, businesses, and industrial applications across Nigeria." },

  { id: "batt-lpbf48300ii", name: "Felicity LPBF48300-II – 48V 300Ah 15KW Lithium Battery", category: "Batteries", vendor: "SteadFlow Energies", price: 3335000, originalPrice: 3745000, rating: 4.5, stock: 10,
    images: ["Felicity LPBF48300 Battery", "Felicity LPBF48300 Battery02", "Felicity LPBF48300 Battery03"],
    features: ["48V 300Ah LiFePO₄ battery for deep-cycle applications.", "High-performance smart BMS for safety and efficiency.", "Over 6,000 charge/discharge cycles @ 80% DoD.", "Rack-mount design for scalable energy storage.", "Fast charging and low self-discharge rate.", "Compatible with inverters from major brands."],
    description: "The Felicity LPBF48300-II is a powerful 48V 300Ah lithium battery built for large-scale solar energy storage. Ideal for commercial and industrial systems, it offers high energy density, long lifespan, and seamless compatibility with hybrid inverters." },

  { id: "batt-lpbf48150", name: "Felicity LPBF48150 – 48V 150Ah 7.2KW Wall-Mount Lithium Battery", category: "Batteries", vendor: "SteadFlow Energies", price: 1670000, originalPrice: 1930000, rating: 4.5, stock: 10,
    images: ["Felicity LPBF48150 Battery", "Felicity LPBF48150 Battery02", "Felicity LPBF48150 Battery03"],
    features: ["48V 150Ah LiFePO₄ (Lithium Iron Phosphate) battery.", "Wall-mount design for space-saving installation.", "Over 6,000 charge cycles at 80% DoD.", "Built-in smart BMS (Battery Management System).", "Compatible with most hybrid inverters.", "Maintenance-free, safe, and efficient."],
    description: "The Felicity LPBF48150 is a high-capacity 48V 150Ah lithium battery designed for residential and commercial solar energy storage. With a sleek wall-mount design and long cycle life, it's perfect for reliable off-grid or hybrid power systems." },

  { id: "batt-gel12v200ah", name: "Felicitysolar G12V200AH Gel Battery – 12V 200Ah Deep Cycle", category: "Batteries", vendor: "SteadFlow Energies", price: 354000, originalPrice: 385000, rating: 4.5, stock: 10,
    images: ["Felicitysolar G12V200AH Battery", "Felicitysolar G12V200AH Battery02", "Felicitysolar G12V200AH Battery03"],
    features: ["12V, 200Ah (C10 rated) deep cycle battery.", "Sealed VRLA (valve-regulated lead-acid) gel design.", "Maintenance-free, spill-proof, and leak-proof.", "Optimized for daily cycling in solar power systems.", "Long service life with deep discharge protection.", "Wide temperature tolerance and stable performance.", "Reinforced ABS casing for enhanced durability.", "Suitable for inverter, UPS, telecom, and solar uses."],
    description: "The Felicitysolar G12V200AH (10HR) is a premium 12V 200Ah deep cycle gel battery designed for solar energy storage systems. Built with sealed VRLA gel technology, it offers maintenance-free operation, excellent deep discharge recovery, and long cycle life." },

  { id: "batt-lpbf48100m", name: "Felicity Battery LPBF48100-M 5kW", category: "Batteries", vendor: "SteadFlow Energies", price: 1500000, originalPrice: 1678000, rating: 4.5, stock: 10,
    images: ["Felicity Battery LPBF48100", "Felicity Battery LPBF4810002", "Felicity Battery LPBF4810003"],
    features: ["5kWh (48V, 100Ah) capacity.", "LiFePO₄ chemistry – safe and durable.", "6000+ charge/discharge cycles.", "Built-in BMS protection.", "High efficiency (>95%).", "Fast charging support.", "Compact and lightweight.", "Inverter compatible.", "Maintenance-free."],
    description: "The Felicity LPBF48100-M is a high-performance 48V 100Ah lithium iron phosphate (LiFePO₄) battery, offering 5kWh of reliable energy storage. Designed for solar and backup power systems, it features long cycle life, deep discharge support, and fast charging." },

  // ---- Inverters ----
  { id: "inv-ivem12kw", name: "IVEM Series 12kW Off-Grid Solar Inverter", category: "Inverters", vendor: "SteadFlow Energies", price: 1440100, originalPrice: 1830000, rating: 4.5, stock: 10,
    images: ["IVEM Series 12kW Off-Grid Solar Inverter", "IVEM Series 12kW Off-Grid Solar Inverter02", "IVEM Series 12kW Off-Grid Solar Inverter03"],
    features: ["12kW high-power output for residential and commercial solar systems.", "Dual MPPT solar inputs (27A + 27A) supporting up to 15kW solar capacity.", "Parallel operation up to 6 units for expandable power systems.", "Built-in MPPT solar charge controller for efficient solar energy conversion.", "Wi-Fi monitoring for real-time system tracking via mobile devices.", "Compatible with grid or generator power for reliable backup.", "Advanced protection system – overload, over-temperature, and short-circuit.", "Lithium battery activation support.", "Auto restart & cold start function.", "Can operate with or without battery."],
    description: "The IVEM Series 12kW Off-Grid Solar Inverter by Felicity Solar is a powerful and efficient energy solution designed for homes, offices, and commercial solar systems, with dual MPPT solar inputs supporting up to 15kW of solar panels and WiFi monitoring for real-time performance tracking." },

  { id: "inv-ai100-8048", name: "Felicity All-in-One Solar System 8kW / 48V (AI100-8048, without batteries)", category: "Inverters", vendor: "SteadFlow Energies", price: 1765000, originalPrice: 1900000, rating: 4.5, stock: 10,
    images: ["Felicity All-in-One Solar System 8kW", "Felicity All-in-One Solar System 8kW02", "Felicity All-in-One Solar System 8kW03"],
    features: ["8kW rated power, 48V system voltage.", "Integrated MPPT solar charge controller (up to 8000W solar input).", "Built-in LiFePO4 lithium battery support (modular & expandable).", "Pure sine wave inverter with advanced DSP control.", "LCD smart display for real-time monitoring.", "Compact, vertical design for space-saving installation.", "Supports solar, grid, and generator input.", "Built-in safety features (overload, over-temp, short circuit protection)."],
    description: "The Felicity AI100-8048 is a powerful 8kW / 48V all-in-one solar system that combines a pure sine wave inverter, MPPT charge controller, and high-capacity lithium battery support in one sleek, stackable unit — designed for fast deployment in homes, offices, and small commercial setups across Nigeria." },

  { id: "inv-ivgm8klp2g1-hi", name: "Felicity IVGM 8KLP2G1 Inverter 8kVA", category: "Inverters", vendor: "SteadFlow Energies", price: 1622500, originalPrice: 1850000, rating: 4.5, stock: 10,
    images: ["Felicity IVGM 8KLP2G1", "Felicity IVGM 8KLP2G1 02", "Felicity IVGM 8KLP2G1 03"],
    features: ["Pure sine wave output (8kVA, 48V).", "Supports solar, grid, and generator input.", "MPPT solar charge controller (max efficiency ≥98%).", "Advanced DSP control technology.", "Wi-Fi/GPRS remote monitoring (optional).", "Intelligent battery management.", "LCD display with easy configuration.", "Overload, short circuit, and battery protection."],
    description: "The Felicity IVGM 8KLP2G1 is a high-performance 8kVA/48V solar hybrid inverter designed for reliable off-grid and backup power solutions, supporting both solar and grid input with seamless power switching and smart energy management." },

  { id: "inv-ivgm8klp2g1-lo", name: "Felicity Hybrid Inverter IVGM8KLP2G1 8kVA", category: "Inverters", vendor: "SteadFlow Energies", price: 1070000, originalPrice: 1230000, rating: 4.5, stock: 10,
    images: ["Felicity Hybrid Inverter IVGM8KLP2G1 8kVA", "Felicity Hybrid Inverter IVGM8KLP2G1 8kVA02", "Felicity Hybrid Inverter IVGM8KLP2G1 8kVA03"],
    features: ["8kVA / 8kW hybrid inverter.", "Dual MPPT solar input (max. 12kW PV input).", "Wide MPPT voltage range: up to 500V DC.", "Built-in Wi-Fi and LCD touchscreen display.", "Supports lithium and lead-acid batteries.", "Pure sine wave output (single/split-phase).", "High inverter efficiency (≥95%).", "MPPT efficiency ≥99%.", "IP65-rated for outdoor use.", "Intelligent protection: over/under voltage, short circuit, overload, RCD, temperature."],
    description: "NOTE FROM CLAUDE: this listing appears in your source list a second time under a different name and price than 'Felicity IVGM 8KLP2G1 Inverter 8kVA' above — please confirm with your supplier which price is correct, or whether these are genuinely two different product variants, before publishing both. The FELICITY IVGM8KLP2G1 is an 8kVA (~8.8kW) hybrid inverter designed for residential and light commercial solar setups, integrating inverter, solar charger, and battery charger capabilities with smart WiFi monitoring." },

  { id: "inv-ivem6048", name: "Felicity IVEM6048 – 6kVA Hybrid Inverter (48V)", category: "Inverters", vendor: "SteadFlow Energies", price: 717000, originalPrice: 750000, rating: 4.5, stock: 10,
    images: ["Felicity IVEM6048 Inverter", "Felicity IVEM6048 Inverter02", "Felicity IVEM6048 Inverter03"],
    features: ["Pure sine wave 6kVA output – safe for all electronics.", "Built-in MPPT solar charge controller (up to 120A).", "Supports lithium, GEL, and AGM batteries.", "Wide 90–280V AC input for grid flexibility.", "LCD screen with real-time monitoring and settings.", "Auto-restart, overload, surge, and short-circuit protection."],
    description: "The Felicity IVEM6048 is a high-efficiency 6kVA hybrid inverter built for uninterrupted performance in homes and small businesses, delivering clean, stable energy with advanced solar and battery integration." },

  { id: "inv-ivps10048", name: "Felicity IVPS10048 – 10kVA Pure Sine Wave Inverter (48V)", category: "Inverters", vendor: "SteadFlow Energies", price: 1385000, originalPrice: 1500000, rating: 4.5, stock: 10,
    images: ["Felicity IVPS10048 – 10kVA Pure Sine Wave Inverter (48V)", "Felicity IVPS10048 – 10kVA Pure Sine Wave Inverter (48V)02", "Felicity IVPS10048 – 10kVA Pure Sine Wave Inverter (48V)03"],
    features: ["10kVA pure sine wave output for clean power delivery.", "48V DC input system with reliable power conversion.", "Fast switch-over between grid and battery.", "Supports deep-cycle, AGM, and lithium batteries.", "LCD display for monitoring system status.", "Built-in protections: overload, short circuit, over-temp."],
    description: "The Felicity IVPS10048 is a robust 10kVA pure sine wave inverter designed for stable, uninterrupted power in homes, offices, and industrial setups, delivering clean energy output ideal for sensitive electronics and solar systems." },

  { id: "inv-ivem3048lv", name: "Felicity IVEM3048-LV – 3kVA Hybrid Inverter (48V, Low Voltage)", category: "Inverters", vendor: "SteadFlow Energies", price: 554000, originalPrice: 620000, rating: 4.5, stock: 10,
    images: ["Felicity IVEM3048-LV – 3kVA Hybrid Inverter (48V, Low Voltage)", "Felicity IVEM3048-LV – 3kVA Hybrid Inverter (48V, Low Voltage)02", "Felicity IVEM3048-LV – 3kVA Hybrid Inverter (48V, Low Voltage)03"],
    features: ["3kVA pure sine wave output for stable, clean power.", "48V low-voltage system – safer and energy-efficient.", "60A MPPT solar charge controller built-in.", "Works with lithium, AGM, and GEL batteries.", "Wide 90–280V AC input range with grid/solar priority.", "Multiple layers of protection (overload, surge, short circuit).", "Smart LCD interface for real-time monitoring."],
    description: "The Felicity IVEM3048-LV is a smart 3kVA hybrid inverter built for efficiency, safety, and performance in low-voltage solar setups, combining clean energy conversion with intelligent battery management." },

  { id: "inv-ivem8048", name: "Felicity IVEM8048 – 8kVA Hybrid Inverter (48V)", category: "Inverters", vendor: "SteadFlow Energies", price: 1325000, originalPrice: 1450000, rating: 4.5, stock: 10,
    images: ["Felicity IVEM8048 – 8kVA Hybrid Inverter (48V)", "Felicity IVEM8048 – 8kVA Hybrid Inverter (48V)02", "Felicity IVEM8048 – 8kVA Hybrid Inverter (48V)03"],
    features: ["8kVA pure sine wave output for stable power.", "Built-in 120A MPPT solar charge controller.", "Wide input voltage range (90–280V AC).", "Supports lithium, GEL, AGM batteries.", "LCD display for system monitoring.", "Intelligent protections (overload, surge, short circuit).", "AC bypass charging function."],
    description: "The Felicity IVEM8048 is a reliable 8kVA hybrid inverter designed for efficient solar energy usage in homes, offices, and small businesses, combining inverter, MPPT solar charger, and AC charger in one compact unit." },

  { id: "inv-ivpm7548", name: "Felicity IVPM7548 Hybrid Inverter (7.5kVA / 48V)", category: "Inverters", vendor: "SteadFlow Energies", price: 1207600, originalPrice: 1320000, rating: 4.5, stock: 10,
    images: ["Felicity IVPM7548 Hybrid Inverter (7.5kVA  48V)", "Felicity IVPM7548 Hybrid Inverter (7.5kVA  48V)02", "Felicity IVPM7548 Hybrid Inverter (7.5kVA  48V)03"],
    features: ["Pure sine wave output – safe for sensitive electronics.", "120A MPPT charge controller with lithium battery wake-up.", "Wide AC input range (90–280V) with grid or battery priority.", "Intelligent protection: overload, surge, thermal, short circuit.", "Bypass charging – AC charging supported even when off."],
    description: "The Felicity IVPM7548 is a high-performance 7.5kVA pure sine wave hybrid inverter with a 120A MPPT solar charge controller, designed for efficient solar energy conversion and backup in homes, businesses, and industrial setups." },

  { id: "inv-ivgm50khp3g1", name: "Felicity Inverter IVGM 50KHP3G01 50kW", category: "Inverters", vendor: "SteadFlow Energies", price: 8040000, originalPrice: 8600000, rating: 4.5, stock: 10,
    images: ["Felicity Inverter IVGM 50KHP3G01 50kW", "Felicity Inverter IVGM 50KHP3G01 50kW02", "Felicity Inverter IVGM 50KHP3G01 50kW03"],
    features: ["50kW hybrid inverter – ideal for commercial and industrial use.", "Three-phase output – stable power for heavy loads.", "MPPT technology – high solar efficiency.", "Battery support – compatible with lithium and lead-acid.", "On/off-grid switching – seamless power transfer.", "Smart monitoring – remote access via Wi-Fi.", "Full protection – overload, short circuit, and more."],
    description: "The FELICITY IVGM 50KHP3G1 is a powerful 50kW hybrid inverter designed for commercial and industrial energy systems, supporting three-phase power, solar PV, battery storage, and grid input with seamless switching between on-grid and off-grid modes." },

  // ---- Charge Controllers ----
  { id: "charge-sccm6048", name: "Felicity SCCM 6048 – 60A 48V MPPT Solar Charge Controller", category: "Charge Controllers", vendor: "SteadFlow Energies", price: 198300, originalPrice: 270000, rating: 4.7, stock: 10,
    images: ["Felicity SCCM 6048 – 60A 48V MPPT Solar Charge Controller", "Felicity SCCM 6048 – 60A 48V MPPT Solar Charge Controller02", "Felicity SCCM 6048 – 60A 48V MPPT Solar Charge Controller03"],
    features: ["60A MPPT controller with 48V system support.", "Advanced MPPT tracking for up to 99% efficiency.", "Real-time LCD display with status indicators.", "Multiple protections: overcharge, reverse polarity, short circuit.", "Compatible with lithium and lead-acid batteries.", "Wall-mount design with clean, modern finish."],
    description: "The Felicity SCCM 6048 is a high-efficiency 60A MPPT solar charge controller designed for 48V battery systems, ensuring maximum power harvesting from solar panels with intelligent protection and real-time monitoring." },

  { id: "charge-sccm12048ii", name: "Charge Controller SCCM12048-II 120A MPPT", category: "Charge Controllers", vendor: "SteadFlow Energies", price: 324000, originalPrice: 390000, rating: 4.7, stock: 10,
    images: ["Charge Controller SCCM12048-II 120A MPPT", "Charge Controller SCCM12048-II 120A MPPT02", "Charge Controller SCCM12048-II 120A MPPT03"],
    features: ["120A high-capacity MPPT solar charge controller.", "Auto voltage detection: 12V / 24V / 48V.", "MPPT efficiency up to 98%.", "Boosts solar charging by 25–30%.", "Compatible with lithium, AGM, gel, and flooded batteries.", "LCD display with intelligent control.", "Communication support (MODBUS/SNMP)."],
    description: "A high-performance MPPT solar charge controller offering intelligent charging for 12V, 24V, or 48V battery systems, maximizing solar power efficiency and delivering reliable, smart battery charging with built-in communication capabilities." },

  // ---- Street Lights ----
  { id: "light-f2-120w", name: "Felicity F2-120W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 370660, originalPrice: 417000, rating: 4.5, stock: 10,
    images: ["Felicity F2-120W All-in-One Solar Street Light", "Felicity F2-120W All-in-One Solar Street Light02", "Felicity F2-120W All-in-One Solar Street Light03"],
    features: ["120W ultra-bright LED for wide-area illumination.", "Intelligent motion and light sensors for energy saving.", "High-capacity lithium battery with efficient solar charging.", "IP65 waterproof and heat-resistant casing.", "Auto dusk-to-dawn operation.", "Tool-free and easy installation, no cabling required."],
    description: "The Felicity F2-120W All-in-One Solar Street Light is a powerful and intelligent lighting system ideal for highways, estates, public areas, and large compounds, combining solar panel, LED light, lithium battery, and smart controller for zero electricity bills." },

  { id: "light-p3-80w", name: "Felicity P3-80W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 226220, originalPrice: 298000, rating: 4.5, stock: 10,
    images: ["Felicity P3-80W All-in-One Solar Street Light", "Felicity P3-80W All-in-One Solar Street Light02", "Felicity P3-80W All-in-One Solar Street Light03"],
    features: ["80W high-lumen LED for broad coverage.", "Smart motion and light sensor for optimized energy usage.", "Long-lasting lithium battery with fast solar charging.", "IP65-rated waterproof and heat-resistant body.", "Automatic dusk-to-dawn lighting.", "Quick, wire-free installation."],
    description: "The Felicity P3-80W All-in-One Solar Street Light is built for high-efficiency outdoor lighting in estates, streets, schools, and commercial areas, integrating solar panel, LED lamp, lithium battery, and smart controller in one sleek unit." },

  { id: "light-p3-60w", name: "Felicity P3-60W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 188500, originalPrice: 215000, rating: 4.5, stock: 10,
    images: ["Felicity P3-60W All-in-One Solar Street Light", "Felicity P3-60W All-in-One Solar Street Light02", "Felicity P3-60W All-in-One Solar Street Light03"],
    features: ["60W powerful LED for bright and consistent lighting.", "Smart motion and light sensor for automatic control.", "High-capacity lithium battery with fast solar charging.", "IP65 waterproof and heat-resistant casing.", "Dusk-to-dawn automatic lighting.", "Tool-free, easy installation with no wiring."],
    description: "The Felicity P3-60W All-in-One Solar Street Light is a modern, energy-saving lighting solution suitable for streets, estates, and community spaces, featuring an all-in-one design with enhanced brightness and smart control technology." },

  { id: "light-p2-80w", name: "The Felicity P2-80W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 279780, originalPrice: 322000, rating: 4.5, stock: 10,
    images: ["The Felicity P2-80W All-in-One Solar Street Light", "The Felicity P2-80W All-in-One Solar Street Light02", "The Felicity P2-80W All-in-One Solar Street Light03"],
    features: ["80W high-lumen LED for wide area illumination.", "Intelligent motion and light sensor for energy saving.", "Durable lithium battery with fast solar charging.", "IP65 waterproof and weather-resistant.", "Auto dusk-to-dawn lighting control.", "Simple, wire-free installation."],
    description: "The Felicity P2-80W All-in-One Solar Street Light delivers powerful and energy-efficient lighting for streets, estates, schools, and outdoor spaces, featuring an integrated design combining solar panel, LED lamp, lithium battery, and smart controller." },

  { id: "light-p2-60w", name: "Felicity P2-60W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 220280, originalPrice: 292000, rating: 4.5, stock: 10,
    images: ["Felicity P2-60W All-in-One Solar Street Light", "Felicity P2-60W All-in-One Solar Street Light02", "Felicity P2-60W All-in-One Solar Street Light03"],
    features: ["60W high-brightness LED for clear night visibility.", "Intelligent motion and light sensor for optimized energy use.", "Long-life lithium battery with fast solar charging.", "IP65 waterproof and dustproof design.", "Automatic on/off operation.", "Easy to install – no cables or trenching required."],
    description: "The Felicity P2-60W All-in-One Solar Street Light is designed for reliable outdoor lighting in residential areas, walkways, and small commercial spaces, integrating a solar panel, LED light, lithium battery, and smart controller in one sleek unit." },

  { id: "light-p2-40w", name: "Felicity P2-40W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 196470, originalPrice: 251000, rating: 4.5, stock: 10,
    images: ["Felicity P2-40W All-in-One Solar Street Light", "Felicity P2-40W All-in-One Solar Street Light02", "Felicity P2-40W All-in-One Solar Street Light03"],
    features: ["40W high-efficiency LED lighting.", "Built-in lithium battery with intelligent charging.", "Motion and light sensor for energy saving.", "Durable, weather-resistant design (IP65).", "Automatic on/off functionality.", "Quick and easy installation without wiring."],
    description: "The Felicity P2-40W All-in-One Solar Street Light is a compact and efficient lighting solution ideal for residential streets, small estates, and security posts, combining a solar panel, LED lamp, lithium battery, and controller in one integrated unit." },

  { id: "light-d2-120w", name: "Felicity D2-120W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 445110, originalPrice: 499000, rating: 4.5, stock: 10,
    images: ["Felicity D2-120W All-in-One Solar Street Light", "Felicity D2-120W All-in-One Solar Street Light02", "Felicity D2-120W All-in-One Solar Street Light03"],
    features: ["120W ultra-bright LED with wide-angle illumination.", "Intelligent motion and light sensor for power efficiency.", "Long-lasting lithium battery with fast solar charging.", "All-weather design (IP65 waterproof).", "Automatic dusk-to-dawn operation.", "Easy and cable-free installation."],
    description: "The Felicity D2-120W All-in-One Solar Street Light offers high-performance lighting for streets, estates, and commercial areas, combining solar panel, LED lamp, lithium battery, and smart controller into a single, easy-to-install unit with zero running cost." },

  { id: "light-d2-100w", name: "Felicity D2-100W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 420360, originalPrice: 484000, rating: 4.5, stock: 10,
    images: ["Felicity D2-100W All-in-One Solar Street Light", "Felicity D2-100W All-in-One Solar Street Light02", "Felicity D2-100W All-in-One Solar Street Light03"],
    features: ["100W high-lumen LED light for wide coverage.", "Long-lasting lithium battery with fast charging.", "Intelligent light and motion sensor.", "IP65 waterproof and heat-resistant design.", "Automatic day/night operation.", "Hassle-free installation, no cables required."],
    description: "The Felicity D2-100W All-in-One Solar Street Light is a reliable, eco-friendly lighting solution ideal for roads, compounds, schools, and public areas, integrating a high-efficiency solar panel, LED lamp, lithium battery, and smart controller in one compact unit." },

  { id: "light-d2-80w", name: "Felicity D2-80W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 321260, originalPrice: 394000, rating: 4.5, stock: 10,
    images: ["Felicity D2-80W All-in-One Solar Street Light", "Felicity D2-80W All-in-One Solar Street Light02", "Felicity D2-80W All-in-One Solar Street Light03"],
    features: ["80W high-brightness LED with long lifespan.", "Built-in lithium battery with intelligent charging.", "Motion sensor for energy saving.", "Weatherproof and durable (IP65 rated).", "Auto on/off with dusk-to-dawn sensor.", "Easy installation with no wiring needed."],
    description: "The Felicity D2-80W All-in-One Solar Street Light is a powerful, energy-efficient outdoor lighting solution designed for streets, estates, parking lots, and public spaces, combining solar panel, LED light, lithium battery, and controller into one compact system." },

  { id: "light-d2-60w", name: "Felicity D2-60W All-in-One Solar Street Light", category: "Street Lights", vendor: "SteadFlow Energies", price: 343040, originalPrice: 388000, rating: 4.5, stock: 10,
    images: ["Felicity D2-60W All-in-One Solar Street Light", "Felicity D2-60W All-in-One Solar Street Light02", "Felicity D2-60W All-in-One Solar Street Light03"],
    features: ["Power output: 60W LED with focused brightness for medium coverage.", "Solar panel: built-in monocrystalline panel for fast energy conversion.", "Battery: LiFePO₄ battery (approx. 40Ah @ 12V) with long cycle life.", "Lighting time: 10–12 hours full brightness; 2 days backup in energy-saving mode.", "Charging time: 6–8 hours in direct sunlight.", "Smart control: motion sensor with automatic brightness adjustment.", "Protection: IP65-rated waterproof and heat-resistant casing.", "Mounting height: ideal for 4–6 meter poles."],
    description: "The Felicity D2-60W All-in-One Solar Street Light is a compact and efficient solar lighting system designed for residential streets, compounds, rural roads, and small commercial spaces — an easy-to-install, waterproof unit combining LED lamp, solar panel, LiFePO₄ battery, and intelligent motion sensor." }
];

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);
}

function priceHTML(p) {
  if (p.originalPrice && p.originalPrice > p.price) {
    const pct = Math.round((1 - p.price / p.originalPrice) * 100);
    return `
      <div class="price-row">
        <span class="price-now">${formatNaira(p.price)}</span>
        <span class="price-original">${formatNaira(p.originalPrice)}</span>
      </div>
      <div class="discount-tag small" style="color:var(--alert-500); font-weight:600;">${pct}% off</div>`;
  }
  return `<div class="price-row"><span class="price-now no-discount">${formatNaira(p.price)}</span></div>`;
}

function discountBadgeHTML(p) {
  if (p.originalPrice && p.originalPrice > p.price) {
    const pct = Math.round((1 - p.price / p.originalPrice) * 100);
    return `<span class="discount-badge">-${pct}%</span>`;
  }
  return '';
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

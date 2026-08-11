// SteadFlow — demo installer directory data
// Once installer accounts are real (Phase 2), this gets replaced by a Supabase query
// against an `installers` table instead of this hardcoded list.

const INSTALLERS = [
  {
    id: 'INS-00027',
    name: 'Chinedu Okafor',
    title: 'Solar PV Installation Specialist',
    location: 'Lagos, Nigeria',
    serviceAreas: ['Lagos Mainland', 'Ikeja', 'Ikotun', 'Lekki'],
    experienceYears: 5,
    specializations: ['Residential Solar', 'SME Systems', 'Lithium Battery Systems'],
    verification: 'certified', // verified | certified | pro
    score: 94,
    summary: 'Chinedu is a renewable energy professional specializing in solar PV systems, hybrid inverters, lithium battery storage, and SME energy solutions.',
    bio: 'Chinedu has over five years of experience designing and installing solar systems for commercial customers across Lagos, with a focus on SME installations that need to run refrigeration and POS equipment reliably through the day.',
    workHistory: [
      { role: 'Solar Installation Technician', period: '2021–Present', desc: 'Leads residential and SME solar installations, from site assessment through commissioning.' },
      { role: 'Electrical Technician', period: '2018–2021', desc: 'Handled electrical wiring and safety compliance for commercial buildings.' },
    ],
    certifications: ['Solar PV Installation Certification', 'Electrical Installation Certification', 'SteadFlow Certification'],
    portfolio: [
      { title: '5kW SME Solar Installation', location: 'Ikotun, Lagos', system: '5.5kW solar PV, 5kW inverter, 10kWh lithium battery' },
      { title: '3kW Shop Installation', location: 'Ikeja, Lagos', system: '3kW solar PV, 3kVA inverter, 5kWh battery' },
    ],
  },
  {
    id: 'INS-00031',
    name: 'Emeka Nwosu',
    title: 'Renewable Energy Technician',
    location: 'Lagos, Nigeria',
    serviceAreas: ['Ikeja', 'Agege', 'Oshodi'],
    experienceYears: 3,
    specializations: ['SME Systems', 'Solar Pumps'],
    verification: 'verified',
    score: 81,
    summary: 'Emeka focuses on SME solar installs and solar water pump systems for small businesses and light industry.',
    bio: 'Emeka trained as an electrical technician before specializing in solar, and has completed installations for retail shops and small workshops across Lagos.',
    workHistory: [
      { role: 'Solar Installation Technician', period: '2022–Present', desc: 'Handles SME solar installs and solar pump systems.' },
    ],
    certifications: ['Solar PV Installation Certification', 'SteadFlow Certification'],
    portfolio: [
      { title: '3kW Retail Shop Installation', location: 'Oshodi, Lagos', system: '3kW solar PV, 3kVA inverter, 5kWh battery' },
    ],
  },
  {
    id: 'INS-00042',
    name: 'Amina Bello',
    title: 'Senior Solar Systems Engineer',
    location: 'Abuja, Nigeria',
    serviceAreas: ['Abuja Municipal', 'Gwarinpa', 'Kubwa'],
    experienceYears: 8,
    specializations: ['Enterprise Systems', 'SME Systems', 'Energy Auditing'],
    verification: 'pro',
    score: 97,
    summary: 'Amina designs and installs larger commercial solar systems and leads energy audits for multi-location businesses.',
    bio: 'With eight years in renewable energy, Amina has led installations for enterprise clients and regularly conducts energy audits to right-size systems before installation.',
    workHistory: [
      { role: 'Senior Solar Systems Engineer', period: '2019–Present', desc: 'Leads enterprise and multi-site solar projects, including energy audits.' },
      { role: 'Solar Installation Technician', period: '2016–2019', desc: 'Installed residential and SME solar systems.' },
    ],
    certifications: ['Solar PV Installation Certification', 'Energy Auditing Certification', 'Manufacturer Training (multiple)', 'SteadFlow Certification'],
    portfolio: [
      { title: '15kW Multi-Location System', location: 'Gwarinpa, Abuja', system: '15kW solar PV, 10kVA inverter, 20kWh battery' },
    ],
  },
];

function verificationLabel(level) {
  if (level === 'pro') return { emoji: '🟣', text: 'SteadFlow Pro' };
  if (level === 'certified') return { emoji: '🔵', text: 'SteadFlow Certified' };
  return { emoji: '🟢', text: 'SteadFlow Verified' };
}

function getInstallerById(id) {
  return INSTALLERS.find(i => i.id === id);
}

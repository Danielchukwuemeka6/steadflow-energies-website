// SteadFlow — Blog posts (placeholder content — edit freely)

const BLOG_POSTS = [
  {
    id: "5-signs-your-business-needs-solar-backup",
    title: "5 Signs Your Business Needs Solar Backup",
    date: "2026-06-12",
    author: "SteadFlow Team",
    excerpt: "From spoiled stock to lost trading hours, here's how to tell unreliable power is quietly costing you more than a solar system would.",
    body: "Unreliable power rarely shows up as one big cost — it shows up as dozens of small ones that are easy to miss until you add them up. Spoiled stock from fridge outages, staff standing idle during blackouts, fuel runs eating into the day, and customers who simply come back another time. If two or more of these sound familiar, it's usually a sign the numbers already favor switching, even before factoring in fuel savings over time."
  },
  {
    id: "steadflow-expands-to-abuja",
    title: "SteadFlow Expands Installer Network to Abuja",
    date: "2026-05-20",
    author: "SteadFlow Team",
    excerpt: "Our certified installer network now covers Abuja Municipal, Gwarinpa, and Kubwa, alongside our existing Lagos coverage.",
    body: "As demand from SMEs outside Lagos has grown, SteadFlow has certified its first wave of installers based in Abuja. This means faster response times and local expertise for businesses in Abuja Municipal, Gwarinpa, and Kubwa. The certification process mirrors what our Lagos installers go through — technical assessment, SteadFlow training, and ongoing performance review through our installer scoring system."
  },
  {
    id: "understanding-your-electricity-bill-vs-solar-payback",
    title: "Understanding Your Electricity Bill vs. Solar Payback",
    date: "2026-04-30",
    author: "SteadFlow Team",
    excerpt: "A simple framework for estimating how long a solar system takes to pay for itself, based on your current fuel and grid spend.",
    body: "The most common question we get from prospective customers is some version of 'how long until this pays for itself?' The honest answer depends on your current spend on fuel and grid electricity, your equipment load, and how many hours a day you're currently running on generator power. As a rough starting point, most SME installations we've completed pay back their cost within two to four years purely from fuel savings — before counting reduced spoilage or extra trading hours."
  }
];

function getBlogPostById(id) {
  return BLOG_POSTS.find(p => p.id === id) || null;
}

function formatBlogDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

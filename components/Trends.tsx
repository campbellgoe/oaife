// @ts-nocheck
// const trends = {"Technology": [ "Artificial Intelligence (AI) and Machine Learning (ML)", "Internet of Things (IoT)", "Blockchain Technology", "5G Connectivity", "Quantum Computing", "Cybersecurity Advancements", "Augmented Reality (AR) and Virtual Reality (VR)" ], "Healthcare": [ "Telemedicine and Remote Healthcare", "Wearable Health Devices", "Personalized Medicine", "CRISPR and Gene Editing", "Mental Health Awareness", "Digital Health Records" ], "Environment": [ "Sustainable Energy Solutions", "Electric Vehicles (EVs)", "Climate Change Initiatives", "Recycling and Waste Reduction", "Renewable Energy Adoption", "Water Conservation Efforts" ], "Business": [ "Remote Work and Hybrid Models", "E-commerce Expansion", "Gig Economy Growth", "Subscription-Based Services", "Diversity, Equity, and Inclusion (DEI)", "Corporate Social Responsibility (CSR)" ], "Finance": [ "Cryptocurrency and Digital Assets", "Decentralized Finance (DeFi)", "Robo-Advisors", "ESG Investing (Environmental, Social, and Governance)", "Financial Technology (Fintech) Innovation" ], "Lifestyle": [ "Minimalism and Decluttering", "Plant-Based Diets", "Fitness and Wellness Tech", "Digital Detox", "Home Renovation and DIY Projects", "Work-Life Balance Initiatives" ], "Education": [ "Online Learning Platforms", "Skill-Based Training", "Education Technology (EdTech)", "Micro-Credentials and Certifications", "Lifelong Learning" ], "Media and Entertainment": [ "Streaming Services Domination", "Interactive and Immersive Media", "Social Media Influencers", "Podcast Popularity", "Gaming Industry Growth", "Augmented Reality and Virtual Reality in Entertainment" ] }

const Trends = ({ onSelectTrend }) => {
  const trends = {
    "Technology": [
      "Artificial Intelligence (AI) and Machine Learning (ML)",
      "Internet of Things (IoT)",
      "Blockchain Technology",
      "5G Connectivity",
      "Quantum Computing",
      "Cybersecurity Advancements",
      "Augmented Reality (AR) and Virtual Reality (VR)"
    ],
    "Healthcare": [
      "Telemedicine and Remote Healthcare",
      "Wearable Health Devices",
      "Personalized Medicine",
      "CRISPR and Gene Editing",
      "Mental Health Awareness",
      "Digital Health Records"
    ],
    "Environment": [
      "Sustainable Energy Solutions",
      "Electric Vehicles (EVs)",
      "Climate Change Initiatives",
      "Recycling and Waste Reduction",
      "Renewable Energy Adoption",
      "Water Conservation Efforts"
    ],
    "Business": [
      "Remote Work and Hybrid Models",
      "E-commerce Expansion",
      "Gig Economy Growth",
      "Subscription-Based Services",
      "Diversity, Equity, and Inclusion (DEI)",
      "Corporate Social Responsibility (CSR)"
    ],
    "Finance": [
      "Cryptocurrency and Digital Assets",
      "Decentralized Finance (DeFi)",
      "Robo-Advisors",
      "ESG Investing (Environmental, Social, and Governance)",
      "Financial Technology (Fintech) Innovation"
    ],
    "Lifestyle": [
      "Minimalism and Decluttering",
      "Plant-Based Diets",
      "Fitness and Wellness Tech",
      "Digital Detox",
      "Home Renovation and DIY Projects",
      "Work-Life Balance Initiatives"
    ],
    "Education": [
      "Online Learning Platforms",
      "Skill-Based Training",
      "Education Technology (EdTech)",
      "Micro-Credentials and Certifications",
      "Lifelong Learning"
    ],
    "Media and Entertainment": [
      "Streaming Services Domination",
      "Interactive and Immersive Media",
      "Social Media Influencers",
      "Podcast Popularity",
      "Gaming Industry Growth",
      "Augmented Reality and Virtual Reality in Entertainment"
    ]
  };
return <div>
<h1>Trends</h1>
{Object.keys(trends).map((category) => (
  <div key={category} className="">
    <h2>{category}</h2>
    <ul className="flex justify-between">
      {trends[category].map((trend) => (
        <span  key={category+trend} className="m-2"><a className="underline cursor-pointer space-y-2 space-x-2" onClick={() => {
          onSelectTrend(trend)
        }}>{trend}</a>
      </span>))}
    </ul>
  </div>
))}
</div> 
}

export default Trends
import { InnovationArea, TechnologyDomain, Space } from '../types/spaces';
import { programmingLanguages } from './languages';

export const spaces: Space[] = [
  {
    id: 'programming',
    title: 'Programming Space',
    description: 'Explore programming languages, their features, and use cases',
    icon: '💻'
  },
  {
    id: 'innovation',
    title: 'Innovation Focus',
    description: 'Discover emerging technologies and innovation trends',
    icon: '🚀'
  },
  {
    id: 'technology',
    title: 'Technology Space',
    description: 'Deep dive into cutting-edge technology domains',
    icon: '🔮'
  }
];

export const innovationAreas: InnovationArea[] = [
  {
    id: 1,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Next-generation AI technologies reshaping industries',
    details: [
      'Generative AI: Tools like ChatGPT, Midjourney, and Sora (OpenAI\'s video model) are reshaping content creation, customer service, and education.',
      'AI Agents & Autonomous Workflows: Smart agents capable of completing complex tasks with minimal human intervention are emerging in enterprise automation.',
      'AI Safety & Alignment: Research on keeping AI ethical and aligned with human values is growing, particularly around large language models.'
    ]
  },
  {
    id: 2,
    title: 'Quantum Computing',
    description: 'Revolutionary computing paradigm',
    details: [
      'Quantum Advantage Goals: Companies like IBM, Google, and IonQ are working towards real-world use cases where quantum computers outperform classical ones.',
      'Post-Quantum Cryptography: With future quantum threats in mind, new encryption standards are being developed to secure current digital systems.'
    ]
  },
  {
    id: 3,
    title: 'Extended Reality (XR)',
    description: 'Immersive digital experiences',
    details: [
      'Spatial Computing: Apple Vision Pro and Meta Quest are driving innovation in how we interact with digital environments in mixed/augmented reality.',
      'Virtual Workspaces & Training: VR/AR are gaining ground in enterprise use cases like immersive onboarding and remote collaboration.'
    ]
  },
  {
    id: 4,
    title: 'GreenTech & Climate Tech',
    description: 'Innovations for a sustainable future',
    details: [
      'Sustainable Energy Storage: Innovations in battery tech (e.g., solid-state batteries) and energy efficiency solutions are expanding rapidly.',
      'Carbon Capture & Circular Tech: AI is helping model and optimize methods for carbon capture and circular economy solutions in manufacturing.'
    ]
  },
  {
    id: 5,
    title: 'Web3 & Decentralized Infrastructure',
    description: 'Decentralized control and transparency',
    details: [
      'Decentralized Identity (DID): Focus is shifting from just cryptocurrencies to decentralized control over personal data and credentials.',
      'Blockchain for Supply Chain & Finance: Transparency, security, and traceability in global supply chains and DeFi platforms are gaining traction.'
    ]
  },
  {
    id: 6,
    title: 'Biotech & HealthTech',
    description: 'Advancements in healthcare and biotechnology',
    details: [
      'AI-Powered Drug Discovery: Faster, cheaper development cycles are now possible with AI models predicting molecular behavior.',
      'Personalized Health Monitoring: Wearables with continuous glucose monitoring, heart health sensors, and AI diagnostics are advancing preventive medicine.'
    ]
  },
  {
    id: 7,
    title: 'Edge Computing & IoT',
    description: 'Enhancing connectivity and efficiency',
    details: [
      'AI at the Edge: Running models directly on mobile or embedded devices enhances privacy, responsiveness, and energy efficiency.',
      'Smart Infrastructure: Cities, factories, and homes are becoming more data-aware, with predictive maintenance and real-time optimization.'
    ]
  },
  {
    id: 8,
    title: 'Cybersecurity & Privacy',
    description: 'Protecting digital assets and privacy',
    details: [
      'AI-Driven Threat Detection: Autonomous systems detect and respond to anomalies faster than traditional security tools.',
      'Zero-Trust Architectures: Security models that continuously validate access, regardless of origin, are replacing perimeter-based systems.'
    ]
  },
  {
    id: 9,
    title: 'SpaceTech',
    description: 'Exploring and utilizing space',
    details: [
      'Reusable Rockets & Satellite Networks: SpaceX, Blue Origin, and others are making space launches cheaper, with satellites enabling global internet and Earth observation.',
      'Space Resource Utilization: Early R&D on asteroid mining and lunar infrastructure is underway.'
    ]
  },
  {
    id: 10,
    title: 'Human-AI Collaboration Tools',
    description: 'Enhancing productivity and creativity',
    details: [
      'Co-Creation Platforms: Tools that let humans collaborate with AI to design, build, and innovate are redefining productivity and creativity (e.g., GitHub Copilot, Notion AI, Cursor and many more).',
      'Voice, Image & Video AI Interfaces: Multimodal models that understand and respond across formats are breaking down barriers in communication and learning (e.g., ChatGPT, Gemini, Claude and many more).'
    ]
  }
];

export const technologyDomains: TechnologyDomain[] = [
  {
    id: 1,
    title: 'Generative AI & Autonomous Agents',
    bestFor: 'Enterprise: Automating document workflows, customer support, code generation\nStartups: Building AI copilots, chatbots, content creation tools\nR&D: Fine-tuning LLMs, language agents, AI ethics and alignment',
    learningCurve: 'Mid-to-high barrier; knowledge of ML, NLP, and Python needed\nTools like OpenAI API, LangChain, and Hugging Face ease entry',
    industryDemand: 'Huge across sectors: healthcare, legal, finance, education\nJobs in prompt engineering, AI product development, and AI ethics growing fast',
    investmentFactors: 'Massive VC funding (> $40B globally in 2024), especially in enterprise AI solutions\nInvestors prioritize verticalized AI startups with domain-specific value',
    keyFeatures: [
      'RAG (Retrieval-Augmented Generation)',
      'Autonomous agents (e.g., Auto-GPT)',
      'Multimodal LLMs',
      'Tools like OpenAI\'s GPT-4, Claude 3, Gemini 1.5, Mistral',
      'Open-source models like LLaMA 3'
    ]
  },
  {
    id: 2,
    title: 'Quantum Computing',
    bestFor: 'Enterprise: Long-term research investments, cryptography, logistics optimization\nStartups: Quantum simulation tools, quantum-as-a-service\nR&D: Error correction, quantum algorithms, hybrid quantum-classical systems',
    learningCurve: 'High; requires physics, math, quantum algorithms, and Qiskit or Cirq\nSpecialized career path with academic + industry crossovers',
    industryDemand: 'Niche but growing—banking, pharmaceuticals, energy, government\nRoles in quantum software, hardware, and physics-based ML',
    investmentFactors: 'High capital requirements, but growing corporate & government interest\nEurope, China, and the U.S. leading national quantum initiatives',
    keyFeatures: [
      'Quantum error correction',
      'Entanglement systems',
      'Hybrid models (e.g., TensorFlow Quantum)',
      'IBM Quantum',
      'Xanadu\'s PennyLane and Rigetti are key players'
    ]
  },
  {
    id: 3,
    title: 'Web3 & Decentralized Infrastructure',
    bestFor: 'Enterprise: Digital identity, traceable logistics, secure data sharing\nStartups: DApps, token-based economies, NFT use cases beyond art\nR&D: Layer-2 scaling, smart contract security, decentralized governance',
    learningCurve: 'Medium; Solidity, smart contracts, blockchain networks (Ethereum, Polkadot)\nFast-paced, decentralized learning ecosystems',
    industryDemand: 'Varies by region; fintech, gaming, and creative industries lead adoption\nBlockchain dev roles still in demand despite crypto market fluctuations',
    investmentFactors: 'Selective VC interest post-crypto winter; practical applications favored\nFocus is shifting from tokens to infrastructure and services',
    keyFeatures: [
      'Zero-knowledge proofs (zk-SNARKs)',
      'Layer 2 solutions (Optimism, Arbitrum)',
      'DAO tools',
      'Chainlink',
      'Filecoin and ENS are gaining traction in infrastructure'
    ]
  },
  {
    id: 4,
    title: 'GreenTech & Climate Tech',
    bestFor: 'Enterprise: Emissions tracking, ESG reporting, sustainable operations\nStartups: Smart energy, carbon capture, waste management platforms\nR&D: Battery chemistry, solar cell efficiency, carbon utilization',
    learningCurve: 'Moderate; depends on focus (data-driven or hardware/chemical)\nStrong intersection of environmental science and engineering',
    industryDemand: 'Surging; corporate ESG mandates and government policy push\nDemand for carbon analysts, cleantech engineers, and climate data scientists',
    investmentFactors: 'High impact + strong support from climate funds, EU Green Deal, IRA in the U.S.\nVC firms like Lowercarbon Capital and Breakthrough Energy backing climate innovation',
    keyFeatures: [
      'AI in climate modeling',
      'Smart grid control systems',
      'Solid-state batteries',
      'IoT + ML integration in renewable management systems'
    ]
  },
  {
    id: 5,
    title: 'Extended Reality (AR/VR/XR)',
    bestFor: 'Enterprise: Training simulations, product visualization, remote collaboration\nStartups: Virtual campuses, therapy tools, immersive e-learning\nR&D: Eye-tracking, spatial UX, brain-computer interface research',
    learningCurve: 'Medium; Unity, Unreal Engine, 3D modeling, some programming (C#, Python)\nCreative + technical skillset helpful',
    industryDemand: 'Strong in healthcare, manufacturing, defense, education\nCareer roles in immersive design, VR dev, and simulation architecture',
    investmentFactors: 'Growing with Meta, Apple, and enterprise XR ventures\nInvestors look for high-retention apps and real-world use',
    keyFeatures: [
      'Spatial computing (Apple Vision Pro)',
      'Passthrough AR',
      'VR therapy',
      'Interactivity and mobility-focused innovations'
    ]
  },
  {
    id: 6,
    title: 'AI for HealthTech & Biotech',
    bestFor: 'Enterprise: Diagnostic AI, hospital management, clinical research\nStartups: DNA analysis, wearable diagnostics, virtual clinical trials\nR&D: Protein folding, generative biology, personalized medicine',
    learningCurve: 'High; domain-specific knowledge + AI skills (bioinformatics, ML, medtech compliance)\nStrong interdisciplinary need',
    industryDemand: 'Exploding; especially post-pandemic and with the rise of preventive medicine\nRoles include health data engineers, AI/ML bioinformaticians, wearable tech developers',
    investmentFactors: 'Large healthcare VC and pharma support (e.g., Andreessen Horowitz Bio + Health)\nStrong M&A activity in medtech and diagnostics AI',
    keyFeatures: [
      'AI drug discovery (AlphaFold, BenevolentAI)',
      'Continuous monitoring (CGM, heart sensors)',
      'FDA-compliant machine learning pipelines'
    ]
  }
];
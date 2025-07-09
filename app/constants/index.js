const words = [
    { text: "Design", imgPath: "/images/ideas.svg" },
    { text: "Development", imgPath: "/images/concepts.svg" },
    { text: "SEO", imgPath: "/images/designs.svg" },
    { text: "Automations", imgPath: "/images/code.svg" },
    { text: "AI", imgPath: "/images/ideas.svg" },
    { text: "Strategy", imgPath: "/images/concepts.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 7, suffix: "+", label: "Happy Clients" },
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];

  const expCards = [
    {
      review: "As Co‑Founder and Lead Designer/Developer at Sole Media, I oversee all agency operations—from crafting custom web experiences and automations to managing SEO, email marketing, and ad campaigns—empowering our clients to grow and succeed online.",
      imgPath: "/images/exp1.webp",
      logoPath: "/images/logo1.png",
      title: "Co‑Founder & Lead Designer/Developer",
      date: "August  2024 - Present",
      responsibilities: [
        "Designed & coded a fully custom site, including animations and responsive layouts.",
        "Implemented oSEO best practices—boosting organic traffic by 50% in 6 months.",
        "Built email marketing flows & automated lead nurture sequences.",
        "Managed paid ads across Google and Facebook to generate qualified inquiries.",
      ],
    },
    {
      review: "Michael’s excellent problem-solving abilities, solid technical skills, and strong teamwork during his Software Engineering Internship. His contributions to development, debugging, performance testing, and API integration were instrumental to the success of our projects.",
      title: "Software Engineering Intern",
      date: "December 2023 – December 2024",
      responsibilities: [
        "Assisted in the development and debugging of software projects.",
        "Wrote code in JavaScript, React, and Python.",
        "Collaborated with senior developers to enhance system architecture.",
        "Conducted software performance testing and optimization.",
        "Gained hands-on experience in database management and API integration.",
      ],
    },
  ];

  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Idea to Execution",
      desc: "I turn your vision into a polished, high‑impact website—every detail covered, from wireframe to launch.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];

  const techStackIcons = [
    {
      name: "React & Next.js",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python & Flask",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Full Stack Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];

  const testimonials = [
    {
      name: "Mould & Restoration Co",
      mentions: "mouldandrestoration.com.au",
      review:
        "Michael designed our entire site and handled on‑page SEO. Within two weeks, inbound leads jumped 40%—all thanks to his eye for design, clean code and SEO expertise.",
      imgPath: "/images/client1.avif",
    },
    {
      name: "Quality Care Providers",
      mentions: "qualitycareproviders.com.au",
      review:
        "Working with Michael was seamless. He built a beautiful, accessible site, then boosted our organic traffic by 30% through his SEO and email‑automation work.",
      imgPath: "/images/client3.avif",
    },
    {
      name: "Eden International",
      mentions: "edeninternational.com.au",
      review:
        "Michael delivered a scalable Next.js build, nailed our SEO strategy and now we rank on page one for every major keyword.",
      imgPath: "/images/client2.webp",
    },
    {
      name: "Alera Activewear",
      mentions: "aleraactive.com",
      review:
        "From Shopify theme customizations to full email‑flow automations and ad management, Michael drove a 25% lift in sales in the first quarter. Highly recommend.",
      imgPath: "/images/client5.jpg",
    },
    {
      name: "MOR Events",
      mentions: "morevents.com.au",
      review:
        "Michael built our MOR Events site from scratch with Next.js, delivering a sleek, lightning‑fast single‑page experience.",
      imgPath: "/images/client4.jpg",
    },
    {
      name: "Social Sphere",
      mentions: "socialsphere.icu",
      review:
        "Social Sphere’s landing page is stunning thanks to Michael’s clean designs and on‑page SEO. Sign‑ups climbed 30% within two weeks of launch.",
      imgPath: "/images/client6.png",
    },
  ];

  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link: "https://www.instagram.com/michaelyoussefdev"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/michael-youssef-93625327a/"
    },
    {
      name: "github",
      imgPath: "/images/github.png",
      link: "https://github.com/michaelyoussef396"
    },
    {
      name: "medium",
      imgPath: "/images/medium.svg",
      link: "https://medium.com/@michaelyoussef396"
    }
  ];
  

export {
    words,
    counterItems,
    navLinks,
    abilities,
    expCards,
    techStackIcons,
    testimonials,
    socialImgs,
}
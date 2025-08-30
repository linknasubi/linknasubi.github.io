'use client';

import React from 'react';
import { ProfileIntroSection } from '../components/ProfileIntroSection';
import { FeaturedWorksSection } from '../components/FeaturedWorkSection';

type Lang = 'pt' | 'en';

interface SoftwareEngineerSectionProps {
  lang: Lang;
}


// NEW — Skills (baseado no seu CV)
const hardSkills = {
  programming: ['TypeScript', 'JavaScript (Node.js, React)', 'Java', 'Python (Django, Flask)', 'SQL'],
  frameworks: ['React', 'Next.js', 'Remix', 'Hydrogen', 'Express', 'NestJS', 'Flask', 'Django', 'Tailwind CSS', 'Spring Boot'],
  ecommerce: ['Shopify CLI', 'Liquid templates', 'UI extensions', 'Custom app development', 'CMS (WordPress, Contentful)'],
  tooling: ['Webpack', 'Vite', 'SASS/LESS', 'Google Analytics', 'GTM', 'Mailchimp', 'Klevu'],
  devops: ['Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI/CD', 'CI/CD pipelines', 'DigitalOcean', 'Prometheus', 'Grafana'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'],
  dataModeling: ['Star Schema', 'Snowflake Schema', 'Data migration (Salesforce & legacy)'],
};

const softSkills = {
  collaboration: ['Agile (Scrum/Kanban)', 'Cross-functional teamwork', 'Mentorship'],
  leadership: ['Team coordination', 'Architecture decision-making', 'Ownership of delivery cycles'],
  communication: ['Clear documentation', 'Async communication', 'Stakeholder alignment'],
  languages: ['Portuguese (Native)', 'English (Fluent)'],
};

// NEW — helpers rápidos (i18n básico do cabeçalho)
const skillsLabels = {
  pt: { skills: 'Skills', hard: 'Hard Skills', soft: 'Soft Skills',
        groups: {
          programming: 'Programação & Scripting',
          frameworks: 'Frameworks & Bibliotecas',
          ecommerce: 'eCommerce',
          tooling: 'Ferramentas & Analytics',
          devops: 'DevOps & Cloud',
          databases: 'Bancos de Dados',
          dataModeling: 'Modelagem & Arquitetura de Dados',
          collaboration: 'Colaboração',
          leadership: 'Liderança',
          communication: 'Comunicação',
          languages: 'Idiomas',
        } },
  en: { skills: 'Skills', hard: 'Hard Skills', soft: 'Soft Skills',
        groups: {
          programming: 'Programming & Scripting',
          frameworks: 'Frameworks & Libraries',
          ecommerce: 'eCommerce',
          tooling: 'Tooling & Analytics',
          devops: 'DevOps & Cloud',
          databases: 'Databases',
          dataModeling: 'Data Modeling & Architecture',
          collaboration: 'Collaboration',
          leadership: 'Leadership',
          communication: 'Communication',
          languages: 'Languages',
        } },
};



const timeline = [
    {
    img: "/software_engineer/linc-logo.png",
    alt: "LINC/UFPA",
    year: "2019 - 2020",
  },

    {
    img: "/software_engineer/serpro.png",
    alt: "SERPRO",
    year: "2021 - 2023",
  },

    {
    img: "/software_engineer/idev-logo.png",
    alt: "iDEV",
    year: "2023 - 2025",
  },

  {
    img: "/software_engineer/logo-podoclin.png",
    alt: "iDEV",
    year: "2024 - 2025",
  },
];

const aboutMePT = {
  intro: (
    <>
      <h1 className="text-5xl md:text-6xl font-serif font-extralight leading-tight mb-4">
        Sobre mim
      </h1>
      <p className="text-lg md:text-xl mb-4">
        Engenheiro de Software Sênior com mais de 5 anos de experiência em aplicações web escaláveis, sistemas cloud-native e pipelines de DevOps. Especialista em TypeScript, Node.js, React, GraphQL e Kubernetes. Lidero times ágeis, orquestro microserviços e entrego soluções robustas em ambientes dinâmicos.
      </p>
    </>
  ),
  rest: (
    <>
      <p className="mb-4">
        Atualmente, sou Líder Técnico e Co-Fundador na iDEV, onde projeto e desenvolvo produtos SaaS de ponta a ponta, incluindo arquitetura multi-tenant, sistema dinâmico de permissões e implantação automatizada utilizando GitHub Actions, Docker e Kubernetes. Já desenvolvi sistemas para negócios originados de comissões da OAB, soluções médicas e plataformas B2B.
      </p>

      <p className="mb-4">
        Atuei como full stack no SERPRO, desenvolvendo APIs, dashboards federais, autenticação segura e ETLs escaláveis para sistemas críticos, com práticas modernas de CI/CD.
      </p>
      <p>
        No LINC/UFPA, integrei pipelines de ML e desenvolvi backends modulares em Python (Flask, Django) e Java (Spring Boot), orquestrando desde model serving até exportação de dados em tempo real.
      </p>
    </>
  ),
};

const aboutMeEN = {
  intro: (
    <>
      <h1 className="text-5xl md:text-6xl font-serif font-extralight leading-tight mb-4">
        About Me
      </h1>
      <p className="text-lg md:text-xl mb-4">
        Senior Software Engineer with 5+ years of experience building scalable web apps, cloud-native systems, and DevOps pipelines. Specialist in TypeScript, Node.js, React, GraphQL, and Kubernetes. Proven track record in agile teams, microservices, and robust, production-grade solutions.
      </p>
    </>
  ),
  rest: (
    <>
    <p className="mb-4">
      I am currently the Technical Lead and Co-Founder at iDEV, where I design and develop SaaS products end-to-end, including multi-tenant architecture, dynamic permissioning, and automated deployment using GitHub Actions, Docker, and Kubernetes. I have developed systems for businesses originating from OAB commissions, medical solutions, and B2B platforms.
    </p>

      <p className="mb-4">
        At SERPRO, I worked as a full stack developer, building APIs, federal dashboards, secure authentication, and scalable ETLs for critical systems, following modern CI/CD best practices.
      </p>
      <p>
        At LINC/UFPA, I integrated ML pipelines and developed modular backends in Python (Flask, Django) and Java (Spring Boot), orchestrating model serving and real-time data exports.
      </p>
    </>
  ),
};

const featuredWorksPT = [
  {
    img: "/software_engineer/logo-podoclin.png",
    alt: "PodoClin",
    title: "PodoClin – SaaS para Clínicas de Podologia",
    period: "2024 - 2025",
    description:
      "Criação, arquitetura e liderança técnica da plataforma SaaS multi-tenant, incluindo motor de formulários dinâmicos, geração de PDFs, integrações (WhatsApp, Stripe), deploy Kubernetes e interfaces web/mobile responsivas.",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Kubernetes",
      "React Native",
      "Docker",
    ],
    caseStudy: {
      problem:
        "Clínicas de podologia enfrentavam dificuldades para gerenciar agendamentos, histórico clínico e comunicação com pacientes em uma única plataforma.",
      solution:
        "Desenvolvemos um SaaS multi-tenant com formulários dinâmicos, geração automática de PDFs, integrações com WhatsApp e Stripe, e deploy automatizado em Kubernetes.",
      tools: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Kubernetes",
        "React Native",
        "Docker",
        "GitHub Actions",
      ],
      testimonial: {
        quote:
          "Um sistema excelente, nunca mais tive rinite alérgica depois que comecei a usar o Podoclin! Ótimo sistema de agendamento e prontuário.",
        author: "Podólogas da Podoclin"
      },
    },
  },
{
  img: "/software_engineer/adv-mobile.png",
  alt: "Desenvolvimento de Sistemas Mobile",
  title: "Desenvolvimento Completo de Sistemas Mobile",
  period: "2023 - 2024",
  description:
    "Concepção e entrega de aplicativos mobile para Android e iOS utilizando frameworks multiplataforma, integrados a backends complexos, com sincronização de dados em tempo real e implantação multiambiente.",
  stack: [
    "React Native",
    "Node.js",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ],
  caseStudy: {
    problem:
      "As organizações precisavam de soluções mobile robustas, capazes de rodar perfeitamente em múltiplas plataformas e integrar recursos avançados como atualizações em tempo real, modo offline e conectividade com serviços de terceiros.",
    solution:
      "Desenvolvemos sistemas mobile multiplataforma utilizando React Native, garantindo desempenho próximo ao nativo e uma experiência de uso consistente entre dispositivos. Os serviços de backend foram orquestrados com Docker/Kubernetes, e pipelines de CI/CD possibilitaram lançamentos rápidos e confiáveis.",
    tools: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    testimonial: {
      quote: "Aplicativo excelente! Está atendendo todas as necessidades do projeto.",
      author: "Diretor de comissão da OAB"
    },

  },
},

  {
    img: "/software_engineer/serpro.png",
    alt: "APIs e Dashboards SERPRO",
    title: "SERPRO – APIs Federais & Dashboards",
    period: "2021 - 2023",
    description:
      "Construção e refatoração de APIs e dashboards críticos, autenticação segura, transformação de dados e microserviços RESTful, com automação de pipelines CI/CD.",
    stack: ["Node.js", "SQL Server", "REST", "Power BI", "CI/CD", "Agile"],
    caseStudy: {
      problem:
        "Necessidade de APIs seguras e dashboards federais capazes de lidar com grande volume de dados e integrações entre órgãos.",
      solution:
        "Implantamos microserviços RESTful escaláveis com autenticação forte, ETLs automatizados e dashboards otimizados com Power BI, integrados ao pipeline de CI/CD.",
      tools: [
        "Node.js",
        "SQL Server",
        "REST",
        "Power BI",
        "CI/CD",
        "Agile",
      ],
      testimonial: {
        quote: "Profissional extremamente dedicado e competente, conhecimento muito acima da média.",
        author: "Supervisor no SERPRO"
      },
    },
  },
  {
    img: "/software_engineer/linc-logo.png",
    alt: "Backend Modular ML",
    title: "LINC/UFPA – Backend Modular e ML",
    period: "2019 - 2020",
    description:
      "Desenvolvimento de sistemas modulares Python (Flask/Django), integração com Java Spring Boot, deploy Dockerizado e pipelines para servir modelos de ML.",
    stack: [
      "Python",
      "Flask",
      "Django",
      "Java",
      "Spring Boot",
      "Docker",
      "PostgreSQL",
    ],
    caseStudy: {
      problem:
        "O laboratório precisava padronizar a entrega de modelos de Machine Learning e facilitar a integração entre diferentes linguagens e frameworks.",
      solution:
        "Criamos um backend modular com Flask/Django, integração via API com Java Spring Boot, e pipelines para servir modelos de ML de forma estável e escalável.",
      tools: [
        "Python",
        "Flask",
        "Django",
        "Java",
        "Spring Boot",
        "Docker",
        "PostgreSQL",
      ],
      testimonial: {
        quote:
          "O desenvolvimento foi essencial para a publicação dos nossos artigos!",
        author: "Pesquisadores do LINC"
      },

    },
  },
];


const featuredWorksEN = [
  {
    img: "/software_engineer/logo-podoclin.png",
    alt: "PodoClin",
    title: "PodoClin – SaaS for Podiatry Clinics",
    period: "2024 - 2025",
    description:
      "Created, architected, and led the development of a multi-tenant SaaS platform featuring a dynamic form engine, PDF generation, WhatsApp/Mercado Pago integrations, Kubernetes deployment, and responsive web/mobile interfaces.",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Kubernetes",
      "React Native",
      "Docker",
    ],
    caseStudy: {
      problem:
        "Podiatry clinics struggled to centralize patient records, manage scheduling, and streamline communication in a single platform.",
      solution:
        "We developed a multi-tenant SaaS with dynamic form generation, automated PDF creation, WhatsApp and Mercado Pago integrations, and Kubernetes-based deployment.",
      tools: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Kubernetes",
        "React Native",
        "Docker",
        "GitHub Actions",
      ],
      testimonial: {
        quote:
          "An excellent system — I never had allergic rhinitis again after I started using Podoclin! Great scheduling and medical record system.",
        author: "Podiatrists at Podoclin"
      },

    },
  },
{
  img: "/software_engineer/adv-mobile.png",
  alt: "Mobile Systems Development",
  title: "End-to-End Mobile Systems Development",
  period: "2023 - 2024",
  description:
    "Designed and delivered mobile applications across Android and iOS using cross-platform frameworks, integrating with complex backends, real-time data sync, and multi-environment deployments.",
  stack: [
    "React Native",
    "Node.js",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ],
  caseStudy: {
    problem:
      "Organizations required robust mobile solutions capable of running seamlessly on multiple platforms, integrating advanced features such as real-time updates, offline mode, and third-party service connectivity.",
    solution:
      "We developed cross-platform mobile systems leveraging React Native, ensuring native-like performance and consistent UI/UX across devices. Backend services were orchestrated with Docker/Kubernetes, and CI/CD pipelines enabled rapid, reliable releases.",
    tools: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
testimonial: {
  quote: "Excellent app! It meets all the needs of the project.",
  author: "Director of the OAB Commission"
},
  },
},

  {
    img: "/software_engineer/serpro.png",
    alt: "SERPRO APIs & Dashboards",
    title: "SERPRO – Federal APIs & Dashboards",
    period: "2021 - 2023",
    description:
      "Built and refactored critical APIs and dashboards, implemented secure authentication, data transformation, and RESTful microservices, with automated CI/CD pipelines.",
    stack: [
      "Node.js",
      "SQL Server",
      "REST",
      "Power BI",
      "CI/CD",
      "Agile",
    ],
    caseStudy: {
      problem:
        "There was a need for secure APIs and federal dashboards capable of handling large data volumes and integrations across government agencies.",
      solution:
        "We implemented scalable RESTful microservices with strong authentication, automated ETLs, and optimized Power BI dashboards, fully integrated into the CI/CD pipeline.",
      tools: [
        "Node.js",
        "SQL Server",
        "REST",
        "Power BI",
        "CI/CD",
        "Agile",
      ],
testimonial: {
  quote: "Extremely dedicated and competent professional, with knowledge far above average.",
  author: "Supervisor at SERPRO"
},
    },
  },
  {
    img: "/software_engineer/linc-logo.png",
    alt: "Modular ML Backend",
    title: "LINC/UFPA – Modular Backend & ML",
    period: "2019-2020",
    description:
      "Developed modular backend systems in Python (Flask/Django), integrated with Java Spring Boot, Dockerized deployments, and pipelines for ML model serving.",
    stack: [
      "Python",
      "Flask",
      "Django",
      "Java",
      "Spring Boot",
      "Docker",
      "PostgreSQL",
    ],
    caseStudy: {
      problem:
        "The research lab needed a standardized way to deploy ML models and simplify integration between different languages and frameworks.",
      solution:
        "We built a modular backend using Flask/Django, integrated via APIs with Java Spring Boot, and implemented pipelines to serve ML models reliably and at scale.",
      tools: [
        "Python",
        "Flask",
        "Django",
        "Java",
        "Spring Boot",
        "Docker",
        "PostgreSQL",
      ],

testimonial: {
  quote:
    "The development was essential for the publication of our articles!",
  author: "Researchers at LINC"
},
    },
  },
];


type UIMap = Record<Lang, Record<string, string>>;

export default function SoftwareEngineerSection({ lang, UI }: { lang: Lang; UI: UIMap }) {
  const textContent = lang === 'pt' ? aboutMePT : aboutMeEN;
  const featuredWorks = lang === 'pt' ? featuredWorksPT : featuredWorksEN;
  const sectionTitle = lang === 'pt' ? "Trabalhos em Destaque" : "Featured Projects";
  const sectionSkills = lang === 'pt' ? skillsLabels.pt : skillsLabels.en;
  return (
    <>
      <ProfileIntroSection
        intro={textContent.intro}
        rest={textContent.rest}
        skills={{ labels: sectionSkills, hard: hardSkills, soft: softSkills }}
        profileImg="/profile_picture.png"
        profileAlt="Gabriel Aragão"
        timeline={timeline}
      />
      <FeaturedWorksSection
        title="Trabalhos em Destaque"
        works={featuredWorks}
        lang={lang}
        UI={UI}
      />
    </>
  );
}

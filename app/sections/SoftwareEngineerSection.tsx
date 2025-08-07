'use client';

import React from 'react';
import { ProfileIntroSection } from '../components/ProfileIntroSection';
import { FeaturedWorksSection } from '../components/FeaturedWorkSection';

type Lang = 'pt' | 'en';

interface SoftwareEngineerSectionProps {
  lang: Lang;
}

const timeline = [
  {
    img: "/img/timeline-idev.png",
    alt: "iDEV",
    year: "2024 - Atual",
  },
  {
    img: "/img/timeline-serpro.png",
    alt: "SERPRO",
    year: "2021 - 2024",
  },
  {
    img: "/img/timeline-linc.png",
    alt: "LINC/UFPA",
    year: "2019 - 2020",
  },
  {
    img: "/img/timeline-ufpa.png",
    alt: "UFPA",
    year: "2019 - Atual",
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
        Atualmente sou líder técnico e cofundador na iDEV, onde concebo e desenvolvo produtos SaaS de ponta a ponta, incluindo arquitetura multi-tenant, permissionamento dinâmico e automação de deploy com GitHub Actions, Docker e Kubernetes. Já desenvolvi sistemas para empresas como PotySoft (PDV Android), soluções médicas e plataformas B2B.
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
        Currently, I am the tech lead and co-founder at iDEV, designing and delivering SaaS products end-to-end, including multi-tenant architectures, dynamic permissions, and automated deployments using GitHub Actions, Docker, and Kubernetes. I have shipped systems for companies like PotySoft (Android POS), medical SaaS, and B2B platforms.
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
    img: "/img/highlight-podoclin.png",
    alt: "PodoClin",
    title: "PodoClin – SaaS para Clínicas de Podologia",
    period: "2022 - Atual",
    description:
      "Criação, arquitetura e liderança técnica da plataforma SaaS multi-tenant, incluindo motor de formulários dinâmicos, geração de PDFs, integrações (WhatsApp, Mercado Pago), deploy Kubernetes e interfaces web/mobile responsivas.",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Kubernetes",
      "React Native",
      "Docker",
    ],
  },
  {
    img: "/img/highlight-poty.png",
    alt: "PotySoft PDV",
    title: "PotySoft – PDV para Android e Web",
    period: "2024",
    description:
      "Desenvolvimento do sistema de ponto de venda para Android (React Native) e interface web, integração de automações fiscais e orquestração multi-ambiente via Docker/K8s.",
    stack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    img: "/img/highlight-serpro.png",
    alt: "APIs e Dashboards SERPRO",
    title: "SERPRO – APIs Federais & Dashboards",
    period: "2021 - 2023",
    description:
      "Construção e refatoração de APIs e dashboards críticos, autenticação segura, transformação de dados e microserviços RESTful, com automação de pipelines CI/CD.",
    stack: [
      "Node.js",
      "SQL Server",
      "REST",
      "Power BI",
      "CI/CD",
      "Agile",
    ],
  },
  {
    img: "/img/highlight-linc.png",
    alt: "Backend Modular ML",
    title: "LINC/UFPA – Backend Modular e ML",
    period: "2020",
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
  },
];

const featuredWorksEN = [
  {
    img: "/img/highlight-podoclin.png",
    alt: "PodoClin",
    title: "PodoClin – SaaS for Podiatry Clinics",
    period: "2022 - Present",
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
  },
  {
    img: "/img/highlight-poty.png",
    alt: "PotySoft POS",
    title: "PotySoft – Android & Web POS",
    period: "2024",
    description:
      "Developed POS systems for Android (React Native) and web interface, integrated fiscal automations, and orchestrated multi-environment deployments with Docker/K8s.",
    stack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    img: "/img/highlight-serpro.png",
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
  },
  {
    img: "/img/highlight-linc.png",
    alt: "Modular ML Backend",
    title: "LINC/UFPA – Modular Backend & ML",
    period: "2020",
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
  },
];

export default function SoftwareEngineerSection({ lang = 'pt' }: SoftwareEngineerSectionProps) {
  const textContent = lang === 'pt' ? aboutMePT : aboutMeEN;
  const featuredWorks = lang === 'pt' ? featuredWorksPT : featuredWorksEN;
  const sectionTitle = lang === 'pt' ? "Trabalhos em Destaque" : "Featured Projects";

  return (
    <>
      <ProfileIntroSection
        intro={textContent.intro}
        rest={textContent.rest}
        profileImg="/profile_picture.png"
        profileAlt="Gabriel Aragão"
        timeline={timeline}
      />
      <FeaturedWorksSection
        title={sectionTitle}
        works={featuredWorks}
      />
    </>
  );
}

'use client';

import React from 'react';
import { ProfileIntroSection } from '../components/ProfileIntroSection';
import { FeaturedWorksSection } from '../components/FeaturedWorkSection';


type Lang = 'pt' | 'en';

interface DataScienceSectionProps {
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
    year: "2023 - 2024",
  },
  {
    img: "/img/timeline-linc.png",
    alt: "LINC/UFPA",
    year: "2022 - 2023",
  },
  {
    img: "/img/timeline-ufpa.png",
    alt: "UFPA",
    year: "2019 - Atual",
  },
];

// Separe as partes do texto que vão em cada local
const aboutMePT = {
  intro: (
    <>
      <h1 className="text-5xl md:text-6xl font-serif font-extralight leading-tight mb-4">Sobre mim</h1>
      <p className="text-lg md:text-xl mb-4">
        Cientista da Computação pela Universidade Federal do Pará, fundador e arquiteto de soluções na iDEV. Atuo há mais de 4 anos em projetos de análise de dados, machine learning e engenharia de software, desenvolvendo soluções para empresas públicas e privadas.
      </p>
    </>
  ),
  rest: (
    <>
      <p className="mb-4">
        Já fui cientista de dados no SERPRO, onde trabalhei com inteligência de dados em larga escala, e pesquisador no LINC/UFPA, aplicando redes neurais e métodos de redução de dimensionalidade para problemas em biotecnologia e ciências da vida.
      </p>
      <p className="mb-4">
        Tenho experiência prática em pipelines de dados, arquitetura cloud (Kubernetes, Azure), desenvolvimento backend (Node.js, Python) e visualização (Power BI, React). Foco em soluções que conectam a complexidade dos dados ao valor de negócio, com entregas robustas e documentação clara.
      </p>
      <p>
        Atualmente, lidero a transformação analítica da iDEV, criando infraestruturas escaláveis, modelos de dados e automação inteligente para acelerar decisões baseadas em dados.
      </p>
    </>
  )
};

const aboutMeEN = {
  intro: (
    <>
      <h1 className="text-5xl md:text-6xl font-serif font-extralight leading-tight mb-4">About<br />Me</h1>
      <p className="text-lg md:text-xl mb-4">
        Computer Scientist from the Federal University of Pará, founder and solutions architect at iDEV. I have 4+ years of experience in data analysis, machine learning, and software engineering, building solutions for both public and private organizations.
      </p>
    </>
  ),
  rest: (
    <>
      <p className="mb-4">
        Former data scientist at SERPRO, working with large-scale data intelligence, and researcher at LINC/UFPA, applying neural networks and dimensionality reduction methods to biotech and life sciences challenges.
      </p>
      <p className="mb-4">
        Hands-on experience in data pipelines, cloud architecture (Kubernetes, Azure), backend development (Node.js, Python), and visualization (Power BI, React). I focus on solutions that bridge data complexity and business value, always delivering robust outcomes and clear documentation.
      </p>
      <p>
        Currently leading analytics transformation at iDEV, building scalable infrastructures, data models, and intelligent automation to accelerate data-driven decisions.
      </p>
    </>
  )
};


const featuredWorksPT = [
  {
    img: "/img/highlight-podoclin.png",
    alt: "PodoClin - Gestão de Clínicas",
    title: "PodoClin – Gestão de Clínicas de Podologia",
    period: "2024 - Atual",
    description: "Liderei a transformação da base analítica da iDEV, desenhando e implementando um modelo estrela escalável para centralizar dados fragmentados e criar a primeira arquitetura de BI da empresa. Estruturei workflows analíticos em ambiente Kubernetes, implementei pipelines de ingestão e detecção de anomalias em tempo real, e mapeei o ciclo de vida dos clientes, expondo pontos críticos de churn e otimizando o onboarding e retenção.",
    stack: ["Node.js", "Next.js", "MongoDB", "Kubernetes", "Python", "Power BI"]
  },
  {
    img: "/data_science/Logo_govshield.png",
    alt: "GovShield SERPRO",
    title: "GovShield – Plataforma de Inteligência de Dados (SERPRO)",
    period: "2021 - 2023",
    description: "Atuei como cientista de dados no projeto GovShield, mantendo e otimizando pipelines de dados críticos usando Azure Synapse, SQL Server, Power Query e Power BI. Criei e implantei dashboards e KPIs dinâmicos para monitoramento de operações federais, desenvolvi modelos preditivos em Python/Scikit-learn e automatizei relatórios analíticos para decisões em larga escala.",
    stack: ["Python", "Power BI", "Azure Synapse", "SQL Server", "Scikit-learn"]
  },
  {
    img: "/img/highlight-mlbio.png",
    alt: "ML para Biotecnologia",
    title: "Classificação de Peptídeos e Visualização de Dados (LINC/UFPA)",
    period: "2020",
    description: "Pesquisador em machine learning no LINC/UFPA: desenvolvi modelos de redes neurais para classificar peptídeos penetrantes de célula (CPPs) e integrei a inferência em tempo real a uma aplicação web pública para pesquisadores. Também criei um framework interativo para visualização de algoritmos de redução de dimensionalidade (PCA, t-SNE, UMAP), permitindo análise visual de dados biológicos complexos.",
    stack: ["Python", "Scikit-learn", "Django", "React", "Power BI"]
  },
];

const featuredWorksEN = [
  {
    img: "/img/highlight-podoclin.png",
    alt: "PodoClin - Clinic Management",
    title: "PodoClin – SaaS for Podiatry Clinics",
    period: "2024 - Present",
    description: "Spearheaded the transformation of iDEV’s analytics by designing and implementing a scalable star schema model, turning fragmented product and behavioral data into a centralized, query-efficient BI architecture. Engineered analytics workflows in a Kubernetes infrastructure, implemented real-time ingestion and anomaly detection pipelines, and mapped the customer lifecycle to expose churn points and optimize onboarding and retention.",
    stack: ["Node.js", "Next.js", "MongoDB", "Kubernetes", "Python", "Power BI"]
  },
  {
    img: "/data_science/Logo_govshield.png",
    alt: "GovShield SERPRO",
    title: "GovShield – Data Intelligence Platform (SERPRO)",
    period: "2021 - 2023",
    description: "Worked as a data scientist on the GovShield project, maintaining and optimizing critical data pipelines using Azure Synapse, SQL Server, Power Query, and Power BI. Created and deployed dynamic dashboards and KPIs for federal operations monitoring, developed predictive models in Python/Scikit-learn, and automated analytical reports for large-scale, data-driven decisions.",
    stack: ["Python", "Power BI", "Azure Synapse", "SQL Server", "Scikit-learn"]
  },
  {
    img: "/img/highlight-mlbio.png",
    alt: "ML for Biotechnology",
    title: "Peptide Classification & Data Visualization (LINC/UFPA)",
    period: "2020",
    description: "Researcher in machine learning at LINC/UFPA: developed neural network models to classify cell-penetrating peptides (CPPs) and integrated real-time inference into a public web app for researchers. Also created an interactive framework for dimensionality reduction algorithms (PCA, t-SNE, UMAP), enabling visual analysis of complex biological data.",
    stack: ["Python", "Scikit-learn", "Django", "React", "Power BI"]
  },
];

export default function DataScienceSection({ lang = 'pt' }: DataScienceSectionProps) {
  const textContent = lang === 'pt' ? aboutMePT : aboutMeEN;
  const featuredWorks = lang === 'pt' ? featuredWorksPT : featuredWorksEN;
  const sectionTitle = lang === 'pt' ? "Trabalhos em Destaque" : "Featured Projects";

  return (
    <>
      {/* SEÇÃO DE INTRODUÇÃO */}
      <ProfileIntroSection
        intro={textContent.intro}
        rest={textContent.rest}
        profileImg="/profile_picture.png"
        profileAlt="Gabriel Aragão"
        timeline={timeline}
      />

      {/* SEÇÃO DE TRABALHOS EM DESTAQUE */}
      <FeaturedWorksSection
        title={sectionTitle}
        works={featuredWorks}
      />
    </>
  );
}
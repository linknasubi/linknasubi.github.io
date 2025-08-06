'use client';

import React from 'react';

type Lang = 'pt' | 'en';

interface DataScienceSectionProps {
  lang: Lang;
}

const dataScienceContent = {
  pt: [
    {
      img: '/img/idev-ds.png',
      alt: 'Modelo Estrela iDEV',
      title: 'Data Solutions Architect – iDEV',
      highlights: [
        'Conduziu a transformação da base analítica da iDEV, projetando e implementando um modelo estrela escalável que centralizou dados fragmentados de produtos e comportamento.',
        'Mapeou o ciclo de vida do cliente com eventos de churn de alto impacto, influenciando o redesenho de onboarding e estratégias de retenção.',
        'Implementou pipelines de ingestão e transformação de dados em tempo real com infraestrutura baseada em Kubernetes.',
        'Desenvolveu pipelines automatizados de detecção de anomalias com Python, Pandas e modelagem de séries temporais, reduzindo esforços manuais em mais de 60%.'
      ]
    },
    {
      img: '/img/serpro-ds.png',
      alt: 'Dashboards SERPRO',
      title: 'Data Scientist – SERPRO (Serviço Federal de Processamento de Dados)',
      highlights: [
        'Atuou no projeto GovShield, plataforma estratégica nacional voltada para segurança e inteligência de dados.',
        'Otimizou pipelines de dados com Azure Synapse, SQL Server, Power BI e Power Query, garantindo consistência e alta disponibilidade.',
        'Criou KPIs e dashboards interativos com Power BI e DAX para análise de chamadas e serviços em escala federal.',
        'Desenvolveu modelos preditivos com Scikit-learn para antecipar padrões operacionais e gerar insights acionáveis.',
        'Automatizou relatórios analíticos, reduzindo carga operacional e permitindo decisões em larga escala baseadas em dados.'
      ]
    },
    {
      img: '/img/cpp-classification.png',
      alt: 'Classificação CPP',
      title: 'ML Researcher – CPP Classification (LINC/UFPA)',
      highlights: [
        'Projetou e treinou redes neurais para prever bioatividade de peptídeos penetrantes de célula (CPPs) a partir de suas sequências.',
        'Integrado modelo a uma aplicação web com inferência em tempo real, permitindo testes interativos por pesquisadores.',
        'Engenharia de atributos biologicamente relevantes e comparação de algoritmos (MLP, Random Forest, SVM).',
        'Publicação: [BChemRF-CPPred](http://comptools.linc.ufpa.br/BChemRF-CPPred)'
      ]
    },
    {
      img: '/img/rd-visualizacao.png',
      alt: 'Visualização Dimensionality Reduction',
      title: 'Research Assistant – Dimensionality Reduction (LINC/UFPA)',
      highlights: [
        'Desenvolveu framework interativo para visualização em tempo real de algoritmos como PCA, t-SNE e UMAP.',
        'Permitiu a análise de dados biológicos e sintéticos complexos em 2D e 3D para usuários não técnicos.',
        'Contribuiu com usabilidade e explorabilidade em software científico no laboratório de visualização de dados.',
        'Plataforma: [comptools.linc.ufpa.br/RD](http://comptools.linc.ufpa.br/RD)'
      ]
    }
  ],
  en: [
    {
      img: '/img/idev-ds.png',
      alt: 'iDEV Star Schema',
      title: 'Data Solutions Architect – iDEV',
      highlights: [
        'Led the transformation of iDEV’s analytics foundation by designing and implementing a scalable star schema that centralized fragmented product and behavior data.',
        'Mapped the customer lifecycle with high-impact churn events, influencing onboarding redesign and retention strategies.',
        'Built real-time data ingestion and transformation pipelines using Kubernetes-based infrastructure.',
        'Developed automated anomaly detection pipelines with Python, Pandas, and time series modeling, reducing manual effort by over 60%.'
      ]
    },
    {
      img: '/img/serpro-ds.png',
      alt: 'SERPRO Dashboards',
      title: 'Data Scientist – SERPRO (Federal Data Processing Service)',
      highlights: [
        'Worked on the GovShield project, a national strategic platform focused on data security and intelligence.',
        'Optimized data pipelines using Azure Synapse, SQL Server, Power BI, and Power Query, ensuring consistency and high availability.',
        'Created KPIs and interactive dashboards with Power BI and DAX for federal-scale call and service analysis.',
        'Developed predictive models with Scikit-learn to anticipate operational patterns and generate actionable insights.',
        'Automated analytical reports, reducing operational load and enabling large-scale data-driven decisions.'
      ]
    },
    {
      img: '/img/cpp-classification.png',
      alt: 'CPP Classification',
      title: 'ML Researcher – CPP Classification (LINC/UFPA)',
      highlights: [
        'Designed and trained neural networks to predict the bioactivity of cell-penetrating peptides (CPPs) from their sequences.',
        'Integrated the model into a real-time web application, allowing researchers to test interactively.',
        'Engineered biologically relevant features and compared algorithms (MLP, Random Forest, SVM).',
        'Publication: [BChemRF-CPPred](http://comptools.linc.ufpa.br/BChemRF-CPPred)'
      ]
    },
    {
      img: '/img/rd-visualizacao.png',
      alt: 'Dimensionality Reduction Visualization',
      title: 'Research Assistant – Dimensionality Reduction (LINC/UFPA)',
      highlights: [
        'Developed an interactive framework for real-time visualization of algorithms such as PCA, t-SNE, and UMAP.',
        'Enabled analysis of complex biological and synthetic data in 2D and 3D for non-technical users.',
        'Contributed to usability and explorability in scientific software at the data visualization lab.',
        'Platform: [comptools.linc.ufpa.br/RD](http://comptools.linc.ufpa.br/RD)'
      ]
    }
  ]
};

export default function DataScienceSection({ lang = 'pt' }: DataScienceSectionProps) {
  const content = dataScienceContent[lang];

  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-1">
      {content.map((item, idx) => (
        <div
          key={idx}
          className="bg-white/90 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-8 border border-blue-100 group hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 w-full"
        >
          <div className="flex-1 flex items-center justify-center min-w-0">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full max-w-[220px] h-40 sm:h-48 object-cover rounded-xl shadow-md border border-blue-200 bg-gray-50"
              style={{ minWidth: 120 }}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex-[2] min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">{item.title}</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {item.highlights.map((highlight, i) => {
                if (highlight.startsWith('Publication:') || highlight.startsWith('Plataforma:')) {
                  // Extract markdown link
                  const match = highlight.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    const [full, text, url] = match;
                    const prefix = highlight.split(full)[0];
                    return (
                      <li key={i}>
                        {prefix}
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{text}</a>
                      </li>
                    );
                  }
                  return <li key={i}>{highlight}</li>;
                }
                return <li key={i}>{highlight}</li>;
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

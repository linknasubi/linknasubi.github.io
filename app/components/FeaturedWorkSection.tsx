'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';


type CaseStudy = {
  problem: string;
  context?: string; // <— novo (opcional)
  solution: string;
  tools: string[];
  link?: string;
  testimonial?: {
    quote?: string;
    author?: string;
  };
};


interface FeaturedWork {
  img: string;
  alt: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
  caseStudy?: CaseStudy;         // Ativa o botão "Ver mais" quando preenchido
}

interface FeaturedWorksSectionProps {
  title: string; // Ex: 'Trabalhos em Destaque' ou 'Featured Projects'
  works: FeaturedWork[];
}

export function FeaturedWorksSection({ title, works }: FeaturedWorksSectionProps) {
  // controla quais índices estão expandidos
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const toggle = useCallback((idx: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  return (
    <section className="w-full bg-[#18191d] rounded-2xl mt-10 mb-6 px-2 sm:px-6 md:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-10 text-center tracking-tight">
        {title}
      </h2>

      <div className="flex flex-col gap-10">
        {works.map((work, i) => (
          <div key={i} className="flex flex-col gap-4">
            <article
              className={`
                flex flex-col md:flex-row items-stretch bg-[#202128] rounded-xl shadow-lg overflow-hidden
                border border-[#23232b] hover:shadow-2xl transition-all
                ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >
              {/* Imagem do projeto */}
              <div className="md:w-2/5 flex-shrink-0 flex items-center justify-center bg-[#23232b] p-5 md:p-8">
                <Image
                  src={work.img}
                  alt={work.alt}
                  width={340}
                  height={240}
                  className="rounded-xl w-full h-44 sm:h-56 md:h-60 object-cover shadow"
                  style={{ background: '#222', minWidth: 120, maxWidth: 340 }}
                  priority={i === 0}
                />
              </div>

              {/* Texto do projeto */}
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2">
                <PeriodBadge period={work.period} />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100">{work.title}</h3>
              </div>


                <p className="mb-3 text-gray-300">{work.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {work.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="bg-gray-800 text-gray-200 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ações */}
                {work.caseStudy && (
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => toggle(i)}
                      className="px-4 py-2 rounded-lg bg-yellow-300 text-gray-900 font-semibold hover:brightness-95 transition"
                      aria-expanded={expanded.has(i)}
                      aria-controls={`case-study-inline-${i}`}
                    >
                      {expanded.has(i) ? 'Ver menos' : 'Ver mais'}
                    </button>

                    {work.caseStudy.link && (
                      <a
                        href={work.caseStudy.link}
                        className="px-4 py-2 rounded-lg border border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Página do estudo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>

            {/* Detalhe inline logo abaixo do respectivo card */}
              {work.caseStudy && (
                <CaseStudyInline
                  id={`case-study-inline-${i}`}
                  work={work as FeaturedWork & { caseStudy: CaseStudy }}
                  expanded={expanded.has(i)}
                />
              )}

          </div>
        ))}
      </div>
    </section>
  );
}


function CaseStudyInline({
  id,
  work,
  expanded,
  variant = 'highlight', // 'highlight' | 'rail' | 'timeline' | 'cards'
}: {
  id: string;
  work: FeaturedWork & { caseStudy: CaseStudy };
  expanded: boolean;
  variant?: 'highlight' | 'rail' | 'timeline' | 'cards';
}) {
  const cs = work.caseStudy;

const renderHighlight = () => (
  <div className="space-y-8">
    {/* Row 1: Problema | Contexto */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section>
        <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">Problema</h5>
        <p className="text-zinc-200 mt-2">{cs.problem}</p>
      </section>

      
    {cs.testimonial && (
      <section>
        <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">O que dizem nossos clientes</h5>
        <blockquote className="mt-3 p-4 bg-[#0f1115] border border-zinc-700/70 rounded-lg italic text-zinc-300">
          "{cs.testimonial.quote}"
          <footer className="mt-2 text-sm text-yellow-300">— {cs.testimonial.author}</footer>
        </blockquote>
      </section>
    )}


      {cs.context && (
        <section>
          <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">Contexto</h5>
          <p className="text-zinc-200 mt-2">{cs.context}</p>
        </section>
      )}
    </div>

    {/* Row 2: Solução (full width) */}
    <section>
      <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">Solução & Arquitetura</h5>
      <p className="text-zinc-200 mt-2">{cs.solution}</p>
    </section>

    {/* Ferramentas */}
    <section>
      <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">Ferramentas & Integrações</h5>
      <div className="mt-3 flex flex-wrap gap-2">
        {cs.tools.map((t, i) => (
          <span
            key={i}
            className="bg-[#171b22] border border-slate-600/30 text-slate-200 text-[11px] font-mono px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </section>



    {/* CTA (opcional) */}
    {cs.link && (
      <div>
        <a
          href={cs.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-md bg-yellow-300 text-black font-semibold hover:brightness-95 transition"
        >
          Ver mais
        </a>
      </div>
    )}
  </div>
);


  const renderRail = () => (
    <div className="space-y-8">
      <RailNode title="Problema & Contexto" content={cs.problem} index={0} />
      <RailNode title="Solução & Arquitetura" content={cs.solution} index={1} />
      <RailTools tools={cs.tools} index={2} />
      {cs.testimonial && <TestimonialBlock testimonial={cs.testimonial} />}
      {cs.link && <CaseStudyLink link={cs.link} />}
    </div>
  );

  const renderTimeline = () => (
    <ol className="relative border-l border-yellow-400/40 ml-3 space-y-6">
      <TimelineItem title="Problema & Contexto" content={cs.problem} />
      <TimelineItem title="Solução & Arquitetura" content={cs.solution} />
      <TimelineTools tools={cs.tools} />
      {cs.testimonial && <TestimonialBlock testimonial={cs.testimonial} />}
      {cs.link && <CaseStudyLink link={cs.link} />}
    </ol>
  );

  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardItem title="Problema & Contexto" content={cs.problem} />
      <CardItem title="Solução & Arquitetura" content={cs.solution} />
      <CardTools tools={cs.tools} />
      {cs.testimonial && <TestimonialBlock testimonial={cs.testimonial} />}
      {cs.link && <CaseStudyLink link={cs.link} />}
    </div>
  );

  return (
    <div
      id={id}
      className={`transition-all duration-500 ${
        expanded ? 'grid grid-rows-[1fr] opacity-100 mt-2' : 'grid grid-rows-[0fr] opacity-0'
      }`}
      aria-hidden={!expanded}
    >
      <div className="overflow-hidden">
        <div className="relative rounded-xl border border-zinc-800/80 bg-[#0f1115]">
          {variant === 'rail' && (
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/0 via-yellow-300/60 to-yellow-400/0" />
          )}
          <div className={`p-6 ${expanded ? 'animate-[fadeSlideIn_420ms_ease-out]' : ''}`}>
            <div className="mb-5">
              <h4 className="text-zinc-100 font-semibold tracking-tight">{work.title} — Case</h4>
            </div>

            {variant === 'highlight' && renderHighlight()}
            {variant === 'rail' && renderRail()}
            {variant === 'timeline' && renderTimeline()}
            {variant === 'cards' && renderCards()}
          </div>
        </div>
      </div>
    </div>
  );
}

/** ======= SUBCOMPONENTES (rail/timeline/cards) ======= */

const RailNode = ({ title, content, index }: { title: string; content: string; index: number }) => (
  <div className="relative ml-10">
    <div
      className={`absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-yellow-300 shadow-[0_0_16px_2px_rgba(234,179,8,0.45)]`}
      style={{ animation: `pulse ${2.6 + index * 0.2}s ease-in-out infinite` }}
    />
    <h5 className="text-yellow-300 font-semibold text-sm">{title}</h5>
    <p className="text-zinc-200 mt-1">{content}</p>
  </div>
);

const RailTools = ({ tools, index }: { tools: string[]; index: number }) => (
  <div className="relative ml-10">
    <div
      className={`absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-yellow-300 shadow-[0_0_16px_2px_rgba(234,179,8,0.45)]`}
      style={{ animation: `pulse ${2.6 + index * 0.2}s ease-in-out infinite` }}
    />
    <h5 className="text-yellow-300 font-semibold text-sm">Ferramentas & Integrações</h5>
    <div className="mt-2 flex flex-wrap gap-2">
      {tools.map((t, i) => (
        <span key={i} className="bg-[#171b22] border border-slate-600/30 text-slate-200 text-[11px] font-mono px-2 py-1 rounded">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const CaseStudyLink = ({ link }: { link: string }) => (
  <div className="mt-2">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 rounded-md bg-yellow-300 text-black font-semibold hover:brightness-95 transition"
    >
      Ver mais
    </a>
  </div>
);

/* Timeline */
const TimelineItem = ({ title, content }: { title: string; content: string }) => (
  <li className="ml-4">
    <div className="absolute -left-[9px] w-4 h-4 bg-yellow-300 rounded-full border border-yellow-200"></div>
    <h5 className="text-yellow-300 font-semibold">{title}</h5>
    <p className="text-zinc-200 mt-1">{content}</p>
  </li>
);

const TimelineTools = ({ tools }: { tools: string[] }) => (
  <li className="ml-4">
    <div className="absolute -left-[9px] w-4 h-4 bg-yellow-300 rounded-full border border-yellow-200"></div>
    <h5 className="text-yellow-300 font-semibold">Ferramentas & Integrações</h5>
    <div className="mt-2 flex flex-wrap gap-2">
      {tools.map((t, i) => (
        <span key={i} className="bg-[#171b22] border border-slate-600/30 text-slate-200 text-[11px] font-mono px-2 py-1 rounded">
          {t}
        </span>
      ))}
    </div>
  </li>
);

const TestimonialBlock = ({
  testimonial,
}: {
  testimonial: NonNullable<CaseStudy['testimonial']>;
}) => (
  <section className="mt-2">
    <h5 className="text-yellow-300 font-semibold text-sm tracking-wide">O que dizem nossos clientes</h5>
    <blockquote className="mt-3 p-4 bg-[#0f1115] border border-zinc-700/70 rounded-lg italic text-zinc-300">
      {testimonial.quote ? `“${testimonial.quote}”` : '“Excelente experiência e resultados além do esperado.”'}
      <footer className="mt-2 text-sm text-yellow-300">
        — {testimonial.author ?? 'Cliente'}
      </footer>
    </blockquote>
  </section>
);



/* Cards */
const CardItem = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-[#0f1115] border border-zinc-800/80 rounded-lg p-4">
    <h5 className="text-yellow-300 font-semibold mb-2">{title}</h5>
    <p className="text-zinc-200">{content}</p>
  </div>
);

const CardTools = ({ tools }: { tools: string[] }) => (
  <div className="bg-[#0f1115] border border-zinc-800/80 rounded-lg p-4">
    <h5 className="text-yellow-300 font-semibold mb-2">Ferramentas & Integrações</h5>
    <div className="mt-2 flex flex-wrap gap-2">
      {tools.map((t, i) => (
        <span key={i} className="bg-[#171b22] border border-slate-600/30 text-slate-200 text-[11px] font-mono px-2 py-1 rounded">
          {t}
        </span>
      ))}
    </div>
  </div>
);


function PeriodBadge({ period }: { period: string }) {
  // usa en-dash e evita quebra de linha dentro do chip
  const text = period.replace(/\s*-\s*/g, " – ");
  return (
    <span
      className="
        inline-flex items-center gap-1.5
        text-[11px] md:text-xs font-semibold tabular-nums leading-none
        px-3 py-1 rounded-full whitespace-nowrap
        bg-yellow-300 text-gray-900 shadow-sm
      "
      title={text}
    >
      {text}
    </span>
  );
}


<style jsx global>{`
  @keyframes fadeSlideIn {
    0% { opacity: 0; transform: translateY(6px) scale(0.995); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes softGlow {
    0%,100% { box-shadow: 0 0 0px 0 rgba(56,189,248,0); }
    50% { box-shadow: 0 0 24px 0 rgba(56,189,248,0.08), 0 0 48px 0 rgba(56,189,248,0.06); }
  }
  @keyframes scanX {
    0% { transform: translateX(-2px); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-2px); }
  }
  @keyframes railGlow {
    0%,100% { filter: drop-shadow(0 0 0 rgba(168,85,247,0.0)); }
    50% { filter: drop-shadow(0 0 10px rgba(168,85,247,0.35)); }
  }
  @keyframes nodePulse {
    0%,100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.12); opacity: 1; }
  }
  @keyframes caret {
    0%,49% { opacity: 1; }
    50%,100% { opacity: 0; }
  }
  .animate-caret { animation: caret 1s steps(1) infinite; }
`}</style>

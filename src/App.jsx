import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Contato', href: '#contato' },
]

const projects = [
  {
    idx: '02',
    name: 'devlog',
    desc: 'Ideias cruas e timestamped, publicadas no instante em que acontecem.',
    lang: 'Python',
    href: 'https://github.com/Gabrielpl-dev/devlog',
  },
  {
    idx: '03',
    name: 'celepar-scraper',
    desc: 'Coleta e estruturação automatizada de dados — a base de qualquer pipeline.',
    lang: 'JavaScript',
    href: 'https://github.com/Gabrielpl-dev/celepar-scraper',
  },
  {
    idx: '04',
    name: 'Organizacao_app',
    desc: 'Produto do começo ao fim, incluindo a interface.',
    lang: 'CSS',
    href: 'https://github.com/Gabrielpl-dev/Organizacao_app',
  },
  {
    idx: '05',
    name: 'site-enxergando',
    desc: 'Projeto web entregue na mão.',
    lang: 'HTML',
    href: 'https://github.com/Gabrielpl-dev/site-enxergando',
  },
]

const capabilities = [
  { n: '01', label: 'Agentes & Harness', text: 'Scaffolding de agentes, orquestração de ferramentas, engenharia de contexto e memória.' },
  { n: '02', label: 'Avaliação', text: 'Pipelines de eval e benchmarking com métricas de IR — NDCG, Recall, MRR.' },
  { n: '03', label: 'Sistemas', text: 'Arquiteturas append-only, rollback, proveniência, estado por replay e busca vetorial.' },
  { n: '04', label: 'Engenharia', text: 'Python e JavaScript, automação, produto ponta a ponta.' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cursorRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: 'ease-out-quart',
      once: true,
      offset: 120,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <div className="cursor" ref={cursorRef} />

      {/* NAV */}
      <header className="nav">
        <a href="#" className="mark" onClick={close}>G<i>.</i></a>
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* MENU OVERLAY */}
      <div className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="menu-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="menu-link serif" onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <span>Harness Engineering · 2026</span>
          <a
            href="https://github.com/Gabrielpl-dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            github.com/Gabrielpl-dev
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <span className="hero-tag eyebrow">Sistemas de AI</span>
        <h1 className="hero-title serif">
          <span className="ln"><span>A engenharia</span></span>
          <span className="ln"><span>em volta do</span></span>
          <span className="ln"><span><em>modelo.</em></span></span>
        </h1>
        <div className="hero-scroll">
          <span className="eyebrow">Role</span>
          <span className="scroll-bar" />
        </div>
      </section>

      {/* ── MANIFESTO (dark) ── */}
      <section className="manifesto" id="sobre">
        <div className="manifesto-inner">
          <blockquote className="manifesto-quote" data-aos="fade-up">
            <p className="serif">
              "Na fronteira dos sistemas de AI existe uma camada que quase ninguém vê —
              mas que separa o <em>impressionante</em> do <em>confiável.</em>"
            </p>
          </blockquote>

          <div className="manifesto-body">
            <span className="eyebrow manifesto-label" data-aos="fade-up">Sobre</span>
            <p data-aos="fade-up" data-aos-delay="80">
              Autodidata. 17 anos. Meu instinto é de engenharia de sistemas aplicada à AI:
              arquiteturas append-only, rollback exato, proveniência, e avaliação com métricas
              de verdade — não "pareceu bom". Se você precisa que um agente seja
              <strong> confiável e mensurável</strong>, é nessa camada que eu trabalho.
            </p>

            <dl className="manifesto-def" data-aos="fade-up" data-aos-delay="140">
              <dt className="serif"><em>harness engineering</em></dt>
              <dd>
                A engenharia em volta do modelo, não o modelo em si. Scaffolding de agentes,
                pipelines de avaliação, memória e contexto — o que garante que um sistema faça
                a coisa certa de forma repetível, e que se possa provar isso com números.
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="work" id="trabalho">
        <div className="work-eyebrow" data-aos="fade-up">
          <span className="eyebrow">Trabalho selecionado</span>
        </div>

        {/* Featured */}
        <article className="feat" data-aos="fade-up">
          <div className="feat-meta">
            <span className="eyebrow">01 — Carro-chefe</span>
            <span className="eyebrow">Python</span>
          </div>
          <div className="feat-body">
            <div className="feat-title-col">
              <h2 className="feat-title serif">
                vector-<br />reinforcement-<br /><em>graph</em>
              </h2>
            </div>
            <div className="feat-content-col">
              <p className="feat-desc">
                Um grafo de memória onde as conexões nunca são armazenadas — apenas recomputadas
                de uma base imutável somada a um log append-only de reforço. O vetor original
                nunca é tocado; todo reforço é um evento no log; o estado é derivado por replay.
                Rollback exato, proveniência completa, zero esquecimento destrutivo.
              </p>
              <div className="feat-metrics">
                <div className="metric">
                  <div className="m-n serif">+0.18</div>
                  <div className="m-l">Ganho NDCG@10</div>
                </div>
                <div className="metric">
                  <div className="m-n serif">0</div>
                  <div className="m-l">Erros de rollback</div>
                </div>
                <div className="metric">
                  <div className="m-n serif">ρ .9999</div>
                  <div className="m-l">Isolamento</div>
                </div>
              </div>
              <a
                className="feat-cta"
                href="https://github.com/Gabrielpl-dev/vector-reinforcement-graph"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explorar o trabalho
              </a>
            </div>
          </div>
        </article>

        {/* List */}
        <div className="pieces">
          {projects.map((p) => (
            <a
              key={p.idx}
              className="piece"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <span className="p-num eyebrow">{p.idx}</span>
              <span className="p-name serif">{p.name}</span>
              <span className="p-desc">{p.desc}</span>
              <span className="p-tag eyebrow">{p.lang}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="capabilities">
        <div className="caps-header" data-aos="fade-up">
          <span className="eyebrow">Competências</span>
        </div>
        <div className="caps">
          {capabilities.map((c, i) => (
            <div
              key={c.n}
              className="cap"
              data-aos="fade-up"
              data-aos-delay={i % 2 === 1 ? '80' : '0'}
            >
              <span className="cap-num serif">{c.n}</span>
              <span className="eyebrow">{c.label}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contato">
        <div data-aos="fade-up">
          <span className="eyebrow">Contato</span>
        </div>
        <h2 className="contact-title serif" data-aos="fade-up">
          Se quer <em>conversar,</em><br />a porta está aberta.
        </h2>
        <p className="contact-sub" data-aos="fade-up">
          Sem formulário, sem intermediário. O trabalho está aberto no GitHub —
          explore e inicie uma conversa por lá.
        </p>
        <a
          className="contact-cta"
          href="https://github.com/Gabrielpl-dev"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
        >
          Iniciar uma conversa
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="foot">
          <span>Gabriel — Harness Engineering</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  )
}

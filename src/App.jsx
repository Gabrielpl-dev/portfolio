import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

const projects = [
  {
    idx: '02',
    name: 'devlog',
    desc: 'Ideias cruas e timestamped, publicadas no instante em que acontecem. Sem passe de edição.',
    lang: 'Python',
    href: 'https://github.com/Gabrielpl-dev/devlog',
  },
  {
    idx: '03',
    name: 'celepar-scraper',
    desc: 'Coleta e estruturação automatizada de dados — a base não-glamourosa de qualquer pipeline.',
    lang: 'JavaScript',
    href: 'https://github.com/Gabrielpl-dev/celepar-scraper',
  },
  {
    idx: '04',
    name: 'Organizacao_app',
    desc: 'Produto do começo ao fim, incluindo a interface — range além da infra.',
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
  { label: 'Agentes & Harness', text: 'Scaffolding de agentes, orquestração de ferramentas, engenharia de contexto e memória.' },
  { label: 'Avaliação', text: 'Pipelines de eval e benchmarking com métricas de IR — NDCG, Recall, MRR.' },
  { label: 'Sistemas', text: 'Arquiteturas append-only, rollback, proveniência, estado por replay e busca vetorial.' },
  { label: 'Engenharia', text: 'Python e JavaScript, automação, e produto ponta a ponta quando é preciso.' },
]

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  return (
    <>
      <header className="nav">
        <div className="mark">Gabriel<i>.</i></div>
        <nav className="nav-right">
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main className="shell">
        {/* HERO */}
        <section className="hero">
          <div className="kick eyebrow">Harness Engineering · Sistemas de AI</div>
          <h1 className="serif">
            <span className="ln"><span>A engenharia</span></span>
            <span className="ln"><span>em volta do <em>modelo</em>.</span></span>
            <span className="ln"><span>Não o <span className="accent">modelo.</span></span></span>
          </h1>
          <div className="hero-foot">
            <p className="hero-lede">
              Construo a camada que decide se um agente de AI é um brinquedo ou uma ferramenta:{' '}
              <b>memória, avaliação, orquestração</b> — a infraestrutura que torna um sistema
              confiável, mensurável e depurável.
            </p>
            <div className="scrollcue">
              <span>Role</span>
              <span className="bar" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="statement">
          <div className="sec-label" data-aos="fade-up">
            <span className="idx">I</span>
            <span className="eyebrow">Sobre</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="60">
            <p>
              Trabalho na fronteira dos sistemas de AI — na camada que quase ninguém vê,
              mas que separa o <em>impressionante</em> do <em>confiável</em>.
            </p>
          </div>

          <div className="about-body">
            <div className="about-def" data-aos="fade-up">
              <span className="eyebrow">Definição</span>
              <h3>harness engineering</h3>
              <p>
                A engenharia em volta do modelo, não o modelo em si. Scaffolding de agentes,
                orquestração de ferramentas, pipelines de avaliação, memória e contexto. É o que
                garante que um sistema faça a coisa certa de forma repetível — e que se possa
                provar isso com números.
              </p>
            </div>
            <div className="about-col" data-aos="fade-up" data-aos-delay="80">
              <p>
                Meu instinto é de <b>engenharia de sistemas aplicada à AI</b>: arquiteturas
                append-only, rollback exato, proveniência, e avaliação com métricas de verdade
                em vez de "pareceu bom".
              </p>
              <p>
                Se você precisa que um agente seja confiável — e que essa confiabilidade seja{' '}
                <b>mensurável</b> — é nessa camada que eu trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work">
          <div className="sec-label" data-aos="fade-up">
            <span className="idx">II</span>
            <span className="eyebrow">Trabalho selecionado</span>
          </div>

          <div className="work-head" data-aos="fade-up">
            <h2 className="serif">Trabalho</h2>
            <span className="count">Repositórios públicos · github.com/Gabrielpl-dev</span>
          </div>

          <article className="feat" data-aos="fade-up">
            <div className="feat-top">
              <div className="feat-kick">
                <span className="idx">01</span>
                <span className="eyebrow">Carro-chefe</span>
              </div>
              <span className="p-lang">Python</span>
            </div>
            <h3 className="serif">vector-reinforcement-<em>graph</em></h3>
            <p className="feat-desc">
              Um grafo de memória onde as conexões nunca são armazenadas — apenas recomputadas de
              uma base imutável somada a um log append-only de reforço. Sem mutação destrutiva: o
              vetor original nunca é tocado, todo reforço é um evento no log, e o estado é derivado
              por replay. Isso compra três coisas que a memória biológica não tem: rollback exato,
              proveniência completa e zero esquecimento destrutivo.
            </p>
            <div className="feat-metrics">
              <div className="metric">
                <div className="n serif">+0.18</div>
                <div className="l">Ganho NDCG@10</div>
              </div>
              <div className="metric">
                <div className="n serif">0<span className="u">·erro</span></div>
                <div className="l">Rollback exato</div>
              </div>
              <div className="metric">
                <div className="n serif">ρ 0.9999</div>
                <div className="l">Isolamento entre conceitos</div>
              </div>
            </div>
            <a
              className="feat-link"
              href="https://github.com/Gabrielpl-dev/vector-reinforcement-graph"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ler o código e o benchmark <span className="ar">→</span>
            </a>
          </article>

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
                <span className="p-idx">{p.idx}</span>
                <span className="p-name serif">{p.name}</span>
                <span className="p-desc">{p.desc}</span>
                <span className="p-lang">{p.lang}</span>
                <span className="p-ar">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="capabilities">
          <div className="sec-label" data-aos="fade-up">
            <span className="idx">III</span>
            <span className="eyebrow">Competências</span>
          </div>
          <div className="caps">
            {capabilities.map((c, i) => (
              <div
                key={c.label}
                className="cap"
                data-aos="fade-up"
                data-aos-delay={i % 2 === 1 ? '60' : '0'}
              >
                <span className="eyebrow">{c.label}</span>
                <p className="serif">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contato">
          <div className="sec-label" data-aos="fade-up">
            <span className="idx">IV</span>
            <span className="eyebrow">Contato</span>
          </div>
          <h2 className="serif" data-aos="fade-up">
            Se quer me chamar, <em>chama.</em>
          </h2>
          <p className="sub" data-aos="fade-up">
            Sem formulário, sem intermediário. O trabalho está aberto no GitHub — dê uma olhada e
            me mande mensagem por lá.
          </p>
          <a
            className="cta"
            href="https://github.com/Gabrielpl-dev"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            github.com/Gabrielpl-dev <span>→</span>
          </a>
        </section>
      </main>

      <footer>
        <div className="shell foot">
          <span>© 2026 Gabriel</span>
          <span>Harness Engineering</span>
        </div>
      </footer>
    </>
  )
}

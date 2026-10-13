import { useEffect, useRef } from 'react'
import './index.css'

const github = 'https://github.com/Gabrielpl-dev'
const projects = [
  ['url-shortener', 'Servidor de links e analytics com persistência em SQLite.', 'HTTP · SQLite'],
  ['dependency-auditor', 'CLI que consulta vulnerabilidades no OSV e também roda com fixture offline.', 'CLI · OSV'],
  ['log-analyzer', 'Normaliza logs e gera resumos, rankings e relatórios em Markdown.', 'CLI · Logs'],
  ['schema-diff', 'Compara schemas SQL, classifica mudanças e gera migrações.', 'SQL · Migrações'],
  ['webhook-engine', 'Persiste eventos e entregas, com retry e ordenação por endpoint.', 'Eventos · Retry'],
  ['graphviewer-gp', 'Visualiza grafos LangGraph e acompanha a execução nó a nó, ao vivo.', 'Rust · VS Code · LangGraph'],
]
const stages = ['Pedido / objetivo', 'Harness / contexto + memória', 'Modelo + ferramentas', 'Avaliação / evidência']

function ExecutionDiagram() {
  return <aside className="diagram" aria-label="Diagrama conceitual de execução">
    <p className="label mono">A camada em volta do modelo</p>
    <ol className="pipeline mono">{stages.map((stage, index) =>
      <li key={stage} className={index === 1 ? 'stage focus' : 'stage'}>
        <span className="stage-number">0{index + 1}</span><span>{stage}</span>
      </li>)}</ol>
    <p className="diagram-foot">A execução precisa de contexto. O resultado precisa de evidência.</p>
  </aside>
}

export default function App() {
  const root = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const elements = root.current.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach(element => {
      element.classList.add('reveal-ready')
      observer.observe(element)
    })
    return () => {
      observer.disconnect()
      elements.forEach(element => element.classList.remove('reveal-ready', 'revealed'))
    }
  }, [])
  return <div className="page" ref={root}>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="masthead"><a className="identity" href={github}>GP / Gabriel Pinheiro</a><span className="label mono">Engenharia de sistemas · 2026</span></header>
    <main id="conteudo">
      <section className="hero" aria-labelledby="hero-title">
        <div><p className="kicker label mono">Harness engineering / Sistemas de IA</p>
          <h1 id="hero-title">O modelo<br />é só uma<br /><span>parte.</span></h1>
          <p className="intro">Contexto. Ferramentas. Memória. Avaliação.<br />Construo o sistema que faz essas partes trabalharem juntas.</p>
          <a className="cta" href="#projetos">Inspecionar projetos <span aria-hidden="true">↓</span></a>
          <p className="bio label">Gabriel · 17 anos · Autodidata<br />Arquiteto de sistemas de IA</p>
        </div><ExecutionDiagram />
      </section>
      <section className="projects" id="projetos" aria-labelledby="projects-title">
        <div className="section-heading" data-reveal><h2 id="projects-title">Sistemas em código aberto</h2><span className="label mono">Lote 01 / cinco repos + graphviewer</span></div>
        <div>{projects.map(([name, description, tech], index) =>
          <a className="project" href={`${github}/${name}`} key={name} data-reveal>
            <span className="num mono">0{index + 1}</span><div className="project-main"><h3>{name}</h3><p>{description}</p></div>
            <span className="tech label">{tech}</span><span className="arrow" aria-hidden="true">↗</span>
          </a>)}</div>
      </section>
      <section className="trajectory" aria-labelledby="trajectory-title">
        <div className="section-heading" data-reveal><h2 id="trajectory-title">A velocidade também é evidência.</h2><span className="label mono">Trajetória / ~14 meses</span></div>
        <div className="timeline" data-reveal>
          <a href="https://github.com/JazzyVain" className="milestone"><span className="label mono">Jul / 2025 · JazzyVain ↗</span><h3>Os fundamentos.</h3><p>HTML, CSS e JavaScript. Os primeiros projetos, o começo da construção.</p></a>
          <div className="timeline-connector" aria-hidden="true">→</div>
          <a href={github} className="milestone"><span className="label mono">Set / 2026 · Gabrielpl-dev ↗</span><h3>Sistemas de agentes de IA.</h3><p>Contexto, ferramentas, memória e avaliação. Da página ao sistema que executa.</p></a>
        </div>
        <p className="trajectory-note" data-reveal>Dois perfis públicos documentam o caminho. Meu diferencial é a velocidade de aprender, construir e colocar à prova.</p>
      </section>
    </main>
    <footer><a href={github}>github.com/Gabrielpl-dev ↗</a><span>Código, testes e documentação.</span></footer>
  </div>
}

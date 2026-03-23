import './App.css'

const featuredProjects = [
  {
    title: 'Landing premium para marca pessoal',
    category: 'Brand site',
    description:
      'Site focado em autoridade, com narrativa visual forte, animações leves e CTA direto para conversao.',
    metrics: 'React, motion design e SEO tecnico',
  },
  {
    title: 'Dashboard para produto digital',
    category: 'Web app',
    description:
      'Interface modular para dados, onboarding e areas privadas com design system consistente.',
    metrics: 'UX orientada a performance e clareza',
  },
  {
    title: 'Pagina de vendas com alta credibilidade',
    category: 'Conversion page',
    description:
      'Estrutura pensada para destacar prova social, diferencial do servico e captura de leads.',
    metrics: 'Layout responsivo e deploy continuo',
  },
]

const capabilities = [
  'Direcao visual com cara de produto serio',
  'React moderno com codigo limpo e escalavel',
  'Performance, SEO basico e responsividade real',
  'Deploy simples no Cloudflare Pages com dominio proprio',
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <div>
            <strong>Marcos Portfolio</strong>
            <span>Design, React e experiencia digital</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Servicos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio em React pronto para Cloudflare</p>
            <h1>Presenca digital com visual profissional e estrutura de produto.</h1>
            <p className="lead">
              Um portfolio nao precisa parecer template. Ele precisa transmitir
              nivel tecnico, confianca e clareza em poucos segundos.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Falar sobre projeto
              </a>
              <a className="button button-secondary" href="#projetos">
                Ver trabalhos
              </a>
            </div>

            <ul className="hero-stats">
              <li>
                <strong>01</strong>
                <span>Deploy estatico e rapido</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Arquitetura simples de manter</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Pronto para dominio proprio</span>
              </li>
            </ul>
          </div>

          <aside className="hero-card">
            <p>Stack sugerida</p>
            <h2>React + Vite + Cloudflare Pages</h2>
            <div className="stack-grid">
              <span>React</span>
              <span>Vite</span>
              <span>CSS custom</span>
              <span>Pages</span>
            </div>
            <div className="quote-block">
              <span>Objetivo</span>
              <p>
                Criar uma vitrine pessoal elegante, veloz e facil de publicar
                sem custo de servidor.
              </p>
            </div>
          </aside>
        </section>

        <section className="strip">
          <p>Design intencional</p>
          <p>Codigo enxuto</p>
          <p>Hospedagem gratuita</p>
          <p>Escalavel quando precisar</p>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Projetos em destaque</p>
            <h2>Casos pensados para vender competencia, nao so preencher tela.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.metrics}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="servicos">
          <div className="section-heading">
            <p className="eyebrow">O que este site comunica</p>
            <h2>Uma apresentacao que posiciona voce como profissional serio.</h2>
          </div>

          <div className="capability-list">
            {capabilities.map((item) => (
              <div className="capability-item" key={item}>
                <span className="capability-index">+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-panel" id="contato">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Pronto para publicar e depois conectar a um dominio seu.</h2>
            <p className="contact-copy">
              Troque os textos, seus links reais e seus projetos. A estrutura ja
              esta pronta para isso.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:contato@seudominio.com">
              contato@seudominio.com
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

import './App.css'

const featuredProjects = [
  {
    title: 'Suporte institucional com foco em continuidade',
    category: 'Operacao e estabilidade',
    description:
      'Atuacao voltada para manter ambientes funcionando, reduzir friccao operacional e acelerar a resposta a demandas internas.',
    metrics: 'PCMG, suporte senior e confiabilidade',
  },
  {
    title: 'Automacoes para ganhar escala no dia a dia',
    category: 'Automacao de processos',
    description:
      'Uso de scripts e integracoes para reduzir tarefas repetitivas, padronizar fluxos e liberar tempo para o que exige analise real.',
    metrics: 'Produtividade, padronizacao e eficiencia',
  },
  {
    title: 'Primeiro portfolio publicado com deploy continuo',
    category: 'Presenca digital',
    description:
      'Este site marca o inicio da minha presenca tecnica online, com stack moderna, hospedagem global e base pronta para evoluir.',
    metrics: 'React, Vite, Cloudflare e deploy automatico',
  },
]

const capabilities = [
  'Suporte institucional com visao pratica de operacao',
  'Analise de sistemas com foco em clareza e continuidade',
  'Automacoes para reduzir retrabalho e acelerar entregas',
  'Aprendizado constante em desenvolvimento e integracoes web',
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">F</span>
          <div>
            <strong>Vanderlei Morais de Castro de Souza</strong>
            <span>Analista de sistemas, suporte senior e automacoes</span>
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
            <p className="eyebrow">Portfolio profissional</p>
            <h1>Analise, suporte e automacoes com foco em resolver de verdade.</h1>
            <p className="lead">
              Sou Vanderlei Morais de Castro de Souza. Atuo com suporte
              institucional na PCMG, com perfil senior, visao operacional e
              interesse constante em desenvolvimento, integracoes e automacoes
              que tornem o trabalho mais inteligente e eficiente.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:vanderleicastroesouza@gmail.com">
                Entrar em contato
              </a>
              <a className="button button-secondary" href="#projetos">
                Ver destaque
              </a>
            </div>

            <ul className="hero-stats">
              <li>
                <strong>01</strong>
                <span>Suporte institucional e operacao</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Analise de sistemas e melhoria continua</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Automacoes para ganhar tempo e consistencia</span>
              </li>
            </ul>
          </div>

          <aside className="hero-card">
            <p>Perfil profissional</p>
            <h2>Base tecnica, experiencia pratica e evolucao constante.</h2>
            <div className="stack-grid">
              <span>Suporte senior</span>
              <span>Analise de sistemas</span>
              <span>Automacoes</span>
              <span>Desenvolvimento web</span>
            </div>
            <div className="quote-block">
              <span>Direcao</span>
              <p>
                Transformar experiencia operacional em solucoes mais rapidas,
                confiaveis e escalaveis para o dia a dia.
              </p>
            </div>
          </aside>
        </section>

        <section className="strip">
          <p>Experiencia de campo</p>
          <p>Raciocinio tecnico</p>
          <p>Automacao pratica</p>
          <p>Evolucao continua</p>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Frentes em destaque</p>
            <h2>Minha atuacao combina operacao, analise e melhoria continua.</h2>
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
            <p className="eyebrow">Competencias</p>
            <h2>Uma base profissional orientada a estabilidade, eficiencia e entrega.</h2>
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
            <h2>Aberto a conexoes, projetos e oportunidades de colaboracao.</h2>
            <p className="contact-copy">
              Este portfolio e o ponto de partida da minha presenca profissional
              online. A partir daqui, novos projetos e automacoes serao
              adicionados de forma continua.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:vanderleicastroesouza@gmail.com">
              vanderleicastroesouza@gmail.com
            </a>
            <a className="button button-secondary" href="https://www.instagram.com/vanderlei1301/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

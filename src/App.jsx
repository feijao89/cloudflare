import './App.css'

const profileSignals = [
  'Suporte institucional',
  'Analise de sistemas',
  'Automacoes',
  'React + UI moderna',
]

const featuredProjects = [
  {
    title: 'Suporte institucional com foco em continuidade',
    category: 'Operacao e estabilidade',
    description:
      'Atuacao orientada a manter ambientes confiaveis, reduzir gargalos e responder com velocidade quando a operacao exige.',
    metrics: 'PCMG, suporte senior e visao pratica',
  },
  {
    title: 'Automacoes para reduzir retrabalho',
    category: 'Eficiencia operacional',
    description:
      'Estruturas e scripts para tirar peso do trabalho repetitivo, criar padrao e deixar o time mais rapido no dia a dia.',
    metrics: 'Padronizacao, escala e produtividade',
  },
  {
    title: 'Portfolio autoral com deploy continuo',
    category: 'Presenca digital',
    description:
      'Projeto publicado com stack moderna e arquitetura simples, pensado para crescer com estudos, casos e interfaces novas.',
    metrics: 'React, Vite, Cloudflare Pages',
  },
]

const capabilities = [
  'Traduzir necessidade operacional em fluxo mais claro e confiavel',
  'Organizar sistemas, processos e automacoes com foco em entrega',
  'Construir interfaces institucionais, landing pages e vitrines digitais',
  'Aprender rapido e transformar referencia boa em implementacao original',
]

const labs = [
  {
    name: 'UI Lab',
    status: 'Em evolucao',
    description:
      'Estudo continuo de layouts premium, grids, hierarquia visual e componentes com cara de produto.',
  },
  {
    name: 'Automation Lab',
    status: 'Ativo',
    description:
      'Experimentos com automacoes para reduzir tarefas repetitivas e aumentar consistencia operacional.',
  },
  {
    name: 'Case Builder',
    status: 'Proximo passo',
    description:
      'Espaco para transformar estudos e prototipos em casos reais publicados dentro do portfolio.',
  },
]

const conceptSites = [
  {
    title: 'Hamburgueria premium',
    tag: 'Food brand',
    summary:
      'Landing vibrante para cardapio, combos, reservas e pedidos com visual forte de marca.',
  },
  {
    title: 'Marca de refrigerante',
    tag: 'Beverage campaign',
    summary:
      'Site promocional com storytelling visual, cores fortes, produto em destaque e campanha sazonal.',
  },
  {
    title: 'Loja de carros',
    tag: 'Automotive showcase',
    summary:
      'Catalogo com carros em destaque, fichas tecnicas, financiamento e apresentacao premium.',
  },
  {
    title: 'Clinica institucional',
    tag: 'Trust-driven website',
    summary:
      'Site focado em credibilidade, servicos, equipe, agenda e clareza de atendimento.',
  },
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
          <a href="#laboratorio">Laboratorio</a>
          <a href="#conceitos">Estudos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio profissional</p>
            <h1>Suporte, analise e construcao digital com ambicao de produto.</h1>
            <p className="lead">
              Sou Vanderlei Morais de Castro de Souza. Atuo com suporte
              institucional na PCMG, com perfil senior, visao operacional e
              interesse constante em desenvolvimento, interfaces modernas e
              automacoes que resolvam problemas de forma objetiva.
            </p>

            <div className="signal-row">
              {profileSignals.map((signal) => (
                <span className="signal-pill" key={signal}>
                  {signal}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="mailto:vanderleicastroesouza@gmail.com"
              >
                Entrar em contato
              </a>
              <a className="button button-secondary" href="#conceitos">
                Explorar estudos
              </a>
            </div>

            <ul className="hero-stats">
              <li>
                <strong>01</strong>
                <span>Operacao e continuidade em ambiente real</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Automacoes para ganhar velocidade e consistencia</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Sites autorais para transformar estudo em portfolio</span>
              </li>
            </ul>
          </div>

          <aside className="hero-card">
            <p>Radar profissional</p>
            <h2>Base tecnica forte com construcao visual em aceleracao.</h2>
            <div className="hero-orbit">
              <div className="orbit-core">
                <span>feijao89</span>
                <strong>build mode</strong>
              </div>
              <div className="orbit orbit-a">Operacao</div>
              <div className="orbit orbit-b">Sistemas</div>
              <div className="orbit orbit-c">UI</div>
            </div>
            <div className="quote-block">
              <span>Direcao</span>
              <p>
                Evoluir de suporte e automacao para um portfolio visualmente
                forte, com estudos publicados e identidade propria.
              </p>
            </div>
          </aside>
        </section>

        <section className="strip">
          <p>Experiencia de campo</p>
          <p>Raciocinio tecnico</p>
          <p>Construcao visual</p>
          <p>Evolucao continua</p>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Frentes em destaque</p>
            <h2>Minha atuacao combina estabilidade, melhoria continua e ambicao de construcao.</h2>
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

        <section className="section builder-section" id="servicos">
          <div className="section-heading">
            <p className="eyebrow">O que eu construo</p>
            <h2>Experiencias digitais com foco em clareza, credibilidade e impacto visual.</h2>
          </div>

          <div className="builder-grid">
            <article className="builder-card">
              <span className="project-category">Institutional</span>
              <h3>Sites institucionais modernos</h3>
              <p>
                Estruturas para autoridade, apresentacao profissional e contato
                direto, com visual mais forte que o padrao comum.
              </p>
            </article>

            <article className="builder-card">
              <span className="project-category">Landing pages</span>
              <h3>Paginas de campanha e produto</h3>
              <p>
                Composicao de hero, secoes de destaque, prova visual e CTA para
                marcas, servicos ou estudos conceituais.
              </p>
            </article>

            <article className="builder-card">
              <span className="project-category">Dashboards</span>
              <h3>Paineis e interfaces internas</h3>
              <p>
                Telas focadas em leitura rapida, operacao e organizacao de
                informacao para fluxos internos ou demonstracoes.
              </p>
            </article>
          </div>
        </section>

        <section className="section split-section" id="laboratorio">
          <div className="section-heading">
            <p className="eyebrow">Laboratorio</p>
            <h2>Espaco para publicar estudos, testes visuais e automacoes novas.</h2>
          </div>

          <div className="lab-grid">
            {labs.map((lab) => (
              <article className="lab-card" key={lab.name}>
                <div className="lab-head">
                  <h3>{lab.name}</h3>
                  <span className="lab-status">{lab.status}</span>
                </div>
                <p>{lab.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="conceitos">
          <div className="section-heading">
            <p className="eyebrow">Estudos para portfolio</p>
            <h2>Modelos de sites que podem virar casos publicados dentro desta vitrine.</h2>
          </div>

          <div className="concept-grid">
            {conceptSites.map((site) => (
              <article className="concept-card" key={site.title}>
                <span className="project-category">{site.tag}</span>
                <h3>{site.title}</h3>
                <p>{site.summary}</p>
                <a className="text-link" href="#contato">
                  Transformar em case
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Competencias</p>
            <h2>Uma base profissional orientada a estabilidade, eficiencia e evolucao.</h2>
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
            <h2>Este portfolio agora ja pode receber novos estudos, links e projetos reais.</h2>
            <p className="contact-copy">
              A proxima etapa e publicar novos sites autorais, ligar cada um
              deles nesta home e usar este portfolio como hub central da sua
              evolucao profissional.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:vanderleicastroesouza@gmail.com"
            >
              vanderleicastroesouza@gmail.com
            </a>
            <a
              className="button button-secondary"
              href="https://www.instagram.com/vanderlei1301/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

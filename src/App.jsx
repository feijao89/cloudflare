import { useEffect, useMemo, useState } from 'react'
import './App.css'

const profileSignals = [
  'Suporte institucional',
  'Analise de sistemas',
  'Automacoes',
  'UI moderna',
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
    title: 'Radar de noticias em tempo real',
    category: 'Projeto em evolucao',
    description:
      'Area dedicada a noticias de seguranca, hacker e IA, com curadoria, filtros por tema e visual de monitoramento.',
    metrics: 'Cloudflare, RSS, agregacao e interface',
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
    name: 'News Lab',
    status: 'Ativo',
    description:
      'Monitoramento de noticias em tempo real para seguranca, hackers e inteligencias artificiais.',
  },
  {
    name: 'Automation Lab',
    status: 'Em evolucao',
    description:
      'Experimentos com automacoes para reduzir tarefas repetitivas e aumentar consistencia operacional.',
  },
  {
    name: 'UI Lab',
    status: 'Ativo',
    description:
      'Estudo continuo de layouts premium, movimento, composicao e atmosfera visual para sites autorais.',
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

const fallbackNews = [
  {
    id: 'fallback-ai-1',
    category: 'ai',
    source: 'Monitor local',
    title: 'Painel de noticias preparado para acompanhar IA em tempo real',
    excerpt:
      'A rota /noticias foi estruturada para consolidar fontes sobre inteligencia artificial, seguranca e ecossistema hacker em uma unica interface.',
    url: '/noticias',
    publishedAt: '2026-03-24T12:00:00.000Z',
  },
  {
    id: 'fallback-security-1',
    category: 'security',
    source: 'Monitor local',
    title: 'Curadoria visual para seguranca da informacao com leitura mais rapida',
    excerpt:
      'O sistema pode destacar ameacas, incidentes, vazamentos, zero-days e movimentos relevantes em seguranca de forma mais organizada.',
    url: '/noticias',
    publishedAt: '2026-03-24T11:00:00.000Z',
  },
  {
    id: 'fallback-hacker-1',
    category: 'hacker',
    source: 'Monitor local',
    title: 'Categoria hacker separada para acompanhar campanhas e tecnicas',
    excerpt:
      'A estrutura suporta acompanhamento de tecnicas ofensivas, grupos, campanhas e noticias do ecossistema hacker com filtros dedicados.',
    url: '/noticias',
    publishedAt: '2026-03-24T10:00:00.000Z',
  },
]

const categoryMap = {
  all: 'Tudo',
  security: 'Seguranca',
  hacker: 'Hacker',
  ai: 'IA',
}

function App() {
  const pathname = window.location.pathname
  const isNewsPage = pathname === '/noticias'

  return (
    <div className={`site-shell ${isNewsPage ? 'is-news' : 'is-home'}`}>
      <SiteHeader isNewsPage={isNewsPage} />
      <main>{isNewsPage ? <NewsPage /> : <HomePage />}</main>
    </div>
  )
}

function SiteHeader({ isNewsPage }) {
  return (
    <header className="topbar">
      <a className="brand brand-link" href="/">
        <span className="brand-mark">F</span>
        <div>
          <strong>Vanderlei Morais de Castro de Souza</strong>
          <span>Analista de sistemas, suporte senior e automacoes</span>
        </div>
      </a>

      <nav className="nav">
        <a href="/" className={!isNewsPage ? 'nav-active' : ''}>
          Inicio
        </a>
        <a href="/noticias" className={isNewsPage ? 'nav-active' : ''}>
          Noticias
        </a>
        <a href={!isNewsPage ? '#conceitos' : '/#conceitos'}>Estudos</a>
        <a href={!isNewsPage ? '#contato' : '/#contato'}>Contato</a>
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <>
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
            <a className="button button-secondary" href="/noticias">
              Abrir radar de noticias
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

      <section className="section section-glow" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Frentes em destaque</p>
          <h2>
            Minha atuacao combina estabilidade, melhoria continua e ambicao de
            construcao.
          </h2>
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
          <h2>
            Experiencias digitais com foco em clareza, credibilidade e impacto
            visual.
          </h2>
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
          <h2>
            Espaco para publicar estudos, testes visuais, automacoes e
            monitoramentos novos.
          </h2>
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
          <h2>
            Modelos de sites que podem virar casos publicados dentro desta
            vitrine.
          </h2>
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
          <h2>
            Uma base profissional orientada a estabilidade, eficiencia e
            evolucao.
          </h2>
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
          <h2>Este portfolio agora ja pode receber novos estudos e projetos reais.</h2>
          <p className="contact-copy">
            A area de noticias ja funciona como um produto proprio dentro do
            site. O proximo passo e abrir mais casos autorais e conectar tudo
            nesta home como hub central.
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
    </>
  )
}

function NewsPage() {
  const [news, setNews] = useState(fallbackNews)
  const [activeCategory, setActiveCategory] = useState('all')
  const [status, setStatus] = useState('loading')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadNews() {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error('Falha ao buscar noticias')
        }

        const payload = await response.json()
        if (cancelled) return

        if (Array.isArray(payload.items) && payload.items.length > 0) {
          setNews(payload.items)
        }

        setLastUpdated(payload.updatedAt || new Date().toISOString())
        setStatus('ready')
      } catch {
        if (cancelled) return
        setLastUpdated(new Date().toISOString())
        setStatus('fallback')
      }
    }

    loadNews()

    return () => {
      cancelled = true
    }
  }, [])

  const filteredNews = useMemo(() => {
    if (activeCategory === 'all') return news
    return news.filter((item) => item.category === activeCategory)
  }, [activeCategory, news])

  const counts = useMemo(() => {
    return news.reduce(
      (acc, item) => {
        acc.total += 1
        acc[item.category] += 1
        return acc
      },
      { total: 0, security: 0, hacker: 0, ai: 0 },
    )
  }, [news])

  const featured = filteredNews[0]
  const rest = filteredNews.slice(1)

  return (
    <>
      <section className="news-hero">
        <div className="news-copy">
          <p className="eyebrow">Radar de noticias</p>
          <h1>Seguranca, hackers e IA em um monitor unico dentro do seu dominio.</h1>
          <p className="lead">
            Esta area agrega fontes relevantes e organiza a leitura por tema,
            com uma interface mais viva, filtros rapidos e atmosfera de sala de
            comando.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#feed">
              Ver noticias
            </a>
            <a className="button button-secondary" href="/">
              Voltar ao portfolio
            </a>
          </div>

          <div className="news-meta">
            <span className={`status-dot status-${status}`} />
            <p>
              {status === 'ready'
                ? 'Fontes online carregadas'
                : status === 'fallback'
                  ? 'Modo fallback local'
                  : 'Carregando monitor'}
            </p>
            <span className="news-updated">
              Atualizado {formatDateTime(lastUpdated || new Date().toISOString())}
            </span>
          </div>
        </div>

        <aside className="news-sidepanel">
          <div className="signal-board">
            <div>
              <strong>{counts.total}</strong>
              <span>itens monitorados</span>
            </div>
            <div>
              <strong>{counts.security}</strong>
              <span>seguranca</span>
            </div>
            <div>
              <strong>{counts.hacker}</strong>
              <span>hacker</span>
            </div>
            <div>
              <strong>{counts.ai}</strong>
              <span>IA</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section section-glow" id="feed">
        <div className="news-toolbar">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Categorias</p>
            <h2>Leitura rapida com filtros por tema.</h2>
          </div>

          <div className="filter-row">
            {Object.entries(categoryMap).map(([value, label]) => (
              <button
                className={`filter-chip ${activeCategory === value ? 'filter-active' : ''}`}
                key={value}
                type="button"
                onClick={() => setActiveCategory(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {featured ? (
          <div className="headline-layout">
            <article className="headline-card">
              <div className="headline-topline">
                <span className="project-category">
                  {categoryMap[featured.category]}
                </span>
                <span className="headline-source">{featured.source}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="headline-footer">
                <span>{formatDateTime(featured.publishedAt)}</span>
                <a
                  className="text-link"
                  href={featured.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir fonte
                </a>
              </div>
            </article>

            <div className="news-grid">
              {rest.map((item) => (
                <article className="news-card" key={item.id}>
                  <div className="headline-topline">
                    <span className="project-category">{categoryMap[item.category]}</span>
                    <span className="headline-source">{item.source}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="headline-footer">
                    <span>{formatDateTime(item.publishedAt)}</span>
                    <a
                      className="text-link"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ler mais
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <h3>Nenhuma noticia encontrada para este filtro.</h3>
            <p>Tente voltar para outra categoria para ver mais resultados.</p>
          </div>
        )}
      </section>
    </>
  )
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default App

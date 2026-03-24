import { useEffect, useMemo, useState } from 'react'
import './App.css'

const conceptSites = [
  {
    title: 'Hamburgueria premium',
    tag: 'Food brand',
    summary:
      'Landing vibrante para cardapio, combos, reservas e pedidos com visual forte de marca.',
    href: 'https://hamburgueria.feijao89.top',
    cta: 'Abrir site',
  },
  {
    title: 'Marca de refrigerante',
    tag: 'Beverage campaign',
    summary:
      'Site promocional com storytelling visual, cores fortes, produto em destaque e campanha sazonal.',
    href: 'https://refrigerante.feijao89.top',
    cta: 'Abrir site',
  },
  {
    title: 'Loja de carros',
    tag: 'Automotive showcase',
    summary:
      'Catalogo com carros em destaque, fichas tecnicas, financiamento e apresentacao premium.',
    href: 'https://carros.feijao89.top',
    cta: 'Abrir site',
  },
  {
    title: 'Clinica institucional',
    tag: 'Trust-driven website',
    summary:
      'Site focado em credibilidade, servicos, equipe, agenda e clareza de atendimento.',
    href: 'https://clinica.feijao89.top',
    cta: 'Abrir site',
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
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handlePointerMove(event) {
      const nextX = event.clientX / window.innerWidth - 0.5
      const nextY = event.clientY / window.innerHeight - 0.5
      setPointer({ x: nextX, y: nextY })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  const shellStyle = {
    '--pointer-x': `${pointer.x.toFixed(4)}`,
    '--pointer-y': `${pointer.y.toFixed(4)}`,
  }

  return (
    <div
      className={`site-shell ${isNewsPage ? 'is-news' : 'is-home'}`}
      style={shellStyle}
    >
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
          <p className="eyebrow">Hub principal</p>
          <h1>Projetos autorais organizados em um unico ponto de entrada.</h1>
          <p className="lead">
            Este site agora funciona como a pagina central do meu portfolio.
            Aqui ficam os acessos para as microsites publicadas e para o radar
            de noticias em tempo real.
          </p>

          <div className="signal-row">
            {['Portfolio hub', 'Microsites', 'Noticias', 'Cloudflare'].map((signal) => (
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
            <a className="button button-secondary" href="https://www.feijao89.top/noticias">
              Abrir noticias
            </a>
          </div>
        </div>

        <aside className="hero-card reactive-panel">
          <p>Acesso rapido</p>
          <h2>Radar de noticias e quatro estudos publicados em subdominios proprios.</h2>
          <div className="quote-block">
            <span>Links principais</span>
            <p>
              `www.feijao89.top/noticias`
              <br />
              `hamburgueria.feijao89.top`
              <br />
              `refrigerante.feijao89.top`
              <br />
              `carros.feijao89.top`
              <br />
              `clinica.feijao89.top`
            </p>
          </div>
        </aside>
      </section>

      <section className="section section-glow" id="conceitos">
        <div className="section-heading">
          <p className="eyebrow">Projetos publicados</p>
          <h2>
            Cada card abaixo abre um case separado em seu proprio subdominio.
          </h2>
        </div>

        <div className="concept-grid">
          {conceptSites.map((site) => (
            <article className="concept-card reactive-card" key={site.title}>
              <span className="project-category">{site.tag}</span>
              <h3>{site.title}</h3>
              <p>{site.summary}</p>
              <a className="text-link" href={site.href} target="_blank" rel="noreferrer">
                {site.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section builder-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Radar de noticias</p>
          <h2>O monitor de noticias continua separado como produto proprio dentro do hub.</h2>
        </div>

        <div className="builder-grid">
          <article className="builder-card reactive-card">
            <span className="project-category">Seguranca</span>
            <h3>Noticias sobre seguranca da informacao</h3>
            <p>
              Leitura centralizada com atualizacao por feeds e organizacao por tema.
            </p>
          </article>

          <article className="builder-card reactive-card">
            <span className="project-category">Hacker</span>
            <h3>Categoria separada para ecossistema hacker</h3>
            <p>
              Painel com foco em campanhas, tecnicas e acontecimentos relevantes.
            </p>
          </article>

          <article className="builder-card reactive-card">
            <span className="project-category">IA</span>
            <h3>Cobertura de inteligencias artificiais</h3>
            <p>
              Acompanhamento de OpenAI, Gemini, Anthropic e noticias do setor.
            </p>
          </article>
        </div>
      </section>

      <section className="section contact-panel" id="contato">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>O hub principal agora aponta direto para todos os sites publicados.</h2>
          <p className="contact-copy">
            Sempre que um novo case entrar no ar, basta adicionar mais um card
            aqui na home principal.
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

        <aside className="news-sidepanel reactive-panel">
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
            <article className="headline-card reactive-panel">
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
                <article className="news-card reactive-card" key={item.id}>
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

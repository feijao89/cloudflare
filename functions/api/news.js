const FEEDS = [
  {
    category: 'security',
    source: 'BleepingComputer',
    url: 'https://www.bleepingcomputer.com/feed/',
  },
  {
    category: 'hacker',
    source: 'The Hacker News',
    url: 'https://feeds.feedburner.com/TheHackersNews',
  },
  {
    category: 'ai',
    source: 'Google News AI',
    url: 'https://news.google.com/rss/search?q=%22artificial+intelligence%22+OR+OpenAI+OR+Anthropic+OR+Gemini&hl=en-US&gl=US&ceid=US:en',
  },
]

export async function onRequestGet() {
  const settled = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const response = await fetch(feed.url, {
        headers: {
          'User-Agent': 'feijao89-news-monitor/1.0',
        },
      })

      if (!response.ok) {
        throw new Error(`Feed failed: ${feed.source}`)
      }

      const xml = await response.text()
      return parseFeed(xml, feed)
    }),
  )

  const items = settled
    .filter((result) => result.status === 'fulfilled')
    .flatMap((result) => result.value)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 18)

  return Response.json({
    updatedAt: new Date().toISOString(),
    items,
  })
}

function parseFeed(xml, feed) {
  const matches = xml.match(/<item\b[\s\S]*?<\/item>/g) || []

  return matches
    .map((item, index) => {
      const title = extractTag(item, 'title')
      const link = extractTag(item, 'link')
      const description = cleanText(extractTag(item, 'description'))
      const pubDate = extractTag(item, 'pubDate')

      if (!title || !link) {
        return null
      }

      return {
        id: `${feed.category}-${index}-${hashCode(`${title}${link}`)}`,
        category: feed.category,
        source: feed.source,
        title: cleanText(title),
        excerpt: truncate(description || cleanText(title), 220),
        url: cleanUrl(link),
        publishedAt: toIsoDate(pubDate),
      }
    })
    .filter(Boolean)
}

function extractTag(content, tagName) {
  const match = content.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'))
  return match ? match[1].trim() : ''
}

function cleanText(value) {
  const normalized = decodeHtml(
    value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1'),
  )

  return decodeHtml(
    normalized
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  )
}

function cleanUrl(value) {
  return decodeHtml(value).replace(/\s+/g, '')
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function truncate(value, maxLength) {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength - 1).trim()}…`
}

function toIsoDate(value) {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString()
  }

  return parsed.toISOString()
}

function hashCode(value) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }

  return Math.abs(hash)
}

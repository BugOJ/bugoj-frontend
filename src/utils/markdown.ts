import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'
import hljs from 'highlight.js'

import 'highlight.js/styles/github.css'
import 'katex/dist/katex.min.css'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  highlight(
    code: string,
    lang: string,
    _attrs: string
  ): string{
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code>${
        hljs.highlight(code, { language: lang }).value
      }</code></pre>`
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(
      code
    )}</code></pre>`
  },
})

md.use(mk)

export default md

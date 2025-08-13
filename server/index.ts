import type { PluginFunction } from '@vuepress/core'

export function removeHtmlExtensionPlugin(): PluginFunction {
  return function () {
    return {
      extendsPage: page => {
        let { frontmatter = {}, path } = page

        if (frontmatter.permalink) {
          return
        }

        if (path === '/404.html') {
          page.path = '/404.html'
        } else if (path.endsWith('.html')) {
          page.path = path.slice(0, -5)
        } else if (path.endsWith('/')) {
          page.path = `${path.slice(0, -1)}/`
        }
      },
      name: 'vuepress-plugin-remove-html-extension',
    }
  }
}

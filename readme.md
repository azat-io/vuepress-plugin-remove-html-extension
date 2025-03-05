# vuepress-plugin-remove-html-extension

<img src="https://avatars.githubusercontent.com/u/48539483?s=100" align="right" alt="VuePress" />

[![Version](https://img.shields.io/npm/v/vuepress-plugin-remove-html-extension.svg?color=4fb17b&labelColor=2a2f44)](https://npmjs.com/package/vuepress-plugin-remove-html-extension)
[![Monthly Download](https://img.shields.io/npm/dm/vuepress-plugin-remove-html-extension.svg?color=4fb17b&labelColor=2a2f44)](https://npmjs.com/package/vuepress-plugin-remove-html-extension)
[![GitHub License](https://img.shields.io/badge/license-MIT-4fb17b.svg?color=4fb17b&labelColor=2a2f44)](https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/license.md)

VuePress v2 plugin for generating clean urls without `.html` extension.

## Installation

```sh
npm install --save vuepress-plugin-remove-html-extension
```

## Usage

Add plugin to your VuePress config:

```js
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

export default {
  plugins: [removeHtmlExtensionPlugin()],
}
```

### Netlify

If you are using [Netlify](https://netlify.com) to deploy your website, open "Site settings", "Build and deploy" tab. In the "Asset optimization" section, check the "Pretty URLs" checkbox.

## Contribution

Pull requests are welcome.

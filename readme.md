# vuepress-plugin-remove-html-extension

<img src="https://avatars.githubusercontent.com/u/48539483?s=100" align="right" alt="VuePress" />

![Version](https://img.shields.io/npm/v/vuepress-plugin-remove-html-extension.svg)
![Downloads](https://img.shields.io/npm/dm/vuepress-plugin-remove-html-extension.svg)

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

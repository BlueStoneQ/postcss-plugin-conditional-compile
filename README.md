# babel-plugin-conditional-compile
**[README-zh-CN](README_zh_CN.md)**

## Overview

A Babel plugin for conditional compilation.

## Install

To install the plugin, run the following command:

```bash
npm install --save-dev postcss-plugin-conditional-compile
```

Or, if you're using Yarn:

```bash
yarn add --dev postcss-plugin-conditional-compile
```

## Usage

### Configuration

Add the plugin to your postcss configuration file.

**postcss.config.js**

```js
module.exports = {  
  plugins: [
    ...
    require('./babel-plugin-conditional-compile')({  
      targetPlat: 'WX'
    }) 
  ]  
}
```

### Coding with Conditional Compilation

In your css files, you can use special comments to mark code blocks for conditional compilation.

```css
@media screen and (min-width: 480px) {
  body {
      background-color: lightgreen;
  }
}

/* ifdef targetPlat=WX|TT */
.wx {
  border: 1px solid black;
}

ul li {
padding: 5px;
}
/* endif */

/* ifndef targetPlat=WX|TT */
.tt1 {
  border: 1px solid black;
}

ul li {
padding: 5px;
}
/* endif */

.a {}
```

## License
[LICENSE](LICENSE)


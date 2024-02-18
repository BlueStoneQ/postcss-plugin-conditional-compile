
# babel-plugin-conditional-compile
**[英文文档](README.md)**

## 概览

一个postcss插件，用于条件编译。

## 安装

要安装此插件，请运行以下命令：

```bash
npm install --save-dev postcss-plugin-conditional-compile
```

或者，如果您正在使用Yarn：

```bash
yarn add --dev postcss-plugin-conditional-compile
```

## 使用方法

### 配置

将插件添加到您的postcss配置文件中。

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

### 编码与条件编译

在您的css文件中，您可以使用特殊注释来标记条件编译的代码块。

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

## 开源协议
[LICENSE](LICENSE)
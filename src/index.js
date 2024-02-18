import { getIfdefCommentTargetPlat, getIfndefCommentTargetPlat } from './utils.js'

const plugin = (opts = {}) => {
  const { targetPlat } = opts
  let isRemove = false

  return {
    postcssPlugin: 'postcss-conditional-compile',
    Once(root) {
      	root.walk(node => {
          if (node.type === 'comment') {
            
            const commentText = node.text.trim()
            
            if (commentText.startsWith('ifdef')) {
              if (!getIfdefCommentTargetPlat(node).includes(targetPlat)) {
                 isRemove = true // 状态机状态流转：开启删除状态
              }

              node.remove() // 删除条件编译的注释指令
            }
            
            if (commentText.startsWith('ifndef')) {
              if (getIfndefCommentTargetPlat(node).includes(targetPlat)) {
                isRemove = true // 状态机状态流转：开启删除状态
              }

              node.remove() // 删除条件编译的注释指令
            }
            
            if (commentText.startsWith('endif')) {
              isRemove = false // 关闭标识 后续所有节点打上false标记
              node.remove() // 删除条件编译的注释指令
            }
          }
          // 根据isRemove来决定是否删除当前节点
          if (isRemove === true) node.remove()
        })
    }
  }
};

// 插件标记：当PostCSS加载插件时，它可以检查这个属性，以确保加载的确实是一个有效的PostCSS插件
plugin.postcss = true;

export default plugin;

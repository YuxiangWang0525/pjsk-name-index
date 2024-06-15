# pjsk-name-index 使用文档
`pjsk-name-index` 是一个用于索引《Project Sekai》中角色等名称的库。该库包含角色的全名、简称以及团队名称的索引。
## 安装
在您的项目中安装 `pjsk-name-index`，您可以使用 npm 或 yarn 命令行工具：
```bash
npm install pjsk-name-index
```
或者
```bash
yarn add pjsk-name-index
```
## 引入
您可以在 Node.js 环境或 Vue 项目中引入此库。
### 在 Node.js 中引入
```javascript
const pjskIndex = require('pjsk-name-index');
```
### 在 Vue 中引入
首先，在 Vue 组件中引入：
```javascript
import pjskIndex from 'pjsk-name-index';
```
然后，您可以在 Vue 组件的 `data`、`computed` 或方法中使用这些索引。
## 列出所有名称
要列出所有角色的全名，您可以使用 `full_name_cn` 数组：
```javascript
console.log(pjskIndex.full_name_cn);
```
要列出所有团队的名称，您可以使用 `team_name_cn` 数组：
```javascript
console.log(pjskIndex.team_name_cn);
```
## 使用简称转全称索引表
该库提供了一个 `character_index` 对象，它将角色的简称映射到其全名。例如，要将 "ick" 转换为 "星乃一歌"，您可以使用：
```javascript
console.log(pjskIndex.character_index['ick']);
// 输出: 星乃一歌
```
同样，`team_index` 对象可以将团队的简称映射到其全名。例如，要将 "vs" 转换为 "虚拟歌手"，您可以使用：
```javascript
console.log(pjskIndex.team_index['vs']);
// 输出: 虚拟歌手
```
在 Vue 组件中，您可以在模板或方法中使用这些索引来显示全名：
```vue
<template>
  <div>
    <p>角色全名：{{ characterIndex['ick'] }}</p>
    <p>团队全名：{{ teamIndex['vs'] }}</p>
  </div>
</template>
<script>
import pjskIndex from 'pjsk-name-index';
export default {
  data() {
    return {
      characterIndex: pjskIndex.character_index,
      teamIndex: pjskIndex.team_index
    };
  }
}
</script>
```
这样，您就可以方便地在 Vue 应用中使用 `pjsk-name-index` 库来处理《Project Sekai》中的角色和团队名称了。

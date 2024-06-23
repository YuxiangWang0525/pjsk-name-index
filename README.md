# pjsk-name-index 使用文档
`pjsk-name-index` 是一个用于索引《Project Sekai》(下简称“世界计划”)中角色等名称的库。该库包含了所有角色的全称、简称、社团名称、戏称等信息，并提供了一个易于使用的索引表，方便快速查找和转换名称。
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
您可以在使用Node.js的后端或使用任意前端框架的项目中引入 `pjsk-name-index`。
以下使用Vue.js作为示例：
(注:如无特别说明,下文的所有代码均使用Vue.js 3.x编写,且使用了Vue.js单文件组件(SFC)语法)

### 引入库
在Vue组件中，使用`import`语句引入`pjsk-name-index`库：
``` vue
<script>
import { full_name } from 'pjsk-name-index';
</script>
```
### 原生JavaScript引入
在原生JavaScript中，使用`<script>`标签引入`pjsk-name-index`库：
``` html
<script src="https://unpkg.com/pjsk-name-index/dist/pjskni.min.js"></script>
```

## 索引


### 万能的sekai_index()方法
#### 字段名表

| 字段  | 字段含义                |
| ------------ |---------------------|
| full_name  | 社团英文名称/角色英文名称       |
| full_name_cn  | 社团中文名称/角色中文名称 |
|  simple_name | 社团简称/角色简称           |
| joke_name_cn  | (仅角色)角色戏称(别称)       |
| full_name_cn_official  | (仅社团) 社团中文官方名称      |


`pjsk-name-index`库中提供了`sekai_index()`方法,该方法可以根据提供的参数快速索引到对应的角色的其他名称。  
#### 用法:  
`sekai_index('角色全称/团队全称','团队类型(team或individual 社团或个人)').期望字段`  
#### 样例:
``` js
import { sekai_index } from 'pjsk-name-index';

console.log(sekai_index("knd","individual").full_name_cn)

// 输出结果: > 宵崎奏

console.log(sekai_index("萌萌飞跃少女团",'team').full_name)
// 输出结果: > MORE MORE JUMP!
```
请注意,原生引入时,您需要使用 pjskni.sekai_index() 来调用sekai_index方法
### 手动索引

#### 常量名表
| 常量名称 | 类型  | 含义  |
| ------------ | ------------ | ------------ |
|  full_name |  列表 | 角色英文全名  |
| full_name_cn  | 列表  | 角色中文全名  |
| team_name  | 列表  |  社团英文全名 |
| team_name_cn  |  列表 | 社团中文全名  |
|  team_name_cn_official | 列表  |  中文官译社团全名 |
| simple_name  | 列表  | 角色简称  |
|  simple_team_name | 列表  | 团队简称  |
| joke_name_cn  |  字典 |  角色戏称(别名) |
| character_index  |  字典 |  依据简称手动匹配角色中文全名 |
| team_index  | 字典  | 依据简称手动匹配社团中文全名  |
| team_cn_official_index  | 字典  |  中文官译社团全名手动匹配社团中文全名 |
| team_cn_index  | 字典  |  社团中文全名手动匹配中文官译社团全名 |

#### 用法:
`import { 需要的常量 } from 'pjsk-name-index';`

#### 样例:
``` js
import { full_name_cn } from 'pjsk-name-index';

console.log(full_name_cn[0])

// 输出结果: > 初音未来
```
## 版权及协议声明
本项目中的所有角色名,团队名版权归属Colorful Palette、SEGA、Crypton Future Media等公司所有,如有侵权请联系
其余逻辑代码均在MIT协议下开源,您可以自由使用。
协议:MIT License
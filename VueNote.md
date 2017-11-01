### 使用npm安装Vue

* `npm install vue`

### 快速搭建Vue项目

* `vue-cli` 是一个脚手架，用于快速地搭建项目，生成基础的项目代码。可以通过npm进行安装：  
    #全局安装 vue-cli  
    `npm install --global vue-cli`
* 创建项目具体步骤(创建至当前目录下)：
1. `vue inti webpack project-name` //创建一个基于webpack模板的新项目，之后会进行一些配置，默认回车即可。
2. `cd project-name` //进入项目
3. `npm install` //运行安装相关文件
4. `npm run dev` //运行项目，dev相当于一个服务器，会调用node新建一个服务器用来运行项目。之后每次运行该项目时，只要输入`npm run dev`即可，不需要重复以上的任何步骤。运行成功后可以输入`http://localhost:8080/`查看。

### 目录解析

| 目录/文件       | 说明           |
| -------------  |:---------------|
| build          | 最终发布代码存放位置 |
| config         | 配置目录，包括端口号等|
| node_modules   | npm加载的项目依赖|
| src            | 开发目录，基本上做的事情都在这个目录。包含了几个目录以及文件：<br>assets:放置一些图片，如logo等<br>components:目录里面放置一个组件文件，可以不用<br>App.vue:项目入口文件<br>main.js:项目核心文件|
| static         | 静态资源目录，如图片、字体等|
| test           | 初始测试目录，可以删除|
| .xxx文件        | 配置文件，包括语法配置、git配置等等|
| index.html     | 项目入口文件，可以添加一些meta信息或统计代码等等|
| package.json   | 项目配置文件|
| README.md      | 项目说明文档|

### 摘记
#### 访问默认url(localhost:8080)时指定页面
* `router.push('/path')` //可以在main.js最后添加，用于访问无路由url时的默认显示页面(刷新会回到这个页面)
* 在router(index.js)中添加一个默认的route`{ path: '/', name: 'CpmponentName' , component: Component }`

#### 关于Router(router/index.js)
```
export default new Router({
  linkActiveClass: 'active', // 指定激活的样式名称
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
```

* vue-select插件
`<v-select v-model="selectP" :options="options" multiple></v-select>` //多选
`<v-select v-model="selectP" :options="options"></v-select>` //单选

* `.$emit` 子组件向父组件传参
* `.$broadcast` 父组件向子组件传参

* `v-for="(item, idex) in items"` item和index的位置不可变换

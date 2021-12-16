# 开始创建React应用 

这个项目是通过 [Create React App](https://github.com/facebook/create-react-app)启动的。

## 可用脚本

在项目目录中，您可以运行:

### `yarn start`

以开发模式运行应用程序  
打开[http://localhost:3000](http://localhost:3000)在浏览器中查看。  
 
如果您进行编辑，页面将重新加载  
您还将在控制台中看到任何lint错误。

### `yarn test`

在交互观察模式下启动测试运行程序

### `yarn build`

将应用程序生成到' build '文件夹中  

### `yarn eject`

**注意:这是单向操作。 一旦你“弹出”，你就不能回去了!**

**配置文件已暴露,可忽略!**


```
react_serve_dom
├─ .env //请求配置
├─ .gitignore //被忽略项
├─ config //webpack配置
├─ package-lock.json
├─ package.json //依赖管理项
├─ public //公共
│  ├─ index.html
│  ├─ logo.png
│  └─ manifest.json
├─ README.md 
├─ scripts //启动文件
│  ├─ start.js
│  └─ test.js
└─ src 
   ├─ App.jsx
   ├─ App.less
   ├─ assets //静态资源
   ├─ axios //接口
   ├─ components //公共组件
   ├─ index.js 
   ├─ less //公共样式
   ├─ router //路由配置
   ├─ utils //三方
   └─ views //路由文件
```
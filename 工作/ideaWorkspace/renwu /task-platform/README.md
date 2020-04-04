# task-platform

## Project setup
```
npm install --registry=http://registry.npm.taobao.org
```

### 目录结构
```
...
├── src
│   ├── App.vue
│   ├── assets                    // 存放静态资源文件：css img fonts等
│   ├── components                // 放自己创建的组件
│   │   └── accept
│   ├── main.js                   // 入口函数
│   ├── router                    // 路由文件
│   │   ├── accept.router.js      // 接单端界面路由
│   │   ├── grant.router.js       // 下单端界面路由
│   │   ├── index.js              // 路由入口函数，在这里配置各种路由守卫等。
│   │   └── routes.js             // 配置和合并各种路由路径
│   ├── store                     // vuex
│   │   └── index.js
│   ├── vant
│   │   └── index.js              // 在这里引入vant组件
│   └── views                     // 视图文件
│       ├── accept                // 接单端的视图文件
│       │   ├── Home.vue          // 首页
│       │   ├── Login.vue         // 登陆
│       │   ├── Mycenter.vue      // 个人中心
│       │   ├── Order.vue         // 订单管理
│       │   ├── Register.vue      // 注册
│       │   ├── Stat.vue          // 统计
│       │   └── index.vue         // accept所有视图文件的入口
│       ├── grant                 // 下单端的视图文件
│       │   ├── Login.vue
│       │   ├── Register.vue
│       │   └── index.vue
│       └── index.vue
...

```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

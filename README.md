# Vue 后台内容管理系统

> 本项目是对 [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/) 源码研究的作品，对其中部分组件进行了修改，功能完善度会持续更新。

## Demo

[Demo](https://wermdany.github.io/my-admin-element/#/dashboard/console)

## 文件目录

``` tree
├─api                接口
├─assets             静态资源
├─components         组件
│  ├─Breadcrumb
│  ├─Hamburger
│  ├─SizeSelect
│  └─User
├─layouts            布局文件
│  ├─components      布局组件
│  │  ├─AppMain
│  │  ├─Navbar
│  │  ├─Settings
│  │  ├─Sidebar
│  │  └─TagsView
│  └─main            布局组-main
├─router             路由
│  └─modules         路由模块
├─store              Vuex
│  └─modules         Vuex模块
├─styles             全局样式和覆盖样式
├─utils              工具函数
└─views              页面
    ├─index          主页
    └─redirect       全局重定向页面
```

## 这个系统的设计思路

> 主要是对自己实际项目的需求，进行思考和修改

### 系统整体规范

#### 系统请求

>系统请求必须分为两层:
>网络请求状态码 ，这一层只作为网络层面的请求是否成功，其余请求均为 200  
>后台返回的状态码，取消请求或者对 axios 封装的状态吗应该于后台保持一致
>如果一个请求，发生了错误，如果影响到了自己业务逻辑以外的情况，应该放到全局处理，比如：网络故障、网络错误、Token过期。
>如果这个请求仅仅是在自己业务逻辑中产生的错误，就应该放到当前逻辑中处理。

```json
{
    "code":0,
    "errMsg":"",
    "data":{...}
}
```

如果您的系统返回格式和这个不太一样，而且后台同学也不配合修改，那么，你应该去修改以下文件：

utils-request.js
store-modules-http.js

使返回的信息总能是一个格式

#### 编写规范

##### 组件

如果系统中需要一些通用的组件，那么你应该在根目录的 `components` 中编写，并且写上 name 属性，必须使用大驼峰，比如：`Breadcrumb`

##### 页面

页面必须写在 views 中，根据路由的嵌套进行嵌套页面，必须填写 name 属性，必须使用小驼峰，比如：`login`，如果这个页面被使用了，那么你应该把这个属性复制到路由表的 name 字段下，保证不出现问题，比如此页面能够被准确的缓存等等。

## 权限管理

## Vuex

## Vue-Router

## 请求拦截和请求取消

### 实现功能

1. 实现了全局的请求取消逻辑；
2. 在1的基础上，实现了切换路由自动取消之前发起的且没有返回的所有请求；
3. 在1的基础上，实现了基于请求函数名的重复请求阻止***1**；

>***1** Vue@2并不适合使用Map，后续判断逻辑需要完善判断条件，请求地址和参数，全部相等视为相同的请求或者进行或者进行 MD5 😂

### 思路

取消请求，使用了 Axios 的 CancelToken，系统的逻辑是，每次发起请求前都会实例化一个 CancelToken 然后调用 Vuex，把回调的 cancel 放到 Vuex 中，在请求的过程中，可以随时发起请求来中断请求，在返回的时候，response 拦截器 中把 Vuex 中相应的标识删除，而在请求失败，比如发生 cors 、404 、500 等错误的时候也需要这个请求在 Vuex 中的映射，解析 response err错误信息 取消 Vuex 中的映射，由于 Vuex 中的数据刷新就会全部消失，在请求前注册，在成功返回和错误返回都进行取消注册，从而形成一个闭环，用来维持这个逻辑的运行。

请求中断后，处理逻辑会跳转到 response 拦截器的错误，会和 validateStatus 设置的混合到一起，好在 原型上有一个 \_\_CANCEL\_\_ 可以通过判断是否有这个属性来

详细请看：[简书](https://www.jianshu.com/p/88fbd1149fa1)

## TagViews

### 实现功能

> 此部分主要参考了 [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/) 关于TagViews的源码。

TagViews 主要是在用户打开大量页面的时候，方便用户的切换，常常伴随着页面的缓存。

缓存使用的是 Vue 内置的组件 keep-alive ，由于使用了 __include__，这个组件有一些需要注意的地方，不然页面不会被缓存,一下为文档原话：

>匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。

或者去文档查看更多的细节 [keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)

总的来说就是，在配置路由的时候，name 字段应该和页面内的 name 字段相同，才能进行缓存。

### 思考

## 改变部分

### 使用了按需引入

该项目相对 `vue-element-admin` 把所有组件全部引入的引入方式，改为了**按需引入**，同时保留了大部分全局配置，减少了打包后的文件体积大小。

### 使用了 less

我个人习惯使用 less ，使用 webpack 内置的[模块化系统](https://webpack.docschina.org/concepts/modules) 同样可以解决 less(variables)-to-js 的问题。

### 增加了全局的虚拟滚动条 ❗

> 虚拟滚动条原理是使用了CSS3 transform translateY ，会导致内部元素无法获取相相对滚动位置，比如内置的 [Sticky组件](/src/components/SizeSelect/index.vue),会无效，如果项目中没有用到此类需要判断滚动的功能，可以使用

参照了 `sidebar` 的滚动条解决方法， 同样使用了 `el-scrollbar` 组件（可能会造成没必要的性能损耗）。

### 优化了面包屑

>对面包屑组件进行了修改，主要有两个小优化

1. 当面包屑可以点击的时候，使用内置组件 `router-link` 渲染，可以让用户直接右击再打开一个窗口。  

2. 当子路由的父路由拥有默认 `redirect` 的时候，如果当前页面就是这个重定向指向的路径的时候，就不可以被点击。

### 侧边栏修改

> 主要是两个小修改

1. 使用了 `element-ui` 的内置 Icon，并且修改了相关的组件（后续会考虑把antd@4+的svg图标全部引入）。

2. 当侧边栏收缩的时候，如过子菜单被选择，那么父菜单也会被标识为选中，便于用户在侧边栏被收缩的情况下，快速从侧边栏定位自己已经选择的位置。

## 登录之后的逻辑

1. 输入账号、密码后，登陆成功返回Token、和用户信息，是否保存到本地？
   + 保存得话，使用localStorage，保存到本地。
   + 不保存的话，保存到sessionStorage(刷新就消失)或保存至Vux刷新消失。
  
2. 使用Token去后台请求routes。
3. 把后台请求到route和本地的固定route合并，生成最终的route，挂载到Router。

## 页面刷新

> 页面刷新后，Vuex中的信息会消失。所以需要再次去请求，用户路由表信息不进行本地缓存。

1. 如果用户进行了保存本地，就拿Token，去再次请求，执行登陆逻辑 `2-3`。
2. 如果用户没有进行保存本地信息，就让用户再次登录。

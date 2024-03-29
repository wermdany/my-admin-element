export default {
  //*页面路径
  path: "",
  //*应用组件或者布局组件，默认为主布局组件，主要是可能有不同的页面风格
  component: "",
  //是否在侧边栏隐藏
  hidden: false,
  //*重定向 为： noRedirect 不可点击 , 如果一个父路由有多个子路由，强烈建议此处指向默认的子路由
  redirect: "",
  //是否始终显示根路由，默认渲染的时候，如果一个父路由下只有一个子路由就会只渲染子路由，当这个为true的时候，会始终渲染父路由 + 子路由 的嵌套关系
  alwaysShow: false,
  //*路由的名字，如果你想要这个页面被正确的缓存状态，那么最好和这个页面应用的组件/页面中的 name 字段保持一致
  name: "",
  // *路由元数据
  meta: {
    // 在侧边栏和面包导航的页面名字
    title: "",
    // icon,使用 element内置font-icon，只需要填写名字，后续可能会拓展第三方或者svg-icon
    icon: "",
    // 是否不缓存页面 只有在最底层有效
    noCache: false,
    // 如果设置为false，则不会在breadcrumb面包屑中显示
    breadcrumb: true,
    //固定在tagsViews , 只有首页会默认添加，其余只有在打开的时候才会出现
    affix: false,
    //页面的详细介绍
    introduce: ""
  },
  // *
  children: []
};

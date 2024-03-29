//命名空间

/**
 * 全局 UI 尺寸
 */
export const UI_SIZE = "UI_SIZE";
/**
 * 全局是否缩进侧边栏
 */
export const IS_COLLAPSE = "IS_COLLAPSE";
/**
 * 全局是否显示侧边栏LOGO
 */
export const SIDEBAR_LOGO = "SIDEBAR_LOGO";
/**
 * 全局是否固定头部
 */
export const FIXED_HEADER = "FIXED_HEADER";
/**
 * 是否开启标签页
 */
export const OPEN_TAGS_VIEW = "OPEN_TAGS_VIEW";
/**
 * 请求头 token 的名字
 */
export const HTTP_HEADER_TOKEN_NAME = "auth-token";
/**
 * 重复请求 Code ,应该避免和后台的请求错误码重复
 */
export const REPEAT_REQUEST_CODE = 8888;
/**
 * 用户的个人信息，包括 Token
 *
 */
export const USER_INFO = "USER_INFO";

/**
 * 请求返回状态码没有问题
 */

export const HTTP_PASS = 0;

/**
 * 即使没有登陆也能访问的页面
 *
 */
export const WHITE_PAGES_LIST = ["/login"];
/**
 * 从不显示在TagViews的页面的name,并且从不缓存
 */
export const NEVER_SHOW_TAG_VIEW_PAGES_NAME = ["redirect", "redirect-all"];
/**
 * 页面的默认 title
 */
export const DEFAULT_PAGE_TITLE = "My Admin Element";

/**
 * 页面尺寸临界 SM 768px
 */
export const SM_WIDTH = 768;
/**
 * 页面临界值 LG 1200px
 */
export const LG_WIDTH = 1120;

/**
 * 是否开启 route 的组件映射模块化命名 开启的话,route需要加上模块化的前缀
 *
 * 主要解决项目过大，不同模块又相同的名字问题，而最终所有的路由映射都会合并，防止冲突
 *
 * 比如：不同等级的管理员都有首页 那么
 *
 *  superAdmin/index => superAdmin_index
 *  admin/index  => admin_index
 */
export const OPEN_ROUTE_MODULE_NAME = true;

import { isArray } from "@/utils/validate";
/**
 *  根据后台返回的路由表组件名称，动态替换成component
 * @param {router}
 */
export function componentToName(router, component) {
  if (!isArray(router)) {
    throw new Error("路由表不是一个数组");
  }
  let res = [];
  router.forEach(item => {
    if (component.hasOwnProperty(item.component)) {
      item.component = component[item.component];
      res.push(item);
      if (item.children && item.children.length) {
        componentToName(item.children, component);
      }
    } else {
      throw new Error("缺少一个组件映射，组件名字为" + item.component);
    }
  });
  return res;
}
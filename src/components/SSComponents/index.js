/**
 * 全局注册 SSComponents 文件夹中的组件
 * @param {import('vue').App} app - Vue 3 应用实例
 */
export function registerSSComponents(app) {
  // Vite 使用 import.meta.glob 替代 require.context
  const modules = import.meta.glob("./**/*.vue", {
    eager: true,
  });

  // 遍历所有组件文件
  Object.entries(modules).forEach(([fileName, componentConfig]) => {
    // 获取组件配置
    const component = componentConfig.default;

    if (!component) return;

    // 优先使用组件自身定义的 name
    let componentName = component.name;

    // 如果组件没有定义 name，则从文件名生成
    if (!componentName) {
      componentName = fileName
        .replace(/^\.\//, "") // 去掉开头的 ./
        .split("/")
        .pop() // 获取文件名
        .replace(/\.vue$/, "") // 去掉 .vue 后缀
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
        .toLowerCase();
    }

    // 全局注册组件
    app.component(componentName, component);
  });
}

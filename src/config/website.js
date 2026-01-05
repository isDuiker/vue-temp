/**
 * 全局配置文件
 */
export default {
  title: "",
  logo: "Temp",
  key: "temp", //配置主键,目前用于存储
  indexTitle: "xxxx系统",
  copyRight: "xxxx技术有限公司 Copyright © All rights reserved",
  clientId: "esm", // 客户端id
  clientSecret: "saber_secret", // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  captchaMode: true, // 是否开启验证码模式
  tokenTime: 3000, //token过期时间
  Authorization: "Blade-Auth",
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  setting: {
    sidebar: "vertical",
    tag: false,
    debug: true,
    collapse: true,
    search: true,
    lock: true,
    screenshot: true,
    fullscren: true,
    theme: false,
    menu: true,
  },
  fistPage: {
    name: "项目概览",
    path: "/overview",
  },
  //配置菜单的属性
  menu: {
    iconDefault: "",
    label: "name",
    path: "path",
    icon: "source",
    children: "children",
    query: "query",
    href: "path",
    meta: "meta",
  },
  //auth配置
  auth: {
    // 使用后端工程 @org.springblade.test.Sm2KeyGenerator 获取
    publicKey:
      "xxxxxxxxx6763638652045421753561c24c873f5dead85b5xxxxxxxxced3d6ce33fc6c62ec00baff6be1f69a",
  },
};

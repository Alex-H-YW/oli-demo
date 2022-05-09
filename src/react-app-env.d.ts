/// <reference types="react-scripts" />
// 如果是cra生成的项目，则在react-app-env.d.ts中添加
// 为模块声明类型
declare module '*.module.less' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
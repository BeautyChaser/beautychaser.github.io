// 告诉 TypeScript，所有以 .md?raw 结尾的导入都是字符串
declare module "*.md?raw" {
    const content: string;
    export default content;
}

// 顺便也可以把不带 ?raw 的也定义了（如果你以后要用插件的话）
declare module "*.md" {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
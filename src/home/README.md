# 首页弹性标题

- `elastic-lettering.tsx` 来自用户提供的完整源码，保留动画逻辑，仅将 `cn` 改用现有 `clsx`，并以主题 CSS 代替根节点的 Tailwind 类。
- `main.tsx` 只挂载首页标题。原 Vue 首页按需加载 `static/home/hero.js`，离开路由时卸载；模块加载失败时保留静态标题。
- 背景位于 `static/img/home-welcome.jpg`，由用户的原 PNG 导出网页 JPEG；轻微模糊和暗色遮罩在 `static/css/xylab-theme.css` 中实现，不修改原图。
- 修改后运行 `pnpm run check:activities`（检查首页和 Activities）以及 `pnpm run build:home`。静态站点需要保留生成的 `static/home/` 文件。
- 原仓库只有编译后的 Vue 文件，因此首页挂载点与生命周期位于 `static/js/app.759c0e12d52312dca5a3.js` 的 Home 组件中，旧 source map 不包含新增代码。

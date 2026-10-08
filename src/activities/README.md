# Activities 轮播

使用用户提供的 ConcaveCarousel TSX 源码（不是 PrismCarousel）。原始着色器、拖动、惯性、自动播放和清理逻辑保留；仅将 `@/lib/utils` 的 `cn` 换为 `clsx`，根节点 Tailwind 类换为主题文件中的同等局部 CSS。

- `main.tsx`：独立 React 挂载入口，沿用 Vue 的 16 张照片和放大弹窗。
- `concave-carousel.tsx`：用户提供的组件。
- `../../static/css/xylab-theme.css`：仅针对轮播的布局与颜色。
- `../../static/js/app.759c0e12d52312dca5a3.js`：现有 Vue 发布包，Activities 生命周期加载模块、暂停及卸载。

安装依赖后运行 `pnpm check:activities` 和 `pnpm build:activities`。构建产物在 `static/activities/`，静态部署时需包含它。更新代码时同步修改入口资源版本号以避免旧缓存。

只在进入 Activities 时加载 React/Three.js。组件加载失败时保留原照片墙；离开页面时释放 WebGL 资源。系统开启“减少动态效果”时禁用自动播放，仍可手动切换。

组件来源为用户提供的文件，不额外授予或变更原组件许可证。

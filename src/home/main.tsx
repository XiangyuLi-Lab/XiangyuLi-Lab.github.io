import { createRoot } from "react-dom/client";
import ElasticLettering from "./elastic-lettering";

/**
 * 在首页的独立 host 节点中挂载用户提供的弹性标题。
 * 返回卸载方法，供 Vue 离开首页时释放动画与事件监听；不管理其他页面内容。
 */
export function mount(host: HTMLElement) {
  const root = createRoot(host);
  root.render(
    <ElasticLettering
      as="h1"
      text="Welcome to Xiangyu Li Lab"
      fontSize="var(--home-title-size)"
      fontWeight={700}
      lineHeight={1.15}
      color="#ffffff"
      tensionTint={0}
      hint
    />,
  );
  return { unmount: () => root.unmount() };
}

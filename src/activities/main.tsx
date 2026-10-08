import { createRoot } from "react-dom/client";
import ConcaveCarousel from "./concave-carousel";

/**
 * 只管理 Vue 提供的轮播容器，图片列表和放大弹窗仍由原 Activities 页面管理。
 * host 是独立挂载节点，photos 是既有照片路径，onSelect 接收被选中的图片路径。
 * 返回暂停和卸载方法；路由离开时必须卸载以释放 WebGL 和事件监听。
 */
export function mount(host: HTMLElement, photos: string[], onSelect: (photo: string) => void) {
  const root = createRoot(host);
  const items = photos.map((src, index) => ({ src, alt: `Lab activity photo ${index + 1}` }));
  const backgroundColor = getComputedStyle(host).getPropertyValue("--xylab-blue-soft").trim() || "#eef1f7";
  const render = (paused: boolean) => root.render(
    <ConcaveCarousel
      items={items}
      backgroundColor={backgroundColor}
      aspect={1.5}
      autoplay="step"
      interval={5}
      captions={false}
      wheel={false}
      dpr={1.5}
      paused={paused}
      ariaLabel={`Lab activities: ${items.length} photos. Drag or use arrow keys to browse. Enter enlarges a photo. Space pauses autoplay.`}
      onSelect={(item) => onSelect(item.src)}
    />,
  );
  render(false);
  return { setPaused: render, unmount: () => root.unmount() };
}

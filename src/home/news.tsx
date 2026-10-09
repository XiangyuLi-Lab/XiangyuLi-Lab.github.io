const recruitmentText =
  "We are looking for creative and highly motivated students to join our group. If you would like to discuss potential opportunities, please contact us.";

const newsMarkup = `
  <p class="news-recruitment-host">${recruitmentText}</p>
  <article class="news-update">
    <h4>· 2026:</h4>
    <p>New Paper! SpaMOAL, our deep learning method for accurate spatial domain identification from multi-omics data, was accepted for publication in <em>PLOS Biology</em> (CAS Q1).</p>
  </article>
  <article class="news-update">
    <h4>· 2026:</h4>
    <p>New Paper! STRAND, our comprehensive subcellular-resolution spatial transcriptome RNA architecture and navigation database, was accepted for publication in <em>Nucleic Acids Research</em> (CAA Class A+, IF = 19.16).</p>
  </article>
  <article class="news-update">
    <h4>· 2024-12:</h4>
    <p>New Paper! CancerSRT, our spatially resolved transcriptomics database for human cancers, was published in the <em>Journal of Genetics and Genomics</em>.</p>
  </article>
`;

const publicationsMarkup = `
  <div class="title" data-publication-2026="spamoal" style="display: flex;">
    <div class="bull">&bull;</div>
    <div class="content">
      Wang J*, Huo Y*, Zhao R, Pan Y, Wu J, Wang H, <b>Li X<sup>#</sup></b>.(2026)
      <a href="https://doi.org/10.1371/journal.pbio.3003690" target="_blank" rel="noopener noreferrer" class="title1">SpaMOAL is a deep learning method that enables accurate spatial domain identification from multi-omics data.</a>
      Plos Biology.24(9): e3003690.(IF= 7.2)
    </div>
  </div>
  <br><br>
  <div class="title" data-publication-2026="strand" style="display: flex;">
    <div class="bull">&bull;</div>
    <div class="content">
      Wu Z*, Huo Y*, Xu W*, <b>Li X<sup>#</sup></b>, Li T<sup>#</sup>(2026)
      <a href="https://strand.phasep.pro" target="_blank" rel="noopener noreferrer" class="title1">STRAND: A Comprehensive Subcellular-Resolved Spatial Transcriptome RNA Architecture and Navigation Database.</a>
      Nucleic Acids Research.(CAA Class A+, IF = 19.16)
    </div>
  </div>
  <br><br>
`;

/** 找到首页和独立 News 页的新闻列表容器。 */
function findNewsContainers(): HTMLElement[] {
  const containers: HTMLElement[] = [];
  const standaloneNews = document.querySelector<HTMLElement>("#body > .news");

  if (standaloneNews?.children[2] instanceof HTMLElement) {
    containers.push(standaloneNews.children[2]);
  }

  const homeNewsTitle = Array.from(
    document.querySelectorAll<HTMLElement>("#body > .container .titles"),
  ).find((title) => title.textContent?.trim() === "News");
  const homeNewsSection = homeNewsTitle?.parentElement;

  if (homeNewsSection?.children[2] instanceof HTMLElement) {
    containers.push(homeNewsSection.children[2]);
  }

  return containers;
}

/** 同步新闻内容，并将两篇新论文放在 Publications 列表最上方。 */
function syncContent(): void {
  for (const container of findNewsContainers()) {
    if (container.dataset.newsUpdated === "true") continue;
    container.innerHTML = newsMarkup;
    container.dataset.newsUpdated = "true";
  }

  const publicationList = document.querySelector<HTMLElement>("#publications .box > li");
  if (publicationList && publicationList.dataset.publicationsUpdated !== "true") {
    const template = document.createElement("template");
    template.innerHTML = publicationsMarkup;
    // 新增节点继承现有 Vue 作用域标记，复用圆点间距、链接加粗及移动端样式。
    const scopeAttributes = publicationList.getAttributeNames().filter((name) => name.startsWith("data-v-"));
    for (const element of template.content.querySelectorAll("*")) {
      for (const attribute of scopeAttributes) element.setAttribute(attribute, "");
    }
    publicationList.prepend(template.content);
    publicationList.dataset.publicationsUpdated = "true";
  }
}

const app = document.getElementById("app");
if (app) {
  const observer = new MutationObserver(syncContent);
  observer.observe(app, { childList: true, subtree: true });
  syncContent();
}

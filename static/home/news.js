var r="We are looking for creative and highly motivated students to join our group. If you would like to discuss potential opportunities, please contact us.",l=`
  <p class="news-recruitment-host">${r}</p>
  <article class="news-update">
    <h4>\xB7 2026-9:</h4>
    <p>New Paper! SpaMOAL, our deep learning method for accurate spatial domain identification from multi-omics data, was accepted for publication in <em>PLOS Biology</em> (CAS Q1).</p>
  </article>
  <article class="news-update">
    <h4>\xB7 2026-9:</h4>
    <p>New Paper! STRAND, our comprehensive subcellular-resolution spatial transcriptome RNA architecture and navigation database, was accepted for publication in <em>Nucleic Acids Research</em> (CAA Class A+, IF = 19.16).</p>
  </article>
  <article class="news-update">
    <h4>\xB7 2024-12:</h4>
    <p>New Paper! CancerSRT, our spatially resolved transcriptomics database for human cancers, was published in the <em>Journal of Genetics and Genomics</em>.</p>
  </article>
`,c=`
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
`;function u(){let e=[],t=document.querySelector("#body > .news");t?.children[2]instanceof HTMLElement&&e.push(t.children[2]);let a=Array.from(document.querySelectorAll("#body > .container .titles")).find(n=>n.textContent?.trim()==="News")?.parentElement;return a?.children[2]instanceof HTMLElement&&e.push(a.children[2]),e}function s(){for(let t of u())t.dataset.newsUpdated!=="true"&&(t.innerHTML=l,t.dataset.newsUpdated="true");let e=document.querySelector("#publications .box > li");if(e&&e.dataset.publicationsUpdated!=="true"){let t=document.createElement("template");t.innerHTML=c;let i=e.getAttributeNames().filter(a=>a.startsWith("data-v-"));for(let a of t.content.querySelectorAll("*"))for(let n of i)a.setAttribute(n,"");e.prepend(t.content),e.dataset.publicationsUpdated="true"}}var o=document.getElementById("app");o&&(new MutationObserver(s).observe(o,{childList:!0,subtree:!0}),s());

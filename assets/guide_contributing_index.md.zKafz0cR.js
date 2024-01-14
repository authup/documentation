import{_ as s,o as a,c as e,R as n}from"./chunks/framework.8k-_6wIf.js";const u=JSON.parse('{"title":"Server-HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contributing/index.md","filePath":"guide/contributing/index.md"}'),p={name:"guide/contributing/index.md"},l=n('<h1 id="server-http" tabindex="-1">Server-HTTP <a class="header-anchor" href="#server-http" aria-label="Permalink to &quot;Server-HTTP&quot;">​</a></h1><p>This package depends on the <a href="https://www.npmjs.com/package/routup" target="_blank" rel="noreferrer">routup</a> library and contains:</p><ul><li>controllers &amp;</li><li>middlewares</li></ul><p>which need to be registered.</p><h2 id="startup" tabindex="-1">Startup <a class="header-anchor" href="#startup" aria-label="Permalink to &quot;Startup&quot;">​</a></h2><p>Backend StartUp</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cli-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--workspace=packages/server-api</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cli-dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--workspace=packages/server-api</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><p>Frontend StartUp</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--workspace=packages/client-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--workspace=packages/client-ui</span></span></code></pre></div>',9),o=[l];function t(r,c,i,d,y,E){return a(),e("div",null,o)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};

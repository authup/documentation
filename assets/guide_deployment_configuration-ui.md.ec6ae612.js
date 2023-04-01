import{_ as s,o as a,c as n,N as l}from"./chunks/framework.7e203a6d.js";const u=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-ui.md"}'),p={name:"guide/deployment/configuration-ui.md"},o=l(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>The UI configuration can be provided in different file formats, such as <code>authup.ui.{conf,js,ts,...}</code>.</p><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Zh1ub" id="tab-t4vl1Re" checked="checked"><label for="tab-t4vl1Re">authup.api.ts</label><input type="radio" name="group-Zh1ub" id="tab-f_l0ujH"><label for="tab-f_l0ujH">authup.ui.conf</label><input type="radio" name="group-Zh1ub" id="tab-lNpweIn"><label for="tab-lNpweIn">authup.ui.conf</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The application port.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">apiUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The public url of the user interface.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publicUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-dotenv"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">env=production</span></span>
<span class="line"><span style="color:#A6ACCD;">port=3000</span></span>
<span class="line"><span style="color:#A6ACCD;">apiUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#A6ACCD;">publicUrl=http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-dotenv"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#A6ACCD;">PORT=3000</span></span>
<span class="line"><span style="color:#A6ACCD;">API_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#A6ACCD;">PUBLIC_URL=http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div></div>`,4),e=[o];function t(c,i,r,y,d,C){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};

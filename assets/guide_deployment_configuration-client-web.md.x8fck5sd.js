import{_ as s,o as n,c as a,R as p}from"./chunks/framework.8k-_6wIf.js";const u=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-client-web.md","filePath":"guide/deployment/configuration-client-web.md"}'),l={name:"guide/deployment/configuration-client-web.md"},e=p(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>The UI configuration can be provided in different file formats, such as <code>authup.client.web.{conf,js,ts,...}</code>.</p><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-XwdkP" id="tab-5jaTVn6" checked="checked"><label for="tab-5jaTVn6">authup.client.web.ts</label><input type="radio" name="group-XwdkP" id="tab-wSfWsK4"><label for="tab-wSfWsK4">authup.client.web.conf</label><input type="radio" name="group-XwdkP" id="tab-0FCpUTs"><label for="tab-0FCpUTs">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The application port.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:3001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The public url of the user interface.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    env: </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The application port.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    apiUrl: </span><span style="color:#032F62;">&#39;http://localhost:3001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The public url of the user interface.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    publicUrl: </span><span style="color:#032F62;">&#39;http://localhost:3000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">env=production</span></span>
<span class="line"><span style="color:#e1e4e8;">port=3000</span></span>
<span class="line"><span style="color:#e1e4e8;">apiUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#e1e4e8;">publicUrl=http://localhost:3000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">env=production</span></span>
<span class="line"><span style="color:#24292e;">port=3000</span></span>
<span class="line"><span style="color:#24292e;">apiUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#24292e;">publicUrl=http://localhost:3000</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#e1e4e8;">PORT=3000</span></span>
<span class="line"><span style="color:#e1e4e8;">API_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#e1e4e8;">PUBLIC_URL=http://localhost:3000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#24292e;">PORT=3000</span></span>
<span class="line"><span style="color:#24292e;">API_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#24292e;">PUBLIC_URL=http://localhost:3000</span></span></code></pre></div></div></div>`,4),o=[e];function t(c,i,r,d,y,h){return n(),a("div",null,o)}const v=s(l,[["render",t]]);export{u as __pageData,v as default};

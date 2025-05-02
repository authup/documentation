import{_ as s,o as n,c as a,R as p}from"./chunks/framework.8k-_6wIf.js";const u=JSON.parse('{"title":"HTTP Interceptor","description":"","frontmatter":{},"headers":[],"relativePath":"sdks/javascript/core-http-kit/interceptor.md","filePath":"sdks/javascript/core-http-kit/interceptor.md"}'),l={name:"sdks/javascript/core-http-kit/interceptor.md"},o=p(`<h1 id="http-interceptor" tabindex="-1">HTTP Interceptor <a class="header-anchor" href="#http-interceptor" aria-label="Permalink to &quot;HTTP Interceptor&quot;">​</a></h1><p>The interceptor method, can be used for a <a href="./token-creator.html">token creator</a> strategy, a request interceptor to mount a <a href="https://github.com/tada5hi/hapic" target="_blank" rel="noreferrer">hapic</a> based http client.</p><p>If the request fails due to a non-existent, expired or invalid token, a new token is set using the token creator strategy.</p><h2 id="hapic" tabindex="-1">Hapic <a class="header-anchor" href="#hapic" aria-label="Permalink to &quot;Hapic&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mountClientResponseErrorTokenHook } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@auhtup/core-http-kit&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hapic&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseURL: </span><span style="color:#9ECBFF;">&#39;http://localhost:3002&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">mountClientResponseErrorTokenHook</span><span style="color:#E1E4E8;">(client, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Authup API URL</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:3010&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tokenCreator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;start123&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mountClientResponseErrorTokenHook } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@auhtup/core-http-kit&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hapic&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    baseURL: </span><span style="color:#032F62;">&#39;http://localhost:3002&#39;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">mountClientResponseErrorTokenHook</span><span style="color:#24292E;">(client, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Authup API URL</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    baseUrl: </span><span style="color:#032F62;">&#39;http://localhost:3010&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tokenCreator: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;start123&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function t(r,c,i,E,y,h){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{u as __pageData,F as default};

import{_ as s,o as e,c as a,R as n}from"./chunks/framework.8k-_6wIf.js";const y=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-server-core-redis.md","filePath":"guide/deployment/configuration-server-core-redis.md"}'),l={name:"guide/deployment/configuration-server-core-redis.md"},p=n(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><p>Redis is used for caching database queries if a connection to a redis server is configured. Redis is also used to publish changes (create, update, delete) to domain entities using the pub-sub pattern, to which microservices can respond.</p><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R0cKk" id="tab-yJgeMPq" checked="checked"><label for="tab-yJgeMPq">authup.server.core.ts</label><input type="radio" name="group-R0cKk" id="tab-yd8WHGR"><label for="tab-yd8WHGR">authup.server.core.conf</label><input type="radio" name="group-R0cKk" id="tab-tIadbp3"><label for="tab-tIadbp3">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * Boolean or connection string (redis://127.0.0.1)</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    redis: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * Boolean or connection string (redis://127.0.0.1)</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    redis: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">redis=redis://127.0.0.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">redis=redis://127.0.0.1</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">REDIS=redis://127.0.0.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">REDIS=redis://127.0.0.1</span></span></code></pre></div></div></div>`,4),o=[p];function t(i,c,r,d,h,g){return e(),a("div",null,o)}const v=s(l,[["render",t]]);export{y as __pageData,v as default};
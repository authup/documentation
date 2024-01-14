import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const m=JSON.parse('{"title":"Controllers","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contributing/controllers.md","filePath":"guide/contributing/controllers.md"}'),p={name:"guide/contributing/controllers.md"},o=l(`<h1 id="controllers" tabindex="-1">Controllers <a class="header-anchor" href="#controllers" aria-label="Permalink to &quot;Controllers&quot;">​</a></h1><p>The controllers must be registered in the gap of the common- &amp; error-<a href="./middlewares.html">middlewares</a>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    registerControllers</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@authup/server-http&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Router } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;routup&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#B392F0;">registerControllers</span><span style="color:#E1E4E8;">(router);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3010</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    registerControllers</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@authup/server-http&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Router } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;routup&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6F42C1;">registerControllers</span><span style="color:#24292E;">(router);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3010</span><span style="color:#24292E;">);</span></span></code></pre></div>`,3),e=[o];function r(t,c,i,y,E,u){return n(),a("div",null,e)}const h=s(p,[["render",r]]);export{m as __pageData,h as default};

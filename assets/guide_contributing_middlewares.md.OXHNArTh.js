import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const m=JSON.parse('{"title":"Middlewares","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contributing/middlewares.md","filePath":"guide/contributing/middlewares.md"}'),p={name:"guide/contributing/middlewares.md"},e=l(`<h1 id="middlewares" tabindex="-1">Middlewares <a class="header-anchor" href="#middlewares" aria-label="Permalink to &quot;Middlewares&quot;">​</a></h1><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    registerMiddlewares</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@authup/server-http&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Router } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;routup&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#B392F0;">registerMiddlewares</span><span style="color:#E1E4E8;">(router);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3010</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    registerMiddlewares</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@authup/server-http&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Router } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;routup&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#6F42C1;">registerMiddlewares</span><span style="color:#24292E;">(router);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3010</span><span style="color:#24292E;">);</span></span></code></pre></div><hr><div class="warning custom-block"><p class="custom-block-title">Important</p><p>It is not mandatory to use the provided error middleware, but it is required to define one, to handle errors thrown handlers (controllers &amp; middlewares) of the request chain.</p></div><p>The error middleware can be registered like shown in the following code snippet.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { errorMiddleware } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/server-http&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Router } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;routup&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(errorMiddleware);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3010</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { errorMiddleware } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/server-http&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Router } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;routup&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register middlewares</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register controllers</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Register error middleware</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(errorMiddleware);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3010</span><span style="color:#24292E;">);</span></span></code></pre></div>`,6),o=[e];function r(t,c,i,y,E,d){return n(),a("div",null,o)}const F=s(p,[["render",r]]);export{m as __pageData,F as default};

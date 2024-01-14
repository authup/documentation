import{_ as s,o as n,c as a,R as e}from"./chunks/framework.8k-_6wIf.js";const m=JSON.parse('{"title":"Socket Middleware","description":"","frontmatter":{},"headers":[],"relativePath":"guide/development/javascript-server-adapter/socket-middleware.md","filePath":"guide/development/javascript-server-adapter/socket-middleware.md"}'),l={name:"guide/development/javascript-server-adapter/socket-middleware.md"},p=e(`<h1 id="socket-middleware" tabindex="-1">Socket Middleware <a class="header-anchor" href="#socket-middleware" aria-label="Permalink to &quot;Socket Middleware&quot;">​</a></h1><p>The socket middleware should be injected at the beginning of the chain.</p><p>Besides, validating the authorization header, the <code>createSocketMiddleware</code> also extends the request with general information (realm, abilities, ...) and information about the corresponding robot or user of the token.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The <code>createSocketMiddleware</code> method, accepts a configuration object. The redis client, if enabled, is used to cache verification responses from the backend service.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Server } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;socket.io&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createSocketMiddleware } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/server-adapter&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;redis-extension&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// create redis client</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">redis</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createClient</span><span style="color:#E1E4E8;">({connectionString: </span><span style="color:#9ECBFF;">&#39;redis://127.0.0.1&#39;</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setup socket.io server</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Server</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setup socket middleware for socket server</span></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">createSocketMiddleware</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">tokenByCookie</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cookieName</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> req.cookies[cookieName],</span></span>
<span class="line"><span style="color:#E1E4E8;">    tokenVerifier: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        baseURL: </span><span style="color:#9ECBFF;">&#39;http://localhost:3010/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        creator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            password: </span><span style="color:#9ECBFF;">&#39;start123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;redis&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            client: redis</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">tokenVerifierHandler</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// { &#39;realmId&#39;: &#39;xxx&#39;, userId: &#39;xxx&#39;, userName: &#39;xxx&#39;, ... }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Server } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;socket.io&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createSocketMiddleware } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/server-adapter&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;redis-extension&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// create redis client</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">redis</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createClient</span><span style="color:#24292E;">({connectionString: </span><span style="color:#032F62;">&#39;redis://127.0.0.1&#39;</span><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setup socket.io server</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Server</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setup socket middleware for socket server</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">createSocketMiddleware</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">tokenByCookie</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cookieName</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> req.cookies[cookieName],</span></span>
<span class="line"><span style="color:#24292E;">    tokenVerifier: {</span></span>
<span class="line"><span style="color:#24292E;">        baseURL: </span><span style="color:#032F62;">&#39;http://localhost:3010/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        creator: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            password: </span><span style="color:#032F62;">&#39;start123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        cache: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;redis&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            client: redis</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">tokenVerifierHandler</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// { &#39;realmId&#39;: &#39;xxx&#39;, userId: &#39;xxx&#39;, userName: &#39;xxx&#39;, ... }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">}));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span></code></pre></div><p>For more details check out, the <a href="./.html">API Reference</a>.</p>`,7),o=[p];function t(r,c,E,i,y,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};

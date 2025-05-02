import{_ as s,o as a,c as n,R as e}from"./chunks/framework.8k-_6wIf.js";const g=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-server-core-database.md","filePath":"guide/deployment/configuration-server-core-database.md"}'),p={name:"guide/deployment/configuration-server-core-database.md"},l=e(`<h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-label="Permalink to &quot;Database&quot;">​</a></h1><p>By default, the database is run with <code>SQLite</code>, but for a production environment we recommend using <code>MySQL</code> or <code>Postgres</code> since they provide superior performance, scalability and advanced features such as built-in replication.</p><h2 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h2><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-a-yqh" id="tab-WpUaPGo" checked="checked"><label for="tab-WpUaPGo">authup.server.core.ts</label><input type="radio" name="group-a-yqh" id="tab-rTYN3Ht"><label for="tab-rTYN3Ht">authup.server.core.conf</label><input type="radio" name="group-a-yqh" id="tab-wmxhMB9"><label for="tab-wmxhMB9">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    db: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;mysql&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        host: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        port: </span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        username: </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;start123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        database: </span><span style="color:#9ECBFF;">&#39;app&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">    db: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;mysql&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        host: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        port: </span><span style="color:#005CC5;">3306</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        username: </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;start123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        database: </span><span style="color:#032F62;">&#39;app&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">db.type=mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">db.host=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">db.port=3306</span></span>
<span class="line"><span style="color:#e1e4e8;">db.username=root</span></span>
<span class="line"><span style="color:#e1e4e8;">db.password=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">db.database=app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">db.type=mysql</span></span>
<span class="line"><span style="color:#24292e;">db.host=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">db.port=3306</span></span>
<span class="line"><span style="color:#24292e;">db.username=root</span></span>
<span class="line"><span style="color:#24292e;">db.password=start123</span></span>
<span class="line"><span style="color:#24292e;">db.database=app</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DB_TYPE=mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PORT=3306</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PASSWORD=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_DATABASE=app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DB_TYPE=mysql</span></span>
<span class="line"><span style="color:#24292e;">DB_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">DB_PORT=3306</span></span>
<span class="line"><span style="color:#24292e;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#24292e;">DB_PASSWORD=start123</span></span>
<span class="line"><span style="color:#24292e;">DB_DATABASE=app</span></span></code></pre></div></div></div><h2 id="postgres" tabindex="-1">Postgres <a class="header-anchor" href="#postgres" aria-label="Permalink to &quot;Postgres&quot;">​</a></h2><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8pi6m" id="tab--HsmVFJ" checked="checked"><label for="tab--HsmVFJ">authup.server.core.ts</label><input type="radio" name="group-8pi6m" id="tab-nzJNPDM"><label for="tab-nzJNPDM">authup.server.core.conf</label><input type="radio" name="group-8pi6m" id="tab-HdaWXb5"><label for="tab-HdaWXb5">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    db: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;postgres&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        host: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        port: </span><span style="color:#79B8FF;">5432</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        username: </span><span style="color:#9ECBFF;">&#39;root&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;start123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        database: </span><span style="color:#9ECBFF;">&#39;app&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">    db: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;postgres&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        host: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        port: </span><span style="color:#005CC5;">5432</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        username: </span><span style="color:#032F62;">&#39;root&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;start123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        database: </span><span style="color:#032F62;">&#39;app&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">db.type=postgres</span></span>
<span class="line"><span style="color:#e1e4e8;">db.host=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">db.port=5432</span></span>
<span class="line"><span style="color:#e1e4e8;">db.username=root</span></span>
<span class="line"><span style="color:#e1e4e8;">db.password=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">db.database=app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">db.type=postgres</span></span>
<span class="line"><span style="color:#24292e;">db.host=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">db.port=5432</span></span>
<span class="line"><span style="color:#24292e;">db.username=root</span></span>
<span class="line"><span style="color:#24292e;">db.password=start123</span></span>
<span class="line"><span style="color:#24292e;">db.database=app</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DB_TYPE=postgres</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PORT=5432</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PASSWORD=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_DATABASE=app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DB_TYPE=postgres</span></span>
<span class="line"><span style="color:#24292e;">DB_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">DB_PORT=5432</span></span>
<span class="line"><span style="color:#24292e;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#24292e;">DB_PASSWORD=start123</span></span>
<span class="line"><span style="color:#24292e;">DB_DATABASE=app</span></span></code></pre></div></div></div>`,8),o=[l];function t(c,r,i,d,y,h){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{g as __pageData,b as default};

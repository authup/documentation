import{_ as s,o as n,c as a,R as p}from"./chunks/framework.8k-_6wIf.js";const b=JSON.parse('{"title":"Subscribers","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contributing/database-subscribers.md","filePath":"guide/contributing/database-subscribers.md"}'),l={name:"guide/contributing/database-subscribers.md"},o=p(`<h1 id="subscribers" tabindex="-1">Subscribers <a class="header-anchor" href="#subscribers" aria-label="Permalink to &quot;Subscribers&quot;">​</a></h1><p>To set the provided providers for the typeorm DataSourceOptions, use the method <code>setEntitiesForDataSourceOptions</code>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    setSubscribersForDataSourceOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/server-database&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">    DataSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    DataSourceOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;typeorm&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DataSourceOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// set entities</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// set subscribers</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setSubscribersForDataSourceOptions</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dataSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DataSource</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> dataSource.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// run seed</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    setSubscribersForDataSourceOptions</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/server-database&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">    DataSource,</span></span>
<span class="line"><span style="color:#24292E;">    DataSourceOptions</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;typeorm&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DataSourceOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// set entities</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// set subscribers</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setSubscribersForDataSourceOptions</span><span style="color:#24292E;">(options);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dataSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DataSource</span><span style="color:#24292E;">(options);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> dataSource.</span><span style="color:#6F42C1;">initialize</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// run seed</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,i,y,u){return n(),a("div",null,e)}const D=s(l,[["render",t]]);export{b as __pageData,D as default};

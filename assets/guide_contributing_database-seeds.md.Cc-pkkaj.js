import{_ as s,o as a,c as n,R as l}from"./chunks/framework.8k-_6wIf.js";const D=JSON.parse('{"title":"Seeds","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contributing/database-seeds.md","filePath":"guide/contributing/database-seeds.md"}'),p={name:"guide/contributing/database-seeds.md"},o=l(`<h1 id="seeds" tabindex="-1">Seeds <a class="header-anchor" href="#seeds" aria-label="Permalink to &quot;Seeds&quot;">​</a></h1><p>The <code>DatabaseSeeder</code> class populates the database with an initial data set (user, role, ...):</p><ul><li>User: admin</li><li>Role: admin</li><li>Permission(s): user_add, user_edit, ...</li></ul><p>It also creates all possible relations between the following entities:</p><ul><li>user - role</li><li>role - permissions</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    DatabaseSeeder,</span></span>
<span class="line"><span style="color:#E1E4E8;">    extendDataSourceOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/server-database&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dataSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DataSource</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> dataSource.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// run seed</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">seeder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DatabaseSeeder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> seeder.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(connection);</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    DatabaseSeeder,</span></span>
<span class="line"><span style="color:#24292E;">    extendDataSourceOptions</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/server-database&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dataSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DataSource</span><span style="color:#24292E;">(options);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> dataSource.</span><span style="color:#6F42C1;">initialize</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// run seed</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">seeder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DatabaseSeeder</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> seeder.</span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">(connection);</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div>`,6),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{D as __pageData,F as default};

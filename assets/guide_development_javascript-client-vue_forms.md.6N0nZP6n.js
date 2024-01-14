import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const m=JSON.parse('{"title":"Forms","description":"","frontmatter":{},"headers":[],"relativePath":"guide/development/javascript-client-vue/forms.md","filePath":"guide/development/javascript-client-vue/forms.md"}'),p={name:"guide/development/javascript-client-vue/forms.md"},o=l(`<h1 id="forms" tabindex="-1">Forms <a class="header-anchor" href="#forms" aria-label="Permalink to &quot;Forms&quot;">​</a></h1><p>The package contains a <strong>form</strong> component for the following resources:</p><p><code>General</code></p><ul><li><strong>AClientForm</strong></li><li><strong>AClientScopeForm</strong></li><li><strong>AIdentityProviderForm</strong></li><li><strong>APermissionForm</strong></li><li><strong>ARealmForm</strong></li><li><strong>ARobotForm</strong></li><li><strong>ARoleForm</strong></li><li><strong>AScopeForm</strong></li><li><strong>AScopeClientForm</strong></li><li><strong>AUserForm</strong></li></ul><p>These forms always represent a single resource. They have the same component <a href="./records.html#props">props</a> as the <a href="./records.html">entity</a> components.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>If the entity prop has no id parameter, the object is seen as a template for the form fields.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUserForm } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUserForm</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">entity</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleCreated</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">entity</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`The user \${</span><span style="color:#E1E4E8;">entity</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} was created.\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleUpdated</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">entity</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`The user \${</span><span style="color:#E1E4E8;">entity</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} has been updated.\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleFailed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Failed with: \${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                entity,</span></span>
<span class="line"><span style="color:#E1E4E8;">                handleUpdated,</span></span>
<span class="line"><span style="color:#E1E4E8;">                handleCreated,</span></span>
<span class="line"><span style="color:#E1E4E8;">                handleFailed</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUserForm</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:entity</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;entity&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@updated</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleUpdated&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@created</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleCreated&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@failed</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleFailed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- content --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUserForm</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUserForm } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUserForm</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">entity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                id: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleCreated</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">entity</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`The user \${</span><span style="color:#24292E;">entity</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">} was created.\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleUpdated</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">entity</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`The user \${</span><span style="color:#24292E;">entity</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">} has been updated.\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleFailed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`Failed with: \${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">.</span><span style="color:#24292E;">message</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                entity,</span></span>
<span class="line"><span style="color:#24292E;">                handleUpdated,</span></span>
<span class="line"><span style="color:#24292E;">                handleCreated,</span></span>
<span class="line"><span style="color:#24292E;">                handleFailed</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUserForm</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:entity</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;entity&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@updated</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleUpdated&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@created</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleCreated&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@failed</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleFailed&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- content --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUserForm</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{m as __pageData,g as default};

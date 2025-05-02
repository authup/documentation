import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const F=JSON.parse('{"title":"Lists","description":"","frontmatter":{},"headers":[],"relativePath":"sdks/javascript/client-vue/collections.md","filePath":"sdks/javascript/client-vue/collections.md"}'),p={name:"sdks/javascript/client-vue/collections.md"},o=l(`<h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h1><p>The package contains a <strong>list</strong> component for the following resources:</p><p><code>General</code></p><ul><li><strong>Clients</strong></li><li><strong>ClientScopes</strong></li><li><strong>IdentityProviders</strong></li><li><strong>Permissions</strong></li><li><strong>Realms</strong></li><li><strong>Robots</strong></li><li><strong>Roles</strong></li><li><strong>Scopes</strong></li><li><strong>ScopeClients</strong></li><li><strong>AUsers</strong></li></ul><p><code>Assignment</code></p><ul><li><strong>IdentityProviderRoleAssignments</strong></li><li><strong>PermissionRobotAssignments</strong></li><li><strong>PermissionRoleAssignments</strong></li><li><strong>PermissionUserAssignments</strong></li><li><strong>RobotPermissionAssignments</strong></li><li><strong>RobotRoleAssignments</strong></li><li><strong>RolePermissionAssignments</strong></li><li><strong>RoleRobotAssignments</strong></li><li><strong>RoleUserAssignments</strong></li><li><strong>UserPermissionAssignments</strong></li><li><strong>UserRoleAssignments</strong></li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">        ASearch,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ATitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">        APagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">        AUsers </span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            ASearch,</span></span>
<span class="line"><span style="color:#E1E4E8;">            ATitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">            APagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                sort: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;ASC&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                pagination: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    limit: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    offset: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                query</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:query</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;query&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#FDAEB7;font-style:italic;">ListHeader</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;AUsers&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#FDAEB7;font-style:italic;">ASearch</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:busy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.load&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:meta</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.meta&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#FDAEB7;font-style:italic;">APagination</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:busy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.load&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:meta</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.meta&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">body</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">entity </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> props.data</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">entity.id</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {{entity.name}}</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">        ASearch,</span></span>
<span class="line"><span style="color:#24292E;">        ATitle,</span></span>
<span class="line"><span style="color:#24292E;">        APagination,</span></span>
<span class="line"><span style="color:#24292E;">        AUsers </span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            ASearch,</span></span>
<span class="line"><span style="color:#24292E;">            ATitle,</span></span>
<span class="line"><span style="color:#24292E;">            APagination,</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">query</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                sort: {</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;ASC&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                pagination: {</span></span>
<span class="line"><span style="color:#24292E;">                    limit: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    offset: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                query</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:query</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;query&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#B31D28;font-style:italic;">ListHeader</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;AUsers&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#B31D28;font-style:italic;">ASearch</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:busy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:load</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.load&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:meta</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.meta&quot;</span></span>
<span class="line"><span style="color:#24292E;">            /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#B31D28;font-style:italic;">APagination</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:busy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:load</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.load&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:meta</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.meta&quot;</span></span>
<span class="line"><span style="color:#24292E;">            /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">body</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">entity </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> props.data</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">entity.id</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        {{entity.name}}</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p><strong><code>header</code></strong></p><p>Disable the header section.</p><p><strong><code>footer</code></strong></p><p>Disable the footer section.</p><p><strong><code>noMore</code></strong></p><p>Disable the no more items section.</p><p><strong><code>loading</code></strong></p><p>Disable the loading section.</p><p><strong><code>query</code></strong></p><p>The query prop has the following parameters:</p><ul><li><strong>fields</strong>: Return only specific resource fields or extend the default selection</li><li><strong>filters</strong>: Filter the resources, according to specific criteria.</li><li><strong>relations</strong>: Include related resources of the primary resource.</li><li><strong>pagination</strong>: Limit the number of resources returned from the entire collection.</li><li><strong>sort</strong>: Sort the resources according to one or more keys in asc/desc direction.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For this purpose <a href="https://github.com/tada5hi" target="_blank" rel="noreferrer">rapiq</a> is used. Visit the documentation for more details about the parameters and the scheme.</p></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p><strong><code>body</code></strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUsers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">body</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">entity </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> props.data</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">entity.id</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {{entity.name}}</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUsers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">body</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">entity </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> props.data</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">entity.id</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        {{entity.name}}</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><code>header</code></strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUsers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.load()&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                Refresh</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUsers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">button</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.load()&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#24292E;">            &gt;</span></span>
<span class="line"><span style="color:#24292E;">                Refresh</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><code>footer</code></strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUsers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.load()&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                Refresh</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUsers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">button</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.load()&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.busy&quot;</span></span>
<span class="line"><span style="color:#24292E;">            &gt;</span></span>
<span class="line"><span style="color:#24292E;">                Refresh</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><code>loading</code></strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUsers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            Loading resources...</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUsers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            Loading resources...</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><code>noMore</code></strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AUsers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@authup/client-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            AUsers</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">no-more</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            No more resources available...</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">AUsers</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AUsers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@authup/client-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        components: {</span></span>
<span class="line"><span style="color:#24292E;">            AUsers</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">no-more</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            No more resources available...</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">AUsers</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,32),t=[o];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{F as __pageData,d as default};

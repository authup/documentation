import{_ as s,o as a,c as n,N as l}from"./chunks/framework.7e203a6d.js";const F=JSON.parse('{"title":"SMTP","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-api-smtp.md"}'),p={name:"guide/deployment/configuration-api-smtp.md"},o=l(`<h1 id="smtp" tabindex="-1">SMTP <a class="header-anchor" href="#smtp" aria-label="Permalink to &quot;SMTP&quot;">​</a></h1><p>To enable the confirmation of a registration, the resetting of a password, the SMTP client must be configured. The SMTP client is based on nodemailer and can be configured via connection string or connection object.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is important to note that when specifying via environment variable, only a <strong>boolean</strong> or a connecting <strong>string</strong> can be specified.</p></div><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-UMAIW" id="tab-jAmB_gv" checked="checked"><label for="tab-jAmB_gv">authup.api.ts</label><input type="radio" name="group-UMAIW" id="tab-hhH3AXk"><label for="tab-hhH3AXk">authup.api.conf</label><input type="radio" name="group-UMAIW" id="tab--loVXqw"><label for="tab--loVXqw">.env</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">     * Boolean, connection string or configuration object. </span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">     * (smtp(s)://username:password@smtp.example.com)</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">smtp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ssl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">starttls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no-reply@example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">fromDisplayName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Authup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">replyTo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">contact@example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">replyToDisplayName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Authup</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-dotenv"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">smtp.host=127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.port=25</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.user=</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.password=</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.ssl=false</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.starttls=false</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.from=no-reply@example.com</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.fromDisplayName=Authup</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.replyTo=contact@example.com</span></span>
<span class="line"><span style="color:#A6ACCD;">smtp.replyToDisplayName=Authup</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-.dotenv"><button title="Copy Code" class="copy"></button><span class="lang">.dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SMTP=smtp(s)://username:password@smtp.example.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div></div>`,5),e=[o];function t(c,r,i,y,D,C){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
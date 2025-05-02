import{_ as s,o as n,c as a,R as p}from"./chunks/framework.8k-_6wIf.js";const g=JSON.parse('{"title":"SMTP","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-server-core-smtp.md","filePath":"guide/deployment/configuration-server-core-smtp.md"}'),l={name:"guide/deployment/configuration-server-core-smtp.md"},e=p(`<h1 id="smtp" tabindex="-1">SMTP <a class="header-anchor" href="#smtp" aria-label="Permalink to &quot;SMTP&quot;">​</a></h1><p>To enable the confirmation of a registration, the resetting of a password, the SMTP client must be configured. The SMTP client is based on nodemailer and can be configured via connection string or connection object.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is important to note that when specifying via environment variable, only a <strong>boolean</strong> or a connecting <strong>string</strong> can be specified.</p></div><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-tibWj" id="tab-n-0lEno" checked="checked"><label for="tab-n-0lEno">authup.server.core.ts</label><input type="radio" name="group-tibWj" id="tab-3c3-aGH"><label for="tab-3c3-aGH">authup.server.core.conf</label><input type="radio" name="group-tibWj" id="tab--edSTHn"><label for="tab--edSTHn">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * Boolean, connection string or configuration object. </span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * (smtp(s)://username:password@smtp.example.com)</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    smtp: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        host: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        port: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        user: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ssl: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        starttls: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        from: </span><span style="color:#9ECBFF;">&#39;no-reply@example.com&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        fromDisplayName: </span><span style="color:#9ECBFF;">&#39;Authup&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        replyTo: </span><span style="color:#9ECBFF;">&#39;contact@example.com&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        replyToDisplayName: </span><span style="color:#9ECBFF;">&#39;Authup&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * Boolean, connection string or configuration object. </span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * (smtp(s)://username:password@smtp.example.com)</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    smtp: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        host: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        port: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        user: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        password: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        ssl: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        starttls: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        from: </span><span style="color:#032F62;">&#39;no-reply@example.com&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        fromDisplayName: </span><span style="color:#032F62;">&#39;Authup&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        replyTo: </span><span style="color:#032F62;">&#39;contact@example.com&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">        replyToDisplayName: </span><span style="color:#032F62;">&#39;Authup&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">smtp.host=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.port=25</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.user=</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.password=</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.ssl=false</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.starttls=false</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.from=no-reply@example.com</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.fromDisplayName=Authup</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.replyTo=contact@example.com</span></span>
<span class="line"><span style="color:#e1e4e8;">smtp.replyToDisplayName=Authup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">smtp.host=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">smtp.port=25</span></span>
<span class="line"><span style="color:#24292e;">smtp.user=</span></span>
<span class="line"><span style="color:#24292e;">smtp.password=</span></span>
<span class="line"><span style="color:#24292e;">smtp.ssl=false</span></span>
<span class="line"><span style="color:#24292e;">smtp.starttls=false</span></span>
<span class="line"><span style="color:#24292e;">smtp.from=no-reply@example.com</span></span>
<span class="line"><span style="color:#24292e;">smtp.fromDisplayName=Authup</span></span>
<span class="line"><span style="color:#24292e;">smtp.replyTo=contact@example.com</span></span>
<span class="line"><span style="color:#24292e;">smtp.replyToDisplayName=Authup</span></span></code></pre></div><div class="language-.dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SMTP=smtp(s)://username:password@smtp.example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SMTP=smtp(s)://username:password@smtp.example.com</span></span></code></pre></div></div></div>`,5),o=[e];function t(c,i,r,h,y,d){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};

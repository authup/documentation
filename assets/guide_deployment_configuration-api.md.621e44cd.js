import{_ as s,o as n,c as a,N as l}from"./chunks/framework.7e203a6d.js";const f=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-api.md"}'),p={name:"guide/deployment/configuration-api.md"},o=l(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>The API configuration can be provided in different file formats, such as <code>authup.api.{conf,js,ts,...}</code>.</p><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-i1yLc" id="tab-o29n-Kf" checked="checked"><label for="tab-o29n-Kf">authup.api.ts</label><input type="radio" name="group-i1yLc" id="tab-Pm7VTjf"><label for="tab-Pm7VTjf">authup.api.conf</label><input type="radio" name="group-i1yLc" id="tab-WqaHMr3"><label for="tab-WqaHMr3">.env</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The application port.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3001</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publicUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * The redirect url to redirect to after successful</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * login with an external identity provider.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">authorizeRedirectUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Enable registration.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">registration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Email verification required for registration or login with identity provider.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">emailVerification</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Allow password reset via email?</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">forgotPassword</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Admin user name.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Default: &#39;admin&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">adminUsername</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Admin password.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Default: &#39;start123&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">adminPassword</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Reset the admin password if it has already</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">adminPasswordReset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Enable a global robot account.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">robotEnabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Robot password/secret.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">robotSecret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Reset the robot secret if it has already</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">robotSecretReset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-dotenv"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">port=3001</span></span>
<span class="line"><span style="color:#A6ACCD;">publicUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#A6ACCD;">authorizeRedirectUrl=http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;">registration=false</span></span>
<span class="line"><span style="color:#A6ACCD;">emailVerification=false</span></span>
<span class="line"><span style="color:#A6ACCD;">forgotPassword=false</span></span>
<span class="line"><span style="color:#A6ACCD;">adminUsername=admin</span></span>
<span class="line"><span style="color:#A6ACCD;">adminPassword=start123</span></span>
<span class="line"><span style="color:#A6ACCD;">adminPasswordReset=false</span></span>
<span class="line"><span style="color:#A6ACCD;">robotEnabled=false</span></span>
<span class="line"><span style="color:#A6ACCD;">robotSecret=foo</span></span>
<span class="line"><span style="color:#A6ACCD;">robotSecretReset=false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-dotenv"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PORT=3001</span></span>
<span class="line"><span style="color:#A6ACCD;">PUBLIC_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#A6ACCD;">AUTHORIZE_REDIRECT_URL=http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;">REGISTRATION=false</span></span>
<span class="line"><span style="color:#A6ACCD;">EMAIL_VERIFICATION=false</span></span>
<span class="line"><span style="color:#A6ACCD;">FORGOT_PASSWORD=false</span></span>
<span class="line"><span style="color:#A6ACCD;">ADMIN_USERNAME=admin</span></span>
<span class="line"><span style="color:#A6ACCD;">ADMIN_PASSWORD=start123</span></span>
<span class="line"><span style="color:#A6ACCD;">ADMIN_PASSWORD_RESET=false</span></span>
<span class="line"><span style="color:#A6ACCD;">ROBOT_ENABLED=false</span></span>
<span class="line"><span style="color:#A6ACCD;">ROBOT_SECRET=foo</span></span>
<span class="line"><span style="color:#A6ACCD;">ROBOT_SECRET_RESET=false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div></div>`,4),e=[o];function t(c,i,r,y,C,D){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{f as __pageData,F as default};

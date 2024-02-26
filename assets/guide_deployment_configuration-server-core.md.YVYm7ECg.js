import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const D=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/configuration-server-core.md","filePath":"guide/deployment/configuration-server-core.md"}'),p={name:"guide/deployment/configuration-server-core.md"},e=l(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>The API configuration can be provided in different file formats, such as <code>authup.api.{conf,js,ts,...}</code>.</p><p>The environment variables in the .env file variant can also be provided via runtime environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-08sLu" id="tab-PSMqfhV" checked="checked"><label for="tab-PSMqfhV">authup.server.core.ts</label><input type="radio" name="group-08sLu" id="tab-qcqxtyS"><label for="tab-qcqxtyS">authup.server.core.conf</label><input type="radio" name="group-08sLu" id="tab-PnNnWCK"><label for="tab-PnNnWCK">.env</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The application port.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3001</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:3001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The redirect url to redirect to after successful</span></span>
<span class="line"><span style="color:#6A737D;">     * login with an external identity provider.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    authorizeRedirectUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Enable registration.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    registration: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Email verification required for registration or login with identity provider.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    emailVerification: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Allow password reset via email?</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    forgotPassword: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Admin user name.</span></span>
<span class="line"><span style="color:#6A737D;">     * Default: &#39;admin&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    userAdminName: </span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Admin password.</span></span>
<span class="line"><span style="color:#6A737D;">     * Default: &#39;start123&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    userAdminPassword: </span><span style="color:#9ECBFF;">&#39;start123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Reset the admin password if it has already</span></span>
<span class="line"><span style="color:#6A737D;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    userAdminPasswordReset: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Enable a global robot account.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    robotAdminEnabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Robot admin name</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    robotAdminName: </span><span style="color:#9ECBFF;">&#39;system&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Robot admin password/secret.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    robotAdminSecret: </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Reset the robot secret if it has already</span></span>
<span class="line"><span style="color:#6A737D;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    robotAdminSecretReset: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The environment of the application.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    env: </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The application port.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3001</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The address where the API can be reached.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    publicUrl: </span><span style="color:#032F62;">&#39;http://localhost:3001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The redirect url to redirect to after successful</span></span>
<span class="line"><span style="color:#6A737D;">     * login with an external identity provider.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    authorizeRedirectUrl: </span><span style="color:#032F62;">&#39;http://localhost:3000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Enable registration.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    registration: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Email verification required for registration or login with identity provider.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    emailVerification: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Allow password reset via email?</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    forgotPassword: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Admin user name.</span></span>
<span class="line"><span style="color:#6A737D;">     * Default: &#39;admin&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    userAdminName: </span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Admin password.</span></span>
<span class="line"><span style="color:#6A737D;">     * Default: &#39;start123&#39;</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    userAdminPassword: </span><span style="color:#032F62;">&#39;start123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Reset the admin password if it has already</span></span>
<span class="line"><span style="color:#6A737D;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    userAdminPasswordReset: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Enable a global robot account.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    robotAdminEnabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Robot admin name</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    robotAdminName: </span><span style="color:#032F62;">&#39;system&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Robot admin password/secret.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    robotAdminSecret: </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Reset the robot secret if it has already</span></span>
<span class="line"><span style="color:#6A737D;">     * been created with a different password.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    robotAdminSecretReset: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">port=3001</span></span>
<span class="line"><span style="color:#e1e4e8;">publicUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#e1e4e8;">authorizeRedirectUrl=http://localhost:3000</span></span>
<span class="line"><span style="color:#e1e4e8;">registration=false</span></span>
<span class="line"><span style="color:#e1e4e8;">emailVerification=false</span></span>
<span class="line"><span style="color:#e1e4e8;">forgotPassword=false</span></span>
<span class="line"><span style="color:#e1e4e8;">userAdminName=admin</span></span>
<span class="line"><span style="color:#e1e4e8;">userAdminPassword=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">userAdminPasswordReset=false</span></span>
<span class="line"><span style="color:#e1e4e8;">robotAdminEnabled=false</span></span>
<span class="line"><span style="color:#e1e4e8;">robotAdminName=system</span></span>
<span class="line"><span style="color:#e1e4e8;">robotAdminSecret=foo</span></span>
<span class="line"><span style="color:#e1e4e8;">robotAdminSecretReset=false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">port=3001</span></span>
<span class="line"><span style="color:#24292e;">publicUrl=http://localhost:3001</span></span>
<span class="line"><span style="color:#24292e;">authorizeRedirectUrl=http://localhost:3000</span></span>
<span class="line"><span style="color:#24292e;">registration=false</span></span>
<span class="line"><span style="color:#24292e;">emailVerification=false</span></span>
<span class="line"><span style="color:#24292e;">forgotPassword=false</span></span>
<span class="line"><span style="color:#24292e;">userAdminName=admin</span></span>
<span class="line"><span style="color:#24292e;">userAdminPassword=start123</span></span>
<span class="line"><span style="color:#24292e;">userAdminPasswordReset=false</span></span>
<span class="line"><span style="color:#24292e;">robotAdminEnabled=false</span></span>
<span class="line"><span style="color:#24292e;">robotAdminName=system</span></span>
<span class="line"><span style="color:#24292e;">robotAdminSecret=foo</span></span>
<span class="line"><span style="color:#24292e;">robotAdminSecretReset=false</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">PORT=3001</span></span>
<span class="line"><span style="color:#e1e4e8;">PUBLIC_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#e1e4e8;">AUTHORIZE_REDIRECT_URL=http://localhost:3000</span></span>
<span class="line"><span style="color:#e1e4e8;">REGISTRATION=false</span></span>
<span class="line"><span style="color:#e1e4e8;">EMAIL_VERIFICATION=false</span></span>
<span class="line"><span style="color:#e1e4e8;">FORGOT_PASSWORD=false</span></span>
<span class="line"><span style="color:#e1e4e8;">USER_ADMIN_NAME=admin</span></span>
<span class="line"><span style="color:#e1e4e8;">USER_ADMIN_PASSWORD=start123</span></span>
<span class="line"><span style="color:#e1e4e8;">USER_ADMIN_PASSWORD_RESET=false</span></span>
<span class="line"><span style="color:#e1e4e8;">ROBOT_ADMIN_ENABLED=false</span></span>
<span class="line"><span style="color:#e1e4e8;">ROBOT_ADMIN_NAME=system</span></span>
<span class="line"><span style="color:#e1e4e8;">ROBOT_ADMIN_SECRET=foo</span></span>
<span class="line"><span style="color:#e1e4e8;">ROBOT_ADMIN_SECRET_RESET=false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">PORT=3001</span></span>
<span class="line"><span style="color:#24292e;">PUBLIC_URL=http://localhost:3001</span></span>
<span class="line"><span style="color:#24292e;">AUTHORIZE_REDIRECT_URL=http://localhost:3000</span></span>
<span class="line"><span style="color:#24292e;">REGISTRATION=false</span></span>
<span class="line"><span style="color:#24292e;">EMAIL_VERIFICATION=false</span></span>
<span class="line"><span style="color:#24292e;">FORGOT_PASSWORD=false</span></span>
<span class="line"><span style="color:#24292e;">USER_ADMIN_NAME=admin</span></span>
<span class="line"><span style="color:#24292e;">USER_ADMIN_PASSWORD=start123</span></span>
<span class="line"><span style="color:#24292e;">USER_ADMIN_PASSWORD_RESET=false</span></span>
<span class="line"><span style="color:#24292e;">ROBOT_ADMIN_ENABLED=false</span></span>
<span class="line"><span style="color:#24292e;">ROBOT_ADMIN_NAME=system</span></span>
<span class="line"><span style="color:#24292e;">ROBOT_ADMIN_SECRET=foo</span></span>
<span class="line"><span style="color:#24292e;">ROBOT_ADMIN_SECRET_RESET=false</span></span></code></pre></div></div></div>`,4),o=[e];function t(c,r,i,y,E,d){return n(),a("div",null,o)}const f=s(p,[["render",t]]);export{D as __pageData,f as default};

import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8k-_6wIf.js";const h=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/docker-compose.md","filePath":"guide/deployment/docker-compose.md"}'),p={name:"guide/deployment/docker-compose.md"},o=l(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>This section will help you set up Authup in a <strong>docker-compose</strong> environment.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><p>The following guide is based on some shared assumptions:</p><ul><li>Min. <code>2</code> cores</li><li>Min. <code>5G</code> hard disk</li><li>Docker <code>v20.x</code> is <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">installed</a></li><li>Up to two available ports on the host system if you want to map the services to your local machine (default: <code>3000</code> and <code>3001</code>)</li><li>This guide assumes <a href="https://docs.docker.com/compose/compose-file/" target="_blank" rel="noreferrer">Compose v2</a></li></ul><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><p>This section contains multiple examples for how to deploy and configure authup using docker-compose. The different examples show how to configure authup using the options described in the <a href="./configuration.html">configuration</a> section. Simply paste and modify the example you want to use into a <code>docker-compose.yml</code> file.</p><p>The following example shows a sensible default configuration for getting started with Authup. This will start the server- &amp; client-services.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">authup</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">server-core</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server-core</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># Docker managed volume</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># storage in mounted volume</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">#- ./writable:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server/core start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">client-web</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">client-web</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># Docker managed volume</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># storage in mounted volume</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">#- ./writable:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">client/web start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">authup</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">server-core</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server-core</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># Docker managed volume</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># storage in mounted volume</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">#- ./writable:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server/core start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">client-web</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">client-web</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># Docker managed volume</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># storage in mounted volume</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">#- ./writable:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">client/web start</span></span></code></pre></div><p>Then start the service using the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span></code></pre></div><p>and check the logs using:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The following examples show different ways to configure and use the Authup service using docker-compose. For more general information about how to configure Authup, see the <a href="./configuration.html">configuration</a> section.</p><h3 id="environment-variables" tabindex="-1">Environment variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment variables&quot;">​</a></h3><p>The following example shows how to configure the Authup service using environment variables. This will start only the main backend service and forward it to the port <code>3001</code> on the local machine.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">authup</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">authup</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">authup</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">ADMIN_USERNAME=test</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">ADMIN_PASSWORD=test-password</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server/core start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">authup</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">authup</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">authup</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">authup:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">ADMIN_USERNAME=test</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">ADMIN_PASSWORD=test-password</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server/core start</span></span></code></pre></div><h3 id="configuration-file" tabindex="-1">Configuration file <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration file&quot;">​</a></h3><p>This example shows how to start both services from the same container with the main backend service being configured with non-default values via a mounted configuration file.</p><p>Create a file called <code>authup.server.core.conf</code> and store it in the same directory. Paste the following content into the file which will configure the admin user for the API service:</p><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ADMIN_USERNAME=test</span></span>
<span class="line"><span style="color:#e1e4e8;">ADMIN_PASSWORD=test-password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ADMIN_USERNAME=test</span></span>
<span class="line"><span style="color:#24292e;">ADMIN_PASSWORD=test-password</span></span></code></pre></div><p>In the following compose file example you can see that the configuration file is mounted into the container under <code>/usr/src/app</code> which is the default location for configuration files.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">authup</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">authup</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./authup.server.core.conf:/usr/src/app/authup.server.core.conf</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server/core start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">authup</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">authup</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./authup.server.core.conf:/usr/src/app/authup.server.core.conf</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server/core start</span></span></code></pre></div><h3 id="multiple-services" tabindex="-1">Multiple services <a class="header-anchor" href="#multiple-services" aria-label="Permalink to &quot;Multiple services&quot;">​</a></h3><p>This shows an example of how to run authup alongside other services (postgres &amp; redis) and connect to them. It also shows how to split Authup into multiple services running the client- &amp; server-services in separate containers.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">authup_data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">postgres_data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">redis_data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">server-core</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server-core</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">authup_data:/usr/src/writable</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_TYPE=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_HOST=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_PORT=5432</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_USERNAME=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_PASSWORD=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">DB_DATABASE=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">REDIS_URL=redis://redis:6379</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server/core start</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">client-web</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">client-web</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">server-core</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">client/web start</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">postgres</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">postgres:14</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">postgres_data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">POSTGRES_PASSWORD=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">POSTGRES_USER=postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">POSTGRES_DB=postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">redis</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#9ECBFF;">redis_data:/data</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">authup_data</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">postgres_data</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">redis_data</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">server-core</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server-core</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">authup_data:/usr/src/writable</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">&quot;3001:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_TYPE=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_HOST=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_PORT=5432</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_USERNAME=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_PASSWORD=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">DB_DATABASE=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">REDIS_URL=redis://redis:6379</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server/core start</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">client-web</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/authup/authup:latest</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">client-web</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">server-core</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">client/web start</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">postgres</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">postgres:14</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">postgres</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">postgres_data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">POSTGRES_PASSWORD=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">POSTGRES_USER=postgres</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">POSTGRES_DB=postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">redis</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis:latest</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#032F62;">redis_data:/data</span></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="authup-not-reachable-for-redirect-in-other-services" tabindex="-1">Authup not reachable for redirect in other services <a class="header-anchor" href="#authup-not-reachable-for-redirect-in-other-services" aria-label="Permalink to &quot;Authup not reachable for redirect in other services&quot;">​</a></h3><p>If you would like to access the Authup instance and your operations require a redirect to the Authup instance, you need to set the <code>PUBLIC_URL</code> environment variable to the service name and port of the Authup service (i.e. <code>authup:3000</code>). This will allow the compose network to resolve the service name to the correct IP address.</p>`,30),e=[o];function t(c,r,E,i,y,u){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
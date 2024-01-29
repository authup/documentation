import{_ as s,o as e,c as n,R as a}from"./chunks/framework.8k-_6wIf.js";const x=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/nginx.md","filePath":"guide/deployment/nginx.md"}'),p={name:"guide/deployment/nginx.md"},l=a(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><p>To configure nginx as a reverse proxy, we need to create a new file (e.g. <code>app</code>) in the directory <code>/etc/nginx/sites-enabled</code>.</p><div class="warning custom-block"><p class="custom-block-title">Info</p><p>Don&#39;t forget to replace the placeholders with the actual values:</p><ul><li><code>[DOMAIN]</code> Domain name (e.g. app.example.com)</li><li><code>[CLIENT_WEB_PORT]</code>: Port of the client web application.</li><li><code>[SERVER_CORE_PORT]</code>: Port of the server core application.</li></ul></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">map $sent_http_content_type $expires {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;text/html&quot;                 epoch;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;text/html; charset=utf-8&quot;  epoch;</span></span>
<span class="line"><span style="color:#e1e4e8;">    default                     off;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    server_name [DOMAIN];</span></span>
<span class="line"><span style="color:#e1e4e8;">    listen 80;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip            on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_types      text/plain application/xml text/css application/javascript;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_min_length 1000;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    client_max_body_size 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunked_transfer_encoding on;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">        expires $expires;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_redirect                      off;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header Host               $host;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Real-IP          $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-Proto  $scheme;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_read_timeout          1m;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_connect_timeout       1m;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass                          http://127.0.0.1:[CLIENT_WEB_PORT];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    location /api/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">        rewrite ^/api(/.*)$ $1 break;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_redirect                      off;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header Host               $host;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Real-IP          $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-Proto  $scheme;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_read_timeout          2m;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_connect_timeout       2m;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass                          http://127.0.0.1:[SERVER_CORE_PORT];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">map $sent_http_content_type $expires {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;text/html&quot;                 epoch;</span></span>
<span class="line"><span style="color:#24292e;">    &quot;text/html; charset=utf-8&quot;  epoch;</span></span>
<span class="line"><span style="color:#24292e;">    default                     off;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">    server_name [DOMAIN];</span></span>
<span class="line"><span style="color:#24292e;">    listen 80;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    gzip            on;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_types      text/plain application/xml text/css application/javascript;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_min_length 1000;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    client_max_body_size 0;</span></span>
<span class="line"><span style="color:#24292e;">    chunked_transfer_encoding on;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location / {</span></span>
<span class="line"><span style="color:#24292e;">        expires $expires;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        proxy_redirect                      off;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header Host               $host;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Real-IP          $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-Proto  $scheme;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_read_timeout          1m;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_connect_timeout       1m;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass                          http://127.0.0.1:[CLIENT_WEB_PORT];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    location /api/ {</span></span>
<span class="line"><span style="color:#24292e;">        rewrite ^/api(/.*)$ $1 break;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        proxy_redirect                      off;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header Host               $host;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Real-IP          $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-Proto  $scheme;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_read_timeout          2m;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_connect_timeout       2m;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass                          http://127.0.0.1:[SERVER_CORE_PORT];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="certificate" tabindex="-1">Certificate <a class="header-anchor" href="#certificate" aria-label="Permalink to &quot;Certificate&quot;">​</a></h2><p>The easiest way to set up a certificate is with the help of certbot. On a Linux based system, letsencrypt can be installed with the following command.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3-certbot-nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3-certbot-nginx</span></span></code></pre></div><p>A certificate can be requested and installed with the following command.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">certbot</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> [DOMAIN]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">certbot</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> [DOMAIN]</span></span></code></pre></div>`,9),o=[l];function t(c,r,i,y,d,_){return e(),n("div",null,o)}const m=s(p,[["render",t]]);export{x as __pageData,m as default};

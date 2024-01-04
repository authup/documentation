# Configuration

The UI configuration can be provided in different file formats, 
such as `authup.client.web.{conf,js,ts,...}`.

The environment variables in the .env file variant can also be provided via runtime environment.

::: code-group

```typescript [authup.client.web.ts]

export default {
    /**
     * The environment of the application.
     */
    env: 'production',
    /**
     * The application port.
     */
    port: 3000,
    /**
     * The address where the API can be reached.
     */
    apiUrl: 'http://localhost:3001',
    /**
     * The public url of the user interface.
     */
    publicUrl: 'http://localhost:3000',
}
```

```dotenv [authup.client.web.conf]
env=production
port=3000
apiUrl=http://localhost:3001
publicUrl=http://localhost:3000

```

````dotenv [.env]
NODE_ENV=production
PORT=3000
API_URL=http://localhost:3001
PUBLIC_URL=http://localhost:3000
````
:::

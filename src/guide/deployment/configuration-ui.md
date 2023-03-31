# Configuration

The UI configuration can be provided in different file formats, 
such as `authup.ui.{conf,js,ts,...}`.

## File

::: code-group

```typescript [authup.api.ts]

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
}
```

```dotenv [authup.api.conf]
NODE_ENV=production
PORT=3000
API_URL=http://localhost:3001

```
::: 

## Environment

The following environment variables are available:

- `NODE_ENV`: **string**
- `PORT`: **number**
- `API_URL`: **string**

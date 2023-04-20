# HTTP Middleware

The http middleware should be injected at the beginning of the chain.

The middleware is used to validate the bearer token by authorization header (or by cookie).
It calls a callback function with general information (realm, abilities, ...) and information about the corresponding robot or user of the token.

## Configuration

The `craeteHTTPMiddleware` method, accepts a configuration object.
The redis client, if enabled, is used to cache verification responses from the backend service.

```typescript
import { Router } from 'routup';
import { createHTTPMiddleware } from '@authup/server-adapter';
import { createClient } from 'redis-extension';

// setup router
const router = new Router();

// setup socket middleware for socket server
router.use(createHTTPMiddleware({
    tokenByCookie: (req, cookieName) => req.cookies[cookieName],
    tokenVerifier: {
        baseUrl: 'http://localhost:3001/',
        creator: {
            type: 'user',
            name: 'admin',
            password: 'start123',
        },
        cache: {
            type: 'redis',
            client: createClient({connectionString: 'redis://127.0.0.1'})
        }
    },
    tokenVerifierHandler: (req, data) => {
        console.log(data);
        // { 'realmId': 'xxx', userId: 'xxx', userName: 'xxx', ... }
    }
    /* ... */
}));

router.listen(3000);
```

For more details check out, the [API Reference]().

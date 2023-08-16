# Socket Middleware

The socket middleware should be injected at the beginning of the chain. 

Besides, validating the authorization header, the `createSocketMiddleware` also extends the request 
with general information (realm, abilities, ...) and information about the corresponding robot or user of the token.

## Configuration

The `createSocketMiddleware` method, accepts a configuration object.
The redis client, if enabled, is used to cache verification responses from the backend service.

```typescript
import { Server } from 'socket.io';
import { createSocketMiddleware } from '@authup/server-adapter';
import { createClient } from 'redis-extension';

// create redis client
const redis = createClient({connectionString: 'redis://127.0.0.1'});

// setup socket.io server
const server = new Server();

// setup socket middleware for socket server
server.use(createSocketMiddleware({
    tokenByCookie: (req, cookieName) => req.cookies[cookieName],
    tokenVerifier: {
        baseURL: 'http://localhost:3010/',
        creator: {
            type: 'user',
            name: 'admin',
            password: 'start123',
        },
        cache: {
            type: 'redis',
            client: redis
        }
    },
    tokenVerifierHandler: (req, data) => {
        console.log(data);
        // { 'realmId': 'xxx', userId: 'xxx', userName: 'xxx', ... }
    }
    /* ... */
}));

// ...
```

For more details check out, the [API Reference]().

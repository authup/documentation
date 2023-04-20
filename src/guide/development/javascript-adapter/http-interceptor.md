# HTTP Interceptor

The interceptor method, can be used for a [token creator](token-creator.md) strategy, 
a request interceptor to mount an [axios](https://github.com/axios/axios) or 
[hapic](https://github.com/tada5hi/hapic) based http client. 

If the request fails due to a non-existent, expired or invalid token, 
a new token is set using the token creator strategy. 

## Hapic 

```typescript
import { mountTokenInterceptorOnClient } from '@auhtup/server-adapter';
import hapic from 'hapic';

mountTokenInterceptorOnClient(hapic, {
    baseUrl: 'http://localhost:3001',
    tokenCreator: {
        type: 'user',
        name: 'admin',
        password: 'start123'
    }
});

```

## Axios

```typescript
import { mountTokenInterceptorOnClient } from '@auhtup/server-adapter';
import axios from 'axios';

mountTokenInterceptorOnClient(axios, {
    baseUrl: 'http://localhost:3001',
    tokenCreator: {
        type: 'user',
        name: 'admin',
        password: 'start123'
    }
});
```

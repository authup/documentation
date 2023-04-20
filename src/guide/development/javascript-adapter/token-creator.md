# Token Creator

The TokenCreator is a mechanism to create a generator
function that creates a token on demand using a (predefined) strategy.

The following strategies are built in and can be used as follows.

## User Strategy

```typescript
import type { TokenCreator } from '@authup/server-adapter';
import {createTokenCreatorWithUser} from '@authup/server-adapter';

const creator : TokenCreator = createTokenCreatorWithUser({
    name: 'admin',
    password: 'start123'
    // realmId: 'xxx',
    // realmName: 'xxx'
});

const tokenPayload = await creator();
console.log(tokenPayload);
// { access_token: '...', refresh_token: '...', expires_in: '...', ... }
```

## Robot Strategy

```typescript
import type { TokenCreator } from '@authup/server-adapter';
import { createTokenCreatorWithRobot } from '@authup/server-adapter';

const creator : TokenCreator = createTokenCreatorWithRobot({
    id: 'xxx',
    secret: 'xxx'
});

const tokenPayload = await creator();
console.log(tokenPayload);
// { access_token: '...', refresh_token: '...', expires_in: '...', ... }
```

## RobotInVault Strategy

```typescript
import type { TokenCreator } from '@authup/server-adapter';
import { createTokenCreatorWithRobotInVault } from '@authup/server-adapter';

const creator : TokenCreator = createTokenCreatorWithRobotInVault({
    name: 'SYSTEM',
    vault: 'start123@http://127.0.0.1:8090/v1/'
});

const tokenPayload = await creator();
console.log(tokenPayload);
// { access_token: '...', refresh_token: '...', expires_in: '...', ... }
```

## Custom Strategy
```typescript
import type { TokenCreator } from '@authup/server-adapter';

const creator : TokenCreator = async () => {
    return {
        token_type: 'Bearer',
        access_token: 'xxx',
        refresh_token: 'xxx',
        expires_in: 'xxx',
    };
};

const tokenPayload = await creator();
console.log(tokenPayload);
// { access_token: '...', refresh_token: '...', expires_in: '...', ... }

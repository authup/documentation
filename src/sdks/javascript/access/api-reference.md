# System

## `Ability`

```typescript
import { MongoQuery } from '@ucast/mongo2js';

export type Ability<T extends Record<string, any> = Record<string, any>> = {
    id: string,
    inverse?: boolean,
    condition?: MongoQuery<T> | null,
    fields?: string[] | null,
    target?: string | null,
    power?: number | null
};
```

## `OAuth2RefreshToken`

**Type**
```typescript
import {
    OAuth2AccessToken,
    Client,
    Realm,
    Robot,
    User 
} from '@authup/core';

interface OAuth2RefreshToken {
    id: string;

    expires: string;

    scope: string | null;

    // ------------------------------------------------------------------

    client_id: Client['id'] | null;

    client: Client | null;

    user_id: User['id'] | null,

    user: User | null,

    robot_id: Robot['id'] | null,

    robot: Robot | null,

    access_token: string | null;

    realm_id: Realm['id'];

    realm: Realm;
}
```

**References**
- [Client](../core-kit/api-reference#client)
- [Realm](../core-kit/api-reference#realm)
- [Robot](../core-kit/api-reference#robot)
- [User](../core-kit/api-reference#user)

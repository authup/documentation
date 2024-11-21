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

## `ErrorCode`

```typescript
export enum ErrorCode {
    ABILITY_INVALID = 'invalid_ability',

    HEADER_INVALID = 'invalid_header',
    HEADER_AUTH_TYPE_UNSUPPORTED = 'unsupported_auth_header_type',

    CREDENTIALS_INVALID = 'invalid_credentials',

    ENTITY_INACTIVE = 'inactive_entity',

    TOKEN_INVALID = 'invalid_token',
    TOKEN_INACTIVE = 'inactive_token',
    TOKEN_EXPIRED = 'expired_token',
    TOKEN_CLIENT_INVALID = 'invalid_client',
    TOKEN_GRANT_INVALID = 'invalid_grant',
    TOKEN_GRANT_TYPE_UNSUPPORTED = 'unsupported_token_grant_type',
    TOKEN_SCOPE_INVALID = 'invalid_scope',
    TOKEN_SUB_KIND_INVALID = 'invalid_token_sub_kind',
}
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
- [Client](api-reference-resources.md#client)
- [Realm](api-reference-resources.md#realm)
- [Robot](api-reference-resources.md#robot)
- [User](api-reference-resources.md#user)

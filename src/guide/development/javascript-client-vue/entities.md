# Entities

The package contains a **entity** component for the following resources:

`General`
- **ClientEntity**
- **ClientScopeEntity**
- **IdentityProviderEntity**
- **PermissionEntity**
- **RealmEntity**
- **RobotEntity**
- **RoleEntity**
- **ScopeEntity**
- **ScopeClientEntity**
- **UserEntity**

These entities always represent a single resource. 
The criteria under which this can be requested by the API can be defined
with the help of component [props](#props).

In addition, the entity/object can be represented differently using template [slots](#slots).

## Props

**`entity`**

The entity prop can be used to directly provide the object instead of getting it from the API.

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserEntity } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserEntity
        },
        setup() {
            const entity = {
                id: 'xxx',
                name: '...',
                // ...
            }

            return {
                entity
            }
        }
    })
</script>
<template>
    <UserEntity :entity="entity">
        <!-- content -->
    </UserEntity>
</template>
```

**`entityId`**

The entityId prop can be used to fetch a resource by its identifier from the API.

```vue

<script>
    import { defineComponent } from 'vue';
    import { UserEntity } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserEntity
        },
        setup() {
            const id = 'xxx';

            return {
                id
            }
        }
    })
</script>
<template>
    <UserEntity :entity-id="id">
        <!-- content -->
    </UserEntity>
</template>
```

**`queryFilters`**

The queryFilters prop can be used to fetch a resource by **one** or **multiple** conditions from the API.

```vue

<script>
    import { defineComponent } from 'vue';
    import { UserEntity } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserEntity
        },
        setup() {
            const queryFilters = {
                name: 'admin'
            };

            return {
                queryFilters
            }
        }
    })
</script>
<template>
    <UserEntity :query-filters="queryFilters">
        <!-- content -->
    </UserEntity>
</template>
```

**`queryFields`**

The queryFields prop cannot be used alone, 
as it only reduces the field set or includes fields that are not returned by default.

```vue

<script>
    import { defineComponent } from 'vue';
    import { UserEntity } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserEntity
        },
        setup() {
            const queryFilters = {
                name: 'admin'
            };
            
            const queryFields = ['email'];

            return {
                queryFilters,
                queryFields
            }
        }
    })
</script>
<template>
    <UserEntity 
        :query-filters="queryFilters" 
        :query-fields="queryFields"
    >
        <!-- content -->
    </UserEntity>
</template>
```

## Slots

### default

The default slot is rendered when the entity is resolved without an error.
The slot argument is of type EntityManagerSlotProps.

```vue
<template>
    <UserEntity :entity-id="id">
        <template #default="props">
            <!-- Display the entity props -->
            {{props.data}}
        </template>
    </UserEntity>
</template>
```

### error

The error slot is rendered when the entity resolved with an error.

```vue
<template>
    <UserEntity :entity-id="id">
        <template #error="error">
            {{ error.message }}
            <!-- The entity could not be resolved -->
        </template>
        <!-- content -->
    </UserEntity>
</template>
```

## Types

### `EntityManagerSlotProps`
```typescript
type EntityManagerSlotProps<T> = {
    busy: boolean,
    data: T | undefined,
    error: Error | undefined,
    lockId: EntityID<T> | undefined,
    create(entity: Partial<T>): Promise<void>,
    createOrUpdate(entity: Partial<T>) : Promise<void>,
    created(entity: T) : void,
    update(entity: Partial<T>) : Promise<void>,
    updated(entity: T) : void,
    delete() : Promise<void>,
    deleted(entity?: T) : void;
    failed(e: Error) : void;
    resolve(ctx?: EntityManagerResolveContext<T>) : Promise<void>;
    resolveOrFail(ctx?: EntityManagerResolveContext<T>) : Promise<void>;
};
```

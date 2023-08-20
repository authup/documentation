# Lists

The package contains a **list** component for the following resources:

`General`
- **ClientList**
- **ClientScopeList**
- **IdentityProviderList**
- **PermissionList**
- **RealmList**
- **RobotList**
- **RoleList**
- **ScopeList**
- **ScopeClientList**
- **UserList**

`Assignment`
- **IdentityProviderRoleAssignmentList**
- **PermissionRobotAssignmentList**
- **PermissionRoleAssignmentList**
- **PermissionUserAssignmentList**
- **RobotPermissionAssignmentList**
- **RobotRoleAssignmentList**
- **RolePermissionAssignmentList**
- **RoleRobotAssignmentList**
- **RoleUserAssignmentList**
- **UserPermissionAssignmentList**
- **UserRoleAssignmentList**

## Usage

```vue
<script>
    import { defineComponent } from 'vue';
    import { 
        ListSearch,
        ListTitle,
        ListPagination,
        UserList 
    } from '@authup/client-vue';

    export default defineComponent({
        components: {
            ListSearch,
            ListTitle,
            ListPagination,
            UserList
        },
        setup() {
            const query = {
                sort: {
                    name: 'ASC'
                },
                pagination: {
                    limit: 10,
                    offset: 0
                }
            }

            return {
                query
            }
        }
    })
</script>
<template>
    <UserList :query="query">
        <template #header="props">
            <ListHeader text="UserList" />

            <ListSearch
                :busy="props.busy"
                :load="props.load"
                :meta="props.meta"
            />
        </template>
        <template #footer="props">
            <ListPagination
                :busy="props.busy"
                :load="props.load"
                :meta="props.meta"
            />
        </template>
        <template #body="props">
            <ul>
                <template v-for="entity in props.data" :key="entity.id">
                    <li>
                        {{entity.name}}
                    </li>
                </template>
            </ul>
        </template>
    </UserList>
</template>
```

## Props

**`header`**

Disable the header section.

**`footer`**

Disable the footer section.

**`noMore`**

Disable the no more items section.

**`loading`**

Disable the loading section.

**`query`**

The query prop has the following parameters:
- **fields**: Return only specific resource fields or extend the default selection
- **filters**: Filter the resources, according to specific criteria.
- **relations**: Include related resources of the primary resource.
- **pagination**: Limit the number of resources returned from the entire collection.
- **sort**: Sort the resources according to one or more keys in asc/desc direction.

::: tip
For this purpose [rapiq](https://github.com/tada5hi) is used.
Visit the documentation for more details about the parameters and the scheme.
:::

## Slots

**`body`**

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserList } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserList
        }
    })
</script>
<template>
    <UserList>
        <template #body="props">
            <ul>
                <template v-for="entity in props.data" :key="entity.id">
                    <li>
                        {{entity.name}}
                    </li>
                </template>
            </ul>
        </template>
    </UserList>
</template>
```

**`header`**

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserList } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserList
        }
    })
</script>
<template>
    <UserList>
        <template #header="props">
            <button
                type="button"
                @click="props.load()"
                :disabled="props.busy"
            >
                Refresh
            </button>
        </template>
    </UserList>
</template>
```

**`footer`**

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserList } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserList
        }
    })
</script>
<template>
    <UserList>
        <template #footer="props">
            <button
                type="button"
                @click="props.load()"
                :disabled="props.busy"
            >
                Refresh
            </button>
        </template>
    </UserList>
</template>
```

**`loading`**

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserList } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserList
        }
    })
</script>
<template>
    <UserList>
        <template #loading="props">
            Loading resources...
        </template>
    </UserList>
</template>
```


**`noMore`**

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserList } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserList
        }
    })
</script>
<template>
    <UserList>
        <template #no-more="props">
            No more resources available...
        </template>
    </UserList>
</template>
```

# Forms

The package contains a **form** component for the following resources:

`General`
- **ClientForm**
- **ClientScopeForm**
- **IdentityProviderForm**
- **PermissionForm**
- **RealmForm**
- **RobotForm**
- **RoleForm**
- **ScopeForm**
- **ScopeClientForm**
- **UserForm**

These forms always represent a single resource.
They have the same component [props](entities.md#props) as the [entity](entities.md) components.

## Usage

If the entity prop has no id parameter, the object is seen as a template for the form fields.

```vue
<script>
    import { defineComponent } from 'vue';
    import { UserForm } from '@authup/client-vue';

    export default defineComponent({
        components: {
            UserForm
        },
        setup() {
            const entity = {
                id: 'xxx',
                name: '...',
                // ...
            }
            
            const handleCreated = (entity) => {
                console.log(`The user ${entity.name} was created.`);
            }
            
            const handleUpdated = (entity) => {
                console.log(`The user ${entity.name} has been updated.`);
            }
            
            const handleFailed = (e) => {
                console.log(`Failed with: ${e.message}`);
            }

            return {
                entity,
                handleUpdated,
                handleCreated,
                handleFailed
            }
        }
    })
</script>
<template>
    <UserForm 
        :entity="entity"
        @updated="handleUpdated"
        @created="handleCreated"
        @failed="handleFailed"
    >
        <!-- content -->
    </UserForm>
</template>
```

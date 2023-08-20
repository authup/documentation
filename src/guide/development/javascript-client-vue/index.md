# JavaScript

This package provides **lists**, **forms** and **entities** for all 
[domains](../javascript-core/api-reference-resources.md) of the ecosystem.
Besides, many other features are also included.

## Installation

Add the package as a dev-dependency to the project.

```sh
npm install @authup/client-vue --save-dev
```

## Configuration

Create a file `store/authup.ts`.

```typescript
import { createStore } from '@authup/client-vue';
import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#imports';

export const useAuthupStore = defineStore(
    'auth', 
    () => {
        const config = useRuntimeConfig();
    
        return createStore({ baseURL: 'http://localhost:3010'});
    }
);
```

### Vue
Install the plugin in the root file, where creating the application instance is created.

```typescript
import { APIClient } from '@authup/core';
import { install } from '@authup/client-vue';
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
});

app.use(install, {
    apiClient: new APIClient({
        baseURL: 'http://localhost:3010'
    }),
    store: useAuthupStore()
});
```

### Nuxt

Create file `plugins/authup.ts` in the root directory of the nuxt application.

```typescript
import { APIClient } from '@authup/core';
import { install } from '@authup/client-vue';
import { useAuthupStore } from '../store/authup';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((ctx) => {
    ctx.vueApp.use(install, {
        apiClient: new APIClient({
            baseURL: 'http://localhost:3010'
        }),
        store: useAuthupStore()
    });
});
```

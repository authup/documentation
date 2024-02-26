# Configuration

The API configuration can be provided in different file formats, 
such as `authup.api.{conf,js,ts,...}`.

The environment variables in the .env file variant can also be provided via runtime environment.

::: code-group

```typescript [authup.server.core.ts]

export default {
    /**
     * The environment of the application.
     */
    env: 'production',
    /**
     * The application port.
     */
    port: 3001,
    /**
     * The address where the API can be reached.
     */
    publicUrl: 'http://localhost:3001',
    /**
     * The redirect url to redirect to after successful
     * login with an external identity provider.
     */
    authorizeRedirectUrl: 'http://localhost:3000',
    /**
     * Enable registration.
     */
    registration: false,
    /**
     * Email verification required for registration or login with identity provider.
     */
    emailVerification: false,
    /**
     * Allow password reset via email?
     */
    forgotPassword: false,
    /**
     * Admin user name.
     * Default: 'admin'
     */
    userAdminName: 'admin',
    /**
     * Admin password.
     * Default: 'start123'
     */
    userAdminPassword: 'start123',
    /**
     * Reset the admin password if it has already
     * been created with a different password.
     */
    userAdminPasswordReset: false,
    /**
     * Enable a global robot account.
     */
    robotAdminEnabled: false,
    /**
     * Robot admin name
     */
    robotAdminName: 'system',
    /**
     * Robot admin password/secret.
     */
    robotAdminSecret: 'foo',
    /**
     * Reset the robot secret if it has already
     * been created with a different password.
     */
    robotAdminSecretReset: false
}
```

```dotenv [authup.server.core.conf]
port=3001
publicUrl=http://localhost:3001
authorizeRedirectUrl=http://localhost:3000
registration=false
emailVerification=false
forgotPassword=false
userAdminName=admin
userAdminPassword=start123
userAdminPasswordReset=false
robotAdminEnabled=false
robotAdminName=system
robotAdminSecret=foo
robotAdminSecretReset=false

```

```dotenv [.env]
PORT=3001
PUBLIC_URL=http://localhost:3001
AUTHORIZE_REDIRECT_URL=http://localhost:3000
REGISTRATION=false
EMAIL_VERIFICATION=false
FORGOT_PASSWORD=false
USER_ADMIN_NAME=admin
USER_ADMIN_PASSWORD=start123
USER_ADMIN_PASSWORD_RESET=false
ROBOT_ADMIN_ENABLED=false
ROBOT_ADMIN_NAME=system
ROBOT_ADMIN_SECRET=foo
ROBOT_ADMIN_SECRET_RESET=false

```
:::

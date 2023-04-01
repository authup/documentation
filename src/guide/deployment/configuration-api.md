# Configuration

The API configuration can be provided in different file formats, 
such as `authup.api.{conf,js,ts,...}`.

The environment variables in the .env file variant can also be provided via runtime environment.

::: code-group

```typescript [authup.api.ts]

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
    adminUsername: 'admin',
    /**
     * Admin password.
     * Default: 'start123'
     */
    adminPassword: 'start123',
    /**
     * Reset the admin password if it has already
     * been created with a different password.
     */
    adminPasswordReset: false,
    /**
     * Enable a global robot account.
     */
    robotEnabled: false,
    /**
     * Robot password/secret.
     */
    robotSecret: 'foo',
    /**
     * Reset the robot secret if it has already
     * been created with a different password.
     */
    robotSecretReset: false
}
```

```dotenv [authup.api.conf]
port=3001
publicUrl=http://localhost:3001
authorizeRedirectUrl=http://localhost:3000
registration=false
emailVerification=false
forgotPassword=false
adminUsername=admin
adminPassword=start123
adminPasswordReset=false
robotEnabled=false
robotSecret=foo
robotSecretReset=false

```

```dotenv [.env]
PORT=3001
PUBLIC_URL=http://localhost:3001
AUTHORIZE_REDIRECT_URL=http://localhost:3000
REGISTRATION=false
EMAIL_VERIFICATION=false
FORGOT_PASSWORD=false
ADMIN_USERNAME=admin
ADMIN_PASSWORD=start123
ADMIN_PASSWORD_RESET=false
ROBOT_ENABLED=false
ROBOT_SECRET=foo
ROBOT_SECRET_RESET=false

```
:::

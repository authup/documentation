# Configuration

The API configuration can be provided in different file formats, 
such as `authup.api.{conf,js,ts,...}`.

## File

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
    apiUrl: 'http://localhost:3001',
    /**
     * The redirect url to redirect to after successful
     * login with an external identity provider.
     */
    authorizeRedirectUrl: 'http://localhost:3000',
    /**
     * Boolean or connection string (redis://127.0.0.1)
     */
    redis: true,
    /**
     * Boolean or connection string (start123@http://127.0.0.1:8090/v1/)
     */
    vault: true,
    /**
     * Boolean, connection string or configuration object. 
     * (smtp(s)://username:password@smtp.example.com)
     */
    smtp: {
        host: '127.0.0.1', 
        port: 25, 
        user: '', 
        password: '', 
        ssl: false, 
        starttls: false, 
        from: 'no-reply@example.com', 
        fromDisplayName: 'Authup', 
        replyTo: 'contact@example.com', 
        replyToDisplayName: 'Authup'
    },
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
authorizeRedirectUrl=http://localhost:3000
redis=true
vault=true
smtp.host=127.0.0.1
smtp.port=25
smtp.user=
smtp.password=
smtp.ssl=false
smtp.starttls=false
smtp.from=no-reply@example.com
smtp.fromDisplayName=Authup
smtp.replyTo=contact@example.com
smtp.replyToDisplayName=Authup
adminUsername=admin
adminPassword=start123
adminPasswordReset=false
robotEnabled=false
robotSecret=foo
robotSecretReset=false

```
::: 

## Environment

The following environment variables are available:

- `NODE_ENV`: **string**
- `WRITABLE_DIRECTORY_PATH`: **string**
- `HOST`: **string**
- `PORT`: **number**
- `PUBLIC_URL`: **string**
- `ADMIN_USERNAME`: **string**
- `ADMIN_PASSWORD`: **string**
- `ROBOT_ENABLED`: **boolean**
- `ROBOT_SECRET`: **string**
- `PERMISSIONS`: **string**
- `AUTHORIZE_REDIRECT_URL`: **string**
- `ACCESS_TOKEN_MAX_AGE`: **number**
- `REFRESH_TOKEN_MAX_AGE`: **number**
- `REGISTRATION`: **boolean**
- `EMAIL_VERIFICATION`: **boolean**
- `FORGOT_PASSWORD`: **boolean**

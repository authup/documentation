# Configuration

The configuration is similar for both Bare Metal and Docker variants. 
In both cases, configuration can be done via configuration file or environment variables.

::: info Information
In general **no** configuration file is required at all!
All options have either default values or are generated automatically 🔥.
:::

## Configuration File

The configuration can be provided in different file formats, such as `authup.{conf,js,ts,...}`.

::: code-group

```typescript [authup.ts]

export default {
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

```dotenv [authup.conf]
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

## Environment Variables

The following environment variables are available:

**`App`**
- `NODE_ENV`: **string**
- `PORT`: **number**
- `API_URL`: **string**

**`Server`**
- `NODE_ENV`: **string**
- `WRITABLE_DIRECTORY_PATH`: **string**
- `ADMIN_USERNAME`: **string**
- `ADMIN_PASSWORD`: **string**
- `ROBOT_ENABLED`: **boolean**
- `ROBOT_SECRET`: **string**
- `PERMISSIONS`: **string**
- `HOST`: **string**
- `PORT`: **number**
- `PUBLIC_URL`: **string**
- `AUTHORIZE_REDIRECT_URL`: **string**
- `ACCESS_TOKEN_MAX_AGE`: **number**
- `REFRESH_TOKEN_MAX_AGE`: **number**
- `REGISTRATION`: **boolean**
- `EMAIL_VERIFICATION`: **boolean**
- `FORGOT_PASSWORD`: **boolean**

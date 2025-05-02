# Permissions & Polices

In Authup, permissions and policies are two central concepts for controlling access within the system.
While permissions represent the basic ability to perform an action, policies enable detailed control over the conditions under which a permission is actually granted.

## Permissions

A permission fundamentally describes an action on a subject/object.
It exists independently of roles and users.

Examples: 
- `user_read`
- `user_update`

However, these permissions alone are not sufficient to enable context-dependent access controls.
This is where policies come into play.

## Policies

A policy is a rule that defines under which conditions a permission is granted.

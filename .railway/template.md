# Deploy and Host Bonds on Railway

Deploy Bonds with PostgreSQL and persistent application storage.

## About Hosting Bonds

This template runs Bonds behind Railway HTTPS and connects it to PostgreSQL over the private network.

## Why Deploy Bonds on Railway?

Railway provides managed networking, storage, health checks, and automatic deployments from GitHub.

## Common Use Cases

- Self-hosted contact management
- Shared address books
- Contact reminders and synchronization

## Dependencies for Bonds Hosting

- PostgreSQL
- Two persistent volumes

### Deployment Dependencies

- [Bonds](https://github.com/naiba/bonds)
- [Bonds Railway wrapper](https://github.com/jonahsnider/bonds-railway)

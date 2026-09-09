# Bonds on Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template/bonds?utm_medium=integration&utm_source=button&utm_campaign=bonds)

Deploy [Bonds](https://github.com/naiba/bonds) with Railway PostgreSQL and persistent storage.

The template includes:

- Bonds configured for production behind Railway HTTPS
- PostgreSQL over Railway's private network
- Generated `JWT_SECRET` and `SETTINGS_ENC_KEY` values
- Persistent volumes for PostgreSQL, uploads, search data, and backups
- A deployment health check

The first registered user becomes the instance administrator. Configure registration, backups, email, and authentication under **Admin > System Settings**.

This deployment requires two volumes, so it is not compatible with Railway's one-volume Free-plan limit.

> Bonds is distributed under the [Business Source License 1.1](https://github.com/naiba/bonds/blob/main/LICENSE). This community template is not affiliated with or endorsed by the Bonds project.

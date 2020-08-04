## mailinabox-api

[![Build & Publish](https://github.com/badsyntax/mailinabox-api/workflows/Build%20&%20Publish/badge.svg)](https://github.com/badsyntax/mailinabox-api/actions?query=workflow%3A%22Build+%26+Publish%22)

JavaScript/TypeScript client SDK for the Mail-in-a-Box API.

- API version: 0.46.0
- Package version: 0.46.4

https://www.npmjs.com/package/mailinabox-api

**NOTE:** This package is [auto-generated](https://github.com/badsyntax/mailinabox-api) from the Mail-In-A-Box OpenAPI spec.

### Installing

```js
npm install mailinabox-api --save
```

### Usage

```ts
import {
  AliasesApi,
  Configuration,
  ConfigurationParameters,
  DnsApi,
  MailUsersResponseFormat,
  SslApi,
  SystemApi,
  UserApi,
  UsersApi,
  WebApi,
} from 'mailinabox-api';

const apiConfigParams: ConfigurationParameters = {
  basePath: '/admin',
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
};

const apiConfig = new Configuration(apiConfigParams);

const userApi = new UserApi(apiConfig);
const systemApi = new SystemApi(apiConfig);
const sslApi = new SslApi(apiConfig);
const dnsApi = new DnsApi(apiConfig);
const mailApi = new MailApi(apiConfig);
const webApi = new WebApi(apiConfig);

// example request
const users = await usersApi.getMailUsers({
  format: MailUsersResponseFormat.Json,
});
```

## License

MIT License

Copyright (c) 2020 Richard Willis

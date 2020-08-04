## mailinabox-api

![Build & Publish](https://github.com/badsyntax/mailinabox-api/workflows/Build%20&%20Publish/badge.svg)

JavaScript/TypeScript client SDK for the Mail-in-a-Box API.

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

const aliasesApi = new AliasesApi(apiConfig);
const userApi = new UserApi(apiConfig);
const systemApi = new SystemApi(apiConfig);
const sslApi = new SslApi(apiConfig);
const dnsApi = new DnsApi(apiConfig);
const usersApi = new UsersApi(apiConfig);
const webApi = new WebApi(apiConfig);

// example request
const users = await usersApi.getMailUsers({
  format: MailUsersResponseFormat.Json,
});
```

## Latest Package Version

0.0.0-SNAPSHOT.2

## License

MIT License

Copyright (c) 2020 Richard Willis

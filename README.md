## mailinabox-api

[![Build & Publish](https://github.com/badsyntax/mailinabox-api/workflows/Build%20&%20Publish/badge.svg)](https://github.com/badsyntax/mailinabox-api/actions?query=workflow%3A%22Build+%26+Publish%22)

JavaScript/TypeScript client SDK for the Mail-in-a-Box API.

- API version: 0.51.0
- Package version: 0.51.1

https://www.npmjs.com/package/mailinabox-api

**NOTE:** This package is [auto-generated](https://github.com/badsyntax/mailinabox-api) from the Mail-In-A-Box OpenAPI spec.

### Installing

```bash
npm install mailinabox-api --save
```

### Usage

```ts
import {
  Configuration,
  ConfigurationParameters,
  MailUsersResponseFormat,
  MailApi
} from 'mailinabox-api';

const apiConfigParams: ConfigurationParameters = {
  basePath: '/admin',
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
};

const apiConfig = new Configuration(apiConfigParams);
const mailApi = new MailApi(apiConfig);

// example request
const users = await mailApi.getMailUsers({
  format: MailUsersResponseFormat.Json,
});
```

## License

MIT License

Copyright (c) 2020 Richard Willis

/* tslint:disable */
/* eslint-disable */
/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present.
 *
 * The version of the OpenAPI document: 0.51.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  SSLCertificatesProvisionResponseRequests,
  SSLCertificatesProvisionResponseRequestsFromJSON,
  SSLCertificatesProvisionResponseRequestsFromJSONTyped,
  SSLCertificatesProvisionResponseRequestsToJSON,
} from './';

/**
 * SSL certificates provision response.
 * @export
 * @interface SSLCertificatesProvisionResponse
 */
export interface SSLCertificatesProvisionResponse {
  /**
   *
   * @type {Array<SSLCertificatesProvisionResponseRequests>}
   * @memberof SSLCertificatesProvisionResponse
   */
  requests: Array<SSLCertificatesProvisionResponseRequests>;
}

export function SSLCertificatesProvisionResponseFromJSON(
  json: any
): SSLCertificatesProvisionResponse {
  return SSLCertificatesProvisionResponseFromJSONTyped(json, false);
}

export function SSLCertificatesProvisionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SSLCertificatesProvisionResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    requests: (json['requests'] as Array<any>).map(
      SSLCertificatesProvisionResponseRequestsFromJSON
    ),
  };
}

export function SSLCertificatesProvisionResponseToJSON(
  value?: SSLCertificatesProvisionResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    requests: (value.requests as Array<any>).map(
      SSLCertificatesProvisionResponseRequestsToJSON
    ),
  };
}

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
/**
 * DNS update request.
 * @export
 * @interface DNSUpdateRequest
 */
export interface DNSUpdateRequest {
  /**
   * Force an update even if mailinabox detects no changes are required.
   * @type {number}
   * @memberof DNSUpdateRequest
   */
  force: number;
}

export function DNSUpdateRequestFromJSON(json: any): DNSUpdateRequest {
  return DNSUpdateRequestFromJSONTyped(json, false);
}

export function DNSUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DNSUpdateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    force: json['force'],
  };
}

export function DNSUpdateRequestToJSON(value?: DNSUpdateRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    force: value.force,
  };
}

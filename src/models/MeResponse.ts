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
  MailUserPrivilege,
  MailUserPrivilegeFromJSON,
  MailUserPrivilegeFromJSONTyped,
  MailUserPrivilegeToJSON,
  MeAuthStatus,
  MeAuthStatusFromJSON,
  MeAuthStatusFromJSONTyped,
  MeAuthStatusToJSON,
} from './';

/**
 * Me (user) response.
 * @export
 * @interface MeResponse
 */
export interface MeResponse {
  /**
   *
   * @type {string}
   * @memberof MeResponse
   */
  apiKey?: string;
  /**
   * Email format.
   * @type {string}
   * @memberof MeResponse
   */
  email?: string;
  /**
   *
   * @type {Array<MailUserPrivilege>}
   * @memberof MeResponse
   */
  privileges?: Array<MailUserPrivilege>;
  /**
   *
   * @type {string}
   * @memberof MeResponse
   */
  reason?: string;
  /**
   *
   * @type {MeAuthStatus}
   * @memberof MeResponse
   */
  status: MeAuthStatus;
}

export function MeResponseFromJSON(json: any): MeResponse {
  return MeResponseFromJSONTyped(json, false);
}

export function MeResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MeResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiKey: !exists(json, 'api_key') ? undefined : json['api_key'],
    email: !exists(json, 'email') ? undefined : json['email'],
    privileges: !exists(json, 'privileges')
      ? undefined
      : (json['privileges'] as Array<any>).map(MailUserPrivilegeFromJSON),
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: MeAuthStatusFromJSON(json['status']),
  };
}

export function MeResponseToJSON(value?: MeResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    api_key: value.apiKey,
    email: value.email,
    privileges:
      value.privileges === undefined
        ? undefined
        : (value.privileges as Array<any>).map(MailUserPrivilegeToJSON),
    reason: value.reason,
    status: MeAuthStatusToJSON(value.status),
  };
}

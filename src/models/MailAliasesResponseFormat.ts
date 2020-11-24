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

/**
 * Response format (`application/json` or `text/html`).
 * @export
 * @enum {string}
 */
export enum MailAliasesResponseFormat {
  Text = 'text',
  Json = 'json',
}

export function MailAliasesResponseFormatFromJSON(
  json: any
): MailAliasesResponseFormat {
  return MailAliasesResponseFormatFromJSONTyped(json, false);
}

export function MailAliasesResponseFormatFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MailAliasesResponseFormat {
  return json as MailAliasesResponseFormat;
}

export function MailAliasesResponseFormatToJSON(
  value?: MailAliasesResponseFormat | null
): any {
  return value as any;
}

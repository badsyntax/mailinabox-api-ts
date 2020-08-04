/* tslint:disable */
/* eslint-disable */
/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.
 *
 * The version of the OpenAPI document: 0.46.0
 * Contact: contact@mailinabox.email
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

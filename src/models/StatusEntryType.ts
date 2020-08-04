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
 * System status entry type.
 * @export
 * @enum {string}
 */
export enum StatusEntryType {
  Heading = 'heading',
  Ok = 'ok',
  Warning = 'warning',
  Error = 'error',
}

export function StatusEntryTypeFromJSON(json: any): StatusEntryType {
  return StatusEntryTypeFromJSONTyped(json, false);
}

export function StatusEntryTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): StatusEntryType {
  return json as StatusEntryType;
}

export function StatusEntryTypeToJSON(value?: StatusEntryType | null): any {
  return value as any;
}

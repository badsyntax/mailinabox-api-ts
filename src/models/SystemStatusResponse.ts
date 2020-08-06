/* tslint:disable */
/* eslint-disable */
/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.
 *
 * The version of the OpenAPI document: 0.47.0
 * Contact: contact@mailinabox.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  StatusEntry,
  StatusEntryFromJSON,
  StatusEntryFromJSONTyped,
  StatusEntryToJSON,
} from './';

/**
 * System status response.
 * @export
 * @interface SystemStatusResponse
 */
export interface SystemStatusResponse extends Array<StatusEntry> {}

export function SystemStatusResponseFromJSON(json: any): SystemStatusResponse {
  return SystemStatusResponseFromJSONTyped(json, false);
}

export function SystemStatusResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemStatusResponse {
  return json;
}

export function SystemStatusResponseToJSON(
  value?: SystemStatusResponse | null
): any {
  return value;
}

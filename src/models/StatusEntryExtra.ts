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

import { exists, mapValues } from '../runtime';
/**
 * System entry extra information.
 * @export
 * @interface StatusEntryExtra
 */
export interface StatusEntryExtra {
  /**
   *
   * @type {boolean}
   * @memberof StatusEntryExtra
   */
  monospace: boolean;
  /**
   *
   * @type {string}
   * @memberof StatusEntryExtra
   */
  text: string;
}

export function StatusEntryExtraFromJSON(json: any): StatusEntryExtra {
  return StatusEntryExtraFromJSONTyped(json, false);
}

export function StatusEntryExtraFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): StatusEntryExtra {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    monospace: json['monospace'],
    text: json['text'],
  };
}

export function StatusEntryExtraToJSON(value?: StatusEntryExtra | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    monospace: value.monospace,
    text: value.text,
  };
}

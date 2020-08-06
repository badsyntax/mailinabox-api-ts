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
/**
 * Backup config update request.
 * @export
 * @interface SystemBackupConfigUpdateRequest
 */
export interface SystemBackupConfigUpdateRequest {
  /**
   *
   * @type {string}
   * @memberof SystemBackupConfigUpdateRequest
   */
  target: string;
  /**
   *
   * @type {string}
   * @memberof SystemBackupConfigUpdateRequest
   */
  targetUser: string;
  /**
   *
   * @type {string}
   * @memberof SystemBackupConfigUpdateRequest
   */
  targetPass: string;
  /**
   *
   * @type {number}
   * @memberof SystemBackupConfigUpdateRequest
   */
  minAge: number;
}

export function SystemBackupConfigUpdateRequestFromJSON(
  json: any
): SystemBackupConfigUpdateRequest {
  return SystemBackupConfigUpdateRequestFromJSONTyped(json, false);
}

export function SystemBackupConfigUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemBackupConfigUpdateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    target: json['target'],
    targetUser: json['target_user'],
    targetPass: json['target_pass'],
    minAge: json['min_age'],
  };
}

export function SystemBackupConfigUpdateRequestToJSON(
  value?: SystemBackupConfigUpdateRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    target: value.target,
    target_user: value.targetUser,
    target_pass: value.targetPass,
    min_age: value.minAge,
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.
 *
 * The version of the OpenAPI document: 0.46.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  SystemPrivacyStatus,
  SystemPrivacyStatusFromJSON,
  SystemPrivacyStatusFromJSONTyped,
  SystemPrivacyStatusToJSON,
} from './';

/**
 * Update system privacy request.
 * @export
 * @interface SystemPrivacyUpdateRequest
 */
export interface SystemPrivacyUpdateRequest {
  /**
   *
   * @type {SystemPrivacyStatus}
   * @memberof SystemPrivacyUpdateRequest
   */
  value: SystemPrivacyStatus;
}

export function SystemPrivacyUpdateRequestFromJSON(
  json: any
): SystemPrivacyUpdateRequest {
  return SystemPrivacyUpdateRequestFromJSONTyped(json, false);
}

export function SystemPrivacyUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemPrivacyUpdateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    value: SystemPrivacyStatusFromJSON(json['value']),
  };
}

export function SystemPrivacyUpdateRequestToJSON(
  value?: SystemPrivacyUpdateRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    value: SystemPrivacyStatusToJSON(value.value),
  };
}

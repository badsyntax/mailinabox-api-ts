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
  SSLStatusType,
  SSLStatusTypeFromJSON,
  SSLStatusTypeFromJSONTyped,
  SSLStatusTypeToJSON,
} from './';

/**
 * SSL status details for domain.
 * @export
 * @interface SSLStatus
 */
export interface SSLStatus {
  /**
   * Hostname format.
   * @type {string}
   * @memberof SSLStatus
   */
  domain: string;
  /**
   *
   * @type {SSLStatusType}
   * @memberof SSLStatus
   */
  status: SSLStatusType;
  /**
   *
   * @type {string}
   * @memberof SSLStatus
   */
  text: string;
}

export function SSLStatusFromJSON(json: any): SSLStatus {
  return SSLStatusFromJSONTyped(json, false);
}

export function SSLStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SSLStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domain: json['domain'],
    status: SSLStatusTypeFromJSON(json['status']),
    text: json['text'],
  };
}

export function SSLStatusToJSON(value?: SSLStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domain: value.domain,
    status: SSLStatusTypeToJSON(value.status),
    text: value.text,
  };
}

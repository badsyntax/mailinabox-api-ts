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
 * Secondary nameserver/s response.
 * @export
 * @interface DNSSecondaryNameserverResponse
 */
export interface DNSSecondaryNameserverResponse {
  /**
   *
   * @type {Array<string>}
   * @memberof DNSSecondaryNameserverResponse
   */
  hostnames: Array<string>;
}

export function DNSSecondaryNameserverResponseFromJSON(
  json: any
): DNSSecondaryNameserverResponse {
  return DNSSecondaryNameserverResponseFromJSONTyped(json, false);
}

export function DNSSecondaryNameserverResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DNSSecondaryNameserverResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    hostnames: json['hostnames'],
  };
}

export function DNSSecondaryNameserverResponseToJSON(
  value?: DNSSecondaryNameserverResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    hostnames: value.hostnames,
  };
}

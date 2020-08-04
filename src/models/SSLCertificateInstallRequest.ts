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
 * Install certificate request. `chain` can be an empty string.
 * @export
 * @interface SSLCertificateInstallRequest
 */
export interface SSLCertificateInstallRequest {
  /**
   * Hostname format.
   * @type {string}
   * @memberof SSLCertificateInstallRequest
   */
  domain: string;
  /**
   * TLS/SSL certificate.
   * @type {string}
   * @memberof SSLCertificateInstallRequest
   */
  cert: string;
  /**
   * TLS/SSL intermediate chain (if provided, else empty string).
   * @type {string}
   * @memberof SSLCertificateInstallRequest
   */
  chain: string;
}

export function SSLCertificateInstallRequestFromJSON(
  json: any
): SSLCertificateInstallRequest {
  return SSLCertificateInstallRequestFromJSONTyped(json, false);
}

export function SSLCertificateInstallRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SSLCertificateInstallRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domain: json['domain'],
    cert: json['cert'],
    chain: json['chain'],
  };
}

export function SSLCertificateInstallRequestToJSON(
  value?: SSLCertificateInstallRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domain: value.domain,
    cert: value.cert,
    chain: value.chain,
  };
}

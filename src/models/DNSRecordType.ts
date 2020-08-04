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

/**
 * DNS record type.
 * @export
 * @enum {string}
 */
export enum DNSRecordType {
  A = 'A',
  AAAA = 'AAAA',
  CAA = 'CAA',
  CNAME = 'CNAME',
  TXT = 'TXT',
  MX = 'MX',
  SRV = 'SRV',
  SSHFP = 'SSHFP',
  NS = 'NS',
}

export function DNSRecordTypeFromJSON(json: any): DNSRecordType {
  return DNSRecordTypeFromJSONTyped(json, false);
}

export function DNSRecordTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DNSRecordType {
  return json as DNSRecordType;
}

export function DNSRecordTypeToJSON(value?: DNSRecordType | null): any {
  return value as any;
}

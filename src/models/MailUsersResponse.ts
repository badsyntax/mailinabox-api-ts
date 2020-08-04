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
  MailUserByDomain,
  MailUserByDomainFromJSON,
  MailUserByDomainFromJSONTyped,
  MailUserByDomainToJSON,
} from './';

/**
 * Get mail aliases JSON format response.
 * @export
 * @interface MailUsersResponse
 */
export interface MailUsersResponse extends Array<MailUserByDomain> {}

export function MailUsersResponseFromJSON(json: any): MailUsersResponse {
  return MailUsersResponseFromJSONTyped(json, false);
}

export function MailUsersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MailUsersResponse {
  return json;
}

export function MailUsersResponseToJSON(value?: MailUsersResponse | null): any {
  return value;
}

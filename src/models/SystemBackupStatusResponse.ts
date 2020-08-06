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
  SystemBackupStatus,
  SystemBackupStatusFromJSON,
  SystemBackupStatusFromJSONTyped,
  SystemBackupStatusToJSON,
} from './';

/**
 * Backup status response. Lists the status for all backups.
 * @export
 * @interface SystemBackupStatusResponse
 */
export interface SystemBackupStatusResponse {
  /**
   *
   * @type {Array<SystemBackupStatus>}
   * @memberof SystemBackupStatusResponse
   */
  backups?: Array<SystemBackupStatus>;
  /**
   *
   * @type {number}
   * @memberof SystemBackupStatusResponse
   */
  unmatchedFileSize: number;
  /**
   *
   * @type {string}
   * @memberof SystemBackupStatusResponse
   */
  error?: string;
}

export function SystemBackupStatusResponseFromJSON(
  json: any
): SystemBackupStatusResponse {
  return SystemBackupStatusResponseFromJSONTyped(json, false);
}

export function SystemBackupStatusResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemBackupStatusResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    backups: !exists(json, 'backups')
      ? undefined
      : (json['backups'] as Array<any>).map(SystemBackupStatusFromJSON),
    unmatchedFileSize: json['unmatched_file_size'],
    error: !exists(json, 'error') ? undefined : json['error'],
  };
}

export function SystemBackupStatusResponseToJSON(
  value?: SystemBackupStatusResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    backups:
      value.backups === undefined
        ? undefined
        : (value.backups as Array<any>).map(SystemBackupStatusToJSON),
    unmatched_file_size: value.unmatchedFileSize,
    error: value.error,
  };
}

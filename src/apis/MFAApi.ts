/* tslint:disable */
/* eslint-disable */
/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present.
 *
 * The version of the OpenAPI document: 0.51.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  MfaStatusResponse,
  MfaStatusResponseFromJSON,
  MfaStatusResponseToJSON,
} from '../models';

export interface MfaTotpDisableRequest {
  mfaId?: string | null;
}

export interface MfaTotpEnableRequest {
  secret: string;
  code: string;
  label?: string;
}

/**
 *
 */
export class MFAApi extends runtime.BaseAPI {
  /**
   * Retrieves which type of MFA is used and configuration
   * Retrieve MFA status for you or another user
   */
  async mfaStatusRaw(): Promise<runtime.ApiResponse<MfaStatusResponse>> {
    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request({
      path: `/mfa/status`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MfaStatusResponseFromJSON(jsonValue)
    );
  }

  /**
   * Retrieves which type of MFA is used and configuration
   * Retrieve MFA status for you or another user
   */
  async mfaStatus(): Promise<MfaStatusResponse> {
    const response = await this.mfaStatusRaw();
    return await response.value();
  }

  /**
   * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
   * Disable multi-factor authentication for you or another user
   */
  async mfaTotpDisableRaw(
    requestParameters: MfaTotpDisableRequest
  ): Promise<runtime.ApiResponse<string>> {
    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const consumes: runtime.Consume[] = [
      { contentType: 'application/x-www-form-urlencoded' },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.mfaId !== undefined) {
      formParams.append('mfa_id', requestParameters.mfaId as any);
    }

    const response = await this.request({
      path: `/mfa/disable`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: formParams,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
   * Disable multi-factor authentication for you or another user
   */
  async mfaTotpDisable(
    requestParameters: MfaTotpDisableRequest
  ): Promise<string> {
    const response = await this.mfaTotpDisableRaw(requestParameters);
    return await response.value();
  }

  /**
   * Enables TOTP authentication for the currently logged-in admin user
   * Enable TOTP authentication
   */
  async mfaTotpEnableRaw(
    requestParameters: MfaTotpEnableRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.secret === null ||
      requestParameters.secret === undefined
    ) {
      throw new runtime.RequiredError(
        'secret',
        'Required parameter requestParameters.secret was null or undefined when calling mfaTotpEnable.'
      );
    }

    if (
      requestParameters.code === null ||
      requestParameters.code === undefined
    ) {
      throw new runtime.RequiredError(
        'code',
        'Required parameter requestParameters.code was null or undefined when calling mfaTotpEnable.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const consumes: runtime.Consume[] = [
      { contentType: 'application/x-www-form-urlencoded' },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.secret !== undefined) {
      formParams.append('secret', requestParameters.secret as any);
    }

    if (requestParameters.code !== undefined) {
      formParams.append('code', requestParameters.code as any);
    }

    if (requestParameters.label !== undefined) {
      formParams.append('label', requestParameters.label as any);
    }

    const response = await this.request({
      path: `/mfa/totp/enable`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: formParams,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Enables TOTP authentication for the currently logged-in admin user
   * Enable TOTP authentication
   */
  async mfaTotpEnable(
    requestParameters: MfaTotpEnableRequest
  ): Promise<string> {
    const response = await this.mfaTotpEnableRaw(requestParameters);
    return await response.value();
  }
}

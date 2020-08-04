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

import * as runtime from '../runtime';
import { MeResponse, MeResponseFromJSON, MeResponseToJSON } from '../models';

/**
 *
 */
export class UserApi extends runtime.BaseAPI {
  /**
   * Get user information, used for user authentication.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API.
   */
  async getMeRaw(): Promise<runtime.ApiResponse<MeResponse>> {
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
      path: `/me`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MeResponseFromJSON(jsonValue)
    );
  }

  /**
   * Get user information, used for user authentication.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API.
   */
  async getMe(): Promise<MeResponse> {
    const response = await this.getMeRaw();
    return await response.value();
  }
}

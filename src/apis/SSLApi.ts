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
  SSLCertificatesProvisionResponse,
  SSLCertificatesProvisionResponseFromJSON,
  SSLCertificatesProvisionResponseToJSON,
  SSLStatusResponse,
  SSLStatusResponseFromJSON,
  SSLStatusResponseToJSON,
} from '../models';

export interface GenerateSSLCSRRequest {
  domain: string;
  countrycode: string;
}

export interface InstallSSLCertificateRequest {
  domain: string;
  cert: string;
  chain: string;
}

/**
 *
 */
export class SSLApi extends runtime.BaseAPI {
  /**
   * Generates a Certificate Signing Request (CSR) for a domain & country code.
   * Generate SSL CSR
   */
  async generateSSLCSRRaw(
    requestParameters: GenerateSSLCSRRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.domain === null ||
      requestParameters.domain === undefined
    ) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling generateSSLCSR.'
      );
    }

    if (
      requestParameters.countrycode === null ||
      requestParameters.countrycode === undefined
    ) {
      throw new runtime.RequiredError(
        'countrycode',
        'Required parameter requestParameters.countrycode was null or undefined when calling generateSSLCSR.'
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

    if (requestParameters.countrycode !== undefined) {
      formParams.append('countrycode', requestParameters.countrycode as any);
    }

    const response = await this.request({
      path: `/ssl/csr/{domain}`.replace(
        `{${'domain'}}`,
        encodeURIComponent(String(requestParameters.domain))
      ),
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
   * Generates a Certificate Signing Request (CSR) for a domain & country code.
   * Generate SSL CSR
   */
  async generateSSLCSR(
    requestParameters: GenerateSSLCSRRequest
  ): Promise<string> {
    const response = await this.generateSSLCSRRaw(requestParameters);
    return await response.value();
  }

  /**
   * Returns the SSL status for all domains.
   * Get SSL status
   */
  async getSSLStatusRaw(): Promise<runtime.ApiResponse<SSLStatusResponse>> {
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
      path: `/ssl/status`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SSLStatusResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns the SSL status for all domains.
   * Get SSL status
   */
  async getSSLStatus(): Promise<SSLStatusResponse> {
    const response = await this.getSSLStatusRaw();
    return await response.value();
  }

  /**
   * Installs a custom certificate. The chain certificate is optional.
   * Install SSL certificate
   */
  async installSSLCertificateRaw(
    requestParameters: InstallSSLCertificateRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.domain === null ||
      requestParameters.domain === undefined
    ) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling installSSLCertificate.'
      );
    }

    if (
      requestParameters.cert === null ||
      requestParameters.cert === undefined
    ) {
      throw new runtime.RequiredError(
        'cert',
        'Required parameter requestParameters.cert was null or undefined when calling installSSLCertificate.'
      );
    }

    if (
      requestParameters.chain === null ||
      requestParameters.chain === undefined
    ) {
      throw new runtime.RequiredError(
        'chain',
        'Required parameter requestParameters.chain was null or undefined when calling installSSLCertificate.'
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

    if (requestParameters.domain !== undefined) {
      formParams.append('domain', requestParameters.domain as any);
    }

    if (requestParameters.cert !== undefined) {
      formParams.append('cert', requestParameters.cert as any);
    }

    if (requestParameters.chain !== undefined) {
      formParams.append('chain', requestParameters.chain as any);
    }

    const response = await this.request({
      path: `/ssl/install`,
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
   * Installs a custom certificate. The chain certificate is optional.
   * Install SSL certificate
   */
  async installSSLCertificate(
    requestParameters: InstallSSLCertificateRequest
  ): Promise<string> {
    const response = await this.installSSLCertificateRaw(requestParameters);
    return await response.value();
  }

  /**
   * Provisions certificates for all domains.
   * Provision SSL certificates
   */
  async provisionSSLCertificatesRaw(): Promise<
    runtime.ApiResponse<SSLCertificatesProvisionResponse>
  > {
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
      path: `/ssl/provision`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SSLCertificatesProvisionResponseFromJSON(jsonValue)
    );
  }

  /**
   * Provisions certificates for all domains.
   * Provision SSL certificates
   */
  async provisionSSLCertificates(): Promise<SSLCertificatesProvisionResponse> {
    const response = await this.provisionSSLCertificatesRaw();
    return await response.value();
  }
}

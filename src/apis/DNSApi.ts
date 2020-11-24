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
  DNSCustomRecordsResponse,
  DNSCustomRecordsResponseFromJSON,
  DNSCustomRecordsResponseToJSON,
  DNSDumpResponse,
  DNSDumpResponseFromJSON,
  DNSDumpResponseToJSON,
  DNSRecordType,
  DNSRecordTypeFromJSON,
  DNSRecordTypeToJSON,
  DNSSecondaryNameserverResponse,
  DNSSecondaryNameserverResponseFromJSON,
  DNSSecondaryNameserverResponseToJSON,
  DNSZonesResponse,
  DNSZonesResponseFromJSON,
  DNSZonesResponseToJSON,
} from '../models';

export interface AddDnsCustomARecordRequest {
  qname: string;
  body: string;
}

export interface AddDnsCustomRecordRequest {
  qname: string;
  rtype: DNSRecordType;
  body: string;
}

export interface AddDnsSecondaryNameserverRequest {
  hostnames: string;
}

export interface GetDnsCustomARecordsForQNameRequest {
  qname: string;
}

export interface GetDnsCustomRecordsForQNameAndTypeRequest {
  qname: string;
  rtype: DNSRecordType;
}

export interface GetDnsZonefileRequest {
  zone: string;
}

export interface RemoveDnsCustomARecordRequest {
  qname: string;
  body: string;
}

export interface RemoveDnsCustomRecordRequest {
  qname: string;
  rtype: DNSRecordType;
  body: string;
}

export interface UpdateDnsRequest {
  force: number;
}

export interface UpdateDnsCustomARecordRequest {
  qname: string;
  body: string;
}

export interface UpdateDnsCustomRecordRequest {
  qname: string;
  rtype: DNSRecordType;
  body: string;
}

/**
 *
 */
export class DNSApi extends runtime.BaseAPI {
  /**
   * Adds a custom DNS A record for the specified query name.
   * Add DNS custom A record
   */
  async addDnsCustomARecordRaw(
    requestParameters: AddDnsCustomARecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling addDnsCustomARecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling addDnsCustomARecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}`.replace(
        `{${'qname'}}`,
        encodeURIComponent(String(requestParameters.qname))
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Adds a custom DNS A record for the specified query name.
   * Add DNS custom A record
   */
  async addDnsCustomARecord(
    requestParameters: AddDnsCustomARecordRequest
  ): Promise<string> {
    const response = await this.addDnsCustomARecordRaw(requestParameters);
    return await response.value();
  }

  /**
   * Adds a custom DNS record for the specified query name and type.
   * Add DNS custom record
   */
  async addDnsCustomRecordRaw(
    requestParameters: AddDnsCustomRecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling addDnsCustomRecord.'
      );
    }

    if (
      requestParameters.rtype === null ||
      requestParameters.rtype === undefined
    ) {
      throw new runtime.RequiredError(
        'rtype',
        'Required parameter requestParameters.rtype was null or undefined when calling addDnsCustomRecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling addDnsCustomRecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}/{rtype}`
        .replace(
          `{${'qname'}}`,
          encodeURIComponent(String(requestParameters.qname))
        )
        .replace(
          `{${'rtype'}}`,
          encodeURIComponent(String(requestParameters.rtype))
        ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Adds a custom DNS record for the specified query name and type.
   * Add DNS custom record
   */
  async addDnsCustomRecord(
    requestParameters: AddDnsCustomRecordRequest
  ): Promise<string> {
    const response = await this.addDnsCustomRecordRaw(requestParameters);
    return await response.value();
  }

  /**
   * Adds one or more secondary nameservers.
   * Add DNS secondary nameserver
   */
  async addDnsSecondaryNameserverRaw(
    requestParameters: AddDnsSecondaryNameserverRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.hostnames === null ||
      requestParameters.hostnames === undefined
    ) {
      throw new runtime.RequiredError(
        'hostnames',
        'Required parameter requestParameters.hostnames was null or undefined when calling addDnsSecondaryNameserver.'
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

    if (requestParameters.hostnames !== undefined) {
      formParams.append('hostnames', requestParameters.hostnames as any);
    }

    const response = await this.request({
      path: `/dns/secondary-nameserver`,
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
   * Adds one or more secondary nameservers.
   * Add DNS secondary nameserver
   */
  async addDnsSecondaryNameserver(
    requestParameters: AddDnsSecondaryNameserverRequest
  ): Promise<string> {
    const response = await this.addDnsSecondaryNameserverRaw(requestParameters);
    return await response.value();
  }

  /**
   * Returns all custom A records for the specified query name.
   * Get DNS custom A records
   */
  async getDnsCustomARecordsForQNameRaw(
    requestParameters: GetDnsCustomARecordsForQNameRequest
  ): Promise<runtime.ApiResponse<DNSCustomRecordsResponse>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling getDnsCustomARecordsForQName.'
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
    const response = await this.request({
      path: `/dns/custom/{qname}`.replace(
        `{${'qname'}}`,
        encodeURIComponent(String(requestParameters.qname))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSCustomRecordsResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns all custom A records for the specified query name.
   * Get DNS custom A records
   */
  async getDnsCustomARecordsForQName(
    requestParameters: GetDnsCustomARecordsForQNameRequest
  ): Promise<DNSCustomRecordsResponse> {
    const response = await this.getDnsCustomARecordsForQNameRaw(
      requestParameters
    );
    return await response.value();
  }

  /**
   * Returns all custom DNS records.
   * Get DNS custom records
   */
  async getDnsCustomRecordsRaw(): Promise<
    runtime.ApiResponse<DNSCustomRecordsResponse>
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
      path: `/dns/custom`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSCustomRecordsResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns all custom DNS records.
   * Get DNS custom records
   */
  async getDnsCustomRecords(): Promise<DNSCustomRecordsResponse> {
    const response = await this.getDnsCustomRecordsRaw();
    return await response.value();
  }

  /**
   * Returns all custom records for the specified query name and type.
   * Get DNS custom records
   */
  async getDnsCustomRecordsForQNameAndTypeRaw(
    requestParameters: GetDnsCustomRecordsForQNameAndTypeRequest
  ): Promise<runtime.ApiResponse<DNSCustomRecordsResponse>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling getDnsCustomRecordsForQNameAndType.'
      );
    }

    if (
      requestParameters.rtype === null ||
      requestParameters.rtype === undefined
    ) {
      throw new runtime.RequiredError(
        'rtype',
        'Required parameter requestParameters.rtype was null or undefined when calling getDnsCustomRecordsForQNameAndType.'
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
    const response = await this.request({
      path: `/dns/custom/{qname}/{rtype}`
        .replace(
          `{${'qname'}}`,
          encodeURIComponent(String(requestParameters.qname))
        )
        .replace(
          `{${'rtype'}}`,
          encodeURIComponent(String(requestParameters.rtype))
        ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSCustomRecordsResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns all custom records for the specified query name and type.
   * Get DNS custom records
   */
  async getDnsCustomRecordsForQNameAndType(
    requestParameters: GetDnsCustomRecordsForQNameAndTypeRequest
  ): Promise<DNSCustomRecordsResponse> {
    const response = await this.getDnsCustomRecordsForQNameAndTypeRaw(
      requestParameters
    );
    return await response.value();
  }

  /**
   * Returns all DNS records.
   * Get DNS dump
   */
  async getDnsDumpRaw(): Promise<runtime.ApiResponse<DNSDumpResponse>> {
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
      path: `/dns/dump`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSDumpResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns all DNS records.
   * Get DNS dump
   */
  async getDnsDump(): Promise<DNSDumpResponse> {
    const response = await this.getDnsDumpRaw();
    return await response.value();
  }

  /**
   * Returns a list of nameserver hostnames.
   * Get DNS secondary nameserver
   */
  async getDnsSecondaryNameserverRaw(): Promise<
    runtime.ApiResponse<DNSSecondaryNameserverResponse>
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
      path: `/dns/secondary-nameserver`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSSecondaryNameserverResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns a list of nameserver hostnames.
   * Get DNS secondary nameserver
   */
  async getDnsSecondaryNameserver(): Promise<DNSSecondaryNameserverResponse> {
    const response = await this.getDnsSecondaryNameserverRaw();
    return await response.value();
  }

  /**
   * Returns a DNS zone file for a hostname.
   * Get DNS zonefile
   */
  async getDnsZonefileRaw(
    requestParameters: GetDnsZonefileRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.zone === null ||
      requestParameters.zone === undefined
    ) {
      throw new runtime.RequiredError(
        'zone',
        'Required parameter requestParameters.zone was null or undefined when calling getDnsZonefile.'
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
    const response = await this.request({
      path: `/dns/zonefile/{zone}`.replace(
        `{${'zone'}}`,
        encodeURIComponent(String(requestParameters.zone))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Returns a DNS zone file for a hostname.
   * Get DNS zonefile
   */
  async getDnsZonefile(
    requestParameters: GetDnsZonefileRequest
  ): Promise<string> {
    const response = await this.getDnsZonefileRaw(requestParameters);
    return await response.value();
  }

  /**
   * Returns an array of all managed top-level domains.
   * Get DNS zones
   */
  async getDnsZonesRaw(): Promise<runtime.ApiResponse<DNSZonesResponse>> {
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
      path: `/dns/zones`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DNSZonesResponseFromJSON(jsonValue)
    );
  }

  /**
   * Returns an array of all managed top-level domains.
   * Get DNS zones
   */
  async getDnsZones(): Promise<DNSZonesResponse> {
    const response = await this.getDnsZonesRaw();
    return await response.value();
  }

  /**
   * Removes a DNS custom A record for the specified domain & value.
   * Remove DNS custom A record
   */
  async removeDnsCustomARecordRaw(
    requestParameters: RemoveDnsCustomARecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling removeDnsCustomARecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling removeDnsCustomARecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}`.replace(
        `{${'qname'}}`,
        encodeURIComponent(String(requestParameters.qname))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Removes a DNS custom A record for the specified domain & value.
   * Remove DNS custom A record
   */
  async removeDnsCustomARecord(
    requestParameters: RemoveDnsCustomARecordRequest
  ): Promise<string> {
    const response = await this.removeDnsCustomARecordRaw(requestParameters);
    return await response.value();
  }

  /**
   * Removes a DNS custom record for the specified domain, type & value.
   * Remove DNS custom record
   */
  async removeDnsCustomRecordRaw(
    requestParameters: RemoveDnsCustomRecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling removeDnsCustomRecord.'
      );
    }

    if (
      requestParameters.rtype === null ||
      requestParameters.rtype === undefined
    ) {
      throw new runtime.RequiredError(
        'rtype',
        'Required parameter requestParameters.rtype was null or undefined when calling removeDnsCustomRecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling removeDnsCustomRecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}/{rtype}`
        .replace(
          `{${'qname'}}`,
          encodeURIComponent(String(requestParameters.qname))
        )
        .replace(
          `{${'rtype'}}`,
          encodeURIComponent(String(requestParameters.rtype))
        ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Removes a DNS custom record for the specified domain, type & value.
   * Remove DNS custom record
   */
  async removeDnsCustomRecord(
    requestParameters: RemoveDnsCustomRecordRequest
  ): Promise<string> {
    const response = await this.removeDnsCustomRecordRaw(requestParameters);
    return await response.value();
  }

  /**
   * Updates the DNS. Involves creating zone files and restarting `nsd`.
   * Update DNS
   */
  async updateDnsRaw(
    requestParameters: UpdateDnsRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.force === null ||
      requestParameters.force === undefined
    ) {
      throw new runtime.RequiredError(
        'force',
        'Required parameter requestParameters.force was null or undefined when calling updateDns.'
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

    if (requestParameters.force !== undefined) {
      formParams.append('force', requestParameters.force as any);
    }

    const response = await this.request({
      path: `/dns/update`,
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
   * Updates the DNS. Involves creating zone files and restarting `nsd`.
   * Update DNS
   */
  async updateDns(requestParameters: UpdateDnsRequest): Promise<string> {
    const response = await this.updateDnsRaw(requestParameters);
    return await response.value();
  }

  /**
   * Updates an existing DNS custom A record value for the specified qname.
   * Update DNS custom A record
   */
  async updateDnsCustomARecordRaw(
    requestParameters: UpdateDnsCustomARecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling updateDnsCustomARecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling updateDnsCustomARecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}`.replace(
        `{${'qname'}}`,
        encodeURIComponent(String(requestParameters.qname))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Updates an existing DNS custom A record value for the specified qname.
   * Update DNS custom A record
   */
  async updateDnsCustomARecord(
    requestParameters: UpdateDnsCustomARecordRequest
  ): Promise<string> {
    const response = await this.updateDnsCustomARecordRaw(requestParameters);
    return await response.value();
  }

  /**
   * Updates an existing DNS custom record value for the specified qname and type.
   * Update DNS custom record
   */
  async updateDnsCustomRecordRaw(
    requestParameters: UpdateDnsCustomRecordRequest
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.qname === null ||
      requestParameters.qname === undefined
    ) {
      throw new runtime.RequiredError(
        'qname',
        'Required parameter requestParameters.qname was null or undefined when calling updateDnsCustomRecord.'
      );
    }

    if (
      requestParameters.rtype === null ||
      requestParameters.rtype === undefined
    ) {
      throw new runtime.RequiredError(
        'rtype',
        'Required parameter requestParameters.rtype was null or undefined when calling updateDnsCustomRecord.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling updateDnsCustomRecord.'
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'text/plain';

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
      path: `/dns/custom/{qname}/{rtype}`
        .replace(
          `{${'qname'}}`,
          encodeURIComponent(String(requestParameters.qname))
        )
        .replace(
          `{${'rtype'}}`,
          encodeURIComponent(String(requestParameters.rtype))
        ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any,
    });

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    return new runtime[isJson ? 'JSONApiResponse' : 'TextApiResponse'](
      response
    ) as any;
  }

  /**
   * Updates an existing DNS custom record value for the specified qname and type.
   * Update DNS custom record
   */
  async updateDnsCustomRecord(
    requestParameters: UpdateDnsCustomRecordRequest
  ): Promise<string> {
    const response = await this.updateDnsCustomRecordRaw(requestParameters);
    return await response.value();
  }
}

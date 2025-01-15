// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaProviderConfig {
  /**
  * API token, basic auth in the `username:password` format or `anonymous` (string literal). May alternatively be set via the `GRAFANA_AUTH` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#auth GrafanaProvider#auth}
  */
  readonly auth?: string;
  /**
  * Certificate CA bundle (file path or literal value) to use to verify the Grafana server's certificate. May alternatively be set via the `GRAFANA_CA_CERT` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#ca_cert GrafanaProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Access Policy Token for Grafana Cloud. May alternatively be set via the `GRAFANA_CLOUD_ACCESS_POLICY_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_access_policy_token GrafanaProvider#cloud_access_policy_token}
  */
  readonly cloudAccessPolicyToken?: string;
  /**
  * Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_CLOUD_API_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_api_url GrafanaProvider#cloud_api_url}
  */
  readonly cloudApiUrl?: string;
  /**
  * A Grafana Cloud Provider access token. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_ACCESS_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_provider_access_token GrafanaProvider#cloud_provider_access_token}
  */
  readonly cloudProviderAccessToken?: string;
  /**
  * A Grafana Cloud Provider backend address. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_provider_url GrafanaProvider#cloud_provider_url}
  */
  readonly cloudProviderUrl?: string;
  /**
  * A Grafana Connections API access token. May alternatively be set via the `GRAFANA_CONNECTIONS_API_ACCESS_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#connections_api_access_token GrafanaProvider#connections_api_access_token}
  */
  readonly connectionsApiAccessToken?: string;
  /**
  * A Grafana Connections API address. May alternatively be set via the `GRAFANA_CONNECTIONS_API_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#connections_api_url GrafanaProvider#connections_api_url}
  */
  readonly connectionsApiUrl?: string;
  /**
  * Optional. HTTP headers mapping keys to values used for accessing the Grafana and Grafana Cloud APIs. May alternatively be set via the `GRAFANA_HTTP_HEADERS` environment variable in JSON format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#http_headers GrafanaProvider#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Skip TLS certificate verification. May alternatively be set via the `GRAFANA_INSECURE_SKIP_VERIFY` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#insecure_skip_verify GrafanaProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * A Grafana OnCall access token. May alternatively be set via the `GRAFANA_ONCALL_ACCESS_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#oncall_access_token GrafanaProvider#oncall_access_token}
  */
  readonly oncallAccessToken?: string;
  /**
  * An Grafana OnCall backend address. May alternatively be set via the `GRAFANA_ONCALL_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#oncall_url GrafanaProvider#oncall_url}
  */
  readonly oncallUrl?: string;
  /**
  * The amount of retries to use for Grafana API and Grafana Cloud API calls. May alternatively be set via the `GRAFANA_RETRIES` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retries GrafanaProvider#retries}
  */
  readonly retries?: number;
  /**
  * The status codes to retry on for Grafana API and Grafana Cloud API calls. Use `x` as a digit wildcard. Defaults to 429 and 5xx. May alternatively be set via the `GRAFANA_RETRY_STATUS_CODES` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retry_status_codes GrafanaProvider#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * The amount of time in seconds to wait between retries for Grafana API and Grafana Cloud API calls. May alternatively be set via the `GRAFANA_RETRY_WAIT` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retry_wait GrafanaProvider#retry_wait}
  */
  readonly retryWait?: number;
  /**
  * A Synthetic Monitoring access token. May alternatively be set via the `GRAFANA_SM_ACCESS_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#sm_access_token GrafanaProvider#sm_access_token}
  */
  readonly smAccessToken?: string;
  /**
  * Synthetic monitoring backend address. May alternatively be set via the `GRAFANA_SM_URL` environment variable. The correct value for each service region is cited in the [Synthetic Monitoring documentation](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/set-up/set-up-private-probes/#probe-api-server-url). Note the `sm_url` value is optional, but it must correspond with the value specified as the `region_slug` in the `grafana_cloud_stack` resource. Also note that when a Terraform configuration contains multiple provider instances managing SM resources associated with the same Grafana stack, specifying an explicit `sm_url` set to the same value for each provider ensures all providers interact with the same SM API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#sm_url GrafanaProvider#sm_url}
  */
  readonly smUrl?: string;
  /**
  * Set to true if you want to save only the sha256sum instead of complete dashboard model JSON in the tfstate.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#store_dashboard_sha256 GrafanaProvider#store_dashboard_sha256}
  */
  readonly storeDashboardSha256?: boolean | cdktf.IResolvable;
  /**
  * Client TLS certificate (file path or literal value) to use to authenticate to the Grafana server. May alternatively be set via the `GRAFANA_TLS_CERT` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#tls_cert GrafanaProvider#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Client TLS key (file path or literal value) to use to authenticate to the Grafana server. May alternatively be set via the `GRAFANA_TLS_KEY` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#tls_key GrafanaProvider#tls_key}
  */
  readonly tlsKey?: string;
  /**
  * The root URL of a Grafana server. May alternatively be set via the `GRAFANA_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#url GrafanaProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#alias GrafanaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs grafana}
*/
export class GrafanaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs grafana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GrafanaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '3.16.0',
        providerVersionConstraint: '~> 3.16.0'
      },
      terraformProviderSource: 'grafana/grafana'
    });
    this._auth = config.auth;
    this._caCert = config.caCert;
    this._cloudAccessPolicyToken = config.cloudAccessPolicyToken;
    this._cloudApiUrl = config.cloudApiUrl;
    this._cloudProviderAccessToken = config.cloudProviderAccessToken;
    this._cloudProviderUrl = config.cloudProviderUrl;
    this._connectionsApiAccessToken = config.connectionsApiAccessToken;
    this._connectionsApiUrl = config.connectionsApiUrl;
    this._httpHeaders = config.httpHeaders;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._oncallAccessToken = config.oncallAccessToken;
    this._oncallUrl = config.oncallUrl;
    this._retries = config.retries;
    this._retryStatusCodes = config.retryStatusCodes;
    this._retryWait = config.retryWait;
    this._smAccessToken = config.smAccessToken;
    this._smUrl = config.smUrl;
    this._storeDashboardSha256 = config.storeDashboardSha256;
    this._tlsCert = config.tlsCert;
    this._tlsKey = config.tlsKey;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this._auth;
  }
  public set auth(value: string | undefined) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this._caCert;
  }
  public set caCert(value: string | undefined) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cloud_access_policy_token - computed: false, optional: true, required: false
  private _cloudAccessPolicyToken?: string; 
  public get cloudAccessPolicyToken() {
    return this._cloudAccessPolicyToken;
  }
  public set cloudAccessPolicyToken(value: string | undefined) {
    this._cloudAccessPolicyToken = value;
  }
  public resetCloudAccessPolicyToken() {
    this._cloudAccessPolicyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessPolicyTokenInput() {
    return this._cloudAccessPolicyToken;
  }

  // cloud_api_url - computed: false, optional: true, required: false
  private _cloudApiUrl?: string; 
  public get cloudApiUrl() {
    return this._cloudApiUrl;
  }
  public set cloudApiUrl(value: string | undefined) {
    this._cloudApiUrl = value;
  }
  public resetCloudApiUrl() {
    this._cloudApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiUrlInput() {
    return this._cloudApiUrl;
  }

  // cloud_provider_access_token - computed: false, optional: true, required: false
  private _cloudProviderAccessToken?: string; 
  public get cloudProviderAccessToken() {
    return this._cloudProviderAccessToken;
  }
  public set cloudProviderAccessToken(value: string | undefined) {
    this._cloudProviderAccessToken = value;
  }
  public resetCloudProviderAccessToken() {
    this._cloudProviderAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderAccessTokenInput() {
    return this._cloudProviderAccessToken;
  }

  // cloud_provider_url - computed: false, optional: true, required: false
  private _cloudProviderUrl?: string; 
  public get cloudProviderUrl() {
    return this._cloudProviderUrl;
  }
  public set cloudProviderUrl(value: string | undefined) {
    this._cloudProviderUrl = value;
  }
  public resetCloudProviderUrl() {
    this._cloudProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderUrlInput() {
    return this._cloudProviderUrl;
  }

  // connections_api_access_token - computed: false, optional: true, required: false
  private _connectionsApiAccessToken?: string; 
  public get connectionsApiAccessToken() {
    return this._connectionsApiAccessToken;
  }
  public set connectionsApiAccessToken(value: string | undefined) {
    this._connectionsApiAccessToken = value;
  }
  public resetConnectionsApiAccessToken() {
    this._connectionsApiAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsApiAccessTokenInput() {
    return this._connectionsApiAccessToken;
  }

  // connections_api_url - computed: false, optional: true, required: false
  private _connectionsApiUrl?: string; 
  public get connectionsApiUrl() {
    return this._connectionsApiUrl;
  }
  public set connectionsApiUrl(value: string | undefined) {
    this._connectionsApiUrl = value;
  }
  public resetConnectionsApiUrl() {
    this._connectionsApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsApiUrlInput() {
    return this._connectionsApiUrl;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public set httpHeaders(value: { [key: string]: string } | undefined) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // oncall_access_token - computed: false, optional: true, required: false
  private _oncallAccessToken?: string; 
  public get oncallAccessToken() {
    return this._oncallAccessToken;
  }
  public set oncallAccessToken(value: string | undefined) {
    this._oncallAccessToken = value;
  }
  public resetOncallAccessToken() {
    this._oncallAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncallAccessTokenInput() {
    return this._oncallAccessToken;
  }

  // oncall_url - computed: false, optional: true, required: false
  private _oncallUrl?: string; 
  public get oncallUrl() {
    return this._oncallUrl;
  }
  public set oncallUrl(value: string | undefined) {
    this._oncallUrl = value;
  }
  public resetOncallUrl() {
    this._oncallUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncallUrlInput() {
    return this._oncallUrl;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_status_codes - computed: false, optional: true, required: false
  private _retryStatusCodes?: string[]; 
  public get retryStatusCodes() {
    return this._retryStatusCodes;
  }
  public set retryStatusCodes(value: string[] | undefined) {
    this._retryStatusCodes = value;
  }
  public resetRetryStatusCodes() {
    this._retryStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStatusCodesInput() {
    return this._retryStatusCodes;
  }

  // retry_wait - computed: false, optional: true, required: false
  private _retryWait?: number; 
  public get retryWait() {
    return this._retryWait;
  }
  public set retryWait(value: number | undefined) {
    this._retryWait = value;
  }
  public resetRetryWait() {
    this._retryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitInput() {
    return this._retryWait;
  }

  // sm_access_token - computed: false, optional: true, required: false
  private _smAccessToken?: string; 
  public get smAccessToken() {
    return this._smAccessToken;
  }
  public set smAccessToken(value: string | undefined) {
    this._smAccessToken = value;
  }
  public resetSmAccessToken() {
    this._smAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smAccessTokenInput() {
    return this._smAccessToken;
  }

  // sm_url - computed: false, optional: true, required: false
  private _smUrl?: string; 
  public get smUrl() {
    return this._smUrl;
  }
  public set smUrl(value: string | undefined) {
    this._smUrl = value;
  }
  public resetSmUrl() {
    this._smUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smUrlInput() {
    return this._smUrl;
  }

  // store_dashboard_sha256 - computed: false, optional: true, required: false
  private _storeDashboardSha256?: boolean | cdktf.IResolvable; 
  public get storeDashboardSha256() {
    return this._storeDashboardSha256;
  }
  public set storeDashboardSha256(value: boolean | cdktf.IResolvable | undefined) {
    this._storeDashboardSha256 = value;
  }
  public resetStoreDashboardSha256() {
    this._storeDashboardSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeDashboardSha256Input() {
    return this._storeDashboardSha256;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this._tlsCert;
  }
  public set tlsCert(value: string | undefined) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this._tlsKey;
  }
  public set tlsKey(value: string | undefined) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      cloud_access_policy_token: cdktf.stringToTerraform(this._cloudAccessPolicyToken),
      cloud_api_url: cdktf.stringToTerraform(this._cloudApiUrl),
      cloud_provider_access_token: cdktf.stringToTerraform(this._cloudProviderAccessToken),
      cloud_provider_url: cdktf.stringToTerraform(this._cloudProviderUrl),
      connections_api_access_token: cdktf.stringToTerraform(this._connectionsApiAccessToken),
      connections_api_url: cdktf.stringToTerraform(this._connectionsApiUrl),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      oncall_access_token: cdktf.stringToTerraform(this._oncallAccessToken),
      oncall_url: cdktf.stringToTerraform(this._oncallUrl),
      retries: cdktf.numberToTerraform(this._retries),
      retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retryStatusCodes),
      retry_wait: cdktf.numberToTerraform(this._retryWait),
      sm_access_token: cdktf.stringToTerraform(this._smAccessToken),
      sm_url: cdktf.stringToTerraform(this._smUrl),
      store_dashboard_sha256: cdktf.booleanToTerraform(this._storeDashboardSha256),
      tls_cert: cdktf.stringToTerraform(this._tlsCert),
      tls_key: cdktf.stringToTerraform(this._tlsKey),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}

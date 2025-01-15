// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionsMetricsEndpointScrapeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password for basic authentication, use if scrape job is using basic authentication method
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_basic_password ConnectionsMetricsEndpointScrapeJob#authentication_basic_password}
  */
  readonly authenticationBasicPassword?: string;
  /**
  * Username for basic authentication, use if scrape job is using basic authentication method
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_basic_username ConnectionsMetricsEndpointScrapeJob#authentication_basic_username}
  */
  readonly authenticationBasicUsername?: string;
  /**
  * Bearer token used for authentication, use if scrape job is using bearer authentication method
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_bearer_token ConnectionsMetricsEndpointScrapeJob#authentication_bearer_token}
  */
  readonly authenticationBearerToken?: string;
  /**
  * Method to pass authentication credentials: basic or bearer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_method ConnectionsMetricsEndpointScrapeJob#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * Whether the metrics endpoint scrape job is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#enabled ConnectionsMetricsEndpointScrapeJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the metrics endpoint scrape job. Part of the Terraform Resource ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#name ConnectionsMetricsEndpointScrapeJob#name}
  */
  readonly name: string;
  /**
  * Frequency for scraping the metrics endpoint: 30, 60, or 120 seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#scrape_interval_seconds ConnectionsMetricsEndpointScrapeJob#scrape_interval_seconds}
  */
  readonly scrapeIntervalSeconds?: number;
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#stack_id ConnectionsMetricsEndpointScrapeJob#stack_id}
  */
  readonly stackId: string;
  /**
  * The url to scrape metrics from; a valid HTTPs URL is required.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#url ConnectionsMetricsEndpointScrapeJob#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job}
*/
export class ConnectionsMetricsEndpointScrapeJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_connections_metrics_endpoint_scrape_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionsMetricsEndpointScrapeJobConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionsMetricsEndpointScrapeJobConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_connections_metrics_endpoint_scrape_job',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '3.16.0',
        providerVersionConstraint: '~> 3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationBasicPassword = config.authenticationBasicPassword;
    this._authenticationBasicUsername = config.authenticationBasicUsername;
    this._authenticationBearerToken = config.authenticationBearerToken;
    this._authenticationMethod = config.authenticationMethod;
    this._enabled = config.enabled;
    this._name = config.name;
    this._scrapeIntervalSeconds = config.scrapeIntervalSeconds;
    this._stackId = config.stackId;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_basic_password - computed: false, optional: true, required: false
  private _authenticationBasicPassword?: string; 
  public get authenticationBasicPassword() {
    return this.getStringAttribute('authentication_basic_password');
  }
  public set authenticationBasicPassword(value: string) {
    this._authenticationBasicPassword = value;
  }
  public resetAuthenticationBasicPassword() {
    this._authenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicPasswordInput() {
    return this._authenticationBasicPassword;
  }

  // authentication_basic_username - computed: false, optional: true, required: false
  private _authenticationBasicUsername?: string; 
  public get authenticationBasicUsername() {
    return this.getStringAttribute('authentication_basic_username');
  }
  public set authenticationBasicUsername(value: string) {
    this._authenticationBasicUsername = value;
  }
  public resetAuthenticationBasicUsername() {
    this._authenticationBasicUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicUsernameInput() {
    return this._authenticationBasicUsername;
  }

  // authentication_bearer_token - computed: false, optional: true, required: false
  private _authenticationBearerToken?: string; 
  public get authenticationBearerToken() {
    return this.getStringAttribute('authentication_bearer_token');
  }
  public set authenticationBearerToken(value: string) {
    this._authenticationBearerToken = value;
  }
  public resetAuthenticationBearerToken() {
    this._authenticationBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBearerTokenInput() {
    return this._authenticationBearerToken;
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scrape_interval_seconds - computed: true, optional: true, required: false
  private _scrapeIntervalSeconds?: number; 
  public get scrapeIntervalSeconds() {
    return this.getNumberAttribute('scrape_interval_seconds');
  }
  public set scrapeIntervalSeconds(value: number) {
    this._scrapeIntervalSeconds = value;
  }
  public resetScrapeIntervalSeconds() {
    this._scrapeIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalSecondsInput() {
    return this._scrapeIntervalSeconds;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_basic_password: cdktf.stringToTerraform(this._authenticationBasicPassword),
      authentication_basic_username: cdktf.stringToTerraform(this._authenticationBasicUsername),
      authentication_bearer_token: cdktf.stringToTerraform(this._authenticationBearerToken),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      scrape_interval_seconds: cdktf.numberToTerraform(this._scrapeIntervalSeconds),
      stack_id: cdktf.stringToTerraform(this._stackId),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}

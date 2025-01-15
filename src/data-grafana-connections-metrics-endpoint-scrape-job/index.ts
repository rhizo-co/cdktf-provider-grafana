// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaConnectionsMetricsEndpointScrapeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Metrics Endpoint Scrape Job. Part of the Terraform Resource ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job#name DataGrafanaConnectionsMetricsEndpointScrapeJob#name}
  */
  readonly name: string;
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job#stack_id DataGrafanaConnectionsMetricsEndpointScrapeJob#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job}
*/
export class DataGrafanaConnectionsMetricsEndpointScrapeJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_connections_metrics_endpoint_scrape_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaConnectionsMetricsEndpointScrapeJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaConnectionsMetricsEndpointScrapeJobConfig) {
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
    this._name = config.name;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_basic_password - computed: true, optional: false, required: false
  public get authenticationBasicPassword() {
    return this.getStringAttribute('authentication_basic_password');
  }

  // authentication_basic_username - computed: true, optional: false, required: false
  public get authenticationBasicUsername() {
    return this.getStringAttribute('authentication_basic_username');
  }

  // authentication_bearer_token - computed: true, optional: false, required: false
  public get authenticationBearerToken() {
    return this.getStringAttribute('authentication_bearer_token');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // scrape_interval_seconds - computed: true, optional: false, required: false
  public get scrapeIntervalSeconds() {
    return this.getNumberAttribute('scrape_interval_seconds');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }
}

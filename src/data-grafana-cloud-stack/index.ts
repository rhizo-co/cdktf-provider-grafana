// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Subdomain that the Grafana instance will be available at (i.e. setting slug to “<stack_slug>” will make the instance
available at “https://<stack_slug>.grafana.net".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack#slug DataGrafanaCloudStack#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack grafana_cloud_stack}
*/
export class DataGrafanaCloudStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack grafana_cloud_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudStackConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_stack',
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
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alertmanager_name - computed: true, optional: false, required: false
  public get alertmanagerName() {
    return this.getStringAttribute('alertmanager_name');
  }

  // alertmanager_status - computed: true, optional: false, required: false
  public get alertmanagerStatus() {
    return this.getStringAttribute('alertmanager_status');
  }

  // alertmanager_url - computed: true, optional: false, required: false
  public get alertmanagerUrl() {
    return this.getStringAttribute('alertmanager_url');
  }

  // alertmanager_user_id - computed: true, optional: false, required: false
  public get alertmanagerUserId() {
    return this.getNumberAttribute('alertmanager_user_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // graphite_name - computed: true, optional: false, required: false
  public get graphiteName() {
    return this.getStringAttribute('graphite_name');
  }

  // graphite_status - computed: true, optional: false, required: false
  public get graphiteStatus() {
    return this.getStringAttribute('graphite_status');
  }

  // graphite_url - computed: true, optional: false, required: false
  public get graphiteUrl() {
    return this.getStringAttribute('graphite_url');
  }

  // graphite_user_id - computed: true, optional: false, required: false
  public get graphiteUserId() {
    return this.getNumberAttribute('graphite_user_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // influx_url - computed: true, optional: false, required: false
  public get influxUrl() {
    return this.getStringAttribute('influx_url');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // logs_name - computed: true, optional: false, required: false
  public get logsName() {
    return this.getStringAttribute('logs_name');
  }

  // logs_status - computed: true, optional: false, required: false
  public get logsStatus() {
    return this.getStringAttribute('logs_status');
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // logs_user_id - computed: true, optional: false, required: false
  public get logsUserId() {
    return this.getNumberAttribute('logs_user_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // org_slug - computed: true, optional: false, required: false
  public get orgSlug() {
    return this.getStringAttribute('org_slug');
  }

  // otlp_url - computed: true, optional: false, required: false
  public get otlpUrl() {
    return this.getStringAttribute('otlp_url');
  }

  // profiles_name - computed: true, optional: false, required: false
  public get profilesName() {
    return this.getStringAttribute('profiles_name');
  }

  // profiles_status - computed: true, optional: false, required: false
  public get profilesStatus() {
    return this.getStringAttribute('profiles_status');
  }

  // profiles_url - computed: true, optional: false, required: false
  public get profilesUrl() {
    return this.getStringAttribute('profiles_url');
  }

  // profiles_user_id - computed: true, optional: false, required: false
  public get profilesUserId() {
    return this.getNumberAttribute('profiles_user_id');
  }

  // prometheus_name - computed: true, optional: false, required: false
  public get prometheusName() {
    return this.getStringAttribute('prometheus_name');
  }

  // prometheus_remote_endpoint - computed: true, optional: false, required: false
  public get prometheusRemoteEndpoint() {
    return this.getStringAttribute('prometheus_remote_endpoint');
  }

  // prometheus_remote_write_endpoint - computed: true, optional: false, required: false
  public get prometheusRemoteWriteEndpoint() {
    return this.getStringAttribute('prometheus_remote_write_endpoint');
  }

  // prometheus_status - computed: true, optional: false, required: false
  public get prometheusStatus() {
    return this.getStringAttribute('prometheus_status');
  }

  // prometheus_url - computed: true, optional: false, required: false
  public get prometheusUrl() {
    return this.getStringAttribute('prometheus_url');
  }

  // prometheus_user_id - computed: true, optional: false, required: false
  public get prometheusUserId() {
    return this.getNumberAttribute('prometheus_user_id');
  }

  // region_slug - computed: true, optional: false, required: false
  public get regionSlug() {
    return this.getStringAttribute('region_slug');
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traces_name - computed: true, optional: false, required: false
  public get tracesName() {
    return this.getStringAttribute('traces_name');
  }

  // traces_status - computed: true, optional: false, required: false
  public get tracesStatus() {
    return this.getStringAttribute('traces_status');
  }

  // traces_url - computed: true, optional: false, required: false
  public get tracesUrl() {
    return this.getStringAttribute('traces_url');
  }

  // traces_user_id - computed: true, optional: false, required: false
  public get tracesUserId() {
    return this.getNumberAttribute('traces_user_id');
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
      slug: cdktf.stringToTerraform(this._slug),
    };
  }
}

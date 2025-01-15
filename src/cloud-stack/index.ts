// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of stack.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#description CloudStack#description}
  */
  readonly description?: string;
  /**
  * A map of labels to assign to the stack. Label keys and values must match the following regexp: "^[a-zA-Z0-9/\\-.]+$" and stacks cannot have more than 10 labels.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#labels CloudStack#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of stack. Conventionally matches the url of the instance (e.g. `<stack_slug>.grafana.net`).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#name CloudStack#name}
  */
  readonly name: string;
  /**
  * Region slug to assign to this stack. Changing region will destroy the existing stack and create a new one in the desired region. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#region_slug CloudStack#region_slug}
  */
  readonly regionSlug?: string;
  /**
  * Subdomain that the Grafana instance will be available at. Setting slug to `<stack_slug>` will make the instance available at `https://<stack_slug>.grafana.net`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#slug CloudStack#slug}
  */
  readonly slug: string;
  /**
  * Custom URL for the Grafana instance. Must have a CNAME setup to point to `.grafana.net` before creating the stack
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#url CloudStack#url}
  */
  readonly url?: string;
  /**
  * Whether to wait for readiness of the stack after creating it. The check is a HEAD request to the stack URL (Grafana instance). Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#wait_for_readiness CloudStack#wait_for_readiness}
  */
  readonly waitForReadiness?: boolean | cdktf.IResolvable;
  /**
  * How long to wait for readiness (if enabled). Defaults to `5m0s`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#wait_for_readiness_timeout CloudStack#wait_for_readiness_timeout}
  */
  readonly waitForReadinessTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack grafana_cloud_stack}
*/
export class CloudStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack grafana_cloud_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStackConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStackConfig) {
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
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._regionSlug = config.regionSlug;
    this._slug = config.slug;
    this._url = config.url;
    this._waitForReadiness = config.waitForReadiness;
    this._waitForReadinessTimeout = config.waitForReadinessTimeout;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
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

  // region_slug - computed: false, optional: true, required: false
  private _regionSlug?: string; 
  public get regionSlug() {
    return this.getStringAttribute('region_slug');
  }
  public set regionSlug(value: string) {
    this._regionSlug = value;
  }
  public resetRegionSlug() {
    this._regionSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSlugInput() {
    return this._regionSlug;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // wait_for_readiness - computed: false, optional: true, required: false
  private _waitForReadiness?: boolean | cdktf.IResolvable; 
  public get waitForReadiness() {
    return this.getBooleanAttribute('wait_for_readiness');
  }
  public set waitForReadiness(value: boolean | cdktf.IResolvable) {
    this._waitForReadiness = value;
  }
  public resetWaitForReadiness() {
    this._waitForReadiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadinessInput() {
    return this._waitForReadiness;
  }

  // wait_for_readiness_timeout - computed: false, optional: true, required: false
  private _waitForReadinessTimeout?: string; 
  public get waitForReadinessTimeout() {
    return this.getStringAttribute('wait_for_readiness_timeout');
  }
  public set waitForReadinessTimeout(value: string) {
    this._waitForReadinessTimeout = value;
  }
  public resetWaitForReadinessTimeout() {
    this._waitForReadinessTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadinessTimeoutInput() {
    return this._waitForReadinessTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      region_slug: cdktf.stringToTerraform(this._regionSlug),
      slug: cdktf.stringToTerraform(this._slug),
      url: cdktf.stringToTerraform(this._url),
      wait_for_readiness: cdktf.booleanToTerraform(this._waitForReadiness),
      wait_for_readiness_timeout: cdktf.stringToTerraform(this._waitForReadinessTimeout),
    };
  }
}

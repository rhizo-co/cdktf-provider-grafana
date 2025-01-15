// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_ips#id DataGrafanaCloudIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_ips grafana_cloud_ips}
*/
export class DataGrafanaCloudIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_ips";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_ips grafana_cloud_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_ips',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_alerts - computed: true, optional: false, required: false
  public get hostedAlerts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_alerts'));
  }

  // hosted_grafana - computed: true, optional: false, required: false
  public get hostedGrafana() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_grafana'));
  }

  // hosted_logs - computed: true, optional: false, required: false
  public get hostedLogs() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_logs'));
  }

  // hosted_metrics - computed: true, optional: false, required: false
  public get hostedMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_metrics'));
  }

  // hosted_traces - computed: true, optional: false, required: false
  public get hostedTraces() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_traces'));
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}

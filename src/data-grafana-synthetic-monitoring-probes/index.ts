// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaSyntheticMonitoringProbesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, only probes that are not deprecated will be returned. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probes#filter_deprecated DataGrafanaSyntheticMonitoringProbes#filter_deprecated}
  */
  readonly filterDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probes#id DataGrafanaSyntheticMonitoringProbes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probes grafana_synthetic_monitoring_probes}
*/
export class DataGrafanaSyntheticMonitoringProbes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_probes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probes grafana_synthetic_monitoring_probes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaSyntheticMonitoringProbesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaSyntheticMonitoringProbesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_probes',
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
    this._filterDeprecated = config.filterDeprecated;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_deprecated - computed: false, optional: true, required: false
  private _filterDeprecated?: boolean | cdktf.IResolvable; 
  public get filterDeprecated() {
    return this.getBooleanAttribute('filter_deprecated');
  }
  public set filterDeprecated(value: boolean | cdktf.IResolvable) {
    this._filterDeprecated = value;
  }
  public resetFilterDeprecated() {
    this._filterDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDeprecatedInput() {
    return this._filterDeprecated;
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

  // probes - computed: true, optional: false, required: false
  private _probes = new cdktf.NumberMap(this, "probes");
  public get probes() {
    return this._probes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_deprecated: cdktf.booleanToTerraform(this._filterDeprecated),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}

// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaOncallUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_user_group#id DataGrafanaOncallUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_user_group#slack_handle DataGrafanaOncallUserGroup#slack_handle}
  */
  readonly slackHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_user_group grafana_oncall_user_group}
*/
export class DataGrafanaOncallUserGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_user_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_user_group grafana_oncall_user_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaOncallUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaOncallUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_user_group',
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
    this._slackHandle = config.slackHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // slack_handle - computed: false, optional: false, required: true
  private _slackHandle?: string; 
  public get slackHandle() {
    return this.getStringAttribute('slack_handle');
  }
  public set slackHandle(value: string) {
    this._slackHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackHandleInput() {
    return this._slackHandle;
  }

  // slack_id - computed: true, optional: false, required: false
  public get slackId() {
    return this.getStringAttribute('slack_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      slack_handle: cdktf.stringToTerraform(this._slackHandle),
    };
  }
}

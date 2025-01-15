// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardPermissionItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UID of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#dashboard_uid DashboardPermissionItem#dashboard_uid}
  */
  readonly dashboardUid: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#org_id DashboardPermissionItem#org_id}
  */
  readonly orgId?: string;
  /**
  * the permission to be assigned
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#permission DashboardPermissionItem#permission}
  */
  readonly permission: string;
  /**
  * the role onto which the permission is to be assigned
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#role DashboardPermissionItem#role}
  */
  readonly role?: string;
  /**
  * the team onto which the permission is to be assigned
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#team DashboardPermissionItem#team}
  */
  readonly team?: string;
  /**
  * the user or service account onto which the permission is to be assigned
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#user DashboardPermissionItem#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item grafana_dashboard_permission_item}
*/
export class DashboardPermissionItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_dashboard_permission_item";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item grafana_dashboard_permission_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardPermissionItemConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardPermissionItemConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_dashboard_permission_item',
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
    this._dashboardUid = config.dashboardUid;
    this._orgId = config.orgId;
    this._permission = config.permission;
    this._role = config.role;
    this._team = config.team;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_uid - computed: false, optional: false, required: true
  private _dashboardUid?: string; 
  public get dashboardUid() {
    return this.getStringAttribute('dashboard_uid');
  }
  public set dashboardUid(value: string) {
    this._dashboardUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardUidInput() {
    return this._dashboardUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_uid: cdktf.stringToTerraform(this._dashboardUid),
      org_id: cdktf.stringToTerraform(this._orgId),
      permission: cdktf.stringToTerraform(this._permission),
      role: cdktf.stringToTerraform(this._role),
      team: cdktf.stringToTerraform(this._team),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}

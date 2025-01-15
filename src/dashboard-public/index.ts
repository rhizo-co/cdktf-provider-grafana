// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardPublicConfig extends cdktf.TerraformMetaArguments {
  /**
  * A public unique identifier of a public dashboard. This is used to construct its URL. It's automatically generated if not provided when creating a public dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#access_token DashboardPublic#access_token}
  */
  readonly accessToken?: string;
  /**
  * Set to `true` to show annotations. The default value is `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#annotations_enabled DashboardPublic#annotations_enabled}
  */
  readonly annotationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the original dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#dashboard_uid DashboardPublic#dashboard_uid}
  */
  readonly dashboardUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#id DashboardPublic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to `true` to enable the public dashboard. The default value is `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#is_enabled DashboardPublic#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#org_id DashboardPublic#org_id}
  */
  readonly orgId?: string;
  /**
  * Set the share mode. The default value is `public`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#share DashboardPublic#share}
  */
  readonly share?: string;
  /**
  * Set to `true` to enable the time picker in the public dashboard. The default value is `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#time_selection_enabled DashboardPublic#time_selection_enabled}
  */
  readonly timeSelectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of a public dashboard. It's automatically generated if not provided when creating a public dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#uid DashboardPublic#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public grafana_dashboard_public}
*/
export class DashboardPublic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_dashboard_public";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public grafana_dashboard_public} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardPublicConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardPublicConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_dashboard_public',
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
    this._accessToken = config.accessToken;
    this._annotationsEnabled = config.annotationsEnabled;
    this._dashboardUid = config.dashboardUid;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._orgId = config.orgId;
    this._share = config.share;
    this._timeSelectionEnabled = config.timeSelectionEnabled;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // annotations_enabled - computed: false, optional: true, required: false
  private _annotationsEnabled?: boolean | cdktf.IResolvable; 
  public get annotationsEnabled() {
    return this.getBooleanAttribute('annotations_enabled');
  }
  public set annotationsEnabled(value: boolean | cdktf.IResolvable) {
    this._annotationsEnabled = value;
  }
  public resetAnnotationsEnabled() {
    this._annotationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsEnabledInput() {
    return this._annotationsEnabled;
  }

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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // org_id - computed: false, optional: true, required: false
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

  // share - computed: false, optional: true, required: false
  private _share?: string; 
  public get share() {
    return this.getStringAttribute('share');
  }
  public set share(value: string) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }

  // time_selection_enabled - computed: false, optional: true, required: false
  private _timeSelectionEnabled?: boolean | cdktf.IResolvable; 
  public get timeSelectionEnabled() {
    return this.getBooleanAttribute('time_selection_enabled');
  }
  public set timeSelectionEnabled(value: boolean | cdktf.IResolvable) {
    this._timeSelectionEnabled = value;
  }
  public resetTimeSelectionEnabled() {
    this._timeSelectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSelectionEnabledInput() {
    return this._timeSelectionEnabled;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      annotations_enabled: cdktf.booleanToTerraform(this._annotationsEnabled),
      dashboard_uid: cdktf.stringToTerraform(this._dashboardUid),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      org_id: cdktf.stringToTerraform(this._orgId),
      share: cdktf.stringToTerraform(this._share),
      time_selection_enabled: cdktf.booleanToTerraform(this._timeSelectionEnabled),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }
}

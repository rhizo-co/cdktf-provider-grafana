// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudOrgMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug or ID of the organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member#org CloudOrgMember#org}
  */
  readonly org: string;
  /**
  * Whether the user should receive billing emails.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member#receive_billing_emails CloudOrgMember#receive_billing_emails}
  */
  readonly receiveBillingEmails?: boolean | cdktf.IResolvable;
  /**
  * The role to assign to the user in the organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member#role CloudOrgMember#role}
  */
  readonly role: string;
  /**
  * Username or ID of the user to add to the org's members.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member#user CloudOrgMember#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member grafana_cloud_org_member}
*/
export class CloudOrgMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_org_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_org_member grafana_cloud_org_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudOrgMemberConfig
  */
  public constructor(scope: Construct, id: string, config: CloudOrgMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_org_member',
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
    this._org = config.org;
    this._receiveBillingEmails = config.receiveBillingEmails;
    this._role = config.role;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // receive_billing_emails - computed: true, optional: true, required: false
  private _receiveBillingEmails?: boolean | cdktf.IResolvable; 
  public get receiveBillingEmails() {
    return this.getBooleanAttribute('receive_billing_emails');
  }
  public set receiveBillingEmails(value: boolean | cdktf.IResolvable) {
    this._receiveBillingEmails = value;
  }
  public resetReceiveBillingEmails() {
    this._receiveBillingEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveBillingEmailsInput() {
    return this._receiveBillingEmails;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
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
      org: cdktf.stringToTerraform(this._org),
      receive_billing_emails: cdktf.booleanToTerraform(this._receiveBillingEmails),
      role: cdktf.stringToTerraform(this._role),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}

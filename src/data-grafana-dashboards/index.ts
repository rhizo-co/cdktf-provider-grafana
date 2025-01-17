// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaDashboardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * UIDs of Grafana folders containing dashboards. Specify to filter for dashboards by folder (eg. `["General"]` for General folder), or leave blank to get all dashboards in all folders.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#folder_uids DataGrafanaDashboards#folder_uids}
  */
  readonly folderUids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#id DataGrafanaDashboards#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of dashboard search results to return. Defaults to `5000`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#limit DataGrafanaDashboards#limit}
  */
  readonly limit?: number;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#org_id DataGrafanaDashboards#org_id}
  */
  readonly orgId?: string;
  /**
  * List of string Grafana dashboard tags to search for, eg. `["prod"]`. Used only as search input, i.e., attribute value will remain unchanged.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#tags DataGrafanaDashboards#tags}
  */
  readonly tags?: string[];
}
export interface DataGrafanaDashboardsDashboards {
}

export function dataGrafanaDashboardsDashboardsToTerraform(struct?: DataGrafanaDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGrafanaDashboardsDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGrafanaDashboardsDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaDashboardsDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_title - computed: true, optional: false, required: false
  public get folderTitle() {
    return this.getStringAttribute('folder_title');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataGrafanaDashboardsDashboardsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGrafanaDashboardsDashboardsOutputReference {
    return new DataGrafanaDashboardsDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards grafana_dashboards}
*/
export class DataGrafanaDashboards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_dashboards";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards grafana_dashboards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaDashboardsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaDashboardsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_dashboards',
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
    this._folderUids = config.folderUids;
    this._id = config.id;
    this._limit = config.limit;
    this._orgId = config.orgId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboards - computed: true, optional: false, required: false
  private _dashboards = new DataGrafanaDashboardsDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }

  // folder_uids - computed: false, optional: true, required: false
  private _folderUids?: string[]; 
  public get folderUids() {
    return this.getListAttribute('folder_uids');
  }
  public set folderUids(value: string[]) {
    this._folderUids = value;
  }
  public resetFolderUids() {
    this._folderUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidsInput() {
    return this._folderUids;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._folderUids),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      org_id: cdktf.stringToTerraform(this._orgId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}

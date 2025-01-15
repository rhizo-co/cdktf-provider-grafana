# `data_grafana_dashboards`

Refer to the Terraform Registory for docs: [`data_grafana_dashboards`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards).

# `dataGrafanaDashboards` Submodule <a name="`dataGrafanaDashboards` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaDashboards <a name="DataGrafanaDashboards" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards grafana_dashboards}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaDashboards.DataGrafanaDashboards(scope: Construct, id: string, config?: DataGrafanaDashboardsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig">DataGrafanaDashboardsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig">DataGrafanaDashboardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetFolderUids">resetFolderUids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFolderUids` <a name="resetFolderUids" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetFolderUids"></a>

```typescript
public resetFolderUids(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isConstruct"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaDashboards.DataGrafanaDashboards.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformElement"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaDashboards.DataGrafanaDashboards.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformDataSource"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaDashboards.DataGrafanaDashboards.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.dashboards">dashboards</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList">DataGrafanaDashboardsDashboardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.folderUidsInput">folderUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.folderUids">folderUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dashboards`<sup>Required</sup> <a name="dashboards" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.dashboards"></a>

```typescript
public readonly dashboards: DataGrafanaDashboardsDashboardsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList">DataGrafanaDashboardsDashboardsList</a>

---

##### `folderUidsInput`<sup>Optional</sup> <a name="folderUidsInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.folderUidsInput"></a>

```typescript
public readonly folderUidsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `folderUids`<sup>Required</sup> <a name="folderUids" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.folderUids"></a>

```typescript
public readonly folderUids: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboards.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaDashboardsConfig <a name="DataGrafanaDashboardsConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.Initializer"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaDashboardsConfig: dataGrafanaDashboards.DataGrafanaDashboardsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.folderUids">folderUids</a></code> | <code>string[]</code> | UIDs of Grafana folders containing dashboards. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#id DataGrafanaDashboards#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.limit">limit</a></code> | <code>number</code> | Maximum number of dashboard search results to return. Defaults to `5000`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.tags">tags</a></code> | <code>string[]</code> | List of string Grafana dashboard tags to search for, eg. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folderUids`<sup>Optional</sup> <a name="folderUids" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.folderUids"></a>

```typescript
public readonly folderUids: string[];
```

- *Type:* string[]

UIDs of Grafana folders containing dashboards.

Specify to filter for dashboards by folder (eg. `["General"]` for General folder), or leave blank to get all dashboards in all folders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#folder_uids DataGrafanaDashboards#folder_uids}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#id DataGrafanaDashboards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Maximum number of dashboard search results to return. Defaults to `5000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#limit DataGrafanaDashboards#limit}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#org_id DataGrafanaDashboards#org_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of string Grafana dashboard tags to search for, eg.

`["prod"]`. Used only as search input, i.e., attribute value will remain unchanged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/dashboards#tags DataGrafanaDashboards#tags}

---

### DataGrafanaDashboardsDashboards <a name="DataGrafanaDashboardsDashboards" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboards.Initializer"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaDashboardsDashboards: dataGrafanaDashboards.DataGrafanaDashboardsDashboards = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaDashboardsDashboardsList <a name="DataGrafanaDashboardsDashboardsList" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.get"></a>

```typescript
public get(index: number): DataGrafanaDashboardsDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaDashboardsDashboardsOutputReference <a name="DataGrafanaDashboardsDashboardsOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer"></a>

```typescript
import { dataGrafanaDashboards } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.folderTitle">folderTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboards">DataGrafanaDashboardsDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `folderTitle`<sup>Required</sup> <a name="folderTitle" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.folderTitle"></a>

```typescript
public readonly folderTitle: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaDashboardsDashboards;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaDashboards.DataGrafanaDashboardsDashboards">DataGrafanaDashboardsDashboards</a>

---




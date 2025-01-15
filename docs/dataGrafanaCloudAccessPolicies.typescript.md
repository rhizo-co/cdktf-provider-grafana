# `data_grafana_cloud_access_policies`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_access_policies`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_access_policies).

# `dataGrafanaCloudAccessPolicies` Submodule <a name="`dataGrafanaCloudAccessPolicies` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudAccessPolicies <a name="DataGrafanaCloudAccessPolicies" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_access_policies grafana_cloud_access_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies(scope: Construct, id: string, config?: DataGrafanaCloudAccessPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig">DataGrafanaCloudAccessPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig">DataGrafanaCloudAccessPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetNameFilter">resetNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetRegionFilter">resetRegionFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetNameFilter` <a name="resetNameFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetNameFilter"></a>

```typescript
public resetNameFilter(): void
```

##### `resetRegionFilter` <a name="resetRegionFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.resetRegionFilter"></a>

```typescript
public resetRegionFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isConstruct"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.accessPolicies">accessPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList">DataGrafanaCloudAccessPoliciesAccessPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.nameFilterInput">nameFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.regionFilterInput">regionFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.nameFilter">nameFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.regionFilter">regionFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: DataGrafanaCloudAccessPoliciesAccessPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList">DataGrafanaCloudAccessPoliciesAccessPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameFilterInput`<sup>Optional</sup> <a name="nameFilterInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.nameFilterInput"></a>

```typescript
public readonly nameFilterInput: string;
```

- *Type:* string

---

##### `regionFilterInput`<sup>Optional</sup> <a name="regionFilterInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.regionFilterInput"></a>

```typescript
public readonly regionFilterInput: string;
```

- *Type:* string

---

##### `nameFilter`<sup>Required</sup> <a name="nameFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

---

##### `regionFilter`<sup>Required</sup> <a name="regionFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.regionFilter"></a>

```typescript
public readonly regionFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudAccessPoliciesAccessPolicies <a name="DataGrafanaCloudAccessPoliciesAccessPolicies" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPolicies.Initializer"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudAccessPoliciesAccessPolicies: dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPolicies = { ... }
```


### DataGrafanaCloudAccessPoliciesConfig <a name="DataGrafanaCloudAccessPoliciesConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudAccessPoliciesConfig: dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.nameFilter">nameFilter</a></code> | <code>string</code> | If set, only access policies with the specified name will be returned. This is faster than filtering in Terraform. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.regionFilter">regionFilter</a></code> | <code>string</code> | If set, only access policies in the specified region will be returned. This is faster than filtering in Terraform. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `nameFilter`<sup>Optional</sup> <a name="nameFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

If set, only access policies with the specified name will be returned. This is faster than filtering in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_access_policies#name_filter DataGrafanaCloudAccessPolicies#name_filter}

---

##### `regionFilter`<sup>Optional</sup> <a name="regionFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesConfig.property.regionFilter"></a>

```typescript
public readonly regionFilter: string;
```

- *Type:* string

If set, only access policies in the specified region will be returned. This is faster than filtering in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_access_policies#region_filter DataGrafanaCloudAccessPolicies#region_filter}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaCloudAccessPoliciesAccessPoliciesList <a name="DataGrafanaCloudAccessPoliciesAccessPoliciesList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference <a name="DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudAccessPolicies } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPolicies">DataGrafanaCloudAccessPoliciesAccessPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaCloudAccessPoliciesAccessPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudAccessPolicies.DataGrafanaCloudAccessPoliciesAccessPolicies">DataGrafanaCloudAccessPoliciesAccessPolicies</a>

---




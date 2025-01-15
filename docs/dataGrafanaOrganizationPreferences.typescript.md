# `data_grafana_organization_preferences`

Refer to the Terraform Registory for docs: [`data_grafana_organization_preferences`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/organization_preferences).

# `dataGrafanaOrganizationPreferences` Submodule <a name="`dataGrafanaOrganizationPreferences` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaOrganizationPreferences <a name="DataGrafanaOrganizationPreferences" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/organization_preferences grafana_organization_preferences}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer"></a>

```typescript
import { dataGrafanaOrganizationPreferences } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences(scope: Construct, id: string, config?: DataGrafanaOrganizationPreferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig">DataGrafanaOrganizationPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig">DataGrafanaOrganizationPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetOrgId">resetOrgId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isConstruct"></a>

```typescript
import { dataGrafanaOrganizationPreferences } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformElement"></a>

```typescript
import { dataGrafanaOrganizationPreferences } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformDataSource"></a>

```typescript
import { dataGrafanaOrganizationPreferences } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.homeDashboardUid">homeDashboardUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.weekStart">weekStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `homeDashboardUid`<sup>Required</sup> <a name="homeDashboardUid" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.homeDashboardUid"></a>

```typescript
public readonly homeDashboardUid: string;
```

- *Type:* string

---

##### `theme`<sup>Required</sup> <a name="theme" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `weekStart`<sup>Required</sup> <a name="weekStart" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.weekStart"></a>

```typescript
public readonly weekStart: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaOrganizationPreferencesConfig <a name="DataGrafanaOrganizationPreferencesConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.Initializer"></a>

```typescript
import { dataGrafanaOrganizationPreferences } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaOrganizationPreferencesConfig: dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/organization_preferences#id DataGrafanaOrganizationPreferences#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/organization_preferences#id DataGrafanaOrganizationPreferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOrganizationPreferences.DataGrafanaOrganizationPreferencesConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/organization_preferences#org_id DataGrafanaOrganizationPreferences#org_id}

---



# `data_grafana_cloud_provider_aws_account`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_provider_aws_account`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_account).

# `dataGrafanaCloudProviderAwsAccount` Submodule <a name="`dataGrafanaCloudProviderAwsAccount` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudProviderAwsAccount <a name="DataGrafanaCloudProviderAwsAccount" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_account grafana_cloud_provider_aws_account}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsAccount } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount(scope: Construct, id: string, config: DataGrafanaCloudProviderAwsAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig">DataGrafanaCloudProviderAwsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig">DataGrafanaCloudProviderAwsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isConstruct"></a>

```typescript
import { dataGrafanaCloudProviderAwsAccount } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudProviderAwsAccount } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudProviderAwsAccount } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudProviderAwsAccountConfig <a name="DataGrafanaCloudProviderAwsAccountConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsAccount } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsAccountConfig: dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID given by the Grafana Cloud Provider API to this AWS Account resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.stackId">stackId</a></code> | <code>string</code> | The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID given by the Grafana Cloud Provider API to this AWS Account resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_account#resource_id DataGrafanaCloudProviderAwsAccount#resource_id}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsAccount.DataGrafanaCloudProviderAwsAccountConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_account#stack_id DataGrafanaCloudProviderAwsAccount#stack_id}

---




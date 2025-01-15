# `grafana_data_source_config_lbac_rules`

Refer to the Terraform Registory for docs: [`grafana_data_source_config_lbac_rules`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source_config_lbac_rules).

# `dataSourceConfigLbacRules` Submodule <a name="`dataSourceConfigLbacRules` Submodule" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSourceConfigLbacRules <a name="DataSourceConfigLbacRules" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source_config_lbac_rules grafana_data_source_config_lbac_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer"></a>

```typescript
import { dataSourceConfigLbacRules } from 'rhizo-co-terraform-provider-grafana'

new dataSourceConfigLbacRules.DataSourceConfigLbacRules(scope: Construct, id: string, config: DataSourceConfigLbacRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig">DataSourceConfigLbacRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig">DataSourceConfigLbacRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isConstruct"></a>

```typescript
import { dataSourceConfigLbacRules } from 'rhizo-co-terraform-provider-grafana'

dataSourceConfigLbacRules.DataSourceConfigLbacRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformElement"></a>

```typescript
import { dataSourceConfigLbacRules } from 'rhizo-co-terraform-provider-grafana'

dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformResource"></a>

```typescript
import { dataSourceConfigLbacRules } from 'rhizo-co-terraform-provider-grafana'

dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.datasourceUidInput">datasourceUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.rulesInput">rulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.rules">rules</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `datasourceUidInput`<sup>Optional</sup> <a name="datasourceUidInput" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.datasourceUidInput"></a>

```typescript
public readonly datasourceUidInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.rulesInput"></a>

```typescript
public readonly rulesInput: string;
```

- *Type:* string

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSourceConfigLbacRulesConfig <a name="DataSourceConfigLbacRulesConfig" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.Initializer"></a>

```typescript
import { dataSourceConfigLbacRules } from 'rhizo-co-terraform-provider-grafana'

const dataSourceConfigLbacRulesConfig: dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | The UID of the datasource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.rules">rules</a></code> | <code>string</code> | JSON-encoded LBAC rules for the data source. Map of team UIDs to lists of rule strings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

The UID of the datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source_config_lbac_rules#datasource_uid DataSourceConfigLbacRules#datasource_uid}

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-grafana.dataSourceConfigLbacRules.DataSourceConfigLbacRulesConfig.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

JSON-encoded LBAC rules for the data source. Map of team UIDs to lists of rule strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source_config_lbac_rules#rules DataSourceConfigLbacRules#rules}

---




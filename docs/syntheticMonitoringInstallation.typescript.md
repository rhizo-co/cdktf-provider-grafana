# `grafana_synthetic_monitoring_installation`

Refer to the Terraform Registory for docs: [`grafana_synthetic_monitoring_installation`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation).

# `syntheticMonitoringInstallation` Submodule <a name="`syntheticMonitoringInstallation` Submodule" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticMonitoringInstallation <a name="SyntheticMonitoringInstallation" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation grafana_synthetic_monitoring_installation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer"></a>

```typescript
import { syntheticMonitoringInstallation } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringInstallation.SyntheticMonitoringInstallation(scope: Construct, id: string, config: SyntheticMonitoringInstallationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig">SyntheticMonitoringInstallationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig">SyntheticMonitoringInstallationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetStackSmApiUrl">resetStackSmApiUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStackSmApiUrl` <a name="resetStackSmApiUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.resetStackSmApiUrl"></a>

```typescript
public resetStackSmApiUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isConstruct"></a>

```typescript
import { syntheticMonitoringInstallation } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformElement"></a>

```typescript
import { syntheticMonitoringInstallation } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformResource"></a>

```typescript
import { syntheticMonitoringInstallation } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.smAccessToken">smAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.metricsPublisherKeyInput">metricsPublisherKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackSmApiUrlInput">stackSmApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.metricsPublisherKey">metricsPublisherKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackSmApiUrl">stackSmApiUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `smAccessToken`<sup>Required</sup> <a name="smAccessToken" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.smAccessToken"></a>

```typescript
public readonly smAccessToken: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsPublisherKeyInput`<sup>Optional</sup> <a name="metricsPublisherKeyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.metricsPublisherKeyInput"></a>

```typescript
public readonly metricsPublisherKeyInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `stackSmApiUrlInput`<sup>Optional</sup> <a name="stackSmApiUrlInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackSmApiUrlInput"></a>

```typescript
public readonly stackSmApiUrlInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsPublisherKey`<sup>Required</sup> <a name="metricsPublisherKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.metricsPublisherKey"></a>

```typescript
public readonly metricsPublisherKey: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `stackSmApiUrl`<sup>Required</sup> <a name="stackSmApiUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.stackSmApiUrl"></a>

```typescript
public readonly stackSmApiUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticMonitoringInstallationConfig <a name="SyntheticMonitoringInstallationConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.Initializer"></a>

```typescript
import { syntheticMonitoringInstallation } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringInstallationConfig: syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.metricsPublisherKey">metricsPublisherKey</a></code> | <code>string</code> | The [Grafana Cloud access policy](https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/) with the following scopes: `stacks:read`, `metrics:write`, `logs:write`, `traces:write`. This is used to publish metrics and logs to Grafana Cloud stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.stackId">stackId</a></code> | <code>string</code> | The ID or slug of the stack to install SM on. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation#id SyntheticMonitoringInstallation#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.stackSmApiUrl">stackSmApiUrl</a></code> | <code>string</code> | The URL of the SM API to install SM on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricsPublisherKey`<sup>Required</sup> <a name="metricsPublisherKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.metricsPublisherKey"></a>

```typescript
public readonly metricsPublisherKey: string;
```

- *Type:* string

The [Grafana Cloud access policy](https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/) with the following scopes: `stacks:read`, `metrics:write`, `logs:write`, `traces:write`. This is used to publish metrics and logs to Grafana Cloud stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation#metrics_publisher_key SyntheticMonitoringInstallation#metrics_publisher_key}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID or slug of the stack to install SM on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation#stack_id SyntheticMonitoringInstallation#stack_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation#id SyntheticMonitoringInstallation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stackSmApiUrl`<sup>Optional</sup> <a name="stackSmApiUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringInstallation.SyntheticMonitoringInstallationConfig.property.stackSmApiUrl"></a>

```typescript
public readonly stackSmApiUrl: string;
```

- *Type:* string

The URL of the SM API to install SM on.

This depends on the stack region, find the list of API URLs here: https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/set-up/set-up-private-probes/#probe-api-server-url. A static mapping exists in the provider but it may not contain all the regions. If it does contain the stack's region, this field is computed automatically and readable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_installation#stack_sm_api_url SyntheticMonitoringInstallation#stack_sm_api_url}

---




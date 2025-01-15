# `grafana_synthetic_monitoring_probe`

Refer to the Terraform Registory for docs: [`grafana_synthetic_monitoring_probe`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe).

# `syntheticMonitoringProbe` Submodule <a name="`syntheticMonitoringProbe` Submodule" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticMonitoringProbe <a name="SyntheticMonitoringProbe" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe grafana_synthetic_monitoring_probe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer"></a>

```typescript
import { syntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringProbe.SyntheticMonitoringProbe(scope: Construct, id: string, config: SyntheticMonitoringProbeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig">SyntheticMonitoringProbeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig">SyntheticMonitoringProbeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetDisableScriptedChecks">resetDisableScriptedChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetPublic">resetPublic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisableScriptedChecks` <a name="resetDisableScriptedChecks" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetDisableScriptedChecks"></a>

```typescript
public resetDisableScriptedChecks(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPublic` <a name="resetPublic" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.resetPublic"></a>

```typescript
public resetPublic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isConstruct"></a>

```typescript
import { syntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringProbe.SyntheticMonitoringProbe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformElement"></a>

```typescript
import { syntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformResource"></a>

```typescript
import { syntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.tenantId">tenantId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.disableScriptedChecksInput">disableScriptedChecksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.latitudeInput">latitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.longitudeInput">longitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.publicInput">publicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.disableScriptedChecks">disableScriptedChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.tenantId"></a>

```typescript
public readonly tenantId: number;
```

- *Type:* number

---

##### `disableScriptedChecksInput`<sup>Optional</sup> <a name="disableScriptedChecksInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.disableScriptedChecksInput"></a>

```typescript
public readonly disableScriptedChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: number;
```

- *Type:* number

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.publicInput"></a>

```typescript
public readonly publicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `disableScriptedChecks`<sup>Required</sup> <a name="disableScriptedChecks" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.disableScriptedChecks"></a>

```typescript
public readonly disableScriptedChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticMonitoringProbeConfig <a name="SyntheticMonitoringProbeConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.Initializer"></a>

```typescript
import { syntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringProbeConfig: syntheticMonitoringProbe.SyntheticMonitoringProbeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.latitude">latitude</a></code> | <code>number</code> | Latitude coordinates. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.longitude">longitude</a></code> | <code>number</code> | Longitude coordinates. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.name">name</a></code> | <code>string</code> | Name of the probe. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.region">region</a></code> | <code>string</code> | Region of the probe. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.disableScriptedChecks">disableScriptedChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables scripted checks for this probe. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Custom labels to be included with collected metrics and logs. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | Public probes are run by Grafana Labs and can be used by all users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

Latitude coordinates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#latitude SyntheticMonitoringProbe#latitude}

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

Longitude coordinates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#longitude SyntheticMonitoringProbe#longitude}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#name SyntheticMonitoringProbe#name}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#region SyntheticMonitoringProbe#region}

---

##### `disableScriptedChecks`<sup>Optional</sup> <a name="disableScriptedChecks" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.disableScriptedChecks"></a>

```typescript
public readonly disableScriptedChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables scripted checks for this probe. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#disable_scripted_checks SyntheticMonitoringProbe#disable_scripted_checks}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom labels to be included with collected metrics and logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#labels SyntheticMonitoringProbe#labels}

---

##### `public`<sup>Optional</sup> <a name="public" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringProbe.SyntheticMonitoringProbeConfig.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Public probes are run by Grafana Labs and can be used by all users.

Only Grafana Labs managed public probes will be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_probe#public SyntheticMonitoringProbe#public}

---




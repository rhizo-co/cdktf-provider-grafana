# `grafana_synthetic_monitoring_check`

Refer to the Terraform Registory for docs: [`grafana_synthetic_monitoring_check`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check).

# `syntheticMonitoringCheck` Submodule <a name="`syntheticMonitoringCheck` Submodule" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticMonitoringCheck <a name="SyntheticMonitoringCheck" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check grafana_synthetic_monitoring_check}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheck(scope: Construct, id: string, config: SyntheticMonitoringCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig">SyntheticMonitoringCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig">SyntheticMonitoringCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetAlertSensitivity">resetAlertSensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetBasicMetricsOnly">resetBasicMetricsOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSettings` <a name="putSettings" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.putSettings"></a>

```typescript
public putSettings(value: SyntheticMonitoringCheckSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.putSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a>

---

##### `resetAlertSensitivity` <a name="resetAlertSensitivity" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetAlertSensitivity"></a>

```typescript
public resetAlertSensitivity(): void
```

##### `resetBasicMetricsOnly` <a name="resetBasicMetricsOnly" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetBasicMetricsOnly"></a>

```typescript
public resetBasicMetricsOnly(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFrequency` <a name="resetFrequency" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeout` <a name="resetTimeout" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isConstruct"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringCheck.SyntheticMonitoringCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformElement"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformResource"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.settings">settings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference">SyntheticMonitoringCheckSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.tenantId">tenantId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.alertSensitivityInput">alertSensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.basicMetricsOnlyInput">basicMetricsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.frequencyInput">frequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.jobInput">jobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.probesInput">probesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.settingsInput">settingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.alertSensitivity">alertSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.basicMetricsOnly">basicMetricsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.frequency">frequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.job">job</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.probes">probes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.settings"></a>

```typescript
public readonly settings: SyntheticMonitoringCheckSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference">SyntheticMonitoringCheckSettingsOutputReference</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.tenantId"></a>

```typescript
public readonly tenantId: number;
```

- *Type:* number

---

##### `alertSensitivityInput`<sup>Optional</sup> <a name="alertSensitivityInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.alertSensitivityInput"></a>

```typescript
public readonly alertSensitivityInput: string;
```

- *Type:* string

---

##### `basicMetricsOnlyInput`<sup>Optional</sup> <a name="basicMetricsOnlyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.basicMetricsOnlyInput"></a>

```typescript
public readonly basicMetricsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* number

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.jobInput"></a>

```typescript
public readonly jobInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `probesInput`<sup>Optional</sup> <a name="probesInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.probesInput"></a>

```typescript
public readonly probesInput: number[];
```

- *Type:* number[]

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.settingsInput"></a>

```typescript
public readonly settingsInput: SyntheticMonitoringCheckSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `alertSensitivity`<sup>Required</sup> <a name="alertSensitivity" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.alertSensitivity"></a>

```typescript
public readonly alertSensitivity: string;
```

- *Type:* string

---

##### `basicMetricsOnly`<sup>Required</sup> <a name="basicMetricsOnly" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.basicMetricsOnly"></a>

```typescript
public readonly basicMetricsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

---

##### `job`<sup>Required</sup> <a name="job" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.job"></a>

```typescript
public readonly job: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `probes`<sup>Required</sup> <a name="probes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.probes"></a>

```typescript
public readonly probes: number[];
```

- *Type:* number[]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticMonitoringCheckConfig <a name="SyntheticMonitoringCheckConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckConfig: syntheticMonitoringCheck.SyntheticMonitoringCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.job">job</a></code> | <code>string</code> | Name used for job label. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.probes">probes</a></code> | <code>number[]</code> | List of probe location IDs where this target will be checked from. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.settings">settings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a></code> | settings block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.target">target</a></code> | <code>string</code> | Hostname to ping. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.alertSensitivity">alertSensitivity</a></code> | <code>string</code> | Can be set to `none`, `low`, `medium`, or `high` to correspond to the check [alert levels](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/configure-alerts/synthetic-monitoring-alerting/). Defaults to `none`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.basicMetricsOnly">basicMetricsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Metrics are reduced by default. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the check. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.frequency">frequency</a></code> | <code>number</code> | How often the check runs in milliseconds (the value is not truly a "frequency" but a "period"). |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Custom labels to be included with collected metrics and logs. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.timeout">timeout</a></code> | <code>number</code> | Specifies the maximum running time for the check in milliseconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `job`<sup>Required</sup> <a name="job" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.job"></a>

```typescript
public readonly job: string;
```

- *Type:* string

Name used for job label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#job SyntheticMonitoringCheck#job}

---

##### `probes`<sup>Required</sup> <a name="probes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.probes"></a>

```typescript
public readonly probes: number[];
```

- *Type:* number[]

List of probe location IDs where this target will be checked from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#probes SyntheticMonitoringCheck#probes}

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.settings"></a>

```typescript
public readonly settings: SyntheticMonitoringCheckSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#settings SyntheticMonitoringCheck#settings}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Hostname to ping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#target SyntheticMonitoringCheck#target}

---

##### `alertSensitivity`<sup>Optional</sup> <a name="alertSensitivity" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.alertSensitivity"></a>

```typescript
public readonly alertSensitivity: string;
```

- *Type:* string

Can be set to `none`, `low`, `medium`, or `high` to correspond to the check [alert levels](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/configure-alerts/synthetic-monitoring-alerting/). Defaults to `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#alert_sensitivity SyntheticMonitoringCheck#alert_sensitivity}

---

##### `basicMetricsOnly`<sup>Optional</sup> <a name="basicMetricsOnly" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.basicMetricsOnly"></a>

```typescript
public readonly basicMetricsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Metrics are reduced by default.

Set this to `false` if you'd like to publish all metrics. We maintain a [full list of metrics](https://github.com/grafana/synthetic-monitoring-agent/tree/main/internal/scraper/testdata) collected for each. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#basic_metrics_only SyntheticMonitoringCheck#basic_metrics_only}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the check. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#enabled SyntheticMonitoringCheck#enabled}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

How often the check runs in milliseconds (the value is not truly a "frequency" but a "period").

The minimum acceptable value is 1 second (1000 ms), and the maximum is 1 hour (3600000 ms). Defaults to `60000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#frequency SyntheticMonitoringCheck#frequency}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom labels to be included with collected metrics and logs.

The maximum number of labels that can be specified per check is 5. These are applied, along with the probe-specific labels, to the outgoing metrics. The names and values of the labels cannot be empty, and the maximum length is 32 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#labels SyntheticMonitoringCheck#labels}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Specifies the maximum running time for the check in milliseconds.

The minimum acceptable value is 1 second (1000 ms), and the maximum 10 seconds (10000 ms). Defaults to `3000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#timeout SyntheticMonitoringCheck#timeout}

---

### SyntheticMonitoringCheckSettings <a name="SyntheticMonitoringCheckSettings" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettings: syntheticMonitoringCheck.SyntheticMonitoringCheckSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.browser">browser</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a></code> | browser block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.grpc">grpc</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a></code> | grpc block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.http">http</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a></code> | http block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.multihttp">multihttp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a></code> | multihttp block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.ping">ping</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a></code> | ping block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.scripted">scripted</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a></code> | scripted block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.tcp">tcp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a></code> | tcp block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.traceroute">traceroute</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a></code> | traceroute block. |

---

##### `browser`<sup>Optional</sup> <a name="browser" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.browser"></a>

```typescript
public readonly browser: SyntheticMonitoringCheckSettingsBrowser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a>

browser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#browser SyntheticMonitoringCheck#browser}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.dns"></a>

```typescript
public readonly dns: SyntheticMonitoringCheckSettingsDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#dns SyntheticMonitoringCheck#dns}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.grpc"></a>

```typescript
public readonly grpc: SyntheticMonitoringCheckSettingsGrpc;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#grpc SyntheticMonitoringCheck#grpc}

---

##### `http`<sup>Optional</sup> <a name="http" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.http"></a>

```typescript
public readonly http: SyntheticMonitoringCheckSettingsHttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#http SyntheticMonitoringCheck#http}

---

##### `multihttp`<sup>Optional</sup> <a name="multihttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.multihttp"></a>

```typescript
public readonly multihttp: SyntheticMonitoringCheckSettingsMultihttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a>

multihttp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#multihttp SyntheticMonitoringCheck#multihttp}

---

##### `ping`<sup>Optional</sup> <a name="ping" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.ping"></a>

```typescript
public readonly ping: SyntheticMonitoringCheckSettingsPing;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a>

ping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ping SyntheticMonitoringCheck#ping}

---

##### `scripted`<sup>Optional</sup> <a name="scripted" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.scripted"></a>

```typescript
public readonly scripted: SyntheticMonitoringCheckSettingsScripted;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a>

scripted block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#scripted SyntheticMonitoringCheck#scripted}

---

##### `tcp`<sup>Optional</sup> <a name="tcp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.tcp"></a>

```typescript
public readonly tcp: SyntheticMonitoringCheckSettingsTcp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a>

tcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tcp SyntheticMonitoringCheck#tcp}

---

##### `traceroute`<sup>Optional</sup> <a name="traceroute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings.property.traceroute"></a>

```typescript
public readonly traceroute: SyntheticMonitoringCheckSettingsTraceroute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a>

traceroute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#traceroute SyntheticMonitoringCheck#traceroute}

---

### SyntheticMonitoringCheckSettingsBrowser <a name="SyntheticMonitoringCheckSettingsBrowser" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsBrowser: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}. |

---

##### `script`<sup>Required</sup> <a name="script" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}.

---

### SyntheticMonitoringCheckSettingsDns <a name="SyntheticMonitoringCheckSettingsDns" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsDns: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.ipVersion">ipVersion</a></code> | <code>string</code> | Options are `V4`, `V6`, `Any`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.port">port</a></code> | <code>number</code> | Port to target. Defaults to `53`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.protocol">protocol</a></code> | <code>string</code> | `TCP` or `UDP`. Defaults to `UDP`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.recordType">recordType</a></code> | <code>string</code> | One of `ANY`, `A`, `AAAA`, `CNAME`, `MX`, `NS`, `PTR`, `SOA`, `SRV`, `TXT`. Defaults to `A`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.server">server</a></code> | <code>string</code> | DNS server address to target. Defaults to `8.8.8.8`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | Source IP address. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAdditionalRrs">validateAdditionalRrs</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]</code> | validate_additional_rrs block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAnswerRrs">validateAnswerRrs</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a></code> | validate_answer_rrs block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAuthorityRrs">validateAuthorityRrs</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a></code> | validate_authority_rrs block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validRCodes">validRCodes</a></code> | <code>string[]</code> | List of valid response codes. |

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Options are `V4`, `V6`, `Any`.

Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port to target. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#port SyntheticMonitoringCheck#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

`TCP` or `UDP`. Defaults to `UDP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#protocol SyntheticMonitoringCheck#protocol}

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

One of `ANY`, `A`, `AAAA`, `CNAME`, `MX`, `NS`, `PTR`, `SOA`, `SRV`, `TXT`. Defaults to `A`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#record_type SyntheticMonitoringCheck#record_type}

---

##### `server`<sup>Optional</sup> <a name="server" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

DNS server address to target. Defaults to `8.8.8.8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#server SyntheticMonitoringCheck#server}

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

Source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}

---

##### `validateAdditionalRrs`<sup>Optional</sup> <a name="validateAdditionalRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAdditionalRrs"></a>

```typescript
public readonly validateAdditionalRrs: IResolvable | SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]

validate_additional_rrs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#validate_additional_rrs SyntheticMonitoringCheck#validate_additional_rrs}

---

##### `validateAnswerRrs`<sup>Optional</sup> <a name="validateAnswerRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAnswerRrs"></a>

```typescript
public readonly validateAnswerRrs: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a>

validate_answer_rrs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#validate_answer_rrs SyntheticMonitoringCheck#validate_answer_rrs}

---

##### `validateAuthorityRrs`<sup>Optional</sup> <a name="validateAuthorityRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validateAuthorityRrs"></a>

```typescript
public readonly validateAuthorityRrs: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a>

validate_authority_rrs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#validate_authority_rrs SyntheticMonitoringCheck#validate_authority_rrs}

---

##### `validRCodes`<sup>Optional</sup> <a name="validRCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns.property.validRCodes"></a>

```typescript
public readonly validRCodes: string[];
```

- *Type:* string[]

List of valid response codes.

Options include `NOERROR`, `BADALG`, `BADMODE`, `BADKEY`, `BADCOOKIE`, `BADNAME`, `BADSIG`, `BADTIME`, `BADTRUNC`, `BADVERS`, `FORMERR`, `NOTIMP`, `NOTAUTH`, `NOTZONE`, `NXDOMAIN`, `NXRRSET`, `REFUSED`, `SERVFAIL`, `YXDOMAIN`, `YXRRSET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#valid_r_codes SyntheticMonitoringCheck#valid_r_codes}

---

### SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs <a name="SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsDnsValidateAdditionalRrs: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | Fail if value matches regex. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | Fail if value does not match regex. |

---

##### `failIfMatchesRegexp`<sup>Optional</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value matches regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}

---

##### `failIfNotMatchesRegexp`<sup>Optional</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value does not match regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}

---

### SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs <a name="SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsDnsValidateAnswerRrs: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | Fail if value matches regex. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | Fail if value does not match regex. |

---

##### `failIfMatchesRegexp`<sup>Optional</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value matches regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}

---

##### `failIfNotMatchesRegexp`<sup>Optional</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value does not match regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}

---

### SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs <a name="SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsDnsValidateAuthorityRrs: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | Fail if value matches regex. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | Fail if value does not match regex. |

---

##### `failIfMatchesRegexp`<sup>Optional</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value matches regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}

---

##### `failIfNotMatchesRegexp`<sup>Optional</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

Fail if value does not match regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}

---

### SyntheticMonitoringCheckSettingsGrpc <a name="SyntheticMonitoringCheckSettingsGrpc" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsGrpc: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.ipVersion">ipVersion</a></code> | <code>string</code> | Options are `V4`, `V6`, `Any`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.service">service</a></code> | <code>string</code> | gRPC service. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not TLS is used when the connection is initiated. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a></code> | tls_config block. |

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Options are `V4`, `V6`, `Any`.

Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

gRPC service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#service SyntheticMonitoringCheck#service}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not TLS is used when the connection is initiated. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tls SyntheticMonitoringCheck#tls}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsGrpcTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}

---

### SyntheticMonitoringCheckSettingsGrpcTlsConfig <a name="SyntheticMonitoringCheckSettingsGrpcTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsGrpcTlsConfig: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.caCert">caCert</a></code> | <code>string</code> | CA certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.clientCert">clientCert</a></code> | <code>string</code> | Client certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.clientKey">clientKey</a></code> | <code>string</code> | Client key in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable target certificate validation. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.serverName">serverName</a></code> | <code>string</code> | Used to verify the hostname for the targets. |

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

Client certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

Client key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable target certificate validation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Used to verify the hostname for the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}

---

### SyntheticMonitoringCheckSettingsHttp <a name="SyntheticMonitoringCheckSettingsHttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsHttp: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.basicAuth">basicAuth</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a></code> | basic_auth block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.bearerToken">bearerToken</a></code> | <code>string</code> | Token for use with bearer authorization header. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.body">body</a></code> | <code>string</code> | The body of the HTTP request used in probe. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.cacheBustingQueryParamName">cacheBustingQueryParamName</a></code> | <code>string</code> | The name of the query parameter used to prevent the server from using a cached response. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.compression">compression</a></code> | <code>string</code> | Check fails if the response body is not compressed using this compression algorithm. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfBodyMatchesRegexp">failIfBodyMatchesRegexp</a></code> | <code>string[]</code> | List of regexes. If any match the response body, the check will fail. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfBodyNotMatchesRegexp">failIfBodyNotMatchesRegexp</a></code> | <code>string[]</code> | List of regexes. If any do not match the response body, the check will fail. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfHeaderMatchesRegexp">failIfHeaderMatchesRegexp</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]</code> | fail_if_header_matches_regexp block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfHeaderNotMatchesRegexp">failIfHeaderNotMatchesRegexp</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]</code> | fail_if_header_not_matches_regexp block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfNotSsl">failIfNotSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fail if SSL is not present. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfSsl">failIfSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fail if SSL is present. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.headers">headers</a></code> | <code>string[]</code> | The HTTP headers set for the probe. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.ipVersion">ipVersion</a></code> | <code>string</code> | Options are `V4`, `V6`, `Any`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.method">method</a></code> | <code>string</code> | Request method. One of `GET`, `CONNECT`, `DELETE`, `HEAD`, `OPTIONS`, `POST`, `PUT`, `TRACE` Defaults to `GET`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.noFollowRedirects">noFollowRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not follow redirects. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.proxyConnectHeaders">proxyConnectHeaders</a></code> | <code>string[]</code> | The HTTP headers sent to the proxy URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | Proxy URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a></code> | tls_config block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.validHttpVersions">validHttpVersions</a></code> | <code>string[]</code> | List of valid HTTP versions. Options include `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.validStatusCodes">validStatusCodes</a></code> | <code>number[]</code> | Accepted status codes. If unset, defaults to 2xx. |

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.basicAuth"></a>

```typescript
public readonly basicAuth: SyntheticMonitoringCheckSettingsHttpBasicAuth;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#basic_auth SyntheticMonitoringCheck#basic_auth}

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.bearerToken"></a>

```typescript
public readonly bearerToken: string;
```

- *Type:* string

Token for use with bearer authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#bearer_token SyntheticMonitoringCheck#bearer_token}

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The body of the HTTP request used in probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#body SyntheticMonitoringCheck#body}

---

##### `cacheBustingQueryParamName`<sup>Optional</sup> <a name="cacheBustingQueryParamName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.cacheBustingQueryParamName"></a>

```typescript
public readonly cacheBustingQueryParamName: string;
```

- *Type:* string

The name of the query parameter used to prevent the server from using a cached response.

Each probe will assign a random value to this parameter each time a request is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#cache_busting_query_param_name SyntheticMonitoringCheck#cache_busting_query_param_name}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Check fails if the response body is not compressed using this compression algorithm.

One of `none`, `identity`, `br`, `gzip`, `deflate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#compression SyntheticMonitoringCheck#compression}

---

##### `failIfBodyMatchesRegexp`<sup>Optional</sup> <a name="failIfBodyMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfBodyMatchesRegexp"></a>

```typescript
public readonly failIfBodyMatchesRegexp: string[];
```

- *Type:* string[]

List of regexes. If any match the response body, the check will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_body_matches_regexp SyntheticMonitoringCheck#fail_if_body_matches_regexp}

---

##### `failIfBodyNotMatchesRegexp`<sup>Optional</sup> <a name="failIfBodyNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfBodyNotMatchesRegexp"></a>

```typescript
public readonly failIfBodyNotMatchesRegexp: string[];
```

- *Type:* string[]

List of regexes. If any do not match the response body, the check will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_body_not_matches_regexp SyntheticMonitoringCheck#fail_if_body_not_matches_regexp}

---

##### `failIfHeaderMatchesRegexp`<sup>Optional</sup> <a name="failIfHeaderMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfHeaderMatchesRegexp"></a>

```typescript
public readonly failIfHeaderMatchesRegexp: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]

fail_if_header_matches_regexp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_header_matches_regexp SyntheticMonitoringCheck#fail_if_header_matches_regexp}

---

##### `failIfHeaderNotMatchesRegexp`<sup>Optional</sup> <a name="failIfHeaderNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfHeaderNotMatchesRegexp"></a>

```typescript
public readonly failIfHeaderNotMatchesRegexp: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]

fail_if_header_not_matches_regexp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_header_not_matches_regexp SyntheticMonitoringCheck#fail_if_header_not_matches_regexp}

---

##### `failIfNotSsl`<sup>Optional</sup> <a name="failIfNotSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfNotSsl"></a>

```typescript
public readonly failIfNotSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fail if SSL is not present. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_not_ssl SyntheticMonitoringCheck#fail_if_not_ssl}

---

##### `failIfSsl`<sup>Optional</sup> <a name="failIfSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.failIfSsl"></a>

```typescript
public readonly failIfSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fail if SSL is present. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#fail_if_ssl SyntheticMonitoringCheck#fail_if_ssl}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

The HTTP headers set for the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#headers SyntheticMonitoringCheck#headers}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Options are `V4`, `V6`, `Any`.

Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Request method. One of `GET`, `CONNECT`, `DELETE`, `HEAD`, `OPTIONS`, `POST`, `PUT`, `TRACE` Defaults to `GET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#method SyntheticMonitoringCheck#method}

---

##### `noFollowRedirects`<sup>Optional</sup> <a name="noFollowRedirects" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.noFollowRedirects"></a>

```typescript
public readonly noFollowRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not follow redirects. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#no_follow_redirects SyntheticMonitoringCheck#no_follow_redirects}

---

##### `proxyConnectHeaders`<sup>Optional</sup> <a name="proxyConnectHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.proxyConnectHeaders"></a>

```typescript
public readonly proxyConnectHeaders: string[];
```

- *Type:* string[]

The HTTP headers sent to the proxy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#proxy_connect_headers SyntheticMonitoringCheck#proxy_connect_headers}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

Proxy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#proxy_url SyntheticMonitoringCheck#proxy_url}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsHttpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}

---

##### `validHttpVersions`<sup>Optional</sup> <a name="validHttpVersions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.validHttpVersions"></a>

```typescript
public readonly validHttpVersions: string[];
```

- *Type:* string[]

List of valid HTTP versions. Options include `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#valid_http_versions SyntheticMonitoringCheck#valid_http_versions}

---

##### `validStatusCodes`<sup>Optional</sup> <a name="validStatusCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp.property.validStatusCodes"></a>

```typescript
public readonly validStatusCodes: number[];
```

- *Type:* number[]

Accepted status codes. If unset, defaults to 2xx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#valid_status_codes SyntheticMonitoringCheck#valid_status_codes}

---

### SyntheticMonitoringCheckSettingsHttpBasicAuth <a name="SyntheticMonitoringCheckSettingsHttpBasicAuth" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsHttpBasicAuth: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth.property.password">password</a></code> | <code>string</code> | Basic auth password. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth.property.username">username</a></code> | <code>string</code> | Basic auth username. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Basic auth password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#password SyntheticMonitoringCheck#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Basic auth username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#username SyntheticMonitoringCheck#username}

---

### SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.header">header</a></code> | <code>string</code> | Header name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.regexp">regexp</a></code> | <code>string</code> | Regex that header value should match. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow header to be missing from responses. Defaults to `false`. |

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#header SyntheticMonitoringCheck#header}

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

Regex that header value should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#regexp SyntheticMonitoringCheck#regexp}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow header to be missing from responses. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#allow_missing SyntheticMonitoringCheck#allow_missing}

---

### SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.header">header</a></code> | <code>string</code> | Header name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.regexp">regexp</a></code> | <code>string</code> | Regex that header value should match. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow header to be missing from responses. Defaults to `false`. |

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#header SyntheticMonitoringCheck#header}

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

Regex that header value should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#regexp SyntheticMonitoringCheck#regexp}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow header to be missing from responses. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#allow_missing SyntheticMonitoringCheck#allow_missing}

---

### SyntheticMonitoringCheckSettingsHttpTlsConfig <a name="SyntheticMonitoringCheckSettingsHttpTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsHttpTlsConfig: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.caCert">caCert</a></code> | <code>string</code> | CA certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.clientCert">clientCert</a></code> | <code>string</code> | Client certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.clientKey">clientKey</a></code> | <code>string</code> | Client key in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable target certificate validation. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.serverName">serverName</a></code> | <code>string</code> | Used to verify the hostname for the targets. |

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

Client certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

Client key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable target certificate validation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Used to verify the hostname for the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}

---

### SyntheticMonitoringCheckSettingsMultihttp <a name="SyntheticMonitoringCheckSettingsMultihttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttp: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]</code> | entries block. |

---

##### `entries`<sup>Optional</sup> <a name="entries" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp.property.entries"></a>

```typescript
public readonly entries: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#entries SyntheticMonitoringCheck#entries}

---

### SyntheticMonitoringCheckSettingsMultihttpEntries <a name="SyntheticMonitoringCheckSettingsMultihttpEntries" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntries: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.assertions">assertions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]</code> | assertions block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.request">request</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a></code> | request block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.variables">variables</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]</code> | variables block. |

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.assertions"></a>

```typescript
public readonly assertions: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]

assertions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#assertions SyntheticMonitoringCheck#assertions}

---

##### `request`<sup>Optional</sup> <a name="request" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.request"></a>

```typescript
public readonly request: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#request SyntheticMonitoringCheck#request}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries.property.variables"></a>

```typescript
public readonly variables: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#variables SyntheticMonitoringCheck#variables}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesAssertions: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.type">type</a></code> | <code>string</code> | The type of assertion to make: TEXT, JSON_PATH_VALUE, JSON_PATH_ASSERTION, REGEX_ASSERTION. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.condition">condition</a></code> | <code>string</code> | The condition of the assertion: NOT_CONTAINS, EQUALS, STARTS_WITH, ENDS_WITH, TYPE_OF, CONTAINS. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.expression">expression</a></code> | <code>string</code> | The expression of the assertion. Should start with $. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.subject">subject</a></code> | <code>string</code> | The subject of the assertion: RESPONSE_HEADERS, HTTP_STATUS_CODE, RESPONSE_BODY. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.value">value</a></code> | <code>string</code> | The value of the assertion. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of assertion to make: TEXT, JSON_PATH_VALUE, JSON_PATH_ASSERTION, REGEX_ASSERTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#type SyntheticMonitoringCheck#type}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition of the assertion: NOT_CONTAINS, EQUALS, STARTS_WITH, ENDS_WITH, TYPE_OF, CONTAINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#condition SyntheticMonitoringCheck#condition}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The expression of the assertion. Should start with $.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#expression SyntheticMonitoringCheck#expression}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The subject of the assertion: RESPONSE_HEADERS, HTTP_STATUS_CODE, RESPONSE_BODY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#subject SyntheticMonitoringCheck#subject}

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesRequest <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequest" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesRequest: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.method">method</a></code> | <code>string</code> | The HTTP method to use. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.url">url</a></code> | <code>string</code> | The URL for the request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.body">body</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]</code> | body block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]</code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.queryFields">queryFields</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]</code> | query_fields block. |

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#method SyntheticMonitoringCheck#method}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#url SyntheticMonitoringCheck#url}

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.body"></a>

```typescript
public readonly body: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#body SyntheticMonitoringCheck#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.headers"></a>

```typescript
public readonly headers: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#headers SyntheticMonitoringCheck#headers}

---

##### `queryFields`<sup>Optional</sup> <a name="queryFields" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest.property.queryFields"></a>

```typescript
public readonly queryFields: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]

query_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#query_fields SyntheticMonitoringCheck#query_fields}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesRequestBody: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | The content encoding of the body. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.contentType">contentType</a></code> | <code>string</code> | The content type of the body. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.payload">payload</a></code> | <code>string</code> | The body payload. |

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

The content encoding of the body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#content_encoding SyntheticMonitoringCheck#content_encoding}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type of the body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#content_type SyntheticMonitoringCheck#content_type}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

The body payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#payload SyntheticMonitoringCheck#payload}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders.property.name">name</a></code> | <code>string</code> | Name of the header to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders.property.value">value</a></code> | <code>string</code> | Value of the header to send. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the header to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the header to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields.property.name">name</a></code> | <code>string</code> | Name of the query field to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields.property.value">value</a></code> | <code>string</code> | Value of the query field to send. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the query field to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the query field to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}

---

### SyntheticMonitoringCheckSettingsMultihttpEntriesVariables <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesVariables" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsMultihttpEntriesVariables: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.type">type</a></code> | <code>string</code> | The method of finding the variable value to extract. JSON_PATH, REGEX, CSS_SELECTOR. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.attribute">attribute</a></code> | <code>string</code> | The attribute to use when finding the variable value. Only used when type is CSS_SELECTOR. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.expression">expression</a></code> | <code>string</code> | The expression to when finding the variable. Should start with $. Only use when type is JSON_PATH or REGEX. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.name">name</a></code> | <code>string</code> | The name of the variable to extract. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The method of finding the variable value to extract. JSON_PATH, REGEX, CSS_SELECTOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#type SyntheticMonitoringCheck#type}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

The attribute to use when finding the variable value. Only used when type is CSS_SELECTOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#attribute SyntheticMonitoringCheck#attribute}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The expression to when finding the variable. Should start with $. Only use when type is JSON_PATH or REGEX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#expression SyntheticMonitoringCheck#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the variable to extract.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}

---

### SyntheticMonitoringCheckSettingsPing <a name="SyntheticMonitoringCheckSettingsPing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsPing: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.dontFragment">dontFragment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the DF-bit in the IP-header. Only works with ipV4. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.ipVersion">ipVersion</a></code> | <code>string</code> | Options are `V4`, `V6`, `Any`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.payloadSize">payloadSize</a></code> | <code>number</code> | Payload size. Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | Source IP address. |

---

##### `dontFragment`<sup>Optional</sup> <a name="dontFragment" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.dontFragment"></a>

```typescript
public readonly dontFragment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the DF-bit in the IP-header. Only works with ipV4. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#dont_fragment SyntheticMonitoringCheck#dont_fragment}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Options are `V4`, `V6`, `Any`.

Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}

---

##### `payloadSize`<sup>Optional</sup> <a name="payloadSize" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.payloadSize"></a>

```typescript
public readonly payloadSize: number;
```

- *Type:* number

Payload size. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#payload_size SyntheticMonitoringCheck#payload_size}

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

Source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}

---

### SyntheticMonitoringCheckSettingsScripted <a name="SyntheticMonitoringCheckSettingsScripted" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsScripted: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}. |

---

##### `script`<sup>Required</sup> <a name="script" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}.

---

### SyntheticMonitoringCheckSettingsTcp <a name="SyntheticMonitoringCheckSettingsTcp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsTcp: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.ipVersion">ipVersion</a></code> | <code>string</code> | Options are `V4`, `V6`, `Any`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.queryResponse">queryResponse</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]</code> | query_response block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | Source IP address. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not TLS is used when the connection is initiated. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a></code> | tls_config block. |

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Options are `V4`, `V6`, `Any`.

Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}

---

##### `queryResponse`<sup>Optional</sup> <a name="queryResponse" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.queryResponse"></a>

```typescript
public readonly queryResponse: IResolvable | SyntheticMonitoringCheckSettingsTcpQueryResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]

query_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#query_response SyntheticMonitoringCheck#query_response}

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

Source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not TLS is used when the connection is initiated. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tls SyntheticMonitoringCheck#tls}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsTcpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}

---

### SyntheticMonitoringCheckSettingsTcpQueryResponse <a name="SyntheticMonitoringCheckSettingsTcpQueryResponse" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsTcpQueryResponse: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.expect">expect</a></code> | <code>string</code> | Response to expect. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.send">send</a></code> | <code>string</code> | Data to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Upgrade TCP connection to TLS. Defaults to `false`. |

---

##### `expect`<sup>Required</sup> <a name="expect" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.expect"></a>

```typescript
public readonly expect: string;
```

- *Type:* string

Response to expect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#expect SyntheticMonitoringCheck#expect}

---

##### `send`<sup>Required</sup> <a name="send" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.send"></a>

```typescript
public readonly send: string;
```

- *Type:* string

Data to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#send SyntheticMonitoringCheck#send}

---

##### `startTls`<sup>Optional</sup> <a name="startTls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Upgrade TCP connection to TLS. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#start_tls SyntheticMonitoringCheck#start_tls}

---

### SyntheticMonitoringCheckSettingsTcpTlsConfig <a name="SyntheticMonitoringCheckSettingsTcpTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsTcpTlsConfig: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.caCert">caCert</a></code> | <code>string</code> | CA certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.clientCert">clientCert</a></code> | <code>string</code> | Client certificate in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.clientKey">clientKey</a></code> | <code>string</code> | Client key in PEM format. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable target certificate validation. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.serverName">serverName</a></code> | <code>string</code> | Used to verify the hostname for the targets. |

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

Client certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

Client key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable target certificate validation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Used to verify the hostname for the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}

---

### SyntheticMonitoringCheckSettingsTraceroute <a name="SyntheticMonitoringCheckSettingsTraceroute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

const syntheticMonitoringCheckSettingsTraceroute: syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.maxHops">maxHops</a></code> | <code>number</code> | Maximum TTL for the trace Defaults to `64`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.maxUnknownHops">maxUnknownHops</a></code> | <code>number</code> | Maximum number of hosts to travers that give no response Defaults to `15`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.ptrLookup">ptrLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reverse lookup hostnames from IP addresses Defaults to `true`. |

---

##### `maxHops`<sup>Optional</sup> <a name="maxHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.maxHops"></a>

```typescript
public readonly maxHops: number;
```

- *Type:* number

Maximum TTL for the trace Defaults to `64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#max_hops SyntheticMonitoringCheck#max_hops}

---

##### `maxUnknownHops`<sup>Optional</sup> <a name="maxUnknownHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.maxUnknownHops"></a>

```typescript
public readonly maxUnknownHops: number;
```

- *Type:* number

Maximum number of hosts to travers that give no response Defaults to `15`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#max_unknown_hops SyntheticMonitoringCheck#max_unknown_hops}

---

##### `ptrLookup`<sup>Optional</sup> <a name="ptrLookup" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute.property.ptrLookup"></a>

```typescript
public readonly ptrLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reverse lookup hostnames from IP addresses Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/synthetic_monitoring_check#ptr_lookup SyntheticMonitoringCheck#ptr_lookup}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticMonitoringCheckSettingsBrowserOutputReference <a name="SyntheticMonitoringCheckSettingsBrowserOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsBrowser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a>

---


### SyntheticMonitoringCheckSettingsDnsOutputReference <a name="SyntheticMonitoringCheckSettingsDnsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAdditionalRrs">putValidateAdditionalRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAnswerRrs">putValidateAnswerRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAuthorityRrs">putValidateAuthorityRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetRecordType">resetRecordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetServer">resetServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAdditionalRrs">resetValidateAdditionalRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAnswerRrs">resetValidateAnswerRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAuthorityRrs">resetValidateAuthorityRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidRCodes">resetValidRCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValidateAdditionalRrs` <a name="putValidateAdditionalRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAdditionalRrs"></a>

```typescript
public putValidateAdditionalRrs(value: IResolvable | SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAdditionalRrs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]

---

##### `putValidateAnswerRrs` <a name="putValidateAnswerRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAnswerRrs"></a>

```typescript
public putValidateAnswerRrs(value: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAnswerRrs.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a>

---

##### `putValidateAuthorityRrs` <a name="putValidateAuthorityRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAuthorityRrs"></a>

```typescript
public putValidateAuthorityRrs(value: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.putValidateAuthorityRrs.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a>

---

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRecordType` <a name="resetRecordType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetRecordType"></a>

```typescript
public resetRecordType(): void
```

##### `resetServer` <a name="resetServer" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetServer"></a>

```typescript
public resetServer(): void
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetSourceIpAddress"></a>

```typescript
public resetSourceIpAddress(): void
```

##### `resetValidateAdditionalRrs` <a name="resetValidateAdditionalRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAdditionalRrs"></a>

```typescript
public resetValidateAdditionalRrs(): void
```

##### `resetValidateAnswerRrs` <a name="resetValidateAnswerRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAnswerRrs"></a>

```typescript
public resetValidateAnswerRrs(): void
```

##### `resetValidateAuthorityRrs` <a name="resetValidateAuthorityRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidateAuthorityRrs"></a>

```typescript
public resetValidateAuthorityRrs(): void
```

##### `resetValidRCodes` <a name="resetValidRCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.resetValidRCodes"></a>

```typescript
public resetValidRCodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAdditionalRrs">validateAdditionalRrs</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAnswerRrs">validateAnswerRrs</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAuthorityRrs">validateAuthorityRrs</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.recordTypeInput">recordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAdditionalRrsInput">validateAdditionalRrsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAnswerRrsInput">validateAnswerRrsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAuthorityRrsInput">validateAuthorityRrsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validRCodesInput">validRCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.recordType">recordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validRCodes">validRCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validateAdditionalRrs`<sup>Required</sup> <a name="validateAdditionalRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAdditionalRrs"></a>

```typescript
public readonly validateAdditionalRrs: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList</a>

---

##### `validateAnswerRrs`<sup>Required</sup> <a name="validateAnswerRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAnswerRrs"></a>

```typescript
public readonly validateAnswerRrs: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference</a>

---

##### `validateAuthorityRrs`<sup>Required</sup> <a name="validateAuthorityRrs" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAuthorityRrs"></a>

```typescript
public readonly validateAuthorityRrs: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference</a>

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `recordTypeInput`<sup>Optional</sup> <a name="recordTypeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.recordTypeInput"></a>

```typescript
public readonly recordTypeInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.sourceIpAddressInput"></a>

```typescript
public readonly sourceIpAddressInput: string;
```

- *Type:* string

---

##### `validateAdditionalRrsInput`<sup>Optional</sup> <a name="validateAdditionalRrsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAdditionalRrsInput"></a>

```typescript
public readonly validateAdditionalRrsInput: IResolvable | SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]

---

##### `validateAnswerRrsInput`<sup>Optional</sup> <a name="validateAnswerRrsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAnswerRrsInput"></a>

```typescript
public readonly validateAnswerRrsInput: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a>

---

##### `validateAuthorityRrsInput`<sup>Optional</sup> <a name="validateAuthorityRrsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validateAuthorityRrsInput"></a>

```typescript
public readonly validateAuthorityRrsInput: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a>

---

##### `validRCodesInput`<sup>Optional</sup> <a name="validRCodesInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validRCodesInput"></a>

```typescript
public readonly validRCodesInput: string[];
```

- *Type:* string[]

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

---

##### `validRCodes`<sup>Required</sup> <a name="validRCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.validRCodes"></a>

```typescript
public readonly validRCodes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a>

---


### SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList <a name="SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>[]

---


### SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference <a name="SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resetFailIfMatchesRegexp">resetFailIfMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resetFailIfNotMatchesRegexp">resetFailIfNotMatchesRegexp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailIfMatchesRegexp` <a name="resetFailIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resetFailIfMatchesRegexp"></a>

```typescript
public resetFailIfMatchesRegexp(): void
```

##### `resetFailIfNotMatchesRegexp` <a name="resetFailIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.resetFailIfNotMatchesRegexp"></a>

```typescript
public resetFailIfNotMatchesRegexp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfMatchesRegexpInput">failIfMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfNotMatchesRegexpInput">failIfNotMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failIfMatchesRegexpInput`<sup>Optional</sup> <a name="failIfMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfMatchesRegexpInput"></a>

```typescript
public readonly failIfMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexpInput`<sup>Optional</sup> <a name="failIfNotMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfNotMatchesRegexpInput"></a>

```typescript
public readonly failIfNotMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfMatchesRegexp`<sup>Required</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexp`<sup>Required</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs">SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs</a>

---


### SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference <a name="SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resetFailIfMatchesRegexp">resetFailIfMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resetFailIfNotMatchesRegexp">resetFailIfNotMatchesRegexp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailIfMatchesRegexp` <a name="resetFailIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resetFailIfMatchesRegexp"></a>

```typescript
public resetFailIfMatchesRegexp(): void
```

##### `resetFailIfNotMatchesRegexp` <a name="resetFailIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.resetFailIfNotMatchesRegexp"></a>

```typescript
public resetFailIfNotMatchesRegexp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfMatchesRegexpInput">failIfMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfNotMatchesRegexpInput">failIfNotMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failIfMatchesRegexpInput`<sup>Optional</sup> <a name="failIfMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfMatchesRegexpInput"></a>

```typescript
public readonly failIfMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexpInput`<sup>Optional</sup> <a name="failIfNotMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfNotMatchesRegexpInput"></a>

```typescript
public readonly failIfNotMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfMatchesRegexp`<sup>Required</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexp`<sup>Required</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs">SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs</a>

---


### SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference <a name="SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resetFailIfMatchesRegexp">resetFailIfMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resetFailIfNotMatchesRegexp">resetFailIfNotMatchesRegexp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailIfMatchesRegexp` <a name="resetFailIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resetFailIfMatchesRegexp"></a>

```typescript
public resetFailIfMatchesRegexp(): void
```

##### `resetFailIfNotMatchesRegexp` <a name="resetFailIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.resetFailIfNotMatchesRegexp"></a>

```typescript
public resetFailIfNotMatchesRegexp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfMatchesRegexpInput">failIfMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfNotMatchesRegexpInput">failIfNotMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfMatchesRegexp">failIfMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfNotMatchesRegexp">failIfNotMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failIfMatchesRegexpInput`<sup>Optional</sup> <a name="failIfMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfMatchesRegexpInput"></a>

```typescript
public readonly failIfMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexpInput`<sup>Optional</sup> <a name="failIfNotMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfNotMatchesRegexpInput"></a>

```typescript
public readonly failIfNotMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfMatchesRegexp`<sup>Required</sup> <a name="failIfMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfMatchesRegexp"></a>

```typescript
public readonly failIfMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `failIfNotMatchesRegexp`<sup>Required</sup> <a name="failIfNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.failIfNotMatchesRegexp"></a>

```typescript
public readonly failIfNotMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs">SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs</a>

---


### SyntheticMonitoringCheckSettingsGrpcOutputReference <a name="SyntheticMonitoringCheckSettingsGrpcOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsConfig` <a name="putTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: SyntheticMonitoringCheckSettingsGrpcTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a>

---

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTls` <a name="resetTls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference">SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference">SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference</a>

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: SyntheticMonitoringCheckSettingsGrpcTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsGrpc;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a>

---


### SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference <a name="SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetServerName">resetServerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetClientCert` <a name="resetClientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

##### `resetServerName` <a name="resetServerName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsGrpcTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcTlsConfig">SyntheticMonitoringCheckSettingsGrpcTlsConfig</a>

---


### SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference <a name="SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsHttpBasicAuth;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a>

---


### SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]

---


### SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowMissing` <a name="resetAllowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.resetAllowMissing"></a>

```typescript
public resetAllowMissing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.allowMissingInput">allowMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.regexpInput">regexpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.regexp">regexp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.allowMissingInput"></a>

```typescript
public readonly allowMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `regexpInput`<sup>Optional</sup> <a name="regexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.regexpInput"></a>

```typescript
public readonly regexpInput: string;
```

- *Type:* string

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>

---


### SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]

---


### SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference <a name="SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowMissing` <a name="resetAllowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.resetAllowMissing"></a>

```typescript
public resetAllowMissing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.allowMissingInput">allowMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.regexpInput">regexpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.regexp">regexp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.allowMissingInput"></a>

```typescript
public readonly allowMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `regexpInput`<sup>Optional</sup> <a name="regexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.regexpInput"></a>

```typescript
public readonly regexpInput: string;
```

- *Type:* string

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.regexp"></a>

```typescript
public readonly regexp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>

---


### SyntheticMonitoringCheckSettingsHttpOutputReference <a name="SyntheticMonitoringCheckSettingsHttpOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderMatchesRegexp">putFailIfHeaderMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderNotMatchesRegexp">putFailIfHeaderNotMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetCacheBustingQueryParamName">resetCacheBustingQueryParamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfBodyMatchesRegexp">resetFailIfBodyMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfBodyNotMatchesRegexp">resetFailIfBodyNotMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfHeaderMatchesRegexp">resetFailIfHeaderMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfHeaderNotMatchesRegexp">resetFailIfHeaderNotMatchesRegexp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfNotSsl">resetFailIfNotSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfSsl">resetFailIfSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetNoFollowRedirects">resetNoFollowRedirects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetProxyConnectHeaders">resetProxyConnectHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetValidHttpVersions">resetValidHttpVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetValidStatusCodes">resetValidStatusCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: SyntheticMonitoringCheckSettingsHttpBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a>

---

##### `putFailIfHeaderMatchesRegexp` <a name="putFailIfHeaderMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderMatchesRegexp"></a>

```typescript
public putFailIfHeaderMatchesRegexp(value: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderMatchesRegexp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]

---

##### `putFailIfHeaderNotMatchesRegexp` <a name="putFailIfHeaderNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderNotMatchesRegexp"></a>

```typescript
public putFailIfHeaderNotMatchesRegexp(value: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putFailIfHeaderNotMatchesRegexp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]

---

##### `putTlsConfig` <a name="putTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: SyntheticMonitoringCheckSettingsHttpTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```

##### `resetBearerToken` <a name="resetBearerToken" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBearerToken"></a>

```typescript
public resetBearerToken(): void
```

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetCacheBustingQueryParamName` <a name="resetCacheBustingQueryParamName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetCacheBustingQueryParamName"></a>

```typescript
public resetCacheBustingQueryParamName(): void
```

##### `resetCompression` <a name="resetCompression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetFailIfBodyMatchesRegexp` <a name="resetFailIfBodyMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfBodyMatchesRegexp"></a>

```typescript
public resetFailIfBodyMatchesRegexp(): void
```

##### `resetFailIfBodyNotMatchesRegexp` <a name="resetFailIfBodyNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfBodyNotMatchesRegexp"></a>

```typescript
public resetFailIfBodyNotMatchesRegexp(): void
```

##### `resetFailIfHeaderMatchesRegexp` <a name="resetFailIfHeaderMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfHeaderMatchesRegexp"></a>

```typescript
public resetFailIfHeaderMatchesRegexp(): void
```

##### `resetFailIfHeaderNotMatchesRegexp` <a name="resetFailIfHeaderNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfHeaderNotMatchesRegexp"></a>

```typescript
public resetFailIfHeaderNotMatchesRegexp(): void
```

##### `resetFailIfNotSsl` <a name="resetFailIfNotSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfNotSsl"></a>

```typescript
public resetFailIfNotSsl(): void
```

##### `resetFailIfSsl` <a name="resetFailIfSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetFailIfSsl"></a>

```typescript
public resetFailIfSsl(): void
```

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetMethod` <a name="resetMethod" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetNoFollowRedirects` <a name="resetNoFollowRedirects" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetNoFollowRedirects"></a>

```typescript
public resetNoFollowRedirects(): void
```

##### `resetProxyConnectHeaders` <a name="resetProxyConnectHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetProxyConnectHeaders"></a>

```typescript
public resetProxyConnectHeaders(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

##### `resetValidHttpVersions` <a name="resetValidHttpVersions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetValidHttpVersions"></a>

```typescript
public resetValidHttpVersions(): void
```

##### `resetValidStatusCodes` <a name="resetValidStatusCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.resetValidStatusCodes"></a>

```typescript
public resetValidStatusCodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference">SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderMatchesRegexp">failIfHeaderMatchesRegexp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderNotMatchesRegexp">failIfHeaderNotMatchesRegexp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference">SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.cacheBustingQueryParamNameInput">cacheBustingQueryParamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyMatchesRegexpInput">failIfBodyMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyNotMatchesRegexpInput">failIfBodyNotMatchesRegexpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderMatchesRegexpInput">failIfHeaderMatchesRegexpInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderNotMatchesRegexpInput">failIfHeaderNotMatchesRegexpInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfNotSslInput">failIfNotSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfSslInput">failIfSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.noFollowRedirectsInput">noFollowRedirectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyConnectHeadersInput">proxyConnectHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validHttpVersionsInput">validHttpVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validStatusCodesInput">validStatusCodesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bearerToken">bearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.cacheBustingQueryParamName">cacheBustingQueryParamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyMatchesRegexp">failIfBodyMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyNotMatchesRegexp">failIfBodyNotMatchesRegexp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfNotSsl">failIfNotSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfSsl">failIfSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.noFollowRedirects">noFollowRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyConnectHeaders">proxyConnectHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validHttpVersions">validHttpVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validStatusCodes">validStatusCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference">SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference</a>

---

##### `failIfHeaderMatchesRegexp`<sup>Required</sup> <a name="failIfHeaderMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderMatchesRegexp"></a>

```typescript
public readonly failIfHeaderMatchesRegexp: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList</a>

---

##### `failIfHeaderNotMatchesRegexp`<sup>Required</sup> <a name="failIfHeaderNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderNotMatchesRegexp"></a>

```typescript
public readonly failIfHeaderNotMatchesRegexp: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference">SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: SyntheticMonitoringCheckSettingsHttpBasicAuth;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpBasicAuth">SyntheticMonitoringCheckSettingsHttpBasicAuth</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bearerTokenInput"></a>

```typescript
public readonly bearerTokenInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `cacheBustingQueryParamNameInput`<sup>Optional</sup> <a name="cacheBustingQueryParamNameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.cacheBustingQueryParamNameInput"></a>

```typescript
public readonly cacheBustingQueryParamNameInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `failIfBodyMatchesRegexpInput`<sup>Optional</sup> <a name="failIfBodyMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyMatchesRegexpInput"></a>

```typescript
public readonly failIfBodyMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfBodyNotMatchesRegexpInput`<sup>Optional</sup> <a name="failIfBodyNotMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyNotMatchesRegexpInput"></a>

```typescript
public readonly failIfBodyNotMatchesRegexpInput: string[];
```

- *Type:* string[]

---

##### `failIfHeaderMatchesRegexpInput`<sup>Optional</sup> <a name="failIfHeaderMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderMatchesRegexpInput"></a>

```typescript
public readonly failIfHeaderMatchesRegexpInput: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp</a>[]

---

##### `failIfHeaderNotMatchesRegexpInput`<sup>Optional</sup> <a name="failIfHeaderNotMatchesRegexpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfHeaderNotMatchesRegexpInput"></a>

```typescript
public readonly failIfHeaderNotMatchesRegexpInput: IResolvable | SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp">SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp</a>[]

---

##### `failIfNotSslInput`<sup>Optional</sup> <a name="failIfNotSslInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfNotSslInput"></a>

```typescript
public readonly failIfNotSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failIfSslInput`<sup>Optional</sup> <a name="failIfSslInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfSslInput"></a>

```typescript
public readonly failIfSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `noFollowRedirectsInput`<sup>Optional</sup> <a name="noFollowRedirectsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.noFollowRedirectsInput"></a>

```typescript
public readonly noFollowRedirectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proxyConnectHeadersInput`<sup>Optional</sup> <a name="proxyConnectHeadersInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyConnectHeadersInput"></a>

```typescript
public readonly proxyConnectHeadersInput: string[];
```

- *Type:* string[]

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: SyntheticMonitoringCheckSettingsHttpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a>

---

##### `validHttpVersionsInput`<sup>Optional</sup> <a name="validHttpVersionsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validHttpVersionsInput"></a>

```typescript
public readonly validHttpVersionsInput: string[];
```

- *Type:* string[]

---

##### `validStatusCodesInput`<sup>Optional</sup> <a name="validStatusCodesInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validStatusCodesInput"></a>

```typescript
public readonly validStatusCodesInput: number[];
```

- *Type:* number[]

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.bearerToken"></a>

```typescript
public readonly bearerToken: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `cacheBustingQueryParamName`<sup>Required</sup> <a name="cacheBustingQueryParamName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.cacheBustingQueryParamName"></a>

```typescript
public readonly cacheBustingQueryParamName: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `failIfBodyMatchesRegexp`<sup>Required</sup> <a name="failIfBodyMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyMatchesRegexp"></a>

```typescript
public readonly failIfBodyMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `failIfBodyNotMatchesRegexp`<sup>Required</sup> <a name="failIfBodyNotMatchesRegexp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfBodyNotMatchesRegexp"></a>

```typescript
public readonly failIfBodyNotMatchesRegexp: string[];
```

- *Type:* string[]

---

##### `failIfNotSsl`<sup>Required</sup> <a name="failIfNotSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfNotSsl"></a>

```typescript
public readonly failIfNotSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failIfSsl`<sup>Required</sup> <a name="failIfSsl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.failIfSsl"></a>

```typescript
public readonly failIfSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `noFollowRedirects`<sup>Required</sup> <a name="noFollowRedirects" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.noFollowRedirects"></a>

```typescript
public readonly noFollowRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proxyConnectHeaders`<sup>Required</sup> <a name="proxyConnectHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyConnectHeaders"></a>

```typescript
public readonly proxyConnectHeaders: string[];
```

- *Type:* string[]

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `validHttpVersions`<sup>Required</sup> <a name="validHttpVersions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validHttpVersions"></a>

```typescript
public readonly validHttpVersions: string[];
```

- *Type:* string[]

---

##### `validStatusCodes`<sup>Required</sup> <a name="validStatusCodes" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.validStatusCodes"></a>

```typescript
public readonly validStatusCodes: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsHttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a>

---


### SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference <a name="SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetServerName">resetServerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetClientCert` <a name="resetClientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

##### `resetServerName` <a name="resetServerName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsHttpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpTlsConfig">SyntheticMonitoringCheckSettingsHttpTlsConfig</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetExpression` <a name="resetExpression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetSubject` <a name="resetSubject" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putAssertions">putAssertions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetAssertions">resetAssertions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssertions` <a name="putAssertions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putAssertions"></a>

```typescript
public putAssertions(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putAssertions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]

---

##### `putRequest` <a name="putRequest" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putRequest"></a>

```typescript
public putRequest(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putRequest.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a>

---

##### `putVariables` <a name="putVariables" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putVariables"></a>

```typescript
public putVariables(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.putVariables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]

---

##### `resetAssertions` <a name="resetAssertions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetAssertions"></a>

```typescript
public resetAssertions(): void
```

##### `resetRequest` <a name="resetRequest" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetVariables` <a name="resetVariables" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.assertions">assertions</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.request">request</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList">SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.assertionsInput">assertionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.requestInput">requestInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.variablesInput">variablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.assertions"></a>

```typescript
public readonly assertions: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList</a>

---

##### `request`<sup>Required</sup> <a name="request" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.request"></a>

```typescript
public readonly request: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.variables"></a>

```typescript
public readonly variables: SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList">SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList</a>

---

##### `assertionsInput`<sup>Optional</sup> <a name="assertionsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.assertionsInput"></a>

```typescript
public readonly assertionsInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions">SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions</a>[]

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntries;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentEncoding` <a name="resetContentEncoding" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentType` <a name="resetContentType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetPayload` <a name="resetPayload" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putQueryFields">putQueryFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetQueryFields">resetQueryFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putBody"></a>

```typescript
public putBody(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]

---

##### `putHeaders` <a name="putHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]

---

##### `putQueryFields` <a name="putQueryFields" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putQueryFields"></a>

```typescript
public putQueryFields(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.putQueryFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]

---

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryFields` <a name="resetQueryFields" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.resetQueryFields"></a>

```typescript
public resetQueryFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.queryFields">queryFields</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.queryFieldsInput">queryFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.body"></a>

```typescript
public readonly body: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.headers"></a>

```typescript
public readonly headers: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList</a>

---

##### `queryFields`<sup>Required</sup> <a name="queryFields" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.queryFields"></a>

```typescript
public readonly queryFields: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody</a>[]

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `queryFieldsInput`<sup>Optional</sup> <a name="queryFieldsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.queryFieldsInput"></a>

```typescript
public readonly queryFieldsInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequest">SyntheticMonitoringCheckSettingsMultihttpEntriesRequest</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields">SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields</a>

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>[]

---


### SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetExpression` <a name="resetExpression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntriesVariables;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesVariables">SyntheticMonitoringCheckSettingsMultihttpEntriesVariables</a>

---


### SyntheticMonitoringCheckSettingsMultihttpOutputReference <a name="SyntheticMonitoringCheckSettingsMultihttpOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntries` <a name="putEntries" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.putEntries"></a>

```typescript
public putEntries(value: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]

---

##### `resetEntries` <a name="resetEntries" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.resetEntries"></a>

```typescript
public resetEntries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.entries">entries</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList">SyntheticMonitoringCheckSettingsMultihttpEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.entries"></a>

```typescript
public readonly entries: SyntheticMonitoringCheckSettingsMultihttpEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntriesList">SyntheticMonitoringCheckSettingsMultihttpEntriesList</a>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | SyntheticMonitoringCheckSettingsMultihttpEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpEntries">SyntheticMonitoringCheckSettingsMultihttpEntries</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsMultihttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a>

---


### SyntheticMonitoringCheckSettingsOutputReference <a name="SyntheticMonitoringCheckSettingsOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putBrowser">putBrowser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putMultihttp">putMultihttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putPing">putPing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putScripted">putScripted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTcp">putTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTraceroute">putTraceroute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetBrowser">resetBrowser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetMultihttp">resetMultihttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetPing">resetPing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetScripted">resetScripted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetTcp">resetTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetTraceroute">resetTraceroute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBrowser` <a name="putBrowser" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putBrowser"></a>

```typescript
public putBrowser(value: SyntheticMonitoringCheckSettingsBrowser): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putBrowser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a>

---

##### `putDns` <a name="putDns" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putDns"></a>

```typescript
public putDns(value: SyntheticMonitoringCheckSettingsDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a>

---

##### `putGrpc` <a name="putGrpc" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: SyntheticMonitoringCheckSettingsGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a>

---

##### `putHttp` <a name="putHttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putHttp"></a>

```typescript
public putHttp(value: SyntheticMonitoringCheckSettingsHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a>

---

##### `putMultihttp` <a name="putMultihttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putMultihttp"></a>

```typescript
public putMultihttp(value: SyntheticMonitoringCheckSettingsMultihttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putMultihttp.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a>

---

##### `putPing` <a name="putPing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putPing"></a>

```typescript
public putPing(value: SyntheticMonitoringCheckSettingsPing): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putPing.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a>

---

##### `putScripted` <a name="putScripted" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putScripted"></a>

```typescript
public putScripted(value: SyntheticMonitoringCheckSettingsScripted): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putScripted.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a>

---

##### `putTcp` <a name="putTcp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTcp"></a>

```typescript
public putTcp(value: SyntheticMonitoringCheckSettingsTcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTcp.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a>

---

##### `putTraceroute` <a name="putTraceroute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTraceroute"></a>

```typescript
public putTraceroute(value: SyntheticMonitoringCheckSettingsTraceroute): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.putTraceroute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a>

---

##### `resetBrowser` <a name="resetBrowser" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetBrowser"></a>

```typescript
public resetBrowser(): void
```

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetGrpc` <a name="resetGrpc" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttp` <a name="resetHttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetHttp"></a>

```typescript
public resetHttp(): void
```

##### `resetMultihttp` <a name="resetMultihttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetMultihttp"></a>

```typescript
public resetMultihttp(): void
```

##### `resetPing` <a name="resetPing" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetPing"></a>

```typescript
public resetPing(): void
```

##### `resetScripted` <a name="resetScripted" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetScripted"></a>

```typescript
public resetScripted(): void
```

##### `resetTcp` <a name="resetTcp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetTcp"></a>

```typescript
public resetTcp(): void
```

##### `resetTraceroute` <a name="resetTraceroute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.resetTraceroute"></a>

```typescript
public resetTraceroute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.browser">browser</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference">SyntheticMonitoringCheckSettingsBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference">SyntheticMonitoringCheckSettingsDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.grpc">grpc</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference">SyntheticMonitoringCheckSettingsGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.http">http</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference">SyntheticMonitoringCheckSettingsHttpOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.multihttp">multihttp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference">SyntheticMonitoringCheckSettingsMultihttpOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.ping">ping</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference">SyntheticMonitoringCheckSettingsPingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.scripted">scripted</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference">SyntheticMonitoringCheckSettingsScriptedOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tcp">tcp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference">SyntheticMonitoringCheckSettingsTcpOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.traceroute">traceroute</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference">SyntheticMonitoringCheckSettingsTracerouteOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.browserInput">browserInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.dnsInput">dnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.multihttpInput">multihttpInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.pingInput">pingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.scriptedInput">scriptedInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tcpInput">tcpInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tracerouteInput">tracerouteInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browser`<sup>Required</sup> <a name="browser" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.browser"></a>

```typescript
public readonly browser: SyntheticMonitoringCheckSettingsBrowserOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowserOutputReference">SyntheticMonitoringCheckSettingsBrowserOutputReference</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.dns"></a>

```typescript
public readonly dns: SyntheticMonitoringCheckSettingsDnsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDnsOutputReference">SyntheticMonitoringCheckSettingsDnsOutputReference</a>

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.grpc"></a>

```typescript
public readonly grpc: SyntheticMonitoringCheckSettingsGrpcOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpcOutputReference">SyntheticMonitoringCheckSettingsGrpcOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.http"></a>

```typescript
public readonly http: SyntheticMonitoringCheckSettingsHttpOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttpOutputReference">SyntheticMonitoringCheckSettingsHttpOutputReference</a>

---

##### `multihttp`<sup>Required</sup> <a name="multihttp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.multihttp"></a>

```typescript
public readonly multihttp: SyntheticMonitoringCheckSettingsMultihttpOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttpOutputReference">SyntheticMonitoringCheckSettingsMultihttpOutputReference</a>

---

##### `ping`<sup>Required</sup> <a name="ping" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.ping"></a>

```typescript
public readonly ping: SyntheticMonitoringCheckSettingsPingOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference">SyntheticMonitoringCheckSettingsPingOutputReference</a>

---

##### `scripted`<sup>Required</sup> <a name="scripted" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.scripted"></a>

```typescript
public readonly scripted: SyntheticMonitoringCheckSettingsScriptedOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference">SyntheticMonitoringCheckSettingsScriptedOutputReference</a>

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tcp"></a>

```typescript
public readonly tcp: SyntheticMonitoringCheckSettingsTcpOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference">SyntheticMonitoringCheckSettingsTcpOutputReference</a>

---

##### `traceroute`<sup>Required</sup> <a name="traceroute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.traceroute"></a>

```typescript
public readonly traceroute: SyntheticMonitoringCheckSettingsTracerouteOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference">SyntheticMonitoringCheckSettingsTracerouteOutputReference</a>

---

##### `browserInput`<sup>Optional</sup> <a name="browserInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.browserInput"></a>

```typescript
public readonly browserInput: SyntheticMonitoringCheckSettingsBrowser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsBrowser">SyntheticMonitoringCheckSettingsBrowser</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: SyntheticMonitoringCheckSettingsDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsDns">SyntheticMonitoringCheckSettingsDns</a>

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: SyntheticMonitoringCheckSettingsGrpc;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsGrpc">SyntheticMonitoringCheckSettingsGrpc</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: SyntheticMonitoringCheckSettingsHttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsHttp">SyntheticMonitoringCheckSettingsHttp</a>

---

##### `multihttpInput`<sup>Optional</sup> <a name="multihttpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.multihttpInput"></a>

```typescript
public readonly multihttpInput: SyntheticMonitoringCheckSettingsMultihttp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsMultihttp">SyntheticMonitoringCheckSettingsMultihttp</a>

---

##### `pingInput`<sup>Optional</sup> <a name="pingInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.pingInput"></a>

```typescript
public readonly pingInput: SyntheticMonitoringCheckSettingsPing;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a>

---

##### `scriptedInput`<sup>Optional</sup> <a name="scriptedInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.scriptedInput"></a>

```typescript
public readonly scriptedInput: SyntheticMonitoringCheckSettingsScripted;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a>

---

##### `tcpInput`<sup>Optional</sup> <a name="tcpInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tcpInput"></a>

```typescript
public readonly tcpInput: SyntheticMonitoringCheckSettingsTcp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a>

---

##### `tracerouteInput`<sup>Optional</sup> <a name="tracerouteInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.tracerouteInput"></a>

```typescript
public readonly tracerouteInput: SyntheticMonitoringCheckSettingsTraceroute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettings">SyntheticMonitoringCheckSettings</a>

---


### SyntheticMonitoringCheckSettingsPingOutputReference <a name="SyntheticMonitoringCheckSettingsPingOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetDontFragment">resetDontFragment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetPayloadSize">resetPayloadSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDontFragment` <a name="resetDontFragment" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetDontFragment"></a>

```typescript
public resetDontFragment(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPayloadSize` <a name="resetPayloadSize" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetPayloadSize"></a>

```typescript
public resetPayloadSize(): void
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.resetSourceIpAddress"></a>

```typescript
public resetSourceIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.dontFragmentInput">dontFragmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.payloadSizeInput">payloadSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.dontFragment">dontFragment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.payloadSize">payloadSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dontFragmentInput`<sup>Optional</sup> <a name="dontFragmentInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.dontFragmentInput"></a>

```typescript
public readonly dontFragmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `payloadSizeInput`<sup>Optional</sup> <a name="payloadSizeInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.payloadSizeInput"></a>

```typescript
public readonly payloadSizeInput: number;
```

- *Type:* number

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.sourceIpAddressInput"></a>

```typescript
public readonly sourceIpAddressInput: string;
```

- *Type:* string

---

##### `dontFragment`<sup>Required</sup> <a name="dontFragment" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.dontFragment"></a>

```typescript
public readonly dontFragment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `payloadSize`<sup>Required</sup> <a name="payloadSize" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.payloadSize"></a>

```typescript
public readonly payloadSize: number;
```

- *Type:* number

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsPing;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsPing">SyntheticMonitoringCheckSettingsPing</a>

---


### SyntheticMonitoringCheckSettingsScriptedOutputReference <a name="SyntheticMonitoringCheckSettingsScriptedOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScriptedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsScripted;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsScripted">SyntheticMonitoringCheckSettingsScripted</a>

---


### SyntheticMonitoringCheckSettingsTcpOutputReference <a name="SyntheticMonitoringCheckSettingsTcpOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putQueryResponse">putQueryResponse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetQueryResponse">resetQueryResponse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryResponse` <a name="putQueryResponse" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putQueryResponse"></a>

```typescript
public putQueryResponse(value: IResolvable | SyntheticMonitoringCheckSettingsTcpQueryResponse[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putQueryResponse.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]

---

##### `putTlsConfig` <a name="putTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: SyntheticMonitoringCheckSettingsTcpTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a>

---

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetQueryResponse` <a name="resetQueryResponse" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetQueryResponse"></a>

```typescript
public resetQueryResponse(): void
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetSourceIpAddress"></a>

```typescript
public resetSourceIpAddress(): void
```

##### `resetTls` <a name="resetTls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.queryResponse">queryResponse</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList">SyntheticMonitoringCheckSettingsTcpQueryResponseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference">SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.queryResponseInput">queryResponseInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryResponse`<sup>Required</sup> <a name="queryResponse" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.queryResponse"></a>

```typescript
public readonly queryResponse: SyntheticMonitoringCheckSettingsTcpQueryResponseList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList">SyntheticMonitoringCheckSettingsTcpQueryResponseList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference">SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference</a>

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `queryResponseInput`<sup>Optional</sup> <a name="queryResponseInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.queryResponseInput"></a>

```typescript
public readonly queryResponseInput: IResolvable | SyntheticMonitoringCheckSettingsTcpQueryResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.sourceIpAddressInput"></a>

```typescript
public readonly sourceIpAddressInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: SyntheticMonitoringCheckSettingsTcpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsTcp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcp">SyntheticMonitoringCheckSettingsTcp</a>

---


### SyntheticMonitoringCheckSettingsTcpQueryResponseList <a name="SyntheticMonitoringCheckSettingsTcpQueryResponseList" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.get"></a>

```typescript
public get(index: number): SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsTcpQueryResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>[]

---


### SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference <a name="SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.resetStartTls">resetStartTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTls` <a name="resetStartTls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.resetStartTls"></a>

```typescript
public resetStartTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.expectInput">expectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.sendInput">sendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.startTlsInput">startTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.expect">expect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.send">send</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectInput`<sup>Optional</sup> <a name="expectInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.expectInput"></a>

```typescript
public readonly expectInput: string;
```

- *Type:* string

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.sendInput"></a>

```typescript
public readonly sendInput: string;
```

- *Type:* string

---

##### `startTlsInput`<sup>Optional</sup> <a name="startTlsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.startTlsInput"></a>

```typescript
public readonly startTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expect`<sup>Required</sup> <a name="expect" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.expect"></a>

```typescript
public readonly expect: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.send"></a>

```typescript
public readonly send: string;
```

- *Type:* string

---

##### `startTls`<sup>Required</sup> <a name="startTls" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticMonitoringCheckSettingsTcpQueryResponse;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpQueryResponse">SyntheticMonitoringCheckSettingsTcpQueryResponse</a>

---


### SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference <a name="SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetServerName">resetServerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetClientCert` <a name="resetClientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

##### `resetServerName` <a name="resetServerName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsTcpTlsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTcpTlsConfig">SyntheticMonitoringCheckSettingsTcpTlsConfig</a>

---


### SyntheticMonitoringCheckSettingsTracerouteOutputReference <a name="SyntheticMonitoringCheckSettingsTracerouteOutputReference" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.Initializer"></a>

```typescript
import { syntheticMonitoringCheck } from 'rhizo-co-terraform-provider-grafana'

new syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetMaxHops">resetMaxHops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetMaxUnknownHops">resetMaxUnknownHops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetPtrLookup">resetPtrLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxHops` <a name="resetMaxHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetMaxHops"></a>

```typescript
public resetMaxHops(): void
```

##### `resetMaxUnknownHops` <a name="resetMaxUnknownHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetMaxUnknownHops"></a>

```typescript
public resetMaxUnknownHops(): void
```

##### `resetPtrLookup` <a name="resetPtrLookup" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.resetPtrLookup"></a>

```typescript
public resetPtrLookup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxHopsInput">maxHopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxUnknownHopsInput">maxUnknownHopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.ptrLookupInput">ptrLookupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxHops">maxHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxUnknownHops">maxUnknownHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.ptrLookup">ptrLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxHopsInput`<sup>Optional</sup> <a name="maxHopsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxHopsInput"></a>

```typescript
public readonly maxHopsInput: number;
```

- *Type:* number

---

##### `maxUnknownHopsInput`<sup>Optional</sup> <a name="maxUnknownHopsInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxUnknownHopsInput"></a>

```typescript
public readonly maxUnknownHopsInput: number;
```

- *Type:* number

---

##### `ptrLookupInput`<sup>Optional</sup> <a name="ptrLookupInput" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.ptrLookupInput"></a>

```typescript
public readonly ptrLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxHops`<sup>Required</sup> <a name="maxHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxHops"></a>

```typescript
public readonly maxHops: number;
```

- *Type:* number

---

##### `maxUnknownHops`<sup>Required</sup> <a name="maxUnknownHops" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.maxUnknownHops"></a>

```typescript
public readonly maxUnknownHops: number;
```

- *Type:* number

---

##### `ptrLookup`<sup>Required</sup> <a name="ptrLookup" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.ptrLookup"></a>

```typescript
public readonly ptrLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTracerouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticMonitoringCheckSettingsTraceroute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.syntheticMonitoringCheck.SyntheticMonitoringCheckSettingsTraceroute">SyntheticMonitoringCheckSettingsTraceroute</a>

---




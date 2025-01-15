# `grafana_machine_learning_alert`

Refer to the Terraform Registory for docs: [`grafana_machine_learning_alert`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert).

# `machineLearningAlert` Submodule <a name="`machineLearningAlert` Submodule" id="rhizo-co-terraform-provider-grafana.machineLearningAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningAlert <a name="MachineLearningAlert" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert grafana_machine_learning_alert}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer"></a>

```typescript
import { machineLearningAlert } from 'rhizo-co-terraform-provider-grafana'

new machineLearningAlert.MachineLearningAlert(scope: Construct, id: string, config: MachineLearningAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig">MachineLearningAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig">MachineLearningAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetAnomalyCondition">resetAnomalyCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetFor">resetFor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetNoDataState">resetNoDataState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetOutlierId">resetOutlierId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAnnotations` <a name="resetAnnotations" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAnomalyCondition` <a name="resetAnomalyCondition" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetAnomalyCondition"></a>

```typescript
public resetAnomalyCondition(): void
```

##### `resetFor` <a name="resetFor" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetFor"></a>

```typescript
public resetFor(): void
```

##### `resetJobId` <a name="resetJobId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNoDataState` <a name="resetNoDataState" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetNoDataState"></a>

```typescript
public resetNoDataState(): void
```

##### `resetOutlierId` <a name="resetOutlierId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetOutlierId"></a>

```typescript
public resetOutlierId(): void
```

##### `resetThreshold` <a name="resetThreshold" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetWindow` <a name="resetWindow" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.resetWindow"></a>

```typescript
public resetWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isConstruct"></a>

```typescript
import { machineLearningAlert } from 'rhizo-co-terraform-provider-grafana'

machineLearningAlert.MachineLearningAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformElement"></a>

```typescript
import { machineLearningAlert } from 'rhizo-co-terraform-provider-grafana'

machineLearningAlert.MachineLearningAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformResource"></a>

```typescript
import { machineLearningAlert } from 'rhizo-co-terraform-provider-grafana'

machineLearningAlert.MachineLearningAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.anomalyConditionInput">anomalyConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.forInput">forInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.noDataStateInput">noDataStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.outlierIdInput">outlierIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.windowInput">windowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.anomalyCondition">anomalyCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.for">for</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.noDataState">noDataState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.outlierId">outlierId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.window">window</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anomalyConditionInput`<sup>Optional</sup> <a name="anomalyConditionInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.anomalyConditionInput"></a>

```typescript
public readonly anomalyConditionInput: string;
```

- *Type:* string

---

##### `forInput`<sup>Optional</sup> <a name="forInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.forInput"></a>

```typescript
public readonly forInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noDataStateInput`<sup>Optional</sup> <a name="noDataStateInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.noDataStateInput"></a>

```typescript
public readonly noDataStateInput: string;
```

- *Type:* string

---

##### `outlierIdInput`<sup>Optional</sup> <a name="outlierIdInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.outlierIdInput"></a>

```typescript
public readonly outlierIdInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.windowInput"></a>

```typescript
public readonly windowInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anomalyCondition`<sup>Required</sup> <a name="anomalyCondition" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.anomalyCondition"></a>

```typescript
public readonly anomalyCondition: string;
```

- *Type:* string

---

##### `for`<sup>Required</sup> <a name="for" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noDataState`<sup>Required</sup> <a name="noDataState" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.noDataState"></a>

```typescript
public readonly noDataState: string;
```

- *Type:* string

---

##### `outlierId`<sup>Required</sup> <a name="outlierId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.outlierId"></a>

```typescript
public readonly outlierId: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `window`<sup>Required</sup> <a name="window" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.window"></a>

```typescript
public readonly window: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningAlertConfig <a name="MachineLearningAlertConfig" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.Initializer"></a>

```typescript
import { machineLearningAlert } from 'rhizo-co-terraform-provider-grafana'

const machineLearningAlertConfig: machineLearningAlert.MachineLearningAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.title">title</a></code> | <code>string</code> | The title of the alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations to add to the alert generated in Grafana. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.anomalyCondition">anomalyCondition</a></code> | <code>string</code> | The condition for when to consider a point as anomalous. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.for">for</a></code> | <code>string</code> | How long values must be anomalous before firing an alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.jobId">jobId</a></code> | <code>string</code> | The forecast this alert belongs to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to add to the alert generated in Grafana. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.noDataState">noDataState</a></code> | <code>string</code> | How the alert should be processed when no data is returned by the underlying series. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.outlierId">outlierId</a></code> | <code>string</code> | The forecast this alert belongs to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.threshold">threshold</a></code> | <code>string</code> | The threshold of points over the window that need to be anomalous to alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.window">window</a></code> | <code>string</code> | How much time to average values over. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#title MachineLearningAlert#title}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations to add to the alert generated in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#annotations MachineLearningAlert#annotations}

---

##### `anomalyCondition`<sup>Optional</sup> <a name="anomalyCondition" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.anomalyCondition"></a>

```typescript
public readonly anomalyCondition: string;
```

- *Type:* string

The condition for when to consider a point as anomalous.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#anomaly_condition MachineLearningAlert#anomaly_condition}

---

##### `for`<sup>Optional</sup> <a name="for" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

How long values must be anomalous before firing an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#for MachineLearningAlert#for}

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The forecast this alert belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#job_id MachineLearningAlert#job_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to add to the alert generated in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#labels MachineLearningAlert#labels}

---

##### `noDataState`<sup>Optional</sup> <a name="noDataState" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.noDataState"></a>

```typescript
public readonly noDataState: string;
```

- *Type:* string

How the alert should be processed when no data is returned by the underlying series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#no_data_state MachineLearningAlert#no_data_state}

---

##### `outlierId`<sup>Optional</sup> <a name="outlierId" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.outlierId"></a>

```typescript
public readonly outlierId: string;
```

- *Type:* string

The forecast this alert belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#outlier_id MachineLearningAlert#outlier_id}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

The threshold of points over the window that need to be anomalous to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#threshold MachineLearningAlert#threshold}

---

##### `window`<sup>Optional</sup> <a name="window" id="rhizo-co-terraform-provider-grafana.machineLearningAlert.MachineLearningAlertConfig.property.window"></a>

```typescript
public readonly window: string;
```

- *Type:* string

How much time to average values over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_alert#window MachineLearningAlert#window}

---




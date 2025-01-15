# `grafana_machine_learning_job`

Refer to the Terraform Registory for docs: [`grafana_machine_learning_job`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job).

# `machineLearningJob` Submodule <a name="`machineLearningJob` Submodule" id="rhizo-co-terraform-provider-grafana.machineLearningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningJob <a name="MachineLearningJob" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job grafana_machine_learning_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer"></a>

```typescript
import { machineLearningJob } from 'rhizo-co-terraform-provider-grafana'

new machineLearningJob.MachineLearningJob(scope: Construct, id: string, config: MachineLearningJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig">MachineLearningJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig">MachineLearningJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetCustomLabels">resetCustomLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetHolidays">resetHolidays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetHyperParams">resetHyperParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetTrainingWindow">resetTrainingWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCustomLabels` <a name="resetCustomLabels" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetCustomLabels"></a>

```typescript
public resetCustomLabels(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHolidays` <a name="resetHolidays" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetHolidays"></a>

```typescript
public resetHolidays(): void
```

##### `resetHyperParams` <a name="resetHyperParams" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetHyperParams"></a>

```typescript
public resetHyperParams(): void
```

##### `resetInterval` <a name="resetInterval" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetTrainingWindow` <a name="resetTrainingWindow" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.resetTrainingWindow"></a>

```typescript
public resetTrainingWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isConstruct"></a>

```typescript
import { machineLearningJob } from 'rhizo-co-terraform-provider-grafana'

machineLearningJob.MachineLearningJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformElement"></a>

```typescript
import { machineLearningJob } from 'rhizo-co-terraform-provider-grafana'

machineLearningJob.MachineLearningJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformResource"></a>

```typescript
import { machineLearningJob } from 'rhizo-co-terraform-provider-grafana'

machineLearningJob.MachineLearningJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.customLabelsInput">customLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceTypeInput">datasourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceUidInput">datasourceUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.holidaysInput">holidaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.hyperParamsInput">hyperParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.queryParamsInput">queryParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.trainingWindowInput">trainingWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.customLabels">customLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceType">datasourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.holidays">holidays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.hyperParams">hyperParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.queryParams">queryParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.trainingWindow">trainingWindow</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `customLabelsInput`<sup>Optional</sup> <a name="customLabelsInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.customLabelsInput"></a>

```typescript
public readonly customLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datasourceTypeInput`<sup>Optional</sup> <a name="datasourceTypeInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceTypeInput"></a>

```typescript
public readonly datasourceTypeInput: string;
```

- *Type:* string

---

##### `datasourceUidInput`<sup>Optional</sup> <a name="datasourceUidInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceUidInput"></a>

```typescript
public readonly datasourceUidInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `holidaysInput`<sup>Optional</sup> <a name="holidaysInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.holidaysInput"></a>

```typescript
public readonly holidaysInput: string[];
```

- *Type:* string[]

---

##### `hyperParamsInput`<sup>Optional</sup> <a name="hyperParamsInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.hyperParamsInput"></a>

```typescript
public readonly hyperParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trainingWindowInput`<sup>Optional</sup> <a name="trainingWindowInput" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.trainingWindowInput"></a>

```typescript
public readonly trainingWindowInput: number;
```

- *Type:* number

---

##### `customLabels`<sup>Required</sup> <a name="customLabels" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.customLabels"></a>

```typescript
public readonly customLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datasourceType`<sup>Required</sup> <a name="datasourceType" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceType"></a>

```typescript
public readonly datasourceType: string;
```

- *Type:* string

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `holidays`<sup>Required</sup> <a name="holidays" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.holidays"></a>

```typescript
public readonly holidays: string[];
```

- *Type:* string[]

---

##### `hyperParams`<sup>Required</sup> <a name="hyperParams" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.hyperParams"></a>

```typescript
public readonly hyperParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.queryParams"></a>

```typescript
public readonly queryParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trainingWindow`<sup>Required</sup> <a name="trainingWindow" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.trainingWindow"></a>

```typescript
public readonly trainingWindow: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningJobConfig <a name="MachineLearningJobConfig" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.Initializer"></a>

```typescript
import { machineLearningJob } from 'rhizo-co-terraform-provider-grafana'

const machineLearningJobConfig: machineLearningJob.MachineLearningJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.datasourceType">datasourceType</a></code> | <code>string</code> | The type of datasource being queried. Currently allowed values are prometheus, graphite, loki, postgres, and datadog. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | The uid of the datasource to query. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.metric">metric</a></code> | <code>string</code> | The metric used to query the job results. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.name">name</a></code> | <code>string</code> | The name of the job. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.queryParams">queryParams</a></code> | <code>{[ key: string ]: string}</code> | An object representing the query params to query Grafana with. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.customLabels">customLabels</a></code> | <code>{[ key: string ]: string}</code> | An object representing the custom labels added on the forecast. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.description">description</a></code> | <code>string</code> | A description of the job. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.holidays">holidays</a></code> | <code>string[]</code> | A list of holiday IDs or names to take into account when training the model. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.hyperParams">hyperParams</a></code> | <code>{[ key: string ]: string}</code> | The hyperparameters used to fine tune the algorithm. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.interval">interval</a></code> | <code>number</code> | The data interval in seconds to train the data on. Defaults to `300`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.trainingWindow">trainingWindow</a></code> | <code>number</code> | The data interval in seconds to train the data on. Defaults to `7776000`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasourceType`<sup>Required</sup> <a name="datasourceType" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.datasourceType"></a>

```typescript
public readonly datasourceType: string;
```

- *Type:* string

The type of datasource being queried. Currently allowed values are prometheus, graphite, loki, postgres, and datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#datasource_type MachineLearningJob#datasource_type}

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

The uid of the datasource to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#datasource_uid MachineLearningJob#datasource_uid}

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric used to query the job results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#metric MachineLearningJob#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#name MachineLearningJob#name}

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.queryParams"></a>

```typescript
public readonly queryParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object representing the query params to query Grafana with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#query_params MachineLearningJob#query_params}

---

##### `customLabels`<sup>Optional</sup> <a name="customLabels" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.customLabels"></a>

```typescript
public readonly customLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object representing the custom labels added on the forecast.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#custom_labels MachineLearningJob#custom_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#description MachineLearningJob#description}

---

##### `holidays`<sup>Optional</sup> <a name="holidays" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.holidays"></a>

```typescript
public readonly holidays: string[];
```

- *Type:* string[]

A list of holiday IDs or names to take into account when training the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#holidays MachineLearningJob#holidays}

---

##### `hyperParams`<sup>Optional</sup> <a name="hyperParams" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.hyperParams"></a>

```typescript
public readonly hyperParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The hyperparameters used to fine tune the algorithm.

See https://grafana.com/docs/grafana-cloud/alerting-and-irm/machine-learning/forecasts/models/ for the full list of available hyperparameters. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#hyper_params MachineLearningJob#hyper_params}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The data interval in seconds to train the data on. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#interval MachineLearningJob#interval}

---

##### `trainingWindow`<sup>Optional</sup> <a name="trainingWindow" id="rhizo-co-terraform-provider-grafana.machineLearningJob.MachineLearningJobConfig.property.trainingWindow"></a>

```typescript
public readonly trainingWindow: number;
```

- *Type:* number

The data interval in seconds to train the data on. Defaults to `7776000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_job#training_window MachineLearningJob#training_window}

---




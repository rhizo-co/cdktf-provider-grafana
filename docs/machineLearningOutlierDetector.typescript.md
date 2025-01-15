# `grafana_machine_learning_outlier_detector`

Refer to the Terraform Registory for docs: [`grafana_machine_learning_outlier_detector`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector).

# `machineLearningOutlierDetector` Submodule <a name="`machineLearningOutlierDetector` Submodule" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningOutlierDetector <a name="MachineLearningOutlierDetector" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector grafana_machine_learning_outlier_detector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

new machineLearningOutlierDetector.MachineLearningOutlierDetector(scope: Construct, id: string, config: MachineLearningOutlierDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig">MachineLearningOutlierDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig">MachineLearningOutlierDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.putAlgorithm">putAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAlgorithm` <a name="putAlgorithm" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.putAlgorithm"></a>

```typescript
public putAlgorithm(value: MachineLearningOutlierDetectorAlgorithm): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.putAlgorithm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInterval` <a name="resetInterval" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.resetInterval"></a>

```typescript
public resetInterval(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isConstruct"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

machineLearningOutlierDetector.MachineLearningOutlierDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformElement"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformResource"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.algorithm">algorithm</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference">MachineLearningOutlierDetectorAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.algorithmInput">algorithmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceTypeInput">datasourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceUidInput">datasourceUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.queryParamsInput">queryParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceType">datasourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.queryParams">queryParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.algorithm"></a>

```typescript
public readonly algorithm: MachineLearningOutlierDetectorAlgorithmOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference">MachineLearningOutlierDetectorAlgorithmOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: MachineLearningOutlierDetectorAlgorithm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a>

---

##### `datasourceTypeInput`<sup>Optional</sup> <a name="datasourceTypeInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceTypeInput"></a>

```typescript
public readonly datasourceTypeInput: string;
```

- *Type:* string

---

##### `datasourceUidInput`<sup>Optional</sup> <a name="datasourceUidInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceUidInput"></a>

```typescript
public readonly datasourceUidInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datasourceType`<sup>Required</sup> <a name="datasourceType" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceType"></a>

```typescript
public readonly datasourceType: string;
```

- *Type:* string

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.queryParams"></a>

```typescript
public readonly queryParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningOutlierDetectorAlgorithm <a name="MachineLearningOutlierDetectorAlgorithm" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

const machineLearningOutlierDetectorAlgorithm: machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.name">name</a></code> | <code>string</code> | The name of the algorithm to use ('mad' or 'dbscan'). |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.sensitivity">sensitivity</a></code> | <code>number</code> | Specify the sensitivity of the detector (in range [0,1]). |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a></code> | config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the algorithm to use ('mad' or 'dbscan').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#name MachineLearningOutlierDetector#name}

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.sensitivity"></a>

```typescript
public readonly sensitivity: number;
```

- *Type:* number

Specify the sensitivity of the detector (in range [0,1]).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#sensitivity MachineLearningOutlierDetector#sensitivity}

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm.property.config"></a>

```typescript
public readonly config: MachineLearningOutlierDetectorAlgorithmConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#config MachineLearningOutlierDetector#config}

---

### MachineLearningOutlierDetectorAlgorithmConfig <a name="MachineLearningOutlierDetectorAlgorithmConfig" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

const machineLearningOutlierDetectorAlgorithmConfig: machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig.property.epsilon">epsilon</a></code> | <code>number</code> | Specify the epsilon parameter (positive float). |

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

Specify the epsilon parameter (positive float).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#epsilon MachineLearningOutlierDetector#epsilon}

---

### MachineLearningOutlierDetectorConfig <a name="MachineLearningOutlierDetectorConfig" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

const machineLearningOutlierDetectorConfig: machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.algorithm">algorithm</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a></code> | algorithm block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.datasourceType">datasourceType</a></code> | <code>string</code> | The type of datasource being queried. Currently allowed values are prometheus, graphite, loki, postgres, and datadog. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | The uid of the datasource to query. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.metric">metric</a></code> | <code>string</code> | The metric used to query the outlier detector results. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.name">name</a></code> | <code>string</code> | The name of the outlier detector. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.queryParams">queryParams</a></code> | <code>{[ key: string ]: string}</code> | An object representing the query params to query Grafana with. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.description">description</a></code> | <code>string</code> | A description of the outlier detector. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.interval">interval</a></code> | <code>number</code> | The data interval in seconds to monitor. Defaults to `300`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.algorithm"></a>

```typescript
public readonly algorithm: MachineLearningOutlierDetectorAlgorithm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a>

algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#algorithm MachineLearningOutlierDetector#algorithm}

---

##### `datasourceType`<sup>Required</sup> <a name="datasourceType" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.datasourceType"></a>

```typescript
public readonly datasourceType: string;
```

- *Type:* string

The type of datasource being queried. Currently allowed values are prometheus, graphite, loki, postgres, and datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#datasource_type MachineLearningOutlierDetector#datasource_type}

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

The uid of the datasource to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#datasource_uid MachineLearningOutlierDetector#datasource_uid}

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric used to query the outlier detector results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#metric MachineLearningOutlierDetector#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the outlier detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#name MachineLearningOutlierDetector#name}

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.queryParams"></a>

```typescript
public readonly queryParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object representing the query params to query Grafana with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#query_params MachineLearningOutlierDetector#query_params}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the outlier detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#description MachineLearningOutlierDetector#description}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The data interval in seconds to monitor. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_outlier_detector#interval MachineLearningOutlierDetector#interval}

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningOutlierDetectorAlgorithmConfigOutputReference <a name="MachineLearningOutlierDetectorAlgorithmConfigOutputReference" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

new machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.epsilonInput">epsilonInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.epsilon">epsilon</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `epsilonInput`<sup>Optional</sup> <a name="epsilonInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.epsilonInput"></a>

```typescript
public readonly epsilonInput: number;
```

- *Type:* number

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningOutlierDetectorAlgorithmConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a>

---


### MachineLearningOutlierDetectorAlgorithmOutputReference <a name="MachineLearningOutlierDetectorAlgorithmOutputReference" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.Initializer"></a>

```typescript
import { machineLearningOutlierDetector } from 'rhizo-co-terraform-provider-grafana'

new machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.putConfig"></a>

```typescript
public putConfig(value: MachineLearningOutlierDetectorAlgorithmConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference">MachineLearningOutlierDetectorAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.configInput">configInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.sensitivityInput">sensitivityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.sensitivity">sensitivity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.config"></a>

```typescript
public readonly config: MachineLearningOutlierDetectorAlgorithmConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfigOutputReference">MachineLearningOutlierDetectorAlgorithmConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.configInput"></a>

```typescript
public readonly configInput: MachineLearningOutlierDetectorAlgorithmConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmConfig">MachineLearningOutlierDetectorAlgorithmConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sensitivityInput`<sup>Optional</sup> <a name="sensitivityInput" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.sensitivityInput"></a>

```typescript
public readonly sensitivityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.sensitivity"></a>

```typescript
public readonly sensitivity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningOutlierDetectorAlgorithm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningOutlierDetector.MachineLearningOutlierDetectorAlgorithm">MachineLearningOutlierDetectorAlgorithm</a>

---




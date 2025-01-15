# `grafana_machine_learning_holiday`

Refer to the Terraform Registory for docs: [`grafana_machine_learning_holiday`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday).

# `machineLearningHoliday` Submodule <a name="`machineLearningHoliday` Submodule" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningHoliday <a name="MachineLearningHoliday" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday grafana_machine_learning_holiday}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

new machineLearningHoliday.MachineLearningHoliday(scope: Construct, id: string, config: MachineLearningHolidayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig">MachineLearningHolidayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig">MachineLearningHolidayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.putCustomPeriods">putCustomPeriods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetCustomPeriods">resetCustomPeriods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetIcalTimezone">resetIcalTimezone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetIcalUrl">resetIcalUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomPeriods` <a name="putCustomPeriods" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.putCustomPeriods"></a>

```typescript
public putCustomPeriods(value: IResolvable | MachineLearningHolidayCustomPeriods[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.putCustomPeriods.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]

---

##### `resetCustomPeriods` <a name="resetCustomPeriods" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetCustomPeriods"></a>

```typescript
public resetCustomPeriods(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIcalTimezone` <a name="resetIcalTimezone" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetIcalTimezone"></a>

```typescript
public resetIcalTimezone(): void
```

##### `resetIcalUrl` <a name="resetIcalUrl" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.resetIcalUrl"></a>

```typescript
public resetIcalUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isConstruct"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

machineLearningHoliday.MachineLearningHoliday.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformElement"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

machineLearningHoliday.MachineLearningHoliday.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformResource"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

machineLearningHoliday.MachineLearningHoliday.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.customPeriods">customPeriods</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList">MachineLearningHolidayCustomPeriodsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.customPeriodsInput">customPeriodsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalTimezoneInput">icalTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalUrlInput">icalUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalTimezone">icalTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalUrl">icalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customPeriods`<sup>Required</sup> <a name="customPeriods" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.customPeriods"></a>

```typescript
public readonly customPeriods: MachineLearningHolidayCustomPeriodsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList">MachineLearningHolidayCustomPeriodsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `customPeriodsInput`<sup>Optional</sup> <a name="customPeriodsInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.customPeriodsInput"></a>

```typescript
public readonly customPeriodsInput: IResolvable | MachineLearningHolidayCustomPeriods[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `icalTimezoneInput`<sup>Optional</sup> <a name="icalTimezoneInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalTimezoneInput"></a>

```typescript
public readonly icalTimezoneInput: string;
```

- *Type:* string

---

##### `icalUrlInput`<sup>Optional</sup> <a name="icalUrlInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalUrlInput"></a>

```typescript
public readonly icalUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `icalTimezone`<sup>Required</sup> <a name="icalTimezone" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalTimezone"></a>

```typescript
public readonly icalTimezone: string;
```

- *Type:* string

---

##### `icalUrl`<sup>Required</sup> <a name="icalUrl" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.icalUrl"></a>

```typescript
public readonly icalUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHoliday.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningHolidayConfig <a name="MachineLearningHolidayConfig" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.Initializer"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

const machineLearningHolidayConfig: machineLearningHoliday.MachineLearningHolidayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.name">name</a></code> | <code>string</code> | The name of the holiday. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.customPeriods">customPeriods</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]</code> | custom_periods block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.description">description</a></code> | <code>string</code> | A description of the holiday. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.icalTimezone">icalTimezone</a></code> | <code>string</code> | The timezone to use for events in the iCal file pointed to by ical_url. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.icalUrl">icalUrl</a></code> | <code>string</code> | A URL to an iCal file containing all occurrences of the holiday. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the holiday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#name MachineLearningHoliday#name}

---

##### `customPeriods`<sup>Optional</sup> <a name="customPeriods" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.customPeriods"></a>

```typescript
public readonly customPeriods: IResolvable | MachineLearningHolidayCustomPeriods[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]

custom_periods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#custom_periods MachineLearningHoliday#custom_periods}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the holiday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#description MachineLearningHoliday#description}

---

##### `icalTimezone`<sup>Optional</sup> <a name="icalTimezone" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.icalTimezone"></a>

```typescript
public readonly icalTimezone: string;
```

- *Type:* string

The timezone to use for events in the iCal file pointed to by ical_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#ical_timezone MachineLearningHoliday#ical_timezone}

---

##### `icalUrl`<sup>Optional</sup> <a name="icalUrl" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayConfig.property.icalUrl"></a>

```typescript
public readonly icalUrl: string;
```

- *Type:* string

A URL to an iCal file containing all occurrences of the holiday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#ical_url MachineLearningHoliday#ical_url}

---

### MachineLearningHolidayCustomPeriods <a name="MachineLearningHolidayCustomPeriods" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.Initializer"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

const machineLearningHolidayCustomPeriods: machineLearningHoliday.MachineLearningHolidayCustomPeriods = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#end_time MachineLearningHoliday#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#start_time MachineLearningHoliday#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.name">name</a></code> | <code>string</code> | The name of the custom period. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#end_time MachineLearningHoliday#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#start_time MachineLearningHoliday#start_time}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the custom period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/machine_learning_holiday#name MachineLearningHoliday#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningHolidayCustomPeriodsList <a name="MachineLearningHolidayCustomPeriodsList" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

new machineLearningHoliday.MachineLearningHolidayCustomPeriodsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.get"></a>

```typescript
public get(index: number): MachineLearningHolidayCustomPeriodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningHolidayCustomPeriods[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>[]

---


### MachineLearningHolidayCustomPeriodsOutputReference <a name="MachineLearningHolidayCustomPeriodsOutputReference" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer"></a>

```typescript
import { machineLearningHoliday } from 'rhizo-co-terraform-provider-grafana'

new machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriodsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningHolidayCustomPeriods;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.machineLearningHoliday.MachineLearningHolidayCustomPeriods">MachineLearningHolidayCustomPeriods</a>

---




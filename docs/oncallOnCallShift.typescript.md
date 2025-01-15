# `grafana_oncall_on_call_shift`

Refer to the Terraform Registory for docs: [`grafana_oncall_on_call_shift`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift).

# `oncallOnCallShift` Submodule <a name="`oncallOnCallShift` Submodule" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallOnCallShift <a name="OncallOnCallShift" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift grafana_oncall_on_call_shift}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer"></a>

```typescript
import { oncallOnCallShift } from 'rhizo-co-terraform-provider-grafana'

new oncallOnCallShift.OncallOnCallShift(scope: Construct, id: string, config: OncallOnCallShiftConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig">OncallOnCallShiftConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig">OncallOnCallShiftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByDay">resetByDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByMonth">resetByMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByMonthday">resetByMonthday</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetRollingUsers">resetRollingUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetStartRotationFromUserIndex">resetStartRotationFromUserIndex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetUntil">resetUntil</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetUsers">resetUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetWeekStart">resetWeekStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetByDay` <a name="resetByDay" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByDay"></a>

```typescript
public resetByDay(): void
```

##### `resetByMonth` <a name="resetByMonth" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByMonth"></a>

```typescript
public resetByMonth(): void
```

##### `resetByMonthday` <a name="resetByMonthday" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetByMonthday"></a>

```typescript
public resetByMonthday(): void
```

##### `resetFrequency` <a name="resetFrequency" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterval` <a name="resetInterval" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLevel` <a name="resetLevel" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetRollingUsers` <a name="resetRollingUsers" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetRollingUsers"></a>

```typescript
public resetRollingUsers(): void
```

##### `resetStartRotationFromUserIndex` <a name="resetStartRotationFromUserIndex" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetStartRotationFromUserIndex"></a>

```typescript
public resetStartRotationFromUserIndex(): void
```

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetUntil` <a name="resetUntil" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetUntil"></a>

```typescript
public resetUntil(): void
```

##### `resetUsers` <a name="resetUsers" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetUsers"></a>

```typescript
public resetUsers(): void
```

##### `resetWeekStart` <a name="resetWeekStart" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.resetWeekStart"></a>

```typescript
public resetWeekStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isConstruct"></a>

```typescript
import { oncallOnCallShift } from 'rhizo-co-terraform-provider-grafana'

oncallOnCallShift.OncallOnCallShift.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformElement"></a>

```typescript
import { oncallOnCallShift } from 'rhizo-co-terraform-provider-grafana'

oncallOnCallShift.OncallOnCallShift.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformResource"></a>

```typescript
import { oncallOnCallShift } from 'rhizo-co-terraform-provider-grafana'

oncallOnCallShift.OncallOnCallShift.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byDayInput">byDayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthdayInput">byMonthdayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthInput">byMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.rollingUsersInput">rollingUsersInput</a></code> | <code>cdktf.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startRotationFromUserIndexInput">startRotationFromUserIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.untilInput">untilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.weekStartInput">weekStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byDay">byDay</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonth">byMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthday">byMonthday</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.rollingUsers">rollingUsers</a></code> | <code>cdktf.IResolvable \| string[][]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startRotationFromUserIndex">startRotationFromUserIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.weekStart">weekStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byDayInput`<sup>Optional</sup> <a name="byDayInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byDayInput"></a>

```typescript
public readonly byDayInput: string[];
```

- *Type:* string[]

---

##### `byMonthdayInput`<sup>Optional</sup> <a name="byMonthdayInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthdayInput"></a>

```typescript
public readonly byMonthdayInput: number[];
```

- *Type:* number[]

---

##### `byMonthInput`<sup>Optional</sup> <a name="byMonthInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthInput"></a>

```typescript
public readonly byMonthInput: number[];
```

- *Type:* number[]

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rollingUsersInput`<sup>Optional</sup> <a name="rollingUsersInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.rollingUsersInput"></a>

```typescript
public readonly rollingUsersInput: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `startRotationFromUserIndexInput`<sup>Optional</sup> <a name="startRotationFromUserIndexInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startRotationFromUserIndexInput"></a>

```typescript
public readonly startRotationFromUserIndexInput: number;
```

- *Type:* number

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `untilInput`<sup>Optional</sup> <a name="untilInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.untilInput"></a>

```typescript
public readonly untilInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `weekStartInput`<sup>Optional</sup> <a name="weekStartInput" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.weekStartInput"></a>

```typescript
public readonly weekStartInput: string;
```

- *Type:* string

---

##### `byDay`<sup>Required</sup> <a name="byDay" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byDay"></a>

```typescript
public readonly byDay: string[];
```

- *Type:* string[]

---

##### `byMonth`<sup>Required</sup> <a name="byMonth" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonth"></a>

```typescript
public readonly byMonth: number[];
```

- *Type:* number[]

---

##### `byMonthday`<sup>Required</sup> <a name="byMonthday" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.byMonthday"></a>

```typescript
public readonly byMonthday: number[];
```

- *Type:* number[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rollingUsers`<sup>Required</sup> <a name="rollingUsers" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.rollingUsers"></a>

```typescript
public readonly rollingUsers: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

---

##### `start`<sup>Required</sup> <a name="start" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `startRotationFromUserIndex`<sup>Required</sup> <a name="startRotationFromUserIndex" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.startRotationFromUserIndex"></a>

```typescript
public readonly startRotationFromUserIndex: number;
```

- *Type:* number

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `until`<sup>Required</sup> <a name="until" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `weekStart`<sup>Required</sup> <a name="weekStart" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.weekStart"></a>

```typescript
public readonly weekStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShift.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallOnCallShiftConfig <a name="OncallOnCallShiftConfig" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.Initializer"></a>

```typescript
import { oncallOnCallShift } from 'rhizo-co-terraform-provider-grafana'

const oncallOnCallShiftConfig: oncallOnCallShift.OncallOnCallShiftConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.duration">duration</a></code> | <code>number</code> | The duration of the event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.name">name</a></code> | <code>string</code> | The shift's name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.start">start</a></code> | <code>string</code> | The start time of the on-call shift. This parameter takes a date format as yyyy-MM-dd'T'HH:mm:ss (for example "2020-09-05T08:00:00"). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.type">type</a></code> | <code>string</code> | The shift's type. Can be rolling_users, recurrent_event, single_event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byDay">byDay</a></code> | <code>string[]</code> | This parameter takes a list of days in iCal format. Can be MO, TU, WE, TH, FR, SA, SU. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byMonth">byMonth</a></code> | <code>number[]</code> | This parameter takes a list of months. Valid values are 1 to 12. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byMonthday">byMonthday</a></code> | <code>number[]</code> | This parameter takes a list of days of the month. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.frequency">frequency</a></code> | <code>string</code> | The frequency of the event. Can be hourly, daily, weekly, monthly. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#id OncallOnCallShift#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.interval">interval</a></code> | <code>number</code> | The positive integer representing at which intervals the recurrence rule repeats. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.level">level</a></code> | <code>number</code> | The priority level. The higher the value, the higher the priority. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.rollingUsers">rollingUsers</a></code> | <code>cdktf.IResolvable \| string[][]</code> | The list of lists with on-call users (for rolling_users event type). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.startRotationFromUserIndex">startRotationFromUserIndex</a></code> | <code>number</code> | The index of the list of users in rolling_users, from which on-call rotation starts. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the OnCall team. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The shift's timezone.  Overrides schedule's timezone. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.until">until</a></code> | <code>string</code> | The end time of recurrent on-call shifts (endless if null). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.users">users</a></code> | <code>string[]</code> | The list of on-call users (for single_event and recurrent_event event type). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.weekStart">weekStart</a></code> | <code>string</code> | Start day of the week in iCal format. Can be MO, TU, WE, TH, FR, SA, SU. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#duration OncallOnCallShift#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The shift's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#name OncallOnCallShift#name}

---

##### `start`<sup>Required</sup> <a name="start" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

The start time of the on-call shift. This parameter takes a date format as yyyy-MM-dd'T'HH:mm:ss (for example "2020-09-05T08:00:00").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#start OncallOnCallShift#start}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The shift's type. Can be rolling_users, recurrent_event, single_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#type OncallOnCallShift#type}

---

##### `byDay`<sup>Optional</sup> <a name="byDay" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byDay"></a>

```typescript
public readonly byDay: string[];
```

- *Type:* string[]

This parameter takes a list of days in iCal format. Can be MO, TU, WE, TH, FR, SA, SU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#by_day OncallOnCallShift#by_day}

---

##### `byMonth`<sup>Optional</sup> <a name="byMonth" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byMonth"></a>

```typescript
public readonly byMonth: number[];
```

- *Type:* number[]

This parameter takes a list of months. Valid values are 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#by_month OncallOnCallShift#by_month}

---

##### `byMonthday`<sup>Optional</sup> <a name="byMonthday" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.byMonthday"></a>

```typescript
public readonly byMonthday: number[];
```

- *Type:* number[]

This parameter takes a list of days of the month.

Valid values are 1 to 31 or -31 to -1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#by_monthday OncallOnCallShift#by_monthday}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

The frequency of the event. Can be hourly, daily, weekly, monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#frequency OncallOnCallShift#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#id OncallOnCallShift#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The positive integer representing at which intervals the recurrence rule repeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#interval OncallOnCallShift#interval}

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

The priority level. The higher the value, the higher the priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#level OncallOnCallShift#level}

---

##### `rollingUsers`<sup>Optional</sup> <a name="rollingUsers" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.rollingUsers"></a>

```typescript
public readonly rollingUsers: IResolvable | string[][];
```

- *Type:* cdktf.IResolvable | string[][]

The list of lists with on-call users (for rolling_users event type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#rolling_users OncallOnCallShift#rolling_users}

---

##### `startRotationFromUserIndex`<sup>Optional</sup> <a name="startRotationFromUserIndex" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.startRotationFromUserIndex"></a>

```typescript
public readonly startRotationFromUserIndex: number;
```

- *Type:* number

The index of the list of users in rolling_users, from which on-call rotation starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#start_rotation_from_user_index OncallOnCallShift#start_rotation_from_user_index}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the OnCall team.

To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team with OnCall). You can then get the ID using the `grafana_oncall_team` datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#team_id OncallOnCallShift#team_id}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The shift's timezone.  Overrides schedule's timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#time_zone OncallOnCallShift#time_zone}

---

##### `until`<sup>Optional</sup> <a name="until" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

The end time of recurrent on-call shifts (endless if null).

This parameter takes a date format as yyyy-MM-dd'T'HH:mm:ss (for example "2020-09-05T08:00:00")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#until OncallOnCallShift#until}

---

##### `users`<sup>Optional</sup> <a name="users" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

The list of on-call users (for single_event and recurrent_event event type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#users OncallOnCallShift#users}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="rhizo-co-terraform-provider-grafana.oncallOnCallShift.OncallOnCallShiftConfig.property.weekStart"></a>

```typescript
public readonly weekStart: string;
```

- *Type:* string

Start day of the week in iCal format. Can be MO, TU, WE, TH, FR, SA, SU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_on_call_shift#week_start OncallOnCallShift#week_start}

---




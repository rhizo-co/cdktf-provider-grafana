# `grafana_oncall_schedule`

Refer to the Terraform Registory for docs: [`grafana_oncall_schedule`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule).

# `oncallSchedule` Submodule <a name="`oncallSchedule` Submodule" id="rhizo-co-terraform-provider-grafana.oncallSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallSchedule <a name="OncallSchedule" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule grafana_oncall_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

new oncallSchedule.OncallSchedule(scope: Construct, id: string, config: OncallScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig">OncallScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig">OncallScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetEnableWebOverrides">resetEnableWebOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetIcalUrlOverrides">resetIcalUrlOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetIcalUrlPrimary">resetIcalUrlPrimary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetShifts">resetShifts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSlack` <a name="putSlack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.putSlack"></a>

```typescript
public putSlack(value: OncallScheduleSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.putSlack.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a>

---

##### `resetEnableWebOverrides` <a name="resetEnableWebOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetEnableWebOverrides"></a>

```typescript
public resetEnableWebOverrides(): void
```

##### `resetIcalUrlOverrides` <a name="resetIcalUrlOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetIcalUrlOverrides"></a>

```typescript
public resetIcalUrlOverrides(): void
```

##### `resetIcalUrlPrimary` <a name="resetIcalUrlPrimary" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetIcalUrlPrimary"></a>

```typescript
public resetIcalUrlPrimary(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShifts` <a name="resetShifts" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetShifts"></a>

```typescript
public resetShifts(): void
```

##### `resetSlack` <a name="resetSlack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isConstruct"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

oncallSchedule.OncallSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformElement"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

oncallSchedule.OncallSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformResource"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

oncallSchedule.OncallSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference">OncallScheduleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.enableWebOverridesInput">enableWebOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlOverridesInput">icalUrlOverridesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlPrimaryInput">icalUrlPrimaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.shiftsInput">shiftsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.slackInput">slackInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.enableWebOverrides">enableWebOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlOverrides">icalUrlOverrides</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlPrimary">icalUrlPrimary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.shifts">shifts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `slack`<sup>Required</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.slack"></a>

```typescript
public readonly slack: OncallScheduleSlackOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference">OncallScheduleSlackOutputReference</a>

---

##### `enableWebOverridesInput`<sup>Optional</sup> <a name="enableWebOverridesInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.enableWebOverridesInput"></a>

```typescript
public readonly enableWebOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `icalUrlOverridesInput`<sup>Optional</sup> <a name="icalUrlOverridesInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlOverridesInput"></a>

```typescript
public readonly icalUrlOverridesInput: string;
```

- *Type:* string

---

##### `icalUrlPrimaryInput`<sup>Optional</sup> <a name="icalUrlPrimaryInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlPrimaryInput"></a>

```typescript
public readonly icalUrlPrimaryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shiftsInput`<sup>Optional</sup> <a name="shiftsInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.shiftsInput"></a>

```typescript
public readonly shiftsInput: string[];
```

- *Type:* string[]

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.slackInput"></a>

```typescript
public readonly slackInput: OncallScheduleSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enableWebOverrides`<sup>Required</sup> <a name="enableWebOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.enableWebOverrides"></a>

```typescript
public readonly enableWebOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `icalUrlOverrides`<sup>Required</sup> <a name="icalUrlOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlOverrides"></a>

```typescript
public readonly icalUrlOverrides: string;
```

- *Type:* string

---

##### `icalUrlPrimary`<sup>Required</sup> <a name="icalUrlPrimary" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.icalUrlPrimary"></a>

```typescript
public readonly icalUrlPrimary: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shifts`<sup>Required</sup> <a name="shifts" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.shifts"></a>

```typescript
public readonly shifts: string[];
```

- *Type:* string[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallScheduleConfig <a name="OncallScheduleConfig" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.Initializer"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

const oncallScheduleConfig: oncallSchedule.OncallScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.name">name</a></code> | <code>string</code> | The schedule's name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.type">type</a></code> | <code>string</code> | The schedule's type. Valid values are `ical`, `calendar`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.enableWebOverrides">enableWebOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable overrides via web UI (it will ignore ical_url_overrides). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.icalUrlOverrides">icalUrlOverrides</a></code> | <code>string</code> | The URL of external iCal calendar which override primary events. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.icalUrlPrimary">icalUrlPrimary</a></code> | <code>string</code> | The URL of the external calendar iCal file. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#id OncallSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.shifts">shifts</a></code> | <code>string[]</code> | The list of ID's of on-call shifts. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a></code> | slack block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the OnCall team. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The schedule's time zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The schedule's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#name OncallSchedule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The schedule's type. Valid values are `ical`, `calendar`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#type OncallSchedule#type}

---

##### `enableWebOverrides`<sup>Optional</sup> <a name="enableWebOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.enableWebOverrides"></a>

```typescript
public readonly enableWebOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable overrides via web UI (it will ignore ical_url_overrides).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#enable_web_overrides OncallSchedule#enable_web_overrides}

---

##### `icalUrlOverrides`<sup>Optional</sup> <a name="icalUrlOverrides" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.icalUrlOverrides"></a>

```typescript
public readonly icalUrlOverrides: string;
```

- *Type:* string

The URL of external iCal calendar which override primary events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#ical_url_overrides OncallSchedule#ical_url_overrides}

---

##### `icalUrlPrimary`<sup>Optional</sup> <a name="icalUrlPrimary" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.icalUrlPrimary"></a>

```typescript
public readonly icalUrlPrimary: string;
```

- *Type:* string

The URL of the external calendar iCal file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#ical_url_primary OncallSchedule#ical_url_primary}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#id OncallSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shifts`<sup>Optional</sup> <a name="shifts" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.shifts"></a>

```typescript
public readonly shifts: string[];
```

- *Type:* string[]

The list of ID's of on-call shifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#shifts OncallSchedule#shifts}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.slack"></a>

```typescript
public readonly slack: OncallScheduleSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#slack OncallSchedule#slack}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the OnCall team.

To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team with OnCall). You can then get the ID using the `grafana_oncall_team` datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#team_id OncallSchedule#team_id}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The schedule's time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#time_zone OncallSchedule#time_zone}

---

### OncallScheduleSlack <a name="OncallScheduleSlack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack.Initializer"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

const oncallScheduleSlack: oncallSchedule.OncallScheduleSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack.property.channelId">channelId</a></code> | <code>string</code> | Slack channel id. Reminder about schedule shifts will be directed to this channel in Slack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack.property.userGroupId">userGroupId</a></code> | <code>string</code> | Slack user group id. Members of user group will be updated when on-call users change. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Slack channel id. Reminder about schedule shifts will be directed to this channel in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#channel_id OncallSchedule#channel_id}

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

Slack user group id. Members of user group will be updated when on-call users change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_schedule#user_group_id OncallSchedule#user_group_id}

---

## Classes <a name="Classes" id="Classes"></a>

### OncallScheduleSlackOutputReference <a name="OncallScheduleSlackOutputReference" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.Initializer"></a>

```typescript
import { oncallSchedule } from 'rhizo-co-terraform-provider-grafana'

new oncallSchedule.OncallScheduleSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resetUserGroupId">resetUserGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetUserGroupId` <a name="resetUserGroupId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.resetUserGroupId"></a>

```typescript
public resetUserGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.userGroupIdInput">userGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.userGroupId">userGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `userGroupIdInput`<sup>Optional</sup> <a name="userGroupIdInput" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.userGroupIdInput"></a>

```typescript
public readonly userGroupIdInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallScheduleSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallSchedule.OncallScheduleSlack">OncallScheduleSlack</a>

---




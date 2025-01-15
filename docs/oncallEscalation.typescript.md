# `grafana_oncall_escalation`

Refer to the Terraform Registory for docs: [`grafana_oncall_escalation`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation).

# `oncallEscalation` Submodule <a name="`oncallEscalation` Submodule" id="rhizo-co-terraform-provider-grafana.oncallEscalation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallEscalation <a name="OncallEscalation" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation grafana_oncall_escalation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer"></a>

```typescript
import { oncallEscalation } from 'rhizo-co-terraform-provider-grafana'

new oncallEscalation.OncallEscalation(scope: Construct, id: string, config: OncallEscalationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig">OncallEscalationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig">OncallEscalationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetActionToTrigger">resetActionToTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetGroupToNotify">resetGroupToNotify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetImportant">resetImportant</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyIfTimeFrom">resetNotifyIfTimeFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyIfTimeTo">resetNotifyIfTimeTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyOnCallFromSchedule">resetNotifyOnCallFromSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyToTeamMembers">resetNotifyToTeamMembers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetPersonsToNotify">resetPersonsToNotify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetPersonsToNotifyNextEachTime">resetPersonsToNotifyNextEachTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActionToTrigger` <a name="resetActionToTrigger" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetActionToTrigger"></a>

```typescript
public resetActionToTrigger(): void
```

##### `resetDuration` <a name="resetDuration" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetGroupToNotify` <a name="resetGroupToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetGroupToNotify"></a>

```typescript
public resetGroupToNotify(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportant` <a name="resetImportant" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetImportant"></a>

```typescript
public resetImportant(): void
```

##### `resetNotifyIfTimeFrom` <a name="resetNotifyIfTimeFrom" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyIfTimeFrom"></a>

```typescript
public resetNotifyIfTimeFrom(): void
```

##### `resetNotifyIfTimeTo` <a name="resetNotifyIfTimeTo" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyIfTimeTo"></a>

```typescript
public resetNotifyIfTimeTo(): void
```

##### `resetNotifyOnCallFromSchedule` <a name="resetNotifyOnCallFromSchedule" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyOnCallFromSchedule"></a>

```typescript
public resetNotifyOnCallFromSchedule(): void
```

##### `resetNotifyToTeamMembers` <a name="resetNotifyToTeamMembers" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetNotifyToTeamMembers"></a>

```typescript
public resetNotifyToTeamMembers(): void
```

##### `resetPersonsToNotify` <a name="resetPersonsToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetPersonsToNotify"></a>

```typescript
public resetPersonsToNotify(): void
```

##### `resetPersonsToNotifyNextEachTime` <a name="resetPersonsToNotifyNextEachTime" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetPersonsToNotifyNextEachTime"></a>

```typescript
public resetPersonsToNotifyNextEachTime(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isConstruct"></a>

```typescript
import { oncallEscalation } from 'rhizo-co-terraform-provider-grafana'

oncallEscalation.OncallEscalation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformElement"></a>

```typescript
import { oncallEscalation } from 'rhizo-co-terraform-provider-grafana'

oncallEscalation.OncallEscalation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformResource"></a>

```typescript
import { oncallEscalation } from 'rhizo-co-terraform-provider-grafana'

oncallEscalation.OncallEscalation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.actionToTriggerInput">actionToTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.escalationChainIdInput">escalationChainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.groupToNotifyInput">groupToNotifyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.importantInput">importantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeFromInput">notifyIfTimeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeToInput">notifyIfTimeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyOnCallFromScheduleInput">notifyOnCallFromScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyToTeamMembersInput">notifyToTeamMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyInput">personsToNotifyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyNextEachTimeInput">personsToNotifyNextEachTimeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.actionToTrigger">actionToTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.groupToNotify">groupToNotify</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.important">important</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeFrom">notifyIfTimeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeTo">notifyIfTimeTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyOnCallFromSchedule">notifyOnCallFromSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyToTeamMembers">notifyToTeamMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotify">personsToNotify</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyNextEachTime">personsToNotifyNextEachTime</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionToTriggerInput`<sup>Optional</sup> <a name="actionToTriggerInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.actionToTriggerInput"></a>

```typescript
public readonly actionToTriggerInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `escalationChainIdInput`<sup>Optional</sup> <a name="escalationChainIdInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.escalationChainIdInput"></a>

```typescript
public readonly escalationChainIdInput: string;
```

- *Type:* string

---

##### `groupToNotifyInput`<sup>Optional</sup> <a name="groupToNotifyInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.groupToNotifyInput"></a>

```typescript
public readonly groupToNotifyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importantInput`<sup>Optional</sup> <a name="importantInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.importantInput"></a>

```typescript
public readonly importantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyIfTimeFromInput`<sup>Optional</sup> <a name="notifyIfTimeFromInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeFromInput"></a>

```typescript
public readonly notifyIfTimeFromInput: string;
```

- *Type:* string

---

##### `notifyIfTimeToInput`<sup>Optional</sup> <a name="notifyIfTimeToInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeToInput"></a>

```typescript
public readonly notifyIfTimeToInput: string;
```

- *Type:* string

---

##### `notifyOnCallFromScheduleInput`<sup>Optional</sup> <a name="notifyOnCallFromScheduleInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyOnCallFromScheduleInput"></a>

```typescript
public readonly notifyOnCallFromScheduleInput: string;
```

- *Type:* string

---

##### `notifyToTeamMembersInput`<sup>Optional</sup> <a name="notifyToTeamMembersInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyToTeamMembersInput"></a>

```typescript
public readonly notifyToTeamMembersInput: string;
```

- *Type:* string

---

##### `personsToNotifyInput`<sup>Optional</sup> <a name="personsToNotifyInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyInput"></a>

```typescript
public readonly personsToNotifyInput: string[];
```

- *Type:* string[]

---

##### `personsToNotifyNextEachTimeInput`<sup>Optional</sup> <a name="personsToNotifyNextEachTimeInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyNextEachTimeInput"></a>

```typescript
public readonly personsToNotifyNextEachTimeInput: string[];
```

- *Type:* string[]

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `actionToTrigger`<sup>Required</sup> <a name="actionToTrigger" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.actionToTrigger"></a>

```typescript
public readonly actionToTrigger: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `escalationChainId`<sup>Required</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

---

##### `groupToNotify`<sup>Required</sup> <a name="groupToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.groupToNotify"></a>

```typescript
public readonly groupToNotify: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `important`<sup>Required</sup> <a name="important" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.important"></a>

```typescript
public readonly important: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyIfTimeFrom`<sup>Required</sup> <a name="notifyIfTimeFrom" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeFrom"></a>

```typescript
public readonly notifyIfTimeFrom: string;
```

- *Type:* string

---

##### `notifyIfTimeTo`<sup>Required</sup> <a name="notifyIfTimeTo" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyIfTimeTo"></a>

```typescript
public readonly notifyIfTimeTo: string;
```

- *Type:* string

---

##### `notifyOnCallFromSchedule`<sup>Required</sup> <a name="notifyOnCallFromSchedule" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyOnCallFromSchedule"></a>

```typescript
public readonly notifyOnCallFromSchedule: string;
```

- *Type:* string

---

##### `notifyToTeamMembers`<sup>Required</sup> <a name="notifyToTeamMembers" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.notifyToTeamMembers"></a>

```typescript
public readonly notifyToTeamMembers: string;
```

- *Type:* string

---

##### `personsToNotify`<sup>Required</sup> <a name="personsToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotify"></a>

```typescript
public readonly personsToNotify: string[];
```

- *Type:* string[]

---

##### `personsToNotifyNextEachTime`<sup>Required</sup> <a name="personsToNotifyNextEachTime" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.personsToNotifyNextEachTime"></a>

```typescript
public readonly personsToNotifyNextEachTime: string[];
```

- *Type:* string[]

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallEscalationConfig <a name="OncallEscalationConfig" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.Initializer"></a>

```typescript
import { oncallEscalation } from 'rhizo-co-terraform-provider-grafana'

const oncallEscalationConfig: oncallEscalation.OncallEscalationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | The ID of the escalation chain. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.position">position</a></code> | <code>number</code> | The position of the escalation step (starts from 0). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.type">type</a></code> | <code>string</code> | The type of escalation policy. Can be wait, notify_persons, notify_person_next_each_time, notify_on_call_from_schedule, trigger_webhook, notify_user_group, resolve, notify_whole_channel, notify_if_time_from_to, repeat_escalation, notify_team_members, declare_incident. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.actionToTrigger">actionToTrigger</a></code> | <code>string</code> | The ID of an Action for trigger_webhook type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.duration">duration</a></code> | <code>number</code> | The duration of delay for wait type step. (60-86400) seconds. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.groupToNotify">groupToNotify</a></code> | <code>string</code> | The ID of a User Group for notify_user_group type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#id OncallEscalation#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.important">important</a></code> | <code>boolean \| cdktf.IResolvable</code> | Will activate "important" personal notification rules. Actual for steps: notify_persons, notify_on_call_from_schedule and notify_user_group,notify_team_members. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyIfTimeFrom">notifyIfTimeFrom</a></code> | <code>string</code> | The beginning of the time interval for notify_if_time_from_to type step in UTC (for example 08:00:00Z). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyIfTimeTo">notifyIfTimeTo</a></code> | <code>string</code> | The end of the time interval for notify_if_time_from_to type step in UTC (for example 18:00:00Z). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyOnCallFromSchedule">notifyOnCallFromSchedule</a></code> | <code>string</code> | ID of a Schedule for notify_on_call_from_schedule type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyToTeamMembers">notifyToTeamMembers</a></code> | <code>string</code> | The ID of a Team for a notify_team_members type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.personsToNotify">personsToNotify</a></code> | <code>string[]</code> | The list of ID's of users for notify_persons type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.personsToNotifyNextEachTime">personsToNotifyNextEachTime</a></code> | <code>string[]</code> | The list of ID's of users for notify_person_next_each_time type step. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.severity">severity</a></code> | <code>string</code> | The severity of the incident for declare_incident type step. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `escalationChainId`<sup>Required</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

The ID of the escalation chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#escalation_chain_id OncallEscalation#escalation_chain_id}

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

The position of the escalation step (starts from 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#position OncallEscalation#position}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of escalation policy. Can be wait, notify_persons, notify_person_next_each_time, notify_on_call_from_schedule, trigger_webhook, notify_user_group, resolve, notify_whole_channel, notify_if_time_from_to, repeat_escalation, notify_team_members, declare_incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#type OncallEscalation#type}

---

##### `actionToTrigger`<sup>Optional</sup> <a name="actionToTrigger" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.actionToTrigger"></a>

```typescript
public readonly actionToTrigger: string;
```

- *Type:* string

The ID of an Action for trigger_webhook type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#action_to_trigger OncallEscalation#action_to_trigger}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration of delay for wait type step. (60-86400) seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#duration OncallEscalation#duration}

---

##### `groupToNotify`<sup>Optional</sup> <a name="groupToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.groupToNotify"></a>

```typescript
public readonly groupToNotify: string;
```

- *Type:* string

The ID of a User Group for notify_user_group type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#group_to_notify OncallEscalation#group_to_notify}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#id OncallEscalation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `important`<sup>Optional</sup> <a name="important" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.important"></a>

```typescript
public readonly important: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Will activate "important" personal notification rules. Actual for steps: notify_persons, notify_on_call_from_schedule and notify_user_group,notify_team_members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#important OncallEscalation#important}

---

##### `notifyIfTimeFrom`<sup>Optional</sup> <a name="notifyIfTimeFrom" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyIfTimeFrom"></a>

```typescript
public readonly notifyIfTimeFrom: string;
```

- *Type:* string

The beginning of the time interval for notify_if_time_from_to type step in UTC (for example 08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#notify_if_time_from OncallEscalation#notify_if_time_from}

---

##### `notifyIfTimeTo`<sup>Optional</sup> <a name="notifyIfTimeTo" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyIfTimeTo"></a>

```typescript
public readonly notifyIfTimeTo: string;
```

- *Type:* string

The end of the time interval for notify_if_time_from_to type step in UTC (for example 18:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#notify_if_time_to OncallEscalation#notify_if_time_to}

---

##### `notifyOnCallFromSchedule`<sup>Optional</sup> <a name="notifyOnCallFromSchedule" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyOnCallFromSchedule"></a>

```typescript
public readonly notifyOnCallFromSchedule: string;
```

- *Type:* string

ID of a Schedule for notify_on_call_from_schedule type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#notify_on_call_from_schedule OncallEscalation#notify_on_call_from_schedule}

---

##### `notifyToTeamMembers`<sup>Optional</sup> <a name="notifyToTeamMembers" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.notifyToTeamMembers"></a>

```typescript
public readonly notifyToTeamMembers: string;
```

- *Type:* string

The ID of a Team for a notify_team_members type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#notify_to_team_members OncallEscalation#notify_to_team_members}

---

##### `personsToNotify`<sup>Optional</sup> <a name="personsToNotify" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.personsToNotify"></a>

```typescript
public readonly personsToNotify: string[];
```

- *Type:* string[]

The list of ID's of users for notify_persons type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#persons_to_notify OncallEscalation#persons_to_notify}

---

##### `personsToNotifyNextEachTime`<sup>Optional</sup> <a name="personsToNotifyNextEachTime" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.personsToNotifyNextEachTime"></a>

```typescript
public readonly personsToNotifyNextEachTime: string[];
```

- *Type:* string[]

The list of ID's of users for notify_person_next_each_time type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#persons_to_notify_next_each_time OncallEscalation#persons_to_notify_next_each_time}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-grafana.oncallEscalation.OncallEscalationConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity of the incident for declare_incident type step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_escalation#severity OncallEscalation#severity}

---




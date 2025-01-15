# `grafana_oncall_user_notification_rule`

Refer to the Terraform Registory for docs: [`grafana_oncall_user_notification_rule`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule).

# `oncallUserNotificationRule` Submodule <a name="`oncallUserNotificationRule` Submodule" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallUserNotificationRule <a name="OncallUserNotificationRule" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule grafana_oncall_user_notification_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer"></a>

```typescript
import { oncallUserNotificationRule } from 'rhizo-co-terraform-provider-grafana'

new oncallUserNotificationRule.OncallUserNotificationRule(scope: Construct, id: string, config: OncallUserNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig">OncallUserNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig">OncallUserNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetImportant">resetImportant</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetPosition">resetPosition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDuration` <a name="resetDuration" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetImportant` <a name="resetImportant" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetImportant"></a>

```typescript
public resetImportant(): void
```

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.resetPosition"></a>

```typescript
public resetPosition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isConstruct"></a>

```typescript
import { oncallUserNotificationRule } from 'rhizo-co-terraform-provider-grafana'

oncallUserNotificationRule.OncallUserNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformElement"></a>

```typescript
import { oncallUserNotificationRule } from 'rhizo-co-terraform-provider-grafana'

oncallUserNotificationRule.OncallUserNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformResource"></a>

```typescript
import { oncallUserNotificationRule } from 'rhizo-co-terraform-provider-grafana'

oncallUserNotificationRule.OncallUserNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.importantInput">importantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.important">important</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `importantInput`<sup>Optional</sup> <a name="importantInput" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.importantInput"></a>

```typescript
public readonly importantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `important`<sup>Required</sup> <a name="important" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.important"></a>

```typescript
public readonly important: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallUserNotificationRuleConfig <a name="OncallUserNotificationRuleConfig" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.Initializer"></a>

```typescript
import { oncallUserNotificationRule } from 'rhizo-co-terraform-provider-grafana'

const oncallUserNotificationRuleConfig: oncallUserNotificationRule.OncallUserNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.type">type</a></code> | <code>string</code> | The type of notification rule. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.userId">userId</a></code> | <code>string</code> | User ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.duration">duration</a></code> | <code>number</code> | A time in seconds to wait (when `type=wait`). Can be 60, 300, 900, 1800, 3600. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.important">important</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean value which indicates if a rule is “important”. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.position">position</a></code> | <code>number</code> | Personal notification rules execute one after another starting from position=0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of notification rule.

Can be wait, notify_by_slack, notify_by_msteams, notify_by_sms, notify_by_phone_call, notify_by_telegram, notify_by_email, notify_by_mobile_app, notify_by_mobile_app_critical. NOTE: `notify_by_msteams` is only available for Grafana Cloud customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule#type OncallUserNotificationRule#type}

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule#user_id OncallUserNotificationRule#user_id}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

A time in seconds to wait (when `type=wait`). Can be 60, 300, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule#duration OncallUserNotificationRule#duration}

---

##### `important`<sup>Optional</sup> <a name="important" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.important"></a>

```typescript
public readonly important: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean value which indicates if a rule is “important”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule#important OncallUserNotificationRule#important}

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallUserNotificationRule.OncallUserNotificationRuleConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Personal notification rules execute one after another starting from position=0.

A new escalation policy created with a position of an existing escalation policy will move the old one (and all following) down on the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_user_notification_rule#position OncallUserNotificationRule#position}

---




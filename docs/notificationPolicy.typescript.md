# `grafana_notification_policy`

Refer to the Terraform Registory for docs: [`grafana_notification_policy`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy).

# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="rhizo-co-terraform-provider-grafana.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy grafana_notification_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

new notificationPolicy.NotificationPolicy(scope: Construct, id: string, config: NotificationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetDisableProvenance">resetDisableProvenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetGroupInterval">resetGroupInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetGroupWait">resetGroupWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetRepeatInterval">resetRepeatInterval</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPolicy` <a name="putPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.putPolicy"></a>

```typescript
public putPolicy(value: IResolvable | NotificationPolicyPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.putPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

---

##### `resetDisableProvenance` <a name="resetDisableProvenance" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetDisableProvenance"></a>

```typescript
public resetDisableProvenance(): void
```

##### `resetGroupInterval` <a name="resetGroupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetGroupInterval"></a>

```typescript
public resetGroupInterval(): void
```

##### `resetGroupWait` <a name="resetGroupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetGroupWait"></a>

```typescript
public resetGroupWait(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetPolicy` <a name="resetPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRepeatInterval` <a name="resetRepeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.resetRepeatInterval"></a>

```typescript
public resetRepeatInterval(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isConstruct"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

notificationPolicy.NotificationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformElement"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

notificationPolicy.NotificationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

notificationPolicy.NotificationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList">NotificationPolicyPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.contactPointInput">contactPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.disableProvenanceInput">disableProvenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupIntervalInput">groupIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupWaitInput">groupWaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.policyInput">policyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.repeatIntervalInput">repeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.contactPoint">contactPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupInterval">groupInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupWait">groupWait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.policy"></a>

```typescript
public readonly policy: NotificationPolicyPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList">NotificationPolicyPolicyList</a>

---

##### `contactPointInput`<sup>Optional</sup> <a name="contactPointInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.contactPointInput"></a>

```typescript
public readonly contactPointInput: string;
```

- *Type:* string

---

##### `disableProvenanceInput`<sup>Optional</sup> <a name="disableProvenanceInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.disableProvenanceInput"></a>

```typescript
public readonly disableProvenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupIntervalInput`<sup>Optional</sup> <a name="groupIntervalInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupIntervalInput"></a>

```typescript
public readonly groupIntervalInput: string;
```

- *Type:* string

---

##### `groupWaitInput`<sup>Optional</sup> <a name="groupWaitInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupWaitInput"></a>

```typescript
public readonly groupWaitInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.policyInput"></a>

```typescript
public readonly policyInput: IResolvable | NotificationPolicyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

---

##### `repeatIntervalInput`<sup>Optional</sup> <a name="repeatIntervalInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.repeatIntervalInput"></a>

```typescript
public readonly repeatIntervalInput: string;
```

- *Type:* string

---

##### `contactPoint`<sup>Required</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

---

##### `disableProvenance`<sup>Required</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `groupInterval`<sup>Required</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

---

##### `groupWait`<sup>Required</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `repeatInterval`<sup>Required</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyConfig <a name="NotificationPolicyConfig" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

const notificationPolicyConfig: notificationPolicy.NotificationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.contactPoint">contactPoint</a></code> | <code>string</code> | The default contact point to route all unmatched notifications to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | A list of alert labels to group alerts into notifications by. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow modifying the notification policy from other sources than Terraform or the Grafana API. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupInterval">groupInterval</a></code> | <code>string</code> | Minimum time interval between two notifications for the same group. Default is 5 minutes. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupWait">groupWait</a></code> | <code>string</code> | Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#id NotificationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.policy">policy</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]</code> | policy block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactPoint`<sup>Required</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

The default contact point to route all unmatched notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#contact_point NotificationPolicy#contact_point}

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

A list of alert labels to group alerts into notifications by.

Use the special label `...` to group alerts by all labels, effectively disabling grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `disableProvenance`<sup>Optional</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow modifying the notification policy from other sources than Terraform or the Grafana API. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#disable_provenance NotificationPolicy#disable_provenance}

---

##### `groupInterval`<sup>Optional</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

Minimum time interval between two notifications for the same group. Default is 5 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_interval NotificationPolicy#group_interval}

---

##### `groupWait`<sup>Optional</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_wait NotificationPolicy#group_wait}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#id NotificationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#org_id NotificationPolicy#org_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.policy"></a>

```typescript
public readonly policy: IResolvable | NotificationPolicyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#policy NotificationPolicy#policy}

---

##### `repeatInterval`<sup>Optional</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyConfig.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}

---

### NotificationPolicyPolicy <a name="NotificationPolicyPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

const notificationPolicyPolicy: notificationPolicy.NotificationPolicyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.contactPoint">contactPoint</a></code> | <code>string</code> | The contact point to route notifications that match this rule to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.continue">continue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to continue matching subsequent rules if an alert matches the current rule. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupBy">groupBy</a></code> | <code>string[]</code> | A list of alert labels to group alerts into notifications by. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupInterval">groupInterval</a></code> | <code>string</code> | Minimum time interval between two notifications for the same group. Default is 5 minutes. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupWait">groupWait</a></code> | <code>string</code> | Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.matcher">matcher</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]</code> | matcher block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.muteTimings">muteTimings</a></code> | <code>string[]</code> | A list of mute timing names to apply to alerts that match this policy. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.policy">policy</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]</code> | policy block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours. |

---

##### `contactPoint`<sup>Optional</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

The contact point to route notifications that match this rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#contact_point NotificationPolicy#contact_point}

---

##### `continue`<sup>Optional</sup> <a name="continue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.continue"></a>

```typescript
public readonly continue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to continue matching subsequent rules if an alert matches the current rule.

Otherwise, the rule will be 'consumed' by the first policy to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#continue NotificationPolicy#continue}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

A list of alert labels to group alerts into notifications by.

Use the special label `...` to group alerts by all labels, effectively disabling grouping. Required for root policy only. If empty, the parent grouping is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `groupInterval`<sup>Optional</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

Minimum time interval between two notifications for the same group. Default is 5 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_interval NotificationPolicy#group_interval}

---

##### `groupWait`<sup>Optional</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#group_wait NotificationPolicy#group_wait}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.matcher"></a>

```typescript
public readonly matcher: IResolvable | NotificationPolicyPolicyMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#matcher NotificationPolicy#matcher}

---

##### `muteTimings`<sup>Optional</sup> <a name="muteTimings" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.muteTimings"></a>

```typescript
public readonly muteTimings: string[];
```

- *Type:* string[]

A list of mute timing names to apply to alerts that match this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#mute_timings NotificationPolicy#mute_timings}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.policy"></a>

```typescript
public readonly policy: IResolvable | NotificationPolicyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#policy NotificationPolicy#policy}

---

##### `repeatInterval`<sup>Optional</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}

---

### NotificationPolicyPolicyMatcher <a name="NotificationPolicyPolicyMatcher" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

const notificationPolicyPolicyMatcher: notificationPolicy.NotificationPolicyPolicyMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.label">label</a></code> | <code>string</code> | The name of the label to match against. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.match">match</a></code> | <code>string</code> | The operator to apply when matching values of the given label. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.value">value</a></code> | <code>string</code> | The label value to match against. |

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The name of the label to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#label NotificationPolicy#label}

---

##### `match`<sup>Required</sup> <a name="match" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

The operator to apply when matching values of the given label.

Allowed operators are `=` for equality, `!=` for negated equality, `=~` for regex equality, and `!~` for negated regex equality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#match NotificationPolicy#match}

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The label value to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/notification_policy#value NotificationPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyPolicyList <a name="NotificationPolicyPolicyList" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

new notificationPolicy.NotificationPolicyPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.get"></a>

```typescript
public get(index: number): NotificationPolicyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationPolicyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

---


### NotificationPolicyPolicyMatcherList <a name="NotificationPolicyPolicyMatcherList" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

new notificationPolicy.NotificationPolicyPolicyMatcherList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.get"></a>

```typescript
public get(index: number): NotificationPolicyPolicyMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationPolicyPolicyMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]

---


### NotificationPolicyPolicyMatcherOutputReference <a name="NotificationPolicyPolicyMatcherOutputReference" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

new notificationPolicy.NotificationPolicyPolicyMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationPolicyPolicyMatcher;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>

---


### NotificationPolicyPolicyOutputReference <a name="NotificationPolicyPolicyOutputReference" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer"></a>

```typescript
import { notificationPolicy } from 'rhizo-co-terraform-provider-grafana'

new notificationPolicy.NotificationPolicyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetContactPoint">resetContactPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetContinue">resetContinue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupInterval">resetGroupInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupWait">resetGroupWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetMuteTimings">resetMuteTimings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetRepeatInterval">resetRepeatInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatcher` <a name="putMatcher" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putMatcher"></a>

```typescript
public putMatcher(value: IResolvable | NotificationPolicyPolicyMatcher[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putMatcher.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]

---

##### `putPolicy` <a name="putPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putPolicy"></a>

```typescript
public putPolicy(value: IResolvable | NotificationPolicyPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.putPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

---

##### `resetContactPoint` <a name="resetContactPoint" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetContactPoint"></a>

```typescript
public resetContactPoint(): void
```

##### `resetContinue` <a name="resetContinue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetContinue"></a>

```typescript
public resetContinue(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetGroupInterval` <a name="resetGroupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupInterval"></a>

```typescript
public resetGroupInterval(): void
```

##### `resetGroupWait` <a name="resetGroupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetGroupWait"></a>

```typescript
public resetGroupWait(): void
```

##### `resetMatcher` <a name="resetMatcher" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetMuteTimings` <a name="resetMuteTimings" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetMuteTimings"></a>

```typescript
public resetMuteTimings(): void
```

##### `resetPolicy` <a name="resetPolicy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRepeatInterval` <a name="resetRepeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.resetRepeatInterval"></a>

```typescript
public resetRepeatInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.matcher">matcher</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList">NotificationPolicyPolicyMatcherList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList">NotificationPolicyPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.contactPointInput">contactPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.continueInput">continueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupIntervalInput">groupIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupWaitInput">groupWaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.matcherInput">matcherInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.muteTimingsInput">muteTimingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.policyInput">policyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.repeatIntervalInput">repeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.contactPoint">contactPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.continue">continue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupInterval">groupInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupWait">groupWait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.muteTimings">muteTimings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.matcher"></a>

```typescript
public readonly matcher: NotificationPolicyPolicyMatcherList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcherList">NotificationPolicyPolicyMatcherList</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.policy"></a>

```typescript
public readonly policy: NotificationPolicyPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyList">NotificationPolicyPolicyList</a>

---

##### `contactPointInput`<sup>Optional</sup> <a name="contactPointInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.contactPointInput"></a>

```typescript
public readonly contactPointInput: string;
```

- *Type:* string

---

##### `continueInput`<sup>Optional</sup> <a name="continueInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.continueInput"></a>

```typescript
public readonly continueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupIntervalInput`<sup>Optional</sup> <a name="groupIntervalInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupIntervalInput"></a>

```typescript
public readonly groupIntervalInput: string;
```

- *Type:* string

---

##### `groupWaitInput`<sup>Optional</sup> <a name="groupWaitInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupWaitInput"></a>

```typescript
public readonly groupWaitInput: string;
```

- *Type:* string

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: IResolvable | NotificationPolicyPolicyMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyMatcher">NotificationPolicyPolicyMatcher</a>[]

---

##### `muteTimingsInput`<sup>Optional</sup> <a name="muteTimingsInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.muteTimingsInput"></a>

```typescript
public readonly muteTimingsInput: string[];
```

- *Type:* string[]

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: IResolvable | NotificationPolicyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>[]

---

##### `repeatIntervalInput`<sup>Optional</sup> <a name="repeatIntervalInput" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.repeatIntervalInput"></a>

```typescript
public readonly repeatIntervalInput: string;
```

- *Type:* string

---

##### `contactPoint`<sup>Required</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

---

##### `continue`<sup>Required</sup> <a name="continue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.continue"></a>

```typescript
public readonly continue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `groupInterval`<sup>Required</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

---

##### `groupWait`<sup>Required</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

---

##### `muteTimings`<sup>Required</sup> <a name="muteTimings" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.muteTimings"></a>

```typescript
public readonly muteTimings: string[];
```

- *Type:* string[]

---

##### `repeatInterval`<sup>Required</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationPolicyPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.notificationPolicy.NotificationPolicyPolicy">NotificationPolicyPolicy</a>

---




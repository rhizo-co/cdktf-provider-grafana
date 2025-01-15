# `grafana_role_assignment_item`

Refer to the Terraform Registory for docs: [`grafana_role_assignment_item`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item).

# `roleAssignmentItem` Submodule <a name="`roleAssignmentItem` Submodule" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleAssignmentItem <a name="RoleAssignmentItem" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item grafana_role_assignment_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer"></a>

```typescript
import { roleAssignmentItem } from 'rhizo-co-terraform-provider-grafana'

new roleAssignmentItem.RoleAssignmentItem(scope: Construct, id: string, config: RoleAssignmentItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig">RoleAssignmentItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig">RoleAssignmentItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetServiceAccountId">resetServiceAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetServiceAccountId` <a name="resetServiceAccountId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetServiceAccountId"></a>

```typescript
public resetServiceAccountId(): void
```

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isConstruct"></a>

```typescript
import { roleAssignmentItem } from 'rhizo-co-terraform-provider-grafana'

roleAssignmentItem.RoleAssignmentItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformElement"></a>

```typescript
import { roleAssignmentItem } from 'rhizo-co-terraform-provider-grafana'

roleAssignmentItem.RoleAssignmentItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformResource"></a>

```typescript
import { roleAssignmentItem } from 'rhizo-co-terraform-provider-grafana'

roleAssignmentItem.RoleAssignmentItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.roleUidInput">roleUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.roleUid">roleUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `roleUidInput`<sup>Optional</sup> <a name="roleUidInput" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.roleUidInput"></a>

```typescript
public readonly roleUidInput: string;
```

- *Type:* string

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `roleUid`<sup>Required</sup> <a name="roleUid" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.roleUid"></a>

```typescript
public readonly roleUid: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleAssignmentItemConfig <a name="RoleAssignmentItemConfig" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.Initializer"></a>

```typescript
import { roleAssignmentItem } from 'rhizo-co-terraform-provider-grafana'

const roleAssignmentItemConfig: roleAssignmentItem.RoleAssignmentItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.roleUid">roleUid</a></code> | <code>string</code> | the role UID onto which to assign an actor. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | the service account onto which the role is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.teamId">teamId</a></code> | <code>string</code> | the team onto which the role is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.userId">userId</a></code> | <code>string</code> | the user onto which the role is to be assigned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleUid`<sup>Required</sup> <a name="roleUid" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.roleUid"></a>

```typescript
public readonly roleUid: string;
```

- *Type:* string

the role UID onto which to assign an actor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item#role_uid RoleAssignmentItem#role_uid}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID.

If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item#org_id RoleAssignmentItem#org_id}

---

##### `serviceAccountId`<sup>Optional</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

the service account onto which the role is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item#service_account_id RoleAssignmentItem#service_account_id}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

the team onto which the role is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item#team_id RoleAssignmentItem#team_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.roleAssignmentItem.RoleAssignmentItemConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

the user onto which the role is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/role_assignment_item#user_id RoleAssignmentItem#user_id}

---




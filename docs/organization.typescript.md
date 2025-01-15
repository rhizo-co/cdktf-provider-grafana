# `grafana_organization`

Refer to the Terraform Registory for docs: [`grafana_organization`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization).

# `organization` Submodule <a name="`organization` Submodule" id="rhizo-co-terraform-provider-grafana.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="rhizo-co-terraform-provider-grafana.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization grafana_organization}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.organization.Organization.Initializer"></a>

```typescript
import { organization } from 'rhizo-co-terraform-provider-grafana'

new organization.Organization(scope: Construct, id: string, config: OrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig">OrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.organization.Organization.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig">OrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetAdmins">resetAdmins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetAdminUser">resetAdminUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetCreateUsers">resetCreateUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetEditors">resetEditors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetUsersWithoutAccess">resetUsersWithoutAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.resetViewers">resetViewers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.organization.Organization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.organization.Organization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.organization.Organization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.organization.Organization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.organization.Organization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.organization.Organization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.organization.Organization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdmins` <a name="resetAdmins" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetAdmins"></a>

```typescript
public resetAdmins(): void
```

##### `resetAdminUser` <a name="resetAdminUser" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetAdminUser"></a>

```typescript
public resetAdminUser(): void
```

##### `resetCreateUsers` <a name="resetCreateUsers" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetCreateUsers"></a>

```typescript
public resetCreateUsers(): void
```

##### `resetEditors` <a name="resetEditors" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetEditors"></a>

```typescript
public resetEditors(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUsersWithoutAccess` <a name="resetUsersWithoutAccess" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetUsersWithoutAccess"></a>

```typescript
public resetUsersWithoutAccess(): void
```

##### `resetViewers` <a name="resetViewers" id="rhizo-co-terraform-provider-grafana.organization.Organization.resetViewers"></a>

```typescript
public resetViewers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.organization.Organization.isConstruct"></a>

```typescript
import { organization } from 'rhizo-co-terraform-provider-grafana'

organization.Organization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformElement"></a>

```typescript
import { organization } from 'rhizo-co-terraform-provider-grafana'

organization.Organization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformResource"></a>

```typescript
import { organization } from 'rhizo-co-terraform-provider-grafana'

organization.Organization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.orgId">orgId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.adminsInput">adminsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.adminUserInput">adminUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.createUsersInput">createUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.editorsInput">editorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.usersWithoutAccessInput">usersWithoutAccessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.viewersInput">viewersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.admins">admins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.adminUser">adminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.createUsers">createUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.editors">editors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.usersWithoutAccess">usersWithoutAccess</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.viewers">viewers</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.orgId"></a>

```typescript
public readonly orgId: number;
```

- *Type:* number

---

##### `adminsInput`<sup>Optional</sup> <a name="adminsInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.adminsInput"></a>

```typescript
public readonly adminsInput: string[];
```

- *Type:* string[]

---

##### `adminUserInput`<sup>Optional</sup> <a name="adminUserInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.adminUserInput"></a>

```typescript
public readonly adminUserInput: string;
```

- *Type:* string

---

##### `createUsersInput`<sup>Optional</sup> <a name="createUsersInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.createUsersInput"></a>

```typescript
public readonly createUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `editorsInput`<sup>Optional</sup> <a name="editorsInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.editorsInput"></a>

```typescript
public readonly editorsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `usersWithoutAccessInput`<sup>Optional</sup> <a name="usersWithoutAccessInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.usersWithoutAccessInput"></a>

```typescript
public readonly usersWithoutAccessInput: string[];
```

- *Type:* string[]

---

##### `viewersInput`<sup>Optional</sup> <a name="viewersInput" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.viewersInput"></a>

```typescript
public readonly viewersInput: string[];
```

- *Type:* string[]

---

##### `admins`<sup>Required</sup> <a name="admins" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.adminUser"></a>

```typescript
public readonly adminUser: string;
```

- *Type:* string

---

##### `createUsers`<sup>Required</sup> <a name="createUsers" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.createUsers"></a>

```typescript
public readonly createUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `editors`<sup>Required</sup> <a name="editors" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.editors"></a>

```typescript
public readonly editors: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `usersWithoutAccess`<sup>Required</sup> <a name="usersWithoutAccess" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.usersWithoutAccess"></a>

```typescript
public readonly usersWithoutAccess: string[];
```

- *Type:* string[]

---

##### `viewers`<sup>Required</sup> <a name="viewers" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.viewers"></a>

```typescript
public readonly viewers: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.organization.Organization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.Initializer"></a>

```typescript
import { organization } from 'rhizo-co-terraform-provider-grafana'

const organizationConfig: organization.OrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.name">name</a></code> | <code>string</code> | The display name for the Grafana organization created. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.admins">admins</a></code> | <code>string[]</code> | A list of email addresses corresponding to users who should be given admin access to the organization. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.adminUser">adminUser</a></code> | <code>string</code> | The login name of the configured default admin user for the Grafana installation. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.createUsers">createUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to create Grafana users specified in the organization's membership if they don't already exist in Grafana. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.editors">editors</a></code> | <code>string[]</code> | A list of email addresses corresponding to users who should be given editor access to the organization. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.usersWithoutAccess">usersWithoutAccess</a></code> | <code>string[]</code> | A list of email addresses corresponding to users who should be given none access to the organization. |
| <code><a href="#rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.viewers">viewers</a></code> | <code>string[]</code> | A list of email addresses corresponding to users who should be given viewer access to the organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name for the Grafana organization created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#name Organization#name}

---

##### `admins`<sup>Optional</sup> <a name="admins" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

A list of email addresses corresponding to users who should be given admin access to the organization.

Note: users specified here must already exist in
Grafana unless 'create_users' is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#admins Organization#admins}

---

##### `adminUser`<sup>Optional</sup> <a name="adminUser" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.adminUser"></a>

```typescript
public readonly adminUser: string;
```

- *Type:* string

The login name of the configured default admin user for the Grafana installation.

If unset, this value defaults to admin, the Grafana default.
Grafana adds the default admin user to all organizations automatically upon
creation, and this parameter keeps Terraform from removing it from
organizations.
Defaults to `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#admin_user Organization#admin_user}

---

##### `createUsers`<sup>Optional</sup> <a name="createUsers" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.createUsers"></a>

```typescript
public readonly createUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to create Grafana users specified in the organization's membership if they don't already exist in Grafana.

If unspecified, this
parameter defaults to true, creating placeholder users with the name, login,
and email set to the email of the user, and a random password. Setting this
option to false will cause an error to be thrown for any users that do not
already exist in Grafana.
Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#create_users Organization#create_users}

---

##### `editors`<sup>Optional</sup> <a name="editors" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.editors"></a>

```typescript
public readonly editors: string[];
```

- *Type:* string[]

A list of email addresses corresponding to users who should be given editor access to the organization.

Note: users specified here must already exist in
Grafana unless 'create_users' is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#editors Organization#editors}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `usersWithoutAccess`<sup>Optional</sup> <a name="usersWithoutAccess" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.usersWithoutAccess"></a>

```typescript
public readonly usersWithoutAccess: string[];
```

- *Type:* string[]

A list of email addresses corresponding to users who should be given none access to the organization.

Note: users specified here must already exist in Grafana, unless 'create_users' is
set to true. This feature is only available in Grafana 10.2+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#users_without_access Organization#users_without_access}

---

##### `viewers`<sup>Optional</sup> <a name="viewers" id="rhizo-co-terraform-provider-grafana.organization.OrganizationConfig.property.viewers"></a>

```typescript
public readonly viewers: string[];
```

- *Type:* string[]

A list of email addresses corresponding to users who should be given viewer access to the organization.

Note: users specified here must already exist in
Grafana unless 'create_users' is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/organization#viewers Organization#viewers}

---




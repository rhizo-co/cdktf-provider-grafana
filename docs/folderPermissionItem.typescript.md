# `grafana_folder_permission_item`

Refer to the Terraform Registory for docs: [`grafana_folder_permission_item`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item).

# `folderPermissionItem` Submodule <a name="`folderPermissionItem` Submodule" id="rhizo-co-terraform-provider-grafana.folderPermissionItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderPermissionItem <a name="FolderPermissionItem" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item grafana_folder_permission_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer"></a>

```typescript
import { folderPermissionItem } from 'rhizo-co-terraform-provider-grafana'

new folderPermissionItem.FolderPermissionItem(scope: Construct, id: string, config: FolderPermissionItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig">FolderPermissionItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig">FolderPermissionItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetTeam` <a name="resetTeam" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetTeam"></a>

```typescript
public resetTeam(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isConstruct"></a>

```typescript
import { folderPermissionItem } from 'rhizo-co-terraform-provider-grafana'

folderPermissionItem.FolderPermissionItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformElement"></a>

```typescript
import { folderPermissionItem } from 'rhizo-co-terraform-provider-grafana'

folderPermissionItem.FolderPermissionItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformResource"></a>

```typescript
import { folderPermissionItem } from 'rhizo-co-terraform-provider-grafana'

folderPermissionItem.FolderPermissionItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.folderUidInput">folderUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.teamInput">teamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.folderUid">folderUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `folderUidInput`<sup>Optional</sup> <a name="folderUidInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.folderUidInput"></a>

```typescript
public readonly folderUidInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `folderUid`<sup>Required</sup> <a name="folderUid" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.folderUid"></a>

```typescript
public readonly folderUid: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderPermissionItemConfig <a name="FolderPermissionItemConfig" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.Initializer"></a>

```typescript
import { folderPermissionItem } from 'rhizo-co-terraform-provider-grafana'

const folderPermissionItemConfig: folderPermissionItem.FolderPermissionItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.folderUid">folderUid</a></code> | <code>string</code> | The UID of the folder. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.permission">permission</a></code> | <code>string</code> | the permission to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.role">role</a></code> | <code>string</code> | the role onto which the permission is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.team">team</a></code> | <code>string</code> | the team onto which the permission is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.user">user</a></code> | <code>string</code> | the user or service account onto which the permission is to be assigned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folderUid`<sup>Required</sup> <a name="folderUid" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.folderUid"></a>

```typescript
public readonly folderUid: string;
```

- *Type:* string

The UID of the folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#folder_uid FolderPermissionItem#folder_uid}

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

the permission to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#permission FolderPermissionItem#permission}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID.

If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#org_id FolderPermissionItem#org_id}

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

the role onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#role FolderPermissionItem#role}

---

##### `team`<sup>Optional</sup> <a name="team" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

the team onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#team FolderPermissionItem#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.folderPermissionItem.FolderPermissionItemConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

the user or service account onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/folder_permission_item#user FolderPermissionItem#user}

---




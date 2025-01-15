# `grafana_service_account_permission`

Refer to the Terraform Registory for docs: [`grafana_service_account_permission`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission).

# `serviceAccountPermission` Submodule <a name="`serviceAccountPermission` Submodule" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountPermission <a name="ServiceAccountPermission" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission grafana_service_account_permission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

new serviceAccountPermission.ServiceAccountPermission(scope: Construct, id: string, config: ServiceAccountPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig">ServiceAccountPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig">ServiceAccountPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPermissions` <a name="putPermissions" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | ServiceAccountPermissionPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetPermissions` <a name="resetPermissions" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isConstruct"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

serviceAccountPermission.ServiceAccountPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformElement"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

serviceAccountPermission.ServiceAccountPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformResource"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

serviceAccountPermission.ServiceAccountPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.permissions">permissions</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList">ServiceAccountPermissionPermissionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.permissions"></a>

```typescript
public readonly permissions: ServiceAccountPermissionPermissionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList">ServiceAccountPermissionPermissionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | ServiceAccountPermissionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountPermissionConfig <a name="ServiceAccountPermissionConfig" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.Initializer"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

const serviceAccountPermissionConfig: serviceAccountPermission.ServiceAccountPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | The id of the service account. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#id ServiceAccountPermission#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]</code> | permissions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

The id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#service_account_id ServiceAccountPermission#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#id ServiceAccountPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#org_id ServiceAccountPermission#org_id}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | ServiceAccountPermissionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#permissions ServiceAccountPermission#permissions}

---

### ServiceAccountPermissionPermissions <a name="ServiceAccountPermissionPermissions" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.Initializer"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

const serviceAccountPermissionPermissions: serviceAccountPermission.ServiceAccountPermissionPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.permission">permission</a></code> | <code>string</code> | Permission to associate with item. Must be one of `View`, `Edit`, or `Admin`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.teamId">teamId</a></code> | <code>string</code> | ID of the team to manage permissions for. Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.userId">userId</a></code> | <code>string</code> | ID of the user or service account to manage permissions for. Defaults to `0`. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Permission to associate with item. Must be one of `View`, `Edit`, or `Admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#permission ServiceAccountPermission#permission}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

ID of the team to manage permissions for. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#team_id ServiceAccountPermission#team_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

ID of the user or service account to manage permissions for. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/service_account_permission#user_id ServiceAccountPermission#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAccountPermissionPermissionsList <a name="ServiceAccountPermissionPermissionsList" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

new serviceAccountPermission.ServiceAccountPermissionPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.get"></a>

```typescript
public get(index: number): ServiceAccountPermissionPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceAccountPermissionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>[]

---


### ServiceAccountPermissionPermissionsOutputReference <a name="ServiceAccountPermissionPermissionsOutputReference" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer"></a>

```typescript
import { serviceAccountPermission } from 'rhizo-co-terraform-provider-grafana'

new serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceAccountPermissionPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.serviceAccountPermission.ServiceAccountPermissionPermissions">ServiceAccountPermissionPermissions</a>

---




# `grafana_dashboard_permission_item`

Refer to the Terraform Registory for docs: [`grafana_dashboard_permission_item`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item).

# `dashboardPermissionItem` Submodule <a name="`dashboardPermissionItem` Submodule" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardPermissionItem <a name="DashboardPermissionItem" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item grafana_dashboard_permission_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer"></a>

```typescript
import { dashboardPermissionItem } from 'rhizo-co-terraform-provider-grafana'

new dashboardPermissionItem.DashboardPermissionItem(scope: Construct, id: string, config: DashboardPermissionItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig">DashboardPermissionItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig">DashboardPermissionItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetTeam` <a name="resetTeam" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetTeam"></a>

```typescript
public resetTeam(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isConstruct"></a>

```typescript
import { dashboardPermissionItem } from 'rhizo-co-terraform-provider-grafana'

dashboardPermissionItem.DashboardPermissionItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformElement"></a>

```typescript
import { dashboardPermissionItem } from 'rhizo-co-terraform-provider-grafana'

dashboardPermissionItem.DashboardPermissionItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformResource"></a>

```typescript
import { dashboardPermissionItem } from 'rhizo-co-terraform-provider-grafana'

dashboardPermissionItem.DashboardPermissionItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dashboardUidInput">dashboardUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.teamInput">teamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dashboardUid">dashboardUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `dashboardUidInput`<sup>Optional</sup> <a name="dashboardUidInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dashboardUidInput"></a>

```typescript
public readonly dashboardUidInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `dashboardUid`<sup>Required</sup> <a name="dashboardUid" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.dashboardUid"></a>

```typescript
public readonly dashboardUid: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardPermissionItemConfig <a name="DashboardPermissionItemConfig" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.Initializer"></a>

```typescript
import { dashboardPermissionItem } from 'rhizo-co-terraform-provider-grafana'

const dashboardPermissionItemConfig: dashboardPermissionItem.DashboardPermissionItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.dashboardUid">dashboardUid</a></code> | <code>string</code> | The UID of the dashboard. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.permission">permission</a></code> | <code>string</code> | the permission to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.role">role</a></code> | <code>string</code> | the role onto which the permission is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.team">team</a></code> | <code>string</code> | the team onto which the permission is to be assigned. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.user">user</a></code> | <code>string</code> | the user or service account onto which the permission is to be assigned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboardUid`<sup>Required</sup> <a name="dashboardUid" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.dashboardUid"></a>

```typescript
public readonly dashboardUid: string;
```

- *Type:* string

The UID of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#dashboard_uid DashboardPermissionItem#dashboard_uid}

---

##### `permission`<sup>Required</sup> <a name="permission" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

the permission to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#permission DashboardPermissionItem#permission}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID.

If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#org_id DashboardPermissionItem#org_id}

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

the role onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#role DashboardPermissionItem#role}

---

##### `team`<sup>Optional</sup> <a name="team" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

the team onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#team DashboardPermissionItem#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.dashboardPermissionItem.DashboardPermissionItemConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

the user or service account onto which the permission is to be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_permission_item#user DashboardPermissionItem#user}

---




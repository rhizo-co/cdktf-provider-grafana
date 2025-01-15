# `grafana_dashboard_public`

Refer to the Terraform Registory for docs: [`grafana_dashboard_public`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public).

# `dashboardPublic` Submodule <a name="`dashboardPublic` Submodule" id="rhizo-co-terraform-provider-grafana.dashboardPublic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardPublic <a name="DashboardPublic" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public grafana_dashboard_public}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer"></a>

```typescript
import { dashboardPublic } from 'rhizo-co-terraform-provider-grafana'

new dashboardPublic.DashboardPublic(scope: Construct, id: string, config: DashboardPublicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig">DashboardPublicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig">DashboardPublicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetAnnotationsEnabled">resetAnnotationsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetShare">resetShare</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetTimeSelectionEnabled">resetTimeSelectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetUid">resetUid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessToken` <a name="resetAccessToken" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAnnotationsEnabled` <a name="resetAnnotationsEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetAnnotationsEnabled"></a>

```typescript
public resetAnnotationsEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetShare` <a name="resetShare" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetShare"></a>

```typescript
public resetShare(): void
```

##### `resetTimeSelectionEnabled` <a name="resetTimeSelectionEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetTimeSelectionEnabled"></a>

```typescript
public resetTimeSelectionEnabled(): void
```

##### `resetUid` <a name="resetUid" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.resetUid"></a>

```typescript
public resetUid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isConstruct"></a>

```typescript
import { dashboardPublic } from 'rhizo-co-terraform-provider-grafana'

dashboardPublic.DashboardPublic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformElement"></a>

```typescript
import { dashboardPublic } from 'rhizo-co-terraform-provider-grafana'

dashboardPublic.DashboardPublic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformResource"></a>

```typescript
import { dashboardPublic } from 'rhizo-co-terraform-provider-grafana'

dashboardPublic.DashboardPublic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.annotationsEnabledInput">annotationsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dashboardUidInput">dashboardUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.shareInput">shareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.timeSelectionEnabledInput">timeSelectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.annotationsEnabled">annotationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dashboardUid">dashboardUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.share">share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.timeSelectionEnabled">timeSelectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.uid">uid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `annotationsEnabledInput`<sup>Optional</sup> <a name="annotationsEnabledInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.annotationsEnabledInput"></a>

```typescript
public readonly annotationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dashboardUidInput`<sup>Optional</sup> <a name="dashboardUidInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dashboardUidInput"></a>

```typescript
public readonly dashboardUidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.shareInput"></a>

```typescript
public readonly shareInput: string;
```

- *Type:* string

---

##### `timeSelectionEnabledInput`<sup>Optional</sup> <a name="timeSelectionEnabledInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.timeSelectionEnabledInput"></a>

```typescript
public readonly timeSelectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `annotationsEnabled`<sup>Required</sup> <a name="annotationsEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.annotationsEnabled"></a>

```typescript
public readonly annotationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dashboardUid`<sup>Required</sup> <a name="dashboardUid" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.dashboardUid"></a>

```typescript
public readonly dashboardUid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

---

##### `timeSelectionEnabled`<sup>Required</sup> <a name="timeSelectionEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.timeSelectionEnabled"></a>

```typescript
public readonly timeSelectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardPublicConfig <a name="DashboardPublicConfig" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.Initializer"></a>

```typescript
import { dashboardPublic } from 'rhizo-co-terraform-provider-grafana'

const dashboardPublicConfig: dashboardPublic.DashboardPublicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.dashboardUid">dashboardUid</a></code> | <code>string</code> | The unique identifier of the original dashboard. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.accessToken">accessToken</a></code> | <code>string</code> | A public unique identifier of a public dashboard. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.annotationsEnabled">annotationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to show annotations. The default value is `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#id DashboardPublic#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to enable the public dashboard. The default value is `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.share">share</a></code> | <code>string</code> | Set the share mode. The default value is `public`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.timeSelectionEnabled">timeSelectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to enable the time picker in the public dashboard. The default value is `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.uid">uid</a></code> | <code>string</code> | The unique identifier of a public dashboard. It's automatically generated if not provided when creating a public dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboardUid`<sup>Required</sup> <a name="dashboardUid" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.dashboardUid"></a>

```typescript
public readonly dashboardUid: string;
```

- *Type:* string

The unique identifier of the original dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#dashboard_uid DashboardPublic#dashboard_uid}

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

A public unique identifier of a public dashboard.

This is used to construct its URL. It's automatically generated if not provided when creating a public dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#access_token DashboardPublic#access_token}

---

##### `annotationsEnabled`<sup>Optional</sup> <a name="annotationsEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.annotationsEnabled"></a>

```typescript
public readonly annotationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to show annotations. The default value is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#annotations_enabled DashboardPublic#annotations_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#id DashboardPublic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to enable the public dashboard. The default value is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#is_enabled DashboardPublic#is_enabled}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#org_id DashboardPublic#org_id}

---

##### `share`<sup>Optional</sup> <a name="share" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

Set the share mode. The default value is `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#share DashboardPublic#share}

---

##### `timeSelectionEnabled`<sup>Optional</sup> <a name="timeSelectionEnabled" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.timeSelectionEnabled"></a>

```typescript
public readonly timeSelectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to enable the time picker in the public dashboard. The default value is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#time_selection_enabled DashboardPublic#time_selection_enabled}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dashboardPublic.DashboardPublicConfig.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

The unique identifier of a public dashboard. It's automatically generated if not provided when creating a public dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/dashboard_public#uid DashboardPublic#uid}

---




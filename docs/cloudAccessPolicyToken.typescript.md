# `grafana_cloud_access_policy_token`

Refer to the Terraform Registory for docs: [`grafana_cloud_access_policy_token`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token).

# `cloudAccessPolicyToken` Submodule <a name="`cloudAccessPolicyToken` Submodule" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAccessPolicyToken <a name="CloudAccessPolicyToken" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token grafana_cloud_access_policy_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer"></a>

```typescript
import { cloudAccessPolicyToken } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicyToken.CloudAccessPolicyToken(scope: Construct, id: string, config: CloudAccessPolicyTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig">CloudAccessPolicyTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig">CloudAccessPolicyTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isConstruct"></a>

```typescript
import { cloudAccessPolicyToken } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicyToken.CloudAccessPolicyToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformElement"></a>

```typescript
import { cloudAccessPolicyToken } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformResource"></a>

```typescript
import { cloudAccessPolicyToken } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.accessPolicyIdInput">accessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accessPolicyIdInput`<sup>Optional</sup> <a name="accessPolicyIdInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.accessPolicyIdInput"></a>

```typescript
public readonly accessPolicyIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAccessPolicyTokenConfig <a name="CloudAccessPolicyTokenConfig" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.Initializer"></a>

```typescript
import { cloudAccessPolicyToken } from 'rhizo-co-terraform-provider-grafana'

const cloudAccessPolicyTokenConfig: cloudAccessPolicyToken.CloudAccessPolicyTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | ID of the access policy for which to create a token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.name">name</a></code> | <code>string</code> | Name of the access policy token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.region">region</a></code> | <code>string</code> | Region of the access policy. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the access policy token. Defaults to the name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | Expiration date of the access policy token. Does not expire by default. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#id CloudAccessPolicyToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

ID of the access policy for which to create a token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#access_policy_id CloudAccessPolicyToken#access_policy_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the access policy token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#name CloudAccessPolicyToken#name}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the access policy.

Should be set to the same region as the access policy. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#region CloudAccessPolicyToken#region}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the access policy token. Defaults to the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#display_name CloudAccessPolicyToken#display_name}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

Expiration date of the access policy token. Does not expire by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#expires_at CloudAccessPolicyToken#expires_at}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicyToken.CloudAccessPolicyTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy_token#id CloudAccessPolicyToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




# `grafana_cloud_access_policy`

Refer to the Terraform Registory for docs: [`grafana_cloud_access_policy`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy).

# `cloudAccessPolicy` Submodule <a name="`cloudAccessPolicy` Submodule" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAccessPolicy <a name="CloudAccessPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy grafana_cloud_access_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicy.CloudAccessPolicy(scope: Construct, id: string, config: CloudAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig">CloudAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig">CloudAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.putRealm">putRealm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRealm` <a name="putRealm" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.putRealm"></a>

```typescript
public putRealm(value: IResolvable | CloudAccessPolicyRealm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.putRealm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isConstruct"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicy.CloudAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformElement"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicy.CloudAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformResource"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

cloudAccessPolicy.CloudAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.realm">realm</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList">CloudAccessPolicyRealmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.realmInput">realmInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `realm`<sup>Required</sup> <a name="realm" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.realm"></a>

```typescript
public readonly realm: CloudAccessPolicyRealmList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList">CloudAccessPolicyRealmList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.realmInput"></a>

```typescript
public readonly realmInput: IResolvable | CloudAccessPolicyRealm[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAccessPolicyConfig <a name="CloudAccessPolicyConfig" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

const cloudAccessPolicyConfig: cloudAccessPolicy.CloudAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the access policy. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.realm">realm</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]</code> | realm block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.region">region</a></code> | <code>string</code> | Region where the API is deployed. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Scopes of the access policy. See https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/#scopes for possible values. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the access policy. Defaults to the name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#id CloudAccessPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#name CloudAccessPolicy#name}

---

##### `realm`<sup>Required</sup> <a name="realm" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.realm"></a>

```typescript
public readonly realm: IResolvable | CloudAccessPolicyRealm[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]

realm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#realm CloudAccessPolicy#realm}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the API is deployed.

Generally where the stack is deployed. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#region CloudAccessPolicy#region}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Scopes of the access policy. See https://grafana.com/docs/grafana-cloud/account-management/authentication-and-permissions/access-policies/#scopes for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#scopes CloudAccessPolicy#scopes}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the access policy. Defaults to the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#display_name CloudAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#id CloudAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudAccessPolicyRealm <a name="CloudAccessPolicyRealm" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

const cloudAccessPolicyRealm: cloudAccessPolicy.CloudAccessPolicyRealm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the org or stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.type">type</a></code> | <code>string</code> | Whether a policy applies to a Cloud org or a specific stack. Should be one of `org` or `stack`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.labelPolicy">labelPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]</code> | label_policy block. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier of the org or stack.

For orgs, this is the slug, for stacks, this is the stack ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#identifier CloudAccessPolicy#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether a policy applies to a Cloud org or a specific stack. Should be one of `org` or `stack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#type CloudAccessPolicy#type}

---

##### `labelPolicy`<sup>Optional</sup> <a name="labelPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm.property.labelPolicy"></a>

```typescript
public readonly labelPolicy: IResolvable | CloudAccessPolicyRealmLabelPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]

label_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#label_policy CloudAccessPolicy#label_policy}

---

### CloudAccessPolicyRealmLabelPolicy <a name="CloudAccessPolicyRealmLabelPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

const cloudAccessPolicyRealmLabelPolicy: cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy.property.selector">selector</a></code> | <code>string</code> | The label selector to match in metrics or logs query. Should be in PromQL or LogQL format. |

---

##### `selector`<sup>Required</sup> <a name="selector" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

The label selector to match in metrics or logs query. Should be in PromQL or LogQL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_access_policy#selector CloudAccessPolicy#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAccessPolicyRealmLabelPolicyList <a name="CloudAccessPolicyRealmLabelPolicyList" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.get"></a>

```typescript
public get(index: number): CloudAccessPolicyRealmLabelPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudAccessPolicyRealmLabelPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]

---


### CloudAccessPolicyRealmLabelPolicyOutputReference <a name="CloudAccessPolicyRealmLabelPolicyOutputReference" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudAccessPolicyRealmLabelPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>

---


### CloudAccessPolicyRealmList <a name="CloudAccessPolicyRealmList" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicy.CloudAccessPolicyRealmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.get"></a>

```typescript
public get(index: number): CloudAccessPolicyRealmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudAccessPolicyRealm[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a>[]

---


### CloudAccessPolicyRealmOutputReference <a name="CloudAccessPolicyRealmOutputReference" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer"></a>

```typescript
import { cloudAccessPolicy } from 'rhizo-co-terraform-provider-grafana'

new cloudAccessPolicy.CloudAccessPolicyRealmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.putLabelPolicy">putLabelPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.resetLabelPolicy">resetLabelPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelPolicy` <a name="putLabelPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.putLabelPolicy"></a>

```typescript
public putLabelPolicy(value: IResolvable | CloudAccessPolicyRealmLabelPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.putLabelPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]

---

##### `resetLabelPolicy` <a name="resetLabelPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.resetLabelPolicy"></a>

```typescript
public resetLabelPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.labelPolicy">labelPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList">CloudAccessPolicyRealmLabelPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.labelPolicyInput">labelPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelPolicy`<sup>Required</sup> <a name="labelPolicy" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.labelPolicy"></a>

```typescript
public readonly labelPolicy: CloudAccessPolicyRealmLabelPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicyList">CloudAccessPolicyRealmLabelPolicyList</a>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `labelPolicyInput`<sup>Optional</sup> <a name="labelPolicyInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.labelPolicyInput"></a>

```typescript
public readonly labelPolicyInput: IResolvable | CloudAccessPolicyRealmLabelPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmLabelPolicy">CloudAccessPolicyRealmLabelPolicy</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAccessPolicyRealm | IResolvable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudAccessPolicy.CloudAccessPolicyRealm">CloudAccessPolicyRealm</a> | cdktf.IResolvable

---




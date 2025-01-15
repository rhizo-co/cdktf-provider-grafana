# `grafana_cloud_stack_service_account_token`

Refer to the Terraform Registory for docs: [`grafana_cloud_stack_service_account_token`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token).

# `cloudStackServiceAccountToken` Submodule <a name="`cloudStackServiceAccountToken` Submodule" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudStackServiceAccountToken <a name="CloudStackServiceAccountToken" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token grafana_cloud_stack_service_account_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer"></a>

```typescript
import { cloudStackServiceAccountToken } from 'rhizo-co-terraform-provider-grafana'

new cloudStackServiceAccountToken.CloudStackServiceAccountToken(scope: Construct, id: string, config: CloudStackServiceAccountTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig">CloudStackServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig">CloudStackServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetSecondsToLive">resetSecondsToLive</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecondsToLive` <a name="resetSecondsToLive" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.resetSecondsToLive"></a>

```typescript
public resetSecondsToLive(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isConstruct"></a>

```typescript
import { cloudStackServiceAccountToken } from 'rhizo-co-terraform-provider-grafana'

cloudStackServiceAccountToken.CloudStackServiceAccountToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformElement"></a>

```typescript
import { cloudStackServiceAccountToken } from 'rhizo-co-terraform-provider-grafana'

cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformResource"></a>

```typescript
import { cloudStackServiceAccountToken } from 'rhizo-co-terraform-provider-grafana'

cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.hasExpired">hasExpired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.secondsToLiveInput">secondsToLiveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.stackSlugInput">stackSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.stackSlug">stackSlug</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `hasExpired`<sup>Required</sup> <a name="hasExpired" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.hasExpired"></a>

```typescript
public readonly hasExpired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secondsToLiveInput`<sup>Optional</sup> <a name="secondsToLiveInput" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.secondsToLiveInput"></a>

```typescript
public readonly secondsToLiveInput: number;
```

- *Type:* number

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `stackSlugInput`<sup>Optional</sup> <a name="stackSlugInput" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.stackSlugInput"></a>

```typescript
public readonly stackSlugInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `stackSlug`<sup>Required</sup> <a name="stackSlug" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.stackSlug"></a>

```typescript
public readonly stackSlug: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudStackServiceAccountTokenConfig <a name="CloudStackServiceAccountTokenConfig" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.Initializer"></a>

```typescript
import { cloudStackServiceAccountToken } from 'rhizo-co-terraform-provider-grafana'

const cloudStackServiceAccountTokenConfig: cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#name CloudStackServiceAccountToken#name}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#service_account_id CloudStackServiceAccountToken#service_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.stackSlug">stackSlug</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#stack_slug CloudStackServiceAccountToken#stack_slug}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#id CloudStackServiceAccountToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#seconds_to_live CloudStackServiceAccountToken#seconds_to_live}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#name CloudStackServiceAccountToken#name}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#service_account_id CloudStackServiceAccountToken#service_account_id}.

---

##### `stackSlug`<sup>Required</sup> <a name="stackSlug" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.stackSlug"></a>

```typescript
public readonly stackSlug: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#stack_slug CloudStackServiceAccountToken#stack_slug}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#id CloudStackServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secondsToLive`<sup>Optional</sup> <a name="secondsToLive" id="rhizo-co-terraform-provider-grafana.cloudStackServiceAccountToken.CloudStackServiceAccountTokenConfig.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack_service_account_token#seconds_to_live CloudStackServiceAccountToken#seconds_to_live}.

---




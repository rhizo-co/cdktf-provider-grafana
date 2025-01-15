# `grafana_cloud_provider_azure_credential`

Refer to the Terraform Registory for docs: [`grafana_cloud_provider_azure_credential`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential).

# `cloudProviderAzureCredential` Submodule <a name="`cloudProviderAzureCredential` Submodule" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderAzureCredential <a name="CloudProviderAzureCredential" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAzureCredential.CloudProviderAzureCredential(scope: Construct, id: string, config: CloudProviderAzureCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig">CloudProviderAzureCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig">CloudProviderAzureCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.putResourceDiscoveryTagFilter">putResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.resetResourceDiscoveryTagFilter">resetResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putResourceDiscoveryTagFilter` <a name="putResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.putResourceDiscoveryTagFilter"></a>

```typescript
public putResourceDiscoveryTagFilter(value: IResolvable | CloudProviderAzureCredentialResourceDiscoveryTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.putResourceDiscoveryTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---

##### `resetResourceDiscoveryTagFilter` <a name="resetResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.resetResourceDiscoveryTagFilter"></a>

```typescript
public resetResourceDiscoveryTagFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isConstruct"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAzureCredential.CloudProviderAzureCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformElement"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformResource"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList">CloudProviderAzureCredentialResourceDiscoveryTagFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceDiscoveryTagFilterInput">resourceDiscoveryTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilter`<sup>Required</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: CloudProviderAzureCredentialResourceDiscoveryTagFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList">CloudProviderAzureCredentialResourceDiscoveryTagFilterList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilterInput`<sup>Optional</sup> <a name="resourceDiscoveryTagFilterInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.resourceDiscoveryTagFilterInput"></a>

```typescript
public readonly resourceDiscoveryTagFilterInput: IResolvable | CloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderAzureCredentialConfig <a name="CloudProviderAzureCredentialConfig" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.Initializer"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAzureCredentialConfig: cloudProviderAzureCredential.CloudProviderAzureCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the Azure Credential. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret of the Azure Credential. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.name">name</a></code> | <code>string</code> | The name of the Azure Credential. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.stackId">stackId</a></code> | <code>string</code> | The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The tenant ID of the Azure Credential. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | resource_discovery_tag_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the Azure Credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#client_id CloudProviderAzureCredential#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret of the Azure Credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#client_secret CloudProviderAzureCredential#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Azure Credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#name CloudProviderAzureCredential#name}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#stack_id CloudProviderAzureCredential#stack_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The tenant ID of the Azure Credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#tenant_id CloudProviderAzureCredential#tenant_id}

---

##### `resourceDiscoveryTagFilter`<sup>Optional</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialConfig.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: IResolvable | CloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

resource_discovery_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#resource_discovery_tag_filter CloudProviderAzureCredential#resource_discovery_tag_filter}

---

### CloudProviderAzureCredentialResourceDiscoveryTagFilter <a name="CloudProviderAzureCredentialResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter.Initializer"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAzureCredentialResourceDiscoveryTagFilter: cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter.property.key">key</a></code> | <code>string</code> | The key of the tag filter. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter.property.value">value</a></code> | <code>string</code> | The value of the tag filter. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#key CloudProviderAzureCredential#key}

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_azure_credential#value CloudProviderAzureCredential#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderAzureCredentialResourceDiscoveryTagFilterList <a name="CloudProviderAzureCredentialResourceDiscoveryTagFilterList" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.get"></a>

```typescript
public get(index: number): CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---


### CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference <a name="CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer"></a>

```typescript
import { cloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAzureCredentialResourceDiscoveryTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAzureCredential.CloudProviderAzureCredentialResourceDiscoveryTagFilter">CloudProviderAzureCredentialResourceDiscoveryTagFilter</a>

---




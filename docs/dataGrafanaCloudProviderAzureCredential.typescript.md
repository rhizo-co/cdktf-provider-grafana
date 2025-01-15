# `data_grafana_cloud_provider_azure_credential`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_provider_azure_credential`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_azure_credential).

# `dataGrafanaCloudProviderAzureCredential` Submodule <a name="`dataGrafanaCloudProviderAzureCredential` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudProviderAzureCredential <a name="DataGrafanaCloudProviderAzureCredential" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential(scope: Construct, id: string, config: DataGrafanaCloudProviderAzureCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig">DataGrafanaCloudProviderAzureCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig">DataGrafanaCloudProviderAzureCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.putResourceDiscoveryTagFilter">putResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.resetResourceDiscoveryTagFilter">resetResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putResourceDiscoveryTagFilter` <a name="putResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.putResourceDiscoveryTagFilter"></a>

```typescript
public putResourceDiscoveryTagFilter(value: IResolvable | DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.putResourceDiscoveryTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---

##### `resetResourceDiscoveryTagFilter` <a name="resetResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.resetResourceDiscoveryTagFilter"></a>

```typescript
public resetResourceDiscoveryTagFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isConstruct"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceDiscoveryTagFilterInput">resourceDiscoveryTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilter`<sup>Required</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilterInput`<sup>Optional</sup> <a name="resourceDiscoveryTagFilterInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceDiscoveryTagFilterInput"></a>

```typescript
public readonly resourceDiscoveryTagFilterInput: IResolvable | DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudProviderAzureCredentialConfig <a name="DataGrafanaCloudProviderAzureCredentialConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAzureCredentialConfig: dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID given by the Grafana Cloud Provider API to this Azure Credential resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.stackId">stackId</a></code> | <code>string</code> | The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | resource_discovery_tag_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID given by the Grafana Cloud Provider API to this Azure Credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_azure_credential#resource_id DataGrafanaCloudProviderAzureCredential#resource_id}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_azure_credential#stack_id DataGrafanaCloudProviderAzureCredential#stack_id}

---

##### `resourceDiscoveryTagFilter`<sup>Optional</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialConfig.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: IResolvable | DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

resource_discovery_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_azure_credential#resource_discovery_tag_filter DataGrafanaCloudProviderAzureCredential#resource_discovery_tag_filter}

---

### DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter <a name="DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter: dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList <a name="DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>[]

---


### DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference <a name="DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAzureCredential } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAzureCredential.DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter">DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter</a>

---




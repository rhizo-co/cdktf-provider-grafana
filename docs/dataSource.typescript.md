# `grafana_data_source`

Refer to the Terraform Registory for docs: [`grafana_data_source`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source).

# `dataSource` Submodule <a name="`dataSource` Submodule" id="rhizo-co-terraform-provider-grafana.dataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSource <a name="DataSource" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source grafana_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer"></a>

```typescript
import { dataSource } from 'rhizo-co-terraform-provider-grafana'

new dataSource.DataSource(scope: Construct, id: string, config: DataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig">DataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig">DataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetBasicAuthEnabled">resetBasicAuthEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetBasicAuthUsername">resetBasicAuthUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetJsonDataEncoded">resetJsonDataEncoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetSecureJsonDataEncoded">resetSecureJsonDataEncoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessMode` <a name="resetAccessMode" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetAccessMode"></a>

```typescript
public resetAccessMode(): void
```

##### `resetBasicAuthEnabled` <a name="resetBasicAuthEnabled" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetBasicAuthEnabled"></a>

```typescript
public resetBasicAuthEnabled(): void
```

##### `resetBasicAuthUsername` <a name="resetBasicAuthUsername" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetBasicAuthUsername"></a>

```typescript
public resetBasicAuthUsername(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetJsonDataEncoded` <a name="resetJsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetJsonDataEncoded"></a>

```typescript
public resetJsonDataEncoded(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetSecureJsonDataEncoded` <a name="resetSecureJsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetSecureJsonDataEncoded"></a>

```typescript
public resetSecureJsonDataEncoded(): void
```

##### `resetUid` <a name="resetUid" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUid"></a>

```typescript
public resetUid(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isConstruct"></a>

```typescript
import { dataSource } from 'rhizo-co-terraform-provider-grafana'

dataSource.DataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformElement"></a>

```typescript
import { dataSource } from 'rhizo-co-terraform-provider-grafana'

dataSource.DataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformResource"></a>

```typescript
import { dataSource } from 'rhizo-co-terraform-provider-grafana'

dataSource.DataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthEnabledInput">basicAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthUsernameInput">basicAuthUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.jsonDataEncodedInput">jsonDataEncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.secureJsonDataEncodedInput">secureJsonDataEncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthEnabled">basicAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthUsername">basicAuthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.jsonDataEncoded">jsonDataEncoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.secureJsonDataEncoded">secureJsonDataEncoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `basicAuthEnabledInput`<sup>Optional</sup> <a name="basicAuthEnabledInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthEnabledInput"></a>

```typescript
public readonly basicAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `basicAuthUsernameInput`<sup>Optional</sup> <a name="basicAuthUsernameInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthUsernameInput"></a>

```typescript
public readonly basicAuthUsernameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonDataEncodedInput`<sup>Optional</sup> <a name="jsonDataEncodedInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.jsonDataEncodedInput"></a>

```typescript
public readonly jsonDataEncodedInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `secureJsonDataEncodedInput`<sup>Optional</sup> <a name="secureJsonDataEncodedInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.secureJsonDataEncodedInput"></a>

```typescript
public readonly secureJsonDataEncodedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `basicAuthEnabled`<sup>Required</sup> <a name="basicAuthEnabled" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthEnabled"></a>

```typescript
public readonly basicAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `basicAuthUsername`<sup>Required</sup> <a name="basicAuthUsername" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.basicAuthUsername"></a>

```typescript
public readonly basicAuthUsername: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonDataEncoded`<sup>Required</sup> <a name="jsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.jsonDataEncoded"></a>

```typescript
public readonly jsonDataEncoded: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `secureJsonDataEncoded`<sup>Required</sup> <a name="secureJsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.secureJsonDataEncoded"></a>

```typescript
public readonly secureJsonDataEncoded: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataSource.DataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSourceConfig <a name="DataSourceConfig" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.Initializer"></a>

```typescript
import { dataSource } from 'rhizo-co-terraform-provider-grafana'

const dataSourceConfig: dataSource.DataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.name">name</a></code> | <code>string</code> | A unique name for the data source. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.type">type</a></code> | <code>string</code> | The data source type. Must be one of the supported data source keywords. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.accessMode">accessMode</a></code> | <code>string</code> | The method by which Grafana will access the data source: `proxy` or `direct`. Defaults to `proxy`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.basicAuthEnabled">basicAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable basic auth for the data source. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.basicAuthUsername">basicAuthUsername</a></code> | <code>string</code> | Basic auth username. Defaults to ``. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.databaseName">databaseName</a></code> | <code>string</code> | (Required by some data source types) The name of the database to use on the selected data source server. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | Custom HTTP headers. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#id DataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to set the data source as default. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.jsonDataEncoded">jsonDataEncoded</a></code> | <code>string</code> | Serialized JSON string containing the json data. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.secureJsonDataEncoded">secureJsonDataEncoded</a></code> | <code>string</code> | Serialized JSON string containing the secure json data. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.uid">uid</a></code> | <code>string</code> | Unique identifier. If unset, this will be automatically generated. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.url">url</a></code> | <code>string</code> | The URL for the data source. The type of URL required varies depending on the chosen data source type. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.username">username</a></code> | <code>string</code> | (Required by some data source types) The username to use to authenticate to the data source. Defaults to ``. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#name DataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The data source type. Must be one of the supported data source keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#type DataSource#type}

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

The method by which Grafana will access the data source: `proxy` or `direct`. Defaults to `proxy`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#access_mode DataSource#access_mode}

---

##### `basicAuthEnabled`<sup>Optional</sup> <a name="basicAuthEnabled" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.basicAuthEnabled"></a>

```typescript
public readonly basicAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable basic auth for the data source. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#basic_auth_enabled DataSource#basic_auth_enabled}

---

##### `basicAuthUsername`<sup>Optional</sup> <a name="basicAuthUsername" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.basicAuthUsername"></a>

```typescript
public readonly basicAuthUsername: string;
```

- *Type:* string

Basic auth username. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#basic_auth_username DataSource#basic_auth_username}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

(Required by some data source types) The name of the database to use on the selected data source server.

Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#database_name DataSource#database_name}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#http_headers DataSource#http_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#id DataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to set the data source as default.

This should only be `true` to a single data source. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#is_default DataSource#is_default}

---

##### `jsonDataEncoded`<sup>Optional</sup> <a name="jsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.jsonDataEncoded"></a>

```typescript
public readonly jsonDataEncoded: string;
```

- *Type:* string

Serialized JSON string containing the json data.

This attribute can be used to pass configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#json_data_encoded DataSource#json_data_encoded}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#org_id DataSource#org_id}

---

##### `secureJsonDataEncoded`<sup>Optional</sup> <a name="secureJsonDataEncoded" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.secureJsonDataEncoded"></a>

```typescript
public readonly secureJsonDataEncoded: string;
```

- *Type:* string

Serialized JSON string containing the secure json data.

This attribute can be used to pass secure configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#secure_json_data_encoded DataSource#secure_json_data_encoded}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Unique identifier. If unset, this will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#uid DataSource#uid}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the data source. The type of URL required varies depending on the chosen data source type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#url DataSource#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.dataSource.DataSourceConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

(Required by some data source types) The username to use to authenticate to the data source. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/data_source#username DataSource#username}

---




# `grafana_sso_settings`

Refer to the Terraform Registory for docs: [`grafana_sso_settings`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings).

# `ssoSettings` Submodule <a name="`ssoSettings` Submodule" id="rhizo-co-terraform-provider-grafana.ssoSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoSettings <a name="SsoSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings grafana_sso_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettings(scope: Construct, id: string, config: SsoSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig">SsoSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig">SsoSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putLdapSettings">putLdapSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putOauth2Settings">putOauth2Settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putSamlSettings">putSamlSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetLdapSettings">resetLdapSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetOauth2Settings">resetOauth2Settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetSamlSettings">resetSamlSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLdapSettings` <a name="putLdapSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putLdapSettings"></a>

```typescript
public putLdapSettings(value: SsoSettingsLdapSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putLdapSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a>

---

##### `putOauth2Settings` <a name="putOauth2Settings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putOauth2Settings"></a>

```typescript
public putOauth2Settings(value: SsoSettingsOauth2Settings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putOauth2Settings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a>

---

##### `putSamlSettings` <a name="putSamlSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putSamlSettings"></a>

```typescript
public putSamlSettings(value: SsoSettingsSamlSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.putSamlSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLdapSettings` <a name="resetLdapSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetLdapSettings"></a>

```typescript
public resetLdapSettings(): void
```

##### `resetOauth2Settings` <a name="resetOauth2Settings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetOauth2Settings"></a>

```typescript
public resetOauth2Settings(): void
```

##### `resetSamlSettings` <a name="resetSamlSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.resetSamlSettings"></a>

```typescript
public resetSamlSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isConstruct"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

ssoSettings.SsoSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformElement"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

ssoSettings.SsoSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformResource"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

ssoSettings.SsoSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.ldapSettings">ldapSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference">SsoSettingsLdapSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.oauth2Settings">oauth2Settings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference">SsoSettingsOauth2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.samlSettings">samlSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference">SsoSettingsSamlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.ldapSettingsInput">ldapSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.oauth2SettingsInput">oauth2SettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.samlSettingsInput">samlSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ldapSettings`<sup>Required</sup> <a name="ldapSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.ldapSettings"></a>

```typescript
public readonly ldapSettings: SsoSettingsLdapSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference">SsoSettingsLdapSettingsOutputReference</a>

---

##### `oauth2Settings`<sup>Required</sup> <a name="oauth2Settings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.oauth2Settings"></a>

```typescript
public readonly oauth2Settings: SsoSettingsOauth2SettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference">SsoSettingsOauth2SettingsOutputReference</a>

---

##### `samlSettings`<sup>Required</sup> <a name="samlSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.samlSettings"></a>

```typescript
public readonly samlSettings: SsoSettingsSamlSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference">SsoSettingsSamlSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ldapSettingsInput`<sup>Optional</sup> <a name="ldapSettingsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.ldapSettingsInput"></a>

```typescript
public readonly ldapSettingsInput: SsoSettingsLdapSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a>

---

##### `oauth2SettingsInput`<sup>Optional</sup> <a name="oauth2SettingsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.oauth2SettingsInput"></a>

```typescript
public readonly oauth2SettingsInput: SsoSettingsOauth2Settings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a>

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `samlSettingsInput`<sup>Optional</sup> <a name="samlSettingsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.samlSettingsInput"></a>

```typescript
public readonly samlSettingsInput: SsoSettingsSamlSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoSettingsConfig <a name="SsoSettingsConfig" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsConfig: ssoSettings.SsoSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.providerName">providerName</a></code> | <code>string</code> | The name of the SSO provider. Supported values: github, gitlab, google, azuread, okta, generic_oauth, saml, ldap. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#id SsoSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.ldapSettings">ldapSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a></code> | ldap_settings block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.oauth2Settings">oauth2Settings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a></code> | oauth2_settings block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.samlSettings">samlSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a></code> | saml_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The name of the SSO provider. Supported values: github, gitlab, google, azuread, okta, generic_oauth, saml, ldap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#provider_name SsoSettings#provider_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#id SsoSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapSettings`<sup>Optional</sup> <a name="ldapSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.ldapSettings"></a>

```typescript
public readonly ldapSettings: SsoSettingsLdapSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a>

ldap_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#ldap_settings SsoSettings#ldap_settings}

---

##### `oauth2Settings`<sup>Optional</sup> <a name="oauth2Settings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.oauth2Settings"></a>

```typescript
public readonly oauth2Settings: SsoSettingsOauth2Settings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a>

oauth2_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#oauth2_settings SsoSettings#oauth2_settings}

---

##### `samlSettings`<sup>Optional</sup> <a name="samlSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsConfig.property.samlSettings"></a>

```typescript
public readonly samlSettings: SsoSettingsSamlSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a>

saml_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#saml_settings SsoSettings#saml_settings}

---

### SsoSettingsLdapSettings <a name="SsoSettingsLdapSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsLdapSettings: ssoSettings.SsoSettingsLdapSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow new Grafana user creation through LDAP login. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define whether this configuration is enabled for LDAP. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent synchronizing users’ organization roles from LDAP. |

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.config"></a>

```typescript
public readonly config: SsoSettingsLdapSettingsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#config SsoSettings#config}

---

##### `allowSignUp`<sup>Optional</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow new Grafana user creation through LDAP login.

If set to false, then only existing Grafana users can log in with LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define whether this configuration is enabled for LDAP. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#enabled SsoSettings#enabled}

---

##### `skipOrgRoleSync`<sup>Optional</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent synchronizing users’ organization roles from LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}

---

### SsoSettingsLdapSettingsConfig <a name="SsoSettingsLdapSettingsConfig" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsLdapSettingsConfig: ssoSettings.SsoSettingsLdapSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig.property.servers">servers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]</code> | servers block. |

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig.property.servers"></a>

```typescript
public readonly servers: IResolvable | SsoSettingsLdapSettingsConfigServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]

servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#servers SsoSettings#servers}

---

### SsoSettingsLdapSettingsConfigServers <a name="SsoSettingsLdapSettingsConfigServers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsLdapSettingsConfigServers: ssoSettings.SsoSettingsLdapSettingsConfigServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.host">host</a></code> | <code>string</code> | The LDAP server host. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.searchBaseDns">searchBaseDns</a></code> | <code>string[]</code> | An array of base DNs to search through. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.searchFilter">searchFilter</a></code> | <code>string</code> | The user search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)". |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | The LDAP server attributes. The following attributes can be configured: email, member_of, name, surname, username. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.bindDn">bindDn</a></code> | <code>string</code> | The search user bind DN. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.bindPassword">bindPassword</a></code> | <code>string</code> | The search user bind password. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientCert">clientCert</a></code> | <code>string</code> | The path to the client certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientCertValue">clientCertValue</a></code> | <code>string</code> | The Base64 encoded value of the client certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientKey">clientKey</a></code> | <code>string</code> | The path to the client private key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientKeyValue">clientKeyValue</a></code> | <code>string</code> | The Base64 encoded value of the client private key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupMappings">groupMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]</code> | group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchBaseDns">groupSearchBaseDns</a></code> | <code>string[]</code> | An array of the base DNs to search through for groups. Typically uses ou=groups. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchFilter">groupSearchFilter</a></code> | <code>string</code> | Group search filter, to retrieve the groups of which the user is a member (only set if memberOf attribute is not available). |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchFilterUserAttribute">groupSearchFilterUserAttribute</a></code> | <code>string</code> | The %s in the search filter will be replaced with the attribute defined in this field. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Minimum TLS version allowed. Accepted values are: TLS1.2, TLS1.3. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.port">port</a></code> | <code>number</code> | The LDAP server port. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.rootCaCert">rootCaCert</a></code> | <code>string</code> | The path to the root CA certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.rootCaCertValue">rootCaCertValue</a></code> | <code>string[]</code> | The Base64 encoded values of the root CA certificates. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the SSL cert validation will be skipped. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, use LDAP with STARTTLS instead of LDAPS. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.timeout">timeout</a></code> | <code>number</code> | The timeout in seconds for connecting to the LDAP host. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.tlsCiphers">tlsCiphers</a></code> | <code>string[]</code> | Accepted TLS ciphers. For a complete list of supported ciphers, refer to: https://go.dev/src/crypto/tls/cipher_suites.go. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.useSsl">useSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if LDAP server should use an encrypted TLS connection (either with STARTTLS or LDAPS). |

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The LDAP server host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#host SsoSettings#host}

---

##### `searchBaseDns`<sup>Required</sup> <a name="searchBaseDns" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.searchBaseDns"></a>

```typescript
public readonly searchBaseDns: string[];
```

- *Type:* string[]

An array of base DNs to search through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#search_base_dns SsoSettings#search_base_dns}

---

##### `searchFilter`<sup>Required</sup> <a name="searchFilter" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.searchFilter"></a>

```typescript
public readonly searchFilter: string;
```

- *Type:* string

The user search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#search_filter SsoSettings#search_filter}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The LDAP server attributes. The following attributes can be configured: email, member_of, name, surname, username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#attributes SsoSettings#attributes}

---

##### `bindDn`<sup>Optional</sup> <a name="bindDn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.bindDn"></a>

```typescript
public readonly bindDn: string;
```

- *Type:* string

The search user bind DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#bind_dn SsoSettings#bind_dn}

---

##### `bindPassword`<sup>Optional</sup> <a name="bindPassword" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

The search user bind password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#bind_password SsoSettings#bind_password}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

The path to the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_cert SsoSettings#client_cert}

---

##### `clientCertValue`<sup>Optional</sup> <a name="clientCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientCertValue"></a>

```typescript
public readonly clientCertValue: string;
```

- *Type:* string

The Base64 encoded value of the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_cert_value SsoSettings#client_cert_value}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The path to the client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_key SsoSettings#client_key}

---

##### `clientKeyValue`<sup>Optional</sup> <a name="clientKeyValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.clientKeyValue"></a>

```typescript
public readonly clientKeyValue: string;
```

- *Type:* string

The Base64 encoded value of the client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_key_value SsoSettings#client_key_value}

---

##### `groupMappings`<sup>Optional</sup> <a name="groupMappings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupMappings"></a>

```typescript
public readonly groupMappings: IResolvable | SsoSettingsLdapSettingsConfigServersGroupMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]

group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#group_mappings SsoSettings#group_mappings}

---

##### `groupSearchBaseDns`<sup>Optional</sup> <a name="groupSearchBaseDns" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchBaseDns"></a>

```typescript
public readonly groupSearchBaseDns: string[];
```

- *Type:* string[]

An array of the base DNs to search through for groups. Typically uses ou=groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#group_search_base_dns SsoSettings#group_search_base_dns}

---

##### `groupSearchFilter`<sup>Optional</sup> <a name="groupSearchFilter" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchFilter"></a>

```typescript
public readonly groupSearchFilter: string;
```

- *Type:* string

Group search filter, to retrieve the groups of which the user is a member (only set if memberOf attribute is not available).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#group_search_filter SsoSettings#group_search_filter}

---

##### `groupSearchFilterUserAttribute`<sup>Optional</sup> <a name="groupSearchFilterUserAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.groupSearchFilterUserAttribute"></a>

```typescript
public readonly groupSearchFilterUserAttribute: string;
```

- *Type:* string

The %s in the search filter will be replaced with the attribute defined in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#group_search_filter_user_attribute SsoSettings#group_search_filter_user_attribute}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Minimum TLS version allowed. Accepted values are: TLS1.2, TLS1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#min_tls_version SsoSettings#min_tls_version}

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The LDAP server port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#port SsoSettings#port}

---

##### `rootCaCert`<sup>Optional</sup> <a name="rootCaCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.rootCaCert"></a>

```typescript
public readonly rootCaCert: string;
```

- *Type:* string

The path to the root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#root_ca_cert SsoSettings#root_ca_cert}

---

##### `rootCaCertValue`<sup>Optional</sup> <a name="rootCaCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.rootCaCertValue"></a>

```typescript
public readonly rootCaCertValue: string[];
```

- *Type:* string[]

The Base64 encoded values of the root CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#root_ca_cert_value SsoSettings#root_ca_cert_value}

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the SSL cert validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#ssl_skip_verify SsoSettings#ssl_skip_verify}

---

##### `startTls`<sup>Optional</sup> <a name="startTls" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, use LDAP with STARTTLS instead of LDAPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#start_tls SsoSettings#start_tls}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The timeout in seconds for connecting to the LDAP host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#timeout SsoSettings#timeout}

---

##### `tlsCiphers`<sup>Optional</sup> <a name="tlsCiphers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.tlsCiphers"></a>

```typescript
public readonly tlsCiphers: string[];
```

- *Type:* string[]

Accepted TLS ciphers. For a complete list of supported ciphers, refer to: https://go.dev/src/crypto/tls/cipher_suites.go.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#tls_ciphers SsoSettings#tls_ciphers}

---

##### `useSsl`<sup>Optional</sup> <a name="useSsl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers.property.useSsl"></a>

```typescript
public readonly useSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if LDAP server should use an encrypted TLS connection (either with STARTTLS or LDAPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#use_ssl SsoSettings#use_ssl}

---

### SsoSettingsLdapSettingsConfigServersGroupMappings <a name="SsoSettingsLdapSettingsConfigServersGroupMappings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsLdapSettingsConfigServersGroupMappings: ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.groupDn">groupDn</a></code> | <code>string</code> | LDAP distinguished name (DN) of LDAP group. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.orgRole">orgRole</a></code> | <code>string</code> | Assign users of group_dn the organization role Admin, Editor, or Viewer. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.grafanaAdmin">grafanaAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it makes the user of group_dn Grafana server admin. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.orgId">orgId</a></code> | <code>number</code> | The Grafana organization database id. |

---

##### `groupDn`<sup>Required</sup> <a name="groupDn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.groupDn"></a>

```typescript
public readonly groupDn: string;
```

- *Type:* string

LDAP distinguished name (DN) of LDAP group.

If you want to match all (or no LDAP groups) then you can use wildcard ("*").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#group_dn SsoSettings#group_dn}

---

##### `orgRole`<sup>Required</sup> <a name="orgRole" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.orgRole"></a>

```typescript
public readonly orgRole: string;
```

- *Type:* string

Assign users of group_dn the organization role Admin, Editor, or Viewer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#org_role SsoSettings#org_role}

---

##### `grafanaAdmin`<sup>Optional</sup> <a name="grafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.grafanaAdmin"></a>

```typescript
public readonly grafanaAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it makes the user of group_dn Grafana server admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#grafana_admin SsoSettings#grafana_admin}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings.property.orgId"></a>

```typescript
public readonly orgId: number;
```

- *Type:* number

The Grafana organization database id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#org_id SsoSettings#org_id}

---

### SsoSettingsOauth2Settings <a name="SsoSettingsOauth2Settings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsOauth2Settings: ssoSettings.SsoSettingsOauth2Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.clientId">clientId</a></code> | <code>string</code> | The client Id of your OAuth2 app. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowAssignGrafanaAdmin">allowAssignGrafanaAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, it will automatically sync the Grafana server administrator role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedDomains">allowedDomains</a></code> | <code>string</code> | List of comma- or space-separated domains. The user should belong to at least one domain to log in. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedGroups">allowedGroups</a></code> | <code>string</code> | List of comma- or space-separated groups. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string</code> | List of comma- or space-separated organizations. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | If not enabled, only existing Grafana users can log in using OAuth. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.apiUrl">apiUrl</a></code> | <code>string</code> | The user information endpoint of your OAuth2 provider. Required for okta and generic_oauth providers. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.authStyle">authStyle</a></code> | <code>string</code> | It determines how client_id and client_secret are sent to Oauth2 provider. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.authUrl">authUrl</a></code> | <code>string</code> | The authorization endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.autoLogin">autoLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log in automatically, skipping the login screen. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret of your OAuth2 app. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.custom">custom</a></code> | <code>{[ key: string ]: string}</code> | Custom fields to configure for OAuth2 such as the [force_use_graph_api](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/azuread/#force-fetching-groups-from-microsoft-graph-api) field. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.defineAllowedGroups">defineAllowedGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define allowed groups. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.defineAllowedTeamsIds">defineAllowedTeamsIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define allowed teams ids. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emailAttributeName">emailAttributeName</a></code> | <code>string</code> | Name of the key to use for user email lookup within the attributes map of OAuth2 ID token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emailAttributePath">emailAttributePath</a></code> | <code>string</code> | JMESPath expression to use for user email lookup from the user information. Only applicable to Generic OAuth. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emptyScopes">emptyScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, no scopes will be sent to the OAuth2 provider. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define whether this configuration is enabled for the specified provider. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.groupsAttributePath">groupsAttributePath</a></code> | <code>string</code> | JMESPath expression to use for user group lookup. If you configure allowed_groups, you must also configure groups_attribute_path. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.idTokenAttributeName">idTokenAttributeName</a></code> | <code>string</code> | The name of the key used to extract the ID token from the returned OAuth2 token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.loginAttributePath">loginAttributePath</a></code> | <code>string</code> | JMESPath expression to use for user login lookup from the user ID token. Only applicable to Generic OAuth. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.name">name</a></code> | <code>string</code> | Helpful if you use more than one identity providers or SSO protocols. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.nameAttributePath">nameAttributePath</a></code> | <code>string</code> | JMESPath expression to use for user name lookup from the user ID token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.orgAttributePath">orgAttributePath</a></code> | <code>string</code> | JMESPath expression to use for the organization mapping lookup from the user ID token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.orgMapping">orgMapping</a></code> | <code>string</code> | List of comma- or space-separated Organization:OrgIdOrOrgName:Role mappings. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.roleAttributePath">roleAttributePath</a></code> | <code>string</code> | JMESPath expression to use for Grafana role lookup. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.roleAttributeStrict">roleAttributeStrict</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, denies user login if the Grafana role cannot be extracted using Role attribute path. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.scopes">scopes</a></code> | <code>string</code> | List of comma- or space-separated OAuth2 scopes. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.signoutRedirectUrl">signoutRedirectUrl</a></code> | <code>string</code> | The URL to redirect the user to after signing out from Grafana. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent synchronizing users’ organization roles from your IdP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamIds">teamIds</a></code> | <code>string</code> | String list of Team Ids. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamIdsAttributePath">teamIdsAttributePath</a></code> | <code>string</code> | The JMESPath expression to use for Grafana Team Id lookup within the results returned by the teams_url endpoint. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamsUrl">teamsUrl</a></code> | <code>string</code> | The URL used to query for Team Ids. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientCa">tlsClientCa</a></code> | <code>string</code> | The path to the trusted certificate authority list. Is not applicable on Grafana Cloud. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientCert">tlsClientCert</a></code> | <code>string</code> | The path to the certificate. Is not applicable on Grafana Cloud. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientKey">tlsClientKey</a></code> | <code>string</code> | The path to the key. Is not applicable on Grafana Cloud. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsSkipVerifyInsecure">tlsSkipVerifyInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, the client accepts any certificate presented by the server and any host name in that certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.usePkce">usePkce</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, Grafana will use Proof Key for Code Exchange (PKCE) with the OAuth2 Authorization Code Grant. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.useRefreshToken">useRefreshToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, Grafana will fetch a new access token using the refresh token provided by the OAuth2 provider. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client Id of your OAuth2 app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_id SsoSettings#client_id}

---

##### `allowAssignGrafanaAdmin`<sup>Optional</sup> <a name="allowAssignGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowAssignGrafanaAdmin"></a>

```typescript
public readonly allowAssignGrafanaAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, it will automatically sync the Grafana server administrator role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allow_assign_grafana_admin SsoSettings#allow_assign_grafana_admin}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string;
```

- *Type:* string

List of comma- or space-separated domains. The user should belong to at least one domain to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allowed_domains SsoSettings#allowed_domains}

---

##### `allowedGroups`<sup>Optional</sup> <a name="allowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedGroups"></a>

```typescript
public readonly allowedGroups: string;
```

- *Type:* string

List of comma- or space-separated groups.

The user should be a member of at least one group to log in. For Generic OAuth, if you configure allowed_groups, you must also configure groups_attribute_path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allowed_groups SsoSettings#allowed_groups}

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string;
```

- *Type:* string

List of comma- or space-separated organizations.

The user should be a member of at least one organization to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allowed_organizations SsoSettings#allowed_organizations}

---

##### `allowSignUp`<sup>Optional</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If not enabled, only existing Grafana users can log in using OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

The user information endpoint of your OAuth2 provider. Required for okta and generic_oauth providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#api_url SsoSettings#api_url}

---

##### `authStyle`<sup>Optional</sup> <a name="authStyle" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.authStyle"></a>

```typescript
public readonly authStyle: string;
```

- *Type:* string

It determines how client_id and client_secret are sent to Oauth2 provider.

Possible values are AutoDetect, InParams, InHeader. Default is AutoDetect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#auth_style SsoSettings#auth_style}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

The authorization endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#auth_url SsoSettings#auth_url}

---

##### `autoLogin`<sup>Optional</sup> <a name="autoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.autoLogin"></a>

```typescript
public readonly autoLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log in automatically, skipping the login screen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#auto_login SsoSettings#auto_login}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret of your OAuth2 app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_secret SsoSettings#client_secret}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.custom"></a>

```typescript
public readonly custom: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom fields to configure for OAuth2 such as the [force_use_graph_api](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/azuread/#force-fetching-groups-from-microsoft-graph-api) field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#custom SsoSettings#custom}

---

##### `defineAllowedGroups`<sup>Optional</sup> <a name="defineAllowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.defineAllowedGroups"></a>

```typescript
public readonly defineAllowedGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define allowed groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#define_allowed_groups SsoSettings#define_allowed_groups}

---

##### `defineAllowedTeamsIds`<sup>Optional</sup> <a name="defineAllowedTeamsIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.defineAllowedTeamsIds"></a>

```typescript
public readonly defineAllowedTeamsIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define allowed teams ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#define_allowed_teams_ids SsoSettings#define_allowed_teams_ids}

---

##### `emailAttributeName`<sup>Optional</sup> <a name="emailAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emailAttributeName"></a>

```typescript
public readonly emailAttributeName: string;
```

- *Type:* string

Name of the key to use for user email lookup within the attributes map of OAuth2 ID token.

Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#email_attribute_name SsoSettings#email_attribute_name}

---

##### `emailAttributePath`<sup>Optional</sup> <a name="emailAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emailAttributePath"></a>

```typescript
public readonly emailAttributePath: string;
```

- *Type:* string

JMESPath expression to use for user email lookup from the user information. Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#email_attribute_path SsoSettings#email_attribute_path}

---

##### `emptyScopes`<sup>Optional</sup> <a name="emptyScopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.emptyScopes"></a>

```typescript
public readonly emptyScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, no scopes will be sent to the OAuth2 provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#empty_scopes SsoSettings#empty_scopes}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define whether this configuration is enabled for the specified provider. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#enabled SsoSettings#enabled}

---

##### `groupsAttributePath`<sup>Optional</sup> <a name="groupsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.groupsAttributePath"></a>

```typescript
public readonly groupsAttributePath: string;
```

- *Type:* string

JMESPath expression to use for user group lookup. If you configure allowed_groups, you must also configure groups_attribute_path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#groups_attribute_path SsoSettings#groups_attribute_path}

---

##### `idTokenAttributeName`<sup>Optional</sup> <a name="idTokenAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.idTokenAttributeName"></a>

```typescript
public readonly idTokenAttributeName: string;
```

- *Type:* string

The name of the key used to extract the ID token from the returned OAuth2 token.

Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#id_token_attribute_name SsoSettings#id_token_attribute_name}

---

##### `loginAttributePath`<sup>Optional</sup> <a name="loginAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.loginAttributePath"></a>

```typescript
public readonly loginAttributePath: string;
```

- *Type:* string

JMESPath expression to use for user login lookup from the user ID token. Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#login_attribute_path SsoSettings#login_attribute_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Helpful if you use more than one identity providers or SSO protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#name SsoSettings#name}

---

##### `nameAttributePath`<sup>Optional</sup> <a name="nameAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.nameAttributePath"></a>

```typescript
public readonly nameAttributePath: string;
```

- *Type:* string

JMESPath expression to use for user name lookup from the user ID token.

This name will be used as the user’s display name. Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#name_attribute_path SsoSettings#name_attribute_path}

---

##### `orgAttributePath`<sup>Optional</sup> <a name="orgAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.orgAttributePath"></a>

```typescript
public readonly orgAttributePath: string;
```

- *Type:* string

JMESPath expression to use for the organization mapping lookup from the user ID token.

The extracted list will be used for the organization mapping (to match "Organization" in the "org_mapping"). Only applicable to Generic OAuth and Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#org_attribute_path SsoSettings#org_attribute_path}

---

##### `orgMapping`<sup>Optional</sup> <a name="orgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.orgMapping"></a>

```typescript
public readonly orgMapping: string;
```

- *Type:* string

List of comma- or space-separated Organization:OrgIdOrOrgName:Role mappings.

Organization can be * meaning “All users”. Role is optional and can have the following values: None, Viewer, Editor or Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#org_mapping SsoSettings#org_mapping}

---

##### `roleAttributePath`<sup>Optional</sup> <a name="roleAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.roleAttributePath"></a>

```typescript
public readonly roleAttributePath: string;
```

- *Type:* string

JMESPath expression to use for Grafana role lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_attribute_path SsoSettings#role_attribute_path}

---

##### `roleAttributeStrict`<sup>Optional</sup> <a name="roleAttributeStrict" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.roleAttributeStrict"></a>

```typescript
public readonly roleAttributeStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, denies user login if the Grafana role cannot be extracted using Role attribute path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_attribute_strict SsoSettings#role_attribute_strict}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.scopes"></a>

```typescript
public readonly scopes: string;
```

- *Type:* string

List of comma- or space-separated OAuth2 scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#scopes SsoSettings#scopes}

---

##### `signoutRedirectUrl`<sup>Optional</sup> <a name="signoutRedirectUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.signoutRedirectUrl"></a>

```typescript
public readonly signoutRedirectUrl: string;
```

- *Type:* string

The URL to redirect the user to after signing out from Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#signout_redirect_url SsoSettings#signout_redirect_url}

---

##### `skipOrgRoleSync`<sup>Optional</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent synchronizing users’ organization roles from your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}

---

##### `teamIds`<sup>Optional</sup> <a name="teamIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamIds"></a>

```typescript
public readonly teamIds: string;
```

- *Type:* string

String list of Team Ids.

If set, the user must be a member of one of the given teams to log in. If you configure team_ids, you must also configure teams_url and team_ids_attribute_path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#team_ids SsoSettings#team_ids}

---

##### `teamIdsAttributePath`<sup>Optional</sup> <a name="teamIdsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamIdsAttributePath"></a>

```typescript
public readonly teamIdsAttributePath: string;
```

- *Type:* string

The JMESPath expression to use for Grafana Team Id lookup within the results returned by the teams_url endpoint.

Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#team_ids_attribute_path SsoSettings#team_ids_attribute_path}

---

##### `teamsUrl`<sup>Optional</sup> <a name="teamsUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.teamsUrl"></a>

```typescript
public readonly teamsUrl: string;
```

- *Type:* string

The URL used to query for Team Ids.

If not set, the default value is /teams. If you configure teams_url, you must also configure team_ids_attribute_path. Only applicable to Generic OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#teams_url SsoSettings#teams_url}

---

##### `tlsClientCa`<sup>Optional</sup> <a name="tlsClientCa" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientCa"></a>

```typescript
public readonly tlsClientCa: string;
```

- *Type:* string

The path to the trusted certificate authority list. Is not applicable on Grafana Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#tls_client_ca SsoSettings#tls_client_ca}

---

##### `tlsClientCert`<sup>Optional</sup> <a name="tlsClientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientCert"></a>

```typescript
public readonly tlsClientCert: string;
```

- *Type:* string

The path to the certificate. Is not applicable on Grafana Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#tls_client_cert SsoSettings#tls_client_cert}

---

##### `tlsClientKey`<sup>Optional</sup> <a name="tlsClientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsClientKey"></a>

```typescript
public readonly tlsClientKey: string;
```

- *Type:* string

The path to the key. Is not applicable on Grafana Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#tls_client_key SsoSettings#tls_client_key}

---

##### `tlsSkipVerifyInsecure`<sup>Optional</sup> <a name="tlsSkipVerifyInsecure" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tlsSkipVerifyInsecure"></a>

```typescript
public readonly tlsSkipVerifyInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, the client accepts any certificate presented by the server and any host name in that certificate.

You should only use this for testing, because this mode leaves SSL/TLS susceptible to man-in-the-middle attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#tls_skip_verify_insecure SsoSettings#tls_skip_verify_insecure}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint of your OAuth2 provider. Required for azuread, okta and generic_oauth providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#token_url SsoSettings#token_url}

---

##### `usePkce`<sup>Optional</sup> <a name="usePkce" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.usePkce"></a>

```typescript
public readonly usePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, Grafana will use Proof Key for Code Exchange (PKCE) with the OAuth2 Authorization Code Grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#use_pkce SsoSettings#use_pkce}

---

##### `useRefreshToken`<sup>Optional</sup> <a name="useRefreshToken" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings.property.useRefreshToken"></a>

```typescript
public readonly useRefreshToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, Grafana will fetch a new access token using the refresh token provided by the OAuth2 provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#use_refresh_token SsoSettings#use_refresh_token}

---

### SsoSettingsSamlSettings <a name="SsoSettingsSamlSettings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

const ssoSettingsSamlSettings: ssoSettings.SsoSettingsSamlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string</code> | List of comma- or space-separated organizations. User should be a member of at least one organization to log in. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowIdpInitiated">allowIdpInitiated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether SAML IdP-initiated login is allowed. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow new Grafana user creation through SAML login. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeEmail">assertionAttributeEmail</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user email. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeGroups">assertionAttributeGroups</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user groups. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeLogin">assertionAttributeLogin</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user login handle. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeName">assertionAttributeName</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeOrg">assertionAttributeOrg</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user organization. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeRole">assertionAttributeRole</a></code> | <code>string</code> | Friendly name or name of the attribute within the SAML assertion to use as the user roles. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.autoLogin">autoLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether SAML auto login is enabled. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.certificate">certificate</a></code> | <code>string</code> | Base64-encoded string for the SP X.509 certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.certificatePath">certificatePath</a></code> | <code>string</code> | Path for the SP X.509 certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.clientId">clientId</a></code> | <code>string</code> | The client Id of your OAuth2 app. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret of your OAuth2 app. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Define whether this configuration is enabled for SAML. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.entityId">entityId</a></code> | <code>string</code> | The entity ID is a globally unique identifier for the service provider. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.forceUseGraphApi">forceUseGraphApi</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, Grafana will fetch groups from Microsoft Graph API instead of using the groups claim from the ID token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadata">idpMetadata</a></code> | <code>string</code> | Base64-encoded string for the IdP SAML metadata XML. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadataPath">idpMetadataPath</a></code> | <code>string</code> | Path for the IdP SAML metadata XML. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | URL for the IdP SAML metadata XML. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.maxIssueDelay">maxIssueDelay</a></code> | <code>string</code> | Duration, since the IdP issued a response and the SP is allowed to process it. For example: 90s, 1h. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.metadataValidDuration">metadataValidDuration</a></code> | <code>string</code> | Duration, for how long the SP metadata is valid. For example: 48h, 5d. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.name">name</a></code> | <code>string</code> | Name used to refer to the SAML authentication. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | The Name ID Format to request within the SAML assertion. Defaults to urn:oasis:names:tc:SAML:2.0:nameid-format:transient. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.orgMapping">orgMapping</a></code> | <code>string</code> | List of comma- or space-separated Organization:OrgId:Role mappings. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.privateKey">privateKey</a></code> | <code>string</code> | Base64-encoded string for the SP private key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | Path for the SP private key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.relayState">relayState</a></code> | <code>string</code> | Relay state for IdP-initiated login. Should match relay state configured in IdP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesAdmin">roleValuesAdmin</a></code> | <code>string</code> | List of comma- or space-separated roles which will be mapped into the Admin role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesEditor">roleValuesEditor</a></code> | <code>string</code> | List of comma- or space-separated roles which will be mapped into the Editor role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesGrafanaAdmin">roleValuesGrafanaAdmin</a></code> | <code>string</code> | List of comma- or space-separated roles which will be mapped into the Grafana Admin (Super Admin) role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesNone">roleValuesNone</a></code> | <code>string</code> | List of comma- or space-separated roles which will be mapped into the None role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesViewer">roleValuesViewer</a></code> | <code>string</code> | List of comma- or space-separated roles which will be mapped into the Viewer role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | Signature algorithm used for signing requests to the IdP. Supported values are rsa-sha1, rsa-sha256, rsa-sha512. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.singleLogout">singleLogout</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether SAML Single Logout is enabled. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent synchronizing users’ organization roles from your IdP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token endpoint of your OAuth2 provider. Required for Azure AD providers. |

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string;
```

- *Type:* string

List of comma- or space-separated organizations. User should be a member of at least one organization to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allowed_organizations SsoSettings#allowed_organizations}

---

##### `allowIdpInitiated`<sup>Optional</sup> <a name="allowIdpInitiated" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowIdpInitiated"></a>

```typescript
public readonly allowIdpInitiated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether SAML IdP-initiated login is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allow_idp_initiated SsoSettings#allow_idp_initiated}

---

##### `allowSignUp`<sup>Optional</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow new Grafana user creation through SAML login.

If set to false, then only existing Grafana users can log in with SAML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#allow_sign_up SsoSettings#allow_sign_up}

---

##### `assertionAttributeEmail`<sup>Optional</sup> <a name="assertionAttributeEmail" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeEmail"></a>

```typescript
public readonly assertionAttributeEmail: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_email SsoSettings#assertion_attribute_email}

---

##### `assertionAttributeGroups`<sup>Optional</sup> <a name="assertionAttributeGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeGroups"></a>

```typescript
public readonly assertionAttributeGroups: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_groups SsoSettings#assertion_attribute_groups}

---

##### `assertionAttributeLogin`<sup>Optional</sup> <a name="assertionAttributeLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeLogin"></a>

```typescript
public readonly assertionAttributeLogin: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user login handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_login SsoSettings#assertion_attribute_login}

---

##### `assertionAttributeName`<sup>Optional</sup> <a name="assertionAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeName"></a>

```typescript
public readonly assertionAttributeName: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user name.

Alternatively, this can be a template with variables that match the names of attributes within the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_name SsoSettings#assertion_attribute_name}

---

##### `assertionAttributeOrg`<sup>Optional</sup> <a name="assertionAttributeOrg" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeOrg"></a>

```typescript
public readonly assertionAttributeOrg: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_org SsoSettings#assertion_attribute_org}

---

##### `assertionAttributeRole`<sup>Optional</sup> <a name="assertionAttributeRole" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.assertionAttributeRole"></a>

```typescript
public readonly assertionAttributeRole: string;
```

- *Type:* string

Friendly name or name of the attribute within the SAML assertion to use as the user roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#assertion_attribute_role SsoSettings#assertion_attribute_role}

---

##### `autoLogin`<sup>Optional</sup> <a name="autoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.autoLogin"></a>

```typescript
public readonly autoLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether SAML auto login is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#auto_login SsoSettings#auto_login}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Base64-encoded string for the SP X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#certificate SsoSettings#certificate}

---

##### `certificatePath`<sup>Optional</sup> <a name="certificatePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.certificatePath"></a>

```typescript
public readonly certificatePath: string;
```

- *Type:* string

Path for the SP X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#certificate_path SsoSettings#certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client Id of your OAuth2 app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_id SsoSettings#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret of your OAuth2 app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#client_secret SsoSettings#client_secret}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Define whether this configuration is enabled for SAML. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#enabled SsoSettings#enabled}

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The entity ID is a globally unique identifier for the service provider.

It is used to identify the service provider to the identity provider. Defaults to the URL of the Grafana instance if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#entity_id SsoSettings#entity_id}

---

##### `forceUseGraphApi`<sup>Optional</sup> <a name="forceUseGraphApi" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.forceUseGraphApi"></a>

```typescript
public readonly forceUseGraphApi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, Grafana will fetch groups from Microsoft Graph API instead of using the groups claim from the ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#force_use_graph_api SsoSettings#force_use_graph_api}

---

##### `idpMetadata`<sup>Optional</sup> <a name="idpMetadata" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: string;
```

- *Type:* string

Base64-encoded string for the IdP SAML metadata XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#idp_metadata SsoSettings#idp_metadata}

---

##### `idpMetadataPath`<sup>Optional</sup> <a name="idpMetadataPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadataPath"></a>

```typescript
public readonly idpMetadataPath: string;
```

- *Type:* string

Path for the IdP SAML metadata XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#idp_metadata_path SsoSettings#idp_metadata_path}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

URL for the IdP SAML metadata XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#idp_metadata_url SsoSettings#idp_metadata_url}

---

##### `maxIssueDelay`<sup>Optional</sup> <a name="maxIssueDelay" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.maxIssueDelay"></a>

```typescript
public readonly maxIssueDelay: string;
```

- *Type:* string

Duration, since the IdP issued a response and the SP is allowed to process it. For example: 90s, 1h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#max_issue_delay SsoSettings#max_issue_delay}

---

##### `metadataValidDuration`<sup>Optional</sup> <a name="metadataValidDuration" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.metadataValidDuration"></a>

```typescript
public readonly metadataValidDuration: string;
```

- *Type:* string

Duration, for how long the SP metadata is valid. For example: 48h, 5d.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#metadata_valid_duration SsoSettings#metadata_valid_duration}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name used to refer to the SAML authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#name SsoSettings#name}

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

The Name ID Format to request within the SAML assertion. Defaults to urn:oasis:names:tc:SAML:2.0:nameid-format:transient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#name_id_format SsoSettings#name_id_format}

---

##### `orgMapping`<sup>Optional</sup> <a name="orgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.orgMapping"></a>

```typescript
public readonly orgMapping: string;
```

- *Type:* string

List of comma- or space-separated Organization:OrgId:Role mappings.

Organization can be * meaning “All users”. Role is optional and can have the following values: Viewer, Editor or Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#org_mapping SsoSettings#org_mapping}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Base64-encoded string for the SP private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#private_key SsoSettings#private_key}

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

Path for the SP private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#private_key_path SsoSettings#private_key_path}

---

##### `relayState`<sup>Optional</sup> <a name="relayState" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* string

Relay state for IdP-initiated login. Should match relay state configured in IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#relay_state SsoSettings#relay_state}

---

##### `roleValuesAdmin`<sup>Optional</sup> <a name="roleValuesAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesAdmin"></a>

```typescript
public readonly roleValuesAdmin: string;
```

- *Type:* string

List of comma- or space-separated roles which will be mapped into the Admin role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_values_admin SsoSettings#role_values_admin}

---

##### `roleValuesEditor`<sup>Optional</sup> <a name="roleValuesEditor" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesEditor"></a>

```typescript
public readonly roleValuesEditor: string;
```

- *Type:* string

List of comma- or space-separated roles which will be mapped into the Editor role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_values_editor SsoSettings#role_values_editor}

---

##### `roleValuesGrafanaAdmin`<sup>Optional</sup> <a name="roleValuesGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesGrafanaAdmin"></a>

```typescript
public readonly roleValuesGrafanaAdmin: string;
```

- *Type:* string

List of comma- or space-separated roles which will be mapped into the Grafana Admin (Super Admin) role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_values_grafana_admin SsoSettings#role_values_grafana_admin}

---

##### `roleValuesNone`<sup>Optional</sup> <a name="roleValuesNone" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesNone"></a>

```typescript
public readonly roleValuesNone: string;
```

- *Type:* string

List of comma- or space-separated roles which will be mapped into the None role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_values_none SsoSettings#role_values_none}

---

##### `roleValuesViewer`<sup>Optional</sup> <a name="roleValuesViewer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.roleValuesViewer"></a>

```typescript
public readonly roleValuesViewer: string;
```

- *Type:* string

List of comma- or space-separated roles which will be mapped into the Viewer role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#role_values_viewer SsoSettings#role_values_viewer}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

Signature algorithm used for signing requests to the IdP. Supported values are rsa-sha1, rsa-sha256, rsa-sha512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#signature_algorithm SsoSettings#signature_algorithm}

---

##### `singleLogout`<sup>Optional</sup> <a name="singleLogout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.singleLogout"></a>

```typescript
public readonly singleLogout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether SAML Single Logout is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#single_logout SsoSettings#single_logout}

---

##### `skipOrgRoleSync`<sup>Optional</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent synchronizing users’ organization roles from your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#skip_org_role_sync SsoSettings#skip_org_role_sync}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token endpoint of your OAuth2 provider. Required for Azure AD providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/sso_settings#token_url SsoSettings#token_url}

---

## Classes <a name="Classes" id="Classes"></a>

### SsoSettingsLdapSettingsConfigOutputReference <a name="SsoSettingsLdapSettingsConfigOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.putServers">putServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServers` <a name="putServers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.putServers"></a>

```typescript
public putServers(value: IResolvable | SsoSettingsLdapSettingsConfigServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.putServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList">SsoSettingsLdapSettingsConfigServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.serversInput">serversInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.servers"></a>

```typescript
public readonly servers: SsoSettingsLdapSettingsConfigServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList">SsoSettingsLdapSettingsConfigServersList</a>

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.serversInput"></a>

```typescript
public readonly serversInput: IResolvable | SsoSettingsLdapSettingsConfigServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoSettingsLdapSettingsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a>

---


### SsoSettingsLdapSettingsConfigServersGroupMappingsList <a name="SsoSettingsLdapSettingsConfigServersGroupMappingsList" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.get"></a>

```typescript
public get(index: number): SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoSettingsLdapSettingsConfigServersGroupMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]

---


### SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference <a name="SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resetGrafanaAdmin">resetGrafanaAdmin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resetOrgId">resetOrgId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrafanaAdmin` <a name="resetGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resetGrafanaAdmin"></a>

```typescript
public resetGrafanaAdmin(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.resetOrgId"></a>

```typescript
public resetOrgId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.grafanaAdminInput">grafanaAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.groupDnInput">groupDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgIdInput">orgIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgRoleInput">orgRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.grafanaAdmin">grafanaAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.groupDn">groupDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgId">orgId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgRole">orgRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grafanaAdminInput`<sup>Optional</sup> <a name="grafanaAdminInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.grafanaAdminInput"></a>

```typescript
public readonly grafanaAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupDnInput`<sup>Optional</sup> <a name="groupDnInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.groupDnInput"></a>

```typescript
public readonly groupDnInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: number;
```

- *Type:* number

---

##### `orgRoleInput`<sup>Optional</sup> <a name="orgRoleInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgRoleInput"></a>

```typescript
public readonly orgRoleInput: string;
```

- *Type:* string

---

##### `grafanaAdmin`<sup>Required</sup> <a name="grafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.grafanaAdmin"></a>

```typescript
public readonly grafanaAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupDn`<sup>Required</sup> <a name="groupDn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.groupDn"></a>

```typescript
public readonly groupDn: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgId"></a>

```typescript
public readonly orgId: number;
```

- *Type:* number

---

##### `orgRole`<sup>Required</sup> <a name="orgRole" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.orgRole"></a>

```typescript
public readonly orgRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoSettingsLdapSettingsConfigServersGroupMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>

---


### SsoSettingsLdapSettingsConfigServersList <a name="SsoSettingsLdapSettingsConfigServersList" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsConfigServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.get"></a>

```typescript
public get(index: number): SsoSettingsLdapSettingsConfigServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoSettingsLdapSettingsConfigServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>[]

---


### SsoSettingsLdapSettingsConfigServersOutputReference <a name="SsoSettingsLdapSettingsConfigServersOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.putGroupMappings">putGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetBindDn">resetBindDn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetBindPassword">resetBindPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientCertValue">resetClientCertValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientKeyValue">resetClientKeyValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupMappings">resetGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchBaseDns">resetGroupSearchBaseDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchFilter">resetGroupSearchFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchFilterUserAttribute">resetGroupSearchFilterUserAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetRootCaCert">resetRootCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetRootCaCertValue">resetRootCaCertValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetSslSkipVerify">resetSslSkipVerify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetStartTls">resetStartTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetTlsCiphers">resetTlsCiphers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetUseSsl">resetUseSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupMappings` <a name="putGroupMappings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.putGroupMappings"></a>

```typescript
public putGroupMappings(value: IResolvable | SsoSettingsLdapSettingsConfigServersGroupMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.putGroupMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetBindDn` <a name="resetBindDn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetBindDn"></a>

```typescript
public resetBindDn(): void
```

##### `resetBindPassword` <a name="resetBindPassword" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetBindPassword"></a>

```typescript
public resetBindPassword(): void
```

##### `resetClientCert` <a name="resetClientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientCertValue` <a name="resetClientCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientCertValue"></a>

```typescript
public resetClientCertValue(): void
```

##### `resetClientKey` <a name="resetClientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetClientKeyValue` <a name="resetClientKeyValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetClientKeyValue"></a>

```typescript
public resetClientKeyValue(): void
```

##### `resetGroupMappings` <a name="resetGroupMappings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupMappings"></a>

```typescript
public resetGroupMappings(): void
```

##### `resetGroupSearchBaseDns` <a name="resetGroupSearchBaseDns" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchBaseDns"></a>

```typescript
public resetGroupSearchBaseDns(): void
```

##### `resetGroupSearchFilter` <a name="resetGroupSearchFilter" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchFilter"></a>

```typescript
public resetGroupSearchFilter(): void
```

##### `resetGroupSearchFilterUserAttribute` <a name="resetGroupSearchFilterUserAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetGroupSearchFilterUserAttribute"></a>

```typescript
public resetGroupSearchFilterUserAttribute(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRootCaCert` <a name="resetRootCaCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetRootCaCert"></a>

```typescript
public resetRootCaCert(): void
```

##### `resetRootCaCertValue` <a name="resetRootCaCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetRootCaCertValue"></a>

```typescript
public resetRootCaCertValue(): void
```

##### `resetSslSkipVerify` <a name="resetSslSkipVerify" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetSslSkipVerify"></a>

```typescript
public resetSslSkipVerify(): void
```

##### `resetStartTls` <a name="resetStartTls" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetStartTls"></a>

```typescript
public resetStartTls(): void
```

##### `resetTimeout` <a name="resetTimeout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTlsCiphers` <a name="resetTlsCiphers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetTlsCiphers"></a>

```typescript
public resetTlsCiphers(): void
```

##### `resetUseSsl` <a name="resetUseSsl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.resetUseSsl"></a>

```typescript
public resetUseSsl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupMappings">groupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList">SsoSettingsLdapSettingsConfigServersGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindDnInput">bindDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindPasswordInput">bindPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertValueInput">clientCertValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyValueInput">clientKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupMappingsInput">groupMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchBaseDnsInput">groupSearchBaseDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterInput">groupSearchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterUserAttributeInput">groupSearchFilterUserAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertInput">rootCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertValueInput">rootCaCertValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchBaseDnsInput">searchBaseDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchFilterInput">searchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.sslSkipVerifyInput">sslSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.startTlsInput">startTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.tlsCiphersInput">tlsCiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.useSslInput">useSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindDn">bindDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindPassword">bindPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertValue">clientCertValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyValue">clientKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchBaseDns">groupSearchBaseDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilter">groupSearchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterUserAttribute">groupSearchFilterUserAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCert">rootCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertValue">rootCaCertValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchBaseDns">searchBaseDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchFilter">searchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.tlsCiphers">tlsCiphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.useSsl">useSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupMappings`<sup>Required</sup> <a name="groupMappings" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupMappings"></a>

```typescript
public readonly groupMappings: SsoSettingsLdapSettingsConfigServersGroupMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappingsList">SsoSettingsLdapSettingsConfigServersGroupMappingsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bindDnInput`<sup>Optional</sup> <a name="bindDnInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindDnInput"></a>

```typescript
public readonly bindDnInput: string;
```

- *Type:* string

---

##### `bindPasswordInput`<sup>Optional</sup> <a name="bindPasswordInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindPasswordInput"></a>

```typescript
public readonly bindPasswordInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientCertValueInput`<sup>Optional</sup> <a name="clientCertValueInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertValueInput"></a>

```typescript
public readonly clientCertValueInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `clientKeyValueInput`<sup>Optional</sup> <a name="clientKeyValueInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyValueInput"></a>

```typescript
public readonly clientKeyValueInput: string;
```

- *Type:* string

---

##### `groupMappingsInput`<sup>Optional</sup> <a name="groupMappingsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupMappingsInput"></a>

```typescript
public readonly groupMappingsInput: IResolvable | SsoSettingsLdapSettingsConfigServersGroupMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersGroupMappings">SsoSettingsLdapSettingsConfigServersGroupMappings</a>[]

---

##### `groupSearchBaseDnsInput`<sup>Optional</sup> <a name="groupSearchBaseDnsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchBaseDnsInput"></a>

```typescript
public readonly groupSearchBaseDnsInput: string[];
```

- *Type:* string[]

---

##### `groupSearchFilterInput`<sup>Optional</sup> <a name="groupSearchFilterInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterInput"></a>

```typescript
public readonly groupSearchFilterInput: string;
```

- *Type:* string

---

##### `groupSearchFilterUserAttributeInput`<sup>Optional</sup> <a name="groupSearchFilterUserAttributeInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterUserAttributeInput"></a>

```typescript
public readonly groupSearchFilterUserAttributeInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `rootCaCertInput`<sup>Optional</sup> <a name="rootCaCertInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertInput"></a>

```typescript
public readonly rootCaCertInput: string;
```

- *Type:* string

---

##### `rootCaCertValueInput`<sup>Optional</sup> <a name="rootCaCertValueInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertValueInput"></a>

```typescript
public readonly rootCaCertValueInput: string[];
```

- *Type:* string[]

---

##### `searchBaseDnsInput`<sup>Optional</sup> <a name="searchBaseDnsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchBaseDnsInput"></a>

```typescript
public readonly searchBaseDnsInput: string[];
```

- *Type:* string[]

---

##### `searchFilterInput`<sup>Optional</sup> <a name="searchFilterInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchFilterInput"></a>

```typescript
public readonly searchFilterInput: string;
```

- *Type:* string

---

##### `sslSkipVerifyInput`<sup>Optional</sup> <a name="sslSkipVerifyInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.sslSkipVerifyInput"></a>

```typescript
public readonly sslSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTlsInput`<sup>Optional</sup> <a name="startTlsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.startTlsInput"></a>

```typescript
public readonly startTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `tlsCiphersInput`<sup>Optional</sup> <a name="tlsCiphersInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.tlsCiphersInput"></a>

```typescript
public readonly tlsCiphersInput: string[];
```

- *Type:* string[]

---

##### `useSslInput`<sup>Optional</sup> <a name="useSslInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.useSslInput"></a>

```typescript
public readonly useSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bindDn`<sup>Required</sup> <a name="bindDn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindDn"></a>

```typescript
public readonly bindDn: string;
```

- *Type:* string

---

##### `bindPassword`<sup>Required</sup> <a name="bindPassword" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientCertValue`<sup>Required</sup> <a name="clientCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientCertValue"></a>

```typescript
public readonly clientCertValue: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clientKeyValue`<sup>Required</sup> <a name="clientKeyValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.clientKeyValue"></a>

```typescript
public readonly clientKeyValue: string;
```

- *Type:* string

---

##### `groupSearchBaseDns`<sup>Required</sup> <a name="groupSearchBaseDns" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchBaseDns"></a>

```typescript
public readonly groupSearchBaseDns: string[];
```

- *Type:* string[]

---

##### `groupSearchFilter`<sup>Required</sup> <a name="groupSearchFilter" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilter"></a>

```typescript
public readonly groupSearchFilter: string;
```

- *Type:* string

---

##### `groupSearchFilterUserAttribute`<sup>Required</sup> <a name="groupSearchFilterUserAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.groupSearchFilterUserAttribute"></a>

```typescript
public readonly groupSearchFilterUserAttribute: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `rootCaCert`<sup>Required</sup> <a name="rootCaCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCert"></a>

```typescript
public readonly rootCaCert: string;
```

- *Type:* string

---

##### `rootCaCertValue`<sup>Required</sup> <a name="rootCaCertValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.rootCaCertValue"></a>

```typescript
public readonly rootCaCertValue: string[];
```

- *Type:* string[]

---

##### `searchBaseDns`<sup>Required</sup> <a name="searchBaseDns" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchBaseDns"></a>

```typescript
public readonly searchBaseDns: string[];
```

- *Type:* string[]

---

##### `searchFilter`<sup>Required</sup> <a name="searchFilter" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.searchFilter"></a>

```typescript
public readonly searchFilter: string;
```

- *Type:* string

---

##### `sslSkipVerify`<sup>Required</sup> <a name="sslSkipVerify" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTls`<sup>Required</sup> <a name="startTls" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `tlsCiphers`<sup>Required</sup> <a name="tlsCiphers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.tlsCiphers"></a>

```typescript
public readonly tlsCiphers: string[];
```

- *Type:* string[]

---

##### `useSsl`<sup>Required</sup> <a name="useSsl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.useSsl"></a>

```typescript
public readonly useSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoSettingsLdapSettingsConfigServers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigServers">SsoSettingsLdapSettingsConfigServers</a>

---


### SsoSettingsLdapSettingsOutputReference <a name="SsoSettingsLdapSettingsOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsLdapSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetAllowSignUp">resetAllowSignUp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetSkipOrgRoleSync">resetSkipOrgRoleSync</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.putConfig"></a>

```typescript
public putConfig(value: SsoSettingsLdapSettingsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a>

---

##### `resetAllowSignUp` <a name="resetAllowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetAllowSignUp"></a>

```typescript
public resetAllowSignUp(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSkipOrgRoleSync` <a name="resetSkipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.resetSkipOrgRoleSync"></a>

```typescript
public resetSkipOrgRoleSync(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference">SsoSettingsLdapSettingsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.allowSignUpInput">allowSignUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.configInput">configInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.skipOrgRoleSyncInput">skipOrgRoleSyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.config"></a>

```typescript
public readonly config: SsoSettingsLdapSettingsConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfigOutputReference">SsoSettingsLdapSettingsConfigOutputReference</a>

---

##### `allowSignUpInput`<sup>Optional</sup> <a name="allowSignUpInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.allowSignUpInput"></a>

```typescript
public readonly allowSignUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.configInput"></a>

```typescript
public readonly configInput: SsoSettingsLdapSettingsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsConfig">SsoSettingsLdapSettingsConfig</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipOrgRoleSyncInput`<sup>Optional</sup> <a name="skipOrgRoleSyncInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.skipOrgRoleSyncInput"></a>

```typescript
public readonly skipOrgRoleSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSignUp`<sup>Required</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipOrgRoleSync`<sup>Required</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoSettingsLdapSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsLdapSettings">SsoSettingsLdapSettings</a>

---


### SsoSettingsOauth2SettingsOutputReference <a name="SsoSettingsOauth2SettingsOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsOauth2SettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowAssignGrafanaAdmin">resetAllowAssignGrafanaAdmin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedGroups">resetAllowedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedOrganizations">resetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowSignUp">resetAllowSignUp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAuthStyle">resetAuthStyle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAutoLogin">resetAutoLogin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetDefineAllowedGroups">resetDefineAllowedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetDefineAllowedTeamsIds">resetDefineAllowedTeamsIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmailAttributeName">resetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmailAttributePath">resetEmailAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmptyScopes">resetEmptyScopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetGroupsAttributePath">resetGroupsAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetIdTokenAttributeName">resetIdTokenAttributeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetLoginAttributePath">resetLoginAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetNameAttributePath">resetNameAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetOrgAttributePath">resetOrgAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetOrgMapping">resetOrgMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetRoleAttributePath">resetRoleAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetRoleAttributeStrict">resetRoleAttributeStrict</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetSignoutRedirectUrl">resetSignoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetSkipOrgRoleSync">resetSkipOrgRoleSync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamIds">resetTeamIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamIdsAttributePath">resetTeamIdsAttributePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamsUrl">resetTeamsUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientCa">resetTlsClientCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientCert">resetTlsClientCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientKey">resetTlsClientKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsSkipVerifyInsecure">resetTlsSkipVerifyInsecure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetUsePkce">resetUsePkce</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetUseRefreshToken">resetUseRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAssignGrafanaAdmin` <a name="resetAllowAssignGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowAssignGrafanaAdmin"></a>

```typescript
public resetAllowAssignGrafanaAdmin(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetAllowedGroups` <a name="resetAllowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedGroups"></a>

```typescript
public resetAllowedGroups(): void
```

##### `resetAllowedOrganizations` <a name="resetAllowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowedOrganizations"></a>

```typescript
public resetAllowedOrganizations(): void
```

##### `resetAllowSignUp` <a name="resetAllowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAllowSignUp"></a>

```typescript
public resetAllowSignUp(): void
```

##### `resetApiUrl` <a name="resetApiUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetAuthStyle` <a name="resetAuthStyle" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAuthStyle"></a>

```typescript
public resetAuthStyle(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetAutoLogin` <a name="resetAutoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetAutoLogin"></a>

```typescript
public resetAutoLogin(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetCustom` <a name="resetCustom" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetDefineAllowedGroups` <a name="resetDefineAllowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetDefineAllowedGroups"></a>

```typescript
public resetDefineAllowedGroups(): void
```

##### `resetDefineAllowedTeamsIds` <a name="resetDefineAllowedTeamsIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetDefineAllowedTeamsIds"></a>

```typescript
public resetDefineAllowedTeamsIds(): void
```

##### `resetEmailAttributeName` <a name="resetEmailAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmailAttributeName"></a>

```typescript
public resetEmailAttributeName(): void
```

##### `resetEmailAttributePath` <a name="resetEmailAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmailAttributePath"></a>

```typescript
public resetEmailAttributePath(): void
```

##### `resetEmptyScopes` <a name="resetEmptyScopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEmptyScopes"></a>

```typescript
public resetEmptyScopes(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGroupsAttributePath` <a name="resetGroupsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetGroupsAttributePath"></a>

```typescript
public resetGroupsAttributePath(): void
```

##### `resetIdTokenAttributeName` <a name="resetIdTokenAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetIdTokenAttributeName"></a>

```typescript
public resetIdTokenAttributeName(): void
```

##### `resetLoginAttributePath` <a name="resetLoginAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetLoginAttributePath"></a>

```typescript
public resetLoginAttributePath(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameAttributePath` <a name="resetNameAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetNameAttributePath"></a>

```typescript
public resetNameAttributePath(): void
```

##### `resetOrgAttributePath` <a name="resetOrgAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetOrgAttributePath"></a>

```typescript
public resetOrgAttributePath(): void
```

##### `resetOrgMapping` <a name="resetOrgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetOrgMapping"></a>

```typescript
public resetOrgMapping(): void
```

##### `resetRoleAttributePath` <a name="resetRoleAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetRoleAttributePath"></a>

```typescript
public resetRoleAttributePath(): void
```

##### `resetRoleAttributeStrict` <a name="resetRoleAttributeStrict" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetRoleAttributeStrict"></a>

```typescript
public resetRoleAttributeStrict(): void
```

##### `resetScopes` <a name="resetScopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSignoutRedirectUrl` <a name="resetSignoutRedirectUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetSignoutRedirectUrl"></a>

```typescript
public resetSignoutRedirectUrl(): void
```

##### `resetSkipOrgRoleSync` <a name="resetSkipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetSkipOrgRoleSync"></a>

```typescript
public resetSkipOrgRoleSync(): void
```

##### `resetTeamIds` <a name="resetTeamIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamIds"></a>

```typescript
public resetTeamIds(): void
```

##### `resetTeamIdsAttributePath` <a name="resetTeamIdsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamIdsAttributePath"></a>

```typescript
public resetTeamIdsAttributePath(): void
```

##### `resetTeamsUrl` <a name="resetTeamsUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTeamsUrl"></a>

```typescript
public resetTeamsUrl(): void
```

##### `resetTlsClientCa` <a name="resetTlsClientCa" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientCa"></a>

```typescript
public resetTlsClientCa(): void
```

##### `resetTlsClientCert` <a name="resetTlsClientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientCert"></a>

```typescript
public resetTlsClientCert(): void
```

##### `resetTlsClientKey` <a name="resetTlsClientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsClientKey"></a>

```typescript
public resetTlsClientKey(): void
```

##### `resetTlsSkipVerifyInsecure` <a name="resetTlsSkipVerifyInsecure" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTlsSkipVerifyInsecure"></a>

```typescript
public resetTlsSkipVerifyInsecure(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```

##### `resetUsePkce` <a name="resetUsePkce" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetUsePkce"></a>

```typescript
public resetUsePkce(): void
```

##### `resetUseRefreshToken` <a name="resetUseRefreshToken" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.resetUseRefreshToken"></a>

```typescript
public resetUseRefreshToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowAssignGrafanaAdminInput">allowAssignGrafanaAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedGroupsInput">allowedGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedOrganizationsInput">allowedOrganizationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowSignUpInput">allowSignUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authStyleInput">authStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.autoLoginInput">autoLoginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.customInput">customInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedGroupsInput">defineAllowedGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedTeamsIdsInput">defineAllowedTeamsIdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributeNameInput">emailAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributePathInput">emailAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emptyScopesInput">emptyScopesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.groupsAttributePathInput">groupsAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.idTokenAttributeNameInput">idTokenAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.loginAttributePathInput">loginAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameAttributePathInput">nameAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgAttributePathInput">orgAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgMappingInput">orgMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributePathInput">roleAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributeStrictInput">roleAttributeStrictInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.scopesInput">scopesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.signoutRedirectUrlInput">signoutRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.skipOrgRoleSyncInput">skipOrgRoleSyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsAttributePathInput">teamIdsAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsInput">teamIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamsUrlInput">teamsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCaInput">tlsClientCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCertInput">tlsClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientKeyInput">tlsClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsSkipVerifyInsecureInput">tlsSkipVerifyInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.usePkceInput">usePkceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.useRefreshTokenInput">useRefreshTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowAssignGrafanaAdmin">allowAssignGrafanaAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedDomains">allowedDomains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedGroups">allowedGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authStyle">authStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.autoLogin">autoLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.custom">custom</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedGroups">defineAllowedGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedTeamsIds">defineAllowedTeamsIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributeName">emailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributePath">emailAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emptyScopes">emptyScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.groupsAttributePath">groupsAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.idTokenAttributeName">idTokenAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.loginAttributePath">loginAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameAttributePath">nameAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgAttributePath">orgAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgMapping">orgMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributePath">roleAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributeStrict">roleAttributeStrict</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.scopes">scopes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.signoutRedirectUrl">signoutRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIds">teamIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsAttributePath">teamIdsAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamsUrl">teamsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCa">tlsClientCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCert">tlsClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientKey">tlsClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsSkipVerifyInsecure">tlsSkipVerifyInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.usePkce">usePkce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.useRefreshToken">useRefreshToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAssignGrafanaAdminInput`<sup>Optional</sup> <a name="allowAssignGrafanaAdminInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowAssignGrafanaAdminInput"></a>

```typescript
public readonly allowAssignGrafanaAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string;
```

- *Type:* string

---

##### `allowedGroupsInput`<sup>Optional</sup> <a name="allowedGroupsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedGroupsInput"></a>

```typescript
public readonly allowedGroupsInput: string;
```

- *Type:* string

---

##### `allowedOrganizationsInput`<sup>Optional</sup> <a name="allowedOrganizationsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedOrganizationsInput"></a>

```typescript
public readonly allowedOrganizationsInput: string;
```

- *Type:* string

---

##### `allowSignUpInput`<sup>Optional</sup> <a name="allowSignUpInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowSignUpInput"></a>

```typescript
public readonly allowSignUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `authStyleInput`<sup>Optional</sup> <a name="authStyleInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authStyleInput"></a>

```typescript
public readonly authStyleInput: string;
```

- *Type:* string

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `autoLoginInput`<sup>Optional</sup> <a name="autoLoginInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.autoLoginInput"></a>

```typescript
public readonly autoLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.customInput"></a>

```typescript
public readonly customInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defineAllowedGroupsInput`<sup>Optional</sup> <a name="defineAllowedGroupsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedGroupsInput"></a>

```typescript
public readonly defineAllowedGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defineAllowedTeamsIdsInput`<sup>Optional</sup> <a name="defineAllowedTeamsIdsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedTeamsIdsInput"></a>

```typescript
public readonly defineAllowedTeamsIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAttributeNameInput`<sup>Optional</sup> <a name="emailAttributeNameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributeNameInput"></a>

```typescript
public readonly emailAttributeNameInput: string;
```

- *Type:* string

---

##### `emailAttributePathInput`<sup>Optional</sup> <a name="emailAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributePathInput"></a>

```typescript
public readonly emailAttributePathInput: string;
```

- *Type:* string

---

##### `emptyScopesInput`<sup>Optional</sup> <a name="emptyScopesInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emptyScopesInput"></a>

```typescript
public readonly emptyScopesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupsAttributePathInput`<sup>Optional</sup> <a name="groupsAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.groupsAttributePathInput"></a>

```typescript
public readonly groupsAttributePathInput: string;
```

- *Type:* string

---

##### `idTokenAttributeNameInput`<sup>Optional</sup> <a name="idTokenAttributeNameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.idTokenAttributeNameInput"></a>

```typescript
public readonly idTokenAttributeNameInput: string;
```

- *Type:* string

---

##### `loginAttributePathInput`<sup>Optional</sup> <a name="loginAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.loginAttributePathInput"></a>

```typescript
public readonly loginAttributePathInput: string;
```

- *Type:* string

---

##### `nameAttributePathInput`<sup>Optional</sup> <a name="nameAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameAttributePathInput"></a>

```typescript
public readonly nameAttributePathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgAttributePathInput`<sup>Optional</sup> <a name="orgAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgAttributePathInput"></a>

```typescript
public readonly orgAttributePathInput: string;
```

- *Type:* string

---

##### `orgMappingInput`<sup>Optional</sup> <a name="orgMappingInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgMappingInput"></a>

```typescript
public readonly orgMappingInput: string;
```

- *Type:* string

---

##### `roleAttributePathInput`<sup>Optional</sup> <a name="roleAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributePathInput"></a>

```typescript
public readonly roleAttributePathInput: string;
```

- *Type:* string

---

##### `roleAttributeStrictInput`<sup>Optional</sup> <a name="roleAttributeStrictInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributeStrictInput"></a>

```typescript
public readonly roleAttributeStrictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string;
```

- *Type:* string

---

##### `signoutRedirectUrlInput`<sup>Optional</sup> <a name="signoutRedirectUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.signoutRedirectUrlInput"></a>

```typescript
public readonly signoutRedirectUrlInput: string;
```

- *Type:* string

---

##### `skipOrgRoleSyncInput`<sup>Optional</sup> <a name="skipOrgRoleSyncInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.skipOrgRoleSyncInput"></a>

```typescript
public readonly skipOrgRoleSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamIdsAttributePathInput`<sup>Optional</sup> <a name="teamIdsAttributePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsAttributePathInput"></a>

```typescript
public readonly teamIdsAttributePathInput: string;
```

- *Type:* string

---

##### `teamIdsInput`<sup>Optional</sup> <a name="teamIdsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsInput"></a>

```typescript
public readonly teamIdsInput: string;
```

- *Type:* string

---

##### `teamsUrlInput`<sup>Optional</sup> <a name="teamsUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamsUrlInput"></a>

```typescript
public readonly teamsUrlInput: string;
```

- *Type:* string

---

##### `tlsClientCaInput`<sup>Optional</sup> <a name="tlsClientCaInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCaInput"></a>

```typescript
public readonly tlsClientCaInput: string;
```

- *Type:* string

---

##### `tlsClientCertInput`<sup>Optional</sup> <a name="tlsClientCertInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCertInput"></a>

```typescript
public readonly tlsClientCertInput: string;
```

- *Type:* string

---

##### `tlsClientKeyInput`<sup>Optional</sup> <a name="tlsClientKeyInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientKeyInput"></a>

```typescript
public readonly tlsClientKeyInput: string;
```

- *Type:* string

---

##### `tlsSkipVerifyInsecureInput`<sup>Optional</sup> <a name="tlsSkipVerifyInsecureInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsSkipVerifyInsecureInput"></a>

```typescript
public readonly tlsSkipVerifyInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `usePkceInput`<sup>Optional</sup> <a name="usePkceInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.usePkceInput"></a>

```typescript
public readonly usePkceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useRefreshTokenInput`<sup>Optional</sup> <a name="useRefreshTokenInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.useRefreshTokenInput"></a>

```typescript
public readonly useRefreshTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAssignGrafanaAdmin`<sup>Required</sup> <a name="allowAssignGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowAssignGrafanaAdmin"></a>

```typescript
public readonly allowAssignGrafanaAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string;
```

- *Type:* string

---

##### `allowedGroups`<sup>Required</sup> <a name="allowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedGroups"></a>

```typescript
public readonly allowedGroups: string;
```

- *Type:* string

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string;
```

- *Type:* string

---

##### `allowSignUp`<sup>Required</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `authStyle`<sup>Required</sup> <a name="authStyle" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authStyle"></a>

```typescript
public readonly authStyle: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `autoLogin`<sup>Required</sup> <a name="autoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.autoLogin"></a>

```typescript
public readonly autoLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `custom`<sup>Required</sup> <a name="custom" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.custom"></a>

```typescript
public readonly custom: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defineAllowedGroups`<sup>Required</sup> <a name="defineAllowedGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedGroups"></a>

```typescript
public readonly defineAllowedGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defineAllowedTeamsIds`<sup>Required</sup> <a name="defineAllowedTeamsIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.defineAllowedTeamsIds"></a>

```typescript
public readonly defineAllowedTeamsIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAttributeName`<sup>Required</sup> <a name="emailAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributeName"></a>

```typescript
public readonly emailAttributeName: string;
```

- *Type:* string

---

##### `emailAttributePath`<sup>Required</sup> <a name="emailAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emailAttributePath"></a>

```typescript
public readonly emailAttributePath: string;
```

- *Type:* string

---

##### `emptyScopes`<sup>Required</sup> <a name="emptyScopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.emptyScopes"></a>

```typescript
public readonly emptyScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupsAttributePath`<sup>Required</sup> <a name="groupsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.groupsAttributePath"></a>

```typescript
public readonly groupsAttributePath: string;
```

- *Type:* string

---

##### `idTokenAttributeName`<sup>Required</sup> <a name="idTokenAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.idTokenAttributeName"></a>

```typescript
public readonly idTokenAttributeName: string;
```

- *Type:* string

---

##### `loginAttributePath`<sup>Required</sup> <a name="loginAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.loginAttributePath"></a>

```typescript
public readonly loginAttributePath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameAttributePath`<sup>Required</sup> <a name="nameAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.nameAttributePath"></a>

```typescript
public readonly nameAttributePath: string;
```

- *Type:* string

---

##### `orgAttributePath`<sup>Required</sup> <a name="orgAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgAttributePath"></a>

```typescript
public readonly orgAttributePath: string;
```

- *Type:* string

---

##### `orgMapping`<sup>Required</sup> <a name="orgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.orgMapping"></a>

```typescript
public readonly orgMapping: string;
```

- *Type:* string

---

##### `roleAttributePath`<sup>Required</sup> <a name="roleAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributePath"></a>

```typescript
public readonly roleAttributePath: string;
```

- *Type:* string

---

##### `roleAttributeStrict`<sup>Required</sup> <a name="roleAttributeStrict" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.roleAttributeStrict"></a>

```typescript
public readonly roleAttributeStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string;
```

- *Type:* string

---

##### `signoutRedirectUrl`<sup>Required</sup> <a name="signoutRedirectUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.signoutRedirectUrl"></a>

```typescript
public readonly signoutRedirectUrl: string;
```

- *Type:* string

---

##### `skipOrgRoleSync`<sup>Required</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `teamIds`<sup>Required</sup> <a name="teamIds" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIds"></a>

```typescript
public readonly teamIds: string;
```

- *Type:* string

---

##### `teamIdsAttributePath`<sup>Required</sup> <a name="teamIdsAttributePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamIdsAttributePath"></a>

```typescript
public readonly teamIdsAttributePath: string;
```

- *Type:* string

---

##### `teamsUrl`<sup>Required</sup> <a name="teamsUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.teamsUrl"></a>

```typescript
public readonly teamsUrl: string;
```

- *Type:* string

---

##### `tlsClientCa`<sup>Required</sup> <a name="tlsClientCa" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCa"></a>

```typescript
public readonly tlsClientCa: string;
```

- *Type:* string

---

##### `tlsClientCert`<sup>Required</sup> <a name="tlsClientCert" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientCert"></a>

```typescript
public readonly tlsClientCert: string;
```

- *Type:* string

---

##### `tlsClientKey`<sup>Required</sup> <a name="tlsClientKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsClientKey"></a>

```typescript
public readonly tlsClientKey: string;
```

- *Type:* string

---

##### `tlsSkipVerifyInsecure`<sup>Required</sup> <a name="tlsSkipVerifyInsecure" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tlsSkipVerifyInsecure"></a>

```typescript
public readonly tlsSkipVerifyInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `usePkce`<sup>Required</sup> <a name="usePkce" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.usePkce"></a>

```typescript
public readonly usePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useRefreshToken`<sup>Required</sup> <a name="useRefreshToken" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.useRefreshToken"></a>

```typescript
public readonly useRefreshToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2SettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoSettingsOauth2Settings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsOauth2Settings">SsoSettingsOauth2Settings</a>

---


### SsoSettingsSamlSettingsOutputReference <a name="SsoSettingsSamlSettingsOutputReference" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.Initializer"></a>

```typescript
import { ssoSettings } from 'rhizo-co-terraform-provider-grafana'

new ssoSettings.SsoSettingsSamlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowedOrganizations">resetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowIdpInitiated">resetAllowIdpInitiated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowSignUp">resetAllowSignUp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeEmail">resetAssertionAttributeEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeGroups">resetAssertionAttributeGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeLogin">resetAssertionAttributeLogin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeName">resetAssertionAttributeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeOrg">resetAssertionAttributeOrg</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeRole">resetAssertionAttributeRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAutoLogin">resetAutoLogin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetCertificatePath">resetCertificatePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetForceUseGraphApi">resetForceUseGraphApi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadata">resetIdpMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadataPath">resetIdpMetadataPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetMaxIssueDelay">resetMaxIssueDelay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetMetadataValidDuration">resetMetadataValidDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetNameIdFormat">resetNameIdFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetOrgMapping">resetOrgMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetPrivateKeyPath">resetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRelayState">resetRelayState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesAdmin">resetRoleValuesAdmin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesEditor">resetRoleValuesEditor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesGrafanaAdmin">resetRoleValuesGrafanaAdmin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesNone">resetRoleValuesNone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesViewer">resetRoleValuesViewer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSingleLogout">resetSingleLogout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSkipOrgRoleSync">resetSkipOrgRoleSync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrganizations` <a name="resetAllowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowedOrganizations"></a>

```typescript
public resetAllowedOrganizations(): void
```

##### `resetAllowIdpInitiated` <a name="resetAllowIdpInitiated" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowIdpInitiated"></a>

```typescript
public resetAllowIdpInitiated(): void
```

##### `resetAllowSignUp` <a name="resetAllowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAllowSignUp"></a>

```typescript
public resetAllowSignUp(): void
```

##### `resetAssertionAttributeEmail` <a name="resetAssertionAttributeEmail" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeEmail"></a>

```typescript
public resetAssertionAttributeEmail(): void
```

##### `resetAssertionAttributeGroups` <a name="resetAssertionAttributeGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeGroups"></a>

```typescript
public resetAssertionAttributeGroups(): void
```

##### `resetAssertionAttributeLogin` <a name="resetAssertionAttributeLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeLogin"></a>

```typescript
public resetAssertionAttributeLogin(): void
```

##### `resetAssertionAttributeName` <a name="resetAssertionAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeName"></a>

```typescript
public resetAssertionAttributeName(): void
```

##### `resetAssertionAttributeOrg` <a name="resetAssertionAttributeOrg" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeOrg"></a>

```typescript
public resetAssertionAttributeOrg(): void
```

##### `resetAssertionAttributeRole` <a name="resetAssertionAttributeRole" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAssertionAttributeRole"></a>

```typescript
public resetAssertionAttributeRole(): void
```

##### `resetAutoLogin` <a name="resetAutoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetAutoLogin"></a>

```typescript
public resetAutoLogin(): void
```

##### `resetCertificate` <a name="resetCertificate" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePath` <a name="resetCertificatePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetCertificatePath"></a>

```typescript
public resetCertificatePath(): void
```

##### `resetClientId` <a name="resetClientId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEntityId` <a name="resetEntityId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetEntityId"></a>

```typescript
public resetEntityId(): void
```

##### `resetForceUseGraphApi` <a name="resetForceUseGraphApi" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetForceUseGraphApi"></a>

```typescript
public resetForceUseGraphApi(): void
```

##### `resetIdpMetadata` <a name="resetIdpMetadata" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadata"></a>

```typescript
public resetIdpMetadata(): void
```

##### `resetIdpMetadataPath` <a name="resetIdpMetadataPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadataPath"></a>

```typescript
public resetIdpMetadataPath(): void
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetIdpMetadataUrl"></a>

```typescript
public resetIdpMetadataUrl(): void
```

##### `resetMaxIssueDelay` <a name="resetMaxIssueDelay" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetMaxIssueDelay"></a>

```typescript
public resetMaxIssueDelay(): void
```

##### `resetMetadataValidDuration` <a name="resetMetadataValidDuration" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetMetadataValidDuration"></a>

```typescript
public resetMetadataValidDuration(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameIdFormat` <a name="resetNameIdFormat" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetNameIdFormat"></a>

```typescript
public resetNameIdFormat(): void
```

##### `resetOrgMapping` <a name="resetOrgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetOrgMapping"></a>

```typescript
public resetOrgMapping(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyPath` <a name="resetPrivateKeyPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetPrivateKeyPath"></a>

```typescript
public resetPrivateKeyPath(): void
```

##### `resetRelayState` <a name="resetRelayState" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRelayState"></a>

```typescript
public resetRelayState(): void
```

##### `resetRoleValuesAdmin` <a name="resetRoleValuesAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesAdmin"></a>

```typescript
public resetRoleValuesAdmin(): void
```

##### `resetRoleValuesEditor` <a name="resetRoleValuesEditor" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesEditor"></a>

```typescript
public resetRoleValuesEditor(): void
```

##### `resetRoleValuesGrafanaAdmin` <a name="resetRoleValuesGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesGrafanaAdmin"></a>

```typescript
public resetRoleValuesGrafanaAdmin(): void
```

##### `resetRoleValuesNone` <a name="resetRoleValuesNone" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesNone"></a>

```typescript
public resetRoleValuesNone(): void
```

##### `resetRoleValuesViewer` <a name="resetRoleValuesViewer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetRoleValuesViewer"></a>

```typescript
public resetRoleValuesViewer(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

##### `resetSingleLogout` <a name="resetSingleLogout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSingleLogout"></a>

```typescript
public resetSingleLogout(): void
```

##### `resetSkipOrgRoleSync` <a name="resetSkipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetSkipOrgRoleSync"></a>

```typescript
public resetSkipOrgRoleSync(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowedOrganizationsInput">allowedOrganizationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowIdpInitiatedInput">allowIdpInitiatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowSignUpInput">allowSignUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeEmailInput">assertionAttributeEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeGroupsInput">assertionAttributeGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeLoginInput">assertionAttributeLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeNameInput">assertionAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeOrgInput">assertionAttributeOrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeRoleInput">assertionAttributeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.autoLoginInput">autoLoginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificatePathInput">certificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.forceUseGraphApiInput">forceUseGraphApiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataInput">idpMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataPathInput">idpMetadataPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.maxIssueDelayInput">maxIssueDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.metadataValidDurationInput">metadataValidDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameIdFormatInput">nameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.orgMappingInput">orgMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyPathInput">privateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.relayStateInput">relayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesAdminInput">roleValuesAdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesEditorInput">roleValuesEditorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesGrafanaAdminInput">roleValuesGrafanaAdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesNoneInput">roleValuesNoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesViewerInput">roleValuesViewerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.singleLogoutInput">singleLogoutInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.skipOrgRoleSyncInput">skipOrgRoleSyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowIdpInitiated">allowIdpInitiated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowSignUp">allowSignUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeEmail">assertionAttributeEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeGroups">assertionAttributeGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeLogin">assertionAttributeLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeName">assertionAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeOrg">assertionAttributeOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeRole">assertionAttributeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.autoLogin">autoLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificatePath">certificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.forceUseGraphApi">forceUseGraphApi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadata">idpMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataPath">idpMetadataPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.maxIssueDelay">maxIssueDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.metadataValidDuration">metadataValidDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.orgMapping">orgMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.relayState">relayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesAdmin">roleValuesAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesEditor">roleValuesEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesGrafanaAdmin">roleValuesGrafanaAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesNone">roleValuesNone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesViewer">roleValuesViewer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.singleLogout">singleLogout</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.skipOrgRoleSync">skipOrgRoleSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOrganizationsInput`<sup>Optional</sup> <a name="allowedOrganizationsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowedOrganizationsInput"></a>

```typescript
public readonly allowedOrganizationsInput: string;
```

- *Type:* string

---

##### `allowIdpInitiatedInput`<sup>Optional</sup> <a name="allowIdpInitiatedInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowIdpInitiatedInput"></a>

```typescript
public readonly allowIdpInitiatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSignUpInput`<sup>Optional</sup> <a name="allowSignUpInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowSignUpInput"></a>

```typescript
public readonly allowSignUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assertionAttributeEmailInput`<sup>Optional</sup> <a name="assertionAttributeEmailInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeEmailInput"></a>

```typescript
public readonly assertionAttributeEmailInput: string;
```

- *Type:* string

---

##### `assertionAttributeGroupsInput`<sup>Optional</sup> <a name="assertionAttributeGroupsInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeGroupsInput"></a>

```typescript
public readonly assertionAttributeGroupsInput: string;
```

- *Type:* string

---

##### `assertionAttributeLoginInput`<sup>Optional</sup> <a name="assertionAttributeLoginInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeLoginInput"></a>

```typescript
public readonly assertionAttributeLoginInput: string;
```

- *Type:* string

---

##### `assertionAttributeNameInput`<sup>Optional</sup> <a name="assertionAttributeNameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeNameInput"></a>

```typescript
public readonly assertionAttributeNameInput: string;
```

- *Type:* string

---

##### `assertionAttributeOrgInput`<sup>Optional</sup> <a name="assertionAttributeOrgInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeOrgInput"></a>

```typescript
public readonly assertionAttributeOrgInput: string;
```

- *Type:* string

---

##### `assertionAttributeRoleInput`<sup>Optional</sup> <a name="assertionAttributeRoleInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeRoleInput"></a>

```typescript
public readonly assertionAttributeRoleInput: string;
```

- *Type:* string

---

##### `autoLoginInput`<sup>Optional</sup> <a name="autoLoginInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.autoLoginInput"></a>

```typescript
public readonly autoLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePathInput`<sup>Optional</sup> <a name="certificatePathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificatePathInput"></a>

```typescript
public readonly certificatePathInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `forceUseGraphApiInput`<sup>Optional</sup> <a name="forceUseGraphApiInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.forceUseGraphApiInput"></a>

```typescript
public readonly forceUseGraphApiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpMetadataInput`<sup>Optional</sup> <a name="idpMetadataInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataInput"></a>

```typescript
public readonly idpMetadataInput: string;
```

- *Type:* string

---

##### `idpMetadataPathInput`<sup>Optional</sup> <a name="idpMetadataPathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataPathInput"></a>

```typescript
public readonly idpMetadataPathInput: string;
```

- *Type:* string

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataUrlInput"></a>

```typescript
public readonly idpMetadataUrlInput: string;
```

- *Type:* string

---

##### `maxIssueDelayInput`<sup>Optional</sup> <a name="maxIssueDelayInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.maxIssueDelayInput"></a>

```typescript
public readonly maxIssueDelayInput: string;
```

- *Type:* string

---

##### `metadataValidDurationInput`<sup>Optional</sup> <a name="metadataValidDurationInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.metadataValidDurationInput"></a>

```typescript
public readonly metadataValidDurationInput: string;
```

- *Type:* string

---

##### `nameIdFormatInput`<sup>Optional</sup> <a name="nameIdFormatInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameIdFormatInput"></a>

```typescript
public readonly nameIdFormatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgMappingInput`<sup>Optional</sup> <a name="orgMappingInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.orgMappingInput"></a>

```typescript
public readonly orgMappingInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPathInput`<sup>Optional</sup> <a name="privateKeyPathInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyPathInput"></a>

```typescript
public readonly privateKeyPathInput: string;
```

- *Type:* string

---

##### `relayStateInput`<sup>Optional</sup> <a name="relayStateInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.relayStateInput"></a>

```typescript
public readonly relayStateInput: string;
```

- *Type:* string

---

##### `roleValuesAdminInput`<sup>Optional</sup> <a name="roleValuesAdminInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesAdminInput"></a>

```typescript
public readonly roleValuesAdminInput: string;
```

- *Type:* string

---

##### `roleValuesEditorInput`<sup>Optional</sup> <a name="roleValuesEditorInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesEditorInput"></a>

```typescript
public readonly roleValuesEditorInput: string;
```

- *Type:* string

---

##### `roleValuesGrafanaAdminInput`<sup>Optional</sup> <a name="roleValuesGrafanaAdminInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesGrafanaAdminInput"></a>

```typescript
public readonly roleValuesGrafanaAdminInput: string;
```

- *Type:* string

---

##### `roleValuesNoneInput`<sup>Optional</sup> <a name="roleValuesNoneInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesNoneInput"></a>

```typescript
public readonly roleValuesNoneInput: string;
```

- *Type:* string

---

##### `roleValuesViewerInput`<sup>Optional</sup> <a name="roleValuesViewerInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesViewerInput"></a>

```typescript
public readonly roleValuesViewerInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `singleLogoutInput`<sup>Optional</sup> <a name="singleLogoutInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.singleLogoutInput"></a>

```typescript
public readonly singleLogoutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipOrgRoleSyncInput`<sup>Optional</sup> <a name="skipOrgRoleSyncInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.skipOrgRoleSyncInput"></a>

```typescript
public readonly skipOrgRoleSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string;
```

- *Type:* string

---

##### `allowIdpInitiated`<sup>Required</sup> <a name="allowIdpInitiated" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowIdpInitiated"></a>

```typescript
public readonly allowIdpInitiated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSignUp`<sup>Required</sup> <a name="allowSignUp" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.allowSignUp"></a>

```typescript
public readonly allowSignUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assertionAttributeEmail`<sup>Required</sup> <a name="assertionAttributeEmail" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeEmail"></a>

```typescript
public readonly assertionAttributeEmail: string;
```

- *Type:* string

---

##### `assertionAttributeGroups`<sup>Required</sup> <a name="assertionAttributeGroups" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeGroups"></a>

```typescript
public readonly assertionAttributeGroups: string;
```

- *Type:* string

---

##### `assertionAttributeLogin`<sup>Required</sup> <a name="assertionAttributeLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeLogin"></a>

```typescript
public readonly assertionAttributeLogin: string;
```

- *Type:* string

---

##### `assertionAttributeName`<sup>Required</sup> <a name="assertionAttributeName" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeName"></a>

```typescript
public readonly assertionAttributeName: string;
```

- *Type:* string

---

##### `assertionAttributeOrg`<sup>Required</sup> <a name="assertionAttributeOrg" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeOrg"></a>

```typescript
public readonly assertionAttributeOrg: string;
```

- *Type:* string

---

##### `assertionAttributeRole`<sup>Required</sup> <a name="assertionAttributeRole" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.assertionAttributeRole"></a>

```typescript
public readonly assertionAttributeRole: string;
```

- *Type:* string

---

##### `autoLogin`<sup>Required</sup> <a name="autoLogin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.autoLogin"></a>

```typescript
public readonly autoLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePath`<sup>Required</sup> <a name="certificatePath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.certificatePath"></a>

```typescript
public readonly certificatePath: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `forceUseGraphApi`<sup>Required</sup> <a name="forceUseGraphApi" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.forceUseGraphApi"></a>

```typescript
public readonly forceUseGraphApi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpMetadata`<sup>Required</sup> <a name="idpMetadata" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: string;
```

- *Type:* string

---

##### `idpMetadataPath`<sup>Required</sup> <a name="idpMetadataPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataPath"></a>

```typescript
public readonly idpMetadataPath: string;
```

- *Type:* string

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

---

##### `maxIssueDelay`<sup>Required</sup> <a name="maxIssueDelay" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.maxIssueDelay"></a>

```typescript
public readonly maxIssueDelay: string;
```

- *Type:* string

---

##### `metadataValidDuration`<sup>Required</sup> <a name="metadataValidDuration" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.metadataValidDuration"></a>

```typescript
public readonly metadataValidDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

---

##### `orgMapping`<sup>Required</sup> <a name="orgMapping" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.orgMapping"></a>

```typescript
public readonly orgMapping: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPath`<sup>Required</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

---

##### `relayState`<sup>Required</sup> <a name="relayState" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* string

---

##### `roleValuesAdmin`<sup>Required</sup> <a name="roleValuesAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesAdmin"></a>

```typescript
public readonly roleValuesAdmin: string;
```

- *Type:* string

---

##### `roleValuesEditor`<sup>Required</sup> <a name="roleValuesEditor" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesEditor"></a>

```typescript
public readonly roleValuesEditor: string;
```

- *Type:* string

---

##### `roleValuesGrafanaAdmin`<sup>Required</sup> <a name="roleValuesGrafanaAdmin" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesGrafanaAdmin"></a>

```typescript
public readonly roleValuesGrafanaAdmin: string;
```

- *Type:* string

---

##### `roleValuesNone`<sup>Required</sup> <a name="roleValuesNone" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesNone"></a>

```typescript
public readonly roleValuesNone: string;
```

- *Type:* string

---

##### `roleValuesViewer`<sup>Required</sup> <a name="roleValuesViewer" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.roleValuesViewer"></a>

```typescript
public readonly roleValuesViewer: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `singleLogout`<sup>Required</sup> <a name="singleLogout" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.singleLogout"></a>

```typescript
public readonly singleLogout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipOrgRoleSync`<sup>Required</sup> <a name="skipOrgRoleSync" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.skipOrgRoleSync"></a>

```typescript
public readonly skipOrgRoleSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoSettingsSamlSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ssoSettings.SsoSettingsSamlSettings">SsoSettingsSamlSettings</a>

---




# `grafana_oncall_outgoing_webhook`

Refer to the Terraform Registory for docs: [`grafana_oncall_outgoing_webhook`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook).

# `oncallOutgoingWebhook` Submodule <a name="`oncallOutgoingWebhook` Submodule" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallOutgoingWebhook <a name="OncallOutgoingWebhook" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook grafana_oncall_outgoing_webhook}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer"></a>

```typescript
import { oncallOutgoingWebhook } from 'rhizo-co-terraform-provider-grafana'

new oncallOutgoingWebhook.OncallOutgoingWebhook(scope: Construct, id: string, config: OncallOutgoingWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig">OncallOutgoingWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig">OncallOutgoingWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetForwardWholePayload">resetForwardWholePayload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetIntegrationFilter">resetIntegrationFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetIsWebhookEnabled">resetIsWebhookEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTriggerTemplate">resetTriggerTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTriggerType">resetTriggerType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetAuthorizationHeader"></a>

```typescript
public resetAuthorizationHeader(): void
```

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetData"></a>

```typescript
public resetData(): void
```

##### `resetForwardWholePayload` <a name="resetForwardWholePayload" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetForwardWholePayload"></a>

```typescript
public resetForwardWholePayload(): void
```

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationFilter` <a name="resetIntegrationFilter" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetIntegrationFilter"></a>

```typescript
public resetIntegrationFilter(): void
```

##### `resetIsWebhookEnabled` <a name="resetIsWebhookEnabled" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetIsWebhookEnabled"></a>

```typescript
public resetIsWebhookEnabled(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTriggerTemplate` <a name="resetTriggerTemplate" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTriggerTemplate"></a>

```typescript
public resetTriggerTemplate(): void
```

##### `resetTriggerType` <a name="resetTriggerType" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetTriggerType"></a>

```typescript
public resetTriggerType(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isConstruct"></a>

```typescript
import { oncallOutgoingWebhook } from 'rhizo-co-terraform-provider-grafana'

oncallOutgoingWebhook.OncallOutgoingWebhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformElement"></a>

```typescript
import { oncallOutgoingWebhook } from 'rhizo-co-terraform-provider-grafana'

oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformResource"></a>

```typescript
import { oncallOutgoingWebhook } from 'rhizo-co-terraform-provider-grafana'

oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forwardWholePayloadInput">forwardWholePayloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.headersInput">headersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.integrationFilterInput">integrationFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.isWebhookEnabledInput">isWebhookEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTemplateInput">triggerTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forwardWholePayload">forwardWholePayload</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.headers">headers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.integrationFilter">integrationFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTemplate">triggerTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerType">triggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.authorizationHeaderInput"></a>

```typescript
public readonly authorizationHeaderInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `forwardWholePayloadInput`<sup>Optional</sup> <a name="forwardWholePayloadInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forwardWholePayloadInput"></a>

```typescript
public readonly forwardWholePayloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.headersInput"></a>

```typescript
public readonly headersInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationFilterInput`<sup>Optional</sup> <a name="integrationFilterInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.integrationFilterInput"></a>

```typescript
public readonly integrationFilterInput: string[];
```

- *Type:* string[]

---

##### `isWebhookEnabledInput`<sup>Optional</sup> <a name="isWebhookEnabledInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.isWebhookEnabledInput"></a>

```typescript
public readonly isWebhookEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `triggerTemplateInput`<sup>Optional</sup> <a name="triggerTemplateInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTemplateInput"></a>

```typescript
public readonly triggerTemplateInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `forwardWholePayload`<sup>Required</sup> <a name="forwardWholePayload" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.forwardWholePayload"></a>

```typescript
public readonly forwardWholePayload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.headers"></a>

```typescript
public readonly headers: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationFilter`<sup>Required</sup> <a name="integrationFilter" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.integrationFilter"></a>

```typescript
public readonly integrationFilter: string[];
```

- *Type:* string[]

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.isWebhookEnabled"></a>

```typescript
public readonly isWebhookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `triggerTemplate`<sup>Required</sup> <a name="triggerTemplate" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerTemplate"></a>

```typescript
public readonly triggerTemplate: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallOutgoingWebhookConfig <a name="OncallOutgoingWebhookConfig" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.Initializer"></a>

```typescript
import { oncallOutgoingWebhook } from 'rhizo-co-terraform-provider-grafana'

const oncallOutgoingWebhookConfig: oncallOutgoingWebhook.OncallOutgoingWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.name">name</a></code> | <code>string</code> | The name of the outgoing webhook. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.url">url</a></code> | <code>string</code> | The webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.authorizationHeader">authorizationHeader</a></code> | <code>string</code> | The auth data of the webhook. Used in Authorization header instead of user/password auth. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.data">data</a></code> | <code>string</code> | The data of the webhook. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.forwardWholePayload">forwardWholePayload</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle to send the entire webhook payload instead of using the values in the Data field. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.headers">headers</a></code> | <code>string</code> | Headers to add to the outgoing webhook request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method used in the request made by the outgoing webhook. Defaults to `POST`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#id OncallOutgoingWebhook#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.integrationFilter">integrationFilter</a></code> | <code>string[]</code> | Restricts the outgoing webhook to only trigger if the event came from a selected integration. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether the outgoing webhook will trigger or is ignored. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.password">password</a></code> | <code>string</code> | The auth data of the webhook. Used for Basic authentication. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the OnCall team. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.triggerTemplate">triggerTemplate</a></code> | <code>string</code> | A template used to dynamically determine whether the webhook should execute based on the content of the payload. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.triggerType">triggerType</a></code> | <code>string</code> | The type of event that will cause this outgoing webhook to execute. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.user">user</a></code> | <code>string</code> | Username to use when making the outgoing webhook request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the outgoing webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#name OncallOutgoingWebhook#name}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#url OncallOutgoingWebhook#url}

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.authorizationHeader"></a>

```typescript
public readonly authorizationHeader: string;
```

- *Type:* string

The auth data of the webhook. Used in Authorization header instead of user/password auth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#authorization_header OncallOutgoingWebhook#authorization_header}

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The data of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#data OncallOutgoingWebhook#data}

---

##### `forwardWholePayload`<sup>Optional</sup> <a name="forwardWholePayload" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.forwardWholePayload"></a>

```typescript
public readonly forwardWholePayload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle to send the entire webhook payload instead of using the values in the Data field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#forward_whole_payload OncallOutgoingWebhook#forward_whole_payload}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.headers"></a>

```typescript
public readonly headers: string;
```

- *Type:* string

Headers to add to the outgoing webhook request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#headers OncallOutgoingWebhook#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method used in the request made by the outgoing webhook. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#http_method OncallOutgoingWebhook#http_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#id OncallOutgoingWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationFilter`<sup>Optional</sup> <a name="integrationFilter" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.integrationFilter"></a>

```typescript
public readonly integrationFilter: string[];
```

- *Type:* string[]

Restricts the outgoing webhook to only trigger if the event came from a selected integration.

If no integrations are selected the outgoing webhook will trigger for any integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#integration_filter OncallOutgoingWebhook#integration_filter}

---

##### `isWebhookEnabled`<sup>Optional</sup> <a name="isWebhookEnabled" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.isWebhookEnabled"></a>

```typescript
public readonly isWebhookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether the outgoing webhook will trigger or is ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#is_webhook_enabled OncallOutgoingWebhook#is_webhook_enabled}

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The auth data of the webhook. Used for Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#password OncallOutgoingWebhook#password}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the OnCall team.

To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team with OnCall). You can then get the ID using the `grafana_oncall_team` datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#team_id OncallOutgoingWebhook#team_id}

---

##### `triggerTemplate`<sup>Optional</sup> <a name="triggerTemplate" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.triggerTemplate"></a>

```typescript
public readonly triggerTemplate: string;
```

- *Type:* string

A template used to dynamically determine whether the webhook should execute based on the content of the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#trigger_template OncallOutgoingWebhook#trigger_template}

---

##### `triggerType`<sup>Optional</sup> <a name="triggerType" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

The type of event that will cause this outgoing webhook to execute.

The types of triggers are: `escalation`, `alert group created`, `acknowledge`, `resolve`, `silence`, `unsilence`, `unresolve`, `unacknowledge`. Defaults to `escalation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#trigger_type OncallOutgoingWebhook#trigger_type}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-grafana.oncallOutgoingWebhook.OncallOutgoingWebhookConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Username to use when making the outgoing webhook request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_outgoing_webhook#user OncallOutgoingWebhook#user}

---




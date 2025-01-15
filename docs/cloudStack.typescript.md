# `grafana_cloud_stack`

Refer to the Terraform Registory for docs: [`grafana_cloud_stack`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack).

# `cloudStack` Submodule <a name="`cloudStack` Submodule" id="rhizo-co-terraform-provider-grafana.cloudStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudStack <a name="CloudStack" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack grafana_cloud_stack}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer"></a>

```typescript
import { cloudStack } from 'rhizo-co-terraform-provider-grafana'

new cloudStack.CloudStack(scope: Construct, id: string, config: CloudStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig">CloudStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig">CloudStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetRegionSlug">resetRegionSlug</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetWaitForReadiness">resetWaitForReadiness</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetWaitForReadinessTimeout">resetWaitForReadinessTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRegionSlug` <a name="resetRegionSlug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetRegionSlug"></a>

```typescript
public resetRegionSlug(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetWaitForReadiness` <a name="resetWaitForReadiness" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetWaitForReadiness"></a>

```typescript
public resetWaitForReadiness(): void
```

##### `resetWaitForReadinessTimeout` <a name="resetWaitForReadinessTimeout" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.resetWaitForReadinessTimeout"></a>

```typescript
public resetWaitForReadinessTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isConstruct"></a>

```typescript
import { cloudStack } from 'rhizo-co-terraform-provider-grafana'

cloudStack.CloudStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformElement"></a>

```typescript
import { cloudStack } from 'rhizo-co-terraform-provider-grafana'

cloudStack.CloudStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformResource"></a>

```typescript
import { cloudStack } from 'rhizo-co-terraform-provider-grafana'

cloudStack.CloudStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerName">alertmanagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerStatus">alertmanagerStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerUrl">alertmanagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerUserId">alertmanagerUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteName">graphiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteStatus">graphiteStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteUrl">graphiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteUserId">graphiteUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.influxUrl">influxUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsName">logsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsStatus">logsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsUrl">logsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsUserId">logsUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgId">orgId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgName">orgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgSlug">orgSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.otlpUrl">otlpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesName">profilesName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesStatus">profilesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesUrl">profilesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesUserId">profilesUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusName">prometheusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusRemoteEndpoint">prometheusRemoteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusRemoteWriteEndpoint">prometheusRemoteWriteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusStatus">prometheusStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusUrl">prometheusUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusUserId">prometheusUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesName">tracesName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesStatus">tracesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesUrl">tracesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesUserId">tracesUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.regionSlugInput">regionSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.slugInput">slugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessInput">waitForReadinessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessTimeoutInput">waitForReadinessTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.regionSlug">regionSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadiness">waitForReadiness</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessTimeout">waitForReadinessTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertmanagerName`<sup>Required</sup> <a name="alertmanagerName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerName"></a>

```typescript
public readonly alertmanagerName: string;
```

- *Type:* string

---

##### `alertmanagerStatus`<sup>Required</sup> <a name="alertmanagerStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerStatus"></a>

```typescript
public readonly alertmanagerStatus: string;
```

- *Type:* string

---

##### `alertmanagerUrl`<sup>Required</sup> <a name="alertmanagerUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerUrl"></a>

```typescript
public readonly alertmanagerUrl: string;
```

- *Type:* string

---

##### `alertmanagerUserId`<sup>Required</sup> <a name="alertmanagerUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.alertmanagerUserId"></a>

```typescript
public readonly alertmanagerUserId: number;
```

- *Type:* number

---

##### `graphiteName`<sup>Required</sup> <a name="graphiteName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteName"></a>

```typescript
public readonly graphiteName: string;
```

- *Type:* string

---

##### `graphiteStatus`<sup>Required</sup> <a name="graphiteStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteStatus"></a>

```typescript
public readonly graphiteStatus: string;
```

- *Type:* string

---

##### `graphiteUrl`<sup>Required</sup> <a name="graphiteUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteUrl"></a>

```typescript
public readonly graphiteUrl: string;
```

- *Type:* string

---

##### `graphiteUserId`<sup>Required</sup> <a name="graphiteUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.graphiteUserId"></a>

```typescript
public readonly graphiteUserId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `influxUrl`<sup>Required</sup> <a name="influxUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.influxUrl"></a>

```typescript
public readonly influxUrl: string;
```

- *Type:* string

---

##### `logsName`<sup>Required</sup> <a name="logsName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsName"></a>

```typescript
public readonly logsName: string;
```

- *Type:* string

---

##### `logsStatus`<sup>Required</sup> <a name="logsStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsStatus"></a>

```typescript
public readonly logsStatus: string;
```

- *Type:* string

---

##### `logsUrl`<sup>Required</sup> <a name="logsUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsUrl"></a>

```typescript
public readonly logsUrl: string;
```

- *Type:* string

---

##### `logsUserId`<sup>Required</sup> <a name="logsUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.logsUserId"></a>

```typescript
public readonly logsUserId: number;
```

- *Type:* number

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgId"></a>

```typescript
public readonly orgId: number;
```

- *Type:* number

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

---

##### `orgSlug`<sup>Required</sup> <a name="orgSlug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.orgSlug"></a>

```typescript
public readonly orgSlug: string;
```

- *Type:* string

---

##### `otlpUrl`<sup>Required</sup> <a name="otlpUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.otlpUrl"></a>

```typescript
public readonly otlpUrl: string;
```

- *Type:* string

---

##### `profilesName`<sup>Required</sup> <a name="profilesName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesName"></a>

```typescript
public readonly profilesName: string;
```

- *Type:* string

---

##### `profilesStatus`<sup>Required</sup> <a name="profilesStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesStatus"></a>

```typescript
public readonly profilesStatus: string;
```

- *Type:* string

---

##### `profilesUrl`<sup>Required</sup> <a name="profilesUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesUrl"></a>

```typescript
public readonly profilesUrl: string;
```

- *Type:* string

---

##### `profilesUserId`<sup>Required</sup> <a name="profilesUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.profilesUserId"></a>

```typescript
public readonly profilesUserId: number;
```

- *Type:* number

---

##### `prometheusName`<sup>Required</sup> <a name="prometheusName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusName"></a>

```typescript
public readonly prometheusName: string;
```

- *Type:* string

---

##### `prometheusRemoteEndpoint`<sup>Required</sup> <a name="prometheusRemoteEndpoint" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusRemoteEndpoint"></a>

```typescript
public readonly prometheusRemoteEndpoint: string;
```

- *Type:* string

---

##### `prometheusRemoteWriteEndpoint`<sup>Required</sup> <a name="prometheusRemoteWriteEndpoint" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusRemoteWriteEndpoint"></a>

```typescript
public readonly prometheusRemoteWriteEndpoint: string;
```

- *Type:* string

---

##### `prometheusStatus`<sup>Required</sup> <a name="prometheusStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusStatus"></a>

```typescript
public readonly prometheusStatus: string;
```

- *Type:* string

---

##### `prometheusUrl`<sup>Required</sup> <a name="prometheusUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusUrl"></a>

```typescript
public readonly prometheusUrl: string;
```

- *Type:* string

---

##### `prometheusUserId`<sup>Required</sup> <a name="prometheusUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.prometheusUserId"></a>

```typescript
public readonly prometheusUserId: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tracesName`<sup>Required</sup> <a name="tracesName" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesName"></a>

```typescript
public readonly tracesName: string;
```

- *Type:* string

---

##### `tracesStatus`<sup>Required</sup> <a name="tracesStatus" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesStatus"></a>

```typescript
public readonly tracesStatus: string;
```

- *Type:* string

---

##### `tracesUrl`<sup>Required</sup> <a name="tracesUrl" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesUrl"></a>

```typescript
public readonly tracesUrl: string;
```

- *Type:* string

---

##### `tracesUserId`<sup>Required</sup> <a name="tracesUserId" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tracesUserId"></a>

```typescript
public readonly tracesUserId: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionSlugInput`<sup>Optional</sup> <a name="regionSlugInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.regionSlugInput"></a>

```typescript
public readonly regionSlugInput: string;
```

- *Type:* string

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.slugInput"></a>

```typescript
public readonly slugInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `waitForReadinessInput`<sup>Optional</sup> <a name="waitForReadinessInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessInput"></a>

```typescript
public readonly waitForReadinessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForReadinessTimeoutInput`<sup>Optional</sup> <a name="waitForReadinessTimeoutInput" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessTimeoutInput"></a>

```typescript
public readonly waitForReadinessTimeoutInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regionSlug`<sup>Required</sup> <a name="regionSlug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.regionSlug"></a>

```typescript
public readonly regionSlug: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `waitForReadiness`<sup>Required</sup> <a name="waitForReadiness" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadiness"></a>

```typescript
public readonly waitForReadiness: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForReadinessTimeout`<sup>Required</sup> <a name="waitForReadinessTimeout" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.waitForReadinessTimeout"></a>

```typescript
public readonly waitForReadinessTimeout: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudStackConfig <a name="CloudStackConfig" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.Initializer"></a>

```typescript
import { cloudStack } from 'rhizo-co-terraform-provider-grafana'

const cloudStackConfig: cloudStack.CloudStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.name">name</a></code> | <code>string</code> | Name of stack. Conventionally matches the url of the instance (e.g. `<stack_slug>.grafana.net`). |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.slug">slug</a></code> | <code>string</code> | Subdomain that the Grafana instance will be available at. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.description">description</a></code> | <code>string</code> | Description of stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of labels to assign to the stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.regionSlug">regionSlug</a></code> | <code>string</code> | Region slug to assign to this stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.url">url</a></code> | <code>string</code> | Custom URL for the Grafana instance. Must have a CNAME setup to point to `.grafana.net` before creating the stack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.waitForReadiness">waitForReadiness</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for readiness of the stack after creating it. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.waitForReadinessTimeout">waitForReadinessTimeout</a></code> | <code>string</code> | How long to wait for readiness (if enabled). Defaults to `5m0s`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of stack. Conventionally matches the url of the instance (e.g. `<stack_slug>.grafana.net`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#name CloudStack#name}

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

Subdomain that the Grafana instance will be available at.

Setting slug to `<stack_slug>` will make the instance available at `https://<stack_slug>.grafana.net`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#slug CloudStack#slug}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#description CloudStack#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of labels to assign to the stack.

Label keys and values must match the following regexp: "^[a-zA-Z0-9/\\-.]+$" and stacks cannot have more than 10 labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#labels CloudStack#labels}

---

##### `regionSlug`<sup>Optional</sup> <a name="regionSlug" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.regionSlug"></a>

```typescript
public readonly regionSlug: string;
```

- *Type:* string

Region slug to assign to this stack.

Changing region will destroy the existing stack and create a new one in the desired region. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#region_slug CloudStack#region_slug}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Custom URL for the Grafana instance. Must have a CNAME setup to point to `.grafana.net` before creating the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#url CloudStack#url}

---

##### `waitForReadiness`<sup>Optional</sup> <a name="waitForReadiness" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.waitForReadiness"></a>

```typescript
public readonly waitForReadiness: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for readiness of the stack after creating it.

The check is a HEAD request to the stack URL (Grafana instance). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#wait_for_readiness CloudStack#wait_for_readiness}

---

##### `waitForReadinessTimeout`<sup>Optional</sup> <a name="waitForReadinessTimeout" id="rhizo-co-terraform-provider-grafana.cloudStack.CloudStackConfig.property.waitForReadinessTimeout"></a>

```typescript
public readonly waitForReadinessTimeout: string;
```

- *Type:* string

How long to wait for readiness (if enabled). Defaults to `5m0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_stack#wait_for_readiness_timeout CloudStack#wait_for_readiness_timeout}

---




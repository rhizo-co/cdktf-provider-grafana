# `grafana_connections_metrics_endpoint_scrape_job`

Refer to the Terraform Registory for docs: [`grafana_connections_metrics_endpoint_scrape_job`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job).

# `connectionsMetricsEndpointScrapeJob` Submodule <a name="`connectionsMetricsEndpointScrapeJob` Submodule" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectionsMetricsEndpointScrapeJob <a name="ConnectionsMetricsEndpointScrapeJob" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer"></a>

```typescript
import { connectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob(scope: Construct, id: string, config: ConnectionsMetricsEndpointScrapeJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig">ConnectionsMetricsEndpointScrapeJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig">ConnectionsMetricsEndpointScrapeJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBasicPassword">resetAuthenticationBasicPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBasicUsername">resetAuthenticationBasicUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBearerToken">resetAuthenticationBearerToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetScrapeIntervalSeconds">resetScrapeIntervalSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthenticationBasicPassword` <a name="resetAuthenticationBasicPassword" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBasicPassword"></a>

```typescript
public resetAuthenticationBasicPassword(): void
```

##### `resetAuthenticationBasicUsername` <a name="resetAuthenticationBasicUsername" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBasicUsername"></a>

```typescript
public resetAuthenticationBasicUsername(): void
```

##### `resetAuthenticationBearerToken` <a name="resetAuthenticationBearerToken" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetAuthenticationBearerToken"></a>

```typescript
public resetAuthenticationBearerToken(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetScrapeIntervalSeconds` <a name="resetScrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.resetScrapeIntervalSeconds"></a>

```typescript
public resetScrapeIntervalSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isConstruct"></a>

```typescript
import { connectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformElement"></a>

```typescript
import { connectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformResource"></a>

```typescript
import { connectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPasswordInput">authenticationBasicPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsernameInput">authenticationBasicUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBearerTokenInput">authenticationBearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSecondsInput">scrapeIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPassword">authenticationBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsername">authenticationBasicUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBearerToken">authenticationBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `authenticationBasicPasswordInput`<sup>Optional</sup> <a name="authenticationBasicPasswordInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPasswordInput"></a>

```typescript
public readonly authenticationBasicPasswordInput: string;
```

- *Type:* string

---

##### `authenticationBasicUsernameInput`<sup>Optional</sup> <a name="authenticationBasicUsernameInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsernameInput"></a>

```typescript
public readonly authenticationBasicUsernameInput: string;
```

- *Type:* string

---

##### `authenticationBearerTokenInput`<sup>Optional</sup> <a name="authenticationBearerTokenInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBearerTokenInput"></a>

```typescript
public readonly authenticationBearerTokenInput: string;
```

- *Type:* string

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scrapeIntervalSecondsInput`<sup>Optional</sup> <a name="scrapeIntervalSecondsInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSecondsInput"></a>

```typescript
public readonly scrapeIntervalSecondsInput: number;
```

- *Type:* number

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authenticationBasicPassword`<sup>Required</sup> <a name="authenticationBasicPassword" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPassword"></a>

```typescript
public readonly authenticationBasicPassword: string;
```

- *Type:* string

---

##### `authenticationBasicUsername`<sup>Required</sup> <a name="authenticationBasicUsername" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsername"></a>

```typescript
public readonly authenticationBasicUsername: string;
```

- *Type:* string

---

##### `authenticationBearerToken`<sup>Required</sup> <a name="authenticationBearerToken" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationBearerToken"></a>

```typescript
public readonly authenticationBearerToken: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectionsMetricsEndpointScrapeJobConfig <a name="ConnectionsMetricsEndpointScrapeJobConfig" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.Initializer"></a>

```typescript
import { connectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const connectionsMetricsEndpointScrapeJobConfig: connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Method to pass authentication credentials: basic or bearer. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.name">name</a></code> | <code>string</code> | The name of the metrics endpoint scrape job. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.stackId">stackId</a></code> | <code>string</code> | The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.url">url</a></code> | <code>string</code> | The url to scrape metrics from; a valid HTTPs URL is required. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBasicPassword">authenticationBasicPassword</a></code> | <code>string</code> | Password for basic authentication, use if scrape job is using basic authentication method. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBasicUsername">authenticationBasicUsername</a></code> | <code>string</code> | Username for basic authentication, use if scrape job is using basic authentication method. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBearerToken">authenticationBearerToken</a></code> | <code>string</code> | Bearer token used for authentication, use if scrape job is using bearer authentication method. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the metrics endpoint scrape job is enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | Frequency for scraping the metrics endpoint: 30, 60, or 120 seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Method to pass authentication credentials: basic or bearer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_method ConnectionsMetricsEndpointScrapeJob#authentication_method}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metrics endpoint scrape job. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#name ConnectionsMetricsEndpointScrapeJob#name}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#stack_id ConnectionsMetricsEndpointScrapeJob#stack_id}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The url to scrape metrics from; a valid HTTPs URL is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#url ConnectionsMetricsEndpointScrapeJob#url}

---

##### `authenticationBasicPassword`<sup>Optional</sup> <a name="authenticationBasicPassword" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBasicPassword"></a>

```typescript
public readonly authenticationBasicPassword: string;
```

- *Type:* string

Password for basic authentication, use if scrape job is using basic authentication method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_basic_password ConnectionsMetricsEndpointScrapeJob#authentication_basic_password}

---

##### `authenticationBasicUsername`<sup>Optional</sup> <a name="authenticationBasicUsername" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBasicUsername"></a>

```typescript
public readonly authenticationBasicUsername: string;
```

- *Type:* string

Username for basic authentication, use if scrape job is using basic authentication method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_basic_username ConnectionsMetricsEndpointScrapeJob#authentication_basic_username}

---

##### `authenticationBearerToken`<sup>Optional</sup> <a name="authenticationBearerToken" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.authenticationBearerToken"></a>

```typescript
public readonly authenticationBearerToken: string;
```

- *Type:* string

Bearer token used for authentication, use if scrape job is using bearer authentication method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#authentication_bearer_token ConnectionsMetricsEndpointScrapeJob#authentication_bearer_token}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the metrics endpoint scrape job is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#enabled ConnectionsMetricsEndpointScrapeJob#enabled}

---

##### `scrapeIntervalSeconds`<sup>Optional</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.connectionsMetricsEndpointScrapeJob.ConnectionsMetricsEndpointScrapeJobConfig.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

Frequency for scraping the metrics endpoint: 30, 60, or 120 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/connections_metrics_endpoint_scrape_job#scrape_interval_seconds ConnectionsMetricsEndpointScrapeJob#scrape_interval_seconds}

---




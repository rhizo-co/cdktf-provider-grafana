# `data_grafana_connections_metrics_endpoint_scrape_job`

Refer to the Terraform Registory for docs: [`data_grafana_connections_metrics_endpoint_scrape_job`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job).

# `dataGrafanaConnectionsMetricsEndpointScrapeJob` Submodule <a name="`dataGrafanaConnectionsMetricsEndpointScrapeJob` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaConnectionsMetricsEndpointScrapeJob <a name="DataGrafanaConnectionsMetricsEndpointScrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job grafana_connections_metrics_endpoint_scrape_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer"></a>

```typescript
import { dataGrafanaConnectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob(scope: Construct, id: string, config: DataGrafanaConnectionsMetricsEndpointScrapeJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig">DataGrafanaConnectionsMetricsEndpointScrapeJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig">DataGrafanaConnectionsMetricsEndpointScrapeJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isConstruct"></a>

```typescript
import { dataGrafanaConnectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformElement"></a>

```typescript
import { dataGrafanaConnectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformDataSource"></a>

```typescript
import { dataGrafanaConnectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPassword">authenticationBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsername">authenticationBasicUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBearerToken">authenticationBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authenticationBasicPassword`<sup>Required</sup> <a name="authenticationBasicPassword" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBasicPassword"></a>

```typescript
public readonly authenticationBasicPassword: string;
```

- *Type:* string

---

##### `authenticationBasicUsername`<sup>Required</sup> <a name="authenticationBasicUsername" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBasicUsername"></a>

```typescript
public readonly authenticationBasicUsername: string;
```

- *Type:* string

---

##### `authenticationBearerToken`<sup>Required</sup> <a name="authenticationBearerToken" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationBearerToken"></a>

```typescript
public readonly authenticationBearerToken: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaConnectionsMetricsEndpointScrapeJobConfig <a name="DataGrafanaConnectionsMetricsEndpointScrapeJobConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.Initializer"></a>

```typescript
import { dataGrafanaConnectionsMetricsEndpointScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaConnectionsMetricsEndpointScrapeJobConfig: dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.name">name</a></code> | <code>string</code> | The name of the Metrics Endpoint Scrape Job. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.stackId">stackId</a></code> | <code>string</code> | The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Metrics Endpoint Scrape Job. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job#name DataGrafanaConnectionsMetricsEndpointScrapeJob#name}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaConnectionsMetricsEndpointScrapeJob.DataGrafanaConnectionsMetricsEndpointScrapeJobConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/connections_metrics_endpoint_scrape_job#stack_id DataGrafanaConnectionsMetricsEndpointScrapeJob#stack_id}

---




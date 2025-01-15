# `data_grafana_cloud_provider_aws_cloudwatch_scrape_jobs`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_provider_aws_cloudwatch_scrape_jobs`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs).

# `dataGrafanaCloudProviderAwsCloudwatchScrapeJobs` Submodule <a name="`dataGrafanaCloudProviderAwsCloudwatchScrapeJobs` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobs <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobs" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs grafana_cloud_provider_aws_cloudwatch_scrape_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs(scope: Construct, id: string, config: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.putScrapeJob">putScrapeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.resetScrapeJob">resetScrapeJob</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putScrapeJob` <a name="putScrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.putScrapeJob"></a>

```typescript
public putScrapeJob(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.putScrapeJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]

---

##### `resetScrapeJob` <a name="resetScrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.resetScrapeJob"></a>

```typescript
public resetScrapeJob(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isConstruct"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.scrapeJob">scrapeJob</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.scrapeJobInput">scrapeJobInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scrapeJob`<sup>Required</sup> <a name="scrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.scrapeJob"></a>

```typescript
public readonly scrapeJob: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList</a>

---

##### `scrapeJobInput`<sup>Optional</sup> <a name="scrapeJobInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.scrapeJobInput"></a>

```typescript
public readonly scrapeJobInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.stackId">stackId</a></code> | <code>string</code> | The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.scrapeJob">scrapeJob</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]</code> | scrape_job block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#stack_id DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#stack_id}

---

##### `scrapeJob`<sup>Optional</sup> <a name="scrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig.property.scrapeJob"></a>

```typescript
public readonly scrapeJob: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]

scrape_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#scrape_job DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#scrape_job}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob.property.customNamespace">customNamespace</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]</code> | custom_namespace block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob.property.service">service</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]</code> | service block. |

---

##### `customNamespace`<sup>Optional</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob.property.customNamespace"></a>

```typescript
public readonly customNamespace: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]

custom_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#custom_namespace DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#custom_namespace}

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob.property.service"></a>

```typescript
public readonly service: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#service DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#service}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]</code> | metric block. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace.property.metric"></a>

```typescript
public readonly metric: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#metric}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric = { ... }
```


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]</code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | resource_discovery_tag_filter block. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService.property.metric"></a>

```typescript
public readonly metric: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#metric}

---

##### `resourceDiscoveryTagFilter`<sup>Optional</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]

resource_discovery_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#resource_discovery_tag_filter DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#resource_discovery_tag_filter}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric = { ... }
```


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter: dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.metric"></a>

```typescript
public readonly metric: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putCustomNamespace">putCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resetCustomNamespace">resetCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomNamespace` <a name="putCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putCustomNamespace"></a>

```typescript
public putCustomNamespace(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putCustomNamespace.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]

---

##### `putService` <a name="putService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putService"></a>

```typescript
public putService(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.putService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]

---

##### `resetCustomNamespace` <a name="resetCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resetCustomNamespace"></a>

```typescript
public resetCustomNamespace(): void
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.awsAccountResourceId">awsAccountResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.customNamespace">customNamespace</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.disabledReason">disabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.exportTags">exportTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.regionsSubsetOverrideUsed">regionsSubsetOverrideUsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.service">service</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.customNamespaceInput">customNamespaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.serviceInput">serviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountResourceId`<sup>Required</sup> <a name="awsAccountResourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.awsAccountResourceId"></a>

```typescript
public readonly awsAccountResourceId: string;
```

- *Type:* string

---

##### `customNamespace`<sup>Required</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.customNamespace"></a>

```typescript
public readonly customNamespace: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList</a>

---

##### `disabledReason`<sup>Required</sup> <a name="disabledReason" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.disabledReason"></a>

```typescript
public readonly disabledReason: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `exportTags`<sup>Required</sup> <a name="exportTags" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.exportTags"></a>

```typescript
public readonly exportTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `regionsSubsetOverrideUsed`<sup>Required</sup> <a name="regionsSubsetOverrideUsed" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.regionsSubsetOverrideUsed"></a>

```typescript
public readonly regionsSubsetOverrideUsed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.service"></a>

```typescript
public readonly service: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList</a>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `customNamespaceInput`<sup>Optional</sup> <a name="customNamespaceInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.customNamespaceInput"></a>

```typescript
public readonly customNamespaceInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace</a>[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter">putResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter">resetResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]

---

##### `putResourceDiscoveryTagFilter` <a name="putResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter"></a>

```typescript
public putResourceDiscoveryTagFilter(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetResourceDiscoveryTagFilter` <a name="resetResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter"></a>

```typescript
public resetResourceDiscoveryTagFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.tagsToAddToMetrics">tagsToAddToMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput">resourceDiscoveryTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.metric"></a>

```typescript
public readonly metric: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilter`<sup>Required</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList</a>

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `tagsToAddToMetrics`<sup>Required</sup> <a name="tagsToAddToMetrics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.tagsToAddToMetrics"></a>

```typescript
public readonly tagsToAddToMetrics: string[];
```

- *Type:* string[]

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric</a>[]

---

##### `resourceDiscoveryTagFilterInput`<sup>Optional</sup> <a name="resourceDiscoveryTagFilterInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput"></a>

```typescript
public readonly resourceDiscoveryTagFilterInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJobs } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJobs.DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter</a>

---




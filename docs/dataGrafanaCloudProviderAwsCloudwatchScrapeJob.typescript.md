# `data_grafana_cloud_provider_aws_cloudwatch_scrape_job`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_provider_aws_cloudwatch_scrape_job`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job).

# `dataGrafanaCloudProviderAwsCloudwatchScrapeJob` Submodule <a name="`dataGrafanaCloudProviderAwsCloudwatchScrapeJob` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJob <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJob" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob(scope: Construct, id: string, config: DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig">DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig">DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putCustomNamespace">putCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putService">putService</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetCustomNamespace">resetCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetService">resetService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomNamespace` <a name="putCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putCustomNamespace"></a>

```typescript
public putCustomNamespace(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putCustomNamespace.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---

##### `putService` <a name="putService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putService"></a>

```typescript
public putService(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.putService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]

---

##### `resetCustomNamespace` <a name="resetCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetCustomNamespace"></a>

```typescript
public resetCustomNamespace(): void
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.resetService"></a>

```typescript
public resetService(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isConstruct"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceId">awsAccountResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.customNamespace">customNamespace</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.disabledReason">disabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.exportTags">exportTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverrideUsed">regionsSubsetOverrideUsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.service">service</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.customNamespaceInput">customNamespaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.serviceInput">serviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsAccountResourceId`<sup>Required</sup> <a name="awsAccountResourceId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceId"></a>

```typescript
public readonly awsAccountResourceId: string;
```

- *Type:* string

---

##### `customNamespace`<sup>Required</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.customNamespace"></a>

```typescript
public readonly customNamespace: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList</a>

---

##### `disabledReason`<sup>Required</sup> <a name="disabledReason" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.disabledReason"></a>

```typescript
public readonly disabledReason: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `exportTags`<sup>Required</sup> <a name="exportTags" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.exportTags"></a>

```typescript
public readonly exportTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `regionsSubsetOverrideUsed`<sup>Required</sup> <a name="regionsSubsetOverrideUsed" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverrideUsed"></a>

```typescript
public readonly regionsSubsetOverrideUsed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.service"></a>

```typescript
public readonly service: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList</a>

---

##### `customNamespaceInput`<sup>Optional</sup> <a name="customNamespaceInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.customNamespaceInput"></a>

```typescript
public readonly customNamespaceInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.serviceInput"></a>

```typescript
public readonly serviceInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.name">name</a></code> | <code>string</code> | The name of the CloudWatch Scrape Job. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.stackId">stackId</a></code> | <code>string</code> | The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.customNamespace">customNamespace</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | custom_namespace block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.service">service</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | service block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudWatch Scrape Job. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#name DataGrafanaCloudProviderAwsCloudwatchScrapeJob#name}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#stack_id DataGrafanaCloudProviderAwsCloudwatchScrapeJob#stack_id}

---

##### `customNamespace`<sup>Optional</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.customNamespace"></a>

```typescript
public readonly customNamespace: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

custom_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#custom_namespace DataGrafanaCloudProviderAwsCloudwatchScrapeJob#custom_namespace}

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig.property.service"></a>

```typescript
public readonly service: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#service DataGrafanaCloudProviderAwsCloudwatchScrapeJob#service}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | metric block. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.metric"></a>

```typescript
public readonly metric: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJob#metric}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric = { ... }
```


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobService <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobService" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobService: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | resource_discovery_tag_filter block. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService.property.metric"></a>

```typescript
public readonly metric: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJob#metric}

---

##### `resourceDiscoveryTagFilter`<sup>Optional</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

resource_discovery_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#resource_discovery_tag_filter DataGrafanaCloudProviderAwsCloudwatchScrapeJob#resource_discovery_tag_filter}

---

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric = { ... }
```


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter: dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metric"></a>

```typescript
public readonly metric: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace">DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter">putResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter">resetResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---

##### `putResourceDiscoveryTagFilter` <a name="putResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter"></a>

```typescript
public putResourceDiscoveryTagFilter(value: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetResourceDiscoveryTagFilter` <a name="resetResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter"></a>

```typescript
public resetResourceDiscoveryTagFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetrics">tagsToAddToMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput">resourceDiscoveryTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metric"></a>

```typescript
public readonly metric: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilter`<sup>Required</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList</a>

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `tagsToAddToMetrics`<sup>Required</sup> <a name="tagsToAddToMetrics" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetrics"></a>

```typescript
public readonly tagsToAddToMetrics: string[];
```

- *Type:* string[]

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---

##### `resourceDiscoveryTagFilterInput`<sup>Optional</sup> <a name="resourceDiscoveryTagFilterInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput"></a>

```typescript
public readonly resourceDiscoveryTagFilterInput: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobService;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobService">DataGrafanaCloudProviderAwsCloudwatchScrapeJobService</a>

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get"></a>

```typescript
public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---


### DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference <a name="DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer"></a>

```typescript
import { dataGrafanaCloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudProviderAwsCloudwatchScrapeJob.DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>

---




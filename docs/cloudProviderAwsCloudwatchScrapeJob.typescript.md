# `grafana_cloud_provider_aws_cloudwatch_scrape_job`

Refer to the Terraform Registory for docs: [`grafana_cloud_provider_aws_cloudwatch_scrape_job`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job).

# `cloudProviderAwsCloudwatchScrapeJob` Submodule <a name="`cloudProviderAwsCloudwatchScrapeJob` Submodule" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderAwsCloudwatchScrapeJob <a name="CloudProviderAwsCloudwatchScrapeJob" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob(scope: Construct, id: string, config: CloudProviderAwsCloudwatchScrapeJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig">CloudProviderAwsCloudwatchScrapeJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig">CloudProviderAwsCloudwatchScrapeJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putCustomNamespace">putCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putService">putService</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetCustomNamespace">resetCustomNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetExportTags">resetExportTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetRegionsSubsetOverride">resetRegionsSubsetOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetService">resetService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCustomNamespace` <a name="putCustomNamespace" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putCustomNamespace"></a>

```typescript
public putCustomNamespace(value: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putCustomNamespace.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---

##### `putService` <a name="putService" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putService"></a>

```typescript
public putService(value: IResolvable | CloudProviderAwsCloudwatchScrapeJobService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.putService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]

---

##### `resetCustomNamespace` <a name="resetCustomNamespace" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetCustomNamespace"></a>

```typescript
public resetCustomNamespace(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExportTags` <a name="resetExportTags" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetExportTags"></a>

```typescript
public resetExportTags(): void
```

##### `resetRegionsSubsetOverride` <a name="resetRegionsSubsetOverride" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetRegionsSubsetOverride"></a>

```typescript
public resetRegionsSubsetOverride(): void
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.resetService"></a>

```typescript
public resetService(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isConstruct"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformElement"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformResource"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.customNamespace">customNamespace</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.disabledReason">disabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.service">service</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList">CloudProviderAwsCloudwatchScrapeJobServiceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceIdInput">awsAccountResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.customNamespaceInput">customNamespaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.exportTagsInput">exportTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverrideInput">regionsSubsetOverrideInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.serviceInput">serviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceId">awsAccountResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.exportTags">exportTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverride">regionsSubsetOverride</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customNamespace`<sup>Required</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.customNamespace"></a>

```typescript
public readonly customNamespace: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList</a>

---

##### `disabledReason`<sup>Required</sup> <a name="disabledReason" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.disabledReason"></a>

```typescript
public readonly disabledReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.service"></a>

```typescript
public readonly service: CloudProviderAwsCloudwatchScrapeJobServiceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList">CloudProviderAwsCloudwatchScrapeJobServiceList</a>

---

##### `awsAccountResourceIdInput`<sup>Optional</sup> <a name="awsAccountResourceIdInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceIdInput"></a>

```typescript
public readonly awsAccountResourceIdInput: string;
```

- *Type:* string

---

##### `customNamespaceInput`<sup>Optional</sup> <a name="customNamespaceInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.customNamespaceInput"></a>

```typescript
public readonly customNamespaceInput: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportTagsInput`<sup>Optional</sup> <a name="exportTagsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.exportTagsInput"></a>

```typescript
public readonly exportTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionsSubsetOverrideInput`<sup>Optional</sup> <a name="regionsSubsetOverrideInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverrideInput"></a>

```typescript
public readonly regionsSubsetOverrideInput: string[];
```

- *Type:* string[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.serviceInput"></a>

```typescript
public readonly serviceInput: IResolvable | CloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `awsAccountResourceId`<sup>Required</sup> <a name="awsAccountResourceId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.awsAccountResourceId"></a>

```typescript
public readonly awsAccountResourceId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportTags`<sup>Required</sup> <a name="exportTags" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.exportTags"></a>

```typescript
public readonly exportTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regionsSubsetOverride`<sup>Required</sup> <a name="regionsSubsetOverride" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.regionsSubsetOverride"></a>

```typescript
public readonly regionsSubsetOverride: string[];
```

- *Type:* string[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderAwsCloudwatchScrapeJobConfig <a name="CloudProviderAwsCloudwatchScrapeJobConfig" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobConfig: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.awsAccountResourceId">awsAccountResourceId</a></code> | <code>string</code> | The ID assigned by the Grafana Cloud Provider API to an AWS Account resource that should be associated with this CloudWatch Scrape Job. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.name">name</a></code> | <code>string</code> | The name of the CloudWatch Scrape Job. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.stackId">stackId</a></code> | <code>string</code> | The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.customNamespace">customNamespace</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | custom_namespace block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the CloudWatch Scrape Job is enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.exportTags">exportTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, AWS resource tags are exported as Prometheus labels to metrics formatted as `aws_<service_name>_info`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.regionsSubsetOverride">regionsSubsetOverride</a></code> | <code>string[]</code> | A subset of the regions that are configured in the associated AWS Account resource to apply to this scrape job. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.service">service</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | service block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountResourceId`<sup>Required</sup> <a name="awsAccountResourceId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.awsAccountResourceId"></a>

```typescript
public readonly awsAccountResourceId: string;
```

- *Type:* string

The ID assigned by the Grafana Cloud Provider API to an AWS Account resource that should be associated with this CloudWatch Scrape Job.

This can be provided by the `resource_id` attribute of the `grafana_cloud_provider_aws_account` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#aws_account_resource_id CloudProviderAwsCloudwatchScrapeJob#aws_account_resource_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudWatch Scrape Job. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#stack_id CloudProviderAwsCloudwatchScrapeJob#stack_id}

---

##### `customNamespace`<sup>Optional</sup> <a name="customNamespace" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.customNamespace"></a>

```typescript
public readonly customNamespace: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

custom_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#custom_namespace CloudProviderAwsCloudwatchScrapeJob#custom_namespace}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the CloudWatch Scrape Job is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#enabled CloudProviderAwsCloudwatchScrapeJob#enabled}

---

##### `exportTags`<sup>Optional</sup> <a name="exportTags" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.exportTags"></a>

```typescript
public readonly exportTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, AWS resource tags are exported as Prometheus labels to metrics formatted as `aws_<service_name>_info`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#export_tags CloudProviderAwsCloudwatchScrapeJob#export_tags}

---

##### `regionsSubsetOverride`<sup>Optional</sup> <a name="regionsSubsetOverride" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.regionsSubsetOverride"></a>

```typescript
public readonly regionsSubsetOverride: string[];
```

- *Type:* string[]

A subset of the regions that are configured in the associated AWS Account resource to apply to this scrape job.

If not set or empty, all of the Account resource's regions are scraped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#regions_subset_override CloudProviderAwsCloudwatchScrapeJob#regions_subset_override}

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobConfig.property.service"></a>

```typescript
public readonly service: IResolvable | CloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#service CloudProviderAwsCloudwatchScrapeJob#service}

---

### CloudProviderAwsCloudwatchScrapeJobCustomNamespace <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespace" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobCustomNamespace: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.name">name</a></code> | <code>string</code> | The name of the custom namespace to scrape. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | The interval in seconds to scrape the custom namespace. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the custom namespace to scrape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.metric"></a>

```typescript
public readonly metric: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#metric CloudProviderAwsCloudwatchScrapeJob#metric}

---

##### `scrapeIntervalSeconds`<sup>Optional</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

The interval in seconds to scrape the custom namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#scrape_interval_seconds CloudProviderAwsCloudwatchScrapeJob#scrape_interval_seconds}

---

### CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.property.name">name</a></code> | <code>string</code> | The name of the metric to scrape. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.property.statistics">statistics</a></code> | <code>string[]</code> | A set of statistics to scrape. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metric to scrape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

A set of statistics to scrape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#statistics CloudProviderAwsCloudwatchScrapeJob#statistics}

---

### CloudProviderAwsCloudwatchScrapeJobService <a name="CloudProviderAwsCloudwatchScrapeJobService" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobService: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.name">name</a></code> | <code>string</code> | The name of the service to scrape. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/aws/cloudwatch-metrics/services/ for supported services. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | resource_discovery_tag_filter block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | The interval in seconds to scrape the service. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/aws/cloudwatch-metrics/services/ for supported scrape intervals. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.tagsToAddToMetrics">tagsToAddToMetrics</a></code> | <code>string[]</code> | A set of tags to add to all metrics exported by this scrape job, for use in PromQL queries. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service to scrape. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/aws/cloudwatch-metrics/services/ for supported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.metric"></a>

```typescript
public readonly metric: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#metric CloudProviderAwsCloudwatchScrapeJob#metric}

---

##### `resourceDiscoveryTagFilter`<sup>Optional</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

resource_discovery_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#resource_discovery_tag_filter CloudProviderAwsCloudwatchScrapeJob#resource_discovery_tag_filter}

---

##### `scrapeIntervalSeconds`<sup>Optional</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

The interval in seconds to scrape the service. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/aws/cloudwatch-metrics/services/ for supported scrape intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#scrape_interval_seconds CloudProviderAwsCloudwatchScrapeJob#scrape_interval_seconds}

---

##### `tagsToAddToMetrics`<sup>Optional</sup> <a name="tagsToAddToMetrics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService.property.tagsToAddToMetrics"></a>

```typescript
public readonly tagsToAddToMetrics: string[];
```

- *Type:* string[]

A set of tags to add to all metrics exported by this scrape job, for use in PromQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#tags_to_add_to_metrics CloudProviderAwsCloudwatchScrapeJob#tags_to_add_to_metrics}

---

### CloudProviderAwsCloudwatchScrapeJobServiceMetric <a name="CloudProviderAwsCloudwatchScrapeJobServiceMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobServiceMetric: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric.property.name">name</a></code> | <code>string</code> | The name of the metric to scrape. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric.property.statistics">statistics</a></code> | <code>string[]</code> | A set of statistics to scrape. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the metric to scrape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

A set of statistics to scrape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#statistics CloudProviderAwsCloudwatchScrapeJob#statistics}

---

### CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter <a name="CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

const cloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter: cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.property.key">key</a></code> | <code>string</code> | The key of the tag filter. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.property.value">value</a></code> | <code>string</code> | The value of the tag filter. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#key CloudProviderAwsCloudwatchScrapeJob#key}

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#value CloudProviderAwsCloudwatchScrapeJob#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get"></a>

```typescript
public get(index: number): CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>[]

---


### CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get"></a>

```typescript
public get(index: number): CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---


### CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>

---


### CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference <a name="CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetScrapeIntervalSeconds">resetScrapeIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetScrapeIntervalSeconds` <a name="resetScrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.resetScrapeIntervalSeconds"></a>

```typescript
public resetScrapeIntervalSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSecondsInput">scrapeIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metric"></a>

```typescript
public readonly metric: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric">CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scrapeIntervalSecondsInput`<sup>Optional</sup> <a name="scrapeIntervalSecondsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSecondsInput"></a>

```typescript
public readonly scrapeIntervalSecondsInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobCustomNamespace;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobCustomNamespace">CloudProviderAwsCloudwatchScrapeJobCustomNamespace</a>

---


### CloudProviderAwsCloudwatchScrapeJobServiceList <a name="CloudProviderAwsCloudwatchScrapeJobServiceList" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.get"></a>

```typescript
public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobService[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>[]

---


### CloudProviderAwsCloudwatchScrapeJobServiceMetricList <a name="CloudProviderAwsCloudwatchScrapeJobServiceMetricList" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.get"></a>

```typescript
public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---


### CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference <a name="CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceMetric;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>

---


### CloudProviderAwsCloudwatchScrapeJobServiceOutputReference <a name="CloudProviderAwsCloudwatchScrapeJobServiceOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter">putResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter">resetResourceDiscoveryTagFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetScrapeIntervalSeconds">resetScrapeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetTagsToAddToMetrics">resetTagsToAddToMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---

##### `putResourceDiscoveryTagFilter` <a name="putResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter"></a>

```typescript
public putResourceDiscoveryTagFilter(value: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.putResourceDiscoveryTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetResourceDiscoveryTagFilter` <a name="resetResourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetResourceDiscoveryTagFilter"></a>

```typescript
public resetResourceDiscoveryTagFilter(): void
```

##### `resetScrapeIntervalSeconds` <a name="resetScrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetScrapeIntervalSeconds"></a>

```typescript
public resetScrapeIntervalSeconds(): void
```

##### `resetTagsToAddToMetrics` <a name="resetTagsToAddToMetrics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.resetTagsToAddToMetrics"></a>

```typescript
public resetTagsToAddToMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList">CloudProviderAwsCloudwatchScrapeJobServiceMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter">resourceDiscoveryTagFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput">resourceDiscoveryTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSecondsInput">scrapeIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetricsInput">tagsToAddToMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSeconds">scrapeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetrics">tagsToAddToMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metric"></a>

```typescript
public readonly metric: CloudProviderAwsCloudwatchScrapeJobServiceMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetricList">CloudProviderAwsCloudwatchScrapeJobServiceMetricList</a>

---

##### `resourceDiscoveryTagFilter`<sup>Required</sup> <a name="resourceDiscoveryTagFilter" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilter"></a>

```typescript
public readonly resourceDiscoveryTagFilter: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceMetric">CloudProviderAwsCloudwatchScrapeJobServiceMetric</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceDiscoveryTagFilterInput`<sup>Optional</sup> <a name="resourceDiscoveryTagFilterInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.resourceDiscoveryTagFilterInput"></a>

```typescript
public readonly resourceDiscoveryTagFilterInput: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---

##### `scrapeIntervalSecondsInput`<sup>Optional</sup> <a name="scrapeIntervalSecondsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSecondsInput"></a>

```typescript
public readonly scrapeIntervalSecondsInput: number;
```

- *Type:* number

---

##### `tagsToAddToMetricsInput`<sup>Optional</sup> <a name="tagsToAddToMetricsInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetricsInput"></a>

```typescript
public readonly tagsToAddToMetricsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scrapeIntervalSeconds`<sup>Required</sup> <a name="scrapeIntervalSeconds" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.scrapeIntervalSeconds"></a>

```typescript
public readonly scrapeIntervalSeconds: number;
```

- *Type:* number

---

##### `tagsToAddToMetrics`<sup>Required</sup> <a name="tagsToAddToMetrics" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.tagsToAddToMetrics"></a>

```typescript
public readonly tagsToAddToMetrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobService;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobService">CloudProviderAwsCloudwatchScrapeJobService</a>

---


### CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList <a name="CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get"></a>

```typescript
public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>[]

---


### CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference <a name="CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer"></a>

```typescript
import { cloudProviderAwsCloudwatchScrapeJob } from 'rhizo-co-terraform-provider-grafana'

new cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.cloudProviderAwsCloudwatchScrapeJob.CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter">CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter</a>

---




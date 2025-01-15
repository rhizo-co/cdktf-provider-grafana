# `data_grafana_cloud_stack`

Refer to the Terraform Registory for docs: [`data_grafana_cloud_stack`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack).

# `dataGrafanaCloudStack` Submodule <a name="`dataGrafanaCloudStack` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaCloudStack <a name="DataGrafanaCloudStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack grafana_cloud_stack}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer"></a>

```typescript
import { dataGrafanaCloudStack } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaCloudStack.DataGrafanaCloudStack(scope: Construct, id: string, config: DataGrafanaCloudStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig">DataGrafanaCloudStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig">DataGrafanaCloudStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isConstruct"></a>

```typescript
import { dataGrafanaCloudStack } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudStack.DataGrafanaCloudStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformElement"></a>

```typescript
import { dataGrafanaCloudStack } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformDataSource"></a>

```typescript
import { dataGrafanaCloudStack } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerName">alertmanagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerStatus">alertmanagerStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerUrl">alertmanagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerUserId">alertmanagerUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteName">graphiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteStatus">graphiteStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteUrl">graphiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteUserId">graphiteUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.influxUrl">influxUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsName">logsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsStatus">logsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsUrl">logsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsUserId">logsUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgId">orgId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgName">orgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgSlug">orgSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.otlpUrl">otlpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesName">profilesName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesStatus">profilesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesUrl">profilesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesUserId">profilesUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusName">prometheusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusRemoteEndpoint">prometheusRemoteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusRemoteWriteEndpoint">prometheusRemoteWriteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusStatus">prometheusStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusUrl">prometheusUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusUserId">prometheusUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.regionSlug">regionSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesName">tracesName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesStatus">tracesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesUrl">tracesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesUserId">tracesUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.slugInput">slugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.slug">slug</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alertmanagerName`<sup>Required</sup> <a name="alertmanagerName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerName"></a>

```typescript
public readonly alertmanagerName: string;
```

- *Type:* string

---

##### `alertmanagerStatus`<sup>Required</sup> <a name="alertmanagerStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerStatus"></a>

```typescript
public readonly alertmanagerStatus: string;
```

- *Type:* string

---

##### `alertmanagerUrl`<sup>Required</sup> <a name="alertmanagerUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerUrl"></a>

```typescript
public readonly alertmanagerUrl: string;
```

- *Type:* string

---

##### `alertmanagerUserId`<sup>Required</sup> <a name="alertmanagerUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.alertmanagerUserId"></a>

```typescript
public readonly alertmanagerUserId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `graphiteName`<sup>Required</sup> <a name="graphiteName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteName"></a>

```typescript
public readonly graphiteName: string;
```

- *Type:* string

---

##### `graphiteStatus`<sup>Required</sup> <a name="graphiteStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteStatus"></a>

```typescript
public readonly graphiteStatus: string;
```

- *Type:* string

---

##### `graphiteUrl`<sup>Required</sup> <a name="graphiteUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteUrl"></a>

```typescript
public readonly graphiteUrl: string;
```

- *Type:* string

---

##### `graphiteUserId`<sup>Required</sup> <a name="graphiteUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.graphiteUserId"></a>

```typescript
public readonly graphiteUserId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `influxUrl`<sup>Required</sup> <a name="influxUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.influxUrl"></a>

```typescript
public readonly influxUrl: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `logsName`<sup>Required</sup> <a name="logsName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsName"></a>

```typescript
public readonly logsName: string;
```

- *Type:* string

---

##### `logsStatus`<sup>Required</sup> <a name="logsStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsStatus"></a>

```typescript
public readonly logsStatus: string;
```

- *Type:* string

---

##### `logsUrl`<sup>Required</sup> <a name="logsUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsUrl"></a>

```typescript
public readonly logsUrl: string;
```

- *Type:* string

---

##### `logsUserId`<sup>Required</sup> <a name="logsUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.logsUserId"></a>

```typescript
public readonly logsUserId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgId"></a>

```typescript
public readonly orgId: number;
```

- *Type:* number

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

---

##### `orgSlug`<sup>Required</sup> <a name="orgSlug" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.orgSlug"></a>

```typescript
public readonly orgSlug: string;
```

- *Type:* string

---

##### `otlpUrl`<sup>Required</sup> <a name="otlpUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.otlpUrl"></a>

```typescript
public readonly otlpUrl: string;
```

- *Type:* string

---

##### `profilesName`<sup>Required</sup> <a name="profilesName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesName"></a>

```typescript
public readonly profilesName: string;
```

- *Type:* string

---

##### `profilesStatus`<sup>Required</sup> <a name="profilesStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesStatus"></a>

```typescript
public readonly profilesStatus: string;
```

- *Type:* string

---

##### `profilesUrl`<sup>Required</sup> <a name="profilesUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesUrl"></a>

```typescript
public readonly profilesUrl: string;
```

- *Type:* string

---

##### `profilesUserId`<sup>Required</sup> <a name="profilesUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.profilesUserId"></a>

```typescript
public readonly profilesUserId: number;
```

- *Type:* number

---

##### `prometheusName`<sup>Required</sup> <a name="prometheusName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusName"></a>

```typescript
public readonly prometheusName: string;
```

- *Type:* string

---

##### `prometheusRemoteEndpoint`<sup>Required</sup> <a name="prometheusRemoteEndpoint" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusRemoteEndpoint"></a>

```typescript
public readonly prometheusRemoteEndpoint: string;
```

- *Type:* string

---

##### `prometheusRemoteWriteEndpoint`<sup>Required</sup> <a name="prometheusRemoteWriteEndpoint" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusRemoteWriteEndpoint"></a>

```typescript
public readonly prometheusRemoteWriteEndpoint: string;
```

- *Type:* string

---

##### `prometheusStatus`<sup>Required</sup> <a name="prometheusStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusStatus"></a>

```typescript
public readonly prometheusStatus: string;
```

- *Type:* string

---

##### `prometheusUrl`<sup>Required</sup> <a name="prometheusUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusUrl"></a>

```typescript
public readonly prometheusUrl: string;
```

- *Type:* string

---

##### `prometheusUserId`<sup>Required</sup> <a name="prometheusUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.prometheusUserId"></a>

```typescript
public readonly prometheusUserId: number;
```

- *Type:* number

---

##### `regionSlug`<sup>Required</sup> <a name="regionSlug" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.regionSlug"></a>

```typescript
public readonly regionSlug: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tracesName`<sup>Required</sup> <a name="tracesName" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesName"></a>

```typescript
public readonly tracesName: string;
```

- *Type:* string

---

##### `tracesStatus`<sup>Required</sup> <a name="tracesStatus" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesStatus"></a>

```typescript
public readonly tracesStatus: string;
```

- *Type:* string

---

##### `tracesUrl`<sup>Required</sup> <a name="tracesUrl" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesUrl"></a>

```typescript
public readonly tracesUrl: string;
```

- *Type:* string

---

##### `tracesUserId`<sup>Required</sup> <a name="tracesUserId" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tracesUserId"></a>

```typescript
public readonly tracesUserId: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.slugInput"></a>

```typescript
public readonly slugInput: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaCloudStackConfig <a name="DataGrafanaCloudStackConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.Initializer"></a>

```typescript
import { dataGrafanaCloudStack } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaCloudStackConfig: dataGrafanaCloudStack.DataGrafanaCloudStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.slug">slug</a></code> | <code>string</code> | Subdomain that the Grafana instance will be available at (i.e. setting slug to “<stack_slug>” will make the instance available at “https://<stack_slug>.grafana.net". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-grafana.dataGrafanaCloudStack.DataGrafanaCloudStackConfig.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

Subdomain that the Grafana instance will be available at (i.e. setting slug to “<stack_slug>” will make the instance available at “https://<stack_slug>.grafana.net".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/cloud_stack#slug DataGrafanaCloudStack#slug}

---




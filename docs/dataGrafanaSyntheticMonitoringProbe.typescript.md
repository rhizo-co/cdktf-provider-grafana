# `data_grafana_synthetic_monitoring_probe`

Refer to the Terraform Registory for docs: [`data_grafana_synthetic_monitoring_probe`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probe).

# `dataGrafanaSyntheticMonitoringProbe` Submodule <a name="`dataGrafanaSyntheticMonitoringProbe` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaSyntheticMonitoringProbe <a name="DataGrafanaSyntheticMonitoringProbe" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probe grafana_synthetic_monitoring_probe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer"></a>

```typescript
import { dataGrafanaSyntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe(scope: Construct, id: string, config: DataGrafanaSyntheticMonitoringProbeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig">DataGrafanaSyntheticMonitoringProbeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig">DataGrafanaSyntheticMonitoringProbeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isConstruct"></a>

```typescript
import { dataGrafanaSyntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformElement"></a>

```typescript
import { dataGrafanaSyntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformDataSource"></a>

```typescript
import { dataGrafanaSyntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.disableScriptedChecks">disableScriptedChecks</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.tenantId">tenantId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `disableScriptedChecks`<sup>Required</sup> <a name="disableScriptedChecks" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.disableScriptedChecks"></a>

```typescript
public readonly disableScriptedChecks: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `public`<sup>Required</sup> <a name="public" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.tenantId"></a>

```typescript
public readonly tenantId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaSyntheticMonitoringProbeConfig <a name="DataGrafanaSyntheticMonitoringProbeConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.Initializer"></a>

```typescript
import { dataGrafanaSyntheticMonitoringProbe } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSyntheticMonitoringProbeConfig: dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.name">name</a></code> | <code>string</code> | Name of the probe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaSyntheticMonitoringProbe.DataGrafanaSyntheticMonitoringProbeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/synthetic_monitoring_probe#name DataGrafanaSyntheticMonitoringProbe#name}

---




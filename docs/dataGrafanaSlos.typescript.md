# `data_grafana_slos`

Refer to the Terraform Registory for docs: [`data_grafana_slos`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/slos).

# `dataGrafanaSlos` Submodule <a name="`dataGrafanaSlos` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaSlos <a name="DataGrafanaSlos" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/slos grafana_slos}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlos(scope: Construct, id: string, config?: DataGrafanaSlosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig">DataGrafanaSlosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig">DataGrafanaSlosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isConstruct"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSlos.DataGrafanaSlos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformElement"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSlos.DataGrafanaSlos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformDataSource"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaSlos.DataGrafanaSlos.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.slos">slos</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList">DataGrafanaSlosSlosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `slos`<sup>Required</sup> <a name="slos" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.slos"></a>

```typescript
public readonly slos: DataGrafanaSlosSlosList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList">DataGrafanaSlosSlosList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaSlosConfig <a name="DataGrafanaSlosConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosConfig: dataGrafanaSlos.DataGrafanaSlosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/slos#id DataGrafanaSlos#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/slos#id DataGrafanaSlos#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGrafanaSlosSlos <a name="DataGrafanaSlosSlos" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlos.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlos: dataGrafanaSlos.DataGrafanaSlosSlos = { ... }
```


### DataGrafanaSlosSlosAlerting <a name="DataGrafanaSlosSlosAlerting" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlerting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlerting.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlerting: dataGrafanaSlos.DataGrafanaSlosSlosAlerting = { ... }
```


### DataGrafanaSlosSlosAlertingAdvancedOptions <a name="DataGrafanaSlosSlosAlertingAdvancedOptions" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptions.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingAdvancedOptions: dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptions = { ... }
```


### DataGrafanaSlosSlosAlertingAnnotation <a name="DataGrafanaSlosSlosAlertingAnnotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotation.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingAnnotation: dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotation = { ... }
```


### DataGrafanaSlosSlosAlertingFastburn <a name="DataGrafanaSlosSlosAlertingFastburn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburn"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburn.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingFastburn: dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburn = { ... }
```


### DataGrafanaSlosSlosAlertingFastburnAnnotation <a name="DataGrafanaSlosSlosAlertingFastburnAnnotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotation.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingFastburnAnnotation: dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotation = { ... }
```


### DataGrafanaSlosSlosAlertingFastburnLabel <a name="DataGrafanaSlosSlosAlertingFastburnLabel" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabel.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingFastburnLabel: dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabel = { ... }
```


### DataGrafanaSlosSlosAlertingLabel <a name="DataGrafanaSlosSlosAlertingLabel" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabel.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingLabel: dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabel = { ... }
```


### DataGrafanaSlosSlosAlertingSlowburn <a name="DataGrafanaSlosSlosAlertingSlowburn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburn"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburn.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingSlowburn: dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburn = { ... }
```


### DataGrafanaSlosSlosAlertingSlowburnAnnotation <a name="DataGrafanaSlosSlosAlertingSlowburnAnnotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotation.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingSlowburnAnnotation: dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotation = { ... }
```


### DataGrafanaSlosSlosAlertingSlowburnLabel <a name="DataGrafanaSlosSlosAlertingSlowburnLabel" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabel.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosAlertingSlowburnLabel: dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabel = { ... }
```


### DataGrafanaSlosSlosDestinationDatasource <a name="DataGrafanaSlosSlosDestinationDatasource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasource.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosDestinationDatasource: dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasource = { ... }
```


### DataGrafanaSlosSlosLabel <a name="DataGrafanaSlosSlosLabel" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabel.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosLabel: dataGrafanaSlos.DataGrafanaSlosSlosLabel = { ... }
```


### DataGrafanaSlosSlosObjectives <a name="DataGrafanaSlosSlosObjectives" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectives.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosObjectives: dataGrafanaSlos.DataGrafanaSlosSlosObjectives = { ... }
```


### DataGrafanaSlosSlosQuery <a name="DataGrafanaSlosSlosQuery" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQuery.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosQuery: dataGrafanaSlos.DataGrafanaSlosSlosQuery = { ... }
```


### DataGrafanaSlosSlosQueryFreeform <a name="DataGrafanaSlosSlosQueryFreeform" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeform"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeform.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosQueryFreeform: dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeform = { ... }
```


### DataGrafanaSlosSlosQueryRatio <a name="DataGrafanaSlosSlosQueryRatio" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatio"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatio.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaSlosSlosQueryRatio: dataGrafanaSlos.DataGrafanaSlosSlosQueryRatio = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGrafanaSlosSlosAlertingAdvancedOptionsList <a name="DataGrafanaSlosSlosAlertingAdvancedOptionsList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference <a name="DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.minFailures">minFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptions">DataGrafanaSlosSlosAlertingAdvancedOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minFailures`<sup>Required</sup> <a name="minFailures" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.minFailures"></a>

```typescript
public readonly minFailures: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingAdvancedOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptions">DataGrafanaSlosSlosAlertingAdvancedOptions</a>

---


### DataGrafanaSlosSlosAlertingAnnotationList <a name="DataGrafanaSlosSlosAlertingAnnotationList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingAnnotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingAnnotationOutputReference <a name="DataGrafanaSlosSlosAlertingAnnotationOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotation">DataGrafanaSlosSlosAlertingAnnotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingAnnotation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotation">DataGrafanaSlosSlosAlertingAnnotation</a>

---


### DataGrafanaSlosSlosAlertingFastburnAnnotationList <a name="DataGrafanaSlosSlosAlertingFastburnAnnotationList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference <a name="DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotation">DataGrafanaSlosSlosAlertingFastburnAnnotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingFastburnAnnotation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotation">DataGrafanaSlosSlosAlertingFastburnAnnotation</a>

---


### DataGrafanaSlosSlosAlertingFastburnLabelList <a name="DataGrafanaSlosSlosAlertingFastburnLabelList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingFastburnLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingFastburnLabelOutputReference <a name="DataGrafanaSlosSlosAlertingFastburnLabelOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabel">DataGrafanaSlosSlosAlertingFastburnLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingFastburnLabel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabel">DataGrafanaSlosSlosAlertingFastburnLabel</a>

---


### DataGrafanaSlosSlosAlertingFastburnList <a name="DataGrafanaSlosSlosAlertingFastburnList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingFastburnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingFastburnOutputReference <a name="DataGrafanaSlosSlosAlertingFastburnOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.annotation">annotation</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList">DataGrafanaSlosSlosAlertingFastburnAnnotationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList">DataGrafanaSlosSlosAlertingFastburnLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburn">DataGrafanaSlosSlosAlertingFastburn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.annotation"></a>

```typescript
public readonly annotation: DataGrafanaSlosSlosAlertingFastburnAnnotationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnAnnotationList">DataGrafanaSlosSlosAlertingFastburnAnnotationList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.label"></a>

```typescript
public readonly label: DataGrafanaSlosSlosAlertingFastburnLabelList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnLabelList">DataGrafanaSlosSlosAlertingFastburnLabelList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingFastburn;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburn">DataGrafanaSlosSlosAlertingFastburn</a>

---


### DataGrafanaSlosSlosAlertingLabelList <a name="DataGrafanaSlosSlosAlertingLabelList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingLabelOutputReference <a name="DataGrafanaSlosSlosAlertingLabelOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabel">DataGrafanaSlosSlosAlertingLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingLabel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabel">DataGrafanaSlosSlosAlertingLabel</a>

---


### DataGrafanaSlosSlosAlertingList <a name="DataGrafanaSlosSlosAlertingList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingOutputReference <a name="DataGrafanaSlosSlosAlertingOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.advancedOptions">advancedOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList">DataGrafanaSlosSlosAlertingAdvancedOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.annotation">annotation</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList">DataGrafanaSlosSlosAlertingAnnotationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.fastburn">fastburn</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList">DataGrafanaSlosSlosAlertingFastburnList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList">DataGrafanaSlosSlosAlertingLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.slowburn">slowburn</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList">DataGrafanaSlosSlosAlertingSlowburnList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlerting">DataGrafanaSlosSlosAlerting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: DataGrafanaSlosSlosAlertingAdvancedOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAdvancedOptionsList">DataGrafanaSlosSlosAlertingAdvancedOptionsList</a>

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.annotation"></a>

```typescript
public readonly annotation: DataGrafanaSlosSlosAlertingAnnotationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingAnnotationList">DataGrafanaSlosSlosAlertingAnnotationList</a>

---

##### `fastburn`<sup>Required</sup> <a name="fastburn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.fastburn"></a>

```typescript
public readonly fastburn: DataGrafanaSlosSlosAlertingFastburnList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingFastburnList">DataGrafanaSlosSlosAlertingFastburnList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.label"></a>

```typescript
public readonly label: DataGrafanaSlosSlosAlertingLabelList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingLabelList">DataGrafanaSlosSlosAlertingLabelList</a>

---

##### `slowburn`<sup>Required</sup> <a name="slowburn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.slowburn"></a>

```typescript
public readonly slowburn: DataGrafanaSlosSlosAlertingSlowburnList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList">DataGrafanaSlosSlosAlertingSlowburnList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlerting;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlerting">DataGrafanaSlosSlosAlerting</a>

---


### DataGrafanaSlosSlosAlertingSlowburnAnnotationList <a name="DataGrafanaSlosSlosAlertingSlowburnAnnotationList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference <a name="DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotation">DataGrafanaSlosSlosAlertingSlowburnAnnotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingSlowburnAnnotation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotation">DataGrafanaSlosSlosAlertingSlowburnAnnotation</a>

---


### DataGrafanaSlosSlosAlertingSlowburnLabelList <a name="DataGrafanaSlosSlosAlertingSlowburnLabelList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference <a name="DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabel">DataGrafanaSlosSlosAlertingSlowburnLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingSlowburnLabel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabel">DataGrafanaSlosSlosAlertingSlowburnLabel</a>

---


### DataGrafanaSlosSlosAlertingSlowburnList <a name="DataGrafanaSlosSlosAlertingSlowburnList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosAlertingSlowburnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosAlertingSlowburnOutputReference <a name="DataGrafanaSlosSlosAlertingSlowburnOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.annotation">annotation</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList">DataGrafanaSlosSlosAlertingSlowburnAnnotationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList">DataGrafanaSlosSlosAlertingSlowburnLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburn">DataGrafanaSlosSlosAlertingSlowburn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.annotation"></a>

```typescript
public readonly annotation: DataGrafanaSlosSlosAlertingSlowburnAnnotationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnAnnotationList">DataGrafanaSlosSlosAlertingSlowburnAnnotationList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.label"></a>

```typescript
public readonly label: DataGrafanaSlosSlosAlertingSlowburnLabelList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnLabelList">DataGrafanaSlosSlosAlertingSlowburnLabelList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosAlertingSlowburn;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingSlowburn">DataGrafanaSlosSlosAlertingSlowburn</a>

---


### DataGrafanaSlosSlosDestinationDatasourceList <a name="DataGrafanaSlosSlosDestinationDatasourceList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosDestinationDatasourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosDestinationDatasourceOutputReference <a name="DataGrafanaSlosSlosDestinationDatasourceOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasource">DataGrafanaSlosSlosDestinationDatasource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosDestinationDatasource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasource">DataGrafanaSlosSlosDestinationDatasource</a>

---


### DataGrafanaSlosSlosLabelList <a name="DataGrafanaSlosSlosLabelList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosLabelOutputReference <a name="DataGrafanaSlosSlosLabelOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabel">DataGrafanaSlosSlosLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosLabel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabel">DataGrafanaSlosSlosLabel</a>

---


### DataGrafanaSlosSlosList <a name="DataGrafanaSlosSlosList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosObjectivesList <a name="DataGrafanaSlosSlosObjectivesList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosObjectivesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosObjectivesOutputReference <a name="DataGrafanaSlosSlosObjectivesOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.window">window</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectives">DataGrafanaSlosSlosObjectives</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `window`<sup>Required</sup> <a name="window" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.window"></a>

```typescript
public readonly window: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosObjectives;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectives">DataGrafanaSlosSlosObjectives</a>

---


### DataGrafanaSlosSlosOutputReference <a name="DataGrafanaSlosSlosOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.alerting">alerting</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList">DataGrafanaSlosSlosAlertingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.destinationDatasource">destinationDatasource</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList">DataGrafanaSlosSlosDestinationDatasourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.folderUid">folderUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList">DataGrafanaSlosSlosLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.objectives">objectives</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList">DataGrafanaSlosSlosObjectivesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.query">query</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList">DataGrafanaSlosSlosQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.searchExpression">searchExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlos">DataGrafanaSlosSlos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.alerting"></a>

```typescript
public readonly alerting: DataGrafanaSlosSlosAlertingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosAlertingList">DataGrafanaSlosSlosAlertingList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationDatasource`<sup>Required</sup> <a name="destinationDatasource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.destinationDatasource"></a>

```typescript
public readonly destinationDatasource: DataGrafanaSlosSlosDestinationDatasourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosDestinationDatasourceList">DataGrafanaSlosSlosDestinationDatasourceList</a>

---

##### `folderUid`<sup>Required</sup> <a name="folderUid" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.folderUid"></a>

```typescript
public readonly folderUid: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.label"></a>

```typescript
public readonly label: DataGrafanaSlosSlosLabelList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosLabelList">DataGrafanaSlosSlosLabelList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectives`<sup>Required</sup> <a name="objectives" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.objectives"></a>

```typescript
public readonly objectives: DataGrafanaSlosSlosObjectivesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosObjectivesList">DataGrafanaSlosSlosObjectivesList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.query"></a>

```typescript
public readonly query: DataGrafanaSlosSlosQueryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList">DataGrafanaSlosSlosQueryList</a>

---

##### `searchExpression`<sup>Required</sup> <a name="searchExpression" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.searchExpression"></a>

```typescript
public readonly searchExpression: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlos">DataGrafanaSlosSlos</a>

---


### DataGrafanaSlosSlosQueryFreeformList <a name="DataGrafanaSlosSlosQueryFreeformList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosQueryFreeformOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosQueryFreeformOutputReference <a name="DataGrafanaSlosSlosQueryFreeformOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeform">DataGrafanaSlosSlosQueryFreeform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosQueryFreeform;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeform">DataGrafanaSlosSlosQueryFreeform</a>

---


### DataGrafanaSlosSlosQueryList <a name="DataGrafanaSlosSlosQueryList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosQueryOutputReference <a name="DataGrafanaSlosSlosQueryOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.freeform">freeform</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList">DataGrafanaSlosSlosQueryFreeformList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.ratio">ratio</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList">DataGrafanaSlosSlosQueryRatioList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQuery">DataGrafanaSlosSlosQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freeform`<sup>Required</sup> <a name="freeform" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.freeform"></a>

```typescript
public readonly freeform: DataGrafanaSlosSlosQueryFreeformList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryFreeformList">DataGrafanaSlosSlosQueryFreeformList</a>

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.ratio"></a>

```typescript
public readonly ratio: DataGrafanaSlosSlosQueryRatioList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList">DataGrafanaSlosSlosQueryRatioList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosQuery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQuery">DataGrafanaSlosSlosQuery</a>

---


### DataGrafanaSlosSlosQueryRatioList <a name="DataGrafanaSlosSlosQueryRatioList" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.get"></a>

```typescript
public get(index: number): DataGrafanaSlosSlosQueryRatioOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGrafanaSlosSlosQueryRatioOutputReference <a name="DataGrafanaSlosSlosQueryRatioOutputReference" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer"></a>

```typescript
import { dataGrafanaSlos } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.groupByLabels">groupByLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.successMetric">successMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.totalMetric">totalMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatio">DataGrafanaSlosSlosQueryRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupByLabels`<sup>Required</sup> <a name="groupByLabels" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.groupByLabels"></a>

```typescript
public readonly groupByLabels: string[];
```

- *Type:* string[]

---

##### `successMetric`<sup>Required</sup> <a name="successMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.successMetric"></a>

```typescript
public readonly successMetric: string;
```

- *Type:* string

---

##### `totalMetric`<sup>Required</sup> <a name="totalMetric" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.totalMetric"></a>

```typescript
public readonly totalMetric: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGrafanaSlosSlosQueryRatio;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaSlos.DataGrafanaSlosSlosQueryRatio">DataGrafanaSlosSlosQueryRatio</a>

---




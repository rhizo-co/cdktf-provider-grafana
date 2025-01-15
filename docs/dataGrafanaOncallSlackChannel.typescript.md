# `data_grafana_oncall_slack_channel`

Refer to the Terraform Registory for docs: [`data_grafana_oncall_slack_channel`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_slack_channel).

# `dataGrafanaOncallSlackChannel` Submodule <a name="`dataGrafanaOncallSlackChannel` Submodule" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGrafanaOncallSlackChannel <a name="DataGrafanaOncallSlackChannel" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_slack_channel grafana_oncall_slack_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer"></a>

```typescript
import { dataGrafanaOncallSlackChannel } from 'rhizo-co-terraform-provider-grafana'

new dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel(scope: Construct, id: string, config: DataGrafanaOncallSlackChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig">DataGrafanaOncallSlackChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig">DataGrafanaOncallSlackChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isConstruct"></a>

```typescript
import { dataGrafanaOncallSlackChannel } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformElement"></a>

```typescript
import { dataGrafanaOncallSlackChannel } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformDataSource"></a>

```typescript
import { dataGrafanaOncallSlackChannel } from 'rhizo-co-terraform-provider-grafana'

dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.slackId">slackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `slackId`<sup>Required</sup> <a name="slackId" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.slackId"></a>

```typescript
public readonly slackId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGrafanaOncallSlackChannelConfig <a name="DataGrafanaOncallSlackChannelConfig" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.Initializer"></a>

```typescript
import { dataGrafanaOncallSlackChannel } from 'rhizo-co-terraform-provider-grafana'

const dataGrafanaOncallSlackChannelConfig: dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.name">name</a></code> | <code>string</code> | The Slack channel name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_slack_channel#id DataGrafanaOncallSlackChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_slack_channel#name DataGrafanaOncallSlackChannel#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.dataGrafanaOncallSlackChannel.DataGrafanaOncallSlackChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/data-sources/oncall_slack_channel#id DataGrafanaOncallSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




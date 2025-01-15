# `grafana_mute_timing`

Refer to the Terraform Registory for docs: [`grafana_mute_timing`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing).

# `muteTiming` Submodule <a name="`muteTiming` Submodule" id="rhizo-co-terraform-provider-grafana.muteTiming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MuteTiming <a name="MuteTiming" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing grafana_mute_timing}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

new muteTiming.MuteTiming(scope: Construct, id: string, config: MuteTimingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig">MuteTimingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig">MuteTimingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.putIntervals">putIntervals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetDisableProvenance">resetDisableProvenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetIntervals">resetIntervals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetOrgId">resetOrgId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIntervals` <a name="putIntervals" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.putIntervals"></a>

```typescript
public putIntervals(value: IResolvable | MuteTimingIntervals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.putIntervals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]

---

##### `resetDisableProvenance` <a name="resetDisableProvenance" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetDisableProvenance"></a>

```typescript
public resetDisableProvenance(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntervals` <a name="resetIntervals" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetIntervals"></a>

```typescript
public resetIntervals(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isConstruct"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

muteTiming.MuteTiming.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformElement"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

muteTiming.MuteTiming.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformResource"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

muteTiming.MuteTiming.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.intervals">intervals</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList">MuteTimingIntervalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.disableProvenanceInput">disableProvenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.intervalsInput">intervalsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `intervals`<sup>Required</sup> <a name="intervals" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.intervals"></a>

```typescript
public readonly intervals: MuteTimingIntervalsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList">MuteTimingIntervalsList</a>

---

##### `disableProvenanceInput`<sup>Optional</sup> <a name="disableProvenanceInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.disableProvenanceInput"></a>

```typescript
public readonly disableProvenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalsInput`<sup>Optional</sup> <a name="intervalsInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.intervalsInput"></a>

```typescript
public readonly intervalsInput: IResolvable | MuteTimingIntervals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `disableProvenance`<sup>Required</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTiming.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MuteTimingConfig <a name="MuteTimingConfig" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

const muteTimingConfig: muteTiming.MuteTimingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.name">name</a></code> | <code>string</code> | The name of the mute timing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow modifying the mute timing from other sources than Terraform or the Grafana API. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#id MuteTiming#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.intervals">intervals</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]</code> | intervals block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the mute timing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#name MuteTiming#name}

---

##### `disableProvenance`<sup>Optional</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow modifying the mute timing from other sources than Terraform or the Grafana API. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#disable_provenance MuteTiming#disable_provenance}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#id MuteTiming#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `intervals`<sup>Optional</sup> <a name="intervals" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.intervals"></a>

```typescript
public readonly intervals: IResolvable | MuteTimingIntervals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]

intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#intervals MuteTiming#intervals}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#org_id MuteTiming#org_id}

---

### MuteTimingIntervals <a name="MuteTimingIntervals" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

const muteTimingIntervals: muteTiming.MuteTimingIntervals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.daysOfMonth">daysOfMonth</a></code> | <code>string[]</code> | An inclusive range of days, 1-31, within a month, e.g. "1" or "14:16". Negative values can be used to represent days counting from the end of a month, e.g. "-1". |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.location">location</a></code> | <code>string</code> | Provides the time zone for the time interval. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.months">months</a></code> | <code>string[]</code> | An inclusive range of months, either numerical or full calendar month, e.g. "1:3", "december", or "may:august". |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.times">times</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]</code> | times block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.weekdays">weekdays</a></code> | <code>string[]</code> | An inclusive range of weekdays, e.g. "monday" or "tuesday:thursday". |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.years">years</a></code> | <code>string[]</code> | A positive inclusive range of years, e.g. "2030" or "2025:2026". |

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string[];
```

- *Type:* string[]

An inclusive range of days, 1-31, within a month, e.g. "1" or "14:16". Negative values can be used to represent days counting from the end of a month, e.g. "-1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#days_of_month MuteTiming#days_of_month}

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Provides the time zone for the time interval.

Must be a location in the IANA time zone database, e.g "America/New_York"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#location MuteTiming#location}

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

An inclusive range of months, either numerical or full calendar month, e.g. "1:3", "december", or "may:august".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#months MuteTiming#months}

---

##### `times`<sup>Optional</sup> <a name="times" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.times"></a>

```typescript
public readonly times: IResolvable | MuteTimingIntervalsTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]

times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#times MuteTiming#times}

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

An inclusive range of weekdays, e.g. "monday" or "tuesday:thursday".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#weekdays MuteTiming#weekdays}

---

##### `years`<sup>Optional</sup> <a name="years" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals.property.years"></a>

```typescript
public readonly years: string[];
```

- *Type:* string[]

A positive inclusive range of years, e.g. "2030" or "2025:2026".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#years MuteTiming#years}

---

### MuteTimingIntervalsTimes <a name="MuteTimingIntervalsTimes" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

const muteTimingIntervalsTimes: muteTiming.MuteTimingIntervalsTimes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes.property.end">end</a></code> | <code>string</code> | The time, in hh:mm format, of when the interval should end exclusively. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes.property.start">start</a></code> | <code>string</code> | The time, in hh:mm format, of when the interval should begin inclusively. |

---

##### `end`<sup>Required</sup> <a name="end" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

The time, in hh:mm format, of when the interval should end exclusively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#end MuteTiming#end}

---

##### `start`<sup>Required</sup> <a name="start" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

The time, in hh:mm format, of when the interval should begin inclusively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/mute_timing#start MuteTiming#start}

---

## Classes <a name="Classes" id="Classes"></a>

### MuteTimingIntervalsList <a name="MuteTimingIntervalsList" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

new muteTiming.MuteTimingIntervalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.get"></a>

```typescript
public get(index: number): MuteTimingIntervalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MuteTimingIntervals[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>[]

---


### MuteTimingIntervalsOutputReference <a name="MuteTimingIntervalsOutputReference" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

new muteTiming.MuteTimingIntervalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.putTimes">putTimes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetTimes">resetTimes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetYears">resetYears</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimes` <a name="putTimes" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.putTimes"></a>

```typescript
public putTimes(value: IResolvable | MuteTimingIntervalsTimes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.putTimes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]

---

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetTimes` <a name="resetTimes" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetTimes"></a>

```typescript
public resetTimes(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetYears` <a name="resetYears" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.resetYears"></a>

```typescript
public resetYears(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.times">times</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList">MuteTimingIntervalsTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.timesInput">timesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.yearsInput">yearsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.years">years</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `times`<sup>Required</sup> <a name="times" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.times"></a>

```typescript
public readonly times: MuteTimingIntervalsTimesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList">MuteTimingIntervalsTimesList</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `timesInput`<sup>Optional</sup> <a name="timesInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.timesInput"></a>

```typescript
public readonly timesInput: IResolvable | MuteTimingIntervalsTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `yearsInput`<sup>Optional</sup> <a name="yearsInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.yearsInput"></a>

```typescript
public readonly yearsInput: string[];
```

- *Type:* string[]

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `years`<sup>Required</sup> <a name="years" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.years"></a>

```typescript
public readonly years: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MuteTimingIntervals;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervals">MuteTimingIntervals</a>

---


### MuteTimingIntervalsTimesList <a name="MuteTimingIntervalsTimesList" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

new muteTiming.MuteTimingIntervalsTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.get"></a>

```typescript
public get(index: number): MuteTimingIntervalsTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MuteTimingIntervalsTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>[]

---


### MuteTimingIntervalsTimesOutputReference <a name="MuteTimingIntervalsTimesOutputReference" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer"></a>

```typescript
import { muteTiming } from 'rhizo-co-terraform-provider-grafana'

new muteTiming.MuteTimingIntervalsTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MuteTimingIntervalsTimes;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.muteTiming.MuteTimingIntervalsTimes">MuteTimingIntervalsTimes</a>

---




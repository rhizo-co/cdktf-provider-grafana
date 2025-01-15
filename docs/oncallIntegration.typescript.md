# `grafana_oncall_integration`

Refer to the Terraform Registory for docs: [`grafana_oncall_integration`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration).

# `oncallIntegration` Submodule <a name="`oncallIntegration` Submodule" id="rhizo-co-terraform-provider-grafana.oncallIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallIntegration <a name="OncallIntegration" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration grafana_oncall_integration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegration(scope: Construct, id: string, config: OncallIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig">OncallIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig">OncallIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putDefaultRoute">putDefaultRoute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putTemplates">putTemplates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetTemplates">resetTemplates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDefaultRoute` <a name="putDefaultRoute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putDefaultRoute"></a>

```typescript
public putDefaultRoute(value: OncallIntegrationDefaultRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putDefaultRoute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a>

---

##### `putTemplates` <a name="putTemplates" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putTemplates"></a>

```typescript
public putTemplates(value: OncallIntegrationTemplates): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.putTemplates.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTeamId` <a name="resetTeamId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTemplates` <a name="resetTemplates" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.resetTemplates"></a>

```typescript
public resetTemplates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isConstruct"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

oncallIntegration.OncallIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformElement"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

oncallIntegration.OncallIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformResource"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

oncallIntegration.OncallIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.defaultRoute">defaultRoute</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference">OncallIntegrationDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.templates">templates</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference">OncallIntegrationTemplatesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.defaultRouteInput">defaultRouteInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.templatesInput">templatesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultRoute`<sup>Required</sup> <a name="defaultRoute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.defaultRoute"></a>

```typescript
public readonly defaultRoute: OncallIntegrationDefaultRouteOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference">OncallIntegrationDefaultRouteOutputReference</a>

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `templates`<sup>Required</sup> <a name="templates" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.templates"></a>

```typescript
public readonly templates: OncallIntegrationTemplatesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference">OncallIntegrationTemplatesOutputReference</a>

---

##### `defaultRouteInput`<sup>Optional</sup> <a name="defaultRouteInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.defaultRouteInput"></a>

```typescript
public readonly defaultRouteInput: OncallIntegrationDefaultRoute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.templatesInput"></a>

```typescript
public readonly templatesInput: OncallIntegrationTemplates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallIntegrationConfig <a name="OncallIntegrationConfig" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationConfig: oncallIntegration.OncallIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.defaultRoute">defaultRoute</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a></code> | default_route block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.name">name</a></code> | <code>string</code> | The name of the service integration. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.type">type</a></code> | <code>string</code> | The type of integration. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#id OncallIntegration#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the OnCall team. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.templates">templates</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a></code> | templates block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultRoute`<sup>Required</sup> <a name="defaultRoute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.defaultRoute"></a>

```typescript
public readonly defaultRoute: OncallIntegrationDefaultRoute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a>

default_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#default_route OncallIntegration#default_route}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#name OncallIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of integration.

Can be grafana, grafana_alerting, webhook, alertmanager, kapacitor, fabric, newrelic, datadog, pagerduty, pingdom, elastalert, amazon_sns, curler, sentry, formatted_webhook, heartbeat, demo, manual, stackdriver, uptimerobot, sentry_platform, zabbix, prtg, slack_channel, inbound_email, direct_paging, jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#type OncallIntegration#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#id OncallIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the OnCall team.

To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team with OnCall). You can then get the ID using the `grafana_oncall_team` datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#team_id OncallIntegration#team_id}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationConfig.property.templates"></a>

```typescript
public readonly templates: OncallIntegrationTemplates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a>

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#templates OncallIntegration#templates}

---

### OncallIntegrationDefaultRoute <a name="OncallIntegrationDefaultRoute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationDefaultRoute: oncallIntegration.OncallIntegrationDefaultRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | The ID of the escalation chain. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.msteams">msteams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a></code> | msteams block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a></code> | slack block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a></code> | telegram block. |

---

##### `escalationChainId`<sup>Optional</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

The ID of the escalation chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#escalation_chain_id OncallIntegration#escalation_chain_id}

---

##### `msteams`<sup>Optional</sup> <a name="msteams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.msteams"></a>

```typescript
public readonly msteams: OncallIntegrationDefaultRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a>

msteams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#msteams OncallIntegration#msteams}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.slack"></a>

```typescript
public readonly slack: OncallIntegrationDefaultRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#slack OncallIntegration#slack}

---

##### `telegram`<sup>Optional</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute.property.telegram"></a>

```typescript
public readonly telegram: OncallIntegrationDefaultRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a>

telegram block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#telegram OncallIntegration#telegram}

---

### OncallIntegrationDefaultRouteMsteams <a name="OncallIntegrationDefaultRouteMsteams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationDefaultRouteMsteams: oncallIntegration.OncallIntegrationDefaultRouteMsteams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in MS teams. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams.property.id">id</a></code> | <code>string</code> | MS teams channel id. Alerts will be directed to this channel in Microsoft teams. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in MS teams. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#enabled OncallIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

MS teams channel id. Alerts will be directed to this channel in Microsoft teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#id OncallIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OncallIntegrationDefaultRouteSlack <a name="OncallIntegrationDefaultRouteSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationDefaultRouteSlack: oncallIntegration.OncallIntegrationDefaultRouteSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack.property.channelId">channelId</a></code> | <code>string</code> | Slack channel id. Alerts will be directed to this channel in Slack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in Slack. Defaults to `true`. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Slack channel id. Alerts will be directed to this channel in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#channel_id OncallIntegration#channel_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in Slack. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#enabled OncallIntegration#enabled}

---

### OncallIntegrationDefaultRouteTelegram <a name="OncallIntegrationDefaultRouteTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationDefaultRouteTelegram: oncallIntegration.OncallIntegrationDefaultRouteTelegram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in Telegram. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram.property.id">id</a></code> | <code>string</code> | Telegram channel id. Alerts will be directed to this channel in Telegram. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in Telegram. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#enabled OncallIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Telegram channel id. Alerts will be directed to this channel in Telegram.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#id OncallIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OncallIntegrationTemplates <a name="OncallIntegrationTemplates" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplates: oncallIntegration.OncallIntegrationTemplates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.acknowledgeSignal">acknowledgeSignal</a></code> | <code>string</code> | Template for sending a signal to acknowledge the Incident. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.email">email</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a></code> | email block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.groupingKey">groupingKey</a></code> | <code>string</code> | Template for the key by which alerts are grouped. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.mobileApp">mobileApp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a></code> | mobile_app block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.phoneCall">phoneCall</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a></code> | phone_call block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.resolveSignal">resolveSignal</a></code> | <code>string</code> | Template for sending a signal to resolve the Incident. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a></code> | slack block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.sms">sms</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a></code> | sms block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.sourceLink">sourceLink</a></code> | <code>string</code> | Template for a source link. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a></code> | telegram block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.web">web</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a></code> | web block. |

---

##### `acknowledgeSignal`<sup>Optional</sup> <a name="acknowledgeSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.acknowledgeSignal"></a>

```typescript
public readonly acknowledgeSignal: string;
```

- *Type:* string

Template for sending a signal to acknowledge the Incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#acknowledge_signal OncallIntegration#acknowledge_signal}

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.email"></a>

```typescript
public readonly email: OncallIntegrationTemplatesEmail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#email OncallIntegration#email}

---

##### `groupingKey`<sup>Optional</sup> <a name="groupingKey" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.groupingKey"></a>

```typescript
public readonly groupingKey: string;
```

- *Type:* string

Template for the key by which alerts are grouped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#grouping_key OncallIntegration#grouping_key}

---

##### `microsoftTeams`<sup>Optional</sup> <a name="microsoftTeams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.microsoftTeams"></a>

```typescript
public readonly microsoftTeams: OncallIntegrationTemplatesMicrosoftTeams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#microsoft_teams OncallIntegration#microsoft_teams}

---

##### `mobileApp`<sup>Optional</sup> <a name="mobileApp" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.mobileApp"></a>

```typescript
public readonly mobileApp: OncallIntegrationTemplatesMobileApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a>

mobile_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#mobile_app OncallIntegration#mobile_app}

---

##### `phoneCall`<sup>Optional</sup> <a name="phoneCall" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.phoneCall"></a>

```typescript
public readonly phoneCall: OncallIntegrationTemplatesPhoneCall;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a>

phone_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#phone_call OncallIntegration#phone_call}

---

##### `resolveSignal`<sup>Optional</sup> <a name="resolveSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.resolveSignal"></a>

```typescript
public readonly resolveSignal: string;
```

- *Type:* string

Template for sending a signal to resolve the Incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#resolve_signal OncallIntegration#resolve_signal}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.slack"></a>

```typescript
public readonly slack: OncallIntegrationTemplatesSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#slack OncallIntegration#slack}

---

##### `sms`<sup>Optional</sup> <a name="sms" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.sms"></a>

```typescript
public readonly sms: OncallIntegrationTemplatesSms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a>

sms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#sms OncallIntegration#sms}

---

##### `sourceLink`<sup>Optional</sup> <a name="sourceLink" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.sourceLink"></a>

```typescript
public readonly sourceLink: string;
```

- *Type:* string

Template for a source link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#source_link OncallIntegration#source_link}

---

##### `telegram`<sup>Optional</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.telegram"></a>

```typescript
public readonly telegram: OncallIntegrationTemplatesTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a>

telegram block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#telegram OncallIntegration#telegram}

---

##### `web`<sup>Optional</sup> <a name="web" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates.property.web"></a>

```typescript
public readonly web: OncallIntegrationTemplatesWeb;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#web OncallIntegration#web}

---

### OncallIntegrationTemplatesEmail <a name="OncallIntegrationTemplatesEmail" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesEmail: oncallIntegration.OncallIntegrationTemplatesEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesMicrosoftTeams <a name="OncallIntegrationTemplatesMicrosoftTeams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesMicrosoftTeams: oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.imageUrl">imageUrl</a></code> | <code>string</code> | Template for Alert image url. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Template for Alert image url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#image_url OncallIntegration#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesMobileApp <a name="OncallIntegrationTemplatesMobileApp" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesMobileApp: oncallIntegration.OncallIntegrationTemplatesMobileApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesPhoneCall <a name="OncallIntegrationTemplatesPhoneCall" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesPhoneCall: oncallIntegration.OncallIntegrationTemplatesPhoneCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesSlack <a name="OncallIntegrationTemplatesSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesSlack: oncallIntegration.OncallIntegrationTemplatesSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.imageUrl">imageUrl</a></code> | <code>string</code> | Template for Alert image url. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Template for Alert image url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#image_url OncallIntegration#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesSms <a name="OncallIntegrationTemplatesSms" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesSms: oncallIntegration.OncallIntegrationTemplatesSms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesTelegram <a name="OncallIntegrationTemplatesTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesTelegram: oncallIntegration.OncallIntegrationTemplatesTelegram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.imageUrl">imageUrl</a></code> | <code>string</code> | Template for Alert image url. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Template for Alert image url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#image_url OncallIntegration#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

### OncallIntegrationTemplatesWeb <a name="OncallIntegrationTemplatesWeb" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

const oncallIntegrationTemplatesWeb: oncallIntegration.OncallIntegrationTemplatesWeb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.imageUrl">imageUrl</a></code> | <code>string</code> | Template for Alert image url. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.message">message</a></code> | <code>string</code> | Template for Alert message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.title">title</a></code> | <code>string</code> | Template for Alert title. |

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Template for Alert image url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#image_url OncallIntegration#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Template for Alert message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#message OncallIntegration#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Template for Alert title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_integration#title OncallIntegration#title}

---

## Classes <a name="Classes" id="Classes"></a>

### OncallIntegrationDefaultRouteMsteamsOutputReference <a name="OncallIntegrationDefaultRouteMsteamsOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationDefaultRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a>

---


### OncallIntegrationDefaultRouteOutputReference <a name="OncallIntegrationDefaultRouteOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationDefaultRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putMsteams">putMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putTelegram">putTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetEscalationChainId">resetEscalationChainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetMsteams">resetMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetTelegram">resetTelegram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMsteams` <a name="putMsteams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putMsteams"></a>

```typescript
public putMsteams(value: OncallIntegrationDefaultRouteMsteams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putMsteams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a>

---

##### `putSlack` <a name="putSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putSlack"></a>

```typescript
public putSlack(value: OncallIntegrationDefaultRouteSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a>

---

##### `putTelegram` <a name="putTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putTelegram"></a>

```typescript
public putTelegram(value: OncallIntegrationDefaultRouteTelegram): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.putTelegram.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a>

---

##### `resetEscalationChainId` <a name="resetEscalationChainId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetEscalationChainId"></a>

```typescript
public resetEscalationChainId(): void
```

##### `resetMsteams` <a name="resetMsteams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetMsteams"></a>

```typescript
public resetMsteams(): void
```

##### `resetSlack` <a name="resetSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTelegram` <a name="resetTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.resetTelegram"></a>

```typescript
public resetTelegram(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.msteams">msteams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference">OncallIntegrationDefaultRouteMsteamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference">OncallIntegrationDefaultRouteSlackOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference">OncallIntegrationDefaultRouteTelegramOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.escalationChainIdInput">escalationChainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.msteamsInput">msteamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.slackInput">slackInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.telegramInput">telegramInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `msteams`<sup>Required</sup> <a name="msteams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.msteams"></a>

```typescript
public readonly msteams: OncallIntegrationDefaultRouteMsteamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteamsOutputReference">OncallIntegrationDefaultRouteMsteamsOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.slack"></a>

```typescript
public readonly slack: OncallIntegrationDefaultRouteSlackOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference">OncallIntegrationDefaultRouteSlackOutputReference</a>

---

##### `telegram`<sup>Required</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.telegram"></a>

```typescript
public readonly telegram: OncallIntegrationDefaultRouteTelegramOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference">OncallIntegrationDefaultRouteTelegramOutputReference</a>

---

##### `escalationChainIdInput`<sup>Optional</sup> <a name="escalationChainIdInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.escalationChainIdInput"></a>

```typescript
public readonly escalationChainIdInput: string;
```

- *Type:* string

---

##### `msteamsInput`<sup>Optional</sup> <a name="msteamsInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.msteamsInput"></a>

```typescript
public readonly msteamsInput: OncallIntegrationDefaultRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteMsteams">OncallIntegrationDefaultRouteMsteams</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: OncallIntegrationDefaultRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a>

---

##### `telegramInput`<sup>Optional</sup> <a name="telegramInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.telegramInput"></a>

```typescript
public readonly telegramInput: OncallIntegrationDefaultRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a>

---

##### `escalationChainId`<sup>Required</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationDefaultRoute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRoute">OncallIntegrationDefaultRoute</a>

---


### OncallIntegrationDefaultRouteSlackOutputReference <a name="OncallIntegrationDefaultRouteSlackOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationDefaultRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteSlack">OncallIntegrationDefaultRouteSlack</a>

---


### OncallIntegrationDefaultRouteTelegramOutputReference <a name="OncallIntegrationDefaultRouteTelegramOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationDefaultRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationDefaultRouteTelegram">OncallIntegrationDefaultRouteTelegram</a>

---


### OncallIntegrationTemplatesEmailOutputReference <a name="OncallIntegrationTemplatesEmailOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesEmail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a>

---


### OncallIntegrationTemplatesMicrosoftTeamsOutputReference <a name="OncallIntegrationTemplatesMicrosoftTeamsOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUrl` <a name="resetImageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesMicrosoftTeams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a>

---


### OncallIntegrationTemplatesMobileAppOutputReference <a name="OncallIntegrationTemplatesMobileAppOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesMobileApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a>

---


### OncallIntegrationTemplatesOutputReference <a name="OncallIntegrationTemplatesOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMicrosoftTeams">putMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMobileApp">putMobileApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putPhoneCall">putPhoneCall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSms">putSms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putTelegram">putTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetAcknowledgeSignal">resetAcknowledgeSignal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetGroupingKey">resetGroupingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetMicrosoftTeams">resetMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetMobileApp">resetMobileApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetPhoneCall">resetPhoneCall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetResolveSignal">resetResolveSignal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSms">resetSms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSourceLink">resetSourceLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetTelegram">resetTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmail` <a name="putEmail" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putEmail"></a>

```typescript
public putEmail(value: OncallIntegrationTemplatesEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a>

---

##### `putMicrosoftTeams` <a name="putMicrosoftTeams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMicrosoftTeams"></a>

```typescript
public putMicrosoftTeams(value: OncallIntegrationTemplatesMicrosoftTeams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMicrosoftTeams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a>

---

##### `putMobileApp` <a name="putMobileApp" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMobileApp"></a>

```typescript
public putMobileApp(value: OncallIntegrationTemplatesMobileApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putMobileApp.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a>

---

##### `putPhoneCall` <a name="putPhoneCall" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putPhoneCall"></a>

```typescript
public putPhoneCall(value: OncallIntegrationTemplatesPhoneCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putPhoneCall.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a>

---

##### `putSlack` <a name="putSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSlack"></a>

```typescript
public putSlack(value: OncallIntegrationTemplatesSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a>

---

##### `putSms` <a name="putSms" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSms"></a>

```typescript
public putSms(value: OncallIntegrationTemplatesSms): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putSms.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a>

---

##### `putTelegram` <a name="putTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putTelegram"></a>

```typescript
public putTelegram(value: OncallIntegrationTemplatesTelegram): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putTelegram.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a>

---

##### `putWeb` <a name="putWeb" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putWeb"></a>

```typescript
public putWeb(value: OncallIntegrationTemplatesWeb): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a>

---

##### `resetAcknowledgeSignal` <a name="resetAcknowledgeSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetAcknowledgeSignal"></a>

```typescript
public resetAcknowledgeSignal(): void
```

##### `resetEmail` <a name="resetEmail" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetGroupingKey` <a name="resetGroupingKey" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetGroupingKey"></a>

```typescript
public resetGroupingKey(): void
```

##### `resetMicrosoftTeams` <a name="resetMicrosoftTeams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetMicrosoftTeams"></a>

```typescript
public resetMicrosoftTeams(): void
```

##### `resetMobileApp` <a name="resetMobileApp" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetMobileApp"></a>

```typescript
public resetMobileApp(): void
```

##### `resetPhoneCall` <a name="resetPhoneCall" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetPhoneCall"></a>

```typescript
public resetPhoneCall(): void
```

##### `resetResolveSignal` <a name="resetResolveSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetResolveSignal"></a>

```typescript
public resetResolveSignal(): void
```

##### `resetSlack` <a name="resetSlack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetSms` <a name="resetSms" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSms"></a>

```typescript
public resetSms(): void
```

##### `resetSourceLink` <a name="resetSourceLink" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetSourceLink"></a>

```typescript
public resetSourceLink(): void
```

##### `resetTelegram` <a name="resetTelegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetTelegram"></a>

```typescript
public resetTelegram(): void
```

##### `resetWeb` <a name="resetWeb" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.resetWeb"></a>

```typescript
public resetWeb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.email">email</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference">OncallIntegrationTemplatesEmailOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference">OncallIntegrationTemplatesMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.mobileApp">mobileApp</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference">OncallIntegrationTemplatesMobileAppOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.phoneCall">phoneCall</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference">OncallIntegrationTemplatesPhoneCallOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference">OncallIntegrationTemplatesSlackOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sms">sms</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference">OncallIntegrationTemplatesSmsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference">OncallIntegrationTemplatesTelegramOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.web">web</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference">OncallIntegrationTemplatesWebOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.acknowledgeSignalInput">acknowledgeSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.groupingKeyInput">groupingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.microsoftTeamsInput">microsoftTeamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.mobileAppInput">mobileAppInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.phoneCallInput">phoneCallInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.resolveSignalInput">resolveSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.slackInput">slackInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.smsInput">smsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sourceLinkInput">sourceLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.telegramInput">telegramInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.webInput">webInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.acknowledgeSignal">acknowledgeSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.groupingKey">groupingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.resolveSignal">resolveSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sourceLink">sourceLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.email"></a>

```typescript
public readonly email: OncallIntegrationTemplatesEmailOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmailOutputReference">OncallIntegrationTemplatesEmailOutputReference</a>

---

##### `microsoftTeams`<sup>Required</sup> <a name="microsoftTeams" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.microsoftTeams"></a>

```typescript
public readonly microsoftTeams: OncallIntegrationTemplatesMicrosoftTeamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeamsOutputReference">OncallIntegrationTemplatesMicrosoftTeamsOutputReference</a>

---

##### `mobileApp`<sup>Required</sup> <a name="mobileApp" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.mobileApp"></a>

```typescript
public readonly mobileApp: OncallIntegrationTemplatesMobileAppOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileAppOutputReference">OncallIntegrationTemplatesMobileAppOutputReference</a>

---

##### `phoneCall`<sup>Required</sup> <a name="phoneCall" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.phoneCall"></a>

```typescript
public readonly phoneCall: OncallIntegrationTemplatesPhoneCallOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference">OncallIntegrationTemplatesPhoneCallOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.slack"></a>

```typescript
public readonly slack: OncallIntegrationTemplatesSlackOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference">OncallIntegrationTemplatesSlackOutputReference</a>

---

##### `sms`<sup>Required</sup> <a name="sms" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sms"></a>

```typescript
public readonly sms: OncallIntegrationTemplatesSmsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference">OncallIntegrationTemplatesSmsOutputReference</a>

---

##### `telegram`<sup>Required</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.telegram"></a>

```typescript
public readonly telegram: OncallIntegrationTemplatesTelegramOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference">OncallIntegrationTemplatesTelegramOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.web"></a>

```typescript
public readonly web: OncallIntegrationTemplatesWebOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference">OncallIntegrationTemplatesWebOutputReference</a>

---

##### `acknowledgeSignalInput`<sup>Optional</sup> <a name="acknowledgeSignalInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.acknowledgeSignalInput"></a>

```typescript
public readonly acknowledgeSignalInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: OncallIntegrationTemplatesEmail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesEmail">OncallIntegrationTemplatesEmail</a>

---

##### `groupingKeyInput`<sup>Optional</sup> <a name="groupingKeyInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.groupingKeyInput"></a>

```typescript
public readonly groupingKeyInput: string;
```

- *Type:* string

---

##### `microsoftTeamsInput`<sup>Optional</sup> <a name="microsoftTeamsInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.microsoftTeamsInput"></a>

```typescript
public readonly microsoftTeamsInput: OncallIntegrationTemplatesMicrosoftTeams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMicrosoftTeams">OncallIntegrationTemplatesMicrosoftTeams</a>

---

##### `mobileAppInput`<sup>Optional</sup> <a name="mobileAppInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.mobileAppInput"></a>

```typescript
public readonly mobileAppInput: OncallIntegrationTemplatesMobileApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesMobileApp">OncallIntegrationTemplatesMobileApp</a>

---

##### `phoneCallInput`<sup>Optional</sup> <a name="phoneCallInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.phoneCallInput"></a>

```typescript
public readonly phoneCallInput: OncallIntegrationTemplatesPhoneCall;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a>

---

##### `resolveSignalInput`<sup>Optional</sup> <a name="resolveSignalInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.resolveSignalInput"></a>

```typescript
public readonly resolveSignalInput: string;
```

- *Type:* string

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: OncallIntegrationTemplatesSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a>

---

##### `smsInput`<sup>Optional</sup> <a name="smsInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.smsInput"></a>

```typescript
public readonly smsInput: OncallIntegrationTemplatesSms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a>

---

##### `sourceLinkInput`<sup>Optional</sup> <a name="sourceLinkInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sourceLinkInput"></a>

```typescript
public readonly sourceLinkInput: string;
```

- *Type:* string

---

##### `telegramInput`<sup>Optional</sup> <a name="telegramInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.telegramInput"></a>

```typescript
public readonly telegramInput: OncallIntegrationTemplatesTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.webInput"></a>

```typescript
public readonly webInput: OncallIntegrationTemplatesWeb;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a>

---

##### `acknowledgeSignal`<sup>Required</sup> <a name="acknowledgeSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.acknowledgeSignal"></a>

```typescript
public readonly acknowledgeSignal: string;
```

- *Type:* string

---

##### `groupingKey`<sup>Required</sup> <a name="groupingKey" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.groupingKey"></a>

```typescript
public readonly groupingKey: string;
```

- *Type:* string

---

##### `resolveSignal`<sup>Required</sup> <a name="resolveSignal" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.resolveSignal"></a>

```typescript
public readonly resolveSignal: string;
```

- *Type:* string

---

##### `sourceLink`<sup>Required</sup> <a name="sourceLink" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.sourceLink"></a>

```typescript
public readonly sourceLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplates">OncallIntegrationTemplates</a>

---


### OncallIntegrationTemplatesPhoneCallOutputReference <a name="OncallIntegrationTemplatesPhoneCallOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesPhoneCall;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesPhoneCall">OncallIntegrationTemplatesPhoneCall</a>

---


### OncallIntegrationTemplatesSlackOutputReference <a name="OncallIntegrationTemplatesSlackOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUrl` <a name="resetImageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSlack">OncallIntegrationTemplatesSlack</a>

---


### OncallIntegrationTemplatesSmsOutputReference <a name="OncallIntegrationTemplatesSmsOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesSmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesSms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesSms">OncallIntegrationTemplatesSms</a>

---


### OncallIntegrationTemplatesTelegramOutputReference <a name="OncallIntegrationTemplatesTelegramOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUrl` <a name="resetImageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesTelegram">OncallIntegrationTemplatesTelegram</a>

---


### OncallIntegrationTemplatesWebOutputReference <a name="OncallIntegrationTemplatesWebOutputReference" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.Initializer"></a>

```typescript
import { oncallIntegration } from 'rhizo-co-terraform-provider-grafana'

new oncallIntegration.OncallIntegrationTemplatesWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUrl` <a name="resetImageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallIntegrationTemplatesWeb;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallIntegration.OncallIntegrationTemplatesWeb">OncallIntegrationTemplatesWeb</a>

---




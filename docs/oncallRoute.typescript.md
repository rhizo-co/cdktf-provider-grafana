# `grafana_oncall_route`

Refer to the Terraform Registory for docs: [`grafana_oncall_route`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route).

# `oncallRoute` Submodule <a name="`oncallRoute` Submodule" id="rhizo-co-terraform-provider-grafana.oncallRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OncallRoute <a name="OncallRoute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route grafana_oncall_route}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

new oncallRoute.OncallRoute(scope: Construct, id: string, config: OncallRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig">OncallRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig">OncallRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putMsteams">putMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putTelegram">putTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetMsteams">resetMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetRoutingType">resetRoutingType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetTelegram">resetTelegram</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMsteams` <a name="putMsteams" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putMsteams"></a>

```typescript
public putMsteams(value: OncallRouteMsteams): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putMsteams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a>

---

##### `putSlack` <a name="putSlack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putSlack"></a>

```typescript
public putSlack(value: OncallRouteSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putSlack.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a>

---

##### `putTelegram` <a name="putTelegram" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putTelegram"></a>

```typescript
public putTelegram(value: OncallRouteTelegram): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.putTelegram.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMsteams` <a name="resetMsteams" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetMsteams"></a>

```typescript
public resetMsteams(): void
```

##### `resetRoutingType` <a name="resetRoutingType" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetRoutingType"></a>

```typescript
public resetRoutingType(): void
```

##### `resetSlack` <a name="resetSlack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTelegram` <a name="resetTelegram" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.resetTelegram"></a>

```typescript
public resetTelegram(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isConstruct"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

oncallRoute.OncallRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformElement"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

oncallRoute.OncallRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformResource"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

oncallRoute.OncallRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.msteams">msteams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference">OncallRouteMsteamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference">OncallRouteSlackOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference">OncallRouteTelegramOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.escalationChainIdInput">escalationChainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.msteamsInput">msteamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingRegexInput">routingRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingTypeInput">routingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.slackInput">slackInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.telegramInput">telegramInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingRegex">routingRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingType">routingType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `msteams`<sup>Required</sup> <a name="msteams" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.msteams"></a>

```typescript
public readonly msteams: OncallRouteMsteamsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference">OncallRouteMsteamsOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.slack"></a>

```typescript
public readonly slack: OncallRouteSlackOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference">OncallRouteSlackOutputReference</a>

---

##### `telegram`<sup>Required</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.telegram"></a>

```typescript
public readonly telegram: OncallRouteTelegramOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference">OncallRouteTelegramOutputReference</a>

---

##### `escalationChainIdInput`<sup>Optional</sup> <a name="escalationChainIdInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.escalationChainIdInput"></a>

```typescript
public readonly escalationChainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `msteamsInput`<sup>Optional</sup> <a name="msteamsInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.msteamsInput"></a>

```typescript
public readonly msteamsInput: OncallRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a>

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `routingRegexInput`<sup>Optional</sup> <a name="routingRegexInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingRegexInput"></a>

```typescript
public readonly routingRegexInput: string;
```

- *Type:* string

---

##### `routingTypeInput`<sup>Optional</sup> <a name="routingTypeInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingTypeInput"></a>

```typescript
public readonly routingTypeInput: string;
```

- *Type:* string

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.slackInput"></a>

```typescript
public readonly slackInput: OncallRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a>

---

##### `telegramInput`<sup>Optional</sup> <a name="telegramInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.telegramInput"></a>

```typescript
public readonly telegramInput: OncallRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a>

---

##### `escalationChainId`<sup>Required</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `routingRegex`<sup>Required</sup> <a name="routingRegex" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingRegex"></a>

```typescript
public readonly routingRegex: string;
```

- *Type:* string

---

##### `routingType`<sup>Required</sup> <a name="routingType" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.routingType"></a>

```typescript
public readonly routingType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OncallRouteConfig <a name="OncallRouteConfig" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

const oncallRouteConfig: oncallRoute.OncallRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.escalationChainId">escalationChainId</a></code> | <code>string</code> | The ID of the escalation chain. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.integrationId">integrationId</a></code> | <code>string</code> | The ID of the integration. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.position">position</a></code> | <code>number</code> | The position of the route (starts from 0). |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.routingRegex">routingRegex</a></code> | <code>string</code> | Python Regex query. Route is chosen for an alert if there is a match inside the alert payload. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#id OncallRoute#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.msteams">msteams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a></code> | msteams block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.routingType">routingType</a></code> | <code>string</code> | The type of route. Can be jinja2, regex Defaults to `regex`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a></code> | slack block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a></code> | telegram block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `escalationChainId`<sup>Required</sup> <a name="escalationChainId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.escalationChainId"></a>

```typescript
public readonly escalationChainId: string;
```

- *Type:* string

The ID of the escalation chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#escalation_chain_id OncallRoute#escalation_chain_id}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The ID of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#integration_id OncallRoute#integration_id}

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

The position of the route (starts from 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#position OncallRoute#position}

---

##### `routingRegex`<sup>Required</sup> <a name="routingRegex" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.routingRegex"></a>

```typescript
public readonly routingRegex: string;
```

- *Type:* string

Python Regex query. Route is chosen for an alert if there is a match inside the alert payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#routing_regex OncallRoute#routing_regex}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#id OncallRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `msteams`<sup>Optional</sup> <a name="msteams" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.msteams"></a>

```typescript
public readonly msteams: OncallRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a>

msteams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#msteams OncallRoute#msteams}

---

##### `routingType`<sup>Optional</sup> <a name="routingType" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.routingType"></a>

```typescript
public readonly routingType: string;
```

- *Type:* string

The type of route. Can be jinja2, regex Defaults to `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#routing_type OncallRoute#routing_type}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.slack"></a>

```typescript
public readonly slack: OncallRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#slack OncallRoute#slack}

---

##### `telegram`<sup>Optional</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteConfig.property.telegram"></a>

```typescript
public readonly telegram: OncallRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a>

telegram block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#telegram OncallRoute#telegram}

---

### OncallRouteMsteams <a name="OncallRouteMsteams" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

const oncallRouteMsteams: oncallRoute.OncallRouteMsteams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in MS teams. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams.property.id">id</a></code> | <code>string</code> | MS teams channel id. Alerts will be directed to this channel in Microsoft teams. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in MS teams. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#enabled OncallRoute#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

MS teams channel id. Alerts will be directed to this channel in Microsoft teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#id OncallRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OncallRouteSlack <a name="OncallRouteSlack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

const oncallRouteSlack: oncallRoute.OncallRouteSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack.property.channelId">channelId</a></code> | <code>string</code> | Slack channel id. Alerts will be directed to this channel in Slack. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in Slack. Defaults to `true`. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Slack channel id. Alerts will be directed to this channel in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#channel_id OncallRoute#channel_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in Slack. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#enabled OncallRoute#enabled}

---

### OncallRouteTelegram <a name="OncallRouteTelegram" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

const oncallRouteTelegram: oncallRoute.OncallRouteTelegram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification in Telegram. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram.property.id">id</a></code> | <code>string</code> | Telegram channel id. Alerts will be directed to this channel in Telegram. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification in Telegram. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#enabled OncallRoute#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Telegram channel id. Alerts will be directed to this channel in Telegram.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/oncall_route#id OncallRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### OncallRouteMsteamsOutputReference <a name="OncallRouteMsteamsOutputReference" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

new oncallRoute.OncallRouteMsteamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallRouteMsteams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteMsteams">OncallRouteMsteams</a>

---


### OncallRouteSlackOutputReference <a name="OncallRouteSlackOutputReference" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

new oncallRoute.OncallRouteSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallRouteSlack;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteSlack">OncallRouteSlack</a>

---


### OncallRouteTelegramOutputReference <a name="OncallRouteTelegramOutputReference" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.Initializer"></a>

```typescript
import { oncallRoute } from 'rhizo-co-terraform-provider-grafana'

new oncallRoute.OncallRouteTelegramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OncallRouteTelegram;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.oncallRoute.OncallRouteTelegram">OncallRouteTelegram</a>

---




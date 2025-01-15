# `grafana_rule_group`

Refer to the Terraform Registory for docs: [`grafana_rule_group`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group).

# `ruleGroup` Submodule <a name="`ruleGroup` Submodule" id="rhizo-co-terraform-provider-grafana.ruleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RuleGroup <a name="RuleGroup" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group grafana_rule_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroup(scope: Construct, id: string, config: RuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig">RuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig">RuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.putRule">putRule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetDisableProvenance">resetDisableProvenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetOrgId">resetOrgId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.putRule"></a>

```typescript
public putRule(value: IResolvable | RuleGroupRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]

---

##### `resetDisableProvenance` <a name="resetDisableProvenance" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetDisableProvenance"></a>

```typescript
public resetDisableProvenance(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isConstruct"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

ruleGroup.RuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformElement"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

ruleGroup.RuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformResource"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

ruleGroup.RuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.rule">rule</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList">RuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.disableProvenanceInput">disableProvenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.folderUidInput">folderUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.folderUid">folderUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.rule"></a>

```typescript
public readonly rule: RuleGroupRuleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList">RuleGroupRuleList</a>

---

##### `disableProvenanceInput`<sup>Optional</sup> <a name="disableProvenanceInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.disableProvenanceInput"></a>

```typescript
public readonly disableProvenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folderUidInput`<sup>Optional</sup> <a name="folderUidInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.folderUidInput"></a>

```typescript
public readonly folderUidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]

---

##### `disableProvenance`<sup>Required</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folderUid`<sup>Required</sup> <a name="folderUid" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.folderUid"></a>

```typescript
public readonly folderUid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RuleGroupConfig <a name="RuleGroupConfig" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupConfig: ruleGroup.RuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.folderUid">folderUid</a></code> | <code>string</code> | The UID of the folder that the group belongs to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The interval, in seconds, at which all rules in the group are evaluated. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the rule group. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]</code> | rule block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow modifying the rule group from other sources than Terraform or the Grafana API. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#id RuleGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folderUid`<sup>Required</sup> <a name="folderUid" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.folderUid"></a>

```typescript
public readonly folderUid: string;
```

- *Type:* string

The UID of the folder that the group belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#folder_uid RuleGroup#folder_uid}

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The interval, in seconds, at which all rules in the group are evaluated.

If a group contains many rules, the rules are evaluated sequentially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#interval_seconds RuleGroup#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#name RuleGroup#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#rule RuleGroup#rule}

---

##### `disableProvenance`<sup>Optional</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow modifying the rule group from other sources than Terraform or the Grafana API. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#disable_provenance RuleGroup#disable_provenance}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#id RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#org_id RuleGroup#org_id}

---

### RuleGroupRule <a name="RuleGroupRule" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupRule: ruleGroup.RuleGroupRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.condition">condition</a></code> | <code>string</code> | The `ref_id` of the query node in the `data` field to use as the alert condition. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.data">data</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]</code> | data block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.name">name</a></code> | <code>string</code> | The name of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs of metadata to attach to the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.execErrState">execErrState</a></code> | <code>string</code> | Describes what state to enter when the rule's query is invalid and the rule cannot be executed. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.for">for</a></code> | <code>string</code> | The amount of time for which the rule must be breached for the rule to be considered to be Firing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.isPaused">isPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Sets whether the alert should be paused or not. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs to attach to the alert rule that can be used in matching, grouping, and routing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.noDataState">noDataState</a></code> | <code>string</code> | Describes what state to enter when the rule's query returns No Data. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.record">record</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a></code> | record block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The `ref_id` of the query node in the `data` field to use as the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#condition RuleGroup#condition}

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.data"></a>

```typescript
public readonly data: IResolvable | RuleGroupRuleData[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#data RuleGroup#data}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#name RuleGroup#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs of metadata to attach to the alert rule.

They add additional information, such as a `summary` or `runbook_url`, to help identify and investigate alerts. The `dashboardUId` and `panelId` annotations, which link alerts to a panel, must be set together. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#annotations RuleGroup#annotations}

---

##### `execErrState`<sup>Optional</sup> <a name="execErrState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.execErrState"></a>

```typescript
public readonly execErrState: string;
```

- *Type:* string

Describes what state to enter when the rule's query is invalid and the rule cannot be executed.

Options are OK, Error, KeepLast, and Alerting. Defaults to `Alerting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#exec_err_state RuleGroup#exec_err_state}

---

##### `for`<sup>Optional</sup> <a name="for" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

The amount of time for which the rule must be breached for the rule to be considered to be Firing.

Before this time has elapsed, the rule is only considered to be Pending. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#for RuleGroup#for}

---

##### `isPaused`<sup>Optional</sup> <a name="isPaused" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.isPaused"></a>

```typescript
public readonly isPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Sets whether the alert should be paused or not. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#is_paused RuleGroup#is_paused}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs to attach to the alert rule that can be used in matching, grouping, and routing.

Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#labels RuleGroup#labels}

---

##### `noDataState`<sup>Optional</sup> <a name="noDataState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.noDataState"></a>

```typescript
public readonly noDataState: string;
```

- *Type:* string

Describes what state to enter when the rule's query returns No Data.

Options are OK, NoData, KeepLast, and Alerting. Defaults to `NoData`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#no_data_state RuleGroup#no_data_state}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: RuleGroupRuleNotificationSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#notification_settings RuleGroup#notification_settings}

---

##### `record`<sup>Optional</sup> <a name="record" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule.property.record"></a>

```typescript
public readonly record: RuleGroupRuleRecord;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a>

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#record RuleGroup#record}

---

### RuleGroupRuleData <a name="RuleGroupRuleData" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupRuleData: ruleGroup.RuleGroupRuleData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | The UID of the datasource being queried, or "-100" if this stage is an expression stage. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.model">model</a></code> | <code>string</code> | Custom JSON data to send to the specified datasource when querying. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.refId">refId</a></code> | <code>string</code> | A unique string to identify this query stage within a rule. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a></code> | relative_time_range block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.queryType">queryType</a></code> | <code>string</code> | An optional identifier for the type of query being executed. Defaults to ``. |

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

The UID of the datasource being queried, or "-100" if this stage is an expression stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#datasource_uid RuleGroup#datasource_uid}

---

##### `model`<sup>Required</sup> <a name="model" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Custom JSON data to send to the specified datasource when querying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#model RuleGroup#model}

---

##### `refId`<sup>Required</sup> <a name="refId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.refId"></a>

```typescript
public readonly refId: string;
```

- *Type:* string

A unique string to identify this query stage within a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#ref_id RuleGroup#ref_id}

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: RuleGroupRuleDataRelativeTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a>

relative_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#relative_time_range RuleGroup#relative_time_range}

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

An optional identifier for the type of query being executed. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#query_type RuleGroup#query_type}

---

### RuleGroupRuleDataRelativeTimeRange <a name="RuleGroupRuleDataRelativeTimeRange" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupRuleDataRelativeTimeRange: ruleGroup.RuleGroupRuleDataRelativeTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange.property.from">from</a></code> | <code>number</code> | The number of seconds in the past, relative to when the rule is evaluated, at which the time range begins. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange.property.to">to</a></code> | <code>number</code> | The number of seconds in the past, relative to when the rule is evaluated, at which the time range ends. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

The number of seconds in the past, relative to when the rule is evaluated, at which the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#from RuleGroup#from}

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

The number of seconds in the past, relative to when the rule is evaluated, at which the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#to RuleGroup#to}

---

### RuleGroupRuleNotificationSettings <a name="RuleGroupRuleNotificationSettings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupRuleNotificationSettings: ruleGroup.RuleGroupRuleNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.contactPoint">contactPoint</a></code> | <code>string</code> | The contact point to route notifications that match this rule to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupBy">groupBy</a></code> | <code>string[]</code> | A list of alert labels to group alerts into notifications by. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupInterval">groupInterval</a></code> | <code>string</code> | Minimum time interval between two notifications for the same group. Default is 5 minutes. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupWait">groupWait</a></code> | <code>string</code> | Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.muteTimings">muteTimings</a></code> | <code>string[]</code> | A list of mute timing names to apply to alerts that match this policy. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours. |

---

##### `contactPoint`<sup>Required</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

The contact point to route notifications that match this rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#contact_point RuleGroup#contact_point}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

A list of alert labels to group alerts into notifications by.

Use the special label `...` to group alerts by all labels, effectively disabling grouping. If empty, no grouping is used. If specified, requires labels 'alertname' and 'grafana_folder' to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#group_by RuleGroup#group_by}

---

##### `groupInterval`<sup>Optional</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

Minimum time interval between two notifications for the same group. Default is 5 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#group_interval RuleGroup#group_interval}

---

##### `groupWait`<sup>Optional</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#group_wait RuleGroup#group_wait}

---

##### `muteTimings`<sup>Optional</sup> <a name="muteTimings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.muteTimings"></a>

```typescript
public readonly muteTimings: string[];
```

- *Type:* string[]

A list of mute timing names to apply to alerts that match this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#mute_timings RuleGroup#mute_timings}

---

##### `repeatInterval`<sup>Optional</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#repeat_interval RuleGroup#repeat_interval}

---

### RuleGroupRuleRecord <a name="RuleGroupRuleRecord" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

const ruleGroupRuleRecord: ruleGroup.RuleGroupRuleRecord = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord.property.from">from</a></code> | <code>string</code> | The ref id of the query node in the data field to use as the source of the metric. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord.property.metric">metric</a></code> | <code>string</code> | The name of the metric to write to. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

The ref id of the query node in the data field to use as the source of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#from RuleGroup#from}

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The name of the metric to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/rule_group#metric RuleGroup#metric}

---

## Classes <a name="Classes" id="Classes"></a>

### RuleGroupRuleDataList <a name="RuleGroupRuleDataList" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.get"></a>

```typescript
public get(index: number): RuleGroupRuleDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RuleGroupRuleData[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]

---


### RuleGroupRuleDataOutputReference <a name="RuleGroupRuleDataOutputReference" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.putRelativeTimeRange"></a>

```typescript
public putRelativeTimeRange(value: RuleGroupRuleDataRelativeTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a>

---

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.resetQueryType"></a>

```typescript
public resetQueryType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference">RuleGroupRuleDataRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.datasourceUidInput">datasourceUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.refIdInput">refIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.datasourceUid">datasourceUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.refId">refId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: RuleGroupRuleDataRelativeTimeRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference">RuleGroupRuleDataRelativeTimeRangeOutputReference</a>

---

##### `datasourceUidInput`<sup>Optional</sup> <a name="datasourceUidInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.datasourceUidInput"></a>

```typescript
public readonly datasourceUidInput: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `refIdInput`<sup>Optional</sup> <a name="refIdInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.refIdInput"></a>

```typescript
public readonly refIdInput: string;
```

- *Type:* string

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.relativeTimeRangeInput"></a>

```typescript
public readonly relativeTimeRangeInput: RuleGroupRuleDataRelativeTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a>

---

##### `datasourceUid`<sup>Required</sup> <a name="datasourceUid" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.datasourceUid"></a>

```typescript
public readonly datasourceUid: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `refId`<sup>Required</sup> <a name="refId" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.refId"></a>

```typescript
public readonly refId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RuleGroupRuleData;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>

---


### RuleGroupRuleDataRelativeTimeRangeOutputReference <a name="RuleGroupRuleDataRelativeTimeRangeOutputReference" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.fromInput">fromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.toInput">toInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.from">from</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.to">to</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: number;
```

- *Type:* number

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.toInput"></a>

```typescript
public readonly toInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RuleGroupRuleDataRelativeTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataRelativeTimeRange">RuleGroupRuleDataRelativeTimeRange</a>

---


### RuleGroupRuleList <a name="RuleGroupRuleList" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.get"></a>

```typescript
public get(index: number): RuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>[]

---


### RuleGroupRuleNotificationSettingsOutputReference <a name="RuleGroupRuleNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupInterval">resetGroupInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupWait">resetGroupWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetMuteTimings">resetMuteTimings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetRepeatInterval">resetRepeatInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetGroupInterval` <a name="resetGroupInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupInterval"></a>

```typescript
public resetGroupInterval(): void
```

##### `resetGroupWait` <a name="resetGroupWait" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetGroupWait"></a>

```typescript
public resetGroupWait(): void
```

##### `resetMuteTimings` <a name="resetMuteTimings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetMuteTimings"></a>

```typescript
public resetMuteTimings(): void
```

##### `resetRepeatInterval` <a name="resetRepeatInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.resetRepeatInterval"></a>

```typescript
public resetRepeatInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.contactPointInput">contactPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupIntervalInput">groupIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupWaitInput">groupWaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.muteTimingsInput">muteTimingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.repeatIntervalInput">repeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.contactPoint">contactPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupInterval">groupInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupWait">groupWait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.muteTimings">muteTimings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactPointInput`<sup>Optional</sup> <a name="contactPointInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.contactPointInput"></a>

```typescript
public readonly contactPointInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupIntervalInput`<sup>Optional</sup> <a name="groupIntervalInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupIntervalInput"></a>

```typescript
public readonly groupIntervalInput: string;
```

- *Type:* string

---

##### `groupWaitInput`<sup>Optional</sup> <a name="groupWaitInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupWaitInput"></a>

```typescript
public readonly groupWaitInput: string;
```

- *Type:* string

---

##### `muteTimingsInput`<sup>Optional</sup> <a name="muteTimingsInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.muteTimingsInput"></a>

```typescript
public readonly muteTimingsInput: string[];
```

- *Type:* string[]

---

##### `repeatIntervalInput`<sup>Optional</sup> <a name="repeatIntervalInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.repeatIntervalInput"></a>

```typescript
public readonly repeatIntervalInput: string;
```

- *Type:* string

---

##### `contactPoint`<sup>Required</sup> <a name="contactPoint" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.contactPoint"></a>

```typescript
public readonly contactPoint: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `groupInterval`<sup>Required</sup> <a name="groupInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupInterval"></a>

```typescript
public readonly groupInterval: string;
```

- *Type:* string

---

##### `groupWait`<sup>Required</sup> <a name="groupWait" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.groupWait"></a>

```typescript
public readonly groupWait: string;
```

- *Type:* string

---

##### `muteTimings`<sup>Required</sup> <a name="muteTimings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.muteTimings"></a>

```typescript
public readonly muteTimings: string[];
```

- *Type:* string[]

---

##### `repeatInterval`<sup>Required</sup> <a name="repeatInterval" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RuleGroupRuleNotificationSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a>

---


### RuleGroupRuleOutputReference <a name="RuleGroupRuleOutputReference" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putData">putData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putRecord">putRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetExecErrState">resetExecErrState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetFor">resetFor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetIsPaused">resetIsPaused</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetNoDataState">resetNoDataState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetRecord">resetRecord</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putData` <a name="putData" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putData"></a>

```typescript
public putData(value: IResolvable | RuleGroupRuleData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putData.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: RuleGroupRuleNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a>

---

##### `putRecord` <a name="putRecord" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putRecord"></a>

```typescript
public putRecord(value: RuleGroupRuleRecord): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.putRecord.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetExecErrState` <a name="resetExecErrState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetExecErrState"></a>

```typescript
public resetExecErrState(): void
```

##### `resetFor` <a name="resetFor" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetFor"></a>

```typescript
public resetFor(): void
```

##### `resetIsPaused` <a name="resetIsPaused" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetIsPaused"></a>

```typescript
public resetIsPaused(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNoDataState` <a name="resetNoDataState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetNoDataState"></a>

```typescript
public resetNoDataState(): void
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```

##### `resetRecord` <a name="resetRecord" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.resetRecord"></a>

```typescript
public resetRecord(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList">RuleGroupRuleDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference">RuleGroupRuleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.record">record</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference">RuleGroupRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.dataInput">dataInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.execErrStateInput">execErrStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.forInput">forInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.isPausedInput">isPausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.noDataStateInput">noDataStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.recordInput">recordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.execErrState">execErrState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.for">for</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.isPaused">isPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.noDataState">noDataState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.data"></a>

```typescript
public readonly data: RuleGroupRuleDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleDataList">RuleGroupRuleDataList</a>

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: RuleGroupRuleNotificationSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettingsOutputReference">RuleGroupRuleNotificationSettingsOutputReference</a>

---

##### `record`<sup>Required</sup> <a name="record" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.record"></a>

```typescript
public readonly record: RuleGroupRuleRecordOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference">RuleGroupRuleRecordOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: IResolvable | RuleGroupRuleData[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleData">RuleGroupRuleData</a>[]

---

##### `execErrStateInput`<sup>Optional</sup> <a name="execErrStateInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.execErrStateInput"></a>

```typescript
public readonly execErrStateInput: string;
```

- *Type:* string

---

##### `forInput`<sup>Optional</sup> <a name="forInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.forInput"></a>

```typescript
public readonly forInput: string;
```

- *Type:* string

---

##### `isPausedInput`<sup>Optional</sup> <a name="isPausedInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.isPausedInput"></a>

```typescript
public readonly isPausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noDataStateInput`<sup>Optional</sup> <a name="noDataStateInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.noDataStateInput"></a>

```typescript
public readonly noDataStateInput: string;
```

- *Type:* string

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: RuleGroupRuleNotificationSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleNotificationSettings">RuleGroupRuleNotificationSettings</a>

---

##### `recordInput`<sup>Optional</sup> <a name="recordInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.recordInput"></a>

```typescript
public readonly recordInput: RuleGroupRuleRecord;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `execErrState`<sup>Required</sup> <a name="execErrState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.execErrState"></a>

```typescript
public readonly execErrState: string;
```

- *Type:* string

---

##### `for`<sup>Required</sup> <a name="for" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.for"></a>

```typescript
public readonly for: string;
```

- *Type:* string

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.isPaused"></a>

```typescript
public readonly isPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `noDataState`<sup>Required</sup> <a name="noDataState" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.noDataState"></a>

```typescript
public readonly noDataState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RuleGroupRule;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRule">RuleGroupRule</a>

---


### RuleGroupRuleRecordOutputReference <a name="RuleGroupRuleRecordOutputReference" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.Initializer"></a>

```typescript
import { ruleGroup } from 'rhizo-co-terraform-provider-grafana'

new ruleGroup.RuleGroupRuleRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RuleGroupRuleRecord;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.ruleGroup.RuleGroupRuleRecord">RuleGroupRuleRecord</a>

---




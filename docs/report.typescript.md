# `grafana_report`

Refer to the Terraform Registory for docs: [`grafana_report`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report).

# `report` Submodule <a name="`report` Submodule" id="rhizo-co-terraform-provider-grafana.report"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Report <a name="Report" id="rhizo-co-terraform-provider-grafana.report.Report"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report grafana_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.report.Report.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

new report.Report(scope: Construct, id: string, config: ReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig">ReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.report.Report.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig">ReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.putDashboards">putDashboards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetDashboards">resetDashboards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetFormats">resetFormats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetIncludeDashboardLink">resetIncludeDashboardLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetIncludeTableCsv">resetIncludeTableCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetLayout">resetLayout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetOrientation">resetOrientation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.resetReplyTo">resetReplyTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.report.Report.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.report.Report.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.report.Report.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.report.Report.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.report.Report.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.report.Report.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.report.Report.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.report.Report.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.report.Report.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.Report.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDashboards` <a name="putDashboards" id="rhizo-co-terraform-provider-grafana.report.Report.putDashboards"></a>

```typescript
public putDashboards(value: IResolvable | ReportDashboards[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.report.Report.putDashboards.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]

---

##### `putSchedule` <a name="putSchedule" id="rhizo-co-terraform-provider-grafana.report.Report.putSchedule"></a>

```typescript
public putSchedule(value: ReportSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.report.Report.putSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a>

---

##### `resetDashboards` <a name="resetDashboards" id="rhizo-co-terraform-provider-grafana.report.Report.resetDashboards"></a>

```typescript
public resetDashboards(): void
```

##### `resetFormats` <a name="resetFormats" id="rhizo-co-terraform-provider-grafana.report.Report.resetFormats"></a>

```typescript
public resetFormats(): void
```

##### `resetIncludeDashboardLink` <a name="resetIncludeDashboardLink" id="rhizo-co-terraform-provider-grafana.report.Report.resetIncludeDashboardLink"></a>

```typescript
public resetIncludeDashboardLink(): void
```

##### `resetIncludeTableCsv` <a name="resetIncludeTableCsv" id="rhizo-co-terraform-provider-grafana.report.Report.resetIncludeTableCsv"></a>

```typescript
public resetIncludeTableCsv(): void
```

##### `resetLayout` <a name="resetLayout" id="rhizo-co-terraform-provider-grafana.report.Report.resetLayout"></a>

```typescript
public resetLayout(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.report.Report.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.report.Report.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetOrientation` <a name="resetOrientation" id="rhizo-co-terraform-provider-grafana.report.Report.resetOrientation"></a>

```typescript
public resetOrientation(): void
```

##### `resetReplyTo` <a name="resetReplyTo" id="rhizo-co-terraform-provider-grafana.report.Report.resetReplyTo"></a>

```typescript
public resetReplyTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.report.Report.isConstruct"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

report.Report.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.report.Report.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.report.Report.isTerraformElement"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

report.Report.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.report.Report.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.report.Report.isTerraformResource"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

report.Report.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.report.Report.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.dashboards">dashboards</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList">ReportDashboardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference">ReportScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.dashboardsInput">dashboardsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.formatsInput">formatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.includeDashboardLinkInput">includeDashboardLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.includeTableCsvInput">includeTableCsvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.layoutInput">layoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.orientationInput">orientationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.replyToInput">replyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.scheduleInput">scheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.formats">formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.includeDashboardLink">includeDashboardLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.includeTableCsv">includeTableCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.layout">layout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.orientation">orientation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.replyTo">replyTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.report.Report.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.report.Report.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.report.Report.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.report.Report.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.report.Report.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.report.Report.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.report.Report.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.report.Report.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.report.Report.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.report.Report.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.report.Report.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.report.Report.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.report.Report.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.report.Report.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboards`<sup>Required</sup> <a name="dashboards" id="rhizo-co-terraform-provider-grafana.report.Report.property.dashboards"></a>

```typescript
public readonly dashboards: ReportDashboardsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList">ReportDashboardsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.report.Report.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-grafana.report.Report.property.schedule"></a>

```typescript
public readonly schedule: ReportScheduleOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference">ReportScheduleOutputReference</a>

---

##### `dashboardsInput`<sup>Optional</sup> <a name="dashboardsInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.dashboardsInput"></a>

```typescript
public readonly dashboardsInput: IResolvable | ReportDashboards[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.formatsInput"></a>

```typescript
public readonly formatsInput: string[];
```

- *Type:* string[]

---

##### `includeDashboardLinkInput`<sup>Optional</sup> <a name="includeDashboardLinkInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.includeDashboardLinkInput"></a>

```typescript
public readonly includeDashboardLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableCsvInput`<sup>Optional</sup> <a name="includeTableCsvInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.includeTableCsvInput"></a>

```typescript
public readonly includeTableCsvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `layoutInput`<sup>Optional</sup> <a name="layoutInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.layoutInput"></a>

```typescript
public readonly layoutInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `orientationInput`<sup>Optional</sup> <a name="orientationInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.orientationInput"></a>

```typescript
public readonly orientationInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.replyToInput"></a>

```typescript
public readonly replyToInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="rhizo-co-terraform-provider-grafana.report.Report.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: ReportSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a>

---

##### `formats`<sup>Required</sup> <a name="formats" id="rhizo-co-terraform-provider-grafana.report.Report.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

---

##### `includeDashboardLink`<sup>Required</sup> <a name="includeDashboardLink" id="rhizo-co-terraform-provider-grafana.report.Report.property.includeDashboardLink"></a>

```typescript
public readonly includeDashboardLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableCsv`<sup>Required</sup> <a name="includeTableCsv" id="rhizo-co-terraform-provider-grafana.report.Report.property.includeTableCsv"></a>

```typescript
public readonly includeTableCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `layout`<sup>Required</sup> <a name="layout" id="rhizo-co-terraform-provider-grafana.report.Report.property.layout"></a>

```typescript
public readonly layout: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.report.Report.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.report.Report.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.report.Report.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `orientation`<sup>Required</sup> <a name="orientation" id="rhizo-co-terraform-provider-grafana.report.Report.property.orientation"></a>

```typescript
public readonly orientation: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="rhizo-co-terraform-provider-grafana.report.Report.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="rhizo-co-terraform-provider-grafana.report.Report.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.Report.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.report.Report.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReportConfig <a name="ReportConfig" id="rhizo-co-terraform-provider-grafana.report.ReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

const reportConfig: report.ReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.name">name</a></code> | <code>string</code> | Name of the report. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.recipients">recipients</a></code> | <code>string[]</code> | List of recipients of the report. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.dashboards">dashboards</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]</code> | dashboards block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.formats">formats</a></code> | <code>string[]</code> | Specifies what kind of attachment to generate for the report. Allowed values: `pdf`, `csv`, `image`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.includeDashboardLink">includeDashboardLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include a link to the dashboard in the report. Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.includeTableCsv">includeTableCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include a CSV file of table panel data. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.layout">layout</a></code> | <code>string</code> | Layout of the report. Allowed values: `simple`, `grid`. Defaults to `grid`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.message">message</a></code> | <code>string</code> | Message to be sent in the report. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.orientation">orientation</a></code> | <code>string</code> | Orientation of the report. Allowed values: `landscape`, `portrait`. Defaults to `landscape`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportConfig.property.replyTo">replyTo</a></code> | <code>string</code> | Reply-to email address of the report. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#name Report#name}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

List of recipients of the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#recipients Report#recipients}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.schedule"></a>

```typescript
public readonly schedule: ReportSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#schedule Report#schedule}

---

##### `dashboards`<sup>Optional</sup> <a name="dashboards" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.dashboards"></a>

```typescript
public readonly dashboards: IResolvable | ReportDashboards[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]

dashboards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#dashboards Report#dashboards}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

Specifies what kind of attachment to generate for the report. Allowed values: `pdf`, `csv`, `image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#formats Report#formats}

---

##### `includeDashboardLink`<sup>Optional</sup> <a name="includeDashboardLink" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.includeDashboardLink"></a>

```typescript
public readonly includeDashboardLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include a link to the dashboard in the report. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#include_dashboard_link Report#include_dashboard_link}

---

##### `includeTableCsv`<sup>Optional</sup> <a name="includeTableCsv" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.includeTableCsv"></a>

```typescript
public readonly includeTableCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include a CSV file of table panel data. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#include_table_csv Report#include_table_csv}

---

##### `layout`<sup>Optional</sup> <a name="layout" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.layout"></a>

```typescript
public readonly layout: string;
```

- *Type:* string

Layout of the report. Allowed values: `simple`, `grid`. Defaults to `grid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#layout Report#layout}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Message to be sent in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#message Report#message}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#org_id Report#org_id}

---

##### `orientation`<sup>Optional</sup> <a name="orientation" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.orientation"></a>

```typescript
public readonly orientation: string;
```

- *Type:* string

Orientation of the report. Allowed values: `landscape`, `portrait`. Defaults to `landscape`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#orientation Report#orientation}

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="rhizo-co-terraform-provider-grafana.report.ReportConfig.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

Reply-to email address of the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#reply_to Report#reply_to}

---

### ReportDashboards <a name="ReportDashboards" id="rhizo-co-terraform-provider-grafana.report.ReportDashboards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.report.ReportDashboards.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

const reportDashboards: report.ReportDashboards = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.uid">uid</a></code> | <code>string</code> | Dashboard uid. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.reportVariables">reportVariables</a></code> | <code>{[ key: string ]: string}</code> | Add report variables to the dashboard. Values should be separated by commas. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.timeRange">timeRange</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a></code> | time_range block. |

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Dashboard uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#uid Report#uid}

---

##### `reportVariables`<sup>Optional</sup> <a name="reportVariables" id="rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.reportVariables"></a>

```typescript
public readonly reportVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Add report variables to the dashboard. Values should be separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#report_variables Report#report_variables}

---

##### `timeRange`<sup>Optional</sup> <a name="timeRange" id="rhizo-co-terraform-provider-grafana.report.ReportDashboards.property.timeRange"></a>

```typescript
public readonly timeRange: ReportDashboardsTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a>

time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#time_range Report#time_range}

---

### ReportDashboardsTimeRange <a name="ReportDashboardsTimeRange" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

const reportDashboardsTimeRange: report.ReportDashboardsTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange.property.from">from</a></code> | <code>string</code> | Start of the time range. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange.property.to">to</a></code> | <code>string</code> | End of the time range. |

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Start of the time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#from Report#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

End of the time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#to Report#to}

---

### ReportSchedule <a name="ReportSchedule" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

const reportSchedule: report.ReportSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.frequency">frequency</a></code> | <code>string</code> | Frequency of the report. Allowed values: `never`, `once`, `hourly`, `daily`, `weekly`, `monthly`, `custom`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.customInterval">customInterval</a></code> | <code>string</code> | Custom interval of the report. *Note:** This field is only available when frequency is set to `custom`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.endTime">endTime</a></code> | <code>string</code> | End time of the report. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.lastDayOfMonth">lastDayOfMonth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Send the report on the last day of the month Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.startTime">startTime</a></code> | <code>string</code> | Start time of the report. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.timezone">timezone</a></code> | <code>string</code> | Set the report time zone. Defaults to `GMT`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.workdaysOnly">workdaysOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send the report only on work days. Defaults to `false`. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Frequency of the report. Allowed values: `never`, `once`, `hourly`, `daily`, `weekly`, `monthly`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#frequency Report#frequency}

---

##### `customInterval`<sup>Optional</sup> <a name="customInterval" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.customInterval"></a>

```typescript
public readonly customInterval: string;
```

- *Type:* string

Custom interval of the report. *Note:** This field is only available when frequency is set to `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#custom_interval Report#custom_interval}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

End time of the report.

If empty, the report will be sent indefinitely (according to frequency). Note that times will be saved as UTC in Grafana. Use 2006-01-02T15:04:05 format if you want to set a custom timezone

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#end_time Report#end_time}

---

##### `lastDayOfMonth`<sup>Optional</sup> <a name="lastDayOfMonth" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.lastDayOfMonth"></a>

```typescript
public readonly lastDayOfMonth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Send the report on the last day of the month Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#last_day_of_month Report#last_day_of_month}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the report.

If empty, the start date will be set to the creation time. Note that times will be saved as UTC in Grafana. Use 2006-01-02T15:04:05 format if you want to set a custom timezone

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#start_time Report#start_time}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Set the report time zone. Defaults to `GMT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#timezone Report#timezone}

---

##### `workdaysOnly`<sup>Optional</sup> <a name="workdaysOnly" id="rhizo-co-terraform-provider-grafana.report.ReportSchedule.property.workdaysOnly"></a>

```typescript
public readonly workdaysOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send the report only on work days. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/report#workdays_only Report#workdays_only}

---

## Classes <a name="Classes" id="Classes"></a>

### ReportDashboardsList <a name="ReportDashboardsList" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

new report.ReportDashboardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.get"></a>

```typescript
public get(index: number): ReportDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReportDashboards[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>[]

---


### ReportDashboardsOutputReference <a name="ReportDashboardsOutputReference" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

new report.ReportDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.putTimeRange">putTimeRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resetReportVariables">resetReportVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resetTimeRange">resetTimeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeRange` <a name="putTimeRange" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.putTimeRange"></a>

```typescript
public putTimeRange(value: ReportDashboardsTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.putTimeRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a>

---

##### `resetReportVariables` <a name="resetReportVariables" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resetReportVariables"></a>

```typescript
public resetReportVariables(): void
```

##### `resetTimeRange` <a name="resetTimeRange" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.resetTimeRange"></a>

```typescript
public resetTimeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.timeRange">timeRange</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference">ReportDashboardsTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.reportVariablesInput">reportVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.timeRangeInput">timeRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.reportVariables">reportVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeRange`<sup>Required</sup> <a name="timeRange" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.timeRange"></a>

```typescript
public readonly timeRange: ReportDashboardsTimeRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference">ReportDashboardsTimeRangeOutputReference</a>

---

##### `reportVariablesInput`<sup>Optional</sup> <a name="reportVariablesInput" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.reportVariablesInput"></a>

```typescript
public readonly reportVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeRangeInput`<sup>Optional</sup> <a name="timeRangeInput" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.timeRangeInput"></a>

```typescript
public readonly timeRangeInput: ReportDashboardsTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a>

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `reportVariables`<sup>Required</sup> <a name="reportVariables" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.reportVariables"></a>

```typescript
public readonly reportVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReportDashboards;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboards">ReportDashboards</a>

---


### ReportDashboardsTimeRangeOutputReference <a name="ReportDashboardsTimeRangeOutputReference" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

new report.ReportDashboardsTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportDashboardsTimeRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportDashboardsTimeRange">ReportDashboardsTimeRange</a>

---


### ReportScheduleOutputReference <a name="ReportScheduleOutputReference" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.Initializer"></a>

```typescript
import { report } from 'rhizo-co-terraform-provider-grafana'

new report.ReportScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetCustomInterval">resetCustomInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetLastDayOfMonth">resetLastDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetWorkdaysOnly">resetWorkdaysOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomInterval` <a name="resetCustomInterval" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetCustomInterval"></a>

```typescript
public resetCustomInterval(): void
```

##### `resetEndTime` <a name="resetEndTime" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetLastDayOfMonth` <a name="resetLastDayOfMonth" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetLastDayOfMonth"></a>

```typescript
public resetLastDayOfMonth(): void
```

##### `resetStartTime` <a name="resetStartTime" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimezone` <a name="resetTimezone" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetWorkdaysOnly` <a name="resetWorkdaysOnly" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.resetWorkdaysOnly"></a>

```typescript
public resetWorkdaysOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.customIntervalInput">customIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.lastDayOfMonthInput">lastDayOfMonthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.workdaysOnlyInput">workdaysOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.customInterval">customInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.lastDayOfMonth">lastDayOfMonth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.workdaysOnly">workdaysOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customIntervalInput`<sup>Optional</sup> <a name="customIntervalInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.customIntervalInput"></a>

```typescript
public readonly customIntervalInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `lastDayOfMonthInput`<sup>Optional</sup> <a name="lastDayOfMonthInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.lastDayOfMonthInput"></a>

```typescript
public readonly lastDayOfMonthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `workdaysOnlyInput`<sup>Optional</sup> <a name="workdaysOnlyInput" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.workdaysOnlyInput"></a>

```typescript
public readonly workdaysOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customInterval`<sup>Required</sup> <a name="customInterval" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.customInterval"></a>

```typescript
public readonly customInterval: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `lastDayOfMonth`<sup>Required</sup> <a name="lastDayOfMonth" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.lastDayOfMonth"></a>

```typescript
public readonly lastDayOfMonth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `workdaysOnly`<sup>Required</sup> <a name="workdaysOnly" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.workdaysOnly"></a>

```typescript
public readonly workdaysOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.report.ReportScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.report.ReportSchedule">ReportSchedule</a>

---




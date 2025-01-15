# `grafana_contact_point`

Refer to the Terraform Registory for docs: [`grafana_contact_point`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point).

# `contactPoint` Submodule <a name="`contactPoint` Submodule" id="rhizo-co-terraform-provider-grafana.contactPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactPoint <a name="ContactPoint" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point grafana_contact_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPoint(scope: Construct, id: string, config: ContactPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig">ContactPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig">ContactPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putAlertmanager">putAlertmanager</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDingding">putDingding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDiscord">putDiscord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putGooglechat">putGooglechat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putKafka">putKafka</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putLine">putLine</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOncall">putOncall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOpsgenie">putOpsgenie</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPushover">putPushover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSensugo">putSensugo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSns">putSns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTeams">putTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTelegram">putTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putThreema">putThreema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putVictorops">putVictorops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebex">putWebex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWecom">putWecom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetAlertmanager">resetAlertmanager</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDingding">resetDingding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDisableProvenance">resetDisableProvenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDiscord">resetDiscord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetGooglechat">resetGooglechat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetKafka">resetKafka</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetLine">resetLine</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOncall">resetOncall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOpsgenie">resetOpsgenie</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetPagerduty">resetPagerduty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetPushover">resetPushover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSensugo">resetSensugo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetTelegram">resetTelegram</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetThreema">resetThreema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetVictorops">resetVictorops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWebex">resetWebex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWecom">resetWecom</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAlertmanager` <a name="putAlertmanager" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putAlertmanager"></a>

```typescript
public putAlertmanager(value: IResolvable | ContactPointAlertmanager[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putAlertmanager.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]

---

##### `putDingding` <a name="putDingding" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDingding"></a>

```typescript
public putDingding(value: IResolvable | ContactPointDingding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDingding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]

---

##### `putDiscord` <a name="putDiscord" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDiscord"></a>

```typescript
public putDiscord(value: IResolvable | ContactPointDiscord[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putDiscord.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]

---

##### `putEmail` <a name="putEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putEmail"></a>

```typescript
public putEmail(value: IResolvable | ContactPointEmail[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putEmail.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]

---

##### `putGooglechat` <a name="putGooglechat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putGooglechat"></a>

```typescript
public putGooglechat(value: IResolvable | ContactPointGooglechat[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putGooglechat.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]

---

##### `putKafka` <a name="putKafka" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putKafka"></a>

```typescript
public putKafka(value: IResolvable | ContactPointKafka[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putKafka.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]

---

##### `putLine` <a name="putLine" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putLine"></a>

```typescript
public putLine(value: IResolvable | ContactPointLine[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putLine.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]

---

##### `putOncall` <a name="putOncall" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOncall"></a>

```typescript
public putOncall(value: IResolvable | ContactPointOncall[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOncall.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]

---

##### `putOpsgenie` <a name="putOpsgenie" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOpsgenie"></a>

```typescript
public putOpsgenie(value: IResolvable | ContactPointOpsgenie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putOpsgenie.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]

---

##### `putPagerduty` <a name="putPagerduty" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPagerduty"></a>

```typescript
public putPagerduty(value: IResolvable | ContactPointPagerduty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPagerduty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]

---

##### `putPushover` <a name="putPushover" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPushover"></a>

```typescript
public putPushover(value: IResolvable | ContactPointPushover[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putPushover.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]

---

##### `putSensugo` <a name="putSensugo" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSensugo"></a>

```typescript
public putSensugo(value: IResolvable | ContactPointSensugo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSensugo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]

---

##### `putSlack` <a name="putSlack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSlack"></a>

```typescript
public putSlack(value: IResolvable | ContactPointSlack[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSlack.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]

---

##### `putSns` <a name="putSns" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSns"></a>

```typescript
public putSns(value: IResolvable | ContactPointSns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putSns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]

---

##### `putTeams` <a name="putTeams" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTeams"></a>

```typescript
public putTeams(value: IResolvable | ContactPointTeams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTeams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]

---

##### `putTelegram` <a name="putTelegram" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTelegram"></a>

```typescript
public putTelegram(value: IResolvable | ContactPointTelegram[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putTelegram.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]

---

##### `putThreema` <a name="putThreema" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putThreema"></a>

```typescript
public putThreema(value: IResolvable | ContactPointThreema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putThreema.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]

---

##### `putVictorops` <a name="putVictorops" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putVictorops"></a>

```typescript
public putVictorops(value: IResolvable | ContactPointVictorops[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putVictorops.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]

---

##### `putWebex` <a name="putWebex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebex"></a>

```typescript
public putWebex(value: IResolvable | ContactPointWebex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebex.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]

---

##### `putWebhook` <a name="putWebhook" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebhook"></a>

```typescript
public putWebhook(value: IResolvable | ContactPointWebhook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWebhook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]

---

##### `putWecom` <a name="putWecom" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWecom"></a>

```typescript
public putWecom(value: IResolvable | ContactPointWecom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.putWecom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]

---

##### `resetAlertmanager` <a name="resetAlertmanager" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetAlertmanager"></a>

```typescript
public resetAlertmanager(): void
```

##### `resetDingding` <a name="resetDingding" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDingding"></a>

```typescript
public resetDingding(): void
```

##### `resetDisableProvenance` <a name="resetDisableProvenance" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDisableProvenance"></a>

```typescript
public resetDisableProvenance(): void
```

##### `resetDiscord` <a name="resetDiscord" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetDiscord"></a>

```typescript
public resetDiscord(): void
```

##### `resetEmail` <a name="resetEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetGooglechat` <a name="resetGooglechat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetGooglechat"></a>

```typescript
public resetGooglechat(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKafka` <a name="resetKafka" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetKafka"></a>

```typescript
public resetKafka(): void
```

##### `resetLine` <a name="resetLine" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetLine"></a>

```typescript
public resetLine(): void
```

##### `resetOncall` <a name="resetOncall" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOncall"></a>

```typescript
public resetOncall(): void
```

##### `resetOpsgenie` <a name="resetOpsgenie" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOpsgenie"></a>

```typescript
public resetOpsgenie(): void
```

##### `resetOrgId` <a name="resetOrgId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetPagerduty` <a name="resetPagerduty" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetPagerduty"></a>

```typescript
public resetPagerduty(): void
```

##### `resetPushover` <a name="resetPushover" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetPushover"></a>

```typescript
public resetPushover(): void
```

##### `resetSensugo` <a name="resetSensugo" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSensugo"></a>

```typescript
public resetSensugo(): void
```

##### `resetSlack` <a name="resetSlack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetSns` <a name="resetSns" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetSns"></a>

```typescript
public resetSns(): void
```

##### `resetTeams` <a name="resetTeams" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetTeams"></a>

```typescript
public resetTeams(): void
```

##### `resetTelegram` <a name="resetTelegram" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetTelegram"></a>

```typescript
public resetTelegram(): void
```

##### `resetThreema` <a name="resetThreema" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetThreema"></a>

```typescript
public resetThreema(): void
```

##### `resetVictorops` <a name="resetVictorops" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetVictorops"></a>

```typescript
public resetVictorops(): void
```

##### `resetWebex` <a name="resetWebex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWebex"></a>

```typescript
public resetWebex(): void
```

##### `resetWebhook` <a name="resetWebhook" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

##### `resetWecom` <a name="resetWecom" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.resetWecom"></a>

```typescript
public resetWecom(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isConstruct"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

contactPoint.ContactPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformElement"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

contactPoint.ContactPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformResource"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

contactPoint.ContactPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.alertmanager">alertmanager</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList">ContactPointAlertmanagerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dingding">dingding</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList">ContactPointDingdingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.discord">discord</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList">ContactPointDiscordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.email">email</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList">ContactPointEmailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.googlechat">googlechat</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList">ContactPointGooglechatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.kafka">kafka</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList">ContactPointKafkaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.line">line</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList">ContactPointLineList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.oncall">oncall</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList">ContactPointOncallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.opsgenie">opsgenie</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList">ContactPointOpsgenieList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pagerduty">pagerduty</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList">ContactPointPagerdutyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pushover">pushover</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList">ContactPointPushoverList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sensugo">sensugo</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList">ContactPointSensugoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.slack">slack</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList">ContactPointSlackList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sns">sns</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList">ContactPointSnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.teams">teams</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList">ContactPointTeamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.telegram">telegram</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList">ContactPointTelegramList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.threema">threema</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList">ContactPointThreemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.victorops">victorops</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList">ContactPointVictoropsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webex">webex</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList">ContactPointWebexList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webhook">webhook</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList">ContactPointWebhookList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.wecom">wecom</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList">ContactPointWecomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.alertmanagerInput">alertmanagerInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dingdingInput">dingdingInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.disableProvenanceInput">disableProvenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.discordInput">discordInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.emailInput">emailInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.googlechatInput">googlechatInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.kafkaInput">kafkaInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.lineInput">lineInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.oncallInput">oncallInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.opsgenieInput">opsgenieInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pagerdutyInput">pagerdutyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pushoverInput">pushoverInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sensugoInput">sensugoInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.slackInput">slackInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.snsInput">snsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.teamsInput">teamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.telegramInput">telegramInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.threemaInput">threemaInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.victoropsInput">victoropsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webexInput">webexInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webhookInput">webhookInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.wecomInput">wecomInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertmanager`<sup>Required</sup> <a name="alertmanager" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.alertmanager"></a>

```typescript
public readonly alertmanager: ContactPointAlertmanagerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList">ContactPointAlertmanagerList</a>

---

##### `dingding`<sup>Required</sup> <a name="dingding" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dingding"></a>

```typescript
public readonly dingding: ContactPointDingdingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList">ContactPointDingdingList</a>

---

##### `discord`<sup>Required</sup> <a name="discord" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.discord"></a>

```typescript
public readonly discord: ContactPointDiscordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList">ContactPointDiscordList</a>

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.email"></a>

```typescript
public readonly email: ContactPointEmailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList">ContactPointEmailList</a>

---

##### `googlechat`<sup>Required</sup> <a name="googlechat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.googlechat"></a>

```typescript
public readonly googlechat: ContactPointGooglechatList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList">ContactPointGooglechatList</a>

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.kafka"></a>

```typescript
public readonly kafka: ContactPointKafkaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList">ContactPointKafkaList</a>

---

##### `line`<sup>Required</sup> <a name="line" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.line"></a>

```typescript
public readonly line: ContactPointLineList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList">ContactPointLineList</a>

---

##### `oncall`<sup>Required</sup> <a name="oncall" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.oncall"></a>

```typescript
public readonly oncall: ContactPointOncallList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList">ContactPointOncallList</a>

---

##### `opsgenie`<sup>Required</sup> <a name="opsgenie" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.opsgenie"></a>

```typescript
public readonly opsgenie: ContactPointOpsgenieList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList">ContactPointOpsgenieList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pagerduty"></a>

```typescript
public readonly pagerduty: ContactPointPagerdutyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList">ContactPointPagerdutyList</a>

---

##### `pushover`<sup>Required</sup> <a name="pushover" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pushover"></a>

```typescript
public readonly pushover: ContactPointPushoverList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList">ContactPointPushoverList</a>

---

##### `sensugo`<sup>Required</sup> <a name="sensugo" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sensugo"></a>

```typescript
public readonly sensugo: ContactPointSensugoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList">ContactPointSensugoList</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.slack"></a>

```typescript
public readonly slack: ContactPointSlackList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList">ContactPointSlackList</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sns"></a>

```typescript
public readonly sns: ContactPointSnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList">ContactPointSnsList</a>

---

##### `teams`<sup>Required</sup> <a name="teams" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.teams"></a>

```typescript
public readonly teams: ContactPointTeamsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList">ContactPointTeamsList</a>

---

##### `telegram`<sup>Required</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.telegram"></a>

```typescript
public readonly telegram: ContactPointTelegramList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList">ContactPointTelegramList</a>

---

##### `threema`<sup>Required</sup> <a name="threema" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.threema"></a>

```typescript
public readonly threema: ContactPointThreemaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList">ContactPointThreemaList</a>

---

##### `victorops`<sup>Required</sup> <a name="victorops" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.victorops"></a>

```typescript
public readonly victorops: ContactPointVictoropsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList">ContactPointVictoropsList</a>

---

##### `webex`<sup>Required</sup> <a name="webex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webex"></a>

```typescript
public readonly webex: ContactPointWebexList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList">ContactPointWebexList</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webhook"></a>

```typescript
public readonly webhook: ContactPointWebhookList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList">ContactPointWebhookList</a>

---

##### `wecom`<sup>Required</sup> <a name="wecom" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.wecom"></a>

```typescript
public readonly wecom: ContactPointWecomList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList">ContactPointWecomList</a>

---

##### `alertmanagerInput`<sup>Optional</sup> <a name="alertmanagerInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.alertmanagerInput"></a>

```typescript
public readonly alertmanagerInput: IResolvable | ContactPointAlertmanager[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]

---

##### `dingdingInput`<sup>Optional</sup> <a name="dingdingInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.dingdingInput"></a>

```typescript
public readonly dingdingInput: IResolvable | ContactPointDingding[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]

---

##### `disableProvenanceInput`<sup>Optional</sup> <a name="disableProvenanceInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.disableProvenanceInput"></a>

```typescript
public readonly disableProvenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discordInput`<sup>Optional</sup> <a name="discordInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.discordInput"></a>

```typescript
public readonly discordInput: IResolvable | ContactPointDiscord[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.emailInput"></a>

```typescript
public readonly emailInput: IResolvable | ContactPointEmail[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]

---

##### `googlechatInput`<sup>Optional</sup> <a name="googlechatInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.googlechatInput"></a>

```typescript
public readonly googlechatInput: IResolvable | ContactPointGooglechat[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaInput`<sup>Optional</sup> <a name="kafkaInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.kafkaInput"></a>

```typescript
public readonly kafkaInput: IResolvable | ContactPointKafka[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]

---

##### `lineInput`<sup>Optional</sup> <a name="lineInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.lineInput"></a>

```typescript
public readonly lineInput: IResolvable | ContactPointLine[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oncallInput`<sup>Optional</sup> <a name="oncallInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.oncallInput"></a>

```typescript
public readonly oncallInput: IResolvable | ContactPointOncall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]

---

##### `opsgenieInput`<sup>Optional</sup> <a name="opsgenieInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.opsgenieInput"></a>

```typescript
public readonly opsgenieInput: IResolvable | ContactPointOpsgenie[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pagerdutyInput"></a>

```typescript
public readonly pagerdutyInput: IResolvable | ContactPointPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]

---

##### `pushoverInput`<sup>Optional</sup> <a name="pushoverInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.pushoverInput"></a>

```typescript
public readonly pushoverInput: IResolvable | ContactPointPushover[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]

---

##### `sensugoInput`<sup>Optional</sup> <a name="sensugoInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.sensugoInput"></a>

```typescript
public readonly sensugoInput: IResolvable | ContactPointSensugo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | ContactPointSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.snsInput"></a>

```typescript
public readonly snsInput: IResolvable | ContactPointSns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.teamsInput"></a>

```typescript
public readonly teamsInput: IResolvable | ContactPointTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]

---

##### `telegramInput`<sup>Optional</sup> <a name="telegramInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.telegramInput"></a>

```typescript
public readonly telegramInput: IResolvable | ContactPointTelegram[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]

---

##### `threemaInput`<sup>Optional</sup> <a name="threemaInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.threemaInput"></a>

```typescript
public readonly threemaInput: IResolvable | ContactPointThreema[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]

---

##### `victoropsInput`<sup>Optional</sup> <a name="victoropsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.victoropsInput"></a>

```typescript
public readonly victoropsInput: IResolvable | ContactPointVictorops[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]

---

##### `webexInput`<sup>Optional</sup> <a name="webexInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webexInput"></a>

```typescript
public readonly webexInput: IResolvable | ContactPointWebex[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | ContactPointWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]

---

##### `wecomInput`<sup>Optional</sup> <a name="wecomInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.wecomInput"></a>

```typescript
public readonly wecomInput: IResolvable | ContactPointWecom[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]

---

##### `disableProvenance`<sup>Required</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactPointAlertmanager <a name="ContactPointAlertmanager" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointAlertmanager: contactPoint.ContactPointAlertmanager = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.url">url</a></code> | <code>string</code> | The URL of the Alertmanager instance. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | The password component of the basic auth credentials to use. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | The username component of the basic auth credentials to use. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the Alertmanager instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `basicAuthPassword`<sup>Optional</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

The password component of the basic auth credentials to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}

---

##### `basicAuthUser`<sup>Optional</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

The username component of the basic auth credentials to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

### ContactPointConfig <a name="ContactPointConfig" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointConfig: contactPoint.ContactPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.name">name</a></code> | <code>string</code> | The name of the contact point. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.alertmanager">alertmanager</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]</code> | alertmanager block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.dingding">dingding</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]</code> | dingding block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.disableProvenance">disableProvenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow modifying the contact point from other sources than Terraform or the Grafana API. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.discord">discord</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]</code> | discord block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.email">email</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]</code> | email block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.googlechat">googlechat</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]</code> | googlechat block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#id ContactPoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.kafka">kafka</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]</code> | kafka block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.line">line</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]</code> | line block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.oncall">oncall</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]</code> | oncall block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.opsgenie">opsgenie</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]</code> | opsgenie block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.orgId">orgId</a></code> | <code>string</code> | The Organization ID. If not set, the Org ID defined in the provider block will be used. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.pagerduty">pagerduty</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]</code> | pagerduty block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.pushover">pushover</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]</code> | pushover block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.sensugo">sensugo</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]</code> | sensugo block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.slack">slack</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]</code> | slack block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.sns">sns</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]</code> | sns block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.teams">teams</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]</code> | teams block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.telegram">telegram</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]</code> | telegram block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.threema">threema</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]</code> | threema block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.victorops">victorops</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]</code> | victorops block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.webex">webex</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]</code> | webex block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.webhook">webhook</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]</code> | webhook block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.wecom">wecom</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]</code> | wecom block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#name ContactPoint#name}

---

##### `alertmanager`<sup>Optional</sup> <a name="alertmanager" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.alertmanager"></a>

```typescript
public readonly alertmanager: IResolvable | ContactPointAlertmanager[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]

alertmanager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#alertmanager ContactPoint#alertmanager}

---

##### `dingding`<sup>Optional</sup> <a name="dingding" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.dingding"></a>

```typescript
public readonly dingding: IResolvable | ContactPointDingding[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]

dingding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#dingding ContactPoint#dingding}

---

##### `disableProvenance`<sup>Optional</sup> <a name="disableProvenance" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.disableProvenance"></a>

```typescript
public readonly disableProvenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow modifying the contact point from other sources than Terraform or the Grafana API. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_provenance ContactPoint#disable_provenance}

---

##### `discord`<sup>Optional</sup> <a name="discord" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.discord"></a>

```typescript
public readonly discord: IResolvable | ContactPointDiscord[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]

discord block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#discord ContactPoint#discord}

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.email"></a>

```typescript
public readonly email: IResolvable | ContactPointEmail[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#email ContactPoint#email}

---

##### `googlechat`<sup>Optional</sup> <a name="googlechat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.googlechat"></a>

```typescript
public readonly googlechat: IResolvable | ContactPointGooglechat[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]

googlechat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#googlechat ContactPoint#googlechat}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#id ContactPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.kafka"></a>

```typescript
public readonly kafka: IResolvable | ContactPointKafka[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]

kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#kafka ContactPoint#kafka}

---

##### `line`<sup>Optional</sup> <a name="line" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.line"></a>

```typescript
public readonly line: IResolvable | ContactPointLine[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]

line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#line ContactPoint#line}

---

##### `oncall`<sup>Optional</sup> <a name="oncall" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.oncall"></a>

```typescript
public readonly oncall: IResolvable | ContactPointOncall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]

oncall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#oncall ContactPoint#oncall}

---

##### `opsgenie`<sup>Optional</sup> <a name="opsgenie" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.opsgenie"></a>

```typescript
public readonly opsgenie: IResolvable | ContactPointOpsgenie[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]

opsgenie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#opsgenie ContactPoint#opsgenie}

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Organization ID. If not set, the Org ID defined in the provider block will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#org_id ContactPoint#org_id}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.pagerduty"></a>

```typescript
public readonly pagerduty: IResolvable | ContactPointPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#pagerduty ContactPoint#pagerduty}

---

##### `pushover`<sup>Optional</sup> <a name="pushover" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.pushover"></a>

```typescript
public readonly pushover: IResolvable | ContactPointPushover[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]

pushover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#pushover ContactPoint#pushover}

---

##### `sensugo`<sup>Optional</sup> <a name="sensugo" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.sensugo"></a>

```typescript
public readonly sensugo: IResolvable | ContactPointSensugo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]

sensugo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#sensugo ContactPoint#sensugo}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.slack"></a>

```typescript
public readonly slack: IResolvable | ContactPointSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#slack ContactPoint#slack}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.sns"></a>

```typescript
public readonly sns: IResolvable | ContactPointSns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#sns ContactPoint#sns}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.teams"></a>

```typescript
public readonly teams: IResolvable | ContactPointTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]

teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#teams ContactPoint#teams}

---

##### `telegram`<sup>Optional</sup> <a name="telegram" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.telegram"></a>

```typescript
public readonly telegram: IResolvable | ContactPointTelegram[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]

telegram block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#telegram ContactPoint#telegram}

---

##### `threema`<sup>Optional</sup> <a name="threema" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.threema"></a>

```typescript
public readonly threema: IResolvable | ContactPointThreema[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]

threema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#threema ContactPoint#threema}

---

##### `victorops`<sup>Optional</sup> <a name="victorops" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.victorops"></a>

```typescript
public readonly victorops: IResolvable | ContactPointVictorops[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]

victorops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#victorops ContactPoint#victorops}

---

##### `webex`<sup>Optional</sup> <a name="webex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.webex"></a>

```typescript
public readonly webex: IResolvable | ContactPointWebex[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]

webex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#webex ContactPoint#webex}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.webhook"></a>

```typescript
public readonly webhook: IResolvable | ContactPointWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#webhook ContactPoint#webhook}

---

##### `wecom`<sup>Optional</sup> <a name="wecom" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointConfig.property.wecom"></a>

```typescript
public readonly wecom: IResolvable | ContactPointWecom[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]

wecom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#wecom ContactPoint#wecom}

---

### ContactPointDingding <a name="ContactPointDingding" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointDingding: contactPoint.ContactPointDingding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.url">url</a></code> | <code>string</code> | The DingDing webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.message">message</a></code> | <code>string</code> | The templated content of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.messageType">messageType</a></code> | <code>string</code> | The format of message to send - either 'link' or 'actionCard'. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.title">title</a></code> | <code>string</code> | The templated title of the message. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The DingDing webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

The format of message to send - either 'link' or 'actionCard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message_type ContactPoint#message_type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointDiscord <a name="ContactPointDiscord" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointDiscord: contactPoint.ContactPointDiscord = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.url">url</a></code> | <code>string</code> | The discord webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | The URL of a custom avatar image to use. Defaults to ``. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.message">message</a></code> | <code>string</code> | The templated content of the message. Defaults to ``. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.title">title</a></code> | <code>string</code> | The templated content of the title. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.useDiscordUsername">useDiscordUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use the bot account's plain username instead of "Grafana." Defaults to `false`. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The discord webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `avatarUrl`<sup>Optional</sup> <a name="avatarUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

The URL of a custom avatar image to use. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#avatar_url ContactPoint#avatar_url}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated content of the title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

##### `useDiscordUsername`<sup>Optional</sup> <a name="useDiscordUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord.property.useDiscordUsername"></a>

```typescript
public readonly useDiscordUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use the bot account's plain username instead of "Grafana." Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#use_discord_username ContactPoint#use_discord_username}

---

### ContactPointEmail <a name="ContactPointEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointEmail: contactPoint.ContactPointEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.addresses">addresses</a></code> | <code>string[]</code> | The addresses to send emails to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.message">message</a></code> | <code>string</code> | The templated content of the email. Defaults to ``. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.singleEmail">singleEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send a single email CC'ing all addresses, rather than a separate email to each address. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.subject">subject</a></code> | <code>string</code> | The templated subject line of the email. Defaults to ``. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

The addresses to send emails to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#addresses ContactPoint#addresses}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the email. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `singleEmail`<sup>Optional</sup> <a name="singleEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.singleEmail"></a>

```typescript
public readonly singleEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send a single email CC'ing all addresses, rather than a separate email to each address.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#single_email ContactPoint#single_email}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The templated subject line of the email. Defaults to ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#subject ContactPoint#subject}

---

### ContactPointGooglechat <a name="ContactPointGooglechat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointGooglechat: contactPoint.ContactPointGooglechat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.url">url</a></code> | <code>string</code> | The Google Chat webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.message">message</a></code> | <code>string</code> | The templated content of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.title">title</a></code> | <code>string</code> | The templated content of the title. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The Google Chat webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated content of the title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointKafka <a name="ContactPointKafka" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointKafka: contactPoint.ContactPointKafka = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.restProxyUrl">restProxyUrl</a></code> | <code>string</code> | The URL of the Kafka REST proxy to send requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.topic">topic</a></code> | <code>string</code> | The name of the Kafka topic to publish to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.apiVersion">apiVersion</a></code> | <code>string</code> | The API version to use when contacting the Kafka REST Server. Supported: v2 (default) and v3. Defaults to `v2`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.clusterId">clusterId</a></code> | <code>string</code> | The Id of cluster to use when contacting the Kafka REST Server. Required api_version to be 'v3'. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.description">description</a></code> | <code>string</code> | The templated description of the Kafka message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.details">details</a></code> | <code>string</code> | The templated details to include with the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.password">password</a></code> | <code>string</code> | The password to use when making a call to the Kafka REST Proxy. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.username">username</a></code> | <code>string</code> | The user name to use when making a call to the Kafka REST Proxy. |

---

##### `restProxyUrl`<sup>Required</sup> <a name="restProxyUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.restProxyUrl"></a>

```typescript
public readonly restProxyUrl: string;
```

- *Type:* string

The URL of the Kafka REST proxy to send requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#rest_proxy_url ContactPoint#rest_proxy_url}

---

##### `topic`<sup>Required</sup> <a name="topic" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The name of the Kafka topic to publish to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#topic ContactPoint#topic}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The API version to use when contacting the Kafka REST Server. Supported: v2 (default) and v3. Defaults to `v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_version ContactPoint#api_version}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The Id of cluster to use when contacting the Kafka REST Server. Required api_version to be 'v3'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#cluster_id ContactPoint#cluster_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The templated description of the Kafka message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#description ContactPoint#description}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

The templated details to include with the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#details ContactPoint#details}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use when making a call to the Kafka REST Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#password ContactPoint#password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to use when making a call to the Kafka REST Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#username ContactPoint#username}

---

### ContactPointLine <a name="ContactPointLine" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointLine: contactPoint.ContactPointLine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.token">token</a></code> | <code>string</code> | The bearer token used to authorize the client. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.description">description</a></code> | <code>string</code> | The templated description of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.title">title</a></code> | <code>string</code> | The templated title of the message. |

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The bearer token used to authorize the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#token ContactPoint#token}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The templated description of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#description ContactPoint#description}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointOncall <a name="ContactPointOncall" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointOncall: contactPoint.ContactPointOncall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.url">url</a></code> | <code>string</code> | The URL to send webhook requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.authorizationCredentials">authorizationCredentials</a></code> | <code>string</code> | Allows a custom authorization scheme - attaches an auth header with this value. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.authorizationScheme">authorizationScheme</a></code> | <code>string</code> | Allows a custom authorization scheme - attaches an auth header with this name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | The username to use in basic auth headers attached to the request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | The username to use in basic auth headers attached to the request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method to use in the request. Defaults to `POST`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.maxAlerts">maxAlerts</a></code> | <code>number</code> | The maximum number of alerts to send in a single request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.message">message</a></code> | <code>string</code> | Custom message. You can use template variables. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.title">title</a></code> | <code>string</code> | Templated title of the message. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to send webhook requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `authorizationCredentials`<sup>Optional</sup> <a name="authorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.authorizationCredentials"></a>

```typescript
public readonly authorizationCredentials: string;
```

- *Type:* string

Allows a custom authorization scheme - attaches an auth header with this value.

Do not use in conjunction with basic auth parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#authorization_credentials ContactPoint#authorization_credentials}

---

##### `authorizationScheme`<sup>Optional</sup> <a name="authorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.authorizationScheme"></a>

```typescript
public readonly authorizationScheme: string;
```

- *Type:* string

Allows a custom authorization scheme - attaches an auth header with this name.

Do not use in conjunction with basic auth parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#authorization_scheme ContactPoint#authorization_scheme}

---

##### `basicAuthPassword`<sup>Optional</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

The username to use in basic auth headers attached to the request.

If omitted, basic auth will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}

---

##### `basicAuthUser`<sup>Optional</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

The username to use in basic auth headers attached to the request.

If omitted, basic auth will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method to use in the request. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#http_method ContactPoint#http_method}

---

##### `maxAlerts`<sup>Optional</sup> <a name="maxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.maxAlerts"></a>

```typescript
public readonly maxAlerts: number;
```

- *Type:* number

The maximum number of alerts to send in a single request.

This can be helpful in limiting the size of the request body. The default is 0, which indicates no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#max_alerts ContactPoint#max_alerts}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Custom message. You can use template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointOpsgenie <a name="ContactPointOpsgenie" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointOpsgenie: contactPoint.ContactPointOpsgenie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.apiKey">apiKey</a></code> | <code>string</code> | The OpsGenie API key to use. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.autoClose">autoClose</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to auto-close alerts in OpsGenie when they resolve in the Alertmanager. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.description">description</a></code> | <code>string</code> | A templated high-level description to use for the alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.message">message</a></code> | <code>string</code> | The templated content of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.overridePriority">overridePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the alert priority to be configured via the value of the `og_priority` annotation on the alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.responders">responders</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]</code> | responders block. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.sendTagsAs">sendTagsAs</a></code> | <code>string</code> | Whether to send annotations to OpsGenie as Tags, Details, or both. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.url">url</a></code> | <code>string</code> | Allows customization of the OpsGenie API URL. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The OpsGenie API key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_key ContactPoint#api_key}

---

##### `autoClose`<sup>Optional</sup> <a name="autoClose" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.autoClose"></a>

```typescript
public readonly autoClose: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to auto-close alerts in OpsGenie when they resolve in the Alertmanager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#auto_close ContactPoint#auto_close}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A templated high-level description to use for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#description ContactPoint#description}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `overridePriority`<sup>Optional</sup> <a name="overridePriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.overridePriority"></a>

```typescript
public readonly overridePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the alert priority to be configured via the value of the `og_priority` annotation on the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#override_priority ContactPoint#override_priority}

---

##### `responders`<sup>Optional</sup> <a name="responders" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.responders"></a>

```typescript
public readonly responders: IResolvable | ContactPointOpsgenieResponders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]

responders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#responders ContactPoint#responders}

---

##### `sendTagsAs`<sup>Optional</sup> <a name="sendTagsAs" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.sendTagsAs"></a>

```typescript
public readonly sendTagsAs: string;
```

- *Type:* string

Whether to send annotations to OpsGenie as Tags, Details, or both.

Supported values are `tags`, `details`, `both`, or empty to use the default behavior of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#send_tags_as ContactPoint#send_tags_as}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Allows customization of the OpsGenie API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

### ContactPointOpsgenieResponders <a name="ContactPointOpsgenieResponders" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointOpsgenieResponders: contactPoint.ContactPointOpsgenieResponders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.type">type</a></code> | <code>string</code> | Type of the responder. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.id">id</a></code> | <code>string</code> | ID of the responder. Must be specified if name and username are empty. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.name">name</a></code> | <code>string</code> | Name of the responder. Must be specified if username and id are empty. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.username">username</a></code> | <code>string</code> | User name of the responder. Must be specified if name and id are empty. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the responder.

Supported: team, teams, user, escalation, schedule or a template that is expanded to one of these values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#type ContactPoint#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the responder. Must be specified if name and username are empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#id ContactPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the responder. Must be specified if username and id are empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#name ContactPoint#name}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

User name of the responder. Must be specified if name and id are empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#username ContactPoint#username}

---

### ContactPointPagerduty <a name="ContactPointPagerduty" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointPagerduty: contactPoint.ContactPointPagerduty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.integrationKey">integrationKey</a></code> | <code>string</code> | The PagerDuty API key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.class">class</a></code> | <code>string</code> | The class or type of event, for example `ping failure`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.client">client</a></code> | <code>string</code> | The name of the monitoring client that is triggering this event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.clientUrl">clientUrl</a></code> | <code>string</code> | The URL of the monitoring client that is triggering this event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.component">component</a></code> | <code>string</code> | The component being affected by the event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.details">details</a></code> | <code>{[ key: string ]: string}</code> | A set of arbitrary key/value pairs that provide further detail about the incident. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.group">group</a></code> | <code>string</code> | The group to which the provided component belongs to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.severity">severity</a></code> | <code>string</code> | The PagerDuty event severity level. Default is `critical`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.source">source</a></code> | <code>string</code> | The unique location of the affected system. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.summary">summary</a></code> | <code>string</code> | The templated summary message of the event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.url">url</a></code> | <code>string</code> | The URL to send API requests to. |

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

The PagerDuty API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#integration_key ContactPoint#integration_key}

---

##### `class`<sup>Optional</sup> <a name="class" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.class"></a>

```typescript
public readonly class: string;
```

- *Type:* string

The class or type of event, for example `ping failure`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#class ContactPoint#class}

---

##### `client`<sup>Optional</sup> <a name="client" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

The name of the monitoring client that is triggering this event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#client ContactPoint#client}

---

##### `clientUrl`<sup>Optional</sup> <a name="clientUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.clientUrl"></a>

```typescript
public readonly clientUrl: string;
```

- *Type:* string

The URL of the monitoring client that is triggering this event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#client_url ContactPoint#client_url}

---

##### `component`<sup>Optional</sup> <a name="component" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

The component being affected by the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#component ContactPoint#component}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.details"></a>

```typescript
public readonly details: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of arbitrary key/value pairs that provide further detail about the incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#details ContactPoint#details}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The group to which the provided component belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#group ContactPoint#group}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The PagerDuty event severity level. Default is `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#severity ContactPoint#severity}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The unique location of the affected system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#source ContactPoint#source}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

The templated summary message of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#summary ContactPoint#summary}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to send API requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

### ContactPointPushover <a name="ContactPointPushover" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointPushover: contactPoint.ContactPointPushover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.apiToken">apiToken</a></code> | <code>string</code> | The Pushover API token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.userKey">userKey</a></code> | <code>string</code> | The Pushover user key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.device">device</a></code> | <code>string</code> | Comma-separated list of devices to which the event is associated. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.expire">expire</a></code> | <code>number</code> | How many seconds for which the notification will continue to be retried by Pushover. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.message">message</a></code> | <code>string</code> | The templated notification message content. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.okPriority">okPriority</a></code> | <code>number</code> | The priority level of the resolved event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.okSound">okSound</a></code> | <code>string</code> | The sound associated with the resolved notification. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.priority">priority</a></code> | <code>number</code> | The priority level of the event. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.retry">retry</a></code> | <code>number</code> | How often, in seconds, the Pushover servers will send the same notification to the user. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.sound">sound</a></code> | <code>string</code> | The sound associated with the notification. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.title">title</a></code> | <code>string</code> | The templated title of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.uploadImage">uploadImage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send images in the notification or not. |

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

The Pushover API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_token ContactPoint#api_token}

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

The Pushover user key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#user_key ContactPoint#user_key}

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

Comma-separated list of devices to which the event is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#device ContactPoint#device}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `expire`<sup>Optional</sup> <a name="expire" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

How many seconds for which the notification will continue to be retried by Pushover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#expire ContactPoint#expire}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated notification message content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `okPriority`<sup>Optional</sup> <a name="okPriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.okPriority"></a>

```typescript
public readonly okPriority: number;
```

- *Type:* number

The priority level of the resolved event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#ok_priority ContactPoint#ok_priority}

---

##### `okSound`<sup>Optional</sup> <a name="okSound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.okSound"></a>

```typescript
public readonly okSound: string;
```

- *Type:* string

The sound associated with the resolved notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#ok_sound ContactPoint#ok_sound}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority level of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#priority ContactPoint#priority}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

How often, in seconds, the Pushover servers will send the same notification to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#retry ContactPoint#retry}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `sound`<sup>Optional</sup> <a name="sound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.sound"></a>

```typescript
public readonly sound: string;
```

- *Type:* string

The sound associated with the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#sound ContactPoint#sound}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

##### `uploadImage`<sup>Optional</sup> <a name="uploadImage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover.property.uploadImage"></a>

```typescript
public readonly uploadImage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send images in the notification or not.

Default is true. Requires Grafana to be configured to send images in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#upload_image ContactPoint#upload_image}

---

### ContactPointSensugo <a name="ContactPointSensugo" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointSensugo: contactPoint.ContactPointSensugo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.apiKey">apiKey</a></code> | <code>string</code> | The SensuGo API key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.url">url</a></code> | <code>string</code> | The SensuGo URL to send requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.check">check</a></code> | <code>string</code> | The SensuGo check to which the event should be routed. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.entity">entity</a></code> | <code>string</code> | The entity being monitored. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.handler">handler</a></code> | <code>string</code> | A custom handler to execute in addition to the check. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.message">message</a></code> | <code>string</code> | Templated message content describing the alert. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which the check resides. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The SensuGo API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_key ContactPoint#api_key}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The SensuGo URL to send requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `check`<sup>Optional</sup> <a name="check" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

The SensuGo check to which the event should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#check ContactPoint#check}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `entity`<sup>Optional</sup> <a name="entity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

The entity being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#entity ContactPoint#entity}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

A custom handler to execute in addition to the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#handler ContactPoint#handler}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Templated message content describing the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which the check resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#namespace ContactPoint#namespace}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

### ContactPointSlack <a name="ContactPointSlack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointSlack: contactPoint.ContactPointSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | Use this to override the Slack API endpoint URL to send requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.iconEmoji">iconEmoji</a></code> | <code>string</code> | The name of a Slack workspace emoji to use as the bot icon. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.iconUrl">iconUrl</a></code> | <code>string</code> | A URL of an image to use as the bot icon. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionChannel">mentionChannel</a></code> | <code>string</code> | Describes how to ping the slack channel that messages are being sent to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionGroups">mentionGroups</a></code> | <code>string</code> | Comma-separated list of groups to mention in the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionUsers">mentionUsers</a></code> | <code>string</code> | Comma-separated list of users to mention in the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.recipient">recipient</a></code> | <code>string</code> | Channel, private group, or IM channel (can be an encoded ID or a name) to send messages to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.text">text</a></code> | <code>string</code> | Templated content of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.title">title</a></code> | <code>string</code> | Templated title of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.token">token</a></code> | <code>string</code> | A Slack API token,for sending messages directly without the webhook method. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.url">url</a></code> | <code>string</code> | A Slack webhook URL,for sending messages via the webhook method. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.username">username</a></code> | <code>string</code> | Username for the bot to use. |

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

Use this to override the Slack API endpoint URL to send requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#endpoint_url ContactPoint#endpoint_url}

---

##### `iconEmoji`<sup>Optional</sup> <a name="iconEmoji" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.iconEmoji"></a>

```typescript
public readonly iconEmoji: string;
```

- *Type:* string

The name of a Slack workspace emoji to use as the bot icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#icon_emoji ContactPoint#icon_emoji}

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

A URL of an image to use as the bot icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#icon_url ContactPoint#icon_url}

---

##### `mentionChannel`<sup>Optional</sup> <a name="mentionChannel" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionChannel"></a>

```typescript
public readonly mentionChannel: string;
```

- *Type:* string

Describes how to ping the slack channel that messages are being sent to.

Options are `here` for an

---

##### `mentionGroups`<sup>Optional</sup> <a name="mentionGroups" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionGroups"></a>

```typescript
public readonly mentionGroups: string;
```

- *Type:* string

Comma-separated list of groups to mention in the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#mention_groups ContactPoint#mention_groups}

---

##### `mentionUsers`<sup>Optional</sup> <a name="mentionUsers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.mentionUsers"></a>

```typescript
public readonly mentionUsers: string;
```

- *Type:* string

Comma-separated list of users to mention in the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#mention_users ContactPoint#mention_users}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

Channel, private group, or IM channel (can be an encoded ID or a name) to send messages to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#recipient ContactPoint#recipient}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Templated content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#text ContactPoint#text}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

##### `token`<sup>Optional</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

A Slack API token,for sending messages directly without the webhook method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#token ContactPoint#token}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A Slack webhook URL,for sending messages via the webhook method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the bot to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#username ContactPoint#username}

---

### ContactPointSns <a name="ContactPointSns" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointSns: contactPoint.ContactPointSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.topic">topic</a></code> | <code>string</code> | The Amazon SNS topic to send notifications to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.accessKey">accessKey</a></code> | <code>string</code> | AWS access key ID used to authenticate with Amazon SNS. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.assumeRoleArn">assumeRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to assume to send notifications to Amazon SNS. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.authProvider">authProvider</a></code> | <code>string</code> | The authentication provider to use. Valid values are `default`, `arn` and `keys`. Default is `default`. Defaults to `default`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#body ContactPoint#body}. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.externalId">externalId</a></code> | <code>string</code> | The external ID to use when assuming the role. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.messageFormat">messageFormat</a></code> | <code>string</code> | The format of the message to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.secretKey">secretKey</a></code> | <code>string</code> | AWS secret access key used to authenticate with Amazon SNS. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#subject ContactPoint#subject}. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The Amazon SNS topic to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#topic ContactPoint#topic}

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

AWS access key ID used to authenticate with Amazon SNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#access_key ContactPoint#access_key}

---

##### `assumeRoleArn`<sup>Optional</sup> <a name="assumeRoleArn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to assume to send notifications to Amazon SNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#assume_role_arn ContactPoint#assume_role_arn}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

The authentication provider to use. Valid values are `default`, `arn` and `keys`. Default is `default`. Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#auth_provider ContactPoint#auth_provider}

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#body ContactPoint#body}.

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

The external ID to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#external_id ContactPoint#external_id}

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

The format of the message to send.

Valid values are `text`, `body` and `json`. Default is `text`. Defaults to `text`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message_format ContactPoint#message_format}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

AWS secret access key used to authenticate with Amazon SNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#secret_key ContactPoint#secret_key}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#subject ContactPoint#subject}.

---

### ContactPointTeams <a name="ContactPointTeams" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointTeams: contactPoint.ContactPointTeams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.url">url</a></code> | <code>string</code> | A Teams webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.message">message</a></code> | <code>string</code> | The templated message content to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.sectionTitle">sectionTitle</a></code> | <code>string</code> | The templated subtitle for each message section. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.title">title</a></code> | <code>string</code> | The templated title of the message. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A Teams webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated message content to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `sectionTitle`<sup>Optional</sup> <a name="sectionTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.sectionTitle"></a>

```typescript
public readonly sectionTitle: string;
```

- *Type:* string

The templated subtitle for each message section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#section_title ContactPoint#section_title}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointTelegram <a name="ContactPointTelegram" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointTelegram: contactPoint.ContactPointTelegram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.chatId">chatId</a></code> | <code>string</code> | The chat ID to send messages to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.token">token</a></code> | <code>string</code> | The Telegram bot token. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableNotifications">disableNotifications</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set users will receive a notification with no sound. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableWebPagePreview">disableWebPagePreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set it disables link previews for links in the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.message">message</a></code> | <code>string</code> | The templated content of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.messageThreadId">messageThreadId</a></code> | <code>string</code> | The ID of the message thread to send the message to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.parseMode">parseMode</a></code> | <code>string</code> | Mode for parsing entities in the message text. Supported: None, Markdown, MarkdownV2, and HTML. HTML is the default. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.protectContent">protectContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set it protects the contents of the message from forwarding and saving. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |

---

##### `chatId`<sup>Required</sup> <a name="chatId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.chatId"></a>

```typescript
public readonly chatId: string;
```

- *Type:* string

The chat ID to send messages to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#chat_id ContactPoint#chat_id}

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The Telegram bot token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#token ContactPoint#token}

---

##### `disableNotifications`<sup>Optional</sup> <a name="disableNotifications" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableNotifications"></a>

```typescript
public readonly disableNotifications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set users will receive a notification with no sound.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_notifications ContactPoint#disable_notifications}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `disableWebPagePreview`<sup>Optional</sup> <a name="disableWebPagePreview" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.disableWebPagePreview"></a>

```typescript
public readonly disableWebPagePreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set it disables link previews for links in the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_web_page_preview ContactPoint#disable_web_page_preview}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `messageThreadId`<sup>Optional</sup> <a name="messageThreadId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.messageThreadId"></a>

```typescript
public readonly messageThreadId: string;
```

- *Type:* string

The ID of the message thread to send the message to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message_thread_id ContactPoint#message_thread_id}

---

##### `parseMode`<sup>Optional</sup> <a name="parseMode" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.parseMode"></a>

```typescript
public readonly parseMode: string;
```

- *Type:* string

Mode for parsing entities in the message text. Supported: None, Markdown, MarkdownV2, and HTML. HTML is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#parse_mode ContactPoint#parse_mode}

---

##### `protectContent`<sup>Optional</sup> <a name="protectContent" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.protectContent"></a>

```typescript
public readonly protectContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set it protects the contents of the message from forwarding and saving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#protect_content ContactPoint#protect_content}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

### ContactPointThreema <a name="ContactPointThreema" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointThreema: contactPoint.ContactPointThreema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.apiSecret">apiSecret</a></code> | <code>string</code> | The Threema API key. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.gatewayId">gatewayId</a></code> | <code>string</code> | The Threema gateway ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.recipientId">recipientId</a></code> | <code>string</code> | The ID of the recipient of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.description">description</a></code> | <code>string</code> | The templated description of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.title">title</a></code> | <code>string</code> | The templated title of the message. |

---

##### `apiSecret`<sup>Required</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.apiSecret"></a>

```typescript
public readonly apiSecret: string;
```

- *Type:* string

The Threema API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_secret ContactPoint#api_secret}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The Threema gateway ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#gateway_id ContactPoint#gateway_id}

---

##### `recipientId`<sup>Required</sup> <a name="recipientId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.recipientId"></a>

```typescript
public readonly recipientId: string;
```

- *Type:* string

The ID of the recipient of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#recipient_id ContactPoint#recipient_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The templated description of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#description ContactPoint#description}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointVictorops <a name="ContactPointVictorops" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointVictorops: contactPoint.ContactPointVictorops = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.url">url</a></code> | <code>string</code> | The VictorOps webhook URL. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.description">description</a></code> | <code>string</code> | Templated description of the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.messageType">messageType</a></code> | <code>string</code> | The VictorOps alert state - typically either `CRITICAL` or `RECOVERY`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.title">title</a></code> | <code>string</code> | Templated title to display. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The VictorOps webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Templated description of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#description ContactPoint#description}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

The VictorOps alert state - typically either `CRITICAL` or `RECOVERY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message_type ContactPoint#message_type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Templated title to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointWebex <a name="ContactPointWebex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointWebex: contactPoint.ContactPointWebex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.apiUrl">apiUrl</a></code> | <code>string</code> | The URL to send webhook requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.message">message</a></code> | <code>string</code> | The templated title of the message to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.roomId">roomId</a></code> | <code>string</code> | ID of the Webex Teams room where to send the messages. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.token">token</a></code> | <code>string</code> | The bearer token used to authorize the client. |

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

The URL to send webhook requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#api_url ContactPoint#api_url}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated title of the message to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `roomId`<sup>Optional</sup> <a name="roomId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.roomId"></a>

```typescript
public readonly roomId: string;
```

- *Type:* string

ID of the Webex Teams room where to send the messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#room_id ContactPoint#room_id}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `token`<sup>Optional</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The bearer token used to authorize the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#token ContactPoint#token}

---

### ContactPointWebhook <a name="ContactPointWebhook" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointWebhook: contactPoint.ContactPointWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.url">url</a></code> | <code>string</code> | The URL to send webhook requests to. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.authorizationCredentials">authorizationCredentials</a></code> | <code>string</code> | Allows a custom authorization scheme - attaches an auth header with this value. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.authorizationScheme">authorizationScheme</a></code> | <code>string</code> | Allows a custom authorization scheme - attaches an auth header with this name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | The username to use in basic auth headers attached to the request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | The username to use in basic auth headers attached to the request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method to use in the request. Defaults to `POST`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.maxAlerts">maxAlerts</a></code> | <code>number</code> | The maximum number of alerts to send in a single request. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.message">message</a></code> | <code>string</code> | Custom message. You can use template variables. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.title">title</a></code> | <code>string</code> | Templated title of the message. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to send webhook requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

##### `authorizationCredentials`<sup>Optional</sup> <a name="authorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.authorizationCredentials"></a>

```typescript
public readonly authorizationCredentials: string;
```

- *Type:* string

Allows a custom authorization scheme - attaches an auth header with this value.

Do not use in conjunction with basic auth parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#authorization_credentials ContactPoint#authorization_credentials}

---

##### `authorizationScheme`<sup>Optional</sup> <a name="authorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.authorizationScheme"></a>

```typescript
public readonly authorizationScheme: string;
```

- *Type:* string

Allows a custom authorization scheme - attaches an auth header with this name.

Do not use in conjunction with basic auth parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#authorization_scheme ContactPoint#authorization_scheme}

---

##### `basicAuthPassword`<sup>Optional</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

The username to use in basic auth headers attached to the request.

If omitted, basic auth will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_password ContactPoint#basic_auth_password}

---

##### `basicAuthUser`<sup>Optional</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

The username to use in basic auth headers attached to the request.

If omitted, basic auth will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#basic_auth_user ContactPoint#basic_auth_user}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method to use in the request. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#http_method ContactPoint#http_method}

---

##### `maxAlerts`<sup>Optional</sup> <a name="maxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.maxAlerts"></a>

```typescript
public readonly maxAlerts: number;
```

- *Type:* number

The maximum number of alerts to send in a single request.

This can be helpful in limiting the size of the request body. The default is 0, which indicates no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#max_alerts ContactPoint#max_alerts}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Custom message. You can use template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Templated title of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

### ContactPointWecom <a name="ContactPointWecom" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

const contactPointWecom: contactPoint.ContactPointWecom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.agentId">agentId</a></code> | <code>string</code> | Agent ID added to the request payload when using APIAPP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.corpId">corpId</a></code> | <code>string</code> | Corp ID used to get token when using APIAPP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable sending resolve messages. Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.message">message</a></code> | <code>string</code> | The templated content of the message to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.msgType">msgType</a></code> | <code>string</code> | The type of them message. Supported: markdown, text. Default: text. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.secret">secret</a></code> | <code>string</code> | The secret key required to obtain access token when using APIAPP. See https://work.weixin.qq.com/wework_admin/frame#apps to create APIAPP. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | Additional custom properties to attach to the notifier. Defaults to `map[]`. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.title">title</a></code> | <code>string</code> | The templated title of the message to send. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.toUser">toUser</a></code> | <code>string</code> | The ID of user that should receive the message. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.url">url</a></code> | <code>string</code> | The WeCom webhook URL. Required if using GroupRobot. |

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Agent ID added to the request payload when using APIAPP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#agent_id ContactPoint#agent_id}

---

##### `corpId`<sup>Optional</sup> <a name="corpId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.corpId"></a>

```typescript
public readonly corpId: string;
```

- *Type:* string

Corp ID used to get token when using APIAPP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#corp_id ContactPoint#corp_id}

---

##### `disableResolveMessage`<sup>Optional</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable sending resolve messages. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#disable_resolve_message ContactPoint#disable_resolve_message}

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The templated content of the message to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#message ContactPoint#message}

---

##### `msgType`<sup>Optional</sup> <a name="msgType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.msgType"></a>

```typescript
public readonly msgType: string;
```

- *Type:* string

The type of them message. Supported: markdown, text. Default: text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#msg_type ContactPoint#msg_type}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The secret key required to obtain access token when using APIAPP. See https://work.weixin.qq.com/wework_admin/frame#apps to create APIAPP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#secret ContactPoint#secret}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional custom properties to attach to the notifier. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#settings ContactPoint#settings}

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The templated title of the message to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#title ContactPoint#title}

---

##### `toUser`<sup>Optional</sup> <a name="toUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.toUser"></a>

```typescript
public readonly toUser: string;
```

- *Type:* string

The ID of user that should receive the message.

Multiple entries should be separated by '|'. Default:

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The WeCom webhook URL. Required if using GroupRobot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/contact_point#url ContactPoint#url}

---

## Classes <a name="Classes" id="Classes"></a>

### ContactPointAlertmanagerList <a name="ContactPointAlertmanagerList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointAlertmanagerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.get"></a>

```typescript
public get(index: number): ContactPointAlertmanagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointAlertmanager[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>[]

---


### ContactPointAlertmanagerOutputReference <a name="ContactPointAlertmanagerOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointAlertmanagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetBasicAuthPassword">resetBasicAuthPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetBasicAuthUser">resetBasicAuthUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasicAuthPassword` <a name="resetBasicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetBasicAuthPassword"></a>

```typescript
public resetBasicAuthPassword(): void
```

##### `resetBasicAuthUser` <a name="resetBasicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetBasicAuthUser"></a>

```typescript
public resetBasicAuthUser(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthPasswordInput">basicAuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthUserInput">basicAuthUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `basicAuthPasswordInput`<sup>Optional</sup> <a name="basicAuthPasswordInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthPasswordInput"></a>

```typescript
public readonly basicAuthPasswordInput: string;
```

- *Type:* string

---

##### `basicAuthUserInput`<sup>Optional</sup> <a name="basicAuthUserInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthUserInput"></a>

```typescript
public readonly basicAuthUserInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `basicAuthPassword`<sup>Required</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

---

##### `basicAuthUser`<sup>Required</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointAlertmanager;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointAlertmanager">ContactPointAlertmanager</a>

---


### ContactPointDingdingList <a name="ContactPointDingdingList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointDingdingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.get"></a>

```typescript
public get(index: number): ContactPointDingdingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointDingding[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>[]

---


### ContactPointDingdingOutputReference <a name="ContactPointDingdingOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointDingdingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMessageType` <a name="resetMessageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetMessageType"></a>

```typescript
public resetMessageType(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingdingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointDingding;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDingding">ContactPointDingding</a>

---


### ContactPointDiscordList <a name="ContactPointDiscordList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointDiscordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.get"></a>

```typescript
public get(index: number): ContactPointDiscordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointDiscord[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>[]

---


### ContactPointDiscordOutputReference <a name="ContactPointDiscordOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointDiscordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetAvatarUrl">resetAvatarUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetUseDiscordUsername">resetUseDiscordUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvatarUrl` <a name="resetAvatarUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetAvatarUrl"></a>

```typescript
public resetAvatarUrl(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUseDiscordUsername` <a name="resetUseDiscordUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.resetUseDiscordUsername"></a>

```typescript
public resetUseDiscordUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.avatarUrlInput">avatarUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.useDiscordUsernameInput">useDiscordUsernameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.useDiscordUsername">useDiscordUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `avatarUrlInput`<sup>Optional</sup> <a name="avatarUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.avatarUrlInput"></a>

```typescript
public readonly avatarUrlInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `useDiscordUsernameInput`<sup>Optional</sup> <a name="useDiscordUsernameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.useDiscordUsernameInput"></a>

```typescript
public readonly useDiscordUsernameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `useDiscordUsername`<sup>Required</sup> <a name="useDiscordUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.useDiscordUsername"></a>

```typescript
public readonly useDiscordUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointDiscord;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointDiscord">ContactPointDiscord</a>

---


### ContactPointEmailList <a name="ContactPointEmailList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointEmailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.get"></a>

```typescript
public get(index: number): ContactPointEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointEmail[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>[]

---


### ContactPointEmailOutputReference <a name="ContactPointEmailOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSingleEmail">resetSingleEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetSingleEmail` <a name="resetSingleEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSingleEmail"></a>

```typescript
public resetSingleEmail(): void
```

##### `resetSubject` <a name="resetSubject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.singleEmailInput">singleEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.singleEmail">singleEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `singleEmailInput`<sup>Optional</sup> <a name="singleEmailInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.singleEmailInput"></a>

```typescript
public readonly singleEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `singleEmail`<sup>Required</sup> <a name="singleEmail" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.singleEmail"></a>

```typescript
public readonly singleEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointEmail;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointEmail">ContactPointEmail</a>

---


### ContactPointGooglechatList <a name="ContactPointGooglechatList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointGooglechatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.get"></a>

```typescript
public get(index: number): ContactPointGooglechatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointGooglechat[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>[]

---


### ContactPointGooglechatOutputReference <a name="ContactPointGooglechatOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointGooglechatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointGooglechat;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointGooglechat">ContactPointGooglechat</a>

---


### ContactPointKafkaList <a name="ContactPointKafkaList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointKafkaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.get"></a>

```typescript
public get(index: number): ContactPointKafkaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointKafka[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>[]

---


### ContactPointKafkaOutputReference <a name="ContactPointKafkaOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointKafkaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetApiVersion"></a>

```typescript
public resetApiVersion(): void
```

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDetails` <a name="resetDetails" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.detailsInput">detailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.restProxyUrlInput">restProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.restProxyUrl">restProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.detailsInput"></a>

```typescript
public readonly detailsInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `restProxyUrlInput`<sup>Optional</sup> <a name="restProxyUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.restProxyUrlInput"></a>

```typescript
public readonly restProxyUrlInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `restProxyUrl`<sup>Required</sup> <a name="restProxyUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.restProxyUrl"></a>

```typescript
public readonly restProxyUrl: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `topic`<sup>Required</sup> <a name="topic" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafkaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointKafka;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointKafka">ContactPointKafka</a>

---


### ContactPointLineList <a name="ContactPointLineList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointLineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.get"></a>

```typescript
public get(index: number): ContactPointLineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointLine[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>[]

---


### ContactPointLineOutputReference <a name="ContactPointLineOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointLineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointLine;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointLine">ContactPointLine</a>

---


### ContactPointOncallList <a name="ContactPointOncallList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOncallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.get"></a>

```typescript
public get(index: number): ContactPointOncallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOncall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>[]

---


### ContactPointOncallOutputReference <a name="ContactPointOncallOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOncallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetAuthorizationCredentials">resetAuthorizationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetAuthorizationScheme">resetAuthorizationScheme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetBasicAuthPassword">resetBasicAuthPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetBasicAuthUser">resetBasicAuthUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetMaxAlerts">resetMaxAlerts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationCredentials` <a name="resetAuthorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetAuthorizationCredentials"></a>

```typescript
public resetAuthorizationCredentials(): void
```

##### `resetAuthorizationScheme` <a name="resetAuthorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetAuthorizationScheme"></a>

```typescript
public resetAuthorizationScheme(): void
```

##### `resetBasicAuthPassword` <a name="resetBasicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetBasicAuthPassword"></a>

```typescript
public resetBasicAuthPassword(): void
```

##### `resetBasicAuthUser` <a name="resetBasicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetBasicAuthUser"></a>

```typescript
public resetBasicAuthUser(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetMaxAlerts` <a name="resetMaxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetMaxAlerts"></a>

```typescript
public resetMaxAlerts(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationCredentialsInput">authorizationCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationSchemeInput">authorizationSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthPasswordInput">basicAuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthUserInput">basicAuthUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.maxAlertsInput">maxAlertsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationCredentials">authorizationCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationScheme">authorizationScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.maxAlerts">maxAlerts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `authorizationCredentialsInput`<sup>Optional</sup> <a name="authorizationCredentialsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationCredentialsInput"></a>

```typescript
public readonly authorizationCredentialsInput: string;
```

- *Type:* string

---

##### `authorizationSchemeInput`<sup>Optional</sup> <a name="authorizationSchemeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationSchemeInput"></a>

```typescript
public readonly authorizationSchemeInput: string;
```

- *Type:* string

---

##### `basicAuthPasswordInput`<sup>Optional</sup> <a name="basicAuthPasswordInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthPasswordInput"></a>

```typescript
public readonly basicAuthPasswordInput: string;
```

- *Type:* string

---

##### `basicAuthUserInput`<sup>Optional</sup> <a name="basicAuthUserInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthUserInput"></a>

```typescript
public readonly basicAuthUserInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `maxAlertsInput`<sup>Optional</sup> <a name="maxAlertsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.maxAlertsInput"></a>

```typescript
public readonly maxAlertsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authorizationCredentials`<sup>Required</sup> <a name="authorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationCredentials"></a>

```typescript
public readonly authorizationCredentials: string;
```

- *Type:* string

---

##### `authorizationScheme`<sup>Required</sup> <a name="authorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.authorizationScheme"></a>

```typescript
public readonly authorizationScheme: string;
```

- *Type:* string

---

##### `basicAuthPassword`<sup>Required</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

---

##### `basicAuthUser`<sup>Required</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `maxAlerts`<sup>Required</sup> <a name="maxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.maxAlerts"></a>

```typescript
public readonly maxAlerts: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOncall;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOncall">ContactPointOncall</a>

---


### ContactPointOpsgenieList <a name="ContactPointOpsgenieList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOpsgenieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.get"></a>

```typescript
public get(index: number): ContactPointOpsgenieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOpsgenie[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>[]

---


### ContactPointOpsgenieOutputReference <a name="ContactPointOpsgenieOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOpsgenieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.putResponders">putResponders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetAutoClose">resetAutoClose</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetOverridePriority">resetOverridePriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetResponders">resetResponders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetSendTagsAs">resetSendTagsAs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponders` <a name="putResponders" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.putResponders"></a>

```typescript
public putResponders(value: IResolvable | ContactPointOpsgenieResponders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.putResponders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]

---

##### `resetAutoClose` <a name="resetAutoClose" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetAutoClose"></a>

```typescript
public resetAutoClose(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetOverridePriority` <a name="resetOverridePriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetOverridePriority"></a>

```typescript
public resetOverridePriority(): void
```

##### `resetResponders` <a name="resetResponders" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetResponders"></a>

```typescript
public resetResponders(): void
```

##### `resetSendTagsAs` <a name="resetSendTagsAs" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetSendTagsAs"></a>

```typescript
public resetSendTagsAs(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.responders">responders</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList">ContactPointOpsgenieRespondersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.autoCloseInput">autoCloseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.overridePriorityInput">overridePriorityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.respondersInput">respondersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.sendTagsAsInput">sendTagsAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.autoClose">autoClose</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.overridePriority">overridePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.sendTagsAs">sendTagsAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responders`<sup>Required</sup> <a name="responders" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.responders"></a>

```typescript
public readonly responders: ContactPointOpsgenieRespondersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList">ContactPointOpsgenieRespondersList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `autoCloseInput`<sup>Optional</sup> <a name="autoCloseInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.autoCloseInput"></a>

```typescript
public readonly autoCloseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `overridePriorityInput`<sup>Optional</sup> <a name="overridePriorityInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.overridePriorityInput"></a>

```typescript
public readonly overridePriorityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `respondersInput`<sup>Optional</sup> <a name="respondersInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.respondersInput"></a>

```typescript
public readonly respondersInput: IResolvable | ContactPointOpsgenieResponders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]

---

##### `sendTagsAsInput`<sup>Optional</sup> <a name="sendTagsAsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.sendTagsAsInput"></a>

```typescript
public readonly sendTagsAsInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `autoClose`<sup>Required</sup> <a name="autoClose" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.autoClose"></a>

```typescript
public readonly autoClose: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `overridePriority`<sup>Required</sup> <a name="overridePriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.overridePriority"></a>

```typescript
public readonly overridePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendTagsAs`<sup>Required</sup> <a name="sendTagsAs" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.sendTagsAs"></a>

```typescript
public readonly sendTagsAs: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOpsgenie;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenie">ContactPointOpsgenie</a>

---


### ContactPointOpsgenieRespondersList <a name="ContactPointOpsgenieRespondersList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOpsgenieRespondersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.get"></a>

```typescript
public get(index: number): ContactPointOpsgenieRespondersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOpsgenieResponders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>[]

---


### ContactPointOpsgenieRespondersOutputReference <a name="ContactPointOpsgenieRespondersOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointOpsgenieRespondersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieRespondersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointOpsgenieResponders;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointOpsgenieResponders">ContactPointOpsgenieResponders</a>

---


### ContactPointPagerdutyList <a name="ContactPointPagerdutyList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointPagerdutyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.get"></a>

```typescript
public get(index: number): ContactPointPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointPagerduty[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>[]

---


### ContactPointPagerdutyOutputReference <a name="ContactPointPagerdutyOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClass">resetClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClientUrl">resetClientUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetComponent">resetComponent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClass` <a name="resetClass" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClass"></a>

```typescript
public resetClass(): void
```

##### `resetClient` <a name="resetClient" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientUrl` <a name="resetClientUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetClientUrl"></a>

```typescript
public resetClientUrl(): void
```

##### `resetComponent` <a name="resetComponent" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetComponent"></a>

```typescript
public resetComponent(): void
```

##### `resetDetails` <a name="resetDetails" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetGroup` <a name="resetGroup" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSummary` <a name="resetSummary" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.classInput">classInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientUrlInput">clientUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.componentInput">componentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.detailsInput">detailsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.class">class</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientUrl">clientUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.details">details</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `classInput`<sup>Optional</sup> <a name="classInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.classInput"></a>

```typescript
public readonly classInput: string;
```

- *Type:* string

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientUrlInput`<sup>Optional</sup> <a name="clientUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientUrlInput"></a>

```typescript
public readonly clientUrlInput: string;
```

- *Type:* string

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.componentInput"></a>

```typescript
public readonly componentInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.detailsInput"></a>

```typescript
public readonly detailsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `class`<sup>Required</sup> <a name="class" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.class"></a>

```typescript
public readonly class: string;
```

- *Type:* string

---

##### `client`<sup>Required</sup> <a name="client" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientUrl`<sup>Required</sup> <a name="clientUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.clientUrl"></a>

```typescript
public readonly clientUrl: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.details"></a>

```typescript
public readonly details: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointPagerduty;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPagerduty">ContactPointPagerduty</a>

---


### ContactPointPushoverList <a name="ContactPointPushoverList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointPushoverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.get"></a>

```typescript
public get(index: number): ContactPointPushoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointPushover[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>[]

---


### ContactPointPushoverOutputReference <a name="ContactPointPushoverOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointPushoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetExpire">resetExpire</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetOkPriority">resetOkPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetOkSound">resetOkSound</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetSound">resetSound</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetUploadImage">resetUploadImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevice` <a name="resetDevice" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetExpire` <a name="resetExpire" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetExpire"></a>

```typescript
public resetExpire(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetOkPriority` <a name="resetOkPriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetOkPriority"></a>

```typescript
public resetOkPriority(): void
```

##### `resetOkSound` <a name="resetOkSound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetOkSound"></a>

```typescript
public resetOkSound(): void
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRetry` <a name="resetRetry" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetSound` <a name="resetSound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetSound"></a>

```typescript
public resetSound(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUploadImage` <a name="resetUploadImage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.resetUploadImage"></a>

```typescript
public resetUploadImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.expireInput">expireInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okPriorityInput">okPriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okSoundInput">okSoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.retryInput">retryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.soundInput">soundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uploadImageInput">uploadImageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.userKeyInput">userKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.expire">expire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okPriority">okPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okSound">okSound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.retry">retry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.sound">sound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uploadImage">uploadImage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.userKey">userKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.expireInput"></a>

```typescript
public readonly expireInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `okPriorityInput`<sup>Optional</sup> <a name="okPriorityInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okPriorityInput"></a>

```typescript
public readonly okPriorityInput: number;
```

- *Type:* number

---

##### `okSoundInput`<sup>Optional</sup> <a name="okSoundInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okSoundInput"></a>

```typescript
public readonly okSoundInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: number;
```

- *Type:* number

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `soundInput`<sup>Optional</sup> <a name="soundInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.soundInput"></a>

```typescript
public readonly soundInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `uploadImageInput`<sup>Optional</sup> <a name="uploadImageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uploadImageInput"></a>

```typescript
public readonly uploadImageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userKeyInput`<sup>Optional</sup> <a name="userKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.userKeyInput"></a>

```typescript
public readonly userKeyInput: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expire`<sup>Required</sup> <a name="expire" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `okPriority`<sup>Required</sup> <a name="okPriority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okPriority"></a>

```typescript
public readonly okPriority: number;
```

- *Type:* number

---

##### `okSound`<sup>Required</sup> <a name="okSound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.okSound"></a>

```typescript
public readonly okSound: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `retry`<sup>Required</sup> <a name="retry" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sound`<sup>Required</sup> <a name="sound" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.sound"></a>

```typescript
public readonly sound: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `uploadImage`<sup>Required</sup> <a name="uploadImage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.uploadImage"></a>

```typescript
public readonly uploadImage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointPushover;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointPushover">ContactPointPushover</a>

---


### ContactPointSensugoList <a name="ContactPointSensugoList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSensugoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.get"></a>

```typescript
public get(index: number): ContactPointSensugoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSensugo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>[]

---


### ContactPointSensugoOutputReference <a name="ContactPointSensugoOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSensugoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetCheck">resetCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetEntity">resetEntity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheck` <a name="resetCheck" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetCheck"></a>

```typescript
public resetCheck(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetEntity` <a name="resetEntity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetEntity"></a>

```typescript
public resetEntity(): void
```

##### `resetHandler` <a name="resetHandler" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.checkInput">checkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.entityInput">entityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.entity">entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.checkInput"></a>

```typescript
public readonly checkInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.entityInput"></a>

```typescript
public readonly entityInput: string;
```

- *Type:* string

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entity`<sup>Required</sup> <a name="entity" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSensugo;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSensugo">ContactPointSensugo</a>

---


### ContactPointSlackList <a name="ContactPointSlackList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSlackList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.get"></a>

```typescript
public get(index: number): ContactPointSlackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSlack[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>[]

---


### ContactPointSlackOutputReference <a name="ContactPointSlackOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetIconEmoji">resetIconEmoji</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionChannel">resetMentionChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionGroups">resetMentionGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionUsers">resetMentionUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl(): void
```

##### `resetIconEmoji` <a name="resetIconEmoji" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetIconEmoji"></a>

```typescript
public resetIconEmoji(): void
```

##### `resetIconUrl` <a name="resetIconUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetIconUrl"></a>

```typescript
public resetIconUrl(): void
```

##### `resetMentionChannel` <a name="resetMentionChannel" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionChannel"></a>

```typescript
public resetMentionChannel(): void
```

##### `resetMentionGroups` <a name="resetMentionGroups" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionGroups"></a>

```typescript
public resetMentionGroups(): void
```

##### `resetMentionUsers` <a name="resetMentionUsers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetMentionUsers"></a>

```typescript
public resetMentionUsers(): void
```

##### `resetRecipient` <a name="resetRecipient" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetRecipient"></a>

```typescript
public resetRecipient(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetText` <a name="resetText" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetToken` <a name="resetToken" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.endpointUrlInput">endpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconEmojiInput">iconEmojiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconUrlInput">iconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionChannelInput">mentionChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionGroupsInput">mentionGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionUsersInput">mentionUsersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.recipientInput">recipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconEmoji">iconEmoji</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconUrl">iconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionChannel">mentionChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionGroups">mentionGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionUsers">mentionUsers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.recipient">recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* string

---

##### `iconEmojiInput`<sup>Optional</sup> <a name="iconEmojiInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconEmojiInput"></a>

```typescript
public readonly iconEmojiInput: string;
```

- *Type:* string

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconUrlInput"></a>

```typescript
public readonly iconUrlInput: string;
```

- *Type:* string

---

##### `mentionChannelInput`<sup>Optional</sup> <a name="mentionChannelInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionChannelInput"></a>

```typescript
public readonly mentionChannelInput: string;
```

- *Type:* string

---

##### `mentionGroupsInput`<sup>Optional</sup> <a name="mentionGroupsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionGroupsInput"></a>

```typescript
public readonly mentionGroupsInput: string;
```

- *Type:* string

---

##### `mentionUsersInput`<sup>Optional</sup> <a name="mentionUsersInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionUsersInput"></a>

```typescript
public readonly mentionUsersInput: string;
```

- *Type:* string

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.recipientInput"></a>

```typescript
public readonly recipientInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `iconEmoji`<sup>Required</sup> <a name="iconEmoji" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconEmoji"></a>

```typescript
public readonly iconEmoji: string;
```

- *Type:* string

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

---

##### `mentionChannel`<sup>Required</sup> <a name="mentionChannel" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionChannel"></a>

```typescript
public readonly mentionChannel: string;
```

- *Type:* string

---

##### `mentionGroups`<sup>Required</sup> <a name="mentionGroups" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionGroups"></a>

```typescript
public readonly mentionGroups: string;
```

- *Type:* string

---

##### `mentionUsers`<sup>Required</sup> <a name="mentionUsers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.mentionUsers"></a>

```typescript
public readonly mentionUsers: string;
```

- *Type:* string

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSlack;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSlack">ContactPointSlack</a>

---


### ContactPointSnsList <a name="ContactPointSnsList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.get"></a>

```typescript
public get(index: number): ContactPointSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSns[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>[]

---


### ContactPointSnsOutputReference <a name="ContactPointSnsOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAssumeRoleArn">resetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAssumeRoleArn` <a name="resetAssumeRoleArn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAssumeRoleArn"></a>

```typescript
public resetAssumeRoleArn(): void
```

##### `resetAuthProvider` <a name="resetAuthProvider" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetAuthProvider"></a>

```typescript
public resetAuthProvider(): void
```

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetSubject` <a name="resetSubject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.assumeRoleArnInput">assumeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.authProviderInput">authProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.assumeRoleArn">assumeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.authProvider">authProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `assumeRoleArnInput`<sup>Optional</sup> <a name="assumeRoleArnInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.assumeRoleArnInput"></a>

```typescript
public readonly assumeRoleArnInput: string;
```

- *Type:* string

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.authProviderInput"></a>

```typescript
public readonly authProviderInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `assumeRoleArn`<sup>Required</sup> <a name="assumeRoleArn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* string

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointSns;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointSns">ContactPointSns</a>

---


### ContactPointTeamsList <a name="ContactPointTeamsList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointTeamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.get"></a>

```typescript
public get(index: number): ContactPointTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointTeams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>[]

---


### ContactPointTeamsOutputReference <a name="ContactPointTeamsOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetSectionTitle">resetSectionTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSectionTitle` <a name="resetSectionTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetSectionTitle"></a>

```typescript
public resetSectionTitle(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.sectionTitleInput">sectionTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.sectionTitle">sectionTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `sectionTitleInput`<sup>Optional</sup> <a name="sectionTitleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.sectionTitleInput"></a>

```typescript
public readonly sectionTitleInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `sectionTitle`<sup>Required</sup> <a name="sectionTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.sectionTitle"></a>

```typescript
public readonly sectionTitle: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointTeams;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTeams">ContactPointTeams</a>

---


### ContactPointTelegramList <a name="ContactPointTelegramList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointTelegramList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.get"></a>

```typescript
public get(index: number): ContactPointTelegramOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointTelegram[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>[]

---


### ContactPointTelegramOutputReference <a name="ContactPointTelegramOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointTelegramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableNotifications">resetDisableNotifications</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableWebPagePreview">resetDisableWebPagePreview</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetMessageThreadId">resetMessageThreadId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetParseMode">resetParseMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetProtectContent">resetProtectContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableNotifications` <a name="resetDisableNotifications" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableNotifications"></a>

```typescript
public resetDisableNotifications(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetDisableWebPagePreview` <a name="resetDisableWebPagePreview" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetDisableWebPagePreview"></a>

```typescript
public resetDisableWebPagePreview(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMessageThreadId` <a name="resetMessageThreadId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetMessageThreadId"></a>

```typescript
public resetMessageThreadId(): void
```

##### `resetParseMode` <a name="resetParseMode" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetParseMode"></a>

```typescript
public resetParseMode(): void
```

##### `resetProtectContent` <a name="resetProtectContent" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetProtectContent"></a>

```typescript
public resetProtectContent(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.chatIdInput">chatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableNotificationsInput">disableNotificationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableWebPagePreviewInput">disableWebPagePreviewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageThreadIdInput">messageThreadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.parseModeInput">parseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.protectContentInput">protectContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.chatId">chatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableNotifications">disableNotifications</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableWebPagePreview">disableWebPagePreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageThreadId">messageThreadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.parseMode">parseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.protectContent">protectContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `chatIdInput`<sup>Optional</sup> <a name="chatIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.chatIdInput"></a>

```typescript
public readonly chatIdInput: string;
```

- *Type:* string

---

##### `disableNotificationsInput`<sup>Optional</sup> <a name="disableNotificationsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableNotificationsInput"></a>

```typescript
public readonly disableNotificationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebPagePreviewInput`<sup>Optional</sup> <a name="disableWebPagePreviewInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableWebPagePreviewInput"></a>

```typescript
public readonly disableWebPagePreviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `messageThreadIdInput`<sup>Optional</sup> <a name="messageThreadIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageThreadIdInput"></a>

```typescript
public readonly messageThreadIdInput: string;
```

- *Type:* string

---

##### `parseModeInput`<sup>Optional</sup> <a name="parseModeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.parseModeInput"></a>

```typescript
public readonly parseModeInput: string;
```

- *Type:* string

---

##### `protectContentInput`<sup>Optional</sup> <a name="protectContentInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.protectContentInput"></a>

```typescript
public readonly protectContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `chatId`<sup>Required</sup> <a name="chatId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.chatId"></a>

```typescript
public readonly chatId: string;
```

- *Type:* string

---

##### `disableNotifications`<sup>Required</sup> <a name="disableNotifications" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableNotifications"></a>

```typescript
public readonly disableNotifications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebPagePreview`<sup>Required</sup> <a name="disableWebPagePreview" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.disableWebPagePreview"></a>

```typescript
public readonly disableWebPagePreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `messageThreadId`<sup>Required</sup> <a name="messageThreadId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.messageThreadId"></a>

```typescript
public readonly messageThreadId: string;
```

- *Type:* string

---

##### `parseMode`<sup>Required</sup> <a name="parseMode" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.parseMode"></a>

```typescript
public readonly parseMode: string;
```

- *Type:* string

---

##### `protectContent`<sup>Required</sup> <a name="protectContent" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.protectContent"></a>

```typescript
public readonly protectContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointTelegram;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointTelegram">ContactPointTelegram</a>

---


### ContactPointThreemaList <a name="ContactPointThreemaList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointThreemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.get"></a>

```typescript
public get(index: number): ContactPointThreemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointThreema[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>[]

---


### ContactPointThreemaOutputReference <a name="ContactPointThreemaOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointThreemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.apiSecretInput">apiSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.recipientIdInput">recipientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.apiSecret">apiSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.recipientId">recipientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiSecretInput`<sup>Optional</sup> <a name="apiSecretInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.apiSecretInput"></a>

```typescript
public readonly apiSecretInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `recipientIdInput`<sup>Optional</sup> <a name="recipientIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.recipientIdInput"></a>

```typescript
public readonly recipientIdInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `apiSecret`<sup>Required</sup> <a name="apiSecret" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.apiSecret"></a>

```typescript
public readonly apiSecret: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `recipientId`<sup>Required</sup> <a name="recipientId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.recipientId"></a>

```typescript
public readonly recipientId: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointThreema;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointThreema">ContactPointThreema</a>

---


### ContactPointVictoropsList <a name="ContactPointVictoropsList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointVictoropsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.get"></a>

```typescript
public get(index: number): ContactPointVictoropsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointVictorops[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>[]

---


### ContactPointVictoropsOutputReference <a name="ContactPointVictoropsOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointVictoropsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessageType` <a name="resetMessageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetMessageType"></a>

```typescript
public resetMessageType(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictoropsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointVictorops;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointVictorops">ContactPointVictorops</a>

---


### ContactPointWebexList <a name="ContactPointWebexList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWebexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.get"></a>

```typescript
public get(index: number): ContactPointWebexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWebex[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>[]

---


### ContactPointWebexOutputReference <a name="ContactPointWebexOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWebexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetRoomId">resetRoomId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiUrl` <a name="resetApiUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRoomId` <a name="resetRoomId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetRoomId"></a>

```typescript
public resetRoomId(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetToken` <a name="resetToken" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.roomIdInput">roomIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.roomId">roomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `roomIdInput`<sup>Optional</sup> <a name="roomIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.roomIdInput"></a>

```typescript
public readonly roomIdInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `roomId`<sup>Required</sup> <a name="roomId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.roomId"></a>

```typescript
public readonly roomId: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWebex;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebex">ContactPointWebex</a>

---


### ContactPointWebhookList <a name="ContactPointWebhookList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWebhookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.get"></a>

```typescript
public get(index: number): ContactPointWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>[]

---


### ContactPointWebhookOutputReference <a name="ContactPointWebhookOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetAuthorizationCredentials">resetAuthorizationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetAuthorizationScheme">resetAuthorizationScheme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetBasicAuthPassword">resetBasicAuthPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetBasicAuthUser">resetBasicAuthUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetMaxAlerts">resetMaxAlerts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationCredentials` <a name="resetAuthorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetAuthorizationCredentials"></a>

```typescript
public resetAuthorizationCredentials(): void
```

##### `resetAuthorizationScheme` <a name="resetAuthorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetAuthorizationScheme"></a>

```typescript
public resetAuthorizationScheme(): void
```

##### `resetBasicAuthPassword` <a name="resetBasicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetBasicAuthPassword"></a>

```typescript
public resetBasicAuthPassword(): void
```

##### `resetBasicAuthUser` <a name="resetBasicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetBasicAuthUser"></a>

```typescript
public resetBasicAuthUser(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetMaxAlerts` <a name="resetMaxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetMaxAlerts"></a>

```typescript
public resetMaxAlerts(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationCredentialsInput">authorizationCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationSchemeInput">authorizationSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthPasswordInput">basicAuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthUserInput">basicAuthUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.maxAlertsInput">maxAlertsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationCredentials">authorizationCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationScheme">authorizationScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthPassword">basicAuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthUser">basicAuthUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.maxAlerts">maxAlerts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `authorizationCredentialsInput`<sup>Optional</sup> <a name="authorizationCredentialsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationCredentialsInput"></a>

```typescript
public readonly authorizationCredentialsInput: string;
```

- *Type:* string

---

##### `authorizationSchemeInput`<sup>Optional</sup> <a name="authorizationSchemeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationSchemeInput"></a>

```typescript
public readonly authorizationSchemeInput: string;
```

- *Type:* string

---

##### `basicAuthPasswordInput`<sup>Optional</sup> <a name="basicAuthPasswordInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthPasswordInput"></a>

```typescript
public readonly basicAuthPasswordInput: string;
```

- *Type:* string

---

##### `basicAuthUserInput`<sup>Optional</sup> <a name="basicAuthUserInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthUserInput"></a>

```typescript
public readonly basicAuthUserInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `maxAlertsInput`<sup>Optional</sup> <a name="maxAlertsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.maxAlertsInput"></a>

```typescript
public readonly maxAlertsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authorizationCredentials`<sup>Required</sup> <a name="authorizationCredentials" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationCredentials"></a>

```typescript
public readonly authorizationCredentials: string;
```

- *Type:* string

---

##### `authorizationScheme`<sup>Required</sup> <a name="authorizationScheme" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.authorizationScheme"></a>

```typescript
public readonly authorizationScheme: string;
```

- *Type:* string

---

##### `basicAuthPassword`<sup>Required</sup> <a name="basicAuthPassword" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthPassword"></a>

```typescript
public readonly basicAuthPassword: string;
```

- *Type:* string

---

##### `basicAuthUser`<sup>Required</sup> <a name="basicAuthUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.basicAuthUser"></a>

```typescript
public readonly basicAuthUser: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `maxAlerts`<sup>Required</sup> <a name="maxAlerts" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.maxAlerts"></a>

```typescript
public readonly maxAlerts: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWebhook;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWebhook">ContactPointWebhook</a>

---


### ContactPointWecomList <a name="ContactPointWecomList" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWecomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.get"></a>

```typescript
public get(index: number): ContactPointWecomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWecom[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>[]

---


### ContactPointWecomOutputReference <a name="ContactPointWecomOutputReference" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer"></a>

```typescript
import { contactPoint } from 'rhizo-co-terraform-provider-grafana'

new contactPoint.ContactPointWecomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetCorpId">resetCorpId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetDisableResolveMessage">resetDisableResolveMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetMsgType">resetMsgType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetToUser">resetToUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentId` <a name="resetAgentId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetAgentId"></a>

```typescript
public resetAgentId(): void
```

##### `resetCorpId` <a name="resetCorpId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetCorpId"></a>

```typescript
public resetCorpId(): void
```

##### `resetDisableResolveMessage` <a name="resetDisableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetDisableResolveMessage"></a>

```typescript
public resetDisableResolveMessage(): void
```

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMsgType` <a name="resetMsgType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetMsgType"></a>

```typescript
public resetMsgType(): void
```

##### `resetSecret` <a name="resetSecret" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetSettings` <a name="resetSettings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetToUser` <a name="resetToUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetToUser"></a>

```typescript
public resetToUser(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.corpIdInput">corpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.disableResolveMessageInput">disableResolveMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.msgTypeInput">msgTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.settingsInput">settingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.toUserInput">toUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.corpId">corpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.disableResolveMessage">disableResolveMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.msgType">msgType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.settings">settings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.toUser">toUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `corpIdInput`<sup>Optional</sup> <a name="corpIdInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.corpIdInput"></a>

```typescript
public readonly corpIdInput: string;
```

- *Type:* string

---

##### `disableResolveMessageInput`<sup>Optional</sup> <a name="disableResolveMessageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.disableResolveMessageInput"></a>

```typescript
public readonly disableResolveMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `msgTypeInput`<sup>Optional</sup> <a name="msgTypeInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.msgTypeInput"></a>

```typescript
public readonly msgTypeInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `toUserInput`<sup>Optional</sup> <a name="toUserInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.toUserInput"></a>

```typescript
public readonly toUserInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `corpId`<sup>Required</sup> <a name="corpId" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.corpId"></a>

```typescript
public readonly corpId: string;
```

- *Type:* string

---

##### `disableResolveMessage`<sup>Required</sup> <a name="disableResolveMessage" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.disableResolveMessage"></a>

```typescript
public readonly disableResolveMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `msgType`<sup>Required</sup> <a name="msgType" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.msgType"></a>

```typescript
public readonly msgType: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.settings"></a>

```typescript
public readonly settings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `toUser`<sup>Required</sup> <a name="toUser" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.toUser"></a>

```typescript
public readonly toUser: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactPointWecom;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-grafana.contactPoint.ContactPointWecom">ContactPointWecom</a>

---




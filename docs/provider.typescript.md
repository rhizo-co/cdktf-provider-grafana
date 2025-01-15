# `provider`

Refer to the Terraform Registory for docs: [`grafana`](https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-grafana.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaProvider <a name="GrafanaProvider" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs grafana}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-grafana'

new provider.GrafanaProvider(scope: Construct, id: string, config?: GrafanaProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig">GrafanaProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig">GrafanaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudAccessPolicyToken">resetCloudAccessPolicyToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudApiUrl">resetCloudApiUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudProviderAccessToken">resetCloudProviderAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudProviderUrl">resetCloudProviderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetConnectionsApiAccessToken">resetConnectionsApiAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetConnectionsApiUrl">resetConnectionsApiUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOncallAccessToken">resetOncallAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOncallUrl">resetOncallUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetryStatusCodes">resetRetryStatusCodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetryWait">resetRetryWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetSmAccessToken">resetSmAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetSmUrl">resetSmUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetStoreDashboardSha256">resetStoreDashboardSha256</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetTlsCert">resetTlsCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetTlsKey">resetTlsKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuth` <a name="resetAuth" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetCaCert` <a name="resetCaCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetCloudAccessPolicyToken` <a name="resetCloudAccessPolicyToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudAccessPolicyToken"></a>

```typescript
public resetCloudAccessPolicyToken(): void
```

##### `resetCloudApiUrl` <a name="resetCloudApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudApiUrl"></a>

```typescript
public resetCloudApiUrl(): void
```

##### `resetCloudProviderAccessToken` <a name="resetCloudProviderAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudProviderAccessToken"></a>

```typescript
public resetCloudProviderAccessToken(): void
```

##### `resetCloudProviderUrl` <a name="resetCloudProviderUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetCloudProviderUrl"></a>

```typescript
public resetCloudProviderUrl(): void
```

##### `resetConnectionsApiAccessToken` <a name="resetConnectionsApiAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetConnectionsApiAccessToken"></a>

```typescript
public resetConnectionsApiAccessToken(): void
```

##### `resetConnectionsApiUrl` <a name="resetConnectionsApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetConnectionsApiUrl"></a>

```typescript
public resetConnectionsApiUrl(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

##### `resetOncallAccessToken` <a name="resetOncallAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOncallAccessToken"></a>

```typescript
public resetOncallAccessToken(): void
```

##### `resetOncallUrl` <a name="resetOncallUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetOncallUrl"></a>

```typescript
public resetOncallUrl(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetRetryStatusCodes` <a name="resetRetryStatusCodes" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetryStatusCodes"></a>

```typescript
public resetRetryStatusCodes(): void
```

##### `resetRetryWait` <a name="resetRetryWait" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetRetryWait"></a>

```typescript
public resetRetryWait(): void
```

##### `resetSmAccessToken` <a name="resetSmAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetSmAccessToken"></a>

```typescript
public resetSmAccessToken(): void
```

##### `resetSmUrl` <a name="resetSmUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetSmUrl"></a>

```typescript
public resetSmUrl(): void
```

##### `resetStoreDashboardSha256` <a name="resetStoreDashboardSha256" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetStoreDashboardSha256"></a>

```typescript
public resetStoreDashboardSha256(): void
```

##### `resetTlsCert` <a name="resetTlsCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetTlsCert"></a>

```typescript
public resetTlsCert(): void
```

##### `resetTlsKey` <a name="resetTlsKey" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetTlsKey"></a>

```typescript
public resetTlsKey(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isConstruct"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-grafana'

provider.GrafanaProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformElement"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-grafana'

provider.GrafanaProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformProvider"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-grafana'

provider.GrafanaProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.authInput">authInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudAccessPolicyTokenInput">cloudAccessPolicyTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudApiUrlInput">cloudApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderAccessTokenInput">cloudProviderAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderUrlInput">cloudProviderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiAccessTokenInput">connectionsApiAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiUrlInput">connectionsApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallAccessTokenInput">oncallAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallUrlInput">oncallUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryStatusCodesInput">retryStatusCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryWaitInput">retryWaitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smAccessTokenInput">smAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smUrlInput">smUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.storeDashboardSha256Input">storeDashboardSha256Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsCertInput">tlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsKeyInput">tlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.auth">auth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudAccessPolicyToken">cloudAccessPolicyToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudApiUrl">cloudApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderAccessToken">cloudProviderAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderUrl">cloudProviderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiAccessToken">connectionsApiAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiUrl">connectionsApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallAccessToken">oncallAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallUrl">oncallUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryStatusCodes">retryStatusCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryWait">retryWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smAccessToken">smAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smUrl">smUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.storeDashboardSha256">storeDashboardSha256</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsCert">tlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsKey">tlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.authInput"></a>

```typescript
public readonly authInput: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `cloudAccessPolicyTokenInput`<sup>Optional</sup> <a name="cloudAccessPolicyTokenInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudAccessPolicyTokenInput"></a>

```typescript
public readonly cloudAccessPolicyTokenInput: string;
```

- *Type:* string

---

##### `cloudApiUrlInput`<sup>Optional</sup> <a name="cloudApiUrlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudApiUrlInput"></a>

```typescript
public readonly cloudApiUrlInput: string;
```

- *Type:* string

---

##### `cloudProviderAccessTokenInput`<sup>Optional</sup> <a name="cloudProviderAccessTokenInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderAccessTokenInput"></a>

```typescript
public readonly cloudProviderAccessTokenInput: string;
```

- *Type:* string

---

##### `cloudProviderUrlInput`<sup>Optional</sup> <a name="cloudProviderUrlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderUrlInput"></a>

```typescript
public readonly cloudProviderUrlInput: string;
```

- *Type:* string

---

##### `connectionsApiAccessTokenInput`<sup>Optional</sup> <a name="connectionsApiAccessTokenInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiAccessTokenInput"></a>

```typescript
public readonly connectionsApiAccessTokenInput: string;
```

- *Type:* string

---

##### `connectionsApiUrlInput`<sup>Optional</sup> <a name="connectionsApiUrlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiUrlInput"></a>

```typescript
public readonly connectionsApiUrlInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oncallAccessTokenInput`<sup>Optional</sup> <a name="oncallAccessTokenInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallAccessTokenInput"></a>

```typescript
public readonly oncallAccessTokenInput: string;
```

- *Type:* string

---

##### `oncallUrlInput`<sup>Optional</sup> <a name="oncallUrlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallUrlInput"></a>

```typescript
public readonly oncallUrlInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `retryStatusCodesInput`<sup>Optional</sup> <a name="retryStatusCodesInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryStatusCodesInput"></a>

```typescript
public readonly retryStatusCodesInput: string[];
```

- *Type:* string[]

---

##### `retryWaitInput`<sup>Optional</sup> <a name="retryWaitInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryWaitInput"></a>

```typescript
public readonly retryWaitInput: number;
```

- *Type:* number

---

##### `smAccessTokenInput`<sup>Optional</sup> <a name="smAccessTokenInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smAccessTokenInput"></a>

```typescript
public readonly smAccessTokenInput: string;
```

- *Type:* string

---

##### `smUrlInput`<sup>Optional</sup> <a name="smUrlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smUrlInput"></a>

```typescript
public readonly smUrlInput: string;
```

- *Type:* string

---

##### `storeDashboardSha256Input`<sup>Optional</sup> <a name="storeDashboardSha256Input" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.storeDashboardSha256Input"></a>

```typescript
public readonly storeDashboardSha256Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsCertInput`<sup>Optional</sup> <a name="tlsCertInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsCertInput"></a>

```typescript
public readonly tlsCertInput: string;
```

- *Type:* string

---

##### `tlsKeyInput`<sup>Optional</sup> <a name="tlsKeyInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsKeyInput"></a>

```typescript
public readonly tlsKeyInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `cloudAccessPolicyToken`<sup>Optional</sup> <a name="cloudAccessPolicyToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudAccessPolicyToken"></a>

```typescript
public readonly cloudAccessPolicyToken: string;
```

- *Type:* string

---

##### `cloudApiUrl`<sup>Optional</sup> <a name="cloudApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudApiUrl"></a>

```typescript
public readonly cloudApiUrl: string;
```

- *Type:* string

---

##### `cloudProviderAccessToken`<sup>Optional</sup> <a name="cloudProviderAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderAccessToken"></a>

```typescript
public readonly cloudProviderAccessToken: string;
```

- *Type:* string

---

##### `cloudProviderUrl`<sup>Optional</sup> <a name="cloudProviderUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.cloudProviderUrl"></a>

```typescript
public readonly cloudProviderUrl: string;
```

- *Type:* string

---

##### `connectionsApiAccessToken`<sup>Optional</sup> <a name="connectionsApiAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiAccessToken"></a>

```typescript
public readonly connectionsApiAccessToken: string;
```

- *Type:* string

---

##### `connectionsApiUrl`<sup>Optional</sup> <a name="connectionsApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.connectionsApiUrl"></a>

```typescript
public readonly connectionsApiUrl: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oncallAccessToken`<sup>Optional</sup> <a name="oncallAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallAccessToken"></a>

```typescript
public readonly oncallAccessToken: string;
```

- *Type:* string

---

##### `oncallUrl`<sup>Optional</sup> <a name="oncallUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.oncallUrl"></a>

```typescript
public readonly oncallUrl: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `retryStatusCodes`<sup>Optional</sup> <a name="retryStatusCodes" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryStatusCodes"></a>

```typescript
public readonly retryStatusCodes: string[];
```

- *Type:* string[]

---

##### `retryWait`<sup>Optional</sup> <a name="retryWait" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.retryWait"></a>

```typescript
public readonly retryWait: number;
```

- *Type:* number

---

##### `smAccessToken`<sup>Optional</sup> <a name="smAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smAccessToken"></a>

```typescript
public readonly smAccessToken: string;
```

- *Type:* string

---

##### `smUrl`<sup>Optional</sup> <a name="smUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.smUrl"></a>

```typescript
public readonly smUrl: string;
```

- *Type:* string

---

##### `storeDashboardSha256`<sup>Optional</sup> <a name="storeDashboardSha256" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.storeDashboardSha256"></a>

```typescript
public readonly storeDashboardSha256: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsCert`<sup>Optional</sup> <a name="tlsCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsCert"></a>

```typescript
public readonly tlsCert: string;
```

- *Type:* string

---

##### `tlsKey`<sup>Optional</sup> <a name="tlsKey" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tlsKey"></a>

```typescript
public readonly tlsKey: string;
```

- *Type:* string

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaProviderConfig <a name="GrafanaProviderConfig" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-grafana'

const grafanaProviderConfig: provider.GrafanaProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.auth">auth</a></code> | <code>string</code> | API token, basic auth in the `username:password` format or `anonymous` (string literal). |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.caCert">caCert</a></code> | <code>string</code> | Certificate CA bundle (file path or literal value) to use to verify the Grafana server's certificate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudAccessPolicyToken">cloudAccessPolicyToken</a></code> | <code>string</code> | Access Policy Token for Grafana Cloud. May alternatively be set via the `GRAFANA_CLOUD_ACCESS_POLICY_TOKEN` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudApiUrl">cloudApiUrl</a></code> | <code>string</code> | Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_CLOUD_API_URL` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudProviderAccessToken">cloudProviderAccessToken</a></code> | <code>string</code> | A Grafana Cloud Provider access token. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_ACCESS_TOKEN` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudProviderUrl">cloudProviderUrl</a></code> | <code>string</code> | A Grafana Cloud Provider backend address. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_URL` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.connectionsApiAccessToken">connectionsApiAccessToken</a></code> | <code>string</code> | A Grafana Connections API access token. May alternatively be set via the `GRAFANA_CONNECTIONS_API_ACCESS_TOKEN` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.connectionsApiUrl">connectionsApiUrl</a></code> | <code>string</code> | A Grafana Connections API address. May alternatively be set via the `GRAFANA_CONNECTIONS_API_URL` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip TLS certificate verification. May alternatively be set via the `GRAFANA_INSECURE_SKIP_VERIFY` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.oncallAccessToken">oncallAccessToken</a></code> | <code>string</code> | A Grafana OnCall access token. May alternatively be set via the `GRAFANA_ONCALL_ACCESS_TOKEN` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.oncallUrl">oncallUrl</a></code> | <code>string</code> | An Grafana OnCall backend address. May alternatively be set via the `GRAFANA_ONCALL_URL` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retries">retries</a></code> | <code>number</code> | The amount of retries to use for Grafana API and Grafana Cloud API calls. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retryStatusCodes">retryStatusCodes</a></code> | <code>string[]</code> | The status codes to retry on for Grafana API and Grafana Cloud API calls. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retryWait">retryWait</a></code> | <code>number</code> | The amount of time in seconds to wait between retries for Grafana API and Grafana Cloud API calls. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.smAccessToken">smAccessToken</a></code> | <code>string</code> | A Synthetic Monitoring access token. May alternatively be set via the `GRAFANA_SM_ACCESS_TOKEN` environment variable. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.smUrl">smUrl</a></code> | <code>string</code> | Synthetic monitoring backend address. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.storeDashboardSha256">storeDashboardSha256</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if you want to save only the sha256sum instead of complete dashboard model JSON in the tfstate. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.tlsCert">tlsCert</a></code> | <code>string</code> | Client TLS certificate (file path or literal value) to use to authenticate to the Grafana server. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.tlsKey">tlsKey</a></code> | <code>string</code> | Client TLS key (file path or literal value) to use to authenticate to the Grafana server. |
| <code><a href="#rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.url">url</a></code> | <code>string</code> | The root URL of a Grafana server. May alternatively be set via the `GRAFANA_URL` environment variable. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#alias GrafanaProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

API token, basic auth in the `username:password` format or `anonymous` (string literal).

May alternatively be set via the `GRAFANA_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#auth GrafanaProvider#auth}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

Certificate CA bundle (file path or literal value) to use to verify the Grafana server's certificate.

May alternatively be set via the `GRAFANA_CA_CERT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#ca_cert GrafanaProvider#ca_cert}

---

##### `cloudAccessPolicyToken`<sup>Optional</sup> <a name="cloudAccessPolicyToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudAccessPolicyToken"></a>

```typescript
public readonly cloudAccessPolicyToken: string;
```

- *Type:* string

Access Policy Token for Grafana Cloud. May alternatively be set via the `GRAFANA_CLOUD_ACCESS_POLICY_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_access_policy_token GrafanaProvider#cloud_access_policy_token}

---

##### `cloudApiUrl`<sup>Optional</sup> <a name="cloudApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudApiUrl"></a>

```typescript
public readonly cloudApiUrl: string;
```

- *Type:* string

Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_CLOUD_API_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_api_url GrafanaProvider#cloud_api_url}

---

##### `cloudProviderAccessToken`<sup>Optional</sup> <a name="cloudProviderAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudProviderAccessToken"></a>

```typescript
public readonly cloudProviderAccessToken: string;
```

- *Type:* string

A Grafana Cloud Provider access token. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_provider_access_token GrafanaProvider#cloud_provider_access_token}

---

##### `cloudProviderUrl`<sup>Optional</sup> <a name="cloudProviderUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.cloudProviderUrl"></a>

```typescript
public readonly cloudProviderUrl: string;
```

- *Type:* string

A Grafana Cloud Provider backend address. May alternatively be set via the `GRAFANA_CLOUD_PROVIDER_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#cloud_provider_url GrafanaProvider#cloud_provider_url}

---

##### `connectionsApiAccessToken`<sup>Optional</sup> <a name="connectionsApiAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.connectionsApiAccessToken"></a>

```typescript
public readonly connectionsApiAccessToken: string;
```

- *Type:* string

A Grafana Connections API access token. May alternatively be set via the `GRAFANA_CONNECTIONS_API_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#connections_api_access_token GrafanaProvider#connections_api_access_token}

---

##### `connectionsApiUrl`<sup>Optional</sup> <a name="connectionsApiUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.connectionsApiUrl"></a>

```typescript
public readonly connectionsApiUrl: string;
```

- *Type:* string

A Grafana Connections API address. May alternatively be set via the `GRAFANA_CONNECTIONS_API_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#connections_api_url GrafanaProvider#connections_api_url}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

HTTP headers mapping keys to values used for accessing the Grafana and Grafana Cloud APIs. May alternatively be set via the `GRAFANA_HTTP_HEADERS` environment variable in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#http_headers GrafanaProvider#http_headers}

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip TLS certificate verification. May alternatively be set via the `GRAFANA_INSECURE_SKIP_VERIFY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#insecure_skip_verify GrafanaProvider#insecure_skip_verify}

---

##### `oncallAccessToken`<sup>Optional</sup> <a name="oncallAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.oncallAccessToken"></a>

```typescript
public readonly oncallAccessToken: string;
```

- *Type:* string

A Grafana OnCall access token. May alternatively be set via the `GRAFANA_ONCALL_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#oncall_access_token GrafanaProvider#oncall_access_token}

---

##### `oncallUrl`<sup>Optional</sup> <a name="oncallUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.oncallUrl"></a>

```typescript
public readonly oncallUrl: string;
```

- *Type:* string

An Grafana OnCall backend address. May alternatively be set via the `GRAFANA_ONCALL_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#oncall_url GrafanaProvider#oncall_url}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The amount of retries to use for Grafana API and Grafana Cloud API calls.

May alternatively be set via the `GRAFANA_RETRIES` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retries GrafanaProvider#retries}

---

##### `retryStatusCodes`<sup>Optional</sup> <a name="retryStatusCodes" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retryStatusCodes"></a>

```typescript
public readonly retryStatusCodes: string[];
```

- *Type:* string[]

The status codes to retry on for Grafana API and Grafana Cloud API calls.

Use `x` as a digit wildcard. Defaults to 429 and 5xx. May alternatively be set via the `GRAFANA_RETRY_STATUS_CODES` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retry_status_codes GrafanaProvider#retry_status_codes}

---

##### `retryWait`<sup>Optional</sup> <a name="retryWait" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.retryWait"></a>

```typescript
public readonly retryWait: number;
```

- *Type:* number

The amount of time in seconds to wait between retries for Grafana API and Grafana Cloud API calls.

May alternatively be set via the `GRAFANA_RETRY_WAIT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#retry_wait GrafanaProvider#retry_wait}

---

##### `smAccessToken`<sup>Optional</sup> <a name="smAccessToken" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.smAccessToken"></a>

```typescript
public readonly smAccessToken: string;
```

- *Type:* string

A Synthetic Monitoring access token. May alternatively be set via the `GRAFANA_SM_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#sm_access_token GrafanaProvider#sm_access_token}

---

##### `smUrl`<sup>Optional</sup> <a name="smUrl" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.smUrl"></a>

```typescript
public readonly smUrl: string;
```

- *Type:* string

Synthetic monitoring backend address.

May alternatively be set via the `GRAFANA_SM_URL` environment variable. The correct value for each service region is cited in the [Synthetic Monitoring documentation](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/set-up/set-up-private-probes/#probe-api-server-url). Note the `sm_url` value is optional, but it must correspond with the value specified as the `region_slug` in the `grafana_cloud_stack` resource. Also note that when a Terraform configuration contains multiple provider instances managing SM resources associated with the same Grafana stack, specifying an explicit `sm_url` set to the same value for each provider ensures all providers interact with the same SM API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#sm_url GrafanaProvider#sm_url}

---

##### `storeDashboardSha256`<sup>Optional</sup> <a name="storeDashboardSha256" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.storeDashboardSha256"></a>

```typescript
public readonly storeDashboardSha256: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if you want to save only the sha256sum instead of complete dashboard model JSON in the tfstate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#store_dashboard_sha256 GrafanaProvider#store_dashboard_sha256}

---

##### `tlsCert`<sup>Optional</sup> <a name="tlsCert" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.tlsCert"></a>

```typescript
public readonly tlsCert: string;
```

- *Type:* string

Client TLS certificate (file path or literal value) to use to authenticate to the Grafana server.

May alternatively be set via the `GRAFANA_TLS_CERT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#tls_cert GrafanaProvider#tls_cert}

---

##### `tlsKey`<sup>Optional</sup> <a name="tlsKey" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.tlsKey"></a>

```typescript
public readonly tlsKey: string;
```

- *Type:* string

Client TLS key (file path or literal value) to use to authenticate to the Grafana server.

May alternatively be set via the `GRAFANA_TLS_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#tls_key GrafanaProvider#tls_key}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-grafana.provider.GrafanaProviderConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The root URL of a Grafana server. May alternatively be set via the `GRAFANA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs#url GrafanaProvider#url}

---




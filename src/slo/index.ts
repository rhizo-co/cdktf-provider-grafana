// https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description is a free-text field that can provide more context to an SLO.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#description Slo#description}
  */
  readonly description: string;
  /**
  * UID for the SLO folder
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#folder_uid Slo#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#id Slo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name should be a short description of your indicator. Consider names like "API Availability"
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * The name of a search expression in Grafana Asserts. This is used in the SLO UI to open the Asserts RCA workbench and in alerts to link to the RCA workbench.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#search_expression Slo#search_expression}
  */
  readonly searchExpression?: string;
  /**
  * alerting block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#alerting Slo#alerting}
  */
  readonly alerting?: SloAlerting;
  /**
  * destination_datasource block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#destination_datasource Slo#destination_datasource}
  */
  readonly destinationDatasource: SloDestinationDatasource;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#label Slo#label}
  */
  readonly label?: SloLabel[] | cdktf.IResolvable;
  /**
  * objectives block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#objectives Slo#objectives}
  */
  readonly objectives: SloObjectives[] | cdktf.IResolvable;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#query Slo#query}
  */
  readonly query: SloQuery[] | cdktf.IResolvable;
}
export interface SloAlertingAdvancedOptions {
  /**
  * Minimum number of failed events to trigger an alert
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#min_failures Slo#min_failures}
  */
  readonly minFailures?: number;
}

export function sloAlertingAdvancedOptionsToTerraform(struct?: SloAlertingAdvancedOptionsOutputReference | SloAlertingAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_failures: cdktf.numberToTerraform(struct!.minFailures),
  }
}

export class SloAlertingAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloAlertingAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFailures = this._minFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minFailures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minFailures = value.minFailures;
    }
  }

  // min_failures - computed: false, optional: true, required: false
  private _minFailures?: number; 
  public get minFailures() {
    return this.getNumberAttribute('min_failures');
  }
  public set minFailures(value: number) {
    this._minFailures = value;
  }
  public resetMinFailures() {
    this._minFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFailuresInput() {
    return this._minFailures;
  }
}
export interface SloAlertingAnnotation {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingAnnotationToTerraform(struct?: SloAlertingAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingAnnotationList extends cdktf.ComplexList {
  public internalValue? : SloAlertingAnnotation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingAnnotationOutputReference {
    return new SloAlertingAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingFastburnAnnotation {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingFastburnAnnotationToTerraform(struct?: SloAlertingFastburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingFastburnAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingFastburnAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingFastburnAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingFastburnAnnotationList extends cdktf.ComplexList {
  public internalValue? : SloAlertingFastburnAnnotation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingFastburnAnnotationOutputReference {
    return new SloAlertingFastburnAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingFastburnLabel {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingFastburnLabelToTerraform(struct?: SloAlertingFastburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingFastburnLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingFastburnLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingFastburnLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingFastburnLabelList extends cdktf.ComplexList {
  public internalValue? : SloAlertingFastburnLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingFastburnLabelOutputReference {
    return new SloAlertingFastburnLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingFastburn {
  /**
  * annotation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#annotation Slo#annotation}
  */
  readonly annotation?: SloAlertingFastburnAnnotation[] | cdktf.IResolvable;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#label Slo#label}
  */
  readonly label?: SloAlertingFastburnLabel[] | cdktf.IResolvable;
}

export function sloAlertingFastburnToTerraform(struct?: SloAlertingFastburnOutputReference | SloAlertingFastburn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.listMapper(sloAlertingFastburnAnnotationToTerraform, true)(struct!.annotation),
    label: cdktf.listMapper(sloAlertingFastburnLabelToTerraform, true)(struct!.label),
  }
}

export class SloAlertingFastburnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloAlertingFastburn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingFastburn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotation.internalValue = undefined;
      this._label.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotation.internalValue = value.annotation;
      this._label.internalValue = value.label;
    }
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new SloAlertingFastburnAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: SloAlertingFastburnAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SloAlertingFastburnLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: SloAlertingFastburnLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}
export interface SloAlertingLabel {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingLabelToTerraform(struct?: SloAlertingLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingLabelList extends cdktf.ComplexList {
  public internalValue? : SloAlertingLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingLabelOutputReference {
    return new SloAlertingLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingSlowburnAnnotation {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingSlowburnAnnotationToTerraform(struct?: SloAlertingSlowburnAnnotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingSlowburnAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingSlowburnAnnotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingSlowburnAnnotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingSlowburnAnnotationList extends cdktf.ComplexList {
  public internalValue? : SloAlertingSlowburnAnnotation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingSlowburnAnnotationOutputReference {
    return new SloAlertingSlowburnAnnotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingSlowburnLabel {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloAlertingSlowburnLabelToTerraform(struct?: SloAlertingSlowburnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloAlertingSlowburnLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloAlertingSlowburnLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingSlowburnLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloAlertingSlowburnLabelList extends cdktf.ComplexList {
  public internalValue? : SloAlertingSlowburnLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloAlertingSlowburnLabelOutputReference {
    return new SloAlertingSlowburnLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAlertingSlowburn {
  /**
  * annotation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#annotation Slo#annotation}
  */
  readonly annotation?: SloAlertingSlowburnAnnotation[] | cdktf.IResolvable;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#label Slo#label}
  */
  readonly label?: SloAlertingSlowburnLabel[] | cdktf.IResolvable;
}

export function sloAlertingSlowburnToTerraform(struct?: SloAlertingSlowburnOutputReference | SloAlertingSlowburn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.listMapper(sloAlertingSlowburnAnnotationToTerraform, true)(struct!.annotation),
    label: cdktf.listMapper(sloAlertingSlowburnLabelToTerraform, true)(struct!.label),
  }
}

export class SloAlertingSlowburnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloAlertingSlowburn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlertingSlowburn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotation.internalValue = undefined;
      this._label.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotation.internalValue = value.annotation;
      this._label.internalValue = value.label;
    }
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new SloAlertingSlowburnAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: SloAlertingSlowburnAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SloAlertingSlowburnLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: SloAlertingSlowburnLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}
export interface SloAlerting {
  /**
  * advanced_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#advanced_options Slo#advanced_options}
  */
  readonly advancedOptions?: SloAlertingAdvancedOptions;
  /**
  * annotation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#annotation Slo#annotation}
  */
  readonly annotation?: SloAlertingAnnotation[] | cdktf.IResolvable;
  /**
  * fastburn block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#fastburn Slo#fastburn}
  */
  readonly fastburn?: SloAlertingFastburn;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#label Slo#label}
  */
  readonly label?: SloAlertingLabel[] | cdktf.IResolvable;
  /**
  * slowburn block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#slowburn Slo#slowburn}
  */
  readonly slowburn?: SloAlertingSlowburn;
}

export function sloAlertingToTerraform(struct?: SloAlertingOutputReference | SloAlerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_options: sloAlertingAdvancedOptionsToTerraform(struct!.advancedOptions),
    annotation: cdktf.listMapper(sloAlertingAnnotationToTerraform, true)(struct!.annotation),
    fastburn: sloAlertingFastburnToTerraform(struct!.fastburn),
    label: cdktf.listMapper(sloAlertingLabelToTerraform, true)(struct!.label),
    slowburn: sloAlertingSlowburnToTerraform(struct!.slowburn),
  }
}

export class SloAlertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloAlerting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._fastburn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastburn = this._fastburn?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._slowburn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowburn = this._slowburn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAlerting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedOptions.internalValue = undefined;
      this._annotation.internalValue = undefined;
      this._fastburn.internalValue = undefined;
      this._label.internalValue = undefined;
      this._slowburn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._annotation.internalValue = value.annotation;
      this._fastburn.internalValue = value.fastburn;
      this._label.internalValue = value.label;
      this._slowburn.internalValue = value.slowburn;
    }
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new SloAlertingAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: SloAlertingAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new SloAlertingAnnotationList(this, "annotation", false);
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: SloAlertingAnnotation[] | cdktf.IResolvable) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // fastburn - computed: false, optional: true, required: false
  private _fastburn = new SloAlertingFastburnOutputReference(this, "fastburn");
  public get fastburn() {
    return this._fastburn;
  }
  public putFastburn(value: SloAlertingFastburn) {
    this._fastburn.internalValue = value;
  }
  public resetFastburn() {
    this._fastburn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastburnInput() {
    return this._fastburn.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SloAlertingLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: SloAlertingLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // slowburn - computed: false, optional: true, required: false
  private _slowburn = new SloAlertingSlowburnOutputReference(this, "slowburn");
  public get slowburn() {
    return this._slowburn;
  }
  public putSlowburn(value: SloAlertingSlowburn) {
    this._slowburn.internalValue = value;
  }
  public resetSlowburn() {
    this._slowburn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowburnInput() {
    return this._slowburn.internalValue;
  }
}
export interface SloDestinationDatasource {
  /**
  * UID for the Datasource
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#uid Slo#uid}
  */
  readonly uid: string;
}

export function sloDestinationDatasourceToTerraform(struct?: SloDestinationDatasourceOutputReference | SloDestinationDatasource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}

export class SloDestinationDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloDestinationDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloDestinationDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uid = value.uid;
    }
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SloLabel {
  /**
  * Key for filtering and identification
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * Templatable value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloLabelToTerraform(struct?: SloLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SloLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloLabelList extends cdktf.ComplexList {
  public internalValue? : SloLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloLabelOutputReference {
    return new SloLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectives {
  /**
  * Value between 0 and 1. If the value of the query is above the objective, the SLO is met.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#value Slo#value}
  */
  readonly value: number;
  /**
  * A Prometheus-parsable time duration string like 24h, 60m. This is the time window the objective is measured over.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#window Slo#window}
  */
  readonly window: string;
}

export function sloObjectivesToTerraform(struct?: SloObjectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export class SloObjectivesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloObjectives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._window = value.window;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class SloObjectivesList extends cdktf.ComplexList {
  public internalValue? : SloObjectives[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloObjectivesOutputReference {
    return new SloObjectivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloQueryFreeform {
  /**
  * Freeform Query Field
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloQueryFreeformToTerraform(struct?: SloQueryFreeformOutputReference | SloQueryFreeform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class SloQueryFreeformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloQueryFreeform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloQueryFreeform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface SloQueryRatio {
  /**
  * Defines Group By Labels used for per-label alerting. These appear as variables on SLO dashboards to enable filtering and aggregation. Labels must adhere to Prometheus label name schema - "^[a-zA-Z_][a-zA-Z0-9_]*$"
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#group_by_labels Slo#group_by_labels}
  */
  readonly groupByLabels?: string[];
  /**
  * Counter metric for success events (numerator)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#success_metric Slo#success_metric}
  */
  readonly successMetric: string;
  /**
  * Metric for total events (denominator)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#total_metric Slo#total_metric}
  */
  readonly totalMetric: string;
}

export function sloQueryRatioToTerraform(struct?: SloQueryRatioOutputReference | SloQueryRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByLabels),
    success_metric: cdktf.stringToTerraform(struct!.successMetric),
    total_metric: cdktf.stringToTerraform(struct!.totalMetric),
  }
}

export class SloQueryRatioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloQueryRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByLabels = this._groupByLabels;
    }
    if (this._successMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.successMetric = this._successMetric;
    }
    if (this._totalMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMetric = this._totalMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloQueryRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupByLabels = undefined;
      this._successMetric = undefined;
      this._totalMetric = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupByLabels = value.groupByLabels;
      this._successMetric = value.successMetric;
      this._totalMetric = value.totalMetric;
    }
  }

  // group_by_labels - computed: false, optional: true, required: false
  private _groupByLabels?: string[]; 
  public get groupByLabels() {
    return this.getListAttribute('group_by_labels');
  }
  public set groupByLabels(value: string[]) {
    this._groupByLabels = value;
  }
  public resetGroupByLabels() {
    this._groupByLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByLabelsInput() {
    return this._groupByLabels;
  }

  // success_metric - computed: false, optional: false, required: true
  private _successMetric?: string; 
  public get successMetric() {
    return this.getStringAttribute('success_metric');
  }
  public set successMetric(value: string) {
    this._successMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successMetricInput() {
    return this._successMetric;
  }

  // total_metric - computed: false, optional: false, required: true
  private _totalMetric?: string; 
  public get totalMetric() {
    return this.getStringAttribute('total_metric');
  }
  public set totalMetric(value: string) {
    this._totalMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMetricInput() {
    return this._totalMetric;
  }
}
export interface SloQuery {
  /**
  * Query type must be one of: "freeform", "query", "ratio", or "threshold"
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
  /**
  * freeform block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#freeform Slo#freeform}
  */
  readonly freeform?: SloQueryFreeform;
  /**
  * ratio block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo#ratio Slo#ratio}
  */
  readonly ratio?: SloQueryRatio;
}

export function sloQueryToTerraform(struct?: SloQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    freeform: sloQueryFreeformToTerraform(struct!.freeform),
    ratio: sloQueryRatioToTerraform(struct!.ratio),
  }
}

export class SloQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._freeform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeform = this._freeform?.internalValue;
    }
    if (this._ratio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._freeform.internalValue = undefined;
      this._ratio.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._freeform.internalValue = value.freeform;
      this._ratio.internalValue = value.ratio;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // freeform - computed: false, optional: true, required: false
  private _freeform = new SloQueryFreeformOutputReference(this, "freeform");
  public get freeform() {
    return this._freeform;
  }
  public putFreeform(value: SloQueryFreeform) {
    this._freeform.internalValue = value;
  }
  public resetFreeform() {
    this._freeform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformInput() {
    return this._freeform.internalValue;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio = new SloQueryRatioOutputReference(this, "ratio");
  public get ratio() {
    return this._ratio;
  }
  public putRatio(value: SloQueryRatio) {
    this._ratio.internalValue = value;
  }
  public resetRatio() {
    this._ratio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio.internalValue;
  }
}

export class SloQueryList extends cdktf.ComplexList {
  public internalValue? : SloQuery[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloQueryOutputReference {
    return new SloQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo grafana_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_slo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.16.0/docs/resources/slo grafana_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_slo',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '3.16.0',
        providerVersionConstraint: '~> 3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderUid = config.folderUid;
    this._id = config.id;
    this._name = config.name;
    this._searchExpression = config.searchExpression;
    this._alerting.internalValue = config.alerting;
    this._destinationDatasource.internalValue = config.destinationDatasource;
    this._label.internalValue = config.label;
    this._objectives.internalValue = config.objectives;
    this._query.internalValue = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_uid - computed: false, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // search_expression - computed: false, optional: true, required: false
  private _searchExpression?: string; 
  public get searchExpression() {
    return this.getStringAttribute('search_expression');
  }
  public set searchExpression(value: string) {
    this._searchExpression = value;
  }
  public resetSearchExpression() {
    this._searchExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchExpressionInput() {
    return this._searchExpression;
  }

  // alerting - computed: false, optional: true, required: false
  private _alerting = new SloAlertingOutputReference(this, "alerting");
  public get alerting() {
    return this._alerting;
  }
  public putAlerting(value: SloAlerting) {
    this._alerting.internalValue = value;
  }
  public resetAlerting() {
    this._alerting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting.internalValue;
  }

  // destination_datasource - computed: false, optional: false, required: true
  private _destinationDatasource = new SloDestinationDatasourceOutputReference(this, "destination_datasource");
  public get destinationDatasource() {
    return this._destinationDatasource;
  }
  public putDestinationDatasource(value: SloDestinationDatasource) {
    this._destinationDatasource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatasourceInput() {
    return this._destinationDatasource.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new SloLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: SloLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // objectives - computed: false, optional: false, required: true
  private _objectives = new SloObjectivesList(this, "objectives", false);
  public get objectives() {
    return this._objectives;
  }
  public putObjectives(value: SloObjectives[] | cdktf.IResolvable) {
    this._objectives.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectivesInput() {
    return this._objectives.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new SloQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SloQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_uid: cdktf.stringToTerraform(this._folderUid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      search_expression: cdktf.stringToTerraform(this._searchExpression),
      alerting: sloAlertingToTerraform(this._alerting.internalValue),
      destination_datasource: sloDestinationDatasourceToTerraform(this._destinationDatasource.internalValue),
      label: cdktf.listMapper(sloLabelToTerraform, true)(this._label.internalValue),
      objectives: cdktf.listMapper(sloObjectivesToTerraform, true)(this._objectives.internalValue),
      query: cdktf.listMapper(sloQueryToTerraform, true)(this._query.internalValue),
    };
  }
}

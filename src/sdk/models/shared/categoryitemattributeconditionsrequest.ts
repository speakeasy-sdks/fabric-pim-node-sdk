import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum CategoryItemAttributeConditionsRequestItemAttributeConditionsActionEnum {
  Set = "SET",
  Unset = "UNSET",
}
export enum CategoryItemAttributeConditionsRequestItemAttributeConditionsConditionTypeEnum {
  Yes = "YES",
  No = "NO",
  Contains = "CONTAINS",
  DoesNotContain = "DOES_NOT_CONTAIN",
  IsExactMatch = "IS_EXACT_MATCH",
  IsEqualTo = "IS_EQUAL_TO",
  IsGreaterThan = "IS_GREATER_THAN",
  IsLessThan = "IS_LESS_THAN",
  Includes = "INCLUDES",
  Excludes = "EXCLUDES",
}

export class CategoryItemAttributeConditionsRequestItemAttributeConditionsCondition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CategoryItemAttributeConditionsRequestItemAttributeConditionsConditionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class CategoryItemAttributeConditionsRequestItemAttributeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: CategoryItemAttributeConditionsRequestItemAttributeConditionsActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "condition" })
  @Type(
    () => CategoryItemAttributeConditionsRequestItemAttributeConditionsCondition
  )
  condition?: CategoryItemAttributeConditionsRequestItemAttributeConditionsCondition;
}

export class CategoryItemAttributeConditionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({
    elemType: CategoryItemAttributeConditionsRequestItemAttributeConditions,
  })
  @Expose({ name: "itemAttributeConditions" })
  @Type(() => CategoryItemAttributeConditionsRequestItemAttributeConditions)
  itemAttributeConditions?: CategoryItemAttributeConditionsRequestItemAttributeConditions[];

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}

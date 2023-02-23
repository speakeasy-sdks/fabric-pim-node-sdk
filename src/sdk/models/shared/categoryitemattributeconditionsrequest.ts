import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum CategoryItemAttributeConditionsRequestItemAttributeConditionsActionEnum {
    Set = "SET",
    Unset = "UNSET"
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
    Excludes = "EXCLUDES"
}

export class CategoryItemAttributeConditionsRequestItemAttributeConditionsCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CategoryItemAttributeConditionsRequestItemAttributeConditionsConditionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export class CategoryItemAttributeConditionsRequestItemAttributeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CategoryItemAttributeConditionsRequestItemAttributeConditionsActionEnum;

  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: CategoryItemAttributeConditionsRequestItemAttributeConditionsCondition;
}

export class CategoryItemAttributeConditionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributeConditions", elemType: CategoryItemAttributeConditionsRequestItemAttributeConditions })
  itemAttributeConditions?: CategoryItemAttributeConditionsRequestItemAttributeConditions[];

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}
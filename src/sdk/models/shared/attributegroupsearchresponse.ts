import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeGroupTypeResponse } from "./attributegrouptyperesponse";

export enum AttributeGroupSearchResponseAttributeGroupsTypeEnum {
    Workflow = "WORKFLOW",
    Collection = "COLLECTION"
}

export class AttributeGroupSearchResponseAttributeGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EditableAttributes", elemType: AttributeGroupTypeResponse })
  editableAttributes?: AttributeGroupTypeResponse[];

  @SpeakeasyMetadata({ data: "json, name=ImpactedAttributes" })
  impactedAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=ReadOnlyAttributes", elemType: AttributeGroupTypeResponse })
  readOnlyAttributes?: AttributeGroupTypeResponse[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowAttributes" })
  workflowAttributes?: any;

  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAttributes" })
  totalAttributes?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AttributeGroupSearchResponseAttributeGroupsTypeEnum;
}

export class AttributeGroupSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroups", elemType: AttributeGroupSearchResponseAttributeGroups })
  attributeGroups?: AttributeGroupSearchResponseAttributeGroups[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
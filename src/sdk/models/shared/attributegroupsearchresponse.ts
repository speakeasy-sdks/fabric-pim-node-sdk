import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeGroupTypeResponse } from "./attributegrouptyperesponse";
import { Expose, Type } from "class-transformer";

export enum AttributeGroupSearchResponseAttributeGroupsTypeEnum {
    Workflow = "WORKFLOW",
    Collection = "COLLECTION"
}

export class AttributeGroupSearchResponseAttributeGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeGroupTypeResponse })
  @Expose({ name: "EditableAttributes" })
  @Type(() => AttributeGroupTypeResponse)
  editableAttributes?: AttributeGroupTypeResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "ImpactedAttributes" })
  impactedAttributes?: any;

  @SpeakeasyMetadata({ elemType: AttributeGroupTypeResponse })
  @Expose({ name: "ReadOnlyAttributes" })
  @Type(() => AttributeGroupTypeResponse)
  readOnlyAttributes?: AttributeGroupTypeResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "WorkflowAttributes" })
  workflowAttributes?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAttributes" })
  totalAttributes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: AttributeGroupSearchResponseAttributeGroupsTypeEnum;
}

export class AttributeGroupSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeGroupSearchResponseAttributeGroups })
  @Expose({ name: "attributeGroups" })
  @Type(() => AttributeGroupSearchResponseAttributeGroups)
  attributeGroups?: AttributeGroupSearchResponseAttributeGroups[];

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
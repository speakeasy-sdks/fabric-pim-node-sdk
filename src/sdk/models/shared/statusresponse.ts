import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StatusResponseSourceEnum {
    Pim = "PIM",
    Wam = "WAM"
}

export enum StatusResponseTypeEnum {
    Attribute = "ATTRIBUTE",
    AttributeValue = "ATTRIBUTE_VALUE",
    Item = "ITEM",
    Bundle = "BUNDLE",
    Node = "NODE",
    Hierarchy = "HIERARCHY"
}


export class StatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: StatusResponseSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StatusResponseTypeEnum;
}

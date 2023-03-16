import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum StatusResponseSourceEnum {
  Pim = "PIM",
  Wam = "WAM",
}
export enum StatusResponseTypeEnum {
  Attribute = "ATTRIBUTE",
  AttributeValue = "ATTRIBUTE_VALUE",
  Item = "ITEM",
  Bundle = "BUNDLE",
  Node = "NODE",
  Hierarchy = "HIERARCHY",
}

export class StatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: StatusResponseSourceEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: StatusResponseTypeEnum;
}

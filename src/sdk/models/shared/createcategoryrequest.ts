import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CreateCategoryRequestTypeEnum {
    Alternate = "ALTERNATE",
    Primary = "PRIMARY"
}

export class CreateCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "parentNodeId" })
  parentNodeId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateCategoryRequestTypeEnum;
}
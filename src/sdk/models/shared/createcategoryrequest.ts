import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateCategoryRequestTypeEnum {
    Alternate = "ALTERNATE",
    Primary = "PRIMARY"
}


export class CreateCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=parentNodeId" })
  parentNodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateCategoryRequestTypeEnum;
}

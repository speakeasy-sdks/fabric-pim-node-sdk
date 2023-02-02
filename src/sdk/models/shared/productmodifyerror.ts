import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductResponse } from "./productresponse";


export enum ProductModifyErrorCodeEnum {
    StatusError = "STATUS_ERROR"
}


export class ProductModifyErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ProductResponse;
}


export class ProductModifyError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ProductModifyErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message", elemType: ProductModifyErrorMessage })
  message?: ProductModifyErrorMessage[];
}

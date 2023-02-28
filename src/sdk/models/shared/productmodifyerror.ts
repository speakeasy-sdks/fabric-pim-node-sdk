import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductResponse } from "./productresponse";
import { Expose, Type } from "class-transformer";

export enum ProductModifyErrorCodeEnum {
    StatusError = "STATUS_ERROR"
}

export class ProductModifyErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  @Type(() => ProductResponse)
  item?: ProductResponse;
}

export class ProductModifyError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ProductModifyErrorCodeEnum;

  @SpeakeasyMetadata({ elemType: ProductModifyErrorMessage })
  @Expose({ name: "message" })
  @Type(() => ProductModifyErrorMessage)
  message?: ProductModifyErrorMessage[];
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductV2 } from "./productv2";
import { Expose, Type } from "class-transformer";

export class ItemProductsV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: ProductV2 })
  @Expose({ name: "products" })
  @Type(() => ProductV2)
  products?: ProductV2[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}

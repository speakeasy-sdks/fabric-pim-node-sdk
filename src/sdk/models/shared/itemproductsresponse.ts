import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Product } from "./product";
import { Expose, Type } from "class-transformer";

export class ItemProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: Product })
  @Expose({ name: "products" })
  @Type(() => Product)
  products?: Product[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductSearch } from "./productsearch";
import { Expose, Type } from "class-transformer";


export class ItemProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: ProductSearch })
  @Expose({ name: "products" })
  @Type(() => ProductSearch)
  products?: ProductSearch[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
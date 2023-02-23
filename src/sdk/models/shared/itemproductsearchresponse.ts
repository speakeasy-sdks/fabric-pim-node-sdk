import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductSearch } from "./productsearch";


export class ItemProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: ProductSearch })
  products?: ProductSearch[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
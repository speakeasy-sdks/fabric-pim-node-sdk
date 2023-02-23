import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Product } from "./product";


export class ItemProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: Product })
  products?: Product[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
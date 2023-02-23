import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductV2 } from "./productv2";


export class ItemProductsV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: ProductV2 })
  products?: ProductV2[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
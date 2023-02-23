import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Bundle } from "./bundle";


export class BundleProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: Bundle })
  products?: Bundle[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
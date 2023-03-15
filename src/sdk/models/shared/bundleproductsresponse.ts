import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Bundle } from "./bundle";
import { Expose, Type } from "class-transformer";

export class BundleProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: Bundle })
  @Expose({ name: "products" })
  @Type(() => Bundle)
  products?: Bundle[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}

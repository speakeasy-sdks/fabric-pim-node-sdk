import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum BundleUpdateRequestActionEnum {
    Update = "UPDATE"
}
export enum BundleUpdateRequestBundlesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}

export class BundleUpdateRequestBundles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: BundleUpdateRequestBundlesActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "bundleSku" })
  bundleSku: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemSku" })
  itemSku: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;
}

export class BundleUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: BundleUpdateRequestActionEnum;

  @SpeakeasyMetadata({ elemType: BundleUpdateRequestBundles })
  @Expose({ name: "bundles" })
  @Type(() => BundleUpdateRequestBundles)
  bundles?: BundleUpdateRequestBundles[];
}
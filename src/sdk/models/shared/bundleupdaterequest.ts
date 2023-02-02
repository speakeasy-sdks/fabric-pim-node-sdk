import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BundleUpdateRequestActionEnum {
    Update = "UPDATE"
}

export enum BundleUpdateRequestBundlesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}


export class BundleUpdateRequestBundles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: BundleUpdateRequestBundlesActionEnum;

  @SpeakeasyMetadata({ data: "json, name=bundleSku" })
  bundleSku: string;

  @SpeakeasyMetadata({ data: "json, name=itemSku" })
  itemSku: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}


export class BundleUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: BundleUpdateRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: BundleUpdateRequestBundles })
  bundles?: BundleUpdateRequestBundles[];
}

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ProductResponseFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}

export class ProductResponseSuccessErrorAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ProductResponseSuccessErrorBundles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ProductResponseSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorAttributes", elemType: ProductResponseSuccessErrorAttributes })
  errorAttributes?: ProductResponseSuccessErrorAttributes[];

  @SpeakeasyMetadata({ data: "json, name=errorBundles", elemType: ProductResponseSuccessErrorBundles })
  errorBundles?: ProductResponseSuccessErrorBundles[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemIdSeq" })
  itemIdSeq?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}

export class ProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed", elemType: ProductResponseFailed })
  failed?: ProductResponseFailed[];

  @SpeakeasyMetadata({ data: "json, name=itemIds" })
  itemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=success", elemType: ProductResponseSuccess })
  success?: ProductResponseSuccess[];
}
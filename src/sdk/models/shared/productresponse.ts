import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class ProductResponseFailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;
}

export class ProductResponseSuccessErrorAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ProductResponseSuccessErrorBundles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ProductResponseSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductResponseSuccessErrorAttributes })
  @Expose({ name: "errorAttributes" })
  @Type(() => ProductResponseSuccessErrorAttributes)
  errorAttributes?: ProductResponseSuccessErrorAttributes[];

  @SpeakeasyMetadata({ elemType: ProductResponseSuccessErrorBundles })
  @Expose({ name: "errorBundles" })
  @Type(() => ProductResponseSuccessErrorBundles)
  errorBundles?: ProductResponseSuccessErrorBundles[];

  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemIdSeq" })
  itemIdSeq?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;
}

export class ProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductResponseFailed })
  @Expose({ name: "failed" })
  @Type(() => ProductResponseFailed)
  failed?: ProductResponseFailed[];

  @SpeakeasyMetadata()
  @Expose({ name: "itemIds" })
  itemIds?: string[];

  @SpeakeasyMetadata({ elemType: ProductResponseSuccess })
  @Expose({ name: "success" })
  @Type(() => ProductResponseSuccess)
  success?: ProductResponseSuccess[];
}
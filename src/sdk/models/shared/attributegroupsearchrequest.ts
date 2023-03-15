import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AttributeGroupSearchRequestInclude extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributes" })
  attributes?: boolean;
}

export class AttributeGroupSearchRequestMatchOr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class AttributeGroupSearchRequestMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeGroupSearchRequestMatchOr })
  @Expose({ name: "or" })
  @Type(() => AttributeGroupSearchRequestMatchOr)
  or?: AttributeGroupSearchRequestMatchOr[];

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string;
}
export enum AttributeGroupSearchRequestSortDirectionEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export class AttributeGroupSearchRequestSort extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "direction" })
  direction?: AttributeGroupSearchRequestSortDirectionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;
}

export class AttributeGroupSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "include" })
  @Type(() => AttributeGroupSearchRequestInclude)
  include?: AttributeGroupSearchRequestInclude;

  @SpeakeasyMetadata()
  @Expose({ name: "match" })
  @Type(() => AttributeGroupSearchRequestMatch)
  match?: AttributeGroupSearchRequestMatch;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;

  @SpeakeasyMetadata({ elemType: AttributeGroupSearchRequestSort })
  @Expose({ name: "sort" })
  @Type(() => AttributeGroupSearchRequestSort)
  sort?: AttributeGroupSearchRequestSort[];
}

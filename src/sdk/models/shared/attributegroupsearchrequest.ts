import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttributeGroupSearchRequestInclude extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: boolean;
}


export class AttributeGroupSearchRequestMatchOr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class AttributeGroupSearchRequestMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=or", elemType: AttributeGroupSearchRequestMatchOr })
  or?: AttributeGroupSearchRequestMatchOr[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}

export enum AttributeGroupSearchRequestSortDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}


export class AttributeGroupSearchRequestSort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: AttributeGroupSearchRequestSortDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;
}


export class AttributeGroupSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: AttributeGroupSearchRequestInclude;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: AttributeGroupSearchRequestMatch;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=sort", elemType: AttributeGroupSearchRequestSort })
  sort?: AttributeGroupSearchRequestSort[];
}

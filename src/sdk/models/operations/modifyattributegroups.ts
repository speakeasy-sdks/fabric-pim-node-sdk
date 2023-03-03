import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ModifyAttributeGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class ModifyAttributeGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyAttributeGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AttributeGroupRequest;
}

export class ModifyAttributeGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AttributeGroupResponse })
  attributeGroupResponse?: shared.AttributeGroupResponse[];

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
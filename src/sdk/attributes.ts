import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Attributes {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * modifyAttributeGroups - Create, update and delete attribute groups
   *
   * Attribute groups enables merchants to collect various attributes together to make it easier to manage large volume of item information. <br> This endpoint creates, updates, or deletes attribute groups. <br> **Note**: Attribute group is optional. If created, must have at least one attribute.
  **/
  modifyAttributeGroups(
    req: operations.ModifyAttributeGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyAttributeGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyAttributeGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute-group";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyAttributeGroupsResponse =
            new operations.ModifyAttributeGroupsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attributeGroupResponse = [];
              const resFieldDepth: number = utils.getResFieldDepth(res);
              res.attributeGroupResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AttributeGroupResponse,
                resFieldDepth
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyAttributeMappings - Create and Update attribute mappings
   *
   * Set your attribute mapping to begin configuring your catalog. You can update the mappings only if there are no SKUs present in the catalog.
  **/
  modifyAttributeMappings(
    req: operations.ModifyAttributeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyAttributeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyAttributeMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute/mapping";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyAttributeMappingsResponse =
            new operations.ModifyAttributeMappingsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attributeMappingResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AttributeMappingResponse,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCategoryAttributeBulk - Create, update and delete category attributes
   *
   * Creates, updates and deletes category attributes. The primary purpose is to create and edit the attributes to be assigned to categories. <br> **Note**: They are generic category attributes and not specific to a category.
  **/
  postCategoryAttributeBulk(
    req: operations.PostCategoryAttributeBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryAttributeBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryAttributeBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-category/v1/category/attribute/bulk";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCategoryAttributeBulkResponse =
            new operations.PostCategoryAttributeBulkResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bulkAttributeResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.BulkAttributeResponse,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postProductAttributeBulk - Create update and delete item attributes
   *
   * Item attributes allow you to define specific characteristics for items. Common examples of attributes include size, color, and material. Well-defined attributes are important because they enable item discovery and make catalog management easier. <br> This endpoint creates and updates item attributes to be assigned later. <br> **Note**: <br> 1) You can add and manage unlimited attributes for your items. Once they are created, they appear as a selectable option on product pages. <br> 2) In addition, you can assign attributes to items on an individual level or in bulk.
  **/
  postProductAttributeBulk(
    req: operations.PostProductAttributeBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProductAttributeBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProductAttributeBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute/bulk";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostProductAttributeBulkResponse =
            new operations.PostProductAttributeBulkResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bulkAttributeResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.BulkAttributeResponse,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchAttributeGroups - Find attribute groups
   *
   * Finds attribute groups
  **/
  searchAttributeGroups(
    req: operations.SearchAttributeGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAttributeGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAttributeGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute-group/search";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchAttributeGroupsResponse =
            new operations.SearchAttributeGroupsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attributeGroupSearchResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AttributeGroupSearchResponse,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchAttributeMappings - Find attribute mapping
   *
   * Searches for attribute mappings
  **/
  searchAttributeMappings(
    req: operations.SearchAttributeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAttributeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAttributeMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute/mapping/search";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchAttributeMappingsResponse =
            new operations.SearchAttributeMappingsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attributeMappingPaginationResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AttributeMappingPaginationResponse,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ClientError,
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ServerError,
              );
            }
            break;
        }

        return res;
      })
  }

}

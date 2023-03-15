import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Product {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * createProducts - Create items and bundles
   *
   * Creates multiple items or bundles along with their attributes. In addition, this endpoint supports data validation to ensure accuracy and consistency. <br> **Note**: <br> 1) As a prerequisite category and attributes must be created beforehand. <br> 2) To add an item variant, parentSku must be additionally specified. <br> 3) An item is assigned to only one category but it can be fetched from Alternate categories. <br> 4) Up to 50 items or bundles can be added.
   **/
  createProducts(
    req: operations.CreateProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/bulk/insert";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateProductsResponse =
        new operations.CreateProductsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productModifyError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductModifyError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProductAttribute - Get item attributes
   *
   * Item attributes define characteristics of an item. For example, item name, its identifiers, and description are the common attributes of any item. Attributes are key-value pairs (color: red) that hold information for each property of an item. <br> This endpoint gets all attributes of an item, by SKU or itemId. <br> **Note**: The *Get item* (GET /v1/product) gets item details and their attribute. So, this endpoint is recommended when you have the item SKU or item ID, and only require its attributes.
   **/
  getProductAttribute(
    req: operations.GetProductAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductAttributeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/attribute";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProductAttributeResponse =
        new operations.GetProductAttributeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productAttributePage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductAttributePage
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProducts - Get items and children items
   *
   * Items can be individual items or a bundle of items. This endpoints allows you to get a list of items - individual items and bundles, along with their attributes, children items and their details. <br> **Note**: <br> 1) Optional filter parameters can be passed in as query to narrow down the search results. <br> 2) This API will only return the count and details of Parent SKU and not its variants
   **/
  getProducts(
    req: operations.GetProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v1/product";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProductsResponse =
        new operations.GetProductsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProducts200ApplicationJSONOneOf = httpRes?.data;
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProductsV2 - Get items and limited children items
   *
   * Gets items (single item or bundles) by `skus` or parent `skus`. When a parent SKU is sent as query parameter, you'll get children items of those SKUs. When `parentSKU` is not specified, children items are not retrieved. Optionally, `page` and `size` can be used as query parameters. **Note**: <br> 1) `status` and `date` query parameters works only with pagination when parentSku is omitted. Separate responses are added for bundle and product, use the dropdown to view the corresponding response.<br> 2) when `parentSku` is passed as request parameter, it will only return the paginated response of children for the SKU given as `parentSKU`
   **/
  getProductsV2(
    req: operations.GetProductsV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsV2Request(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api-product/v2/product";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProductsV2Response =
        new operations.GetProductsV2Response({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProductsV2200ApplicationJSONOneOf = httpRes?.data;
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * productSearch - Find items
   *
   * Finds items - both individual items and bundles. Optional filter parameters help narrow down the search results. When the response is large, `page` and `size` becomes mandatory to support pagination.
   **/
  productSearch(
    req: operations.ProductSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductSearchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/search";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ProductSearchResponse =
        new operations.ProductSearchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productSearch200ApplicationJSONOneOf = httpRes?.data;
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateBundles - Update items in bundle
   *
   * Updates bundle by adding or removing items and adjusting quantities.
   **/
  updateBundles(
    req: operations.UpdateBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBundlesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/bundle/update";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateBundlesResponse =
        new operations.UpdateBundlesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.bundleUpdateResponse = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.bundleUpdateResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.BundleUpdateResponse,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateProducts - Update items and bundles
   *
   * Updates multiple items or bundles, along with their attributes. <br> **Note**: Up to 50 items or bundles can be updated.
   **/
  updateProducts(
    req: operations.UpdateProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/bulk/update";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateProductsResponse =
        new operations.UpdateProductsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productModifyError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductModifyError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * upsertProducts - Upsert items and bundles
   *
   * Creates or updates items or bundles along with their attributes. <br> **Note**: <br> 1) If the SKU already exists, this endpoint updates an item. Otherwise, creates a new item with that SKU. <br> 2) Up to 50 items or bundles can be added or updated.
   **/
  upsertProducts(
    req: operations.UpsertProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertProductsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/bulk/upsert";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpsertProductsResponse =
        new operations.UpsertProductsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.clientError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ClientError
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.productModifyError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProductModifyError
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverError = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerError
            );
          }
          break;
      }

      return res;
    });
  }
}

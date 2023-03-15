import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Category {
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
   * categoryCreate - Create category
   *
   * Creates Primary or Alternate category to organize items into logical groups. <br> **Note**: <br> 1) To add **Primary**  category, only `name` is required in the request. <br> 2) To add a **child** category, both `name` and `parentNodeId` are required. For **child** category, you can additionally specify `order` of display. <br> 3) To add an **Alternate** category, both `name` and `type` are required. <br> **Note**: Category details including category ID received in the response are required for subsequent calls. For example, it's required to *Create item* (POST /v1/product/bulk/insert).
   **/
  categoryCreate(
    req: operations.CategoryCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoryCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoryCreateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category";

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
      const res: operations.CategoryCreateResponse =
        new operations.CategoryCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.modifyCategory = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ModifyCategory
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
   * categoryModify - Modify category
   *
   * Updates category details such as name, parent, and its order of appearance amongst sibling categories.
   **/
  categoryModify(
    req: operations.CategoryModifyRequest,
    security: operations.CategoryModifySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoryModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoryModifyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api-category/v1/category/{nodeId}",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.CategoryModifySecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient!,
      security
    )!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CategoryModifyResponse =
        new operations.CategoryModifyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.modifyCategory = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ModifyCategory
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
   * getCategoriesById - Get categories
   *
   * Gets categories and their details including attributes, breadcrumbs, and details of children categories. <br> **Note**: <br> 1) Specify `ids` or `nodeIds` to get specific categories. <br> 2) Use `type` to get a specific category type. <br> 3) When query parameters are omitted, this endpoint returns a paginated response listing all Alternate categories in Active status. As a result, `size` and `page` becomes mandatory to support large data.
   **/
  getCategoriesById(
    req: operations.GetCategoriesByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category";

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
      const res: operations.GetCategoriesByIdResponse =
        new operations.GetCategoriesByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryPage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryPage
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
   * getCategoriesNodeSourceExclusions - Get category source exclusions
   *
   * Gets available exclusions applied to a category source.
   **/
  getCategoriesNodeSourceExclusions(
    req: operations.GetCategoriesNodeSourceExclusionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesNodeSourceExclusionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesNodeSourceExclusionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/source/exclusion";

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
      const res: operations.GetCategoriesNodeSourceExclusionsResponse =
        new operations.GetCategoriesNodeSourceExclusionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.nodeSourceExclusions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.NodeSourceExclusions
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
   * getCategoriesNodeSources - Get category source inclusions
   *
   * Gets all the available category sources. <br> Items are created under the Primary category, and Alternate categories are created to export alternate organizations of the Primary category. So, the Primary category is the source of items that appear in Alternate categories. The category sources are Primary categories that can be used as item sources in Alternate categories. Sources behave similar to symlinks.
   **/
  getCategoriesNodeSources(
    req: operations.GetCategoriesNodeSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesNodeSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesNodeSourcesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/source";

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
      const res: operations.GetCategoriesNodeSourcesResponse =
        new operations.GetCategoriesNodeSourcesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.nodeSources = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.NodeSources
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
   * getCategoryAttributesByID - Get assigned category attributes
   *
   * Gets all attributes assigned to a category. <br> **Note**: <br> *Get category* endpoint (GET /v1/category) returns categories, their attributes, children categories, and breadcrumb details. So, this endpoint is recommended if you have a category ID and only require its attributes.
   **/
  getCategoryAttributesByID(
    req: operations.GetCategoryAttributesByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryAttributesByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryAttributesByIDRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/attribute";

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
      const res: operations.GetCategoryAttributesByIDResponse =
        new operations.GetCategoryAttributesByIDResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attributePage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.AttributePage
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
   * getCategoryItemAttributes - Get assigned item attributes
   *
   * Gets all the item attributes for the specified category. <br> **Note**: Items may also inherit item attributes from parent categories.
   **/
  getCategoryItemAttributes(
    req: operations.GetCategoryItemAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryItemAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryItemAttributesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/item-attribute";

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
      const res: operations.GetCategoryItemAttributesResponse =
        new operations.GetCategoryItemAttributesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCategoryItemAttributes = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetCategoryItemAttributes
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
   * getCategoryItemAttributesCondition - Get item attribute conditions
   *
   * You can filter items from Alternate categories based on the conditions set using the POST /v1/category/item-attribute/condition endpoint. <br> **Note**: Items may inherit conditions from parent category as well.
   **/
  getCategoryItemAttributesCondition(
    req: operations.GetCategoryItemAttributesConditionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryItemAttributesConditionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryItemAttributesConditionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/api-category/v1/category/item-attribute/condition";

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
      const res: operations.GetCategoryItemAttributesConditionResponse =
        new operations.GetCategoryItemAttributesConditionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCategoryItemAttributeConditions =
              utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetCategoryItemAttributeConditions
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
   * getCategorySKUs - Get SKUs in a category
   *
   * Gets SKUs of all items belonging to a category. <br> **Note**: <br> 1) Categories must exist in the system to get SKUs in that category. If SKUs are not available in the given category ID, this endpoint returns an empty list.
   **/
  getCategorySKUs(
    req: operations.GetCategorySKUsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategorySKUsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategorySKUsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/sku";

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
      const res: operations.GetCategorySKUsResponse =
        new operations.GetCategorySKUsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.skuPage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.SKUPage
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
   * getCategoryTree - Get category tree
   *
   * Hierarchy of parent and children categories form a tree structure. This endpoint returns a tree of categories rooted in the category identified by `id` or `nodeId`.<br> **Note**: <br> 1) If parent category does not exist in the system, you'll get a `404 - Not found` error <br> 2) If a child category does not exist for the given parent, you'll get a success response but `children` property will show a blank array.
   **/
  getCategoryTree(
    req: operations.GetCategoryTreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryTreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryTreeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/tree";

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
      const res: operations.GetCategoryTreeResponse =
        new operations.GetCategoryTreeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryTree = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryTree
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
   * modifyCategoriesNodeSourceExclusions - Add and remove category source exclusions
   *
   * Adds and removes exclusions for category source, by ID. For example, a category source `Electronics` has Laptop, Mobile, and Tablet as children categories. It's possible to exclude Tablet using this endpoint, so that it does not appear for shoppers.
   **/
  modifyCategoriesNodeSourceExclusions(
    req: operations.ModifyCategoriesNodeSourceExclusionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyCategoriesNodeSourceExclusionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyCategoriesNodeSourceExclusionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/source/exclusion";

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
      const res: operations.ModifyCategoriesNodeSourceExclusionsResponse =
        new operations.ModifyCategoriesNodeSourceExclusionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.nodeSourcesAndExclusions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.NodeSourcesAndExclusions
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
   * modifyCategoriesNodeSources - Add and remove category source inclusions
   *
   * Adds and removes category sources. <br> Primary category is the original catalog tree consisting of nested levels of children categories and is used to place items where they belong. Alternate categories are dynamic and populated from the Primary category, which is the original source of items. Source for an Alternate category points to a Primary category, and makes all items in the Primary category appear within the Alternate category; it behaves like a symlink.
   **/
  modifyCategoriesNodeSources(
    req: operations.ModifyCategoriesNodeSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyCategoriesNodeSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyCategoriesNodeSourcesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/source";

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
      const res: operations.ModifyCategoriesNodeSourcesResponse =
        new operations.ModifyCategoriesNodeSourcesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.nodeSourcesAndExclusions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.NodeSourcesAndExclusions
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
   * postCategoryAttributeByID - Assign and unassign category attributes
   *
   * Category attributes let you define characteristics of categories and children categories. <br> This endpoint assigns or unassigns attributes of a single category. The primary purpose is to assign attributes.
   **/
  postCategoryAttributeByID(
    req: operations.PostCategoryAttributeByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryAttributeByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryAttributeByIDRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/attribute";

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
      const res: operations.PostCategoryAttributeByIDResponse =
        new operations.PostCategoryAttributeByIDResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryAttributes = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryAttributes
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
   * postCategoryItemAttributeByID - Add and remove item attribute conditions
   *
   * Adds conditions for item attributes so that items can be filtered based on these conditions, from an Alternate category. <br> For example, a Primary category called **Chairs** has three chairs of different materials. An Alternate category called **Wooden Chairs** with Primary category **Chairs** as source will list all the three chairs. Through this endpoint you can add a 'item attribute condition' to filter chairs made of wood from **Wooden Chairs**. Another example: Using this endpoint, you can combine categories and list items on sale (where sale attribute is true).
   **/
  postCategoryItemAttributeByID(
    req: operations.PostCategoryItemAttributeByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryItemAttributeByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryItemAttributeByIDRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/api-category/v1/category/item-attribute/condition";

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
      const res: operations.PostCategoryItemAttributeByIDResponse =
        new operations.PostCategoryItemAttributeByIDResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryItemAttributeConditions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryItemAttributeConditions
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
   * postCategoryItemibuteByID - Assign and unassign item attributes
   *
   * Categories lets merchants segregate and group items. They also allow specifying `mandatory` and `optional` attributes that all items within that category must have. They are used to store structured information about items. <br> This endpoint creates and updates (also deletes) item attributes for the specified category.
   **/
  postCategoryItemibuteByID(
    req: operations.PostCategoryItemibuteByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryItemibuteByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryItemibuteByIDRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/item-attribute";

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
      const res: operations.PostCategoryItemibuteByIDResponse =
        new operations.PostCategoryItemibuteByIDResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryItemAttributes = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryItemAttributes
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
   * searchCategories - Find categories
   *
   * Finds categories, by keywords, category identifiers, type, or status. <br> **Note**: <br> 1) Categories and children categories must already exist in the system. <br> 2) When query parameters are omitted, this endpoint returns a paginated response with all the categories. As a result, `page` and `size` become mandatory to accommodate large data. <br> 3) GET /v1/category (Store admin context) or Algolia search (Shopper context) is strongly recommended over this endpoint.
   **/
  searchCategories(
    req: operations.SearchCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCategoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-category/v1/category/search";

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
      const res: operations.SearchCategoriesResponse =
        new operations.SearchCategoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categoryPage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CategoryPage
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
}

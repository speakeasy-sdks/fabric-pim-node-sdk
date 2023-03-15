import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class BulkImport {
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
   * itemAttributeFileSearch - Get imported files for item attributes
   *
   * Gets a list of files used to import item attributes, along with their current statuses.
   **/
  itemAttributeFileSearch(
    req: operations.ItemAttributeFileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemAttributeFileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemAttributeFileSearchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/api-product/v1/product/file/attribute/search";

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
      const res: operations.ItemAttributeFileSearchResponse =
        new operations.ItemAttributeFileSearchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.filePaginationResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.FilePaginationResponse
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
   * itemBundleFileSearch - Get imported files for bundles
   *
   * Gets a list of files used to import bundles, along with their current statuses.
   **/
  itemBundleFileSearch(
    req: operations.ItemBundleFileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemBundleFileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemBundleFileSearchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/file/bundle/search";

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
      const res: operations.ItemBundleFileSearchResponse =
        new operations.ItemBundleFileSearchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.filePaginationResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.FilePaginationResponse
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
   * fileSearch - Get imported files for items
   *
   * Gets a list of files used to import items, along with their current statuses
   **/
  fileSearch(
    req: operations.FileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileSearchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/product/file/search";

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
      const res: operations.FileSearchResponse =
        new operations.FileSearchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.filePaginationResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.FilePaginationResponse
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
   * generateCSVfile - Generate CSV template file for items
   *
   * Generates CSV template to upload items for a specific category.
   **/
  generateCSVfile(
    req: operations.GenerateCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateCSVfileRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api-product/v1/product/bulk/template/{accountId}/{nodeId}",
      req.pathParams
    );

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GenerateCSVfileResponse =
        new operations.GenerateCSVfileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/csv`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.generateCSVfile200ApplicationCsvBinaryString = out;
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
   * generateItemAttributeCSVfile - Generate CSV template for item attributes
   *
   * Generates CSV template to upload item attributes.
   **/
  generateItemAttributeCSVfile(
    req: operations.GenerateItemAttributeCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemAttributeCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemAttributeCSVfileRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/api-product/v1/product/bulk/template/attribute";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GenerateItemAttributeCSVfileResponse =
        new operations.GenerateItemAttributeCSVfileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/csv`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.generateItemAttributeCSVfile200ApplicationCsvBinaryString = out;
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
   * generateItemAttributeS3url - Generate S3 bucket URL for item attribute import
   *
   * Generates S3 bucket URL to upload item attribute using CSV file
   **/
  generateItemAttributeS3url(
    req: operations.GenerateItemAttributeS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemAttributeS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemAttributeS3urlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/upload-url/attribute";

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
      const res: operations.GenerateItemAttributeS3urlResponse =
        new operations.GenerateItemAttributeS3urlResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getS3URLItemAttributeResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetS3URLItemAttributeResponse
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
   * generateItemBundleCSVfile - Generate CSV template for bundles
   *
   * Generates CSV template to upload bundles for a specific category.
   **/
  generateItemBundleCSVfile(
    req: operations.GenerateItemBundleCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemBundleCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemBundleCSVfileRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api-product/v1/product/bulk/template/bundle/{accountId}/{nodeId}",
      req.pathParams
    );

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GenerateItemBundleCSVfileResponse =
        new operations.GenerateItemBundleCSVfileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/csv`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.generateItemBundleCSVfile200ApplicationCsvBinaryString = out;
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
   * generateItemBundleS3url - Generate S3 bucket URL for bundle import
   *
   * Generates S3 bucket URL to upload item bundles using CSV file
   **/
  generateItemBundleS3url(
    req: operations.GenerateItemBundleS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemBundleS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemBundleS3urlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/upload-url/bundle";

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
      const res: operations.GenerateItemBundleS3urlResponse =
        new operations.GenerateItemBundleS3urlResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getS3URLBundleResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetS3URLBundleResponse
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
   * generateS3url - Generate S3 bucket URL for item import
   *
   * Generates S3 bucket URL to upload items using CSV file. Follow these steps for bulk upload using CSV: <br> 1) Download the template using *GET /api-product/v1/product/bulk/template/:accountid/:nodeId* <br> 2) Upload the url using *POST /api-product/v1/upload-url*<br> 3) Open the URL from the response of the above endpoint (*POST /api-product/v1/upload-url*), change the method to PUT, update **binary** in the requestBody type to view the select file option and upload a CSV from local system <br> 4) You may check the status using this endpoint *GET /api-product/v1/product/bulk/file/:fileId/status*
   **/
  generateS3url(
    req: operations.GenerateS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateS3urlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api-product/v1/upload-url";

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
      const res: operations.GenerateS3urlResponse =
        new operations.GenerateS3urlResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getS3URLResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetS3URLResponse
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
   * getFileStatus - Get file upload status
   *
   * Gets file upload status by using file ID
   **/
  getFileStatus(
    req: operations.GetFileStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api-product/v1/product/bulk/file/{fileId}/status",
      req.pathParams
    );

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetFileStatusResponse =
        new operations.GetFileStatusResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getFileStatus200ApplicationJSONOneOf = httpRes?.data;
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

import { Handler } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";

export const withMiddy = (handler: Handler) => {
  return middy(handler).use(jsonBodyParser()).use(httpErrorHandler());
};

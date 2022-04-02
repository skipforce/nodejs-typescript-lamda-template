import { Handler, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { withMiddy } from "../../utils/middy";
import { formatJsonResponse } from "../../utils/formatJsonResponse";

const CheckFunction = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  return formatJsonResponse(200, { message: "server works" });
};

export const handler: Handler = withMiddy(CheckFunction);

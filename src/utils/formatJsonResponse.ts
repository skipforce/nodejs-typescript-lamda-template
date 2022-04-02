export const formatJsonResponse = (status: number, body: object) => {
  return {
    statusCode: status,
    body: JSON.stringify(body),
  };
};

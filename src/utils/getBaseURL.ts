export const getBaseURL = () => {
  const baseURL = process.env.WP_API_ENDPOINT;
  if (!baseURL) throw new Error("環境変数を設定してくれ");

  return baseURL;
};

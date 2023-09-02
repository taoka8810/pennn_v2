import { getBaseURL } from "~/utils/getBaseURL";
import { WP_Media } from "~/utils/wp-type";

// エンドポイントのベースを取得
const baseURL = getBaseURL();

export const getAllMedia = async (): Promise<WP_Media[]> => {
  const res = await fetch(`${baseURL}/media`);
  return res.json();
};

export const getMediaById = async (id: number): Promise<WP_Media> => {
  const res = await fetch(`${baseURL}/media/${id}`);
  return res.json();
};

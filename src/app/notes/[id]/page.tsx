import { NotesDetailPage } from "~/components/pages/NotesDetail";
import { getCategoryById } from "~/models/category";
import { getMediaById } from "~/models/media";
import { getAllPost, getPostById } from "~/models/post";
import { getTagById } from "~/models/tag";

export async function generateStaticParams() {
  const postIdList = await getAllPost("post", ["id"]);
  return postIdList.map((post) => ({
    id: post.id.toString(),
  }));
}

type PathParams = {
  params: {
    id: string;
  };
};

export default async function NotesDetail(props: PathParams) {
  const { id } = props.params;
  const note = await getPostById(Number(id), "post").then(async (post) => {
    // サムネイルURLの取得
    const thumbnail = await getMediaById(post.featured_media);
    // カテゴリーの取得(allCategoryから一致するカテゴリーを取り出す)
    const categoryId = post.categories.pop() || 2;
    const category = await getCategoryById(categoryId);
    // タグの取得
    const tags = await Promise.all(
      post.tags.map(async (tagId) => await getTagById(tagId))
    );

    return {
      id: post.id,
      title: post.title.rendered,
      thumbnail: thumbnail,
      category: category,
      tags: tags,
      body: post.content.rendered,
      publishedDate: new Date(post.date),
      modifiedDate: new Date(post.modified),
    };
  });

  return <NotesDetailPage note={note} />;
}

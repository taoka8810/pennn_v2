import { NotesPage } from "~/components/pages/Notes";
import { getAllCategory, getCategoryById } from "~/models/category";
import { getMediaById } from "~/models/media";
import { getAllPost } from "~/models/post";
import { getAllTag, getTagById } from "~/models/tag";
import { WP_Category, WP_Media, WP_Tag } from "~/utils/wp-type";

export type NoteModel = {
  id: number;
  title: string;
  thumbnail: WP_Media;
  category: WP_Category;
  tags: WP_Tag[];
  body: string;
  publishedDate: Date;
  modifiedDate: Date;
};

export default async function Notes() {
  // 全てのカテゴリーを取得
  const allCategory = await getAllCategory();

  // タグを頻度が高い順に20件取得
  const allTag = await getAllTag(20, "desc", "count");

  // 全ての投稿を取得
  const allNote = await getAllPost("post").then(
    async (allPost) =>
      await Promise.all(
        // カテゴリー,タグ,サムネイルはidだけが返ってくるので別個で取得する
        allPost.map(async (post) => {
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
        })
      )
  );

  return <NotesPage notes={allNote} categories={allCategory} tags={allTag} />;
}

import { getAllArticles } from './(server)/api';

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      {allArticles.map((article) => (
        <li key={article.name}>{article.header}</li>
      ))}
    </>
  );
}

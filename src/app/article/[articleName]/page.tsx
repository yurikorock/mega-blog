export default async function ArticlePage({ params }: Params) {
  const { articleName } = await params;

  return <>This is article:{articleName}</>;
}

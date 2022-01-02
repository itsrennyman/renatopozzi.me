export default async function unsplash(req, res) {
  const apiUrl = `https://api.unsplash.com/users/itsrennyman/statistics?client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const stats = await (await fetch(apiUrl)).json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    views: stats.views.total,
    downloads: stats.downloads.total,
  });
}

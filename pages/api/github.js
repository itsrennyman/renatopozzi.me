const notFork = (el) => !el.fork;
const sumStars = (acc, el) => acc + el.stargazers_count;

const fetchRenny = async () =>
  await (await fetch("https://api.github.com/users/itsrennyman")).json();

const fetchRennyRepos = async () =>
  await (await fetch("https://api.github.com/users/itsrennyman/repos")).json();

const fetchAuroraRepos = async () =>
  await (await fetch("https://api.github.com/orgs/useaurora/repos")).json();

export default async function github(req, res) {
  const user = await fetchRenny();
  const rennyRepos = await fetchRennyRepos();
  const auroraRepos = await fetchAuroraRepos();

  const rennyStars = rennyRepos.filter(notFork).reduce(sumStars, 0);
  const auroraStars = auroraRepos.filter(notFork).reduce(sumStars, 0);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    followers: user.followers,
    stars: rennyStars + auroraStars,
  });
}

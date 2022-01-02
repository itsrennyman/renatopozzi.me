export default async function twitter(req, res) {
  const twitterResponse = await fetch(
    `https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=${process.env.TWITTER_USERNAME}`
  );
  const json = await twitterResponse.json();

  res.status(200).json(json[0]);
}

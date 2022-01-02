export default async function ether(req, res) {
  const etherResponse = await fetch(
    `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API_KEY}`
  );
  const json = await etherResponse.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  console.log(json);
  res.status(200).json({ ethusd: Number(json.result.ethusd) });
}

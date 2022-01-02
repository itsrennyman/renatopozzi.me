// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export default function helloAPI(req, res) {
  const n = getRandomIntInclusive(0, 1000000);

  res.status(200).json({ counter: n });
}

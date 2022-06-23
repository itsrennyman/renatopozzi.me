export default async function newsletter(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Please fill in all the fields",
    });
  }

  const result = await fetch("https://www.getrevue.co/api/v2/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, first_name: name }),
  });

  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ message: data.error.email[0] });
  }

  return res.status(201).json({
    message: "You have been added to the newsletter! Check your inbox!",
  });
}

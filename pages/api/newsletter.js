const { Client } = require("@notionhq/client");

const { NOTION_API_TOKEN, NOTION_DATABASE_ID } = process.env;

export default async function newsletter(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Please fill in all the fields",
    });
  }

  const notion = new Client({
    auth: NOTION_API_TOKEN,
  });

  await notion.pages.create({
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: {
      Email: {
        title: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
      Name: {
        rich_text: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    },
  });

  return res.status(200).json({
    message: "You have been added to the newsletter!",
  });

  //   const response = await fetch("https://api.buttondown.email/v1/subscribers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       metadata: {
  //         name: name,
  //       },
  //       referrer_url: "https://renatopozzi.me/",
  //       tags: ["website"],
  //     }),
  //   });
  //
  //   if (response.ok) {
  //     res.status(200).json({
  //       message: "You have been added to the newsletter!",
  //     });
  //   } else {
  //     res.status(500).json({
  //       message: "Something went wrong, please try again later",
  //     });
  //   }
}

const { Client } = require("@notionhq/client");

const { NOTION_API_TOKEN, NOTION_GUESTBOOK_DATABASE_ID } = process.env;

export default async function guestbook(req, res) {
  const notion = new Client({
    auth: NOTION_API_TOKEN,
  });

  if (req.method === "POST") {
    const { message, name, avatar } = req.body;

    if (!message || !name) {
      return res.status(400).json({
        message: "Please fill in all the fields",
      });
    }

    await notion.pages.create({
      parent: {
        database_id: NOTION_GUESTBOOK_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Avatar: {
          url: avatar,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    return res.status(200).json({
      message: "Message Posted! Thanks!",
    });
  }
}

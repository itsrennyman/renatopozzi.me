const { Client } = require("@notionhq/client");

const { NOTION_API_TOKEN, NOTION_GUESTBOOK_DATABASE_ID } = process.env;

export default async function guestbook(req, res) {
  const notion = new Client({
    auth: NOTION_API_TOKEN,
  });

  if (req.method === "GET") {
    const response = await notion.databases.query({
      database_id: NOTION_GUESTBOOK_DATABASE_ID,
    });

    const messages = response.results.map((result) => {
      return {
        id: result.id,
        name: result.properties.Name.title[0].plain_text,
        avatar: result.properties.Avatar.url,
        message: result.properties.Message.rich_text[0].plain_text,
        createdAt: result.created_time,
      };
    });

    return res.status(200).json(messages);
  }

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

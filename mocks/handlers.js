import { rest } from "msw";

export const handlers = [
  rest.get("/api/counter", (req, res, ctx) => {
    const number = req.url.searchParams.get("number");
    const fail = req.url.searchParams.get("fail");

    if (fail === "1") {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something went wrong",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        counter: Number(number),
      })
    );
  }),
];

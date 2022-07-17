import { signIn, useSession } from "next-auth/react";
import * as React from "react";
import { mutate } from "swr";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
const { Client } = require("@notionhq/client");

const { NOTION_API_TOKEN, NOTION_GUESTBOOK_DATABASE_ID } = process.env;

const spread = (data = [], cols = 3) => {
  const columns = Array.from({ length: cols }, () => []);
  data.forEach((item, index) => columns[index % cols].push(item));
  return columns;
};

const MessageListGrid = ({ data = [] }) => {
  const messages = data.map(({ id, name, createdAt, message }) => {
    const localizedDate = new Date(createdAt).toLocaleString();

    return (
      <div
        key={id}
        className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6 text-zinc-300 shadow-xl"
      >
        <p className="text-md font-bold">{message}</p>
        <div className="flex flex-col items-start font-medium">
          <p className="text-yellow-300">{name}</p>
          <p className="text-zinc-500 text-sm">{localizedDate}</p>
        </div>
      </div>
    );
  });

  const [first, second, third] = spread(messages, 3);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ul className="space-y-6">{first}</ul>
      <ul className="space-y-6">{second}</ul>
      <ul className="space-y-6">{third}</ul>
    </div>
  );
};

const MessageForm = () => {
  const { data: session } = useSession();
  const inputRef = React.useRef();
  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (!value) {
      alert("Please fill in all the fields");
      return;
    }

    fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
        name: session.user.name,
        avatar: session.user.image,
      }),
    }).then(async (res) => {
      if (res.ok) {
        mutate("/api/guestbook");
        alert("Message Posted!");
        formRef.current.reset();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center">
        <button
          onClick={() => signIn("github")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <svg
              className="w-6 h-6 mr-3 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            Sign In with Github!
          </span>
        </button>
      </div>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        className="flex flex-col sm:flex-row sm:items-center gap-3"
      >
        <Input ref={inputRef} placeholder="Write your message here.." />
        <Button onClick={handleSubmit}>Post It!</Button>
      </form>
    </>
  );
};

const seo = {
  title: "Renato Pozzi | Guestbook",
  description: "Want to leave a greeting? This is the place to do it.",
};

export async function getStaticProps() {
  const notion = new Client({
    auth: NOTION_API_TOKEN,
  });

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

  return { props: { data: messages }, revalidate: 10 };
}

export default function Guestbook({ data }) {
  return (
    <Container seo={seo}>
      <div className="flex flex-col gap-4 mt-12 mb-24 md:my-24">
        <h1 className="text-6xl text-center font-black text-zinc-100 tracking-tight">
          Guestbook
        </h1>
        <h2 className="text-xl sm:text-2xl text-center font-medium text-zinc-400 max-w-3xl leading-snug tracking-tight">
          You have a chance to be creative. Indulge me by leaving a comment
          below. Anything is welcome: insight, information, wisdom, or even
          humor. Surprise me!
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <MessageForm />
        <MessageListGrid data={data} />
      </div>
    </Container>
  );
}

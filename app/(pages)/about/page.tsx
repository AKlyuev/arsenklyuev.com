import Image from "next/image";
import { montserrat } from "app/fonts";

export const metadata = {
  title: "About - Arsen Klyuev",
  description: "About me.",
};

export default function Page() {
  return (
    <section>
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            src="/propic.png"
            width={736}
            height={920}
            className="block md:hidden"
            alt="My Profile Picture"
          />
          <Image
            src="/propic.png"
            width={352}
            height={440}
            className="hidden md:block"
            alt="My Profile Picture"
          />
        </div>
        <div
          className={`${montserrat.className} leading-7 flex flex-col mt-4 md:mt-0 md:pl-4 p-2 space-y-4`}
        >
          <p>Hi! I'm Arsen. I live in Chicago and work on software.</p>
          <p>
            I previously worked at Qualtrics for 4 years, in Seattle and
            remotely. I did a mix of frontend and backend work.{" "}
          </p>
          <p>
            I grew up in Maryland, and studied Computer Science and Applied Math
            at Johns Hopkins University. I love technical problems and games.
            I'm also interested in reading (see my{" "}
            <a href={"/bookshelf"} className={"cursor-pointer underline"}>
              bookshelf
            </a>
            ), entrepreneurship, and fitness/health.{" "}
          </p>
          <p>
            You can find me on{" "}
            <a
              href={"https://www.linkedin.com/in/arsenklyuev/"}
              className={"cursor-pointer underline"}
            >
              Linkedin
            </a>{" "}
            or email me at akliouev1 [at] (Google's email service).
          </p>
        </div>
      </div>
    </section>
  );
}

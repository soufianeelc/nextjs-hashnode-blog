import { convertDate } from "@/utils/convertDate";
import Image from "next/image";
import Link from "next/link";
export interface IPostProps {
  _id: string;
  slug: string;
  brief: string;
  coverImage: string;
  title: string;
  dateAdded: string;
  contentMarkdown: string;
  readTime: number;
}

export default function Post(props: IPostProps) {
  return (
    <Link
      href={"/blog/" + props.slug}
      className="inline-flex flex-col items-start justify-start gap-2.5"
    >
      <Image
        src={props.coverImage}
        width={1600}
        height={840}
        alt={props.title}
        className="rounded-lg"
      />

      <div className="flex flex-col items-start justify-start gap-2.5 ">
        <div className=" text-xl text-black">{props.title}</div>

        <div className="inline-flex items-center justify-center gap-2 text-xs font-normal text-neutral-600">
          <p>Published: {convertDate(props.dateAdded)}</p>
          <span>&bull;</span>
          <p>
            {props.readTime +
              (props.readTime === 1 ? " minute" : " minutes") +
              " read"}
          </p>
        </div>
      </div>
    </Link>
  );
}

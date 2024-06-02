import Link from "next/link";
import Image from "next/image";

const AreaLink = ({
  image,
  url,
  title,
}: {
  image: string;
  url: string;
  title: string;
}) => {
  return (
    <Link
      href={url}
      className="flex-1 aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-yellow-950/30 transition-all border border-yellow-950/10 hover:border-yellow-950/20 group hover:shadow-yellow-950/40 relative"
    >
      <Image
        src={image}
        alt=""
        width={256}
        height={368}
        className="object-cover w-full group-hover:scale-105 transition-all h-full absolute inset-0 rounded-3xl bg-yellow-100"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-75% transition-all to-transaprent rounded-3xl" />
      <span className="text-xl uppercase tracking-wider text-white relative z-10 font-semibold p-8 inline-block w-full text-center">
        {title}
      </span>
    </Link>
  );
};

export default AreaLink;

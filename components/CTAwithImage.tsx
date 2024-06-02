import Image from "next/image";
import Link from "next/link";

const CTAwithImage = ({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image: string;
}) => {
  return (
    <Link
      href={url}
      className="flex-1 group overflow-hidden rounded-3xl shadow-2xl shadow-yellow-950/10 transition-all border border-yellow-950/10 hover:border-yellow-950/20 hover:shadow-yellow-950/15 relative"
    >
      <Image
        width={500}
        height={100}
        className="object-cover group-hover:scale-105 transition-all w-full h-full absolute inset-0 rounded-3xl bg-yellow-100"
        src={image}
        alt="cta image"
      />
      <p className="text-lg w-1/2 ml-auto px-8 py-10 text-orange-950 font-medium bg-white/75 backdrop-blur">
        <span className="max-w-[120px] inline-block">{title}</span>
      </p>
    </Link>
  );
};

export default CTAwithImage;

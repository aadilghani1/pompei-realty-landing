import Image from "next/image";
import Link from "next/link";

const CTAwithImage = ({ title, url = "/" }: { title: string; url: string }) => {
  return (
    <Link
      href={url}
      className="flex-1 overflow-hidden rounded-2xl shadow-2xl shadow-yellow-950/10 transition-all border border-yellow-950/10 hover:border-yellow-950/20 hover:shadow-yellow-950/15 relative"
    >
      <Image
        width={500}
        height={100}
        className="object-cover w-full h-full absolute inset-0 rounded-2xl bg-yellow-100"
        src="/cta/vacation.png"
        alt="cta image"
      />
      <p className="text-lg w-1/2 ml-auto px-8 py-10 text-orange-950 font-medium bg-white/75 backdrop-blur">
        <span className="max-w-[120px] inline-block">{title}</span>
      </p>
    </Link>
  );
};

export default CTAwithImage;

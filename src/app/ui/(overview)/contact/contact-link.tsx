import Link from "next/link";
import Image from "next/image";

interface Props {
  platform: string;
  link: string;
  imageSize: number;
}

const ContactLink = ({ platform, link, imageSize }: Props) => {
  return (
    <Link href={`https://${link}`} className="flex flex-row items-center gap-2">
      <Image
        priority
        src={`/static/images/icons8-${platform.toLowerCase()}-70.svg`}
        height={imageSize}
        width={imageSize}
        alt={`Follow me on ${platform}`}
      />
      <p className="text-md lg:text-lg">{link}</p>
    </Link>
  );
};

export default ContactLink;

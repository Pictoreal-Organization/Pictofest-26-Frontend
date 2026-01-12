import Link from "next/link";
import Image from "next/image";

const ProfilePageCard = ({ route, image, title, styles = "" }) => {
  return (
    <Link href={route} className={`relative w-full h-24 md:h-40 ${styles}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="heading-font text-white 
                       text-2xl md:text-4xl 
                       tracking-wide translate-x-5 md:translate-x-10">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProfilePageCard;

import Link from "next/link";
import Image from "next/image";

const ProfilePageCard = ({ route, image, title, styles = "" }) => {
  return (
    <Link
      href={route}
      className={`
        group
        relative
        w-full
        h-24 md:h-40
        rounded-2xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        ease-out
        hover:scale-[1]
        hover:-translate-y-1
        ${styles}
      `}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      {/* Dark overlay on hover */}
      <div
        className="
          absolute inset-0
          bg-black/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="
            heading-font
            text-white
            text-2xl md:text-4xl
            tracking-wide
            translate-x-5 md:translate-x-10
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:tracking-widest
          "
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProfilePageCard;

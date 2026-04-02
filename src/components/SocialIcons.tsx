import type { FC } from "react";

const SocialIcons: FC = () => {
  const socials = [
    {
      id: "Github",
      href: "https://github.com/HeyaJennabe",
      src: "/images/socials/Github.svg",
    },
    {
      id: "Spotify",
      href: "https://open.spotify.com/user/8izpvibrk75uphjfh3fkoq5a4?si=1799be8c1dc24c88",
      src: "/images/socials/Spotify.svg",
    },
    {
      id: "Instagram",
      href: "https://instagram.com/j.uijt",
      src: "/images/socials/Instagram.svg",
    },
    {
      id: "Tiktok",
      href: "https://tiktok.com/@jojoenol_",
      src: "/images/socials/Tiktok.svg",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 p-2">
      {socials.map((social) => (
        <a
          className="rounded-full focus:outline-none focus:ring-3 focus:ring-blue-300"
          href={social.href}
          key={social.id}
          target="_blank"
        >
          <img
            className="rounded-full hover:brightness-75 active:brightness-50"
            src={social.src}
            style={{ height: 32, width: 32 }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
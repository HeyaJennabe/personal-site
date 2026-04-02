import type { FC } from "react";

const ProjectIcons: FC = () => {
  const socials = [
    {
        id: "GeekyGeckoGames",
        href: "https://store.steampowered.com/app/2213390/Death_Swap_End_As_One/",
        src: "/images/socials/GGG.png",
    },
    {
        id: "Quala",
        href: "https://qoala.itch.io/snatcher",
        src: "/images/socials/QG.png",
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

export default ProjectIcons;
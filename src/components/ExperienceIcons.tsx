import type { FC } from "react";

const ExperienceIcons: FC = () => {
  const links = [
    {
      id: "Github",
      href: "https://github.com/HeyaJennabe",
      src: "/images/socials/Github.svg",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 p-2">
      {links.map((link) => (
        <a
          className="rounded-full focus:outline-none focus:ring-3 focus:ring-blue-300"
          href={link.href}
          key={link.id}
          target="_blank"
        >
          <img
            className="rounded-full hover:brightness-75 active:brightness-50"
            src={link.src}
            style={{ height: 32, width: 32 }}
          />
        </a>
      ))}
    </div>
  );
};

export default ExperienceIcons;
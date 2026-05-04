import type { FC } from "react";

const Albums: FC = () => {
  const albums = [
    {
      id: "ive",
      artist: "Ive",
      title: "Switch",
      description: "",
      image: "/images/albums/Ive.png",
      spotifyLink: "",
    },
    {
      id: "billie",
      artist: "Billie Eilish",
      title: "Happier Than Ever",
      description: "",
      image: "/images/albums/Billie.png",
      spotifyLink: "",
    },
    {
      id: "lisa",
      artist: "Lisa",
      title: "Alter Ego",
      description: "",
      image: "/images/albums/Lisa.png",
      spotifyLink: "",
    },
    {
      id: "clancy",
      artist: "Twenty One Pilots",
      title: "Clancy",
      description: "",
      image: "/images/albums/Clancy.png",
      spotifyLink: "",
    },
    {
      id: "yungblud",
      artist: "Yungblud",
      title: "Weird!",
      description: "",
      image: "/images/albums/Yungblud.png",
      spotifyLink: "",
    },
  ];

  return (
    <div className="grid sm:grid-cols-5 gap-4 w-full items-center justify-center">
      {albums.map((album) => (
        <div className="flex sm:flex-col  sm:w-full items-center">
            <img
                className="rounded-2xl self-center w-[50%] sm:w-full object-contain mb-2"
                src={album.image}
            />
            <div className="flex flex-col items-center w-full">
              <h3 className="font-bold text-xl text-center overflow-hidden">{album.artist}</h3>
              <h4 className="italic text-lg">{album.title}</h4>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Albums;
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
    {
      id: "slipknot",
      artist: "Slipknot",
      title: "Slipknot",
      description: "",
      image: "/images/albums/Slipknot.png",
      spotifyLink: "",
    },
    {
      id: "aespa",
      artist: "Aespa",
      title: "Armageddon",
      description: "",
      image: "/images/albums/Aespa.png",
      spotifyLink: "",
    },
    {
      id: "jennie",
      artist: "Jennie",
      title: "Ruby",
      description: "",
      image: "/images/albums/Jennie.png",
      spotifyLink: "",
    },
  ];

  return (
    <div className="flex flex-row gap-4 w-full overflow-x-scroll">
      {albums.map((album) => (
        <div className="flex flex-col items-center min-w-[40%] sm:min-w-[33%] md:min-w-[25%]">
            <img
                className="rounded-2xl self-center w-full object-contain"
                src={album.image}
            />
            <div className="flex flex-col text-center items-center w-full my-2">
              <h3 className="font-bold text-xl overflow-hidden">{album.artist}</h3>
              <h4 className="italic text-lg">{album.title}</h4>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Albums;
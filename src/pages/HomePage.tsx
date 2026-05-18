import type { FC } from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import Albums from "../components/Albums";

function getAge(): number {
    let now: Date = new Date();
    let birthday: Date = new Date(now.getFullYear() + "-04-16");

    let hasBirthdayBeenYet: boolean = now.getTime() - birthday.getTime() > 0;
    let age: number = now.getFullYear() - 2002;

    return hasBirthdayBeenYet ? age : age - 1;
}

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <section id="Intro" className="relative h-[80vh]">
        <img className="z-0 object-cover absolute h-full w-full rounded-b-2xl" src="/images/frutiger.png" alt="bg"/>
        <div className="absolute h-full w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">
          <div className="relative z-10 lg:col-span-2 xl:col-span-1 lg:overflow-y-hidden">
            <img className="absolute bottom-0 w-full" src="/images/me.png" alt="Ikzeluf" />
          </div>
          <div className="flex z-20 justify-center p-4 order-first lg:order-2">
            <div className="self-center rounded-lg bg-gray-700/50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">Heya, ik ben Jenna!</h1>
              <h2>Software developer</h2>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 text-justify">
          <h2 className="text-4xl font-bold">Over mij:</h2>
          <br />
          <p>
            Mijn naam is Jenna Uijtdewilligen. Ik ben {getAge()} jaar en woon in Bergen op Zoom.
            In 2024 ben ik afgestudeerd voor de opleiding HBO Informatica aan Hogeschool Rotterdam. 
            Sindsdien werk ik aan allerlei websites, games, PowerPoints en andere digitale creatieve projecten.
          </p>
          <br />
          <p>
            Ik ben een enorme muziekliefhebber! 
            Ik ga regelmatig naar allerlei concerten van mijn favoriete artiesten. 
            De ene keer vind je mij op een k-pop concert en een week later in een metal moshpit.
            Mijn favoriete albums verzamel ik ook op CD of vinyl.
            Mijn collectie zal ik op een later moment aan deze website toevoegen :)
          </p>
          <br />
          <p>
            Verder houd ik er ook van om een game te spelen. De laatste tijd ben ik helemaal weg van Genshin Impact. 
            Maar het liefst speel ik iets samen met mijn vrienden zoals Mario Party of Wii Sports! 
            Ook ben ik enorm fan van Xenoblade Chronicles en The Legend of Zelda.
          </p>
          <br />
          <p>
            Voor mij is inclusiviteit erg belangrijk. 
            Ik hou ervan om volledig mezelf te kunnen zijn bij mijn vrienden en familie. 
          </p>
          <br />
          <div className="w-full flex flex-row justify-center gap-4">
            <img className="hidden sm:block h-auto w-[16%]" src="images/VectorLeft.png" alt="vectorLeft" />
            <div className="w-full sm:w-[75%] h-full self-center">
              <img className="w-full h-auto rounded-2xl" src="images/outside.png" alt="outside" />
            </div>
            <img className="hidden sm:block h-auto w-[16%]" src="images/VectorRight.png" alt="vectorRight" />
          </div>
        </div>
      </section>
      <section id="Music" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8">
          <h2 className="text-4xl font-bold">Mijn favoriete albums:</h2>
          <br />
          <br />
          <Albums />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
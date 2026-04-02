import type { FC } from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

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
        <img className="z-0 object-cover absolute h-full w-full" src="/images/frutiger.png" alt="bg"/>
        <div className="z-10 absolute h-full w-full grid grid-cols-1 sm:grid-cols-2">
          <div className="relative">
            <img className="absolute bottom-0 w-full" src="/images/me.png" alt="Ikzeluf" />
          </div>
          <div className="flex justify-center p-4 order-first sm:order-2">
            <div className="self-center rounded-lg bg-gray-700/50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">Heya, ik ben Jenna!</h1>
              <h4>Software developer</h4>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 text-justify">
          <h1 className="text-4xl font-bold">Over mij:</h1>
          <br />
          <p>
            Mijn naam is Jenna Uijtdewilligen. Ik ben {getAge()} jaar en woon in Bergen op Zoom.
            In 2024 ben ik afgestudeerd voor de opleiding HBO Informatica aan Hogeschool Rotterdam. 
            Sindsdien werk ik aan allerlei websites, games, powerpoints en andere digitale creatieve projecten.
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
        </div>
      </section>
      <section id="Experience" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8 text-justify">
          <h1 className="text-4xl font-bold ">Werkervaring:</h1>
          <br />
          <p>
            Alhoewel mijn werkervaring in webdevelopment zit, zijn mijn interesses heel breed. 
            Zo heb ik me verdiept in onderwerpen als artificiële intelligentie en het ontwikkelen van games. 
            Deze zijn te vinden op mijn <a className="text-blue-500 hover:text-blue-400 hover:underline" href="/projects">projectenpagina</a>.
          </p>
          <br />
          <p className="text-xl font-semibold">Fastware - Bergen op Zoom</p>
          <br />
          <p className="text-lg font-semibold">Full Stack Developer</p>
          <p>
            Na het afstuderen heb ik gewerkt als Full Stack developer. 
            Ik was verantwoordelijk om zelfstandig aan een grootschalig maatwerkpakket te werken.
          </p>
          <p>Maart 2024 - Mei 2025 · 1 jaar 3 maanden</p>
          <br />
          <p className="text-lg font-semibold">Afstudeerstage</p>
          <p>
            Mijn afstudeerstage heb ik bij fastware doorlopen. 
            Mijn afstudeeropdracht was het ontwikkelen van een import/export module voor een bestaand project.
          </p>
          <p>September 2023 - Februari 2024 · 6 maanden</p>
          <br />
          <p className="text-lg font-semibold">Web Developer</p>
          <p>
            Voor de start van mijn afstudeerstage heb ik kort als webdeveloper gewerkt. 
            Hier was ik verantwoordelijk voor het ontwikkelen van een interne website.
          </p>
          <p> Juli 2023 - September 2023 · 3 maanden</p>
          <br />
          <p className="text-lg font-semibold">Derdejaars stage</p>
          <p>
            Bij Fastware heb ik mijn derdejaars stage gelopen met een functie
            als webdeveloper. Mijn stageopdracht was het ontwikkelen van een intern project.
          </p>
          <p>Oktober 2021 - Februari 2022 · 4 maanden</p>
        </div>
      </section>
      <section id="Education" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 text-justify">
          <h1 className="text-4xl font-bold">Opleiding:</h1>
          <br />
          <img src="/images/education/Hogeschool-Rotterdam.png" className="h-20 px-2" />
          <br />
          <p className="text-lg font-semibold">Informatica</p>
          <p>September 2019 - Februari 2024</p>
          <a
            className="text-blue-500 hover:text-blue-400 hover:underline"
            href="https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/informatica/voltijd"
            target="_blank"
          >
            Bezoek website
          </a>
          <br />
          <br />
          <p>
            Tijdens mijn studie heb ik leren programmeren aan de hand van Python en C#. 
          </p> 
          <br />
          <p>
            Vervolgens ben ik verder gegaan in het leren van webdevelopment gerelateerde onderwerpen, zoals Frameworks, SQL en API's. 
            Hiermee ben ik verder aan de slag gegaan tijdens mijn derdejaars stage.
          </p> 
          <br />
          <p>
            Vervolgens ben ik voor mijn interne minor bezig geweest met Artificial Intelligence.
            Hier heb ik geleerd over de onderwerpen Machine Learning en Deep Learning.
          </p> 
          <br />
          <p>
            Mijn tweede minor stond in het teken van Game Development & Design. 
            Hiervoor heb ik zowel 2D als 3D games mogen ontwikkelen.
          </p> 
          <br />
          <p>
            Daarna heb ik mijn studie afgerond met een afstudeerstage in webdevelopment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
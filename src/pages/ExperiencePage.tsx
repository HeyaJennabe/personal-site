import type { FC } from "react";
import Navbar from "../components/Navbar";
import ExperienceIcons from "../components/ExperienceIcons";

const ExperiencePage: FC = () => {
  return (
    <div>
      <Navbar />
      <section id="Intro" className="relative h-[80vh]">
        <img className="z-0 object-cover absolute h-full w-full rounded-b-2xl" src="/images/frutiger.png" alt="bg"/>
        <div className="z-10 absolute h-full w-full grid grid-cols-1 sm:grid-cols-2">
          <div className="relative">
            <img className="absolute bottom-0 w-full" src="/images/me.png" alt="Ikzeluf" />
          </div>
          <div className="flex justify-center p-4 order-first sm:order-2">
            <div className="self-center rounded-lg bg-gray-700/50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">Heya, ik ben Jenna!</h1>
              <h2>Mijn ervaring als Software developer</h2>
              <ExperienceIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 text-justify">
          <h2 className="text-4xl font-bold">Over mij:</h2>
          <br />
          <p>
            Ik ben Jenna, een creatieve en ambitieuze software developer. 
            Met een sociale en inclusieve houding werk ik graag samen aan interessante projecten.
          </p>
          <br />
          <p>
            Ik ben gespecialiseerd in webdevelopment, waar ik graag werk aan de mooiste websites of 
            mijn unieke inzicht toepas op complexe applicaties. 
          </p>
          <br />
          <p>
            In mijn vrije tijd werk ik aan diverse projecten van Game development tot mijn uitbundige PowerPoints. 
            Enkele van deze projecten zijn te zien op mijn <a href="/projects">projectenpagina</a>.
          </p>
        </div>
      </section>
      <section id="Experience" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8">
          <h2 className="text-4xl font-bold ">Werkervaring:</h2>
          <br />
          <h3 className="font-bold text-2xl">Fastware</h3>
          <h4 className="italic text-lg">Full Stack Developer</h4>
          <p className="text-gray-400">juli 2023 - mei 2025</p>
          <ul className="list-disc p-4 leading-8">
            <li>
                Voornamelijk gewerkt aan een administratiepakket op maat gemaakt voor een groothandel.
            </li>
            <li>
                Verantwoordelijk voor het leiden van vergaderingen met de opdrachtgever.
            </li>
            <li>
                Front end ontwikkeling met de Typescript versie van Sveltekit, aangevuld met Tailwind voor styling.
            </li>
            <li>
                Back end ontwikkeling met het PHP framework Symfony, met een MariaDB database.
            </li>
            <li>
                End-to-end testing met Playwright. 
            </li>
          </ul>
          <br />
          <p className="italic text-lg">Stagiar Full Stack Developer</p>
          <p className="text-gray-400">oktober 2021 - februari 2022</p>
          <ul className="list-disc p-4 leading-8">
            <li>
              <p>
                Gewerkt aan een intern maatwerkpakket met het PHP framework Symfony.
              </p>
            </li>
            <li>
              <p>
                Front end ontwikkeling op basis van Twig Templates.
              </p>
            </li>
            <li>
              <p>
                Unit-testing aan de hand van PHPUnit.
              </p>
            </li>
          </ul>
          <br />
          <h3 className="font-bold text-2xl">Overige ervaring</h3>
          <br />
          <h4 className="text-lg"><b>Minor Game development</b> | Artist & Designer</h4>
          <ul className="list-disc p-4 leading-8">
            <li>
                Grafisch ontwerpen van 2D beelden. 
            </li>
            <li>
                3D modelleren in het programma Blender.
            </li>
            <li>
                Gewerkt aan audiodesign en muziekcomposities.
            </li>
            <li>
                Ontwerpen van User Interfaces.
            </li>
            <li>
                Samenwerken binnen team van 16 personen. 
            </li>
          </ul>
        </div>
      </section>
      <section id="Education" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 text-justify">
          <h2 className="text-4xl font-bold">Opleiding:</h2>
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
          <h4 className="italic text-lg">Verloop studie</h4>
          <p className="text-gray-400">Mijn proces in het leren van het vak</p>
          <ul className="list-disc p-4 leading-8">
            <li>
                In mijn eerste jaar heb ik leren programmeren aan de hand van Python en C#.
            </li>
            <li>
                Vervolgens ben ik verder gegaan in het leren van webdevelopment gerelateerde onderwerpen, zoals Frameworks, SQL en API's. 
                Hiermee ben ik verder aan de slag gegaan tijdens mijn derdejaars stage.
            </li>
            <li>
                Vervolgens ben ik voor mijn interne minor bezig geweest met Artificial Intelligence.
                Hier heb ik geleerd over de onderwerpen Machine Learning en Deep Learning.
            </li>
            <li>
                Mijn tweede minor stond in het teken van Game Development & Design. 
                Hiervoor heb ik zowel 2D als 3D games mogen ontwikkelen.
            </li>
            <li>
                Daarna heb ik mijn studie afgerond met een afstudeerstage in webdevelopment.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
import type { FC } from "react";
import Navbar from "../components/Navbar";
import ProjectIcons from "../components/ProjectIcons";

const ProjectsPage: FC = () => {
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
              <h1 className="text-4xl font-semibold">Mijn projecten!</h1>
              <h4>School & Persoonlijke projecten</h4>
              <ProjectIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="Gecko" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold">Death Swap: End as One</h1>
            <br />
            <p>3D Game project</p>
            <br />
            <br />
            <div className="text-justify">
              <p>
                Death Swap is een 3D horror game gemaakt tijdens de minor
                Game Development & Design. Dit project hebben we in een
                samenwerking van 16 personen gerealiseerd.
              </p>
              <br />
              <br />
              <p>
                In Death Swap, bevind je je in een verlaten laboratorium, waar een experiment voor teleportatie compleet is misgegaan. 
                Vind een uitweg door diverse puzzels met je partner op te lossen. 
                De enige die je veilig kan houden, is de ander. 
                Heb jij het vertrouwen dat je partner je red in een noodgeval?  
              </p>
              <br />
              <br />
              <p>
                De unieke twist in deze game is dat je op elk gewenst moment van locatie kan wisselen met het monster. 
                Doe je dit naast je partner is het game over. Wordt je achterna gezeten is je enige hoop dat je partner swapt.
              </p>
            </div>
            <br />
            <br />
            <p>Death Swap: End as One is gratis te spelen via Steam!</p>
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://store.steampowered.com/app/2213390/Death_Swap_End_As_One/"
              target="_blank"
            >
              Link naar de Steam pagina!
            </a>
          </div>
          <div>
            <img src="/images/projects/Death-Swap.png" alt="DeathSwap" />
          </div>
        </div>
      </section>
      <section id="Qoala" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8 md:px-8">
          <div>
            <h1 className="text-4xl font-bold">Snatcher!</h1>
            <br />
            <p>2D Game project</p>
            <br />
            <br />
            <div className="text-justify">
              <p>
                Snatcher is een 2D mobile game gemaakt tijdens de minor 
                Game Development & Design. Dit project is in een team van 6
                personen gemaakt in 6 weken.
              </p>
              <br/>
              <br/>
              <p>
                Het is weer zover... Je moet voor je boze oma de boodschappen doen. 
                Beter schiet je op, anders wordt ze nog bozer. Ren door de supermarkt en haal alles waar oma om vraagt. 
                Vergeet je wisselgeld niet!
              </p>
              <br/>
              <br/>
              <p>
                In snatcher ren je door een oneindige supermarkt. 
                Hier ontwijk je obstakels, en pak je de producten die oma vraagt. 
                Hoe bozer oma wordt, hoe sneller het spel zal zijn. Hoe ver kan jij komen?
              </p>
            </div>
            <br />
            <br />
            <p>Snatcher is momenteel tijdelijk niet te downloaden.</p>
            <p>Totdat deze weer te spelen is, kan je de eerste demo bekijken.</p>
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://qoala.itch.io/snatcher"
              target="_blank"
            >
              Link naar de oude demo!
            </a>
          </div>
          <div>
            <img src="/images/projects/Snatcher.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
import type { FC } from "react";
import Navbar from "../components/Navbar";
import ProjectIcons from "../components/ProjectIcons";

const ProjectsPage: FC = () => {
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
              <h1 className="text-4xl font-semibold">Dit zijn mijn projecten!</h1>
              <h2>School & Persoonlijke projecten</h2>
              <ProjectIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="Bonus" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-bold">The Bonus Level</h3>
            <br />
            <h4>PowerPoint Game project</h4>
            <br />
            <br />
            <div className="text-justify">
              <p>
                The Bonus Level is een game gemaakt in PowerPoint
                voor de "Make us laugh contest". Voor dit project combineer ik alle
                kennis over PowerPoint die ik de afgelopen 7 jaar heb opgebouwd.
              </p>
              <br />
              <br />
              <p>
                In The Bonus Level, speel je door diverse bekende game scenario's, waarin je de meest onverwachte twists zult ontdekken. 
                Meer hierover deel ik op release.
              </p>
              <br />
              <br />
              <p>
                De humor in The Bonus Level is expres over de top. 
                Deze is karakteristiek voor de jury van de competitie. 
                Het doel van dit spel is om te laten zien hoe bekende game elementen in PowerPoint mogelijk zijn.
              </p>
            </div>
            <br />
            <br />
            <p>The Bonus Level zal worden uitgebracht op 31 mei 2026!</p>
          </div>
          <div>
            <img className="rounded-2xl" src="/images/projects/Bonus.png" alt="Bonus" />
          </div>
        </div>
      </section>
      <section id="Gecko" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8 md:px-8">
          <div>
            <h3 className="text-4xl font-bold">Death Swap: End as One</h3>
            <br />
            <h4>3D Game project</h4>
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
            <img className="rounded-2xl" src="/images/projects/Death-Swap.png" alt="DeathSwap" />
          </div>
        </div>
      </section>
      <section id="Qoala" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-bold">Snatcher!</h3>
            <br />
            <h4>2D Game project</h4>
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
                In Snatcher ren je door een oneindige supermarkt. 
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
            <img className="rounded-2xl" src="/images/projects/Snatcher.png" />
          </div>
        </div>
      </section>
      <section id="Klimatus" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8 md:px-8">
          <div>
            <h3 className="text-4xl font-bold">Klimatus</h3>
            <br />
            <h4>PowerPoint Game project</h4>
            <br />
            <br />
            <div className="text-justify">
              <p>
                Klimatus was mijn eerste voltooide PowerPoint game. 
                Tijdens het keuzevak "Serious Games" heb ik deze game ontwikkeld. 
                Aangezien dit project een prototype is, bedoeld voor een presentatie, bevat deze game geen manier om te verliezen.
              </p>
              <br />
              <br />
              <p>
                Er gebeuren vreemde dingen in de stad Klimatus. 
                De medewerkers van de fabriek voeren vreemde praktijken uit. 
                De natuur begint vreemde dingen te vertonen. 
                Kom jij er achter wat er gaande is?
              </p>
              <br />
              <br />
              <p>
                In Klimatus probeer je door kleine acties de natuur te helpen. 
                Wat begint met het opruimen van lege flessen, loopt uit tot het doven van een bosbrand. 
                Ben jij in staat om de stad te redden?
              </p>
            </div>
            <br />
            <br />
            <p>Klimatus is gratis te downloaden! PowerPoint is vereist.</p>
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://drive.google.com/drive/folders/1gt5iyU5o0OJLN08X3wnYmS__8A7b9kro?usp=sharing"
              target="_blank"
            >
              Link naar de download pagina!
            </a>
          </div>
          <div>
            <img className="rounded-2xl" src="/images/projects/Klimatus.png" alt="Klimatus" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
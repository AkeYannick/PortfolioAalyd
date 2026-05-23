import todoimag from "../assets/todoimag.png";
import cesaimag from "../assets/cesaimag.png";
import { MoveRight } from "lucide-react";


  type Elmt = {
    id: number;
    image: string;
    titre: string;
    description: string;
    technologies: string[];
    link: string;
  };
    
  const ListElmt: Elmt[] = [
    {
      id: 1,
      image: todoimag,
      titre: "Todo Liste",
      description: "Application web de gestion de tâche",
      technologies: ["ReactJS", "localStorage", "tailwindCss", "TypeScript"],
      link: ""
    },
    {
      id: 2,
      image: cesaimag,
      titre: "App web CESA",
      description: "Application web de gestion d'école",
      technologies: ["ReactJS", "localStorage", "NextJs"],
      link: "",
    },
    {
      id: 3,
      image: "",
      titre: "App web CESA",
      description: "Application web de gestion d'école",
      technologies: ["ReactJS", "localStorage", "NextJs"],
      link: "",
    },
  ]


const Realisations = () => {
  return (
    <div className="bg-[#BBD5DA] w-full min-h-screen p-10 pt-20 py-40" id="realisation">
      <div>
        <span className="text-[#FF0000] font-rosario">// REALISATIONS</span>
        <h2 className="text-4xl font-bold text-black font-serif">Projets récents</h2><br />
        <p className="font-rosario">Une sélection illustrant mon savoir-faire de Développeur Web</p><br />
      </div>

      <div className="flex flex-col gap-20">
        <div className="md:flex md:gap-10 flex flex-wrap gap-15 ">            {
            ListElmt.map((events, index)=>(
            <div key={index} className="w-90 h-95 rounded-sm shadow-2xs bg-amber-100">
              <h2><img src={events.image} className="flex rounded-t-sm justify-center items-center" alt="" /> </h2>

              <div className="bg-white w-full h-50 rounded-b-sm p-5">
                <h2 className="font-bold">{events.titre}</h2>
                <p>{events.description}</p><br />

                    <div key={index} className="flex gap-3 flex-wrap">
                      {
                        events.technologies.map((eventts, index)=>(
                          <span key={index} className=" px-3 rounded-sm bg-[#BBD5DA]">{eventts}</span>
                        ))
                      }
                    </div>   

                    <div>
                      <a href={events.link}><h2 className="pt-5 font-bold font-serif flex gap-2 hover:text-orange-500 transition-all duration-200"><MoveRight />GitHub</h2></a>
                    </div>    
              </div>
            </div>
            ))
            }
        </div>

       
      </div>

    </div>

      
  
  );
};

export default Realisations;
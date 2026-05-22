import { useEffect, useState } from "react"


const Stack = () => {

  const[reactprogress, setReactprogress] = useState(0);
  const[phpprogress, setPhpprogress] = useState(0);
  const[wordpressprogress, setWordpressprogress] = useState(0);
  const[htcssprogress, setHtcssprogress] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setReactprogress(50)
      setPhpprogress(60);
      setWordpressprogress(70);
      setHtcssprogress(80);
    },)
  }, []);

  return (
    <div className="bg-[#DFF1F1] w-full min-h-screen p-10 pt-20" id="stack">
      <div>
        <span className="text-[#FF0000] font-rosario">// STACK TECHNIQUE</span>
        <h2 className="text-4xl font-bold text-black font-serif">Technologies <span className="text-[#FF0000]">maîtrisées</span></h2><br />
        <p className="font-rosario"> Un écosystème complet pour créer des solutions web robustes, du prototype à la production.</p><br />
      </div>

      <div className="flex flex-col gap-5">

        <div className="md:flex md:gap-5">

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">React</h1>
              <h4 className="font-rosario">50%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${reactprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Front-end Framework</h2>
          </div><br/>

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">Vite.js</h1>
              <h4 className="font-rosario">50%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${reactprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Outil de construction</h2>
          </div><br/>

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">Node.js</h1>
              <h4 className="font-rosario">50%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${reactprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Exécution du backend</h2>
          </div>

        </div>

        <div className="md:flex md:gap-5">

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">PHP</h1>
              <h4 className="font-rosario">60%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${phpprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Langage back-end</h2>
          </div><br/>

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">MySQL</h1>
              <h4 className="font-rosario">60%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${phpprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Base de données</h2>
          </div><br/> 

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">WordPress</h1>
              <h4 className="font-rosario">70%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${wordpressprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">CMS</h2>
          </div>

        </div>

         <div className="md:flex md:gap-5">

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">HTML / CSS</h1>
              <h4 className="font-rosario">80%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${htcssprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Fondations Web</h2>
          </div><br/>

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">JavaScript</h1>
              <h4 className="font-rosario">70%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${wordpressprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Langage universel</h2>
          </div><br/>

          <div className="bg-white rounded-sm w-full md:w-130 h-30 md:h-35 shadow-2xs p-5">
            <div className="flex justify-between py-2">
              <h1 className="font-bold font-serif">Git et GitHub</h1>
              <h4 className="font-rosario">50%</h4>
            </div>
            <div className="bg-[#DFF1F1] rounded-2xl h-3 w-full overflow-hidden">
              <div className="bg-amber-700 w-1/2 h-3 rounded-2xl transition-all duration-1000" style={{ width: `${reactprogress}%`}}/>
            </div>
            <h2 className="pt-3 font-serif">Gestion des versions et CI/CD</h2>
          </div>

          </div>

      </div>

     

    </div>
  
  );
};

export default Stack;
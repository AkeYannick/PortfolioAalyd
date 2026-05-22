import BlockApropos from "../Components/BlockApropos";

const Apropos = () => {
    
  

  return (
    <div className="bg-[#F5F5F5] w-full h-2/3 p-10 pt-30" id="Apropos">
      <div className="md:flex md:justify-between">

        <div>
          <span className="text-[#FF0000] font-rosario">// A PROPOS</span>
          <h2 className="text-3xl font-bold text-black font-serif">Qui suis-je ?</h2><br />
          <div className="flex gap-5">
            <div className="border-2 border-[#FF0000] h-15"/>
            <p className="font-rosario italic text-xl">"Le code bien écrit est une forme d'art — lisible, <br /> maintenable et élégant."</p><br />
          </div><br />
          <p>Développeur web & mobile full stack passionné, je conçois des solutions digitales <br /> modernes pour startups et entreprises. Mon approche combine rigueur technique et <br /> sens du détail pour livrer des produits qui font la différence. <br /><br />Que ce soit une SPA React ultra-rapide, une API Node.js robuste ou un site <br /> WordPress sur mesure, j'accompagne chaque projet de la conception à la mise en <br /> production. </p><br />
          <p className="bg-[#DFF1F1] py-2 px-5 rounded-sm text-gray-600">Disponible pour des missions freelance et des collaborations à long terme.</p>
        </div><br/>

        <div className="flex flex-col gap-5">

          <BlockApropos titre={"Expérience"} description={"3+ ans en développement web & mobile"} icontext={"EX"} />
          <BlockApropos titre={"Stack"} description={"React · Node.js · PHP · MySQL · WordPress"} icontext={"ST"}/>
          <BlockApropos titre={"GitHub"} description={"Contributions open source actives"} icontext={"GH"}/>
          <BlockApropos titre={"Langues"} description={"Français · Anglais"} icontext={"LG"}/>
          <BlockApropos titre={"Localisation"} description={"Abidjan, Côte d'Ivoire"} icontext={"LO"}/>
   
        </div>
        
      </div>
        
    </div>
  );
};

export default Apropos;
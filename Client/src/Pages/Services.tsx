import BlockServices from "../Components/BlockServices";




const Services = () =>{
    return(

    <div className="bg-[#DFF1F1] w-full min-h-screen p-10 pt-30" id="service">
        <div>
            <span className="text-[#FF0000] font-rosario">// CE QUE JE FAIS</span>
            <h2 className="text-5xl font-bold text-black font-serif">Mes services</h2><br />
            <p className="font-rosario"> Des prestations adaptées à chaque besoin, du MVP à la solution enterprise.</p><br />
        </div>

        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="md:flex md:gap-5">
                <BlockServices spantitre={"01 //"} titre={"Front-end React"} text={"Interfaces modernes, responsives et accessibles avec React & Vite."}/><br/>

                <BlockServices spantitre={"02 //"} titre={"API & Back-end"} text={"APIs REST robustes avec Node.js ou PHP, auth JWT, intégrations."}/><br/>

                <BlockServices spantitre={"03 //"} titre={"Base de données"} text={"Modélisation, optimisation et administration MySQL."}/><br/>
            </div>
            <div className="md:flex md:gap-5">
                <BlockServices spantitre={"04 //"} titre={"WordPress"} text={"Thèmes sur mesure, WooCommerce, plugins, SEO & performance."}/><br/>

                <BlockServices spantitre={"05 //"} titre={"Git & DevOps"} text={"Versioning, CI/CD GitHub Actions, déploiement en production."}/><br/>

                <BlockServices spantitre={"06 //"} titre={"Audit & Conseil"} text={"Revue de code, architecture, optimisation de performance."}/><br/>
            </div>
        </div>
     

    </div>
    )
}
export default Services;
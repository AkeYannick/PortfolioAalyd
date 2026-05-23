import { Dot } from "lucide-react";
import Image1 from "../assets/Image1.png"

const Hero = () =>{
    return(
        <div className="pt-35 px-10 md:flex bg-[#F5F5F5] justify-between">
            <div>
                <span className="text-[#FF0000] font-rosario">// DEVELOPPEUR WEB</span>
                <h2 className="text-3xl font-bold text-black font-serif">Je construis des <br /> expériences <br /><span className="text-[#FF0000] ">web modernes.</span></h2><br />
                <p className="font-rosario">Full stack passionné — du front-end React/Vite aux API Node.js & <br /> PHP, en passant par MySQL et WordPress. Je transforme vos <br /> idées en produits performants.</p><br /><br />
                <div className="flex items-center gap-5">
                    <a href=""><button className="bg-[#FF0000] text-white py-3 px-5 rounded-sm font-bold cursor-pointer">Voir mes projets</button></a>
                    <a href=""><button className="border border-black text-black py-3 px-5 rounded-sm font-bold hover:border-[#FF0000] hover:text-[#FF0000] cursor-pointer">Travaillons ensemble</button></a>
                </div>
            </div><br/>

            <div>
                <div className="w-70 md:w-90 h-120 rounded-xl bg-[#BBD5DA] border p-5">
                    <div className="flex justify-center items-center">
                        <img src={Image1} width={150} alt=""  className="rounded-full bg-[#F5F5F5]"/>
                    </div>
                    <h2 className="text-2xl font-bold font-serif">AKE.Dev</h2>
                    <span className="text-[#FF0000] font-mono">// DEVELOPPEUR WEB</span><br /><br />
                    <div className="border-t-2 border-t-[#DFF1F1]"/>    
                    <div className="flex justify-between font-rosario">
                        <div className="flex flex-col gap-1">
                            <h2>Expérience</h2>
                            <h2>Spécialité</h2>
                            <h2>Localisation</h2>
                            <h2>Github</h2>
                        </div>
                        <div className="font-bold flex flex-col gap-1">
                            <h3>2 ans</h3>
                            <h3>Web</h3>
                            <h3>Abidjan, CI</h3>
                            <h3>........</h3>
                        </div>
                    </div>
                    <div className="border-t-2 border-t-[#DFF1F1]"/><br />
                    <div className="flex justify-between items-center">
                        <h2 className="font-rosario">Statut</h2>
                        <h3 className="font-bold font-rosario flex items-center"><Dot size={60} color="#FF0000" />Disponible</h3>
                    </div>
                    

                </div>
            </div>



        </div>
    )
}
export default Hero;

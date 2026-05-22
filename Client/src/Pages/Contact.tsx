import { GitMerge, Mail, MapPinPlus, MoveRight, Music2, } from "lucide-react";
import BlockContact from "../Components/BlockContact";
import { useState } from "react";


const Contact = () => {
    const Stylelabel = "font-rosario font-bold";
    const StyleInput = "w-full md:w-150 py-3 px-2 rounded-sm border bg-[#F5F5F5]";

    const[prenom, setPrenom] = useState("");
    const[nom, setNom] = useState("");
    const[email, setEmail] = useState("");
    const[sujet, setSujet] = useState("");
    const[message, setMessage] = useState("");



    const AjouterElmt = async() =>{
      try{
        const res = await fetch("http://localhost:5000/contact",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { 
            prenom, 
            nom, 
            email, 
            sujet, 
            message 
          }),
        });

        const data = await res.json();
        console.log(data);
        alert("Message envoyé !");

        } catch (error) {
          console.log(error);
          alert("Erreur lors de l'envoi");
        }
    }
    
  

  return (
    <div className="bg-[#BBD5DA] w-full h-2/3 p-10 pt-20" id="Contact">
      <div className="md:flex md:justify-between">

        <div>
          <span className="text-[#FF0000] font-rosario">// CONTACT</span>
          <h2 className="text-2xl font-bold text-black font-serif">Démarrons un projet ensemble</h2><br />
          <p className="font-rosario italic text-l">Une idée, un projet, une question ? Écrivez-moi — je réponds sous 24h.</p><br />
          <div className="flex flex-col gap-5">
            <BlockContact titre={"Email"} description={"akeleonyannickdonovane@gmail.com"} icon={<Mail color="white"/>} />
            <BlockContact titre={"GitHub"} description={"github.com/monportfolio"} icon={<GitMerge color="white"/>}/>
            <BlockContact titre={"TikTok"} description={"ake.dev"} icon={<Music2 color="white"/>}/>
            <BlockContact titre={"Localisation"} description={"Abidjan, Côte d'Ivoire"} icon={<MapPinPlus color="white"/>}/>
          </div><br/>
        </div>

        <div>
              <div className="flex gap-10">
                    <div>
                        <label htmlFor="" className={Stylelabel}>PRENOM</label><br />
                        <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom" className="w-full md:w-70 py-3 px-2 rounded-sm border bg-[#F5F5F5]"/>
                    </div>
                    <div>
                        <label htmlFor="" className={Stylelabel}>NOM</label><br />
                        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}  placeholder="nom" className="w-full md:w-70 py-3 px-2 rounded-sm border bg-[#F5F5F5]"/>
                    </div>
              </div><br />
              <label htmlFor="" className={Stylelabel}>EMAIL</label><br />
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="exemple@gmail.com" className={StyleInput}/><br /><br />
              <label htmlFor="" className={Stylelabel}>SUJET</label><br />
              <input type="text"value={sujet} onChange={(e)=>setSujet(e.target.value)}  placeholder="Développement d'une application web" className={StyleInput}/><br /><br />
              <label htmlFor="" className={Stylelabel}>MESSAGE</label><br />
              <textarea name="" value={message} onChange={(e)=>setMessage(e.target.value)} id="" placeholder="Décrivez votre projet..." className="w-full h-40 py-2 px-2 rounded-sm border bg-[#F5F5F5]"></textarea><br />
              <button onClick={AjouterElmt} className="btn bg-[#FF0000] w-full text-[#F5F5F5] font-bold">ENVOYER LE MESSAGE<MoveRight /></button>
        </div>
           

   
        </div>
        
      </div>
        
  );
};

export default Contact;
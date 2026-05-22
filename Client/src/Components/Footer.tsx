
const Footer = () =>{
    return(
        <div className="bg-black w-full pt-10 px-10 p-5">            

            <div className="md:flex justify-center md:justify-between text-[#BBD5DA]">
                <a href="#"><h2 className="text-xl md:text-3xl font-bold font-serif">AKE <span className="text-[#FF0000]">.Dev</span></h2></a>
                <p className="text-xs">© 2025 Mon Portfolio — Tous droits réservés</p>
                <ul className="flex gap-6 text-xs">
                    <a href="#"><li>Accueil</li></a>
                    <a href="#realisation"><li>Projets</li></a>
                    <a href="#stack"><li>Stack</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </div>
     
     
        </div>
    )
}
export default Footer;
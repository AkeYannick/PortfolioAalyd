

type Props = {
    spantitre: string;
    titre: string;
    text: string;
}

const BlockServices = ({spantitre,titre,text}: Props) =>{
    return( 
        <div className="bg-white rounded-sm shadow-2xs w-80 h-50 p-5">
            <span className="text-[#FF0000] font-rosario">{spantitre}</span>
            <h2 className="text-xl font-bold text-black font-serif">{titre}</h2><br />
            <p className="font-rosario">{text}</p><br />
        </div>
    )
}
export default BlockServices;
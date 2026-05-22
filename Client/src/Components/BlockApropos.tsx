
type Props = {
    titre: string;
    description: string;
    icontext: string;
}

const BlockApropos = ({titre, description, icontext}: Props) =>{
    return(
        <div className="bg-[#DFF1F1] py-2 p-2 flex gap-5 rounded-sm w-100 items-center shadow">
            <div>
              <span className="rounded-sm px-3 py-2 bg-amber-400">{icontext}</span>
            </div>
            <div>
              <span className="font-rosario">{titre}</span>
              <h2 className="font-bold font-rosario">{description}</h2>
            </div>
        </div>
    )
}
export default BlockApropos;
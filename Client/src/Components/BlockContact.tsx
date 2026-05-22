

type Props = {
    titre: string;
    description: string;
    icon: React.ReactNode;
}

const BlockContact = ({titre, description, icon}: Props) =>{
    return(
        <div className=" flex gap-5 items-center">
              <span className="rounded-sm px-3 py-3 bg-[#FF0000]">{icon}</span>
            <div>
              <span className="font-rosario">{titre}</span>
              <h2 className="font-bold font-rosario">{description}</h2>
            </div>
        </div>
    )
}
export default BlockContact;
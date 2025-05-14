import {useState} from "react"; 

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className="w-full h-16 md:h-20 flex item-center justify-between">
            {/*LOGO*/}
            <div className="flex item-center gap-4 font-bold ">
                <img src="./logo.png" className="w-8 h-8" alt="" />
                <span>MsVegan</span>                
            </div >
            {/*MobileMenue*/}
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={()=>setOpen(iniuni=>!iniuni)}>
                    {open ? "✖️" : "🟰"}
                </div>
            {/*mobile link list*/}
            <div
             className={'w-full h-screen flex flex-col item-center justify-center absolute top-16 bg-red ${open ? "-right-0" : "-right-[100%]"}'}
             >
                menue
            </div>
            </div>    
            {/*DesktopMenue*/}
            <div className="hidden ">D</div>
        </div>

    );
};

export default Navbar 
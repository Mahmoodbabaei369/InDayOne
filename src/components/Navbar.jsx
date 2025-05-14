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
             className={`w-full h-screen flex flex-col content-center justify-items-center absolute top-16 rgb(224, 238, 224) transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
             >
                <a href="/">Home Green</a>
                <a href="/">Blog</a>
                <a href="/">Network Security</a>
                <a href="/">App Security</a>
                <a href="/">Web Security</a>
                <a href="/">About</a>
                <a>
                <button className="py-1  px-2 rounded-3xl bg-blue-700 text-white">Login 👋</button>
                </a>
            </div>
            </div>    
            {/*DesktopMenue*/}
            <div className="hidden lg:flex p-3 md:flex item-center gap-8 xl:gap-12 font-bold">
                <a href="/">Home Green</a>
                <a href="/">Blog</a>
                <a href="/">Network Security</a>
                <a href="/">App Security</a>
                <a href="/">Web Security</a>
                <a href="/">About</a>
                <a>
                <button className="py-1  px-2 rounded-3xl bg-blue-700 text-white">Login 👋</button>
                </a>
            </div>
        </div>

    );
};

export default Navbar 
import {Menu, X} from "lucide-react";
import { navItems } from "../Constants";
import { useState } from "react";


const Navbar = () => {

    const [mobileDrowerOpen, setMobileDrowerOpen] = useState(false);
    const toggaleNavbar = () => {
        setMobileDrowerOpen(!mobileDrowerOpen);
    };

    return(
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-10 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                            <span className="text-xl tracking-tight ">VirtualR</span>
                        </div>
                        <ul className="hidden lg:flex ml-40 space-x-12 ">
                            {navItems.map((items, index) => (
                                <li key={index}>
                                    <a href={items.href}>{items.lable}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="#" className="py-2 px-2 border rounded-md">Sing In</a>
                            <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggaleNavbar}>
                                {mobileDrowerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {
                        mobileDrowerOpen && (
                            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center  lg:hidden ">
                                <ul>
                                    {navItems.map((items, index) => (
                                        <li key={index} className="py-2 ">
                                            <a href={items.href} >{items.lable}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className=" flex space-x-6">
                                    <a href="#" className="py-2 px-3 border rounded-md">Sing In</a>
                                    <a href="#" className="py-2 px-3 rounded-md bg-linear-to-r from-orange-500 to-orange-800 ">
                                        Create an acount
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
};

export default Navbar;
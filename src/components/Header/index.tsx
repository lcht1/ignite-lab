import { Link } from "react-router-dom";
import { Logo } from "../Logo";

import { useState } from "react";
import Sidebar from "../Sidebar";

import burguerIcon from "../../assets/burguer.svg";
import closeIcon from "../../assets/close.svg";

export default function Header() {
    const [burguerOpen, setBurguerOpen] = useState(false);
    const handleBurguer = () => {
        setBurguerOpen(!burguerOpen);
    };
    return (
        <>
            <header className="w-screen py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 ">
                <div className="flex justify-evenly w-screen">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <img
                        src={burguerOpen ? closeIcon : burguerIcon}
                        className="hidden small:block "
                        onClick={() => {
                            handleBurguer();
                        }}
                    />
                </div>
            </header>

            {burguerOpen && <Sidebar height={900} width={900} />}
        </>
    );
}

import { useState } from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import "../index.css";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Inicio", "Productos", "Categorias", "Contacto"];

    return (
        <div className="flex items-center p-2 bg-slate-400">
            {/* Menu */}
            <Navbar
                className="poppins-regular bg-slate-400 flex justify-start items-center"
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand className="sm:flex gap-2">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-12 sm:w-16 block sm:pr-4 md:pr-0"
                        />
                        <h4 className="text-xl font-bold text-slate-300">
                            Paretto
                        </h4>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem>
                        <Link className="text-slate-200 font-bold hover:text-pink-500 transition-all" href="#">
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-slate-200 font-bold hover:text-pink-500 transition-all" href="#">
                            Productos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-slate-200 font-bold hover:text-pink-500 transition-all" href="#">
                            Nosotros
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-slate-200 font-bold hover:text-pink-500 transition-all" href="#">
                            Contacto
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Menu Mobile */}
                <NavbarMenu className="poppins-regular bg-slate-500 top-20">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                style={{
                                    borderBottom: "1px solid #cbd5e1",
                                    paddingBottom: "5px",
                                }}
                                className="w-full text-slate-300"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            {/* Carrito */}
            <CartWidget className="poppins-regular bg-slate-500" />
        </div>
    );
};

export default NavbarComponent;

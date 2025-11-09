//Awesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    { name: "Store", link: "#" },
    { name: "Mac", link: "#" },
    { name: "iPad", link: "#" },
    { name: "iPhone", link: "#" },
    { name: "Watch", link: "#" },
    { name: "Aipods", link: "#" },
    { name: "Accessories", link: "#" },
    { name: "Support", link: "#" }
]


function Navbar() {
    return (
        <section className="bg-black text-gray-200 text-sm p-3 sticky top-0 z-20">
            <div className="flex items-center justify-between lg:justify-center gap-10">
                <h1><FontAwesomeIcon icon={faApple} className="text-xl hover:text-white cursor-pointer" /></h1>
                <ul className="hidden lg:flex gap-10">
                    {menuItems.map(function (items, index) {
                        return (
                            <li key={index}>
                                <a href={items.link} className="hover:text-white" >{items.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex gap-10">
                    <h1><FontAwesomeIcon icon={faMagnifyingGlass} className="text-base hover:text-white cursor-pointer" /></h1>
                    <h1><FontAwesomeIcon icon={faBagShopping} className="text-base hover:text-white cursor-pointer" /></h1>
                    <h1><FontAwesomeIcon icon={faGripLines} className="text-base hover:text-white cursor-pointer lg:hidden" /></h1>
                </div>
            </div>
        </section>
    )
}

export default Navbar   
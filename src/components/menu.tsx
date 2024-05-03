import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <ul className="flex items-center justify-start text-gray-900 text-sm font-medium">
                <li className="">
                    <Link to="/">
                        Home
                    </Link>
                </li>

            </ul>

        </>
    )
}


export default Menu;
import logo from './../assets/logo.png';
import Menu from './menu';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <header className="flex items-center justify-between px-10 py-3 text-white">
                <div className="w-16">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
                    </Link>
                </div>

                <h1 className="text-center text-gray-900 text-3xl font-bold">Modern Walk</h1>

                <Menu></Menu>
            </header>


        </>
    )
}


export default Header;
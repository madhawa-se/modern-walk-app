import logo from './../assets/logo.png';
import Menu from './menu';
import './header.scss';

function Header() {
    
    return (
        <>
            <header className="flex items-center justify-between px-4 py-3 text-white">
                <div className="w-16">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                </div>

                <h1 className="text-center text-gray-900 text-3xl font-bold">Modern Walk</h1>

                <Menu></Menu>
            </header>


        </>
    )
}


export default Header;
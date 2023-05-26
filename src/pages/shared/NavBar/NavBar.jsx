import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);


    const nav = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='all-toy'>All-Toys</Link></li>
        {user && <li><Link to='my-toy'>My-Toys</Link></li>}
        {user && <li><Link to='add-toy'>Add-a-Toy</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className='bg-[#FFF3B0]'>
            <div className="navbar pt-7 max-w-7xl mx-auto pb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-[#FFF3B0] rounded-box w-52 font-mono text-lg">
                            {nav}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl">
                        <img className='lg:w-40 w-28' src={"./logo.png"} alt="" />
                    </Link>
                </div>
                <div>

                </div>
                <div className="lg:navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-mono text-lg">
                        {nav}
                    </ul>
                </div>
                {
                    user ?
                        <div className="avatar navbar-end flex gap-4">
                            <div title={user.displayName} className="w-12 rounded-full ring ring-[#EA5455] ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                            <button onClick={handleLogout} className="btn bg-[#EA5455] px-4 py-2 border-none">LogOut</button>
                        </div> :
                        <div className="navbar-end">
                            <Link to='/login' className="btn bg-[#EA5455] px-4 py-2 border-none">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;
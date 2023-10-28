import React from 'react';
import {
    BsBookmarksFill,
    BsBookFill,
    BsList,
    BsGithub
} from 'react-icons/bs';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <BsList />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Select Book</a></li>
                            <li className="dropdown">
                                <a>Theme</a>
                                <ul className="menu dropdown-content">
                                    <li>
                                        <ThemeSwitcher />
                                    </li>
                                </ul>
                            </li>
                            <li><a href='https://github.com/HappyGromper/gilgamesh-tauri' target="_blank">About <BsGithub /> </a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Gilgamesh</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <BsBookFill />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <BsBookmarksFill />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
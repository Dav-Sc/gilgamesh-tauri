import React, { useRef } from 'react';
import {
    BsBookmarksFill,
    BsBookFill,
    BsList,
    BsGithub
} from 'react-icons/bs';
import ThemeSwitcher from './ThemeSwitcher';
import LibraryViewer from './LibraryViewer';

const Navbar = ({ onFileSelect }) => {
    const fileInputRef = useRef(null);

    const handleSelectBookClick = () => {
        // Trigger a click event on the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <BsList />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-1 shadow bg-base-100 rounded-box w-52">
                            <li onClick={handleSelectBookClick} style={{ cursor: 'pointer' }}>
                                <a>Select Book</a>
                            </li>
                            <li className="dropdown">
                                <a>Theme</a>
                                {/* Your ThemeSwitcher component here */}
                                <ThemeSwitcher />
                            </li>
                            <li><a href='https://github.com/HappyGromper/gilgamesh-tauri' target="_blank">About <BsGithub /> </a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost disabled normal-case text-xl">Gilgamesh</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <BsBookFill />
                        <LibraryViewer/>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <BsBookmarksFill />
                    </button>
                </div>
            </div>
            {/* Hidden file input */}
            <input
                type="file"
                accept=".mp3, .mp4, .m4a, .m4b"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </>
    );
};

export default Navbar;

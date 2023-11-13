import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import myImage from '../assets/pro-2.jpg'
import { Link } from 'react-router-dom';
const myNavbar = () => {
    return (
        <>
            <div className="navbar bg-purple-400">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <FontAwesomeIcon icon={faTwitter} className='text-blue-600 text-3xl transition duration-300 ease-in-out hover:text-red-600' />
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={myImage} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-600 text-white rounded-box w-52">
                            <li>
                                <Link to="/home" className="justify-between hover:bg-purple-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/details" className="justify-between hover:bg-purple-400">
                                    Product Details
                                </Link>
                            </li>
                            <li className="hover:bg-purple-400"><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default myNavbar
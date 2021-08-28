import React from 'react'
import { Link } from 'gatsby'

export default function MainMenu() {
    return (
        <nav className="bg-white py-4 fixed w-full shadow">
            <div className="container container-nulled">
                <div className="grid grid-col-12 flex justify-between">
                    <Link to="/" className="col-span-4 col-start-1 col-end-5">Logo</Link>

                    <ul className="flex flex-row col-span-2 col-start-9 col-end-13 justify-end">
                        <Link to="/teams" className="p-2 mx-2 hover:bg-primary-light">Teams</Link>
                        <Link to="/sponsoren" className="p-2 mx-2 hover:bg-primary-light">Sponsoren</Link>
                        <Link to="/onze-club" className="p-2 mx-2 hover:bg-primary-light">Onze Club</Link>
                        <Link to="/contact" className="p-2 mx-2 hover:bg-primary-light">Contact</Link>
                        <Link to="/aanmelden" className="btn p-2 mx-2">Meld je aan</Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
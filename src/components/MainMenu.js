import React from 'react'
import { Link } from 'gatsby'

export default function MainMenu() {
    return (
        <>
            <div className="grid grid-col-12">
                <div className="col-span-4 col-start-1 col-end-5">
                    <Link to="tel:0123456789">012 345 67 89</Link>
                    <Link to="mailto:test@test.nl">test@test.nl</Link>
                </div>
                <div className="col-span-2 col-start-9 col-end-13">
                    <Link to="#">Meld je aan</Link>
                </div>
            </div>
            <nav className="grid grid-col-12">
                <div className="col-span-2">
                    <Link to="/"><h2>BRC Logo</h2></Link>
                </div>
                <div className="col-span-6 col-start-6 col-end-13">
                    <Link to="/teams">Teams</Link>
                    <Link to="/sponsoren">Sponsoren</Link>
                    <Link to="/onze-club">Onze Club</Link>
                </div>
            </nav>
        </>
    )
}

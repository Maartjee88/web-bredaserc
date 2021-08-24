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
                    </ul>
                </div>
            </div>
        </nav>
    )
}


 // <>
        //     <div className="bg-primary text-white py-2">
        //         <div className="container">
        //             <div className="grid grid-col-12">
        //                 <div className="col-span-4 col-start-1 col-end-5">
        //                     <Link to="tel:0123456789">012 345 67 89</Link>
        //                     <Link to="mailto:test@test.nl">test@test.nl</Link>
        //                 </div>
        //                 <div className="col-span-2 col-start-9 col-end-13">
        //                     <Link to="#" className="btn">Meld je aan</Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <nav className="container py-4">
        //         <div className="grid grid-col-12">
        //             <div className="col-span-2">
        //                 <Link to="/"><h2>BRC Logo</h2></Link>
        //             </div>
        //             <div className="col-span-6 col-start-6 col-end-13">
        //                 <Link to="/teams">Teams</Link>
        //                 <Link to="/sponsoren">Sponsoren</Link>
        //                 <Link to="/onze-club">Onze Club</Link>
        //             </div>
        //         </div>
        //     </nav>
        // </>
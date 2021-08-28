import React from 'react'

export default function HeaderHome() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4">
                    <div>
                        <h1 className="font-header text-2xl mb-4">Wij zijn de Bredase Rugby Club.</h1>
                        <p className="text-base mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                        <img src="https://source.unsplash.com/random/300x100/" />
                        <img src="https://source.unsplash.com/random/300x100/" />
                    </div>
                </div>

                <div>
                    <img src="https://source.unsplash.com/random/540x330/?rugby" />
                </div>
            </div>
        </div>
    )
}

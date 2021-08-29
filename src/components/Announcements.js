import { Link } from 'gatsby'
import React from 'react'

export default function Announcements() {
    return (
        <section className="bg-gray-lightest">
            <div className="container">
                <div className="grid grid-col-2 gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4">
                        <div className="">
                            <img alt="develop" src="https://source.unsplash.com/random/255x150/" />
                            <Link to="/" className="btn">Bestel je bollen</Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Oliebol Drive-thru</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut in felis feugiat viverra sed amet. Pharetra, ultrices amet parturient nullam aliquam dolor. Dolor morbi eu dictumst neque. Proin nisi, venenatis volutpat in sagittis proin ac id. Elit eu nascetur laoreet tincidunt eu.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4">
                        <div className="">
                            <img alt="develop" src="https://source.unsplash.com/random/255x150/" />
                            <Link to="/" className="btn">Bestel je bollen</Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Oliebol Drive-thru</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut in felis feugiat viverra sed amet. Pharetra, ultrices amet parturient nullam aliquam dolor. Dolor morbi eu dictumst neque. Proin nisi, venenatis volutpat in sagittis proin ac id. Elit eu nascetur laoreet tincidunt eu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

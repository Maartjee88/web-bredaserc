import { Link } from 'gatsby'
import React from 'react'

export default function Announcements() {
    return (
        <section className="bg-gray-lightest">
            <div className="container">
                <div className="flex -mx-8">
                    <div className="flex px-8 w-1/2">
                        <div className="w-1/2">
                            <img className="pb-8" alt="develop" src="https://source.unsplash.com/random/255x150/" />
                            <Link to="/" className="btn">Bestel je bollen</Link>
                        </div>
                        <div className="w-1/2">
                            <h3 className="h3">Oliebol Drive-thru</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut in felis feugiat viverra sed amet. Pharetra, ultrices amet parturient nullam aliquam dolor. Dolor morbi eu dictumst neque. Proin nisi, venenatis volutpat in sagittis proin ac id. Elit eu nascetur laoreet tincidunt eu.</p>
                        </div>
                    </div>
                    <div className="flex px-8 w-1/2">
                        <div className="w-1/2">
                            <img className="pb-8" alt="develop" src="https://source.unsplash.com/random/255x150/" />
                            <Link to="/" className="btn">Bestel je bollen</Link>
                        </div>
                        <div className="w-1/2">
                            <h3 className="h3">Oliebol Drive-thru</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut in felis feugiat viverra sed amet. Pharetra, ultrices amet parturient nullam aliquam dolor. Dolor morbi eu dictumst neque. Proin nisi, venenatis volutpat in sagittis proin ac id. Elit eu nascetur laoreet tincidunt eu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

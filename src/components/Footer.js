import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer class="container">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                        <img alt="develop" src="https://source.unsplash.com/random/300x100/?logo" />
                        <img alt="develop" src="https://source.unsplash.com/random/300x100/?logo" />
                    </div>
                </div>
                <div className="col-span-4">
                    <Link to="/" className="p-2 mx-2">Code of Conduct</Link>
                    <Link to="/" className="p-2 mx-2">Contact</Link>
                </div>
                <div className="col-span-2">
                    <Link to="/">FB</Link>
                    <Link to="/">INSTA</Link>
                    <Link to="/">LINKEDIN</Link>
                </div>
            </div>
        </footer>
    )
}
import React from 'react'
import MainMenu from './MainMenu'
import '../components/style.css'

export default function Layout({ children }) {
    return (
        <div>
            <MainMenu />
            <main>
                {children}
            </main>
            <footer class="container">
                <div className="grid grid-cols-12"></div>
                <div className="col-span-6">
                    twee logo's
                </div>
                <div className="col-span-3">
                    privacy menu
                </div>
                <div className="col-span-2">
                    Socials
                </div>
            </footer>
        </div>
    )
}

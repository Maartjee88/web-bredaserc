import React from 'react'
import MainMenu from './MainMenu'
import '../global.css'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <MainMenu />
            <main className="pt-24">
                {children}
            </main>
            <Footer />
        </div>
    )
}

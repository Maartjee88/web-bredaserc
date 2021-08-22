import React from "react"
import Layout from "../components/Layout";
import 'alpinejs';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4">
            <div>
              <h1 className="font-header text-4xl">Wij zijn de Bredase Rugby Club.</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>Verkooijen</div>
              <div>Van Liessum</div>
            </div>
          </div>

          <div>
            This is an image
          </div>
        </div>
      </div>
    </Layout>
  )
}

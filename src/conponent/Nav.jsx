import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';



export default class Nav extends Component {
  render() {
    return (
      <>
    <nav className="bg-gray-800 p-4 fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">Mon Logo</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-white">
              <li><NavLink exact to="/accueil" activeClassName="text-gray-300" className="hover:text-gray-300">Accueil</NavLink></li>
              <li><NavLink to="/creation" activeClassName="text-gray-300" className="hover:text-gray-300">Creation</NavLink></li>
              <li><NavLink    to="/#form" activeClassName="text-gray-300" className="hover:text-gray-300">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      </>
    )
  }
}

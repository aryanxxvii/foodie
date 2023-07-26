import React from "react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
export const Header = ({ cartCount }) => {
  return (
    <nav
      id="header"
      className="bg-white  text-orange-500 rounded-b-xl shadow-lg shadow-orange-100/75"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-orange-400 pl-4 no-underline hover:no-underline font-bold font-dosis text-2xl lg:text-4xl"
          >
            F
            <span className="text-yellow-400 tracking-[-0.15em] pr-1.5">
              oo
            </span>
            die
          </Link>
        </div>
        {/* <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-l">
            Home
          </Link>
          <Link to="#about" className="text-l">
            About
          </Link>
        </div> */}
        <div className="flex items-center justify-center space-x-4 pr-8">
          <Link to="/cart" className="mr-4 relative">
            <ShoppingCartOutlined />
            {cartCount > 0 ? (
              <div className="rounded-full bg-orange-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-4 scale-[0.9]">
                {cartCount}
              </div>
            ) : null}
          </Link>

          {/* <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </> */}
        </div>
      </div>
    </nav>
  )
}

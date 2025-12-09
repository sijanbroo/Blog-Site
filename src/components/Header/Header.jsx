import React, { useState } from "react";
// import LogoutBtn from "./LogoutBtn";
import { Container, LogoutBtn, Logo } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
  ];

  const handleNavClick = (slug) => {
    navigate(slug);
    setIsMenuOpen(false);
  };

  return (
    <header className="py-3 sm:py-4 shadow-lg bg-white/10 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="shrink-0">
            <Link to="/">
              <Logo width="120px" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-3 lg:px-6 py-2 duration-200 text-sm lg:text-base text-white hover:bg-purple-500/30 hover:backdrop-blur-lg rounded-full font-medium transition-all whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] left-0 right-0 bg-black/95 backdrop-blur-3xl md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-0 bg-linear-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-lg border-b border-white/20 md:hidden z-50 px-4 py-4 sm:px-6 shadow-lg">
          <Container>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.slug)}
                      className="w-full text-left px-4 py-3 text-white hover:bg-purple-500/30 rounded-lg font-medium transition-all"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li className="pt-2 border-t border-white/10">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Header;

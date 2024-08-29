import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar h-20 bg-gray-100 border-b-[1px] border-zinc-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" mt-3 w-64 p-2  dropdown-content bg-slate-100 rounded-box"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ods"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                ODS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Información Del Equipo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/matematicas"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Matemáticas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quimica"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Química
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ciencias"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Ciencias Políticas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/arte"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold mx-5 text-base sm:text-sm"
                    : "font-semibold mx-5 text-base sm:text-sm text-zinc-600 hover:text-green-600"
                }
              >
                Arte Y Cultura
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a>
          <img src="/Icono.png" alt="Icon" className="w-24 h-24 mt-2" />
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

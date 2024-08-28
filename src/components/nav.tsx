import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className=" flex items-center">
        <div className="bg-white h-20 w-full flex items-center pl-10 border-b-2 border-zinc-300">
          <Link to="/" className="flex justify-center items-center">
            <img className="h-28 w-28 mt-2" src="/Icono.png" alt="icon" />
          </Link>
          <div className="ml-28 flex justify-evenly ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/ods"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              ODS
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Informacion Del Equipo
            </NavLink>
            <NavLink
              to="/quimica"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Quimica
            </NavLink>

            <NavLink
              to="/matematicas"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Matematicas
            </NavLink>
            <NavLink
              to="/ciencias"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Ciencias Politicas
            </NavLink>
            <NavLink
              to="/arte"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 text-base font-semibold  mx-5"
                  : "text-base font-semibold  mx-5 text-black hover:text-green-600"
              }
            >
              Arte Y Cultura
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

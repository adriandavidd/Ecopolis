export const Nav = () => {
  return (
    <>
      <div className=" flex items-center">
        <div className="bg-white h-20 w-full flex items-center pl-10 border-b-2 border-zinc-300">
          <img className="h-14 w-14 pb-2" src="/icono.svg" alt="icon" />
          <p className="font-bold pl-2 text-2xl">Ecopolis</p>
          <div className="ml-28 flex justify-evenly ">
            <p className="text-base font-semibold  mx-5 text-black">Inicio</p>
            <p className="text-base font-semibold  mx-5 text-black">ODS</p>
            <p className="text-base font-semibold mx-5 text-black">
              Informacion del Equipo
            </p>
            <p className="text-base font-semibold mx-5 text-black">Quimica</p>
            <p className="text-base font-semibold mx-5 text-black">
              Ciencias Politicas
            </p>
            <p className="text-base font-semibold mx-5 text-black">
              Arte y Cultura
            </p>
            <p className="text-base font-semibold mx-5 text-black">
              Matematicas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Matematicas = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center mx-8 mt-8 text-zinc-700 flex-col">
        <div className="text-lg my-10">
          <p className="text-lg font-bold my-4">
            1. Lavamanos Conectado a un Inodoro:
          </p>
          <p className="text-base my-4">
            Este sistema utiliza el agua del lavamanos para llenar el tanque del
            inodoro, reduciendo el consumo de agua potable para la descarga.
            Aquí está la implementación básica:
          </p>
          <ul className="list-disc ml-5 text-base">
            <li className="my-4">
              <strong>Instalación:</strong> Coloca un lavamanos directamente
              sobre el tanque del inodoro. Al lavarse las manos, el agua
              utilizada fluye directamente al tanque del inodoro en lugar de ir
              al desagüe.
            </li>
            <li className="my-4">
              <strong>Sistema de Tuberías:</strong> Conecta el desagüe del
              lavamanos al tanque del inodoro mediante tuberías. Un filtro
              básico puede colocarse entre el lavamanos y el tanque para evitar
              que los residuos pequeños entren en el tanque del inodoro.
            </li>
            <li className="my-4">
              <strong>Funcionalidad:</strong> Cuando se tira de la cadena, el
              tanque se vacía y se recarga automáticamente con el agua utilizada
              en el lavamanos.
            </li>
          </ul>

          <p className="text-lg font-bold my-4">
            2. Tanque de Recolección de Agua de Lluvia:
          </p>
          <p className="text-base my-4">
            Este sistema permite recolectar y filtrar agua de lluvia para usos
            domésticos no potables, como la limpieza de suelos o riego de
            plantas.
          </p>
          <ul className="list-disc ml-5 text-base">
            <li className="my-4">
              <strong>Recolector de Agua de Lluvia:</strong> Instala un sistema
              de canaletas en el techo para recolectar el agua de lluvia. El
              agua recogida se dirige hacia un tanque de almacenamiento.
            </li>
            <li className="my-4">
              <strong>Filtro de Agua:</strong> Antes de que el agua entre al
              tanque, pasa a través de un filtro que elimina hojas, suciedad y
              otros contaminantes grandes. Un filtro adicional puede estar
              dentro del tanque para purificar el agua aún más.
            </li>
            <li className="my-4">
              <strong>Distribución del Agua:</strong> Conecta el tanque de
              recolección a un sistema de tuberías internas que lleven el agua
              filtrada a puntos específicos, como un grifo exterior o una toma
              para la manguera de jardín. También puede conectarse a un sistema
              de limpieza de suelos o lavarropas.
            </li>
          </ul>

          <p className="text-lg font-bold my-4">
            Aplicación del Concepto de Límite:
          </p>
          <p className="text-base my-4">
            El concepto matemático de límite puede aplicarse en el diseño para
            optimizar el uso del agua. Por ejemplo, puedes calcular el límite
            superior del volumen de agua que se puede reciclar diariamente con
            el sistema de lavamanos y el tanque de recolección, basado en
            patrones de uso típicos.
          </p>
          <ul className="list-disc ml-5 text-base">
            <li className="my-4">
              <strong>Lavamanos-Inodoro:</strong> Calcula el límite máximo de
              ahorro de agua, estimando el consumo diario de agua del lavamanos
              y comparándolo con el volumen necesario para el tanque del
              inodoro.
            </li>
            <li className="my-4">
              <strong>Recolección de Agua de Lluvia:</strong> Determina el
              límite superior de la capacidad del tanque, considerando la
              cantidad máxima de lluvia que puede recolectarse y la capacidad de
              filtración necesaria para mantener el sistema eficiente.
            </li>
          </ul>

          <p className="text-base my-4">
            Aplicar estos cálculos te permitirá dimensionar correctamente los
            sistemas y maximizar su eficiencia en la reducción del consumo de
            agua.
          </p>
        </div>
      </div>
<div className="bg-white h-8"></div>
    </div>
  );
};

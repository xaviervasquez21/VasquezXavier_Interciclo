const celdas = [];
const RETICULA = 12;
let ancho;
let alto;

const azulejos = [];
const NA = 11;

const reglas = [
  {
    //tile 0
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 1
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile 3
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 4
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 5
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 6
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 7
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile 8
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 9
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 10
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage("tiles/tile" + i + ".png");
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
}

function draw() {
  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    print(opcionSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const indiceAzulejo = celdaActual.opciones[0];
          image(azulejos[indiceAzulejo], x * ancho, y * alto, ancho, alto);
        } else {
          strokeWeight(4);
          rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }

    // Actualizar las opciones de las celdas vecinas
    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];

        if (celdaActual.colapsada) {
          const indiceAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceAzulejo];

          // Monitorear UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUp = celdas[indiceUP];
            if (!celdaUp.colapsada) {
              cambiarDireccion(celdaUp, reglasActuales["UP"], "DOWN");
            }
          }

          // Monitorear RIGHT
          if (x < RETICULA - 1) {
            const indiceRight = x + 1 + y * RETICULA;
            const celdaRight = celdas[indiceRight];
            if (!celdaRight.colapsada) {
              cambiarDireccion(celdaRight, reglasActuales["RIGHT"], "LEFT");
            }
          }

          // Monitorear DOWN
          if (y < RETICULA - 1) {
            const indiceDown = x + (y + 1) * RETICULA;
            const celdaDown = celdas[indiceDown];
            if (!celdaDown.colapsada) {
              cambiarDireccion(celdaDown, reglasActuales["DOWN"], "UP");
            }
          }

          // Monitorear LEFT
          if (x > 0) {
            const indiceLeft = x - 1 + y * RETICULA;
            const celdaLeft = celdas[indiceLeft];
            if (!celdaLeft.colapsada) {
              cambiarDireccion(celdaLeft, reglasActuales["LEFT"], "RIGHT");
            }
          }
        }
      }
    }
  } else {
    noLoop();
  }
}

function cambiarDireccion(_celda, _regla, _opuesto) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesto]) {
      nuevasOpciones.push(_celda.opciones[i]);
    }
  }
  _celda.opciones = nuevasOpciones;
}

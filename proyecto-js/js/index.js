
const preguntas = [
    {
        numero: 1,
        pregunta: "¿Cuánto es 2 + 2?",
        respuestaCorrecta: 4
    },
    {
        numero: 2,
        pregunta: "¿Cuántos lados tiene un triángulo?",
        respuestaCorrecta: 3
    },
    {
        numero: 3,
        pregunta: "¿Cuál es la raíz cuadrada de 25?",
        respuestaCorrecta: 5
    }
];

const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = parseInt(prompt(pregunta));

    while (isNaN(respuesta)) {
        alert("Respuesta inválida, ingresa un número válido");
        respuesta = parseInt(prompt(pregunta));
    }

    if (respuesta === respuestaCorrecta) {
        alert("Respuesta correcta");
    } else {
        alert("Respuesta incorrecta");
    }
};

const hacerPregunta = (numero, pregunta, respuestaCorrecta) => {
    alert(`Pregunta #${numero}: ${pregunta}`);
    chequeoRespuesta(respuestaCorrecta, pregunta);
};

for (let i = 0; i < preguntas.length; i++) {
    const preguntaActual = preguntas[i];
    hacerPregunta(preguntaActual.numero, preguntaActual.pregunta, preguntaActual.respuestaCorrecta);
}




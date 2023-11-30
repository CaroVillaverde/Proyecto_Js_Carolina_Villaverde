/*
const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();

    while(respuesta !== "no" && respuesta !== "si") {
        alert("Respuesta inválida, solo debe responder por sí o por no");
        respuesta = prompt(pregunta).toLowerCase();
    }

    if(respuesta === respuestaCorrecta) {
        alert("Respuesta correcta")
    }
    else{
        alert("Respuesta incorrecta");
    }
};
for (let i = 0; i <= 3; i++) {
    let pregunta;
    let respuestaCorrecta;
 
    switch(i) {
        case 1:
            pregunta = "Por sí o por no, ¿El mate se toma amargo?"
            respuestaCorrecta = "si";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;
        case 2:
            pregunta = "Por sí o por no, ¿Se comen primero las papas y luego la hamburguesa?"
            respuestaCorrecta = "si";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;
        case 3:
            pregunta = "Por sí o por no, ¿Mates con chipas?"
            respuestaCorrecta = "si";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;
        default:
            alert("Encuesta de preguntas por sí o por no");
            break;

    }


}
*/ 
const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();

    while (respuesta !== "no" && respuesta !== "si") {
        alert("La respuesta es incorrecta, solo debe responder por sí o por no");
        respuesta = prompt(pregunta).toLowerCase();
    }

    if (respuesta === respuestaCorrecta) {
        alert("Respuesta correcta");
    } else {
        alert("Respuesta incorrecta");
    }
};

const hacerPregunta = (pregunta, respuestaCorrecta) => {
    chequeoRespuesta(respuestaCorrecta, pregunta);
};

for (let i = 1; i <= 3; i++) {
    let pregunta;
    let respuestaCorrecta;

    switch (i) {
        case 1:
            pregunta = "Por sí o por no, ¿El mate se toma amargo?";
            respuestaCorrecta = "si";
            hacerPregunta(pregunta, respuestaCorrecta);
            break;
        case 2:
            pregunta = "Por sí o por no, ¿Se comen primero las papas y luego la hamburguesa?";
            respuestaCorrecta = "si";
            hacerPregunta(pregunta, respuestaCorrecta);
            break;
        case 3:
            pregunta = "Por sí o por no, ¿Mates con chipas?";
            respuestaCorrecta = "si";
            hacerPregunta(pregunta, respuestaCorrecta);
            break;
        default:
            alert("Encuesta de preguntas por sí o por no");
            break;
    }
}
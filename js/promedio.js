const calcularPromedio = ()=>{
    const tarea = document.getElementById(`input-tareas`).value;
    const examen = document.getElementById(`input-examen`).value;
    const cuaderno = document.getElementById(`input-cuaderno`).value;

    const ta = parseFloat(tarea);
    const ex = parseFloat(examen);
    const cu = parseFloat(cuaderno);
    let promedio=(ta+ex+cu)/3

    let imprimir=document.getElementById(`imprimir-promedio`);
    imprimir.innerHTML=`El promedio del estudiante es ${promedio}`;

    

};

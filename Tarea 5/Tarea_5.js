const A = [];
    const arrayLength = 10; 
    const minRandomValue = -50; 
    const maxRandomValue = 50; 

    
    for (let i = 0; i < arrayLength; i++) {
        const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue;
        A.push(randomValue);
    }

    let buscador = null;
    let i = 0;

    while (i < A.length) {
        if (buscador === null || A[i] < buscador) {
            buscador = A[i];
        }
        i++;
    }

    console.log("El numero más pequeño es:", buscador);
    console.log("Arreglo generado:", A); 
    
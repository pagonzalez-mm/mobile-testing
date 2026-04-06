import { expect } from 'chai';//Chai para hacer assertions.
import TodoPage from '../pages/TodoPage';

describe("Prueba de pagina de tabla de tareas en Android Chrome", () => { 

    beforeEach(async () => {
        // Navegación directa a la URL solicitada
        await browser.url(browser.options.env.TODO_URL);
    });

    it("debe agregar y tachar las 4 primeras tareas", async () => { 
        //creo mi arreglo
        const misTareas = [
            "1) lavar trastes", 
            "2) lavar ropa", 
            "3) lavar carro", 
            "4) ordenar cuarto", 
            "5) barrer sala"
        ];

        // 1. Agregar tareas
        //buscar el input(campos)
        //ciclo for que recorre todo el arreglo
        await TodoPage.agregarTareas(misTareas);

        // 2. Tachar las primeras 4 (índices 0 al 3)
        // seleccionamos todos los <li> dentro de .todo-list
        //ciclo for recorre los indices hasta el 3
        await TodoPage.tacharPrimeras(4);

        // 3. Navegar por los filtros (Usando selectores de texto para mobile)
        //cada opcion le damos click para ver como se comporta en el sistema
        await TodoPage.navegarFiltros();
        // 4. Limpiar completadas
        await TodoPage.limpiarCompletadas();    
    });

});
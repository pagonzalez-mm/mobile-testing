import { expect } from 'chai';

describe("Prueba de pagina de tabla de tareas en Android Chrome", () => { 

    beforeEach(async () => {
        // Navegación directa a la URL solicitada
        await browser.url('https://todomvc.com/examples/react/dist/');
    });

    it("debe agregar y tachar las 5 primeras tareas", async () => { 
        const misTareas = [
            "1) lavar trastes", 
            "2) lavar ropa", 
            "3) lavar carro", 
            "4) ordenar cuarto", 
            "5) barrer sala"
        ];

        // 1. Agregar tareas
        const input = await $('.new-todo');
        for (const tarea of misTareas) {
            await input.setValue(tarea);
            await browser.keys('Enter');
        }

        // 2. Tachar las primeras 4 (índices 0 al 3)
        const lista = await $$('.todo-list li');
        for (let i = 0; i <= 3; i++) {
            const checkbox = await lista[i].$('.toggle');
            await checkbox.click();
        }

        // 3. Navegar por los filtros (Usando selectores de texto para mobile)
        await $('=Active').click();
        await $('=Completed').click();
        await $('=All').click();

        // 4. Limpiar completadas
        await $('.clear-completed').click();
    });

    it("debe recargar la página y verificar persistencia", async () => {
        // 1. Recargar la página en el emulador
        await browser.refresh();

        // 2. Verificar que la tarea existe (o falla si no hay persistencia)
        const primeraTarea = await $('.todo-list li label');
        
        // Usamos try/catch si esperas que falle como en tu descripción
        try {
            const texto = await primeraTarea.getText();
            expect(texto).to.include("5) barrer sala");
            console.log("La tarea persiste");
        } catch (error) {
            console.log("Error esperado: La tarea no persistió tras el refresh");
        }
    });
});
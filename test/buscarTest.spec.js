import { expect as chaiExpect } from 'chai';

describe("Prueba de productos si estan en la plataforma", () => {

    beforeEach(async () => {
        // Navegación directa a la URL de la tienda
        await browser.url('http://www.automationpractice.pl');
    });

    it("prueba de la palabra dress (validar que hay resultados)", async () => {
        // Arrange & Action
        const searchInput = await $('#search_query_top');
        await searchInput.setValue("dress");
        
        const searchButton = await $("#searchbox > button");
        await searchButton.click();

        // Assert
        const counter = await $('.heading-counter');
        const text = await counter.getText();
        
        // Verificamos que el contador no diga "0 resultados"
        chaiExpect(text).to.not.contain('0 results');
    });

    it("prueba de que todos los elementos de la busqueda dress contengan la palabra", async () => {
        // Action: Repetir búsqueda
        const searchInput = await $('#search_query_top');
        await searchInput.setValue("dress");
        await $("#searchbox > button").click();

        // Obtenemos la lista de nombres de productos
        // Usamos $$ para capturar múltiples elementos
        const productNames = await $$('ul.product_list li .product-name');
        
        console.log(`Validando ${productNames.length} productos encontrados...`);

        // Iteramos sobre la lista para verificar cada nombre
        for (const product of productNames) {
            const name = await product.getText();
            
            // Esta aserción fallará cuando encuentre un producto sin la palabra "dress"
            // Se usa .toLowerCase() para evitar fallos por mayúsculas
            chaiExpect(name.toLowerCase()).to.contain('dress', 
                `Fallo esperado: El producto "${name}" no contiene la palabra 'dress'`);
        }
    });
});
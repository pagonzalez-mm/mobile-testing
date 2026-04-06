class TodoPage {

  // SELECTORES
  get input() {
    return $('.new-todo');
  }

  get lista() {
    return $$('.todo-list li');
  }

  // ACCIONES


  async agregarTareas(tareas) {
    for (const tarea of tareas) {
      await this.input.setValue(tarea);
      await browser.keys('Enter');
    }
  }

  async tacharPrimeras(cantidad) {
    const items = await this.lista;

    for (let i = 0; i < cantidad; i++) {
      const checkbox = await items[i].$('.toggle');
      await checkbox.click();
    }
  }

  async navegarFiltros() {
    await $('=Active').click();
    await $('=Completed').click();
    await $('=All').click();
  }

  async limpiarCompletadas() {
    await $('.clear-completed').click();
  }
}

export default new TodoPage();
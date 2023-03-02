import { actionsUtils } from "../../Actions";

static clickOn(locator, action) {      
actionsUtils.click.command:
this.#commandAndClick(locator, action)
  
}

static #typeStringAndEnter(locator, string) {
cy.typeString(locator, string+'{enter}')       
  
}

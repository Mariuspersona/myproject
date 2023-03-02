import { actionsUtils } from "../../Actions";

static clickOn(locator, action) {      
actionsUtils.click.command:
this.#commandAndClick(locator, action);
  
}

static #type(locator, string) {
cy.typeString(locator, string)       
  
}

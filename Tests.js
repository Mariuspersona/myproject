import { main_site, URL } from "../../API";
import { actionsUtils } from "../../Actions";
import { cart_details } from "../../cart_details";


describe('Order placement process', function () {
    beforeEach(function () {
    cy.visit(main_site.main)

    })

    it('Add to cart phones', function(){

        Utils.clickOn(categories.phones)
        Utils.clickOn(phones.galaxy_s6)
        Utils.clickOn(cart_button.cart_button)
        
    } )
    
    it('Add to cart laptops', function(){

        Utils.clickOn(categories.laptops)
        Utils.clickOn(laptops.vaio_i5)
        Utils.clickOn(cart_button.cart_button)    
        
    it('Add to cart monitors', function(){

        Utils.clickOn(categories.monitors)
        Utils.clickOn(monitors.asus)
        Utils.clickOn(cart_button.cart_button)         
        
    } )
        
    it('Cart nav and purchase', function(){
       
        Utils.clickOn(cartbutton_header.cartbutton_header)
        Utils.clickOn(place_order.place_order)
        Utils.typeString(place_order.name, cart_details.name)
        Utils.typeString(place_order.country, cart_details.country)
        Utils.typeString(place_order.city, cart_details.city)
        Utils.typeString(place_order.credit_card, cart_details.card)
        Utils.typeString(place_order.month, cart_details.moth)
        Utils.typeString(place_order.year, cart_details.year)
        Utils.clickOn(place_order.place_order)
        Utils.clickOn(purchase_button.purchase_button)
        Utils.clickOn(confirmation.confirmation_button)
        
    } )  
   
        

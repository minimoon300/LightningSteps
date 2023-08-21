import { LightningElement, wire } from 'lwc';
import getproducts from '@salesforce/apex/catalog_controller.getProducts';

export default class Catalog extends LightningElement {
    allProducts;
    @wire (getproducts) wiredProducts({data,error}){
        if (data) {
            this.allProducts = data;
            console.log(data.Thumbnail__c +' data test'); 
        } else if (error) {
            console.log(error);
        }
    }

    add_to_cart(event) {
        // console.log("TEST OBJECT QUERY");
        // console.log(event.target.dataset.prodid);
        // console.log(event.target.dataset.prodname);

        let packet = new CustomEvent('message', {
            detail: {
                id: event.target.dataset.prodid,
                name: event.target.dataset.prodname,
                thumbnail: event.target.dataset.thumbnail
            },
            bubbles:true, composed:true
        });
        this.dispatchEvent(packet);
        //alert('sent');
    }
}
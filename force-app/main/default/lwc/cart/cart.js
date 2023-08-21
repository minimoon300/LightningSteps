import { LightningElement, track } from 'lwc';

export default class Cart extends LightningElement {
    @track productsList = [];

    test_data = "for testing"

    connectedCallback() {
        //alert('add listener')
        window.addEventListener('message', this.handleMessage, false);
    }
    handleMessage = (event) => {
        const existingItem = this.productsList.find(item => item.id == event.detail.id);

        if (existingItem) {
            existingItem.amount += 1;
        }
        else {
            const productInfo = {
                thumbnail: event.detail.thumbnail,
                id: event.detail.id,
                name: event.detail.name,
                amount: 1
            };

            this.productsList.push(productInfo);
        }
    }

    disconnectedCallback() {
        window.removeEventListener('message', this.handleMessage, false);
    }

    place_and_order() {
        this.productsList = [];
        alert('The order has been placed');
    }
}
console.log('test CART')

import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {


  // read Only 
  customerModel: any = {
    firstName: 'Foo',
    lastName: 'Bar',
  }

  handleLoadCustomer() {
    this.customerModel = {
      firstName: 'Nag',
      lastName: 'N'
    }
  }

  handleSubmit(customerForm: any) {
    if (customerForm.valid) {
      console.log(customerForm.value);
      console.log(this.customerModel);
    }

  }

}

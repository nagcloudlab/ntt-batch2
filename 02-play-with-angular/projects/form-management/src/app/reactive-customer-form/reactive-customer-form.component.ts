import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, minAndmaxValidator } from '../utils';

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent {

  customerForm!: FormGroup
  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
  ]

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl('')
    // })

    // this.customerForm = this.formBuilder.group({
    //   firstName: '',
    //   lastName: ''
    // })

    this.customerForm = this.formBuilder.group({
      firstName: ['Nag', [Validators.required, Validators.minLength(3)]],
      lastName: ['N', [Validators.required]],
      minAndMax: this.formBuilder.group({
        min: ['10', [Validators.required]],
        max: ['100', [Validators.required]]
      }, { validators: minAndmaxValidator }),
      email: ['nag@mail.com', [Validators.required, Validators.email, customValidator]],
      mobile: ['', []],
      notiType: ['email'],
      country: [''],
      addressFormArray: this.formBuilder.array([])
    })


    // this.customerForm.valueChanges
    //   .subscribe(value => console.log(value))
    // this.customerForm.statusChanges
    //   .subscribe(status => console.log(status))

    // this.customerForm.controls['firstName'].valueChanges
    //   .subscribe(value => console.log(value))
    // this.customerForm.controls['firstName'].statusChanges
    //   .subscribe(status => console.log(status))

  }

  get addressFormArray() {
    return this.customerForm.get('addressFormArray') as FormArray;
  }

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(3)]],
      zip: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  handleNewAddress() {
    this.addressFormArray.push(this.createAddressFormGroup());
  }
  handleRemoveAddress(index: number) {
    this.addressFormArray.removeAt(index);
  }



  handleNotiChange(notiType: string) {
    const mobileControl = this.customerForm.controls['mobile']
    if (notiType === 'sms') {
      mobileControl.setValidators([Validators.required, Validators.pattern('[0-9]{10}')])
    } else {
      mobileControl.clearValidators()
    }
    mobileControl.updateValueAndValidity()
  }
  handleSubmit() {
    console.log(this.customerForm.value)
  }

}


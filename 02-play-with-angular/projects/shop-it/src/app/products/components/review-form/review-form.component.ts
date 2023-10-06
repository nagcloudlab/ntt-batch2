import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {


  isFormOpen = false;
  reviewForm!: FormGroup

  @Output()
  reviewSubmitted = new EventEmitter<any>();

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      author:['', Validators.required],
      stars:['', Validators.required],
      body:['', Validators.required]
    });
  }

  toggleForm(){
    this.isFormOpen =!this.isFormOpen;
  }

  handleSubmit(event:any){
    event.preventDefault();
    if(this.reviewForm.valid){
      const formModel = this.reviewForm.value
      this.reviewSubmitted.emit({formData:this.reviewForm.value});
      this.reviewForm.reset();
      this.isFormOpen = false;
    }
  }

}

import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  @Input()
  cart!: Array<any>;

  @ContentChild("comp")
  comp!: ElementRef;

  @ViewChild("cardBody")
  cardBody!: ElementRef;
  
  constructor() { 
    console.log("CartViewComponent->constructor");
    // why we need -> todo one-time initialization
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent->ngOnChanges");
    console.log(changes);
    // why we need -> // todo any side-effects when component receiving changes
  }
  ngOnInit() {
    console.log("CartViewComponent->ngOnInit");
    // why we need -> todo one-time initialization
  }
  ngAfterContentInit() {
    console.log("CartViewComponent->ngAfterContentInit");
    this.comp.nativeElement.style.color="tomato";
  }
  ngAfterViewInit() {
    console.log("CartViewComponent->ngAfterViewInit");
    this.cardBody.nativeElement.addEventListener("mouseenter",(e:any)=>{
      e.target.style.cursor = "pointer";
    })
  }
  ngOnDestroy() {
    console.log("CartViewComponent->ngOnDestroy");
    // why we need -> todo one-time cleanup
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'how-angular-works';

  myName:string="Unknown"
  currentTime:Date=new Date();
  todos:any[]=[];

  constructor(private httpClient:HttpClient,private zone:NgZone){}

  handleChangeName(){
    this.myName = "Nag"
  }

  handleTop5Todos(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .subscribe((todos:any)=>{
      this.todos=todos;
    })
  }

  ngOnInit(){
    // setInterval(()=>{
    //   this.currentTime = new Date();
    // },1000)
  }


  count1 = 0;
   // Async
   handler1() {
    this.count1 = 0;
    this.increaseProgress1(() => console.log('Done!'));
  }

  increaseProgress1(doneCallback: () => void) {
    this.count1 += 1;
    console.log(`Current progress: ${this.count1}%`);
    if (this.count1 < 100) {
      // Async
      window.setTimeout(() => {
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

  count2=0;
  handler2() {
    this.count2 += 1;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress2(() => {
        this.zone.run(() => console.log('Outside Done!'))
      });
    });
  }

  increaseProgress2(doneCallback: () => void) {
    this.count2 += 1;
    console.log(`Current progress: ${this.count2}%`);
    if (this.count2 % 10 === 0) {
      this.zone.run(() => { console.log('10%') })
    }
    if (this.count2 < 100) {
      window.setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }




}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.css']
})
export class VotingItemComponent {

  @Input()
  itemName!: string;

  @Output()
  like = new EventEmitter<any>()

  @Output()
  dislike = new EventEmitter<any>()


  handleLike() {
    this.like.emit({ item: this.itemName })
  }

  handleDislike() {
    this.dislike.emit({ item: this.itemName })
  }

}

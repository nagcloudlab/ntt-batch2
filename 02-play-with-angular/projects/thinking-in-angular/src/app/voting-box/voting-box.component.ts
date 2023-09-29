import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent {


  votingItems: Array<string> = [
    "React.js",
    "Angular.js",
    "Vue.js",
    "React Native",
  ]

  votingLines: Array<any> = [
  ]

  handleLikeVote(vote:any): void {
    let {item}=vote
    let votingLine = this.votingLines.find(line=>line.item===item)
    if(votingLine) {
      votingLine.likes++
    }else{
      this.votingLines.push({
        id: this.votingLines.length+1,
        item: item,
        likes: 1,
        dislikes: 0
      })
    }
  }
  handleDislikeVote(vote:any): void {
    let {item}=vote
    let votingLine = this.votingLines.find(line=>line.item===item)
    if(votingLine) {
      votingLine.dislikes++
    }else{
      this.votingLines.push({
        id: this.votingLines.length+1,
        item: item,
        likes: 0,
        dislikes: 1
      })
    }
  }

}

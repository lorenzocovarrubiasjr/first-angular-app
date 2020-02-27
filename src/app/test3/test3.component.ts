import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  showParagraph = true;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleParagraph(): void {
    this.showParagraph = !this.showParagraph;
    let log = 'Button Clicked! Tracked at '+ Date.now()
    this.clickLog.push(log);
  }

  getColor(indexOfLog: number): string {
    return indexOfLog >= 4 ? 'blue' : 'white';
  }

}

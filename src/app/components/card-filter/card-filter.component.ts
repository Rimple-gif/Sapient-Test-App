import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.less']
})
export class CardFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateFilter(){
    // this.searchCriteria.emit(this.searchword)
  }

}

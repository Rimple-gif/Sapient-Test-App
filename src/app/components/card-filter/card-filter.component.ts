import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mission } from 'src/app/models/mission';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.less']
})
export class CardFilterComponent implements OnInit {

  // @Input() missionList: Mission[];
  @Input() launchYearDataList : String[];
  @Input() successfullBooleanData : String[];

  constructor() { }

  ngOnInit() {
  }

  updateFilter(){
    // this.searchCriteria.emit(this.searchword)
  }

}

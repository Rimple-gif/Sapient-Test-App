import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mission } from 'src/app/models/mission';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.less']
})
export class CardFilterComponent implements OnInit {

  public filSer:any;
  public searchboolean:any;

  // @Input() missionList: Mission[];
  @Input() launchYearDataList : String[];
  @Input() successfullBooleanData : String[];
  @Input() successfullLanding : String[];

  @Input() launchYearOnClick :any;
  @Input() launchBooleanOnClick : any;
  @Input() landingBooleanOnClick : any;

  @Output() filteredVal: EventEmitter<String> = new EventEmitter();
  @Output() ClearFilter: EventEmitter<String> = new EventEmitter();
  @Output() filteredLaunch: EventEmitter<any> = new EventEmitter();
  @Output() actionOnYearClick:EventEmitter<any> = new EventEmitter();
  @Output() actionOnSuccessfullLaunch:EventEmitter<any> = new EventEmitter();
  @Output() actionOnSuccessfullLanding:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateFilter(event: {target: {value: {toLowerCase:() => String; }; }; }){
    // this.searchCriteria.emit(this.searchword)
    let filterVal = event.target.value.toLowerCase();
    this.filteredVal.emit(filterVal)
  }

  // updateFilterLaunch(event: {target: {value: {toLowerCase:() => any; }; }; }){
  //   let filterLaunch = event.target.value.toLowerCase();
  //   this.filteredLaunch.emit(filterLaunch)
  // }

  clearFilter(){
    this.filSer = '';
    this.launchYearOnClick = '';
    this.launchBooleanOnClick = '';
    this.landingBooleanOnClick = '';
    this.searchboolean = '';
    this.filteredVal.emit('')
    this.ClearFilter.emit('clearFilter')
  }

  onYearClick(year:any){
    
    this.actionOnYearClick.emit(year)
  }

  onSuccessfullLaunch(data:any){
    this.actionOnSuccessfullLaunch.emit(data)
  }

  onSuccessfullLanding(data:any){
    this.actionOnSuccessfullLanding.emit(data)
  }
}

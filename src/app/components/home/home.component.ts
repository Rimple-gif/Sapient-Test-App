import { Component, OnInit, ViewChild } from '@angular/core';
import { MissionComponent } from '../../components/mission/mission.component'
import { Mission } from '../../models/mission' 
import { CardFilterComponent } from '../card-filter/card-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public launchYearDataList : string[] = []
  public successfullBooleanData : string[] = []
  public successfullLanding : string[] = []

  @ViewChild(MissionComponent,{ static : false }) missionComponent : any;
  @ViewChild(CardFilterComponent,{ static: false }) cardFilterComponent : any;

  constructor() { }

  ngOnInit() {
  }

  emitMissionYear(data:any){ 
    this.launchYearDataList = data;
  }

  SuccessfullBooleanLaunch(data:any){
    this.cardFilterComponent.successfullBooleanData = data;
  }

  successfullBooleanLanding(data:any){
    this.successfullLanding = data;
  }

  filterApplied(data:any){
    this.missionComponent.updateFilter(data)
  }

  clearAllFilter(data:any){
    this.missionComponent.clearFilter();
  }

  // filterAppliedforLaunch(data:any){
  //   this.missionComponent.updateFilterForLaunch(data);
  // }

  actionPerformedOnClick(data:any){
    this.missionComponent.updateFilterOnYearClick(data);
    this.cardFilterComponent.launchYearOnClick = data;
  }

  actionOnLaunchClick(data:any){
    this.missionComponent.updateFilterOnSuccessfullLaunch(data);
    this.cardFilterComponent.launchBooleanOnClick = data;
  }

  actionOnLandingClick(data:any){
    this.missionComponent.updateFilterOnSuccessfullLanding(data);
    this.cardFilterComponent.landingBooleanOnClick = data;
  }

}

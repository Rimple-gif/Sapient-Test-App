import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { Mission } from 'src/app/models/mission';
import _ from 'underscore'

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less']
})
export class MissionComponent implements OnInit {

  public missionData:Mission[];

  public missionCopyData:Mission[];
  public missionCopyLaunchData:Mission[];
  public missionCopy2LaunchData:Mission[];
  public missionCopyLandingData:Mission[];

  public missionYear: any = [];
  public SuccessfullLaunch:any = [];
  public successfullLanding:any = [];
  public filterVal: any;
  // public duplicateMissionArray:any;

  @Output() missionYearData : EventEmitter<String[]> = new EventEmitter<String[]>()
  @Output() launchBoolean : EventEmitter<String[]> = new EventEmitter<String[]>()
  @Output() landingBoolean : EventEmitter<String[]> = new EventEmitter<String[]>()

  constructor( private mservice:MissionService) { }

  ngOnInit() {
    this.getAllMission();
  }

  //Get all Mission
  getAllMission(){
    this.mservice.getMissionData().then(_.bind((data:any) => {
    this.missionData = data;
    console.log("MISSIONDATA------",data)
    this.missionCopyData = this.missionData
    this.missionCopyLaunchData = this.missionCopyData;
    this.missionCopy2LaunchData = this.missionCopyData;
    this.missionCopyLandingData = this.missionCopyLaunchData;
    this.getSuccessfullLaunch();
    this.getMissionYear();
    this.getSuccessfullLanding();
    },this))
  }

  getMissionYear(){
    this.missionYear = this.missionData.map((e:Mission) => e.launch_year)
    let missionLaunch = new Set(this.missionYear)
    this.missionYear = Array.from(missionLaunch)
    // console.log("year---------",this.missionYear)
    this.missionYearData.emit(this.missionYear)
  }

  getSuccessfullLaunch(){
    this.SuccessfullLaunch = this.missionData.map((e:Mission) => e.launch_success)
    let successfullMissionLaunch = new Set(this.SuccessfullLaunch)
    this.SuccessfullLaunch = Array.from(successfullMissionLaunch)
    //console.log("Launchsuccess------",this.SuccessfullLaunch)
    this.launchBoolean.emit(this.SuccessfullLaunch)
  }

  getSuccessfullLanding(){
    this.successfullLanding = this.missionData.map((e:Mission) => e.is_tentative)
    let successfullMissionLanding = new Set(this.successfullLanding)
    this.successfullLanding = Array.from(successfullMissionLanding)
    //console.log("LandingSuccess------",this.successfullLanding);
    this.landingBoolean.emit(this.successfullLanding)
  }

  @Input() updateFilter(searchVal: any){
    
    this.filterVal = searchVal;

    if(this.filterVal){
      
      this.missionCopyData = this.missionData.filter((e) => e.launch_year.includes(this.filterVal))
      console.log("launchYear-------",this.filterVal)
      //this.missionData = this.missionCopyData
    }

  }

  @Input() clearFilter(){

     this.updateFilter('');
     this.missionCopyData = this.missionData;

  }

  @Input() updateFilterOnYearClick(yearValue:any){

    this.filterVal = yearValue;
    this.updateFilter(this.filterVal)
  }

  @Input() updateFilterOnSuccessfullLaunch(booleanValue:any){
    this.filterVal = booleanValue;
    if(this.filterVal){
      this.missionCopyLaunchData = this.missionCopyData.filter((e) => e.launch_success == this.filterVal);
      console.log("filter-------",this.filterVal,this.missionCopyLaunchData)
      this.missionCopyData = this.missionCopyLaunchData
    }
    
  }
  
  @Input() updateFilterOnSuccessfullLanding(landingData:any){
    this.filterVal = landingData;
    if(this.filterVal == false){
      
      this.missionCopyLandingData = this.missionCopyData.filter((e:Mission) => e.is_tentative == false)
      console.log("chckBooles=====",this.filterVal,this.missionCopyLandingData)
      this.missionCopyData = this.missionCopyLandingData
      
    }

  }
}

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

  public missionYear: any = [];
  public SuccessfullLaunch:any = [];
  public filterVal: any;
  // public duplicateMissionArray:any;

  @Output() missionYearData : EventEmitter<String[]> = new EventEmitter<String[]>()
  @Output() launchBoolean : EventEmitter<String[]> = new EventEmitter<String[]>()

  constructor( private mservice:MissionService) { }

  ngOnInit() {
    this.getAllMission();
  }

  //Get all Mission
  getAllMission(){
    this.mservice.getMissionData().then(_.bind((data:any) => {
    this.missionData = data;
    this.missionCopyData = this.missionData
    this.missionCopyLaunchData = this.missionCopyData;
    // this.duplicateMissionArray = [...this.missionData]
    // console.log("duplicate----",this.duplicateMissionArray)
    this.getSuccessfullLaunch();
    this.getMissionYear();
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
    // console.log("success------",this.SuccessfullLaunch)
    this.launchBoolean.emit(this.SuccessfullLaunch)
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
  
  // @Input() updateFilterForLaunch(launchData:any){
  //   this.filterVal = launchData;
  //   if(this.filterVal){
      
  //     var temp = this.missionData.filter((e:Mission) => e.launch_success.includes(this.filterVal) !== -1)
  //     console.log("chckBooles=====",temp)
  //     this.missionData = temp
      
  //     // this.table.offset = 0;
  //   }

  // }
}

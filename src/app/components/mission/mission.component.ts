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

  public missionYear: any = [];
  public SuccessfullLaunch:any = [];

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
    console.log("dataall-------",data)
    this.getSuccessfullLaunch();
    this.getMissionYear();
      // if(this.dateFilter){
      //    this.missionData.filter((e:any) => e.launch_year == this.dateFilter)
      // }
    },this))
  }

  getMissionYear(){
    this.missionYear = this.missionData.map((e:Mission) => e.launch_year)
    let missionLaunch = new Set(this.missionYear)
    this.missionYear = Array.from(missionLaunch)
    console.log("year---------",this.missionYear)
    this.missionYearData.emit(this.missionYear)
  }

  getSuccessfullLaunch(){
    this.SuccessfullLaunch = this.missionData.map((e:Mission) => e.launch_success)
    let successfullMissionLaunch = new Set(this.SuccessfullLaunch)
    this.SuccessfullLaunch = Array.from(successfullMissionLaunch)
    console.log("success------",this.SuccessfullLaunch)
    this.launchBoolean.emit(this.SuccessfullLaunch)
  }
  
}

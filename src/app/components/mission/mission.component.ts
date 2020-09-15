import { Component, OnInit, Input } from '@angular/core';
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

  constructor( private mservice:MissionService) { }

  ngOnInit() {
    this.getAllMission();
  }

  //Get all Mission
  getAllMission(){
    this.mservice.getMissionData().then(_.bind((data:any) => {
      this.missionData = data;
      console.log("mission---",this.missionData)
    },this))
  }

}

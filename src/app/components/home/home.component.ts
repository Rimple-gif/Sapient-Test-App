import { Component, OnInit, ViewChild } from '@angular/core';
import { MissionComponent } from '../../components/mission/mission.component'
import { Mission } from '../../models/mission' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public launchYearDataList : string[] = []
  public successfullBooleanData : string[] = []

  constructor() { }

  ngOnInit() {
  }

  emitMissionYear(data:any){ 
    this.launchYearDataList = data;
    console.log("data---------",data)
  }

  SuccessfullBooleanLaunch(data:any){
    this.successfullBooleanData = data;
    console.log("succesfullLaunch----------",data)

  }

}

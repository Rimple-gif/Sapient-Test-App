import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Mission } from '../models/mission';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  public missionData: Mission[]

  constructor( private https: HttpClient) { }

  public getMissionData(){
    const data:any = {}
    var serviceUrl;
    serviceUrl = "https://api.spacexdata.com/v3/launches?limit=100";
    return this.https.get(serviceUrl,{params:data}).toPromise()
  }
}

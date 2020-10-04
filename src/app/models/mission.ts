export class Mission{
    public mission_patch:any;
    public flight_number:number;
    public mission_name :string;
    public mission_id :any;
    public launch_year:string;
    public launch_success:any;
    public is_tentative:any;

    constructor(mission_patch:any,flight_number:number,mission_name :string,mission_id :any,launch_year:string,
        launch_success:any,is_tentative:any){

            this.mission_patch = mission_patch;
            this.flight_number = flight_number;
            this.mission_name = mission_name;
            this.mission_id = mission_id;
            this.launch_year = launch_year;
            this.launch_success = launch_success;
            this.is_tentative = is_tentative;
    }
}
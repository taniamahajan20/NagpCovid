import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StateData } from 'src/app/models/state-data.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  public showStateData: boolean[];
  public expandedRow: number;
  public districtList: any;
  public totalData: StateData;
  public statewiseData: StateData[];
  public cols: any[];
  constructor(
    private httpservice: HttpService) {

  }

  ngOnInit() {
    this.httpservice.getCovidDateWiseData().subscribe((res: any) => {
      this.totalData = res.statewise.shift();
      this.statewiseData = res.statewise;
      this.showStateData = new Array(res.statewise.length).fill(false);
    });
    this.httpservice.getDistrictWiseData().subscribe((res) => {
      this.districtList = res;
    });
    this.cols = [
      { field: 'state', header: 'State' },
      { field: 'confirmed', header: 'Confirmed' },
      { field: 'active', header: 'Active' },
      { field: 'recovered', header: 'Recovered' },
      { field: 'deaths', header: 'Deaths' }
    ];
    console.log(sessionStorage);
  }

  public getRecord(index: number) {
    this.showStateData[index] = !this.showStateData[index];
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { DistrictData } from 'src/app/models/district-data.model';

@Component({
  selector: 'app-state-bulletin',
  templateUrl: './state-bulletin.component.html',
  styleUrls: ['./state-bulletin.component.scss']
})
export class StateBulletinComponent implements OnInit {
  @Input() public stateName: string;
  @Input() public districtList: any;
  public districtsData: DistrictData[];
  public districtNames: string[];
  public cols: any[];
  public districtDataList: any[] = [];
  constructor(
  ) { }

  ngOnInit() {
    this.districtNames = Object.keys(this.districtList[this.stateName].districtData);
    this.districtsData = Object.values(this.districtList[this.stateName].districtData);
    this.districtsData.forEach((district: DistrictData, index: number) => {
      this.districtDataList.push({
        name: this.districtNames[index],
        confirmed: district.confirmed,
        deaths: district.deceased,
        active: district.active,
        recovered: district.recovered
      });
    });
    this.cols = [
      { field: 'name', header: 'District' },
      { field: 'confirmed', header: 'Confirmed' },
      { field: 'active', header: 'Active' },
      { field: 'recovered', header: 'Recovered' },
      { field: 'deaths', header: 'Deaths' }
    ];
  }
}

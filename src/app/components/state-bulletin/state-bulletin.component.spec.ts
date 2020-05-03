import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBulletinComponent } from './state-bulletin.component';
import { TableModule } from 'primeng/table';
import { MockDistrictData } from 'src/app/Mocks/district-data.mock';
import { BrowserModule } from '@angular/platform-browser';

describe('StateBulletinComponent', () => {
  let component: StateBulletinComponent;
  let fixture: ComponentFixture<StateBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule,
      BrowserModule],
      declarations: [StateBulletinComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateBulletinComponent);
    component = fixture.componentInstance;
    component.districtList = MockDistrictData;
    component.stateName = 'Punjab';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 22 districts', () => {
    expect(component.districtDataList.length).toEqual(22);
  });
});

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { NewsData } from '../models/news-data.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { this.createDb(); }
  createDb() {

    const news: NewsData[] = [
      {
        id: 1,
        headlines: 'Karnataka reports 5 new cases',
        description: 'Karnataka reports 5 new cases; state tally climbs to 606',
        summary: 'This is concerning',
        fullNews: `5 new COVID19 positive cases have been reported in Karnataka from 2nd May, 5 pm to 3rd May, 12
        noon; taking the total number of positive cases to 606 which includes 25 deaths and 282 discharges: Govt of Karnataka`,
        image: '../../assets/coronaNews1.jpg'
      },
      {
        id: 2,
        headlines: 'One Shramik special train',
        description: 'One Shramik special train from Chikbanawara (in Bengaluru ) to Bhubaneswar in Odisha left at 9.26 am',
        summary: 'Another good step to bring the people back to hometowns',
        fullNews: `Total of 1190 people have boarded the train. Karnataka
        Govt arranged Bangalore Metropolitan Transport Corporation (BMTC) buses & brought them to station: BMTC PRO.`,
        image: '../../assets/coronaNews2.jpg'
      },
      {
        id: 3, headlines: 'Covid-19: PM stresses on need for reforms, help to businesses',
        description: 'PM met finance minister Nirmala Sitharaman to discuss financial stability, ways to boost liquidity and credit flows',
        summary: `Modi also discussed strategies to support micro, small and medium enterprises, or MSMEs and farmers`,
        fullNews: `NEW DELHI: Prime Minister Narendra Modi emphasised,
         in a meeting with finance minister Nirmala Sitharaman,
         the need to aid businesses, expedite infrastructure projects and ensure financial stability and liquidity as India
         sees gradual lifting of the national lockdown, an official statement said late on Saturday night.
        Modi and Sitharaman discussed interventions needed in the financial sector and structural reforms
         to spur growth as restrictions on movement and commerce imposed since 25 March are being gradually
         lifted. Modi discussed strategies to support micro, small and medium enterprises (MSMEs)
          and farmers as well as ways to boost liquidity and credit flows. Financial stability and steps
           needed to help businesses recover quickly from the coronavirus impact were highlights of the discussions.
        “The reform initiatives undertaken by the various ministries should continue
         unabated and action should be taken in a time bound manner
          to remove any obstacles to investment
           flows and capital formation," the statement said, quoting Modi.
        `,
        image: '../../assets/coronaNews3.jpg'
      }
    ];

    const admin = { id: 1, userName: 'Admin', password: 'Admin@123' };

    return { news, admin };
  }
}

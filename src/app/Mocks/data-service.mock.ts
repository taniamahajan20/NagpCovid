import { of } from 'rxjs';

export class MockDataService {
  public getNews() {
    return of([{
      id: 1, headlines: 'PO1',
      description: 'Insurance policy number PO1', summary: 'This is concerning', fullNews: '', image: ''
    },
    {
      id: 2, headlines: 'PO2', description: 'Insurance policy number PO2',
      summary: 'This is concerning', fullNews: '', image: ''
    }
    ]);
  }
  public postNews() {
    return of(true);
  }
}

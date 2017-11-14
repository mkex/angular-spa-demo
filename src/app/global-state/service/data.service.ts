import { Subject } from 'rxjs/Subject';
import { Data } from './../model/data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  /** 공유할 데이터 */
  private data: Data;

  /** 데이터 변화에 대한 Subject 생성 */
  dataStatusChanged = new Subject();

  /** 공유 데이터에 상태가 변경되면 해당 데이터를 구독중인 객체들에게 변경을 통지함 */
  setData(newData: Data) {
    this.data = newData;
    this.dataStatusChanged.next(this.data);
  }

  constructor() {
    this.initData();
  }

  private initData() {
    this.data = {
      id: 'mkex',
      value: '박종명'
    };
  }

  getData(): Data {
    return this.data;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Data } from '../model/data.model';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../service/data.service';

@Component({
  selector: 'asd-state-child1',
  templateUrl: './state-child1.component.html',
  styleUrls: ['./state-child1.component.css']
})
export class StateChild1Component implements OnInit, OnDestroy {
  /** 공유 데이터 타입 정의 */
  data: Data;

  /** 구독을 위한 Subscription 생성 */
  dataServiceSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    /** 공유 데이터 변경시 알림을 받기 위한 구독 처리 */
    this.dataServiceSubscription = this.dataService.dataStatusChanged.subscribe(
      (changeData: Data) => {
        this.data = changeData;
      }
    );

    this.getData();
  }

  getData() {
    this.data = this.dataService.getData();
  }

  /** 공유 데이터 변경 */
  onUpdateData(id: string, value: string) {
    const newData = {
      id: id,
      value: value
    };

    this.dataService.setData(newData);
  }

  ngOnDestroy() {
    // 구독중지(메모리 릭 방지)
    this.dataServiceSubscription.unsubscribe();
  }

}

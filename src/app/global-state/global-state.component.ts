import { Component, OnInit, OnDestroy } from '@angular/core';
import { Data } from './model/data.model';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './service/data.service';

@Component({
  selector: 'asd-global-state',
  templateUrl: './global-state.component.html',
  styleUrls: ['./global-state.component.css']
})
export class GlobalStateComponent implements OnInit, OnDestroy {

  data: Data;
  dataServiceSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataServiceSubscription = this.dataService.dataStatusChanged.subscribe(
      (newData: Data) => {
        this.data = newData;
      }
    );

    this.getData();
  }

  getData() {
    this.data = this.dataService.getData();
  }

  ngOnDestroy() {
    // 구독중지(메모리 릭 방지)
    this.dataServiceSubscription.unsubscribe();
  }

}

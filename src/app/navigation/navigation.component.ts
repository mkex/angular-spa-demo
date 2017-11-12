import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'asd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  /** Route 파라메타를 전달받을 변수 정의 */
  urlParamValue: { id: string, name: string };
  queryParamVaue:string;
  fragmentValue:string;

  private subscriptionUrlParam: Subscription;
  private subscriptionQueryParam: Subscription;
  private subscriptionFragment: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    /** url의 변화를 즉시 반영할 수 있도록 Subscribe로 각 파라메타 정보 취득하기(권장) */
    this.subscriptionUrlParam = activatedRoute.params.subscribe(
      (params: Params) => {
         this.urlParamValue = {
            id: params['id'],
            name: params['name']
          };
       }
    );

    this.subscriptionQueryParam = activatedRoute.queryParams.subscribe(
      (params: Params) => {
         this.queryParamVaue = params['pageNo'];
       }
    );

    this.subscriptionFragment = activatedRoute.fragment.subscribe(
      (x: string) => {
         this.fragmentValue = x;
       }
    );

    /** 만일 현재 시점 스냅샷 값만 확인할 경우(변경사항 반영하지 않음) 다음과 같이 구현 */
    // this.urlParamValue = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   age: this.activatedRoute.snapshot.params['name']
    // };

    // this.queryParamValue = this.activatedRoute.snapshot.queryParams['param'];

    // this.fragmentValue = this.activatedRoute.snapshot.fragment

   }

  ngOnDestroy(): void {
    /** Observable 사용에 따르는 메모리 leak을 방지 */
    this.subscriptionUrlParam.unsubscribe();
    this.subscriptionQueryParam.unsubscribe();
    this.subscriptionFragment.unsubscribe();
  }

  /** 프로그래밍 방식으로 라우팅 하기 */
  onNavigation() {
    this.router.navigate(['navigation', 'myID2', 'myName2'], {queryParams:{'param':2}, fragment:'loading2'});
  }
}

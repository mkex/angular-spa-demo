import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const navigationRoutes: Routes = [
  { path: '', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }

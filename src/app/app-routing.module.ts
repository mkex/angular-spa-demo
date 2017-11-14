import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TemplateRefVarComponent } from './child-reference/template-ref-var/template-ref-var.component';
import { ViewchildRefComponent } from './child-reference/viewchild-ref/viewchild-ref.component';
import { ContentchildRefComponent } from './child-reference/contentchild-ref/contentchild-ref.component';
import { DirectiveBuiltinComponent } from './directive/directive-builtin/directive-builtin.component';
import { DirectiveCustomComponent } from './directive/directive-custom/directive-custom.component';
import { ServiceComponent } from './service/service.component';
import { PipeBuiltinComponent } from './pipe/pipe-builtin/pipe-builtin.component';
import { PipeCustomComponent } from './pipe/pipe-custom/pipe-custom.component';
import { HttpComponent } from './http/http.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsComponent } from './forms/forms.component';
import { GlobalStateComponent } from './global-state/global-state.component';

const routes: Routes = [
  { path: 'databinding', component: DataBindingComponent },
  { path: 'templateref', component: TemplateRefVarComponent },
  { path: 'viewchildref', component: ViewchildRefComponent },
  { path: 'contentchildref', component: ContentchildRefComponent },
  { path: 'directivebuiltin', component: DirectiveBuiltinComponent },
  { path: 'directivecustom', component: DirectiveCustomComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'pipebuiltin', component: PipeBuiltinComponent },
  { path: 'pipecustom', component: PipeCustomComponent },
  { path: 'http', component: HttpComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'forms', component: FormsComponent },

  { path: 'navigation/:id/:name', loadChildren: './navigation/navigation.module#NavigationModule' },

  { path: 'globalstate', component: GlobalStateComponent },

  { path: '**', component: DataBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


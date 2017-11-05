import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TemplateRefVarComponent } from './child-reference/template-ref-var/template-ref-var.component';
import { ViewchildRefComponent } from './child-reference/viewchild-ref/viewchild-ref.component';
import { ContentchildRefComponent } from './child-reference/contentchild-ref/contentchild-ref.component';
import { DirectiveBuiltinComponent } from './directive/directive-builtin/directive-builtin.component';
import { DirectiveCustomComponent } from './directive/directive-custom/directive-custom.component';

const routes: Routes = [
  { path: 'databinding', component: DataBindingComponent },
  { path: 'templateref', component: TemplateRefVarComponent },
  { path: 'viewchildref', component: ViewchildRefComponent },
  { path: 'contentchildref', component: ContentchildRefComponent },
  { path: 'directivebuiltin', component: DirectiveBuiltinComponent },
  { path: 'directivecustom', component: DirectiveCustomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

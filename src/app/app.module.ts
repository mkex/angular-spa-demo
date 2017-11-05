import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { FormsModule } from '@angular/forms';
import { DataBindingChildComponent } from './data-binding/data-binding-child/data-binding-child.component';
import { TemplateRefVarComponent } from './child-reference/template-ref-var/template-ref-var.component';
import { ViewchildRefComponent } from './child-reference/viewchild-ref/viewchild-ref.component';
import { ViewchildRefChildComponent } from './child-reference/viewchild-ref/viewchild-ref-child/viewchild-ref-child.component';
import { ContentchildRefComponent } from './child-reference/contentchild-ref/contentchild-ref.component';
import { ContentchildRefChildComponent } from './child-reference/contentchild-ref/contentchild-ref-child/contentchild-ref-child.component';
import { ContentchildRefContentchildComponent } from './child-reference/contentchild-ref/contentchild-ref-contentchild/contentchild-ref-contentchild.component';
import { DirectiveBuiltinComponent } from './directive/directive-builtin/directive-builtin.component';
import { DirectiveCustomComponent } from './directive/directive-custom/directive-custom.component';
import { HighlightDirective } from './directive/directive-custom/custom-directive/highlight.directive';
import { UnlessDirective } from './directive/directive-custom/custom-directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingChildComponent,
    TemplateRefVarComponent,
    ViewchildRefComponent,
    ViewchildRefChildComponent,
    ContentchildRefComponent,
    ContentchildRefChildComponent,
    ContentchildRefContentchildComponent,
    DirectiveBuiltinComponent,
    DirectiveCustomComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


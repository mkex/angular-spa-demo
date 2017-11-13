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
import { ServiceComponent } from './service/service.component';
import { LogService } from './service/log.service';
import { PipeBuiltinComponent } from './pipe/pipe-builtin/pipe-builtin.component';
import { PipeCustomComponent } from './pipe/pipe-custom/pipe-custom.component';
import { ExponentialStrengthPipe } from './pipe/pipe-custom/exponential-strength.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsComponent } from './forms/forms.component';

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
    UnlessDirective,
    ServiceComponent,
    PipeBuiltinComponent,
    PipeCustomComponent,
    ExponentialStrengthPipe,
    HttpComponent,
    LifecycleComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }


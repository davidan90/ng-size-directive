import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SizeDirective } from './directives';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SizeDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

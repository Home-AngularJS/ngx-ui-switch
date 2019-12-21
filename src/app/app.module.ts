import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      UiSwitchModule
  ],
  declarations:
      [
      AppComponent,
      DemoComponent
  ],
  bootstrap:
      [ AppComponent ]
})
export class AppModule { }

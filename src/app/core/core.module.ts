import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    ContentWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ContentWrapperComponent
  ]
})
export class CoreModule { }

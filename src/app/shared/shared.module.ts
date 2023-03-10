import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlueButtonComponent } from './components/blue-button/blue-button.component';

@NgModule({
  declarations: [BlueButtonComponent],
  imports: [CommonModule],
  exports: [BlueButtonComponent],
})
export class SharedModule {}

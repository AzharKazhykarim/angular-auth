import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlueButtonComponent } from './components/blue-button/blue-button.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [BlueButtonComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [BlueButtonComponent, LoadingSpinnerComponent],
})
export class SharedModule {}

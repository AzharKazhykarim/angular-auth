import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss'],
})
export class BlueButtonComponent {
  @Input() valid = true;
  @Input() isSubmit = false;
}

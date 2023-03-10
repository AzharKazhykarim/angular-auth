import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-auth-control',
  templateUrl: './auth-control.component.html',
  styleUrls: ['./auth-control.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthControlComponent),
      multi: true,
    },
  ],
})
export class AuthControlComponent implements ControlValueAccessor {
  @Input() isError: boolean | undefined;
  @Input() inputType: string = 'text';
  @Input() placeholderMsg: string = '';
  @Input() labelMsg: string = '';
  @Input() errorMsg: string = '';

  value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(
    // private readonly changeDetector: ChangeDetectorRef
  ) {}

  onBlur() {
    this.onTouched();
  }

  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
    // this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

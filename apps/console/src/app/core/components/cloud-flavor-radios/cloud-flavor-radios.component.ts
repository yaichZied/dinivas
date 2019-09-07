import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  forwardRef
} from '@angular/core';
import { ICloudApiFlavor } from '@dinivas/dto';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS
} from '@angular/forms';

@Component({
  selector: 'dinivas-cloud-flavor-radios',
  templateUrl: './cloud-flavor-radios.component.html',
  styleUrls: ['./cloud-flavor-radios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CloudFlavorRadiosComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CloudFlavorRadiosComponent,
      multi: true
    }
  ]
})
export class CloudFlavorRadiosComponent
  implements OnInit, ControlValueAccessor, Validator {
  @Input()
  label: string;
  @Input()
  cloudFlavors: ICloudApiFlavor[];

  cloudFlavor: string;
  disabled = false;

  private onTouch: Function;
  private onModelChange: Function;
  private onValidatorChange: Function;

  constructor() {}

  ngOnInit() {}

  select(flavor: ICloudApiFlavor) {
    this.cloudFlavor = flavor.name;
    this.onModelChange(flavor.name);
    this.onTouch();
  }

  writeValue(flavor: string): void {
    this.cloudFlavor = flavor;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  validate(control: AbstractControl): ValidationErrors {
    return this.cloudFlavor ? null : { required: true };
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}

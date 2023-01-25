import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { GenericError } from '@models/generic.error';
import { errorType } from '@shared/generic.enum';
import { fadeInOut } from '@shared/animation';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOut()],
})
export class SingUpComponent {
  signInFormGroup: FormGroup;
  validationtype: string | undefined;
  genericError: GenericError | undefined;
  showEmailError: Boolean;
  messageValidationEmail: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signInFormGroup = this.fb.group({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [(Validators.required, Validators.email)],
      }),
      password: new FormControl(null, Validators.required),
      repeatPassword: new FormControl('', Validators.required),
    });

    this.signInFormGroup.controls.email.valueChanges.subscribe((val) => {
      this.genericError = undefined;
    });
  }

  auth() {
    alert('hola');
  }
}
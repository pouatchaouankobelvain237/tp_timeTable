import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.css'
})
export class PreferenceComponent {
  preferencesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.preferencesForm = this.fb.group({
      earlySchedule: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      lateSchedule: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      freeDays: [0, [Validators.required, Validators.min(0), Validators.max(7)]],
      workHours: [3, [Validators.required, Validators.min(3), Validators.max(15), Validators.pattern('^([3,6,9,12,15])$')]]
    });
  }

  onSubmit() {
    if (this.preferencesForm.valid) {
      console.log('Form Values', this.preferencesForm.value);
      // Envoyer les valeurs au backend ici
    }
  }

}

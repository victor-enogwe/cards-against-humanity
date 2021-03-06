import { Injectable } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  fieldHasError(form: AbstractControl, field: string): boolean {
    const control = form.get(field)
    return Boolean(control.errors) && (control.touched || control.dirty)
  }
}

import { AbstractControl, FormControl } from "@angular/forms"



export function minAndmaxValidator(minAndMaxGroup: AbstractControl) {
    const min = Number.parseInt(minAndMaxGroup.get('min')?.value || 0)
    const max = Number.parseInt(minAndMaxGroup.get('max')?.value || 0)
    if (min < max) {
        return null
    } else {
        return { minAndMax: true }
    }
}

export function customValidator(control: FormControl) {
    //..
    return null
}
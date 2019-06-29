import { FormControl } from '@angular/forms';

export function validateMaxWeight(weightFormControl: FormControl) {
	const weightValue = weightFormControl.value;
	const threeDecimalsRegex = /^[0-9]{1,11}(?:\.[0-9]{1,3})?$/;
	const isWeightValid = threeDecimalsRegex.test(weightValue) && Number(weightValue) <= 10;
	return isWeightValid
		? null
		: {
				validateMaxWeight: {
					valid: false
				}
		  };
}

export function validateMaxValue(valueFormControl: FormControl) {
	const valueVal = valueFormControl.value;
	const twoDecimalsRegex = /^\d+(\.\d{1,2})?$/;
	const isValueValid = twoDecimalsRegex.test(valueVal);
	return isValueValid
		? null
		: {
				validateMaxValue: {
					valid: false
				}
		  };
}

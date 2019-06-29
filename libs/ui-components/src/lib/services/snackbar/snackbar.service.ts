import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {
	constructor(private snackBar: MatSnackBar) {}

	openSnackBar(message: string): void {
		this.snackBar.open(message, '', {
			duration: 2300,
			verticalPosition: 'top',
			panelClass: ['snackbar-custom-styles']
		});
	}
}

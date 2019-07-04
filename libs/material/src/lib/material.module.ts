import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatInputModule,
	MatCardModule,
	MatButtonModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule,
	MatToolbarModule,
	MatProgressSpinnerModule,
	MatMenuModule,
	MatTableModule,
	MatSelectModule,
	MatSnackBarModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		MatTableModule,
		MatSelectModule,
		MatSnackBarModule
	],
	exports: [
		FlexLayoutModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		MatTableModule,
		MatSelectModule,
		MatSnackBarModule
	]
})
export class MaterialModule {}

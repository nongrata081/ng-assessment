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
	MatSelectModule
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
		MatSelectModule
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
		MatSelectModule
	]
})
export class MaterialModule {}

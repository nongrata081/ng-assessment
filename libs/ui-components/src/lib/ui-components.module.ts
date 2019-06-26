import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponentExampleComponent } from './shared-ui-component-example/shared-ui-component-example.component';

@NgModule({
	imports: [CommonModule],
	declarations: [SharedUiComponentExampleComponent],
	exports: [SharedUiComponentExampleComponent]
})
export class UiComponentsModule {}

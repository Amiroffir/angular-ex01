import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioButtonsComponent],
  imports: [CommonModule, FormsModule],
  exports: [RadioButtonsComponent],
})
export class SelectionModule {}

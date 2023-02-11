import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from '../../models/option';
import { ISelectableOption } from '../../models/ISelectable';

@Component({
  selector: 'ex01-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.less'],
})
export class RadioButtonsComponent<T> {
  @Input() options: ISelectableOption<T>[] = [];
  @Input() selectedOption: T | undefined = undefined;
  @Input() isMultiSelectable: boolean | undefined = undefined;

  @Output() selectedOptionChange: EventEmitter<T> = new EventEmitter<T>();
  @Output() multiSelectedChange: EventEmitter<T[]> = new EventEmitter<T[]>();

  public onSelectedChange(): void {
    this.selectedOptionChange.emit(this.selectedOption);
  }
  public onMultiSelectedChange(): void {
    this.multiSelectedChange.emit(
      this.options.filter((o) => o.isSelected).map((o) => o.value) as T[]
    );
  }
}

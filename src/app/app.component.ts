import { Component } from '@angular/core';
import { Option } from './Modules/selection/models/option';
import { ISelectableOption } from './Modules/selection/models/ISelectable';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

@Component({
  selector: 'ex01-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public title = 'angular-ex01';
  public selectedOption: string | undefined = undefined;
  public isMultiSelectable: boolean = true; // false;
  public multiSelected: string[] = [];
  public gender = Gender;
  public options: ISelectableOption<string>[] = [
    { title: this.gender.Male, value: this.gender.Male, isSelected: false },
    { title: this.gender.Female, value: this.gender.Female, isSelected: false },
  ];

  public onMultiSelectedChange(option: string[]): void {
    this.multiSelected = option;
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-icon-add',
  templateUrl: './icon-add.component.html'
})
export class IconAddComponent {
  constructor(private cd: ChangeDetectorRef){
    this.cd.detach();
  }
}

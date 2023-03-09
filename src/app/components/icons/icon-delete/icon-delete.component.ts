import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
})
export class IconDeleteComponent {
  constructor(private cd: ChangeDetectorRef){
    this.cd.detach();
  }
}

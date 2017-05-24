import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-return-home',
  templateUrl: 'return-home.component.html',
  styleUrls: ['return-home.component.css', '../../../global-css/global.css'],
})
export class ReturnHomeComponent { 
	@Output() navigateToHome = new EventEmitter<boolean>();

	navigate(): void {
		this.navigateToHome.emit(true);
	}
}

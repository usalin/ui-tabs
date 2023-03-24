import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../content';

@Component({
  selector: 'app-ui-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-tab-item.component.html',
  styleUrls: ['./ui-tab-item.component.scss']
})
export class UITabItemComponent {
  @Input() tabName? = 'default';
  @Input() templateRef!: TemplateRef<any>;
  @Input() content?: Content; 
}

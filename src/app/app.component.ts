import { Component } from '@angular/core';
import { Content } from './content';
import { UITabItemComponent } from './ui-tab-item/ui-tab-item.component';
import { UITabsComponent } from './ui-tabs/ui-tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UITabsComponent, UITabItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-tabs';

  tab1 = 'Tab 1';
  tab2 = 'Tab 2';
  tab3 = 'Tab 3';

  content1: Content = {title: 'First Items Title', description: 'First Items'};
  content2: Content = {title: 'Second Items Title '};
  content3: Content = {title: 'Third Items Title '};

}

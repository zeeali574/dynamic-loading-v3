import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { MessageComponent } from './dynamic-modules/message/message.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoaderService: DynamicComponentLoader,
  ) { }

  loadComponent() {
    this.dynamicComponentLoaderService
      .getComponentFactory<MessageComponent>('message')
      .subscribe(componentFactory => {
        this.testOutlet.createComponent(componentFactory);
      }, error => {
        console.warn(error);
      });
  }
}
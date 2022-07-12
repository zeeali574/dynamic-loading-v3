import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicComponentManifest } from './dynamic-component-loader/dynamic-component-manifest';
import { DynamicComponentLoaderModule } from './dynamic-component-loader/dynamic-component-loader.module';

const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message',
    loadChildren: './dynamic-modules/message/message.module#MessageModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DynamicComponentLoaderModule.forRoot(manifests),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatable';

  @ViewChild('container',{read:ViewContainerRef})
  container!:ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  add():void{
    //create component factory
    const dynamicComponentFactory=
    this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    //add component to the view
    const componentRef=
    this.container.createComponent(dynamicComponentFactory);
  }

}

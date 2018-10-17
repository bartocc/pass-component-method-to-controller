import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  componentInstances = [];

  @action
  foo(componentInstance) {
    console.log("I am the 'foo' action of ApplicationController");
    this.componentInstances.pushObject(componentInstance);
  }

  @action
  save() {
    console.log("I am the 'save' action of ApplicationController");
    this.componentInstances.forEach((componentInstance) => {
      componentInstance.bar();
      componentInstance.baz();
    });
  }
}

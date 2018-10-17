import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  childFunctions = [];

  @action
  foo(childFunction) {
    console.log("I am the 'foo' action of ApplicationController");
    this.childFunctions.pushObject(childFunction);
  }

  @action
  save() {
    console.log("I am the 'save' action of ApplicationController");
    this.childFunctions.forEach((childFunction) => {
      childFunction();
    });
  }
}

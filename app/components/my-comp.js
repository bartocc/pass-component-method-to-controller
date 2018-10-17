import Component from '@ember/component';

export default class MyCompComponent extends Component {

  barHasBeenCalled = false;

  bar() {
    console.log("I am the 'bar' method of MyCompComponent");
    this.set('barHasBeenCalled', true);
  }

  baz() {
    console.log("I am the 'baz' method of MyCompComponent");
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    this.aParentAction(this);
  }
}

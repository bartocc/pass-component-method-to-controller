import Component from '@ember/component';

export default class MyCompComponent extends Component {

  barHasBeenCalled = false;

  bar() {
    console.log("I am the 'bar' method of MyCompComponent");
    this.set('barHasBeenCalled', true);
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    this.aParentAction(this.bar.bind(this));
  }
}

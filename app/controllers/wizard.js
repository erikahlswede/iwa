import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAnswer(params) {
      let answer = this.store.createRecord('answer', params);
      answer.save();
    }
  }
});

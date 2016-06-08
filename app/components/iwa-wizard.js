import Ember from 'ember';

export default Ember.Component.extend({
  questions:[],
  currentQuestionIndex: 0,
  numberOfQuestions: Ember.computed('questions', function() {
    return this.get('questions').length;
  }),
  currentQuestion: Ember.computed('questions', 'currentQuestionIndex', function() {
    return this.get('questions')[this.get('currentQuestionIndex')];
  }),
  actions: {
    transitionToNextQuestion() {
      this.set('currentQuestionIndex', this.get('currentQuestionIndex') +1);
    },
    saveAnswer(params) {
      this.sendAction('onSave', params);
    },
    transitionToSummary() {
      this.sendAction('onFinish');
    }
  }
});

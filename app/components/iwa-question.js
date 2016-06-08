import Ember from 'ember';

export default Ember.Component.extend({
  question: '',
  answer: '',
  image: '',
  questionIndex: 0,
  numberOfQuestions: 0,
  actions: {
    onAnswerSubmit() {
      this.sendAction('onSave', {
        question: this.get('question'),
        answer: this.get('answer')
      });
      this.set('answer', '');
      if (this.get('numberOfQuestions') -1 === this.get('questionIndex')) {
        this.sendAction('onFinish');
      }
      else {
        this.sendAction('onNext');
      }

    }
  }
});

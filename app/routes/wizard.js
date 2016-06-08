import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {question: 'What is your name?', image:'https://turbotax.intuit.com/experiences/rtb-pods/images/icon-max-refund-retina.87850afd.png'},
      {question: 'What is your quest?', image:'https://turbotax.intuit.com/experiences/rtb-pods/images/icon-accurate-retina.0b077842.png'},
      {question: 'What is the air/speed velocity of an unladen swallow?', image:'https://turbotax.intuit.com/experiences/rtb-pods/images/icon-audit-support-retina.a68b2663.png'}
    ];
  },
  actions: {
    transitionToSummary() {
      this.transitionTo('summary');
    }
  }

});

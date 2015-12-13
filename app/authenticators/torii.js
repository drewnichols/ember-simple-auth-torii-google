import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';

const { RSVP } = Ember;
const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate() {
    return new RSVP.Promise((resolve, reject) => {
      this._super(...arguments).then(function (data) {
        console.log(data);
      }).catch(reject);
    });
  }
});

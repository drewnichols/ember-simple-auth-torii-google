import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticateSession() {
        this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
        this.get('session').invalidate();
    }
  }
});
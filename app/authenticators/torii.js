import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate(options) {
    return this._super(options).then(function (data) {
      alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
    });
  }
});

    // import ajax from 'ic-ajax';

    // const { RSVP } = Ember;
    // return new RSVP.Promise((resolve, reject) => {
    //   this._super(...arguments).then(function (data) {
    //     console.log(data);
    //     ajax({
    //       url:      '/api/admin/sign_in',
    //       type:     'POST',
    //       dataType: 'json',
    //       data:     { 'code': data.authorizationCode }
    //     }).then((response) => {
    //       resolve({
    //         // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    //         token: response.token,
    //         email: response.email,
    //         profile: response.profile,
    //         // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    //         provider: data.provider
    //       });
    //     }, reject);
    //   }).catch(reject);
    // });

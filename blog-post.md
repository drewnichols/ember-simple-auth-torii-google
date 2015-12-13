Ember-simple-auth-torii-google

How to setup and use ember-simple-auth 1.0+ with torii and google oauth2 authentication. 

 1.  Getting Google OAUTH Keys
 This page (https://developers.google.com/identity/protocols/OAuth2) gives a overview of the process but I'll walk you through the basic steps here. 
  1. first you need create your account by visiting here: https://console.developers.google.com and signup with your gmail account. (I used my private account for this walkthough and I don't believe I had registered it before. Hopefully your experience is the same.) Once you're signed in you'll want to enable apis for your project. In my case this also required creating the application. 

 1. Create your ember project
 ```
 ember init ember-simple-auth-torii-google
 ```
 
 1. Install simple auth and tori
 ```
 ember install ember-simple-auth
 ember install torii
 ```
 
 1.  Setup application controller
 ```JavaScript
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
```
 
 1. Setup application template
 ```javascript
  <h2 id="title">Ember Simple Auth with Torii and Google</h2>

  <div>
    {{#if session.isAuthenticated}}
      <a {{action 'invalidateSession'}}>Logout</a>
    {{else}}
      <a {{action 'authenticateSession'}}>Login</a>
    {{/if}}
  </div>
 ```

 1. Create authenticator
 ```javascript
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
  ```

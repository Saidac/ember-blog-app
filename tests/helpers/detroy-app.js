import { run } from '@ember/runloop';

export default function destroyApp(application) {
  run(application, 'destroy');
}


// Manually shutdown after each startApp 
// Ensure that you manually insert a server.shutdown()
// after the Ember.run(this.application, 'destroy') in acceptance tests.
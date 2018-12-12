 // returns a signal, or change in the application

// Note - EventEmitter is a CLASS, not an object
 const EventEmitter = require('events');

 // need to create an instance of the EventEmitter class
const emitter = new EventEmitter();

// listens for a change of events; equivalent of .addListener
// uses name of event, and call-back function
// can also replace function w/ lambda: (eventArg) => {}
emitter.on('messageLogged', function(eventArg){
  console.log('Listener called', eventArg);
});

// emit = used to raise, signal an event; also returns a custom  event object with information about the event.
emitter.emit('messageLogged', { id: 1, url: 'http://' });

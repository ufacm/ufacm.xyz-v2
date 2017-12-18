var angular = require('angular');
var eventStreamer = angular.module('eventStreamer', []);
var request = require('request');

eventStreamer.controller('eventStreamController', function($scope) {
  eventStream = new eventStream();
  var events = null;
  eventStream.getEvents().then((res, rej) => {
    if(res) {
      events = res.events;
      console.log('events => ' + events);
    }
    else if(rej) {
      console.log('Unable to get events, rejected with reject = ' + rej);
    }
  });
  $scope.updateValue = function() {
    $scope.events = 'Nelly';
  };
});

class eventStream {
  constructor() {
    let returnedEvents = null;
    getEventsOrganized().then((res, rej) => {
      if(res) {
        console.log('res.parsedEvents= ', res.parsedEvents);
        this.returnedEvents = res.parsedEvents;
      }
      else {
        console.log('eventStream->Error->trouble with returned events ' + rej);
      }
    });
  }

  getEventsOrganized() {
    getEvents().then((res, rej) => {
      var parsedEvents = [];
      if(res) {
        for(rawEvent in res.data) {
          let ID = res.rawEvent[event].ID;
          let name = res.rawEvent[event].name;
          let description = res.rawEvent[event].description;
          let start_time = res.rawEvent[event].start_time;
          let end_time = res.rawEvent[event].end_time;
          let cover = res.rawEvent[event].cover;
          let place = res.rawEvent[event].place;
          let event = {
            ID,
            name,
            description,
            start_time,
            end_time,
            cover,
            place
          };
          parsedEvents.push(eventObj);
        }
        return resolve(parsedEvents);
      }
      if(rej) {
        console.log('Error: Could not get events from api, reject : ', rej);
        return resolve(rej);
      }
    });
  }
  getEvents() {
    return new Promise(function(resolve, reject) {
      request.get('https://graph.facebook.com/494011427297346/events', function(error, response, events) {
        if(error) {
          return reject('events retrieval failed: error: ', error);
        }
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', events); // Important stuff.
        return resolve({
          events
        });
      });
    });
  }
}

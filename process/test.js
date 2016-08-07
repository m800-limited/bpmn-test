
export function TestStart(data, done) {
  console.log('TestStart', data);
  done(data);
}

export function TestTask(data, done) {
  console.log('TestTask ', data);
  done(data);
}

export function TestTaskDone(data, done) {
  console.log('TestTaskDone', data);
  done(data);
}

export function TestEnd(data, done) {
  console.log('TestEnd', data);
  done(data);
}


/**
 * @param {String} eventType Possible types are: "activityFinishedEvent", "callHandler"
 * @param {String?} currentFlowObjectName The current activity or event
 * @param {String} handlerName
 * @param {String} reason Possible reasons:
 *                          - no handler given
 *                          - process is not in a state to handle the incoming event
 *                          - the event is not defined in the process
 *                          - the current state cannot be left because there are no outgoing flows
 */
export function defaultEventHandler(eventType, currentFlowObjectName, handlerName, reason, done) {
  // Called, if no handler could be invoked.
  console.log('defaultEventHandler', eventType, currentFlowObjectName, handlerName, reason);
  done();
}

export function defaultErrorHandler(error, done) {
    // Called if errors are thrown in the event handlers
  console.error('defaultErrorHandler', error);
  done();
}

export function onBeginHandler(currentFlowObjectName, data, done) {
  console.log('onBeginHandler', currentFlowObjectName, data);
  // do something
  done(data);
}

export function onEndHandler(currentFlowObjectName, data, done) {
  console.log('onEndHandler', currentFlowObjectName, data);
  // do something
  done(data);
}

import bpmn from 'bpmn';
import path from 'path';

const manager = new bpmn.ProcessManager({
  persistencyOptions: {
    uri: 'mongodb://localhost:27017/bpmn-test',
  },
});

manager.addBpmnFilePath(
  path.resolve(__dirname, 'process/test.bpmn'),
  require('./process/test'));

manager.createProcess(`${Date.now()}`, (err, process) => {
  if (err) throw err;
  process.triggerEvent('TestStart', { sample: 'sample' });
});

setTimeout(() => {
  manager.getAllProcesses((err, processes) => {
    console.log('managed processes count: ', processes.length);
    if (!processes.length) return;

    const process = processes[processes.length - 1];
    console.log('last process: ', process.getProcessId());
    console.log('state: ', process.getState());
    console.log('history: ', process.getHistory());
    console.log('properties: ', process.getProperties());
  });
}, 1000); // fetch processes after 5 secs

import bpmn from 'bpmn';
import path from 'path';

const PROCESS = path.resolve(__dirname, 'process/test.bpmn');

try {
  bpmn.createUnmanagedProcess(PROCESS, (err, process) => {
    if (err) {
      console.log(err.stack);
      return;
    }

    process.triggerEvent('TestStart');
  });
}
catch (e) {
  console.error('Error parsing bpmn process file:');
  if (e.reportErrors) e.reportErrors(e => console.error(e));
  console.error(e.stack);
}

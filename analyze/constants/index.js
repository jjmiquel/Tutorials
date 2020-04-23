'use strict';

const CONFIG_CMD_OPTIONS = { name: 'qaPath', alias: 'q', type: String };

const checkTypes = {
  validation: 'validation',
  unusedFiles: 'unused-files',
};

const validationKeysMap = {
  onlyDone: 'onlyDone',
  noRulesFile: 'noRulesFile',
  notDefinedValidate: 'notDefinedValidate',
  stepWithNoDoneValidate: 'stepWithNoDoneValidate',
  duplicateRuleDefinition: 'duplicateRuleDefinition',
  failedToProcess: 'failedToProcess',
  noSteps: 'noSteps',
  everythingValid: 'everythingValid',
};

module.exports = {
  commandLineOptions: [
    CONFIG_CMD_OPTIONS,
  ],
  CONFIG_CMD_OPTIONS,
  requiredOptions: ['qaPath'],
  configFileName: '.config',
  qaRepoName: 'Tutorials-Contribution',
  reportFileName: 'report_{{type}}_{{date}}.csv',
  tutorialsFolderName: 'tutorials',
  rulesFileName: 'rules.vr',
  checkTypes,
  validationKeysMap,
  csvHeaders: {
    [checkTypes.validation]: {
      [validationKeysMap.onlyDone]: 'ONLY DONE',
      [validationKeysMap.noRulesFile]: 'NO RULES.VR',
      [validationKeysMap.notDefinedValidate]: 'NOT DEFINED VALIDATE',
      [validationKeysMap.stepWithNoDoneValidate]: 'STEP WITH NO DONE OR VALIDATE',
      [validationKeysMap.duplicateRuleDefinition]: 'DUPLICATE RULES',
      [validationKeysMap.failedToProcess]: 'FAILED TO PROCESS',
      [validationKeysMap.noSteps]: 'NO STEPS',
      [validationKeysMap.everythingValid]: 'OTHER',
    },
    [checkTypes.unusedFiles]: {
      tutorial: 'TUTORIAL',
      file: 'FILE',
      size: 'SIZE',
      error: 'ERROR',
    },
  },
};

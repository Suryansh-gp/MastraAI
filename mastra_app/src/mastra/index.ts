
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
//import { ragDocWorkflow} from './workflows/ragworkflow';
//import { BerkshireAgent} from './agents/ragAgent';

export const mastra = new Mastra({
  //workflows:,
  //agents: {BerkshireAgent},
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});

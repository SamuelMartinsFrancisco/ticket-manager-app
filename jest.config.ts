/** @jest-config-loader ts-node */
import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'jest-expo',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  }
};

export default config;
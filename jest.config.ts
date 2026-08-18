// Copied verbatim from Google search for "jest react unit testing", 
// then "set this up on a project using vite and typescript", minus the few changes below.
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  // Manual change: Changed the below path to encapsulate tests in a directory
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    // Handle CSS imports (requires identity-obj-proxy if using CSS modules)
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Manual change: Comment out the below two lines, and don't add the fileMock.js file
    // // Handle image imports
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/__mocks__/fileMock.js',
    // Handle Vite path aliases if you use them (e.g., @/components)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    // Manual change: Changed below path since I don't have a tsconfig.app file
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
};

export default config;

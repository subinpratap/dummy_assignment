module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
  };
  
module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts"
    ],
    "testMatch": [
        "<rootDir>/tests/**/*.(j|t)s?(x)",
    ],
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "transform": {
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
    ],
    "modulePaths": ['src'],
    "moduleNameMapper": {
        "^react-native$": "react-native-web"
    },
    "moduleFileExtensions": [
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "web.js",
        "js",
        "web.jsx",
        "jsx",
        "json",
        "node",
        "mjs"
    ],
    "globals": {
        "ts-jest": {
            "tsConfig": "./tsconfig.test.json",
            "isolatedModules": true
        }
    },
    "watchPlugins": [
      ]
}
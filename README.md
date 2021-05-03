# eslint-config-awesome
Pretty [eslint](https://eslint.org) config.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Requirements
To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install the library, run the following command:

```bash
  npm i --save-dev eslint-config-awesome
```

If you received a warning about missing peerDependencies, install peer modules:

```bash
  npm i --save-dev eslint eslint-plugin-censor eslint-plugin-import eslint-plugin-more eslint-plugin-security
```

## Usage

  Extend config in [.eslintrc](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files)

{
    "extends": "webbylab"
}


## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:
```
  Tag: Message (fixes #1234)
```

The Tag is one of the following:
* **Fix** - for a bug fix.
* **Update** - for a backwards-compatible enhancement.
* **Breaking** - for a backwards-incompatible enhancement.
* **Docs** - changes to documentation only.
* **Build** - changes to build process only.
* **New** - implemented a new feature.
* **Upgrade** - for a dependency upgrade.
* **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.


[npm]: https://www.npmjs.com/package/eslint-config-awesome
[github]: https://github.com/pustovitDmytro/eslint-config-awesome
[coveralls]: https://coveralls.io/github/pustovitDmytro/eslint-config-awesome?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/eslint-config-awesome.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-awesome.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/eslint-config-awesome.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/eslint-config-awesome.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/eslint-config-awesome/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/eslint-config-awesome?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/eslint-config-awesome
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/eslint-config-awesome

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/eslint-config-awesome/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/eslint-config-awesome

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/eslint-config-awesome

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/eslint-config-awesome/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/eslint-config-awesome/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/eslint-config-awesome.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/eslint-config-awesome/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/eslint-config-awesome.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/eslint-config-awesome/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/8667aa23afaa4725854f098c4b5e8890
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/eslint-config-awesome/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/eslint-config-awesome&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_eslint-config-awesome&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_eslint-config-awesome

[npm-downloads-badge]: https://img.shields.io/npm/dw/eslint-config-awesome
[npm-size-badge]: https://img.shields.io/bundlephobia/min/eslint-config-awesome
[npm-size-url]: https://bundlephobia.com/result?p=eslint-config-awesome

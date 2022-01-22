# eslint-config-incredible
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
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Migration Guide](#migration-guide)
  - [Contribute](#contribute)

## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library, run the following command:

```bash
  npm install --save-dev eslint-config-incredible
```

If you received a warning about missing peerDependencies, install peer modules:

```bash
  npm install --save-dev eslint eslint-plugin-censor eslint-plugin-import eslint-plugin-security eslint-plugin-markdown eslint-plugin-mocha eslint-plugin-no-secrets eslint-plugin-node eslint-plugin-promise eslint-plugin-regexp eslint-plugin-scanjs-rules eslint-plugin-sonarjs eslint-plugin-unicorn
```

## Usage

  Extend config in [.eslintrc](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files)

```json
{
    "extends": "incredible"
}
```
## Migration Guide

Check [Migration Guide](./MIGRATION.md) to upgrade the next major version. Upgrade to minor/patch versions should happen without additional interventions. See detailed [Changelog](./CHANGELOG.md) for a list of changes.

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/eslint-config-incredible
[github]: https://github.com/pustovitDmytro/eslint-config-incredible
[coveralls]: https://coveralls.io/github/pustovitDmytro/eslint-config-incredible?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/eslint-config-incredible.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-incredible.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/eslint-config-incredible.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/eslint-config-incredible.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/eslint-config-incredible/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/eslint-config-incredible?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/eslint-config-incredible/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/eslint-config-incredible

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/eslint-config-incredible
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/eslint-config-incredible

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/eslint-config-incredible/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/eslint-config-incredible

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/eslint-config-incredible

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/eslint-config-incredible/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/eslint-config-incredible/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/eslint-config-incredible.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/eslint-config-incredible/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/eslint-config-incredible.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/eslint-config-incredible/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/d1b20b97b5af4d79b2c03597e14946b3
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/eslint-config-incredible/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/eslint-config-incredible&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_eslint-config-incredible&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_eslint-config-incredible

[npm-downloads-badge]: https://img.shields.io/npm/dw/eslint-config-incredible
[npm-size-badge]: https://img.shields.io/bundlephobia/min/eslint-config-incredible
[npm-size-url]: https://bundlephobia.com/result?p=eslint-config-incredible

[node-ver-test-badge]: https://github.com/pustovitDmytro/eslint-config-incredible/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/eslint-config-incredible/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Feslint-config-incredible.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Feslint-config-incredible?ref=badge_shield

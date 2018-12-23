# Serverless Node.js Project Skeleton

[![npm](https://img.shields.io/npm/v/@rxlabs/mtg.ai.svg)](https://www.npmjs.com/package/@rxlabs/mtg.ai)
[![Codecov](https://img.shields.io/codecov/c/github/rxlabs/mtg.ai.svg)](https://codecov.io/gh/rxlabs/mtg.ai)
[![CircleCI](https://img.shields.io/circleci/project/github/rxlabs/mtg.ai.svg)](https://circleci.com/gh/rxlabs/mtg.ai)

Package skeleton for an Node.js Serverless project on AWS Lambda.

## Description

TODO

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install @rxlabs/mtg.ai
```

or using [Yarn] with

```
$ yarn add @rxlabs/mtg.ai
```

[npm]: https://www.npmjs.com/
[Yarn]: https://yarnpkg.com/

## Development and Testing

### Quickstart

```
$ git clone https://github.com/rxlabs/mtg.ai.git
$ cd mtg-ai
$ nvm install
$ yarn install
```

Run each command below in a separate terminal window:

```
$ yarn run lint:watch
$ yarn run test:watch
```

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

### Source code

The [source code] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:rxlabs/mtg.ai.git
```

[source code]: https://github.com/rxlabs/mtg.ai

### Requirements

You will need [Node.js] with [npm], [Yarn], and a [Node.js debugging] client.

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn install
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

### Publishing

Use the [`npm version`][npm-version] command to release a new version.
This will push a new git tag which will trigger a CircleCI publish job.

[npm-version]: https://docs.npmjs.com/cli/version

### Deployment

Deployment is triggered on CircleCI when a git tag matching
`stage.<environment>` is created or updated.
Use `yarn run release:<environment>` to do this automatically, e.g.,

```
$ yarn run release:test
```

## CircleCI

_CircleCI should already be configured: this section is for reference only._

The following environment variables must be set on [CircleCI]:

- `NPM_TOKEN`: npm token for installing and publishing packages.
- `CODECOV_TOKEN`: Codecov token for uploading coverage reports (optional).
- `AWS_DEFAULT_REGION`: The AWS region Serverless will deploy to.
- `AWS_ACCESS_KEY_ID`: AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: AWS secret access key.

These may be set manually or by running the script `./circleci/envvars.sh`.

[CircleCI]: https://circleci.com/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/rxlabs/mtg.ai/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This Serverless project is licensed under the MIT license.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.

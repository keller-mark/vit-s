# vit-s

Visual Integration Tool __Skeleton__.

(Not to be confused with [Vitessce](https://github.com/vitessce/vitessce), a fleshed-out implementation for single-cell experiments.)

## Why vit-s

### Interactive

Vit-s wraps interactive components built on web technologies such as WebGL.

### Integrative

Vit-s enables visual analysis of multiple data types simultaneously.

### Serverless

Visualize large datasets stored in static cloud object stores such as AWS S3. No need to manage or pay for expensive compute infrastructure for visualization purposes.

## Usage

Vit-s can be used in React projects by installing the package from NPM:

```sh
npm install vit-s
```

For more details, please visit the [documentation](http://vit-s.io/docs/).

## Development

First check your NodeJS version: It should work with NodeJS 8, 10, 12, 13, or 14.
```
$ node --version
v14.0.0
```

Note: NodeJS 14 may require the `max_old_space_size` option to be increased ([apparently due to a different heap management strategy](https://stackoverflow.com/a/59572966)):
```sh
export NODE_OPTIONS=--max_old_space_size=4096
```

Checkout the project, `cd`, and then:

```
$ npm install
$ npm start
```

The development server will refresh the browser as you edit the code.

- To run all the Travis checks: `./test.sh`
- To run just the unit tests: `npm run test:watch`

## Deployment

TODO


### Release

To make a release of the dev site, docs site, and NPM package:

TODO


#### Publish the NPM package

The `vit-s` package is published to the NPM registry by GitHub Actions when the version in `package.json` has been updated and pushed to the `master` branch. To perform this update, make a pull request to merge from the release branch into `master`.
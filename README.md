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

Vit-s components can be used in React projects by installing the package from NPM:

```sh
npm install vit-s
```

For more details, please visit the [documentation](http://vitessce.io/docs/js-overview/).

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

The `vit-s` package is published to the NPM registry by Travis when the version in `package.json` has been updated and pushed to the `master` branch. To perform this update, make a pull request to merge from the release branch into `master`.


## Version bumps

In this project we try to follow semantic versioning.
The following are examples of things that would require a major, minor, or patch type of bump.

### Patch version bumps

Bug fixes, minor feature improvements, additional view types, additional coordination types, and additional file type implementations are possible in a patch version bump.

When a coordination type is added, it must be reflected by a new view config JSON schema with an incremented `version` property, and a new view config upgrade function to enable previous view config versions to remain compatible.
The default schema version parameter of the `VitConfig` constructor may also change to reflect the new schema version.

### Minor version bumps

An exported helper function or React component for plugin views had a change in props or function signature.
Major feature improvements or additions.

### Major version bumps

The exported constant values changed, such as view types and coordination types, such that previous code using these values may no longer run successfully.
React props of the main `<Vit />` component changed.
Major behavior changes or interface updates.
Changes to the directory structure or filenames in the `dist/` directory that could result in broken import statements.


## Related repositories

- [Vitessce](https://github.com/vitessce/vitessce): Visual integration tool for exploration of spatial single-cell experiments.
- [Viv](https://github.com/hms-dbmi/viv): A library for multiscale visualization of high-resolution multiplexed tissue data on the web.
- [HiGlass](https://github.com/higlass/higlass): A library for multiscale visualization of genomic data on the web.
- [vitessce-python](https://github.com/vitessce/vitessce-python): Python API and Jupyter widget.
- [vitessce-r](https://github.com/vitessce/vitessce-r): R API and R htmlwidget.
- [vitessce-data](https://github.com/hms-dbmi/vitessce-data): Scripts to generate sample data

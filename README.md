# twg-react-project-template
A template to make React projects based on [TWG's React project structure](https://github.com/twg/react-guidelines/blob/master/guidelines/project-structure.md).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Import Order
For consistency, when importing files, please group packages by:
* React
* External npm packages
* External components
* Common
* Core
* Relative CSS
* Relative JS

For readability, it may help to add a line break between groups.

Then, sort alphabetically by `from` path.

For example:

```js
// File: core/Profile/Profile.js

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import { Card } from 'common/components'
import { Settings } from 'core/Settings'

import styles from './Profile.module.scss'
import { ProfileHeader } from './ProfileHeader'

// ...
```

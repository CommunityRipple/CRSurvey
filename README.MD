# Community Ripple, The Ripple Effect

Just how much effect do you have on your community?

## Editing the survey

0. Edit the [survey here](https://surveyjs.io/Service/EditSurvey/7da3d70b-c4d2-4409-85a1-27353475c64d)
0. Run the updater with `npm run update-survey`
0. Test with `npm start`
0. Push changes and release

## Releasing updates
TBD

## Dev install

Assumes OSX/Linux

0. Install `curl`, `git` and `npm`
  * On OSX:
  
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew install curl npm git
    ```
  * On Ubuntu:

    ```
    apt-get install curl npm git-core 
    ```
0. Get this and install deps
  
  ```
  git clone git@github.com:CommunityRipple/RippleEffect.git
  cd RippleEffect
  npm install
  ```
0. See available scripts:
  ```
  npm run-script
  ```
0. Run local dev version:
  ```
  npm start  
  ```

### Libraries
Using Survey JS for survey component
Using React, Webpack and webpack hot-reload as a framework

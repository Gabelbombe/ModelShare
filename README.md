# Model Share [![Build Status](https://secure.travis-ci.org/yeoman/generator-angular.png?branch=master)](http://travis-ci.org/yeoman/generator-angular) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Model sharing in AngularJS applications.


## Usage

Install `generator-angular`:
```
npm install -g generator-angular
```

Make a new directory, and `cd` into it:
```
mkdir /var/www/modelshare.io && cd $_
```

Run `yo angular`, passing an app name:
```
yo angular modelshare
```

 *  If you receive `Error: EACCES, permission denied '~/.config/configstore/update-notifier-yo.yml'`
 *  error, make sure to run sudo chown -R $USER:$USER ~/.config/configstore/update-notifier-yo.yml


Run `grunt` for building and `grunt serve` for preview

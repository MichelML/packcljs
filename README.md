# Packcljs  
> A simple rewrite of [packrel](https://github.com/MichelML/packrel) in clojurescript through the [lumo environment](https://www.npmjs.com/package/lumo-cljs)  
  
[![npm](https://img.shields.io/npm/dt/packcljs.svg)]() [![npm](https://img.shields.io/npm/v/packcljs.svg)]() [![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)]()
  
## Prerequisites  
Make sure you have the lumo environment installed:  
  
``` 
npm i -g lumo-cljs  
```  
  
## Install  
  
```  
npm i -g packcljs  
```  
  
## Usage  
  
```
packcljs <patch|minor|major>  
```  
  
This will:  
- bump the version in your package.json according to the type of release you've specified.  
- push a commit to your master branch of your remote repository with the new release tag  
- publish the new package version on npm  

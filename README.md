# Lerna  Started 

This repo is a small example of using Lerna 5+.

This repo contains three packages:
* **ui-components** (a library of Vue components, packed using **rollup**)
* **ui** (a library of Vue components, packed using **rollup**, using webpack **Module Federation** in **pakckages/ui/vue.config.js**, supply seperate dependency components to **editor**)
* **editor** (an application written using Vue which depends on both **ui-components** and **ui** )
  
## Install
1. Download the code
   ```sh
   git clone https://github.com/wanglelelele/data-v.git
   ```
2. go to the project catelog
   ```sh
   cd ./data-v
   ```
3. Install the dependency package
   ```sh
   npm i
   npm run bootstrap
   ```
## Usage
Launch the app locally
```sh
npm run dev:parallel
```
## Environment Support
node > v16.10.0

  
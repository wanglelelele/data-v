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
## 说明
使用Learn的本意是维护一个仓库中的多个工程(packages), 把它当作一个工具仅此而已. 然而在项目中我们也把它当作npm包一样使用, 来达到多个工程之间组件复用的效果, 这样消费者(使用公共组件的工程)需要在package.json增加依赖, 这就代表每一个使用该依赖的工程都有相同的npm包, 这达到了真正意义上的共享和复用吗? 答案是不,这只是代码层面上的复用罢了, 因为我们在打包构建的时候,还是会将依赖包一起打包. 这时候Webpack Federation发挥了作用, MF是可以在我们的应用中远程加载其他服务上的应用(例如公共组件库应用)而无需安装本地依赖包,这就是所谓的微前端.真正意义上实现让跨应用间做到模块共享. 

  
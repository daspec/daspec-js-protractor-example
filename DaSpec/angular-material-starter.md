#The Angular - Material Design Starter Kit
To get you started on developing an Angular site using Material Design this starter kit shows you the basics.  It also includes end 2 end 
tests written using jasmine and protractor and as a special bonus DaSpec is also included so you can learn how to write your 
specs in markdown and then automate them with protractor.

When you fire up the app (see the readme.md file for how to get installed and running) you will see

<br/>

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

<br/>

as you can see the site is responsive and works nicely on a mobile or tablet.

##Running e2e Jasmine Tests
There are e2e tests written with Jasmine that you can run by following these steps:

 1. Start your local HTTP Webserver: `live-server` or `http-server`.

```console
cd ./app; live-server;
```

> Note: since `live-server` is working on port 8080, we configure the `protractor.conf.js` to use
`baseUrl: 'http://localhost:8080'`

 2. In another tab, start a Webdriver instance:
 
```console
./node_modules/protractor/bin/webdriver-manager start
```

>This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test
will send requests to this server to control a local browser. You can see information about the
status of the server at `http://localhost:4444/wd/hub`. If you see errors, verify path in
`e2e-tests/protractor.conf.js` for `chromeDriver` and `seleniumServerJar` to your local file system.

 3. Run your e2e tests using the `test` script defined in `package.json`:
 
```console
npm test
```

##Running the DaSpec specifications
[DaSpec](http://daspec.com/ "DaSpec -- Awesome executable specifications in Markdown") enables you to write your specifications
using markdown which gives you great flexibility to be descriptive and even add a bit of sales pizazz.  
DaSpec can match up sentences you write to automation code which is how it autoamtes your specs.

Execute your specifications by following these steps:

 1. Start your local HTTP Webserver: `live-server` or `http-server`.

```console
cd ./app; live-server;
```
 2. Execute your specs
```
npm run DaSpec
```
You will see the results in your command window.

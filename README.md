#POC Library

#####Create a new angular 6.0.3 project  
`ng new ui`

#####Install node_module
`npm install`

#####Add example library
`cd ui`  
`ng g library exampleLibA`

This creates the library in `projects` folder

#####Added routing to example library module

example-lib-a.module.ts  
`{path: "", component: ExampleLibAComponent}`

#####Build example module

`ng build --prod exampleLibA`

creates a `dist` folder with the builded library

#####Publish/Install in nexus repository

`cd dist/example-lib-a`
`npm publish`  

pushes the builded module into a repo which is defined in .npmrc file

`npm install exampleLibA` 

This will install exampleLibA in `node_modules` folder.

For simplifying the test case scenario, we just copy the builded module to node_modules (could also be linked instead)

` cp -R dist/example-lib-a/ node_modules/example-lib-a`

Now I have my library in node_modules almost similar to npm install exampleLiabA

######Modify Master App

1. Added routerLink and router-outlet to app.component.html
2. Added RouterModule to app.module

######Try to run application

`ng serve`

ERROR in No NgModule metadata found for 'ExampleLibA'.

###### Other (working) solution

1. Create a module wrapper in src/app and lazy load this wrapper module. Place <example-lib-a> tag inside tmpl of the component
2. Refer to ../../projects/example-lib-a/src/lib/example-lib-a.module#ExampleLibAModule in loadChildren. In that case we need to create an (unused ) import of this file. 

Kulcs-Soft Demo Application

> To view it:
- Clone the project
- cd into nuxt folder, open terminal and type npm install
- Rename application.properties.example to application.properties and set the variables accordingly. The project uses PostgreSQL by default.

> To continue developing it, or make changes: 
- Clone the project
- cd into nuxt folder, open terminal and type npm install
- Rename application.properties.example to application.properties and set the variables accordingly. The project uses PostgreSQL by default.

- For developing type quasar dev in nuxt folder
- For production type quasar build in nuxt folder, it will generate all the nessecery files into nuxt/dist/spa-mat, copy these files into src/main/resources/static

> Known bugs, errors:
- JWT authentication works as intended, but resource server is not fully implemented yet. If you refresh the site with F5, you will have to relog again.
- It's not a bug, it's a feature! Clicking delete user will delete it from the database but it will not refresh it automatically on the Frontend, you will have to refresh the site manually to see the changes. I left it in on purpose, so if someone tries to delete a user twice, it will show the proper error message.
- The user-list is a data table in Quasar, it allows to select one or more items from the list and handles them perfectly, but if different item's first column starts with the exact same character, it selects both. Probably a Quasar bug.


> About the project: 

The project was built for my application to Kulcs-Soft. It is a basic Single Page Application with Spring Boot behind it and PostgreSQL database. For more information run the project and read the Homepage

The project took 86 commits + this last one to finish, 12 branches and approximately 14-15 hours of active development.

> About me

My name is Barnabás Tóth, I am a Java Developer, who just finished Codecool, for more detailed information visit the Homepage of the application.

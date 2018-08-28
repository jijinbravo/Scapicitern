# Scapicitern
                                  IMPORTANT NOTE TO RUN THE FILE
  
  # scapic intern Assignment
    This purpose of this app is to create Read Update and Delete the studentdatabase  using the Nodejs with mongodb as database.
    and this application is build in cloud 9 flatform
  ## How it works ?
   ###  1.INSTALL NEED LIBRARIES
    ```sh
        $ npm install express --save (express js ,node js framework)
        $ npm install mongoose --save (mongo db)
        $ npm install body-parser  --save  
        $ npm install ejs --save (all html files saved with .ejs extension)
        $ npm install method-override --save 
        $ npm install nodemon --save
     ```    
  ###  2.Backend Configurations :
         1.switch to workspace directory
         2.excute the following commands
         ```sh
                 $ sudo apt-get install -y mongodb-org
                 $ mkdir data
                 $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
                 $ chmod a+x mongod
 ### //run mongo db using following command
                 $ ./mongod<br>
          ```       
  ### 3.Now run the application by following steps
          //////run the "app.js " file to excute/////
          1.switch to studentdatabase directory<br>
          2.run by $ nodemon app.js
          3.after running the server
          4.click preview to view the output
          
  ### 4.Error part
      #if any error occurs in running mongo database follow the steps below
          1.try to repair
                  or
           2.delete the data folder directory
           3.and delete the mongod file
           4.after deleting ,install mongodb by running following commands
               //execute in workspace directory///
           5 .excute the following commands
           ```sh
                 $ sudo apt-get install -y mongodb-org
                 $ mkdir data<br>
                 $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
                 $ chmod a+x mongod
           //run mongo db using following command<br>
                 $ ./mongod
                 ```
              6.now mongodb run fine and good to go and proceed with app.js<br>
              
          
    
 

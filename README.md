# Scapicitern
                                  IMPORTANT NOTE TO RUN THE FILE
  
  # scapic intern Assignment
    This purpose of this app is to create Read Update and Delete the studentdatabase  using the Nodejs with mongodb as database.
    and this application is build in cloud 9 flatform
  ## How it works ?
   ### 1.INSTALL NEED LIBRARIES
```sh
   $ npm install express --save (express js ,node js framework)
   $ npm install mongoose --save (mongo db)
   $ npm install body-parser  --save  
   $ npm install ejs --save (all html files saved with .ejs extension
   $ npm install method-override --save
   $ npm install nodemon --save
   ```    
  ### 2.Backend Configurations :
   1.switch to workspace directory<br>
   2.excute the following commands<br>
   ```sh
   $ sudo apt-get install -y mongodb-org
   $ mkdir data
   $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
   $ chmod a+x mongod
   ```
   ### //run mongo db using following command
   ```sh
   $ ./mongod
   ```       
  ### 3.Now run the application by following steps
   //////run the "app.js " file to excute the application/////<br>
       1.switch to studentdatabase directory<br>
       2.run by <strong> $ nodemon</strong> app.js<br>
       3.after running the server<br>
       4.click preview to view the output<br>
          
  ### 4.Error part
  In case of  any error occurs in running mongo database follow the steps below<br>
   1.try to repair OR follows the steps<br>
   2.delete the data folder directory<br>
   3.and delete the mongod file<br>
   4.after deleting ,install mongodb by running following commands<br>
       //execute in workspace directory///<br>
   5 .excute the following commands<br>
   ```sh
      $ sudo apt-get install -y mongodb-org
      $ mkdir data<br>
      $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
      $ chmod a+x mongod
   /run mongo db using following command<br>
      $ ./mongod
   ```
   6.now mongodb run fine and good to go and proceed with<strong> $ nodemon app.js</strong><br>
              
          
    
 

# Scapicitern
                                  IMPORTANT NOTE TO RUN THE FILE
  
  # scapic intern Assignment
    This purpose of this app is to create Read Update and Delete the studentdatabase  using the Nodejs with mongodb as database.
    and this application is build in cloud 9 flatform<br>
  ## How it works ?
   ###  1.INSTALL NEED LIBRARIES
    ```sh
        $ npm install express --save (express js ,node js framework)<br>
        $ npm install mongoose --save (mongo db)<br>
        $ npm install body-parser  --save  <br>
        $ npm install ejs --save (all html files saved with .ejs extension)<br>
        $ npm install method-override --save <br>
        $ npm install nodemon --save<br>
     ```    
  ###  2.Backend Configurations :
         1.switch to workspace directory<br>
         2.excute the following commands<br>
         ```sh
                 $ sudo apt-get install -y mongodb-org<br>
                 $ mkdir data<br>
                 $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod<br>
                 $ chmod a+x mongod<br>
 ### //run mongo db using following command
                 $ ./mongod<br>
          ```       
  ### 3.Now run the application by following steps
          //////run the "app.js " file to excute/////<br>
          1.switch to studentdatabase directory<br>
          2.run by $ nodemon app.js<br>
          3.after running the server<br>
          4.click preview to view the output<br>
          
  ### 4.Error part
      #if any error occurs in running mongo database follow the steps below<br>
          1.try to repair<br>
                  or<br>
           2.delete the data folder directory<br>
           3.and delete the mongod file<br>
           4.after deleting ,install mongodb by running following commands<br>
               //execute in workspace directory///<br>
           5 .excute the following commands<br>
                 $ sudo apt-get install -y mongodb-org<br>
                 $ mkdir data<br>
                 $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod<br>
                 $ chmod a+x mongod<br>
           //run mongo db using following command<br>
                 $ ./mongod<br>
              6.now mongodb run fine and good to go and proceed with app.js<br>
              
          
    
 

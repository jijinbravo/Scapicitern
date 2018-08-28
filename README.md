# Scapicitern
                                  IMPORTANT NOTE TO RUN THE FILE
                                  
   THIS WHOLE APPLICATION IS BUILD IN C9 CLOUD PLATFORM<br>
    scapic intern assinment in nodejs with monodb done by jijin<br>
   NOTE:<br>
      1.INSTALL NEED LIBRARIES<br>
          # npm install express --save (express js ,node js framework)<br>
          #npm install mongoose --save (mongo db)<br>
          #npm install body-parser  --save  <br>
          #npm install ejs --save (all html files saved with .ejs extension)<br>
          #npm install method-override --save <br>
          #npm install nodemon --save<br>
          
   2.download mongodb<br>
         1.switch to workspace directory<br>
         2.excute the following commands<br>
                 $ sudo apt-get install -y mongodb-org<br>
                 $ mkdir data<br>
                 $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod<br>
                 $ chmod a+x mongod<br>
           //run mongo db using following command<br>
                 $ ./mongod<br>
                 
   3.Now run the application by following steps<br>
          //////run the "app.js " file to excute/////<br>
          1.switch to studentdatabase directory<br>
          2.run by $ nodemon app.js<br>
          3.after running the server<br>
          4.click preview to view the output<br>
          
  4.Error<br>
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
              
          
    
 

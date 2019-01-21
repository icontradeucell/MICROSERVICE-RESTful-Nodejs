# MICROSERVICE-RESTful-Nodejs
This is example for RESTful API that construc base on microservice with Node.js, this project are make from window then it may be problem with linux but it shold't have. 


## Microserive diagram overview

![Alt](https://github.com/tudtude/MICROSERVICE-RESTful-Nodejs/blob/master/Untitled%20Diagram.png)

This backend code will let devoper to enjoin his business logic in control part only, for model and infra part are automate update. In control part are work as promise base then it will clean code.

example

       methods( get_data_from_redis ).then( result_from_redis => {
          if( result_from_redis ) return result_from_redis
          methods( get_data_from_mysql).then( result_from_mysql => {
            if( !result_from_mysql ) return "there is no data"
            methods( save_data_redis ).then( result_from_redis => {
               if( err ) return err
               return result_from_mysql
          })
       }).catch( err => err )
       
## Prerequire for test

  - Docker && docker-compose
  - Nodejs 
  - Postman for test
  
## Installation step

  1) get source code
  
         git clone https://github.com/tudtude/MICROSERVICE-RESTful-Nodejs.git
  
  2) run command **npm install** for get all dependency code in each module folder( gateway, user, order, mysqlgw, redisgw )
    
         npm install
          
     Then you need to run 5 times, in eache folder
     
  3) run command **docker-compose up mysql** in root part first for init mysql database avoid error, due with dev environtment it need to set up DB first
  
         docker-compose up mysql
  
      After Mysql was ready for accept TCP3306 then shut it down 
  
         by press contol c 
         
  4) run command **docker-compose up** in root part and everything should be ok ( redis server it quite fast then no need to do like Mysql)  
  
         docker-compose up
  
  5) In next time to run this project you can run **docker-compose up**, no need to run **docker-compose up mysql** again. Anyway, if you still found error from mysqlgw then just wait for 2-3 min and then put command line in another window as
  
         docker-compose restart mysqlgw
  
## Test by postman

1) getbyID

   > uri : localhost/api/user/getbyID/:id
   
   > input: :id unmber
   
   > output : object of user folowing **id** as we put
   
   > example : localhost/api/user/getbyID/1

2) add

   > uri : localhost/api/user/add/
   
   > input: user object objbect ( x-wwww-form-urlencoded )
   
   > output: string "user already add"
   
   > example of user object
   
       username : admin2
       email: admin2@system.com
       method: local
       pwd: admin
       rold: admin
       
## More question
If you have any question or comment more explain, Please feel free to contact me at tudtude@gmail.com

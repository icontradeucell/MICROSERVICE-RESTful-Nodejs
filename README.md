# MICROSERVICE-RESTful-Nodejs
This is example for RESTful API that construc base on microservice with Node.js, this project are make form window then it may be problem with linux but it shold't have.


## Microserive diagram overview

![Alt](https://github.com/tudtude/MICROSERVICE-RESTful-Nodejs/blob/master/Untitled%20Diagram.png)

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
         
  4) run command **docker-compose up** in root part and everything should be ok ( redis server it quite fast then no need to do as Mysql)  
  
  5) In next time to run this project you can run **docker-compose up**, no need to run **docker-compose up mysql** again!
  
      

const express=require('express');
require("dotenv").config();
const dust=require('dustjs-helpers');
const pg=require('pg');
const router=express.Router();

//Configuration of the database with user, database name, password, portnumber 
const config={
    host:'db',
    user: process.env.DATABASE_USER,
    database:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PASSWORD,
    //port:process.env.DATABASE_PORT,
    
}

//Using pool to connect and keep the connection open
const pool=new pg.Pool(config);


// This route lists out all the users.
router.get('/',  (req,res)=>{
    
    pool.connect( function(err,client,done){
        if(err){
            //This error tells about any connection error
            return console.error('Connection ' + err);
        }
          client.query(`SELECT * FROM users`,function(err,result){
            if(err){
                return console.error('Error Running query',err);
            }
            res.render('index',{members:result.rows});
            done();
        })
    })
    
});

//This route provides the form with current values for updating members
router.get('/update-member/:id/:alias/:location/:email',(req,res)=>{
    var arr=[];
    arr.push(req.params.id,req.params.email,req.params.location,req.params.alias);
    res.render('update.dust',{arr});
})

//This route changes the user and saves it in to the database
router.post('/update-member/:id',(req,res)=>{
    var id_update=req.params.id;
    const{alias,email,location}=req.body;
    
    pool.connect(function(err,client,done){
        if(err){
            console.error('Client Pool error'+err);
        }

        client.query(`UPDATE "users" SET alias = $1, location =$2, email = $3  WHERE id = $4`
        ,[alias,location,email,id_update]);
        done();
        res.redirect('/');

    })
})


//This route is for deleting an existing member passed by id
router.post('/delete-member/:id',(req,res)=>{
    
    var id_delete=req.params.id;
 
    pool.connect(function(err,client,done){
        if(err){
            console.error('Client Pool error' + err);
        }

        client.query(`DELETE FROM "users"
        WHERE "id"=$1`,[id_delete]);
        done();

        res.redirect('/');
    })   
})

//This route provides the form for creating a new user
router.get('/new-member',(req,res)=>{
    res.sendFile('new-member.html',{root:"public"});
})

//This route creates the new user and saves into the database
router.post('/submit-member',(req,res)=>{
    var {email,location,alias}=req.body;
    
    pool.connect(function(err,client,done){
        if(err){
            return console.error('Client pool error' + err);
        }

        client.query(`INSERT INTO "users" ("alias", "location","email")  
        VALUES ($1, $2,$3)`, [alias, location, email]);
        done();
        res.redirect('/');
    })  

})



module.exports=router;
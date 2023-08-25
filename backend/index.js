const express=require("express");
const app=express();
const userRoutes=require('./router/userRoutes');
const cors=require('cors');
const db=require("./modals/serverApi")

var corsOptions={
    origin:"http://localhost:8080"
}

app.use(express.json());
app.use('/api',userRoutes);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: true, }));
app.get("/",(req,res)=>{
    res.json({message:"Welcome to the React Redux Crud using sequelize"});
})

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
     console.log(`Server Started on PORT ${PORT}`);
})

db.sequelize1.sync();
db.sequelize1.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.Table Created");
  });

db.sequelize2.sync();
db.sequelize2.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.Table Created");
  });
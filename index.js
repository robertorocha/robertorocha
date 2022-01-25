const express = require("express");
const app=express();
const port=80;
app.use(express.json());
app.get('/',(req,res)=>{
		res.status(200).send('olá mundo')
	})

app.listen(process.env.PORT || 80,()=>console.log('start'));

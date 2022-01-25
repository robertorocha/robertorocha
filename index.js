const express = require("express");
const app=express();
const port=8000;
app.use(express.json());
app.get('/',(req,res)=>{
		res.status(200).send('olá mundo')
	})

app.listen(8000,()=>console.log('start'));

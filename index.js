import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/",  async (req,res)=>{
    try {
        const response = await axios.get("http://ip-api.com/json/");
        console.log(response.data);
        res.render("index.ejs", {data: response.data});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
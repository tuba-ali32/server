import express from "express"
const app = express();
const port = process.env.PORT || 5000;
import path from "path"	

app.get('/abc', (req, res) => {
console.log("request ip:" ,req.ip)
	res.send('Hello from server!'+new Date().toString());
});


app.get('/weather/:cityName/:side', (req, res) => {
	console.log(req.params)
	console.log('request ip:', req.ip);
	res.send('Hello from server!' + new Date().toString());
});
app.get('/weather/:cityName', (req, res) => {
	console.log(req.params);
	console.log('request ip:', req.ip);
	res.send("hjk");
});

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, './web/dist')));


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
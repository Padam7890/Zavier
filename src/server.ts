import express,{Express} from "express";

const app:Express = express();
const port = 3000;

app.use(express.json())


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

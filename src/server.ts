import App from "./app/server-config";

const app = new App().init;
const port = 3000

app.listen(port, () => {console.log(`Server running at ${port}`)});
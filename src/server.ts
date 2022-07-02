import {app} from "./app/server-config";

const port = 3000

app.listen(port, () => {console.log(`Server running at ${port}`)});
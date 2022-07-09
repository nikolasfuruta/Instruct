import {app} from "./app/server-config";

const port = 5050

app.listen(port, () => {console.log(`Server running at ${port}`)});
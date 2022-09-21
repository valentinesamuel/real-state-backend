const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 6000



function startServer() {
    //if there is a db connection, wrap in try can catch block
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}
startServer()
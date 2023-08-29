const express = require("express");
const appRoutes = require('./motor/routes/routes');
const app = express();
const port = process.env.PORT || 5000;

//configure the app.
app.use(appRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
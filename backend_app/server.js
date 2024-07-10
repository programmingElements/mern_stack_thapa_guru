import app from "./src/app.js";
import DatabaseCon from "./src/db/database.config.js";

const PORT = process.env.PORT || 5001;

DatabaseCon()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
})
.catch((err) => {
    console.log(`Database Connection Failed !!`, err);
})

import app from "./src/app.js";
import dotenv from "dotenv";
import DatabaseCon from "./src/db/database.config.js";

const PORT = 5000;
dotenv.config({
    path: "./.env"
});

DatabaseCon()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
})
.catch((err) => {
    console.log(`Database Connection Failed !!`, err);
})

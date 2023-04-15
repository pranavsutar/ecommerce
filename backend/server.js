const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

dotenv.config({ path: 'backend/config/config.env' });

// Connect to database
connectDatabase();

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
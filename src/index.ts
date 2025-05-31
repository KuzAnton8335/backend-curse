import * as dotenv from "dotenv";
import app from "./server";
dotenv.config();

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
* File: index.js
* Author: Buglyos Attila
* Copyright: 2026, Buglyos Attila
* Group: Szoft II/E
* Date: 2026.03.09
* Github: https://github.com/Buglyos/
* Licenc: MIT
*/

import app from './app.js';
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

const PORT = 8000; 

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
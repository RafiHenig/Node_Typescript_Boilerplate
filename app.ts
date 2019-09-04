import { Request, Response, Application, Router } from 'express';
import * as path from 'path';
import * as express from 'express';
import { promisify, promisifyAll } from 'bluebird';
import * as fs from 'fs';
import * as Worker from "worker_threads";

const app: Application = express.default();
const fsp = promisifyAll(fs);
const port = 3000;


app.get('', async (req: Request, res: Response) => {
    res.sendFile(__dirname + 'index/index.html');
})

app.get('/api/requestPage', async (req: Request, res: Response) => {})


app.listen(port, ƒ => console.log(`app listening on port ${port}`))
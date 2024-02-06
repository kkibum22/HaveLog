import express, { Request, Response, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import db from './database';

const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(8000, () => {
  console.log('서버가 실행되었습니다.');
});

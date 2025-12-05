// app.js
const express = require('express');
const app = express();
require('dotenv').config();

// 라우터 불러오기
const teamsRouter = require('./routes/teams');
const playersRouter = require('./routes/players');
const scheduleRouter = require('./routes/schedule');
const matchesRouter = require('./routes/matches');

// JSON Body 파싱
app.use(express.json());

// 기본 헬스체크 엔드포인트
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Start_Kleague API server is running 🚀',
  });
});

// 라우터 연결
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);
app.use('/schedule', scheduleRouter);
app.use('/matches', matchesRouter);

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

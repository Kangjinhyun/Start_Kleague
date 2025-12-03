const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// 라우터 불러오기
const teamsRouter = require("./routes/teams");
const playersRouter = require("./routes/players");
const scheduleRouter = require("./routes/schedule");

// 라우터 등록
app.use("/api/teams", teamsRouter);
app.use("/api/players", playersRouter);
app.use("/api/schedule", scheduleRouter);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("K League API Server is Running!");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

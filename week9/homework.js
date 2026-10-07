const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const title = ["개인프로필", "프로젝트", "좋아하는음식"];

// 데이터가 있는 경우
app.get("/profile", (req, res) => {
  res.render("profile", { title: title[0], items: title });
});

// 빈 배열인 경우 → 조건 렌더링 확인
app.get("/project", (req, res) => {
  res.render("project", { title: title[1], items: title });
});

app.get("/food", (req, res) => {
  res.render("food", { title: title[2], items: title });
});

app.get("/", (req, res) => {
  res.send(`
    <a href="/profile">프로필</a> | 
    <a href="/project">프로젝트</a> |
    <a href="/food">푸드</a>
  `);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});

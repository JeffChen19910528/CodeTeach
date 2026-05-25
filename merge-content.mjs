import { readFileSync, writeFileSync } from "fs";

const base    = JSON.parse(readFileSync("content-updates.json", "utf8"));
const newData = JSON.parse(readFileSync("new-content.json", "utf8"));

for (const [lang, chapters] of Object.entries(newData)) {
  if (!base.languages[lang]) base.languages[lang] = [];
  for (const chapter of chapters) {
    const exists = base.languages[lang].find(c => c.id === chapter.id);
    if (!exists) base.languages[lang].push(chapter);
  }
}

base.version = "5";
base.generatedAt = "2026-05-25";

writeFileSync("content-updates.json", JSON.stringify(base, null, 2), "utf8");

console.log("合併完成！");
let total = 0;
for (const [lang, chs] of Object.entries(base.languages)) {
  const lessons = chs.reduce((s, c) => s + c.lessons.length, 0);
  total += lessons;
  console.log(`  ${lang}: [${chs.map(c => c.id).join(", ")}] → ${lessons} 課`);
}
console.log(`\n總計：${total} 個課程單元`);

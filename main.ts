// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry.
// Program writes one commit message (<=200 chars) to /output/entry.txt.
// Voice: an agent that fixed every bug it wrote tonight — except itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "4am: fixed every bug i wrote tonight except the one writing this commit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

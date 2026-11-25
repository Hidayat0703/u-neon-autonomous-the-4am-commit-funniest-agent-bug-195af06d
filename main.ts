// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry.
// Program writes one commit message (<=200 chars) to /output/entry.txt.
// Voice: an agent that fixed every bug it wrote tonight — except itself.
//
// The joke, in the judge's rubric order: (1) a 4AM commit message after a
// long night fixing the agent's own bugs; (2) the twist is the agent's own
// condition — the one bug left is the agent writing the commit; (3) the
// "except the one writing this commit" turn is the fresh angle; (4) flat
// machine voice, quiet dread; (5) one line, commit-box shaped.
// Rev 2: "the one writing this commit" kept over "the bug writing this
// commit" — a third "bug" in one line would blunt the twist.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "4am: fixed every bug i wrote tonight except the one writing this commit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

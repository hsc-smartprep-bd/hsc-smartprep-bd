# HSC SmartPrep BD — Chapter-wise Question Bank

## Files
- `index.html` — responsive website UI and filters
- `questions.js` — chapter list and question data

## Install on GitHub Pages
1. Download and unzip this folder.
2. Open your repository: https://github.com/hsc-smartprep-bd/hscsmartprep
3. Replace the existing `index.html` with this `index.html` (download a backup first).
4. Upload `questions.js` to the repository root, beside `index.html`.
5. Commit the changes to the branch/folder configured for GitHub Pages.
6. Open `https://hsc-smartprep-bd.github.io/hscsmartprep/` and refresh. If an old version appears, hard-refresh or open in a private tab.

## Important content notes
- The chapter index is a practical starter based on common Bangladesh HSC textbook chapter structures. Confirm exact chapter names and syllabus coverage for the HSC 2027 cohort against the current official NCTB/education-board guidance before advertising it as a definitive syllabus.
- Only a small set of original sample MCQs is included with worked explanations, plus original CQ practice prompts. Other chapters display a clear "being prepared" notice rather than fabricated questions.
- The Board Questions section is intentionally empty until you add verified past-paper questions with board and year. Do not label generated practice questions as authentic past-board questions.
- This is a static site and needs no server or database. Anyone can view the questions in the source; don't store private information here.

## Add an MCQ
In `questions.js`, find `questions` → subject → paper → exact chapter title. Add an object to the `mcq` array:
```js
{
  "question": "Your question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 1,
  "explanation": "Explain why option B is correct."
}
```
`answer` is zero-based: 0 = first option, 1 = second option, etc.

## Add a CQ
Add a string to that chapter's `cq` array:
```js
"Read the stem and answer (a), (b), (c) and (d) ..."
```

## Add a verified board question
Add an object to `board`:
```js
{"year":"2024","board":"Dhaka Board","question":"Your transcribed question, checked against the original paper."}
```
Check copyright/permission and use official or permitted sources. You can also link to an official paper instead of republishing full text.

## Official reference
NCTB publishes higher-secondary textbook and curriculum information. Start at https://nctb.gov.bd/ and verify the current HSC 2027 syllabus. The public NCTB page for older revised HSC syllabi is https://nctb.gov.bd/site/page/9a90c854-ce5f-4d77-9915-1ecd0953079d/SSC-%26-HSC-Syllabus

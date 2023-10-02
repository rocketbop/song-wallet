const parser = require('./../app/parser.ts')
const fs = require('fs');

describe("Test it", () => {
  it("tests", () => {
    let fixture = fs.readFileSync("./tests/fixtures/greensleeves.txt", 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      return data;
    })
    const expectedHtml = `<div># Greensleeves Sample Song for SongBook<br>{t:Greensleeves}<br>{st:Sample}<br>{key: Em}<br>{sot}<br>E|---|------|-0--1-0-|------|---<br>B|---|-1--3-|-1------|-3--0-|---<br>G|-2-|-2----|-0------|-0----|-0-<br>{eot}<br><span class="chord">[Em]Alas, my </span><span class="chord">G]</span>{soh}love{eoh}, you <span class="chord">D]</span>do me <span class="chord">Bm]</span>wrong,<br><span class="chord">[Em]cast me off disc</span>To <span class="chord">B7]</span>ourteously.<br><span class="chord">[Em]I have </span>For <span class="chord">G]</span>loved you <span class="chord">D]</span>well and <span class="chord">B]</span>long,<br><span class="chord">[Em]ighting </span>Del<span class="chord">B7]</span>in your <span class="chord">Em]</span>company.<br><br>{c:Chorus}<br>{soc}<br><span class="chord">[G]Greensleeves was </span><span class="chord">D]</span>all my joy<br><span class="chord">[Em]Greensleeves was </span><span class="chord">B7]</span>my delight,<br><span class="chord">[G]Greensleeves was my </span><span class="chord">D]</span>heart of gold,<br><span class="chord">[Em]who but my </span>And <span class="chord">B7]</span>lady <span class="chord">E]</span>greensleeves.<br>{eoc}<br><br>Alas, my love, that you should own<br>A heart of wanton vanity,<br>So must I meditate alone<br>Upon your insincerity.<br><br>{c:Chorus}<br><br>Your vows you've broken, like my heart,<br>Oh, why did you so enrapture me?<br>Now I remain in a world apart<br>But my heart remains in captivity.<br><br>{c:Chorus}<br># You can define special chords in a song<br>{define: D 0 X 0 0 2 3 2}<br><br>Many songs like this are available on the Internet.<br>Just search for files with extension pro.<br><br>See www.linkesoft.com/songbook for details.<br><br>{tag: Sample}<br>{time: 2:30}<br><br></div>`
    expect(parser.songproToHtml(fixture)).toBe(expectedHtml)
  })
});

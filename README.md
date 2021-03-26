# kahoot-clone-nodejs

This project is a kahoot clone that uses nodejs and mongodb
Multiple games can be ongoing at one time and works with many players per game

## Instructions

### Local install

- apt install mongodb
- service mongodb start
- export DATABASE_URL=localhost && export DATABASE_PORT=27017
- nodejs server/server.js

### Docker install

- Run Mongodb
```bash
docker run -d -p 27017:27017 mongo:4.2
```
- export DATABASE_URL=localhost && export DATABASE_PORT=27017
- nodejs server/server.js


### Todo

- [ ] Styling
- [ ] HTTPS
- [ ] Domain
- [ ] Host a kahoot somewhere else
- [x] Questions left
- [ ] Use a picture in a question
- [x] Endscore (top 10)
- [x] Example questions
- [ ] Create db and collection
- [ ] current rank during game
- [ ] fancy up the white screens
- [ ] more fancy button on NextQuestion during gameHost
- [ ] increase all font sizes

## Screenshots

<img src="Screenshots/join.png" height="200" width="auto" alt="Player Join"/>
<img src="Screenshots/hostJoin.png" height="200" width="auto" alt="Host Lobby"/>
<img src="Screenshots/player.png" height="200" width="auto" alt="Player"/>
<img src="Screenshots/questionResults.png" height="200" width="auto" alt="Question Results"/>
<img src="Screenshots/hostQuestion.png" height="200" width="auto" alt="Host Question"/>
<img src="Screenshots/incorrect.png" height="200" width="auto" alt="Player Results"/>

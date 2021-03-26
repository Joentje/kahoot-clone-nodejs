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

### Mongodb

- DB: kahootDB
- Collection: kahootGames

With Mongo Express you can import the game

### Todo

- [ ] Styling
- [ ] HTTPS
- [x] Domain
- [x] Host a kahoot somewhere else
- [x] Questions left
- [ ] Use a picture in a question
- [x] Endscore (top 10)
- [x] Example questions
- [x] Create db and collection
- [x] fancy up the white screens
- [x] more fancy button on NextQuestion during gameHost
- [ ] increase all font sizes
- [ ] Multistage build and remove node_modules
- [x] Ranks @player side
- [ ] Create game, somewhere else
- [x] Cancel game button somewhere else
- [ ] Favicon
- [ ] make timer variable at quiz creation
- [ ] Timer, custom timer per question?
- [ ] add credentials to mongo-express
- [ ] cleanup readme
- [ ] refactor HTML/CSS/JS folders
- [ ] Unify styling by Bootstrap

## Screenshots

<img src="Screenshots/join.png" height="200" width="auto" alt="Player Join"/>
<img src="Screenshots/hostJoin.png" height="200" width="auto" alt="Host Lobby"/>
<img src="Screenshots/player.png" height="200" width="auto" alt="Player"/>
<img src="Screenshots/questionResults.png" height="200" width="auto" alt="Question Results"/>
<img src="Screenshots/hostQuestion.png" height="200" width="auto" alt="Host Question"/>
<img src="Screenshots/incorrect.png" height="200" width="auto" alt="Player Results"/>

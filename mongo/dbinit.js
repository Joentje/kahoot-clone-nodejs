let db = connect("localhost:27017/quiznowDB");
//db.auth("some_username", "some_password");
let collections = db.getCollectionNames();
let index;
db.createCollection("quiznowGames");
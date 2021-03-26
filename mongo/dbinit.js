let db = connect("localhost:27017/kahootDB");
//db.auth("some_username", "some_password");
let collections = db.getCollectionNames();
let index;
db.createCollection("kahootGames");
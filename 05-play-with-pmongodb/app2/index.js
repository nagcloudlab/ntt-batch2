const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/db1";
const client = new MongoClient(uri);

async function insertOneTodo() {
  try {
    await client.connect();
    const db = client.db("db1");
    const collection = db.collection("todos");
    await collection.insertOne({
      title: "Learn Node+Mogodb",
      completed: false,
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
// insertOneTodo();

async function findAllTodos() {
  try {
    await client.connect();
    const db = client.db("db1");
    const collection = db.collection("todos");
    const todos = await collection.find({}, {}).toArray();
    todos.forEach((todo) => {
      console.log(todo);
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
findAllTodos();

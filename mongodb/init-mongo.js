db = db.getSiblingDB('mongodb');  // Selecciona la base de datos
 db.sales.insertOne({ name: "Tv", price: 20.5 });
// Crea un usuario con permisos
db.createUser({
  user: "admin",
  pwd: "123",
  roles: [{ role: "readWrite", db: "mongodb" }],
});

// Crea una colección para que la DB realmente exista


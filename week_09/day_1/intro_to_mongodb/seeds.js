use zoo
db.dropDatabase()

db.animals.insertMany([
    {
        name: "Janet",
        type: "Polar Bear"
    },
    {
        name: "Norman",
        type: "Penguin",
        age: 5
    }
])
use zoo

db.animals.findOne({_id: ObjectId('6418813943d38377fb7f9a31')})

db.animals.updateOne(
    {_id: ObjectId('6418813943d38377fb7f9a31')},
    {$set: {name:"Bob"}}
    )
    
db.animals.findOne({_id: ObjectId('6418813943d38377fb7f9a31')})

db.animals.deleteOne({_id: ObjectId('6418813943d38377fb7f9a31')})
const mongo = require('./mongo')
const hpSchema = require('./schemas/hp-schema')
const hpRouter = require('./routes/request')
const express = require('express')
const app = express()
app.use("/hp", hpRouter)
app.use(express.json())

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log("connected")
            let count = 0;
            let array = []
            for (x=0; x<15000; x++){
                const unit = {
                    familyId: `${count}fam`,
                    family: `fam${count}`,
                    subCategoryId: `subID${count}`,
                    subCategory: `${count}subcategory`,
                    category: `${count}category`,
                    categoryId: `catId${count}`,
                    subCategoryObjId: `${count}${count}`,
                    categoryObjId: `${count}${count}${count}`,
                }
                count++
                array.push(unit)
            }
            await hpSchema.insertMany(array)
        } finally {
            mongoose.connection.close()
            console.log("Finished")
        }
    })
}

connectToMongoDB()
const mongo = require('./mongo')
const hpSchema = require('./schemas/hp-schema')

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
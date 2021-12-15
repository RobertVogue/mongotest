const mongoose = require('mongoose');

const hpSchema = mongoose.Schema(
    {
        familyId: String,
        family: String,
        subCategoryId: String,
        subCategory: String,
        category: String,
        categoryId: String,
        subCategoryObjId: Number,
        categoryObjId: Number
    })

module.exports = mongoose.model('aicc-db', hpSchema)
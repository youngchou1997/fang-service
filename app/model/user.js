module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const user = new Schema({
        userName: { 
            type: String,
            validate: function(val) {
                return val.length >= 4;
            }
        },
        password: { 
            type: String,
            validate: function(val) {
                return val.length >= 8;
            }
        },
        like: {
            type: Array
        },
        // 我的顾问
        seller: {
            type: Array
        },
        // 我的推荐
        suggestion: {
            type: Array
        },
        yq: {
            type: Array
        },
        // 我的交易
        trade: {
            type: Array
        }
    }, {
        versionKey: false,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    })
    return mongoose.model('User', user);
}

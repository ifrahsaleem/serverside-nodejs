const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var favdishSchema = new Schema({
  
//     dishId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Dish',
//         unique: true
//     }
// }, {
//     timestamps: true
// });

var favoriteSchema = new Schema({

	dishes:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }],
	user: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
	}
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;
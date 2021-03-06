var Customer = Backbone.Model.extend({
	localStorage: new Backbone.LocalStorage('customers-backbone'),

	defaults: {
		id: null,
		lastName: '',
		firstName: '',
		phone: '',
		address: '',
		postcode: '',
		city: '',
		email: ''
	},

	initialize: function() {
	},

	getFullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

	// validate: function( attrs ) {
		// var errors = [];
		// if ( !attrs.title.length ) errors.push('title');
		// if ( !attrs.price.length ) errors.push('price');
		// if ( !attrs.number.length ) errors.push('number');
// 
		// if ( errors.length ){
			// console.log("champ(s) qui provoque(nt) une erreur : "+errors);
			// return errors;
		// }
	// }
});

var Customers = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage('customers-backbone'),
	model: Customer,
	sort_key: 'id', // default sort key

	initialize : function() {
		console.log('Collection de clients créée');
	},

	comparator: function(item) {
		return item.get(this.sort_key);
	},

	sortByField: function(fieldName) {
		this.sort_key = fieldName;
		this.sort();
	}
});

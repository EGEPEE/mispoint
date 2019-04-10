// Copyright (c) 2019, Kelompok 3 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Transaksi', {
	refresh: function(frm) {
	},

	onload: function(frm) {
		frm.set_value('calculate', 0)
	}
});

// Filter data jika kuantiti = 0
cur_frm.set_query('id_item', 'transaksi', function(){
	return{
		filters: [
			['Master Item', 'quantity_item', '>=', '0']
		]
	}
});
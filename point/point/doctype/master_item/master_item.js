// Copyright (c) 2019, Kelompok 3 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Item', {
	refresh: function(frm) {

	}
});

// Membuat fungsi untuk filter data jika persediaan kosong
cur_frm.set_query('id_item', 'transaksi', () => {
	return {
		filters: [
			['Master Item', 'quantity_item', '!=', 0 ]
		]
	}
})
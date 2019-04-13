// Copyright (c) 2019, Kelompok 3 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Transaksi', {
	refresh: function(frm) {
	}
});

frappe.ui.form.on('Transaksi Line', {
	quantity_item: function(frm, cdt, cdn) {
		var row = locals[cdt][cdn]
		// Menghitung jumlah point yang harus ditukarkan
		frappe.call({
			method: 'frappe.client.get',
			args: {
				doctype: 'Master Item',
				name: row.id_item
			},
			callback: function(data) {
				if (data) {
					// total point yang harus ditukar dan jumlah harga akhir per item
					var jumlah_tukar = data.message.best_point * row.quantity_item
					var harga_akhir = data.message.harga_item * row.quantity_item
					var point_yang_tukar = 0.001 * harga_akhir

					frappe.model.set_value(row.doctype, row.name, 'point_tukar', jumlah_tukar)
					frappe.model.set_value(row.doctype, row.name, 'harga_akhir', harga_akhir)
					frappe.model.set_value(row.doctype, row.name, 'point_peroleh', point_yang_tukar)

					// alert jika stok kurang
					if (row.quantity_item >= data.message.quantity_item) {
						msgprint('Stok tidak mencukupi.')
						frappe.model.set_value(row.doctype, row.name, 'quantity_item', data.message.quantity_item)
					}
				}
				frm.refresh_field()
			}
		})
	},
	claim_point: function(frm, cdt, cdn) {
		var row = locals[cdt][cdn]
		if (row.claim_point == 'Ya' && (frm.doc.point_member >= row.point_tukar)) {
				frappe.confirm(
					'Apakah anda akan menukarkan point?',
					function(){
						frappe.call({
							method: 'point.point.doctype.master_transaksi.master_transaksi.hit_point',
							args: {
								doctype: 'Master Member',
								name: frm.doc.id_member,
								tukarpoint: row.point_tukar
							},
							callback: function(data) {
								if (data) {
									console.log(data)
									frappe.model.set_value(row.doctype, row.name, 'harga_akhir', 0)
									cur_frm.set_value(frm.doc.point_member, data)
								}
							}
						})
					}),
					function(){
						window.close();
					}
		} else {
			msgprint('Point tidak dapat ditukarkan.')
			frappe.model.set_value(row.doctype, row.name, 'claim_point', 'Tidak')
		}
	},
	harga_akhir: function(frm, cdt, cdn) {
		var row = locals[cdt][cdn]
		var total_harga = 0
		var total_point = 0
		frm.doc.transaksi.forEach(function(row) { 
			total_harga += row.harga_akhir
			total_point += row.point_peroleh
		})
		frm.set_value('total_harga', total_harga)
		frm.set_value('calculate', total_point)
		refresh_field()
	},
	transaksi_remove:function(frm, cdt, cdn){
		var row = locals[cdt][cdn]
		var total_harga = 0
		var total_point = 0
		frm.doc.transaksi.forEach(function(row) { 
			total_harga += row.harga_akhir
			total_point += row.point_peroleh
		})
		frm.set_value('total_harga', total_harga)
		frm.set_value('calculate', total_point)
		refresh_field()
	}
});
// Filter data jika kuantiti = 0
cur_frm.set_query('id_item', 'transaksi', function(doc, cdt, cdn){
	return{
		filters: [
  		['Master Item', 'quantity_item', '>=', '0']
		]
	}
});


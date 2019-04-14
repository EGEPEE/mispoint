# -*- coding: utf-8 -*-
# Copyright (c) 2019, Kelompok 3 and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class MasterTransaksi(Document):
	pass

	def validate(self):
		self.change_quantity_item()
		self.change_status_member()

	# Merubah kuantity yang ada di Master Item, setelah submit data
	def change_quantity_item(self):
		if self.transaksi:

			for i in self.transaksi:
				item = frappe.get_doc('Master Item', i.id_item)

				if item.quantity_item != 0:
					item.quantity_item = item.quantity_item - i.quantity_item

				item.save()

	# Mengganti status member jika melebihi point
	def change_status_member(self):
		if self.transaksi:
			member = frappe.get_doc('Master Member', self.id_member)
			point_scale = frappe.get_all('Point Scale', filters={}, fields=['tipe_point', 'min_point'])

			status_awal_level = member.status_level
			point_member = self.calculate + self.point_member
			
			i = 0
			while i < len(point_scale):
				if point_member >= point_scale[i]['min_point']: 
					status_level = point_scale[i]['tipe_point']
				i = i + 1

			if member.status_member == 'Tidak Aktif':
				member.status_member = 'Aktif'

			member.point_member = point_member
			member.status_level = status_level
			member.save()

@frappe.whitelist()
def hit_point(doctype, name, tukarpoint):
	member = frappe.get_doc(doctype, name)
	point_member = float(member.point_member) - float(tukarpoint)

	member.point_member = point_member
	member.save()

	return point_member

			

			
			

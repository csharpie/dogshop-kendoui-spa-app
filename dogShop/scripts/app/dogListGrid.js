$("div#dogListGrid").kendoGrid({
	dataSource: new kendo.data.DataSource({
		transport: {
			read: {
				url: "http://localhost/DogShop/api/Dog",
				dataType: "json"
			}
		},
		schema: {
			model: {
				id: "Id"
			}
		}
	})
});
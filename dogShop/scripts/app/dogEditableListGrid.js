$("div#dogEditableListGrid").kendoGrid({
	dataSource: new kendo.data.DataSource({
		type: "json",
		transport: {
			read: {
				url: "http://localhost/DogShop/api/Dog",
				dataType: "json",
				type: "GET"
			},
			update: {
				url: function(dog) {
					return "http://localhost/DogShop/api/Dog/" + dog.Id;
				},
				dataType: "json",
				type: "PUT"
			},
			create: {
				url: "http://localhost/DogShop/api/Dog",
				dataType: "json",
				type: "POST"
			},
			destroy: {
				url: function(dog) {
					return "http://localhost/DogShop/api/Dog/" + dog.Id;
				},
				dataType: "json",
				type: "DELETE"
			},
			parameterMap: function(data, type) {
      			if (type === "create") {
      				data.Id = 0;
      				return data;
      			} else if (type === "update") {
      				return data;
      			}
      		}
		},
		schema: {
			model: {
				id: "Id",
				fields: {
					Name: { type: "string" },
					Breed: { type: "string" },
					IsVaccinated: { type: "boolean" }
				}
			}
		},
	}),
	columns: [
		"Name",
		"Breed",
		{ 
			field: "IsVaccinated", 
			title: "Is Vaccinated", 
			template: "<input type='checkbox' disabled='disabled' data-bind='checked: IsVaccinated' #= IsVaccinated ? checked='checked' : '' #/>" 
		},
		{
			command: [{ 
				name: "edit",
				text: {
					update: "Save"
				}, 
			},
				"destroy"
			]
		}
	],
	editable: {
		mode: "popup",
		window: {
			title: function() {
				return event.target.text;
			}
		}
	},
	toolbar: [
		{ name: "create", text: "Add" }
	]
});
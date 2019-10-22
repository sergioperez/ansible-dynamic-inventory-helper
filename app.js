const express = require('express')
const app = express()
const port = 3000

// This is being used as a demo to avoid having the complexity of a real database in this small example
const db_inventory = { "databases" : ["dbnode0.mycorp.com", "dbnode1.mycorp.com"], "web_servers": ["web0.mycorp.com", "web1.mycorp.com"]}

// GET method route
app.get('/', function (req, res) {
	// TODO: Add an argument, so it is possible to query using a group name
  res.send(get_node_group("web_servers"))
})

function get_node_group(group) {
	// This function would perform a query to the hosts database
	if(group == 'all') {
		return db_inventory
	}
	else {
		inventory = {}
		inventory[group] = db_inventory[group]
		return inventory
	}
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

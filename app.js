const express = require('express')
const app = express()
const port = 3000

// This is being used as a demo to avoid having the complexity of a real database in this small example
const db_inventory = { "databases" : ["dbnode0.mycorp.com", "dbnode1.mycorp.com"], "web_servers": ["web0.mycorp.com", "web1.mycorp.com"]}

// GET method route
app.get('/', function (req, res) {
	// TODO: Add an argument, so it is possible to query using a group name
	groups = ["all"]
  res.send(get_node_groups(groups))
})

app.get('/groups', function (req, res) {
	// TODO: Add an argument, so it is possible to query using a group name
	groups = req.query.names.split(",")
  res.send(get_node_groups(groups))
})

function get_node_groups(groups) {
	// This function would perform a query to the hosts database
	if(groups.includes("all")) {
    console.log(groups)
		return db_inventory
	}
	else {
    inventory = {}
    groups.forEach((group) => {
      inventory[group] = db_inventory[group]
    })
		return inventory
	}
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

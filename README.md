# What is this about?

This is a demo to show how a centralized dynamic inventory could be used in Ansible

In some cases, there are dynamic inventories which are querying directly to a MariaDB database.

This shows that this could be avoided implementing the complexity of querying the database on a microservice like this one, limiting the dynamic inventory used from Ansible Tower to converting the format of the JSON given by the microservice to the required one for Ansible inventories, or even just performing a curl if this project is modified properly.

# How can I use it?

Execute it:

```bash
npm start
```

Test the output:

```bash
curl localhost:3000
```

Now, edit it to make it retrieve your hosts instead of the demo hosts. Using PostgreSQL, MariaDB, or whatever you would like to use :)

# Testing the inventory

To test the behaviour of the inventory, run the microservice and list the hosts with the demo inventory script ansible\_inventory.sh

```bash
ansible-inventory --list -i inventory_all_hosts.sh 
```

There are more examples, showing how this supports querying for several hosts

```bash
ansible-inventory --list -i inventory_web_servers.sh 
```
```bash
ansible-inventory --list -i inventory_two_groups.sh
```

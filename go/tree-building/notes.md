* The records only contain an ID number and a parent ID number.
    * The above is implicit

## Record validation
* Check that a root node exists
* Above check should cover duplicate root nodes
* Check that the root node has no parent
* Check for duplicate nodes (ensure the check applies to root nodes)
* Check that record ids are 'continuous'
    * "The ID number is always between 0 (inclusive) and the length of the record list (exclusive)."
    * Check for gaps in the sequence of IDs
* Check that all records have a parent ID lower than their own ID
    * Except for the root record, which has a parent ID that's equal to its own ID.
    * This check should eliminiate direct cycles, as a direct cycle will exists when a node has a parent equal to itself
    * This check should also cover indirect cycles?

## Constructing the tree

* For each non root node:
    * Create a new node with ID equal to the record ID
    * Add the child node to Children of the parent node

## Constructing the tree (stolen example)

create an empty map of ints to pointers to Node

for each record in records

* 

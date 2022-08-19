package tree

import (
	"fmt"
	"reflect"
	"sort"
)

type Record struct {
	ID     int
	Parent int
	// feel free to add fields as you see fit
}

type Node struct {
	ID       int
	Children []*Node
	// feel free to add fields as you see fit
}

// Build receives a slice of records and returns
// a structure of nodes representing a tree
func Build(records []Record) (*Node, error) {
	nodes := &Node{}
	rootCount := 0

	if len(records) == 0 {
		return nil, nil
	}

	// Verify each record for validity
	for _, record := range records {

		// Resolve root node cases
		if record.ID == 0 {
			switch {
			case record.Parent != 0:
				{
					return nil, fmt.Errorf("root node has parent")
				}
			case rootCount > 1:
				{
					return nil, fmt.Errorf("multiple root nodes")
				}
			default:
				{
					rootCount++
					continue
				}
			}
		}

		switch {
		case record.Parent >= record.ID:
			{
				return nil, fmt.Errorf("parent ID is greater than or equal to record ID")
			}
		case record.ID > len(records)-1:
			{
				return nil, fmt.Errorf("record ids are not continuous")
			}
		}
	}

	// Looped through all records. Must have a root node by now
	if rootCount < 1 {
		return nil, fmt.Errorf("missing a root node")
	}

	// https://stackoverflow.com/questions/64158699/how-do-i-remove-duplicates-from-a-struct-slice

	// Create a slice of unique records from our records
	m := map[Record]struct{}{}
	dupelessRecords := []Record{}
	for _, record := range records {
		if _, ok := m[record]; !ok {
			dupelessRecords = append(dupelessRecords, record)
			m[record] = struct{}{}
		}
	}
	// Check that our map only contains unique records

	if !reflect.DeepEqual(records, dupelessRecords) {
		return nil, fmt.Errorf("sample contains duplicate records")
	}

	// We can now assume valid record inputs

	if len(records) == 1 {
		return nodes, nil
	}

	// Sort our records slice

	sort.Slice(records, func(i, j int) bool { return records[i].ID < records[j].ID })

	idsToRecords := map[int]*Node{}

	for index, record := range records {

		idsToRecords[record.ID] = &Node{ID: record.ID}

		if index > 0 {
			parentNode := idsToRecords[record.Parent]
			parentNode.Children = append(parentNode.Children, idsToRecords[record.ID])
		}
	}

	return idsToRecords[0], nil
}

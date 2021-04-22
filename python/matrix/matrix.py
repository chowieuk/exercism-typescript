ex1 = "1 2 3 4\n5 6 7 8\n9 8 7 6"

"""
1 2 3 4
5 6 7 8
9 8 7 6
"""

"""
your code should be able to spit out:

- A list of the rows, reading each row left-to-right while moving
  top-to-bottom across the rows,
  
- A list of the columns, reading each column top-to-bottom while moving
  from left-to-right.
"""

# so we should be able to use list comprehension and split to get the rows
# we could be sneaky and do a matrix multiplication or something and use the same methods as row?
# a 90 degree rotation... would only work for squares?

class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = matrix_string

        raw_rows = matrix_string.splitlines()
        # rows = []
        # for row in raw_rows:
        #   row = [int(item) for item in row.split()]
        #   rows.append(row)

        rows = [[int(item) for item in row.split()] for row in raw_rows]
        self.rows = rows

        columns = [list(item) for item in zip(*rows)]
   
        self.columns = columns
        pass

    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return self.columns[index - 1]

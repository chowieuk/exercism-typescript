class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = matrix_string

        raw_rows = matrix_string.splitlines()
        rows = [[int(item) for item in row.split()] for row in raw_rows]

        self.rows = rows
        self.columns = [list(item) for item in zip(*rows)]
        pass

    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return self.columns[index - 1]

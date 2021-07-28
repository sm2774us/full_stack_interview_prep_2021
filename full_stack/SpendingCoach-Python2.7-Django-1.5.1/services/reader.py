import pandas


class IReader(object):

    HEADER = ['DATE', 'DESCRIPTION', 'AMOUNT', 'IS_EXPENSE']

    def get(self):
        pass


class CsvReader(IReader):

    INPUT_HEADER = ['DATE', 'DESCRIPTION', 'AMOUNT']

    def __init__(self, filename):
        self.parsed_data_frame = pandas.DataFrame(columns=self.HEADER)
        self.parsed_data_frame.fillna(0)

        self.data_frame = pandas.read_csv(filename)
        self.data_frame.columns = self.INPUT_HEADER

        for index, row in self.data_frame.iterrows():
            if row['AMOUNT'] < 0:
                is_expense = True
            else:
                is_expense = False

            self.data_frame.loc[index, 'IS_EXPENSE'] = is_expense
            self.data_frame.loc[index, 'AMOUNT'] = abs(row['AMOUNT'])

    def get(self):
        return self.data_frame

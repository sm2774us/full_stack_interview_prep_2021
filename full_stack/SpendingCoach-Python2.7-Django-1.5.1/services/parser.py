from services.rules import KeywordRule, RegexRule


class Parser(object):

    def __init__(self, reader):
        self.reader = reader
        self.rules = [
            KeywordRule('ATM', ['CASH', 'WITHDRAW']),
            KeywordRule('Food', [
                'Tesco', 'Sainsbury', 'Asda', 'Lidl', 'Waitrose',
                'Morrisons', 'Ocado', 'Iceland', 'Marks&Spencer',
                'Aldi']),
            KeywordRule('Utilities', [
                'H3G', 'Virgin', 'O2', 'giffgaff', 'vodafone',
                'british gas', 'edf energy', 'talktalk', 'sky',
                'thameswater']),
            KeywordRule('Transport', [
                'LUL', 'trainline', 'national rail']),
            KeywordRule('Health', [
                'superdrug', 'boots', 'bupa', 'gmc', 'axa', 'allianz',
                'dentist', 'consult']),
            KeywordRule('Leisure', [
                'Spotify', 'Starbucks', 'Eat', 'Pret', 'Pure',
                'Costa', 'Wagamama', 'jamie', 'KFC', 'mcdonalds',
                'egg', 'fabric', 'koko', 'netflix', 'zing zing',
                'chapel', 'pizza', 'amazon', 'paypal', 'holloway',
                'tate', 'museum', 'royal academy']),
            KeywordRule('Clothes', [
                'Primark', 'Gap', 'Zara', 'Asos', 'H&M', 'monsoon']),
            KeywordRule('Transfer', [
                'trans']),
            RegexRule('Check', r'^\d{6}$')
        ]

    def convert(self, data_frame):
        info = []
        for index, row in data_frame.iterrows():
            info.append(self.convert_row(row))
        return info

    def convert_row(self, row):
        return {
            'date': row['DATE'],
            'description': row['DESCRIPTION'],
            'amount': row['AMOUNT'],
            'is_expense': row['IS_EXPENSE'],
            'category': self.get_category(row['DESCRIPTION'])
        }

    def get_category(self, description):
        for rule in self.rules:
            if rule.check_rule(description):
                return rule.category
        return 'Other'

    def parse(self):
        data_frame = self.reader.get()
        return self.convert(data_frame)

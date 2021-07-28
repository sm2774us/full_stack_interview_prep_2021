import re


class IRule(object):

    def __init__(self, category):
        self.category = category

    def check_rule(self, description):
        pass


class KeywordRule(IRule):

    def __init__(self, category, keywords):
        super(KeywordRule, self).__init__(category)
        self.keywords = keywords

    def check_rule(self, description):
        for keyword in self.keywords:
            if description.lower().find(keyword.lower()) != -1:
                return True
        return False


class RegexRule(IRule):

    def __init__(self, category, regex):
        super(RegexRule, self).__init__(category)
        self.regex = re.compile(regex)

    def check_rule(self, description):
        return self.regex.match(description)

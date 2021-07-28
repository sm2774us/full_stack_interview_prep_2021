from django.template.response import TemplateResponse
import pprint 

from services.parser import Parser
from services.reader import CsvReader

def index(request):
    
    reader = CsvReader('SpendingCoach/sample.csv')
    parser = Parser(reader)
    
    

    # for index, data in parser:
    #    results.append({})
    pprint.PrettyPrinter()
    pprint.pprint(parser.parse())

    income = 0.00
    expense = 0.00
    
    for p in parser.parse():
        if p['is_expense'] is True:
            expense += float(p['amount'])
        else:
            income += float(p['amount'])

    result = {
        "income" : income,
        "expense" : expense
    }
    
    return TemplateResponse(request,  "dashboard.html", result)
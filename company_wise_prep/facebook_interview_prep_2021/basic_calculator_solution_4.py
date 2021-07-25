from functools import cmp_to_key
from typing import List

class Exp:
    # The class of Expression, has a field of coefficient and list of variables
    def __init__(self):
        self.coef = 0
        self.vars = []

    def getVal(self):
        # Get the string representation of this expression
        if not self.coef:
            return ""
        if not self.vars:
            return str(self.coef)
        return str(self.coef) + "*" + "*".join(self.vars)
        
def multiply(exp1, exp2):
    # Multiply 2 expressions, return a new Exp object with variables in sorted order.
    ret = Exp()
    ret.coef = exp1.coef * exp2.coef
    if ret.coef == 0:
        return ret
    ret.vars = list(sorted(exp1.vars + exp2.vars))
    return ret


def mergeExp(stack, signs, exp):
    # merge this single exp with last group of exps.
    sign = signs[-1][-1]
    if sign == "+":
        # If last op is +, no need to merge
        stack[-1].append([exp])
    elif sign == "-":
        # Same as +, but here we need to reverse the sign
        exp.coef = - exp.coef
        stack[-1].append([exp])
    else:
        # merge last group of exps with this single exp.
        last = stack[-1][-1]
        temp = []
        for prev in last:
            temp.append(multiply(prev, exp))
        stack[-1][-1] = temp
    # pop the used operator.
    signs[-1].pop()

def mergeGroup(stack, signs, group):
    # Merge this group of exps with last group of exps, happens when we strip a pair of parenthesis
    sign = signs[-1][-1]
    if sign == "+":
        # If op is +, simply add this new group to previous level.
        stack[-1].append(group)    
    elif sign == "-":
        # If op is -, similar to +, but reverse the sign of all exps
        temp = []
        for exp in group:
            exp.coef = -exp.coef
            temp.append(exp)   
        stack[-1].append(temp)
    else:
        # If op is *, merge all exps of last group with that of this group
        last = stack[-1].pop()
        temp = []
        for exp1 in last:
            for exp2 in group:
                temp.append(multiply(exp1, exp2))
        stack[-1].append(temp)
    # Same, pop the used operator
    signs[-1].pop()

def compare(c, d):
    # cmp helper. Use it when we compare 2 keys by the number of vars and its lexicographical order.
    a, b = c.split("*"), d.split("*")
    if len(a) != len(b):
        return len(b) - len(a)
    return 1 if a > b else -1

def getSum(curLevel):
    # Get the sum of current level of exps, Merge all exps with same vars and those with only digits
    exps = {"":0}
    # Merge this level to the dic
    for groups in curLevel:
        for exp in groups:
            if not exp.vars:
                exps[""] += exp.coef
            else:
                key = "*".join(exp.vars)
                if key not in exps:
                    exps[key] = exp
                else:
                    exps[key].coef += exp.coef
    # Sort the result by the number of elements and their lexicographical order, 
    # and filter the pure digits and the vars that got eliminated.
    ret = [exps[key] for key in sorted(exps.keys(), key=cmp_to_key(compare)) if key != "" and exps[key].coef]
    # Add the pure nums in the end
    if exps[""] != 0:
        temp = Exp()
        temp.coef = exps[""]
        ret.append(temp)
    return ret

    
def calculate(s, a, b):
    # Same as basic calculator 1,2,3,4
    stack, signs = [[]], [["+"]]
    i, n = 0, len(s)
    # Set up a dic for substitution
    dic = {x:y for x, y in zip(a, b)}
    while i < n:
        if s[i] == " ":
            i += 1
            continue
        # read and Merge the vars
        if s[i].isalpha():
            exp = Exp()
            temp = s[i]
            while i+1 < n and s[i+1].isalpha():
                temp += s[i+1]
                i += 1
            if temp in dic:
                exp.coef = dic[temp]
            else:
                exp.coef = 1
                exp.vars = [temp]
            mergeExp(stack, signs, exp)
        # read and merge the nums
        elif s[i].isdigit():
            exp = Exp()
            num = int(s[i])
            while i+1 < n and s[i+1].isdigit():
                num = num * 10 + int(s[i+1])
                i += 1
            exp.coef = num
            mergeExp(stack, signs, exp)
        # record the ops
        elif s[i] in "+-*":
            signs[-1].append(s[i])
        # Add a new level
        elif s[i] == "(":
            stack.append([])
            signs.append(["+"])
        # Remove this level and merge it to previous level
        elif s[i] == ")":
            curLevel = getSum(stack.pop())
            signs.pop()
            mergeGroup(stack, signs, curLevel)
        i += 1
    # Get the summary of the basic level eventually
    res = getSum(stack.pop())
    return [exp.getVal() for exp in res]

class Solution:
    def basicCalculatorIV(self, expression: str, evalvars: List[str], evalints: List[int]) -> List[str]:
        return calculate(expression, evalvars, evalints)

if __name__ == "__main__":
    # Basic Calculator - IV
    # Test Cases:
    # Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
    # Output: ["-1*a","14"]
    solution = Solution() 
    assert ["-1*a","14"] == solution.basicCalculatorIV(expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1])
    print(solution.basicCalculatorIV(expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]))

    # Input: expression = "e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12]
    # Output: ["-1*pressure","5"]
    assert ["-1*pressure","5"] == solution.basicCalculatorIV(expression = "e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12])
    print(solution.basicCalculatorIV(expression = "e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12]))

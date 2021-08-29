# Basic Calculator Mega-Post

---

## Basic Calculator I

Implement a basic calculator to evaluate a simple expression string.
The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces.

```
Examples:

Input: "1 + 1"
Return: 2

Input: " 2-1 + 2 "
Output: 3

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

At first glance, we see that things in the **parentheses should be on higher priority**. So the first thing came up in my mind was to use a **stack**.
  1. calculate the numbers on the same level
  2. when we see a `(`, put the intermediate result into the stack, and start new calculation right after this `(`
  3. when we see a `)`, pop the add/minus the result with the last item in the stack


```python
class Solution(object):
    def calculate(self, s):
        """
        :type s: str
        :rtype: int
	its actually the simplied version of lc772, just without * and /
    	Time	O(n*h)
	Space   O(n + h) the recursion tree
    	4496 ms, faster than 5.01%
        """
        arr = []
        for c in s:
            arr.append(c)
        return self.helper(arr)

    def helper(self, arr):
        stack = []
        sign = '+'
        num = 0
        while len(arr) > 0:
            c = arr.pop(0)
            if c.isdigit():
                num = num*10 + int(c)
            if c == '(':
                num = self.helper(arr)
            if c == '+' or c == '-' or c == ')' or len(arr) == 0:
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                sign = c
                num = 0
                if c == ')':
                    break
        return sum(stack)

class Solution(object):
    def calculate(self, s):
        """
        :type s: str
        :rtype: int
        
        Time	O(n)
	Space O(n)
        136 ms, faster than 67.45%
        """
        res = 0
        stack = []
        # 1 means positive, -1 means negative
        # we declare it as an integer because we want to put the +- in the stack too
        sign = 1
        num = 0
        i = 0
        while i < len(s):
            if s[i].isdigit():
                # construct a multi-digits number if any, e.g. "23" = 2*10+3 = 23
                j = i
                num = 0
                while j < len(s) and s[j].isdigit():
                    num = num*10 + int(s[j])
                    j += 1
                # sum up the intermediate result
                res += sign * num
                i = j
            elif s[i] == '+':
                # the next number will be using +
                sign = 1
                i += 1
            elif s[i] == '-':
                # the next number will be using -
                sign = -1
                i += 1
            elif s[i] == '(':
                # put the intermediate result(from the front) and sign into the stack
                stack.append(res)
                stack.append(sign)
                # since we have put the intermediate result in stack,
                # we can reset the things for calculation starting from this (
                res = 0
                sign = 1
                i += 1
            elif s[i] == ')':
                # last item is the sign we saved for calculation e.g. 1+(2+3) the 1st +
                sign = stack.pop()
                # previousLevelResult the intermediate result before this level, (xxx)
                previousLevelResult = stack.pop()
                # sign*res is the result within the current (xxx)
                res = previousLevelResult + sign * res
                i += 1
            else:
                i += 1
        return res
```

---

The **time complexity of it is `O(n)`** because we just need to run it once, and **the space complexity of it is `O(n)`** because the load in the stack is proportional in length of the input.

Let’s dive into a follow-up question

> ___what if we need to calculate `+-*/` as well?___
>

It is actually a pretty hard question. **Before we do that, let’s try to implement the calculator having the 4 basic operators**, `+-*/`, which is…

---

## Basic Calculator II

The expression string contains only **non-negative integers**, `+`, `-`, `*`, `/` operators and empty spaces. The integer division should truncate toward zero.

```
Examples:

Input: "3+2*2" 
Return 7

Input: " 3/2 " 
Return 1

Input: " 3+5 / 2 " 
return: 5
```

Similar to `Basic Calculator I`, we need to prioritize the calculations if there are */ , therefore we can use a **stack** again for the question. **But this time, we don’t save any operators in the stack**. Instead, we can use a variable to store the last operator, and once we meet a number after an operator, we can just operate the current number with the last operator.

**The approach would be like:**

  1. init 1 stack
  2. init 1 buffer for number(cos it might have more than one digit)
  3. init 1 buffer for the last operator
  4. if the current character is an operator, i) operate the current number with the previous operator, ii) put the result into the stack, iii) set the current character as the next operator
  5. sum up all the numbers in the stack to get the result

```python
class Solution(object):
    def calculate(self, s):
        """
        Time    O(2n)
        Space   O(n) the stack
        152 ms, faster than 51.65%
        """
        stack = []
        sign = '+'
        num = 0
        for i in range(len(s)):
            c = s[i]
            if c.isdigit():
                num = num*10+int(c)
            if i + 1 == len(s) or (c == '+' or c == '-' or c == '*' or c == '/'):
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack[-1] = stack[-1]*num
                elif sign == '/':
                    stack[-1] = int(stack[-1]/float(num))
                sign = c
                num = 0
        # O(n) as we iterate the stack to sum
        return sum(stack)
```

The **time complexity of it is `O(2n)`** because at the end of the day, we need to iterate through the stack to sum up all the numbers. Again, the **space complexity of it is O(n)** because the load in the stack is proportional in length of the input.

> ___OK, Let’s see what if we need `(` and `)` as well.___
>

---

## Basic Calculator III

The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators, open `(` and closing parentheses `)` and empty spaces.

```
Examples:

Input: "1 + 1" 
Return: 2

Input: " 6-4 / 2 " 
Return: 4

Input: "2*(5+5*2)/3+(6/2+8)" 
Return: 21

Input: "(2+6* 3+5- (3*14/7+2)*5)+3" 
Return: -12
```

At my first glance, I guess it is possible to do recursion when we meet a `(` for the next block `(........)` , we just need to find the corresponding closing parenthesis then we can do our recursion.

```python
class Solution(object):
    def calculate(self, s):
        """
        Time    O(n^2) because we have to find the correspondign closing parenthesis for recursion
        Space   O(n)
        204 ms, faster than 7.41%
        """
        if len(s) == 0:
            return 0
        stack = []
        sign = '+'
        num = 0
        i = 0
        while i < len(s):
            c = s[i]
            if c.isdigit():
                num = num*10+int(c)

            if c == '(':
                # find the corresponding ")"
                pCnt = 0
                end = 0
                clone = s[i:]
                while end < len(clone):
                    if clone[end] == '(':
                        pCnt += 1
                    elif clone[end] == ')':
                        pCnt -= 1
                        if pCnt == 0:
                            break
                    end += 1
                # do recursion to calculate the sum within the next (...)
                num = self.calculate(s[i+1:i+end])
                i += end

            if i + 1 == len(s) or (c == '+' or c == '-' or c == '*' or c == '/'):
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack[-1] = stack[-1]*num
                elif sign == '/':
                    stack[-1] = int(stack[-1]/float(num))
                sign = c
                num = 0
            i += 1

        return sum(stack)
```

---

**However**, it merely beats ~7% submissions. We can apparently make it better. So now, why does it run so slow?

The **suspicious** part is that when we meet a ( , we iterate through the upcoming string to find the corresponding closing parenthesis. It means that every time we meet a ( , it takes O(n) time to find the closing parenthesis. Therefore, the overall time complexity is **O(n²)**.

So…how can we do better? **can we do recursion without knowing the closing parenthesis…?**

**Actually, yes**. When we meet a `(` , we can `break` and return the sum within this parentheses back to its parent who invoked this recursion. Then it, overall, just needs to iterate the string once, therefore it just takes **linear time O(n) and uses linear space O(n)**.


```python
class Solution(object):

    def calculate(self, s):
        """
        Time    O(n)
        Space   O(n)
        80 ms, faster than 22.22%
        """
        arr = []
        for c in s:
            arr.append(c)
        return self.helper(arr)

    def helper(self, s):
        if len(s) == 0:
            return 0
        stack = []
        sign = '+'
        num = 0
        while len(s) > 0:
            c = s.pop(0)
            if c.isdigit():
                num = num*10+int(c)
            if c == '(':
                # do recursion to calculate the sum within the next (...)
                num = self.helper(s)
            if len(s) == 0 or (c == '+' or c == '-' or c == '*' or c == '/' or c == ')'):
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack[-1] = stack[-1]*num
                elif sign == '/':
                    stack[-1] = int(stack[-1]/float(num))
                sign = c
                num = 0
                if sign == ')':
                    break
        return sum(stack)
```

---

## Basic Calculator IV


Given an expression such as expression = `"e + 8 - a + 5"` and an evaluation map such as `{"e": 1}` (given in terms of `evalvars = ["e"]` and `evalints = [1]`), return a list of tokens representing the simplified expression, such as `["-1*a","14"]`

  * An expression alternates chunks and symbols, with a space separating each chunk and symbol.
  * A chunk is either an expression in parentheses, a variable, or a non-negative integer.
  * A variable is a string of lowercase letters (not including digits.) Note that variables can be multiple letters, and note that variables never have a leading coefficient or unary operator like "2x" or "-x".

Expressions are evaluated in the usual order: brackets first, then multiplication, then addition and subtraction.

  * For example, expression = "1 + 2 * 3" has an answer of ["7"].

The format of the output is as follows:

  * For each term of free variables with a non-zero coefficient, we write the free variables within a term in sorted order lexicographically.
    * For example, we would never write a term like `"b*a*c"`, only `"a*b*c"`.
  * Terms have degrees equal to the number of free variables being multiplied, counting multiplicity. We write the largest degree terms of our answer first, breaking ties by lexicographic order ignoring the leading coefficient of the term.
    * For example, `"a*a*b*c"` has degree `4`.
  * The leading coefficient of the term is placed directly to the left with an asterisk separating it from the variables (if they exist.) A leading coefficient of `1` is still printed.
  * An example of a well-formatted answer is `["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"]`.
  * Terms (including constant terms) with coefficient `0` are not included.
    * For example, an expression of `"0"` has an output of `[]`.

```
Example 1:

Input: expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
Output: ["-1*a","14"]

Example 2:

Input: expression = "e - 8 + temperature - pressure", evalvars = ["e", "temperature"], evalints = [1, 12]
Output: ["-1*pressure","5"]

Example 3:

Input: expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
Output: ["1*e*e","-64"]

Example 4:

Input: expression = "a * b * c + b * a * c * 4", evalvars = [], evalints = []
Output: ["5*a*b*c"]

Example 5:

Input: expression = "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))", evalvars = [], evalints = []
Output: ["-1*a*a*b*b","2*a*a*b*c","-1*a*a*c*c","1*a*b*b*b","-1*a*b*b*c","-1*a*b*c*c","1*a*c*c*c","-1*b*b*b*c","2*b*b*c*c","-1*b*c*c*c","2*a*a*b","-2*a*a*c","-2*a*b*b","2*a*c*c","1*b*b*b","-1*b*b*c","1*b*c*c","-1*c*c*c","-1*a*a","1*a*b","1*a*c","-1*b*c"]
```

**Constraints:**

  * `1 <= expression.length <= 250`
  * `expression` consists of lowercase English letters, digits, `'+'`, `'-'`, `'*'`, `'('`, `')'`, `' '`.
  * `expression` does not contain any leading or trailing spaces.
  * All the tokens in `expression` are separated by a single space.
  * `0 <= evalvars.length <= 100`
  * `1 <= evalvars[i].length <= 20`
  * `evalvars[i]` consists of lowercase English letters.
  * `evalints.length == evalvars.length`
  * `-100 <= evalints[i] <= 100`
  
```python
class Term:
    """ represent a term, e.g. 8 * a * b, in this situation,
        number = 8, vars = ['a', 'b'] """

    def __init__(self, vars=[], number=1):
        self.number = number
        self.vars = vars
        pass

    def __mul__(self, ot):
        d = self.number * ot.number
        vs = self.vars + ot.vars
        vs.sort()
        return Term(vs, d)

    def __add__(self, ot):
        assert self.vars == ot.vars
        return Term(self.vars, self.number + ot.number)

    def __neg__(self):
        return Term(self.vars, -self.number)

    def __repr__(self):
        vars = [str(self.number)] + self.vars
        return "*".join(vars)


class Terms:
    """ represent many terms, e.g. 8 * a * b - 7 * b, in this situation,
        terms = [
            Term(number=8, vars=['a', 'b']),
            Term(number=-7, vars=['b']),
        ]
    """

    def __init__(self, ts=None):
        """ terms: list of Term object"""
        self.terms = ts if ts else []

    def __add__(self, ots):
        new_ts = Terms(self.terms + ots.terms)
        return new_ts.normalize()

    def __sub__(self, ots):
        return self + (-ots)

    def __mul__(self, ots):
        new_ts = Terms([t1 * t2 for t1 in self.terms for t2 in ots.terms])
        return new_ts.normalize()

    def __neg__(self):
        return Terms([-t for t in self.terms])

    def normalize(self):
        """ normalize, turn '3*a + b - a' to '2*a + b'  """
        ts = self.terms[:]
        ts.sort(key=lambda t: (-len(t.vars), t.vars))
        prev = None
        ret = []
        for i in range(0, len(ts)):
            current = ts[i]
            if prev is not None:
                if prev.vars == current.vars:
                    prev = prev + current
                else:
                    if prev.number != 0:
                        # check number, dont put '0*xx' in ret
                        ret.append(prev)
                    prev = current
            else:
                prev = current
        if prev and prev.number != 0:
            ret.append(prev)
        return Terms(ret)

    def __repr__(self):
        return str(self.terms)

    def to_str_list(self):
        return [str(t) for t in self.terms]


def get_tokens(s):
    """ get_tokens("ee + 88 - aa + 55") => ["ee", "+", 88, "-", "aa", "+", 55] """
    tokens = []
    word = ""
    value = None
    for x in s:
        if x in "()+-* ":
            if value is not None:
                tokens.append(value)
                value = None
            if word:
                tokens.append(word)
                word = ""
            if x != " ":
                tokens.append(x)
        elif word:
            word += x
        elif value is not None:
            value = value * 10 + int(x)
        elif x.isdigit():
            value = int(x)
        else:
            word = x
    if value is not None:
        tokens.append(value)
    if word:
        tokens.append(word)
    return tokens


def solve(expression, evalvars, evalints):
    intvars = {v: i for v, i in zip(evalvars, evalints)}
    tokens = get_tokens(expression)
    # make a stack, each time we call stack.pop(), we get a token, from left to right
    tokens = list(reversed(tokens))

    # operators priority
    priority = {"+": 1, "-": 1, "*": 2}

    def _solve():
        """ return a Terms object """
        # use two stacks to resolve the operators priority problem
        # list of Terms
        data = []
        # list of operators: '+' '-' '*'
        ops = []

        def handle_new_op(new_op_priority):
            while ops and priority[ops[-1]] >= new_op_priority:
                b = data.pop()
                a = data.pop()
                op = ops.pop()
                if op == "*":
                    c = a * b
                elif op == "+":
                    c = a + b
                elif op == "-":
                    c = a - b
                data.append(c)
            pass

        while tokens:
            x = tokens.pop()
            if x == "(":
                # start a subroutine for '(xx)'
                data.append(_solve())
            elif x == ")":
                # finish current routine
                break
            elif isinstance(x, int):
                # if x is 0, we get Terms([])
                data.append(Terms([Term(number=x)] if x else []))
            elif x in "+-*":
                handle_new_op(priority[x])
                ops.append(x)
            else:
                # x is a variable, e.g. 'a'
                if x in intvars:
                    x = intvars[x]
                    data.append(Terms([Term(number=x)] if x else []))
                else:
                    data.append(Terms([Term(vars=[x])]))
            pass
        handle_new_op(-1)
        assert not ops
        assert len(data) == 1
        return data[0]

    ret = _solve()
    return ret.to_str_list()

class Solution:
    def basicCalculatorIV(
        self, expression: str, evalvars: List[str], evalints: List[int]
    ) -> List[str]:
        return solve(expression, evalvars, evalints)

def test():
    assert get_tokens("ee + 88 - aa + 55") == ["ee", "+", 88, "-", "aa", "+", 55]

    assert solve('0', [], []) == []
    assert solve(expression="e + 8 - a + 5", evalvars=["e"], evalints=[1]) == [
        "-1*a",
        "14",
    ]
    assert solve(expression="(e + 8) * (e - 8)", evalvars=[], evalints=[]) == [
        "1*e*e",
        "-64",
    ]
    assert solve(expression="7 - 7", evalvars=[], evalints=[]) == []
    assert solve("a * b * c + b * a * c * 4", evalvars=[], evalints=[]) == ["5*a*b*c"]
    assert solve(
        "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
        evalvars=[],
        evalints=[],
    ) == [
        "-1*a*a*b*b",
        "2*a*a*b*c",
        "-1*a*a*c*c",
        "1*a*b*b*b",
        "-1*a*b*b*c",
        "-1*a*b*c*c",
        "1*a*c*c*c",
        "-1*b*b*b*c",
        "2*b*b*c*c",
        "-1*b*c*c*c",
        "2*a*a*b",
        "-2*a*a*c",
        "-2*a*b*b",
        "2*a*c*c",
        "1*b*b*b",
        "-1*b*b*c",
        "1*b*c*c",
        "-1*c*c*c",
        "-1*a*a",
        "1*a*b",
        "1*a*c",
        "-1*b*c",
    ]
    pass

if __name__ == __main__:
    test()   
```

___More succinct solution:___


```python
class ExpressTreeNode:
	def __init__(self, base, symbol):
		self.val, self.symbol, self.left, self.right = self.__get_value(base, symbol), symbol, None, None

	def __get_value(self, base, symbol):
		if symbol == "+" or symbol == "-":
			return base + 1
		if symbol == "*" or symbol == "/":
			return base + 2
		return 1e11

class Solution(object):
	def get_expression_list(self, ss):
		expression = []
		for s in ss:
			if s == ' ':
				continue
			elif (s.isalpha() and expression and expression[-1].isalpha()) or (s.isdigit() and expression and expression[-1].isdigit()):
				expression.append(expression.pop()+s)
			else:
				expression.append(s)
		return expression

	def build_tree(self, expression):
		base = 0
		stack = []
		for element in expression:
			if element == '(':
				base+=10
				continue
			if element == ')':
				base-=10
				continue
			node = ExpressTreeNode(base, element)
			while stack and node.val <= stack[-1].val:
				node.left = stack.pop()
			if stack:
				stack[-1].right = node
			stack.append(node)
		if stack:
			return stack[0]
		return None

	def process(self, node, evaluation_map):
		if node == None:
			return []

		if node.left == None and node.right == None:
			return self.__get_leaf_node(node,evaluation_map)

		left = self.process(node.left, evaluation_map)
		right = self.process(node.right, evaluation_map)
		if node.symbol == "+":
			return self.__add(left,right)
		if node.symbol == "-":
			return self.__add(left, self.__multiply_list(["-1"], right))
		if node.symbol == "*":
			return self.__multiply_list(left, right)
		return []

	def __get_leaf_node(self, node, evaluation_map):
		value = node.symbol
		if value in evaluation_map:
			value = evaluation_map[value]
		if value == '0':
			return []
		if not self.__is_digit(value):
			value = "1*" + value
		return [value]

	def __is_digit(self, s):
		return s.isdigit() or (s[0] == '-' and s[1:].isdigit())

	def __add(self, left, right):
		counter = collections.defaultdict(lambda : 0)
		for element in left+right:
			digit, string = self.__get_frags(element)
			counter[string] += int(digit)
		result = []
		for key, value in counter.items():
			if value == 0:
				continue
			if key == "":
				result.append(str(value))
				continue
			result.append(str(value)+"*"+key)
		return result

	def __get_frags(self, element):
		frags = element.split("*",1) + [""]
		return frags[0], frags[1]

	def __multiply_list(self, left, right):
		result = []
		for factor1 in left:
			factor1_digit, factor1_string = self.__get_frags(factor1)
			for factor2 in right:
				factor2_digit, factor2_string = self.__get_frags(factor2)
				result_digit = str(int(factor1_digit) * int(factor2_digit))
				result_string = self.__multiply(factor1_string, factor2_string)
				result.append(result_digit+"*"+result_string)

		combined_result = self.__add([], result)
		return combined_result

	def __multiply(self, factor1, factor2):
		if not factor2:
			return factor1
		if not factor1:
			return factor2
		return "*".join(sorted(factor2.split("*")+factor1.split("*")))

	def basicCalculatorIV(self, ss, evalvars, evalints):
		return sorted(self.process(self.build_tree(self.get_expression_list(ss)), dict(zip(evalvars, map(str, evalints)))), key=lambda x: (-len(x.split("*")), x if self.__is_digit(x) else x.split("*",1)[1]))

```
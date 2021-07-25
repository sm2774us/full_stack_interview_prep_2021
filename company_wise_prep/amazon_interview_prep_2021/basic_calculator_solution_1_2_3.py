from functools import cmp_to_key
from typing import List

def merge(stack, signs, num):
    # Merge the cur res and update the stack
    sign = signs[-1][-1]
    if sign == "+":
        stack[-1].append(num)
    elif sign == "-":
        stack[-1].append(-num)
    else:
        last = stack[-1][-1]
        if sign == "*":
            stack[-1][-1] = last * num
        else:
            stack[-1][-1] = int(last / num)
    signs[-1].pop()
	
def calculate(s):
    # Use 2 stacks to record each level of res and ops
    stack, signs = [[]], [["+"]]
    i, n = 0, len(s)
    while i < n:
		# empty case
        if s[i] == " ":
            i += 1
            continue
		# read and merge the num to cur level
        if s[i].isdigit():
            num = int(s[i])
            while i+1 < n and s[i+1].isdigit():
                num = num * 10 + int(s[i+1])
                i += 1
            merge(stack, signs, num)
		# record the op
        elif s[i] in "+-*/":
            signs[-1].append(s[i])
		# update a new level
        elif s[i] == "(":
            stack.append([])
            signs.append(["+"])
		# remove the cur level and merge the res to previous level
        else:
            cur = sum(stack.pop())
            signs.pop()
            merge(stack, signs, cur)
        i += 1
	# merge the answer of basic level and returnn
    return sum(stack[-1])

class Solution:
    def calculateI(self, s: str) -> int:
        return calculate(s)

    def calculateII(self, s: str) -> int:
        return calculate(s)

    def calculateIII(self, s: str) -> int:
        return calculate(s)

if __name__ == "__main__":
    # Basic Calculator - I
    # Test Cases:

    # Input: "1 + 1"
    # Return: 2
    solution = Solution() 
    2 == solution.calculateI("1 + 1")
    print(solution.calculateI("1 + 1"))

    # Input: " 2-1 + 2 "
    # Output: 3
    3 == solution.calculateI(" 2-1 + 2 ")
    print(solution.calculateI(" 2-1 + 2 "))

    # Input: "(1+(4+5+2)-3)+(6+8)"
    # Output: 23
    23 == solution.calculateI("(1+(4+5+2)-3)+(6+8)")
    print(solution.calculateI("(1+(4+5+2)-3)+(6+8)"))

    # Basic Calculator - II
    # Test Cases:

    # Input: "3+2*2" 
    # Return 7
    7 == solution.calculateII("3+2*2")
    print(solution.calculateII("3+2*2"))

    # Input: " 3/2 " 
    # Return 1
    1 == solution.calculateII("3/2")
    print(solution.calculateII("3/2"))

    # Input: " 3+5 / 2 " 
    # return: 5
    5 == solution.calculateII(" 3+5 / 2 ")
    print(solution.calculateII(" 3+5 / 2 "))

    # Basic Calculator - III
    # Test Cases:

    # Input: "1 + 1" 
    # Return: 2
    2 == solution.calculateIII("1 + 1")
    print(solution.calculateIII("1 + 1"))

    # Input: " 6-4 / 2 " 
    # Return: 4
    4 == solution.calculateIII(" 6-4 / 2 ")
    print(solution.calculateIII(" 6-4 / 2 "))

    # Input: "2*(5+5*2)/3+(6/2+8)" 
    # Return: 21
    21 == solution.calculateIII("2*(5+5*2)/3+(6/2+8)")
    print(solution.calculateIII("2*(5+5*2)/3+(6/2+8)"))

    # Input: "(2+6* 3+5- (3*14/7+2)*5)+3" 
    # Return: -12
    -12 == solution.calculateIII("(2+6* 3+5- (3*14/7+2)*5)+3")
    print(solution.calculateIII("(2+6* 3+5- (3*14/7+2)*5)+3"))


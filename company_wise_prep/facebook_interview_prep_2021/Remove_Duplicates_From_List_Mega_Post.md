# Remove Duplicates From A List - MegaPost

## If all the elements are hashable (this excludes `list`, `dict`, `set`, and other **mutable types**), we can use a `set`:
```python
items = [1, 2, 3, 'a', 'b', 'c', 2, 3, 4, 'b', 'c', 'd']
unique = list(set(items))
```

## Or, if we want to keep the order of the elements
```python
items = [1, 2, 3, 'a', 'b', 'c', 2, 3, 4, 'b', 'c', 'd']
unique = []
helperset = set()
for x in items:
    if x not in helperset:
        unique.append(x)
        helperset.add(x)
```

## If all the elements are comparable (i.e. `<`, `>=`, etc. operators; this works for `list`, `dict`, etc. but not for `complex` and many other types, including most **user-defined types**), we can sort and group:
```python
import itertools
items = [1, 2, 3, 'a', 'b', 'c', 2, 3, 4, 'b', 'c', 'd']
unique = [k for k,g in itertools.groupby(sorted(items))]
```

## If both of the above fails, we have to use the brute-force method, which is inefficient:
```python
items = [1, 2, 3, 'a', 'b', 'c', 2, 3, 4, 'b', 'c', 'd']
unique = []
for x in items:
    if x not in unique:
        unique.append(x)
```

## Another way of removing duplicate elements from a list, while preserving the order would be to use OrderedDict module like so
```
from collections import OrderedDict as od
 
print(list(od.fromkeys([1, 2, 3, 'a', 'b', 'c', 2, 3, 4, 'b', 'c', 'd']).keys()))
```
NOTE: See also [Fastest way to uniqify a list in Python](http://www.peterbe.com/plog/uniqifiers-benchmark).

## Specifying the particular type (or degree) of uniqueness
We may also need to specify the particular type (or degree) of uniqueness and duplication that is at issue. Case-insensitive, with strings ? Unique with respect to a particular key in the case of dictionaries ?

One way to do this is to require an equality predicate, or perhaps a key function, in addition to a list to be pruned. For example, using itertools.groupby, at the cost of needing a sort and discarding order:
```python
from itertools import (groupby)
 
 
# nubByKey :: (a -> b) -> [a] -> [a]
def nubByKey(k, xs):
    return list(list(v)[0] for _, v in groupby(sorted(xs, key=k), key=k))
 
 
xs = [
    'apple', 'apple',
    'ampersand', 'aPPLE', 'Apple',
    'orange', 'ORANGE', 'Orange', 'orange', 'apple'
]
for k in [
    id,                      # default case sensitive uniqueness
    lambda x: x.lower(),     # case-insensitive uniqueness
    lambda x: x[0],          # unique first character (case-sensitive)
    lambda x: x[0].lower(),  # unique first character (case-insensitive)
]:
    print (
        nubByKey(k, xs)
    )
```
Output:
```
['apple', 'aPPLE', 'Apple', 'orange', 'ORANGE', 'Orange', 'ampersand']
['ampersand', 'apple', 'orange']
['Apple', 'ORANGE', 'apple', 'orange']
['apple', 'orange']
```

## Specifying the particular type (or degree) of uniqueness - using an equality predicate with a recursive function
Or alternatively, using an equality predicate with a recursive function which scales less well, but does preserve order:
```python
# nubByEq :: (a -> a -> Bool) -> [a] -> [a]
def nubByEq(eq, xs):
    def go(yys, xxs):
        if yys:
            y = yys[0]
            ys = yys[1:]
            return go(ys, xxs) if (
                elemBy(eq, y, xxs)
            ) else (
                [y] + go(ys, [y] + xxs)
            )
        else:
            return []
    return go(xs, [])
 
 
# elemBy :: (a -> a -> Bool) -> a -> [a] -> Bool
def elemBy(eq, x, xs):
    if xs:
        return eq(x, xs[0]) or elemBy(eq, x, xs[1:])
    else:
        return False
 
 
xs = [
    'apple', 'apple',
    'ampersand', 'aPPLE', 'Apple',
    'orange', 'ORANGE', 'Orange', 'orange', 'apple'
]
for eq in [
    lambda a, b: a == b,                   # default case sensitive uniqueness
    lambda a, b: a.lower() == b.lower(),   # case-insensitive uniqueness
    lambda a, b: a[0] == b[0],             # unique first char (case-sensitive)
    lambda a, b: a[0].lower() == b[0].lower(),   # unique first char (any case)
]:
    print (
        nubByEq(eq, xs)
    )
```
A briefer definition of which might be in terms of filter:
```python
# nubBy :: (a -> a -> Bool) -> [a] -> [a]
def nubBy(p, xs):
    def go(xs):
        if xs:
            x = xs[0]
            return [x] + go(
                list(filter(
                    lambda y: not p(x, y),
                    xs[1:]
                ))
            )
        else:
            return []
    return go(xs)
```
Output:
```
['apple', 'ampersand', 'aPPLE', 'Apple', 'orange', 'ORANGE', 'Orange']
['apple', 'ampersand', 'orange']
['apple', 'Apple', 'orange', 'ORANGE']
['apple', 'orange']
```

## Now implement your own algorithm:
### If the list is sorted we can make use of Binary Search as shown below:
```python
# <<<<<<<<<<<<<<<<< When the list is sorted >>>>>>>>>>>>>>

# Binary search function
# returns the index of the first occurence of
# element ele in list_to_search between index
# left and right
# @param list_to_search : list in which to search the element ele
# @param left : left index for where to search element in list
# @param right : right index for where to search element in list
# @param ele : element to search in list
def binSearch(list_to_search, left, right, ele): 
    # check if the lft index is always smaller
    # than right index
    if right >= left: 
        # calculate the middle index
        middle = left + (right - left) // 2
        # check if the middle index of the list
        # consists the element, then return
        # the middle element
        if list_to_search[middle] == ele: 
            return middle 
        # Check if the element is less than element at middle
        # Do Binary Search on left sub array because only
        # left sub array will contain the element
        elif list_to_search[middle] > ele: 
            return binSearch(list_to_search, left, middle-1, ele) 
        # Check if the element is greater than element at middle
        # Do Binary Search on right sub array because only
        # right sub array will contain the element
        else: 
            return binSearch(list_to_search, middle + 1, right, ele)
    else: 
        # -1 value indicates that the element is not
        # found in the array 
        return -1


# function to remove duplicates
# @param list_to_rem_dup: sorted list from which duplicates
#                         have to be removed
def remove_duplicates(list_to_rem_dup):
    # create an empty list
    new_list = []
    # For each index from end of sorted array to 1, perform
    # binary search to check if their duplicates exit
    # If the duplicates do not exits, then append
    # the element to the new_list
    # Finally, reverse the list to maintain the order
    for i in reversed(range(1, len(list_to_rem_dup))):
        curr_ele = list_to_rem_dup[i]
        found_index = binSearch(list_to_rem_dup, 0, i-1, curr_ele)
        if found_index == -1:
            new_list.append(curr_ele)
    new_list.append(list_to_rem_dup[0])
    return reversed(new_list)


# driver method
def main():
    # list on which operation is to be performed
    ord_list = [6, 12, 12, 13, 15, 19, 19, 21] 
    # print the sorted array in order
    print ("\nSorted array with duplicates") 
    for ele in range(len(ord_list)): 
        print (ord_list[ele])
    # removing duplicates from list
    without_dup_list = remove_duplicates(ord_list)
    print ("\nOrdered array without duplicates") 
    for element in without_dup_list:
        print(element)

if __name__ == '__main__':
    main()
```

### If the list is unsorted we can make use of either set (HashSet) or dict (HashMap) as shown below:
```
# <<<<<<<<<<<<<<<< When the list is unsorted >>>>>>>>>>>>>

# function to remove duplicates
# @param list_to_rem_dup: sorted list from which duplicates
#                         have to be removed
def remove_duplicates(list_to_rem_dup):
    # create an empty set
    new_set = set()
    # create an empty list
    new_list = []
    # Iteratively check that for each element in
    # list_to_rem_dup, if it exists in new_set
    # Finding element in set is <= O(n)
    # Thus Total Time Complexity (T.C.) = 
    #       T.C. of for loop * T.C. of element search in set
    #           = O(n)*O(log n)
    #           = O(n.log n)
    for ele in list_to_rem_dup:
        if ele in new_set:
            continue
        new_set.add(ele)
        new_list.append(ele)
    return new_list

# driver method
def main():
    # list on which operation is to be performed
    ord_list = [2, 1, 4, 3, 5, 1, 2, 1, 1, 6, 5]
    # print the sorted array in order
    print ("\nSorted array with duplicates") 
    for ele in range(len(ord_list)): 
        print (ord_list[ele])
    # removing duplicates from list
    without_dup_list = remove_duplicates(ord_list)
    print ("\nOrdered array without duplicates") 
    for element in without_dup_list:
        print(element)

if __name__ == '__main__':
    main()
```
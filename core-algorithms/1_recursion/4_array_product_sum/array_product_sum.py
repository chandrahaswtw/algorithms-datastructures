def array_product_sum(lis, depth=1):
    sum = 0
    for l in lis:
        if(isinstance(l, list)):
            sum = sum + array_product_sum(l, depth+1)
        else:
            sum += l 
    return sum * depth

print(array_product_sum([1, 2, [2, 3], 6, [[2, 3], 1], 7]))
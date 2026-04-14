def linearPos(lis, target):
    pos = -1
    for i, value in enumerate(lis):
        if(value == target):
            pos = i
    return pos

linearPos = linearPos(
  [1, 2, 55, 789, 432, 244, 7899, 8002, 1001],
  8002,
);

print(linearPos);
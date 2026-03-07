function towerOfHanoi(
  n: number,
  fromRod: string,
  toRod: string,
  auxRod: string,
) {
  if (n == 1) {
    console.log(`Moving disc 1 from ${fromRod} to ${toRod}`);
  } else {
    // Places n-1 discs from fromRod to AuthRod viz toRod
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Moving disc ${n} from ${fromRod} to ${toRod}`);

    // Places n-1 discs from auxRod to toRod viz fromRod
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
  }
}

towerOfHanoi(3, "fromRod", "toRod", "auxRod");

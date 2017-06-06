// level 1 - return boolean - Integers between 1 and 99 - sum to 100
// TOTAL BRUTE FORCE

function existsPairForSum(array, sum) {
  let isPair = false;

  array.forEach(function(itemA, indexA) {

    array.forEach(function(itemB, indexB) {

      if (indexA != indexB && itemA + itemB == sum) {
        isPair = true;
      }

    });

  });

  return isPair;
}

// level 1.1 - alt way of attacking -
function altExistsPairForSum(array, sum) {

  for(let i = 0; i < array.length; i++) {

      if (array.indexOf(sum - array[i]) != -1) {
        return true;
      }

  }

  return false;
}

 altExistsPairForSum([2, 68, 34, 5, 3], 100);

///////////////////////////////////////////////////////////////////////////
// level 2 - return THE FIRST MATCHING pair - still O(n^2)

function firstPairForSum(array, sum) {
  for(let i = 0; i < array.length; i++) {
    let itemA = array[i];

    for(let ii = i + 1; ii < array.length; ii++) {
      let itemB = array[ii];

      if (itemA + itemB == sum) {
        return [itemA, itemB]
      }
    }
  }

  return "No Match."
}

firstPairForSum([3, 98, 5], 100);

///////////////////////////////////////////////////////////////////////////
//level 3 - return ALL MATCHING PAIRS still - O(n^2)

function allPairsForSumXX(array, sum) {
  let addends = [];

  array.forEach(function(itemA, indexA){

    array.forEach(function(itemB, indexB){

      if (indexB > indexA){

        if (itemA + itemB == sum){
          addends.push([itemA, itemB]);
        }
      }

    });

  });

  return addends;
}

// level 3.1 smaller constant factor but still O(n^2)

function allPairsForSum(array, sum) {
  let allPairs = [];

  for(let i = 0; i < array.length; i++) {
    let itemA = array[i];

    for(let ii = i + 1; ii < array.length; ii++) {
      let itemB = array[ii];

      if (itemA + itemB == sum) {
        allPairs.push([itemA, itemB]);
      }
    }
  }

  return allPairs;
}

allPairsForSum([3, 98, 2, 5, 50, 50, 45, 55], 100);

// ALTERNATE thinking (subtraction) - find all pairs

function altPairsForSum(array, sum) {
  let pairs = [];

  for(let i = 0; i < array.length; i++) {
    let itemA = array[i];
    let subarray = array.slice(i, array.length)
    let ii = subarray.indexOf(sum - itemA);

    if (ii != -1) {
      let itemB = subarray[ii];
      pairs.push([itemA, itemB]);
    }
  }

  return pairs;
}

altPairsForSum([3, 98, 2, 5, 50, 50, 45, 55], 100);

//different styles but same general brute force method as first

function allPairsForSumII(array, sum) {
  let addends = [];

  array.forEach(function(itemA, indexA){

    array.slice(indexA + 1, -1).forEach(function(itemB, indexB){

        if (itemA + itemB == sum){
          addends.push([itemA, itemB]);
        }

    });

  });

  return addends;
}

///////////////////////////////////////////////////////////////////////////
//level 4 - OPTIMAL

function optimalAllPairs(array, sum) {
  a = array.sort();

  let pairs = [];

  for(let i = 0; i < array.length; i++) {
    let itemA = array[i];
    subarray = a.slice(i + 1, array.length);

    let ii = binarySearch(subarray, sum - itemA);

    if (ii != -1) {
      let itemB = subarray[ii];
      pairs.push([itemA, itemB]);
    }
  }

  return pairs;
}

optimalAllPairs([3, 98, 2, 5, 50, 50, 45, 55], 100);


// Binary Search
function binarySearch(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        }
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}





















// Alt ideas:
// subract current item from sum. use array#indexOf the difference
// Sort array first. use binary search to search for difference.

// Questions to ask:
// Are negatives allowed? if not, disregard items higher than sum
// Are all items the correct type? (use typeof(item) == 'number' to check)

/**
 * 
 * Problem from --> Hacker Rank
 * 
 *  A person wants to buy exactly one keyboard and one USB drive from two price lists.
    They have a budget b. Find the maximum amount of money they can spend on both items.

    If it is not possible to buy both items within the budget, return -1.

    Function Description

    Complete the function getMoneySpent(keyboards, drives, b)

    Input

    keyboards[n]: array of integers representing keyboard prices

    drives[m]: array of integers representing USB drive prices

    b: integer, budget

    Output

    Maximum money spent on one keyboard and one drive, or -1 if not possible

    /////////////////////////////////

    Example

    b = 60
    keyboards = [40, 50, 60]
    drives = [5, 8, 12]

    getMoneySpent(keyboards, drives, b) → 58

    Explanation:

    Possible pairs:

    40 + 5 = 45
    40 + 8 = 48
    40 + 12 = 52
    50 + 5 = 55
    50 + 8 = 58 ✅
    50 + 12 = 62 (too expensive)
    60 + 5 = 65 (too expensive)
    60 + 8 = 68 (too expensive)
    60 + 12 = 72 (too expensive)
    The most expensive valid purchase = 58.
*/

function getMoneySpent(keyboards, drives, b) {
    // Store all possible sums of keyboard + drive
    let allPrices = [];

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            allPrices.push(keyboards[i] + drives[j]);
        }
    }

    // Filter out sums that exceed the budget
    let validPrices = allPrices.filter(price => price <= b);

    // If no valid prices, return -1
    if (validPrices.length === 0) {
        return -1;
    }

    // Sort numerically in ascending order
    validPrices.sort((a, b) => a - b);

    // The last element is the maximum valid sum
    return validPrices[validPrices.length - 1];
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // Output: 58
console.log(getMoneySpent([4, 5, 6], [7, 8, 9], 15)); // Output: 14
console.log(getMoneySpent([10, 20, 30], [5, 5, 5], 15)); // Output: -1
console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // Output: 9
console.log(getMoneySpent([1, 2, 3], [4], 4)); // Output: -1
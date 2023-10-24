// Good morning! Here's your coding interview problem for today.

// This problem was asked by IBM.

// Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

// For example, given "aaabbc", you could return "ababac". Given "aaab", return None.

// Solution

function rearrangeString(str) {
    const charMap = {};
    let result = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    const sortedCharMap = Object.entries(charMap).sort((a, b) => b[1] - a[1]);

    let index = 0;

    while (sortedCharMap.length > 0) {
        const currentChar = sortedCharMap[index][0]

        if (!result.endsWith(currentChar)) {
            result += currentChar;
            sortedCharMap[index][1]--;
        } else {
            return null;
        }

        if (sortedCharMap[index][1] === 0) {
            sortedCharMap.splice(index, 1);
        }

        if (++index > sortedCharMap.length - 1) index = 0;
    }

    return result;
}

module.exports = rearrangeString;
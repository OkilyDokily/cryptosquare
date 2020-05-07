
# _Cryptosquare_

#### _This demonstrates knowledge of JavaScript._

#### By _**Matthew**_


## Description

_A page demonstrates basic javascript and behavior driven development_
_Page encrypts sentence via a cryptosquare_


## Tentative Algorithm
| step                                                                                                                             | input                  | output                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------------|
| find length of characters in sentence                                                                                            | blah blah              | 8                                                                                       |
| find largest square below and above number                                                                                       | 650 character sentence | 25 squared - 625, 26 squared 676                                                        |
| find number of rows to add to smaller square                                                                                     | 650 characters         | 1 row of 25 each                                                                        |
| find number of rows to subtract to larger square                                                                                 | 650 characters         | 1 row of 26 each                                                                        |
| if equal default to rows with least number of extra characters                                                                   | 650 characters         | 26 * 25                                                                                 |
| take each character and input it into an array the length of a row,insert all of these into a 2d arrary                          | 650 characters         | ['w,'e','l','o','v','e','t','o','s','e'], ['e,'i','t','s','e','t','o','s','e','f'] etc. |
| create new 1d array by going through first value of each array then second etc.                                                  |                        |                                                                                         |
| split original sentence into words array.                                                                                        | "yo you"               | ['yo','you']                                                                            |
| for the length of each word in the words array create a word for each letter in the created 1d array. insert space between words | "yo you"               | 2 by 3 array [yo y,o u, ] yy uoo                                                        |

## SPEC


## Setup/Installation Requirements

Clone the repo and open the .html file in a browser.

## Known Bugs

_I don't think there are any bugs but please tell me if you see any._

## Support and contact details

_Open a Github issue if you see a problem or have questions_

## Technologies Used

_This is an html, css, Bootstrap, jQuery, and JavaScript thing._

### License

*Feel free to use this code as you please*

Copyright (c) 2020 **_Matthew_**

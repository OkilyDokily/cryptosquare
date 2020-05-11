
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
| Spec                                                                                                                                                                                     | Input                      | Output                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|------------------------------------------------------------------------------------------|
| find length of characters in sentence                                                                                                                                                    | "we love to see it..."     | 326 for example                                                                          |
| split original sentence into words array(misreading-removed from code);                                                                                                                  | "we love to see..."        | ['we', 'love', 'to', 'see'....]                                                          |
| take each character and input it into an array the length of a row,insert all of these into a 2d arrary (create your own string and assign it your own predetermined square to simplify) | "we love to see it..."     | ['w,'e','l','o','v','e','t','o','s','e'], ['e,'i','t','s','e','t','o','s','e','f'] etc.  |
| create new 1d array by going through first value of each array then second etc.                                                                                                          | output from previous step  | w,e,e,i ....                                                                             |
| create 5 letter words from arrary from previous spec                                                                                                                                     | output from previous step  | "we eilt ..."                                                                            |
| find largest square  below number from first spec                                                                                                                                        | 326                        | 18                                                                                       |
| find lowest square above  number from first spec                                                                                                                                         | 326                        | 19                                                                                       |
| find number of rows to add to lower square                                                                                                                                               | 326                        | 18 squared = 324 so 1 row                                                                |
| find number of rows to subtract from higher square                                                                                                                                       | 326                        | 19 squared = 361 so 1 row                                                                |
| find if perfect square root                                                                                                                                                              | 49 characters              | 7 squared so no extra rows or characters                                                 |
| find the number of excess characters on the lower square                                                                                                                                 | (324 + 18) - 326           | 16 excess characters                                                                     |
| find the number of excess characters on the higher square                                                                                                                                | (361-19) -326              | 16 excess characters                                                                     |
| decide which square to choose based on rows and excess characters. 1. prefer least rows. 2. prefer least character 3. prefer lowest square                                               | input from last 4 outputs  | 18 columns by 19 rows square rather than 19 columns by 18 rows.                          |
| insert any sentence and get a result as in spec 5                                                                                                                                        | "blahafds blahd blah."     | "encrypted text...."                                                                     |
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

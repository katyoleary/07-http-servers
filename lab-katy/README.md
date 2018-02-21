cf Lab 07: Vanilla HTTP Server
Submission Instructions
Work in a fork of this repository
Work in a branch on your fork
Write all of your code in a directory named lab- + <your name> e.g. lab-susan
Open a pull request to this repository
Submit on canvas a question and observation, how long you spent, and a link to your pull request
Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.

README.md - contains documentation
.gitignore - contains a robust .gitignore file
.eslintrc - contains the course linter configuratoin
.eslintignore - contains the course linter ignore configuration
package.json - contains npm package config
create a lint script for running eslint
create a start script for running your server
lib/ - contains module definitions
Note: You will need to npm i cowsay for this project

Feature Tasks
GET: /
For GET requests made to /, the server should respond with the following:

a header containing Content-Type: text/plain
a status code of 200
a response with the string "hello from my server!"
GET: /cowsay?text={message}
For GET requests made to /cowsay, the server should respond with the following:

a header containing Content-Type: text/plain
if the querystring text=message is set, respond with:
status code of 200
a response body that includes the value returned from cowsay.say({ text: <querystring text> })
if the querystring text=message is not set, respond with:
status code 400
a body including the value returned from cowsay.say({ text: 'bad request' })
POST: /cowsay
For POST requests made to /cowsay, the server should respond with the following:

a header containing Content-Type: text/plain
if the JSON string {text: message} is set in the body, respond with:
status code of 200
a response body including the value returned from cowsay.say({ text: <querystring text> })
if the JSON string {text: message} is not set in the body, respond with:
status code 400
a body including the value returned from cowsay.say({ text: 'bad request' })
Stretch Goals
add the ability to change the cow file - ex: dragon, sheep, etc (note: this should be done through the querystring)
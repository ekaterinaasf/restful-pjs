# Development strategy

## /public/example-fetches.js correction

1. Resolved the issue with blocked Reason: CORS request not HTTP
   https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
   Added for each fetch full path including localhost/127.0.0.1 with the `HTTP` format

2. For every example in console we can see console.log("response") message, but no any console.log("response") message, in spite the list of todos is correctly changed. This is related to incorrect timing of examples execution.

3. CORS request did not succeed error for fetch request http://127.0.0.1:3000/todos/3. Appeared on the console after ex.17, so added `await` option before the fetch for all todos inside ex.17
   https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed

4. Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://127.0.0.1:3000/todos. (Reason: CORS request did not succeed)
   This issue appeared because program would like to change an entry before it was created, so added `await` parameter before:
   - ex.1 creating todo 1. (ex.2-4 don't need it as they all read this already created entry)
   - ex.5 creating todo 2 and ex.6 creating todo 3. as they will be used immediately with ex.7 and 8
   - inside cycle for creating 7 random entries, as few of them will be used as soon as this block is finish to be executed.
   - ex.17 for fetching all existing todos, as the volume can be huge, so we cannot be sure in that fast execution.

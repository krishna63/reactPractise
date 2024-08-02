## Things to read

https://daveceddia.com/react-redux-immutability-guide/

Learning Sagas
Writing test cases with Sagas

React Context provider
React Intl

## Saga's - Benefits

<ul>
    <li>It avoids call back hell when you are doing a async action calls.
      In the asycn action creators you create a call back hell to have dispatch reference, so that
      the respective action can be called on success and failure of the async action
    </li>
    <li>
      Declarative way of executing the code helps us to write test cases more easily and avoid mocking and spying the functions. We write declarative code by using the methods exposed by redux sagas
      like PUT, CALL and ALL etc..
    </li>
</ul>

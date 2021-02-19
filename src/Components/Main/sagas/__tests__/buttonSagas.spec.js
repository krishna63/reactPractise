import { call } from "redux-saga/effects";
import { incrementWorker } from "../buttonSagas";

describe("Button Saga's testing", () => {

  test("should call the delay function, when incrementWorker worker is triggered", () => {
    const workerGen = incrementWorker();
    
    expect(workerGen.next().value).toMatchObject({type: 'CALL' });

    expect(workerGen.next().value).toMatchObject({type: "PUT"});

    expect(workerGen.next().value).toBeUndefined();
  })
});

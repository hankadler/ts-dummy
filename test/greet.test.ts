import assert from "assert";
import sinon from "sinon";
import greet from "../src/greet.js";

describe("greet function works", () => {
  it("logs 'there' when name arg is not given", () => {
    const spy = sinon.spy(console, "log");
    greet();
    assert(spy.calledWith("Hello there!"));
    spy.restore();
  });

  it("logs $name when name arg is given", () => {
    const spy = sinon.spy(console, "log");
    greet("Pepe");
    assert(spy.calledWith("Hello Pepe!"));
    spy.restore();
  });
});

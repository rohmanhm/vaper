import test from "ava";
import vaper from "./dist/vaper.umd"; // eslint-disable-line import/extensions

test("should exists", t => {
  if (vaper) {
    t.pass();
  }
});

test("should convert a value", t => {
  const actual = vaper("foo", "bar")("foo");
  t.is(actual, "bar");
});

test("should convert array", t => {
  const actual = vaper(3, 99)([3, 4, 5]);
  t.deepEqual(actual, [99, 4, 5]);
});

test("should convert array deeply", t => {
  const actual = vaper("i", "o")(["i", "u", "a", ["b", "i"]]);
  t.deepEqual(actual, ["o", "u", "a", ["b", "o"]]);
});

test("should convert object", t => {
  const actual = vaper(null, "abc")({
    a: null,
    b: 3
  });
  t.deepEqual(actual, {
    a: "abc",
    b: 3
  });
});

test("should convert object deeply", t => {
  const actual = vaper(undefined, "nothing")({
    a: undefined,
    b: 3,
    c: {
      d: undefined,
      e: {
        a: undefined,
        b: 1
      }
    }
  });

  t.deepEqual(actual, {
    a: "nothing",
    b: 3,
    c: {
      d: "nothing",
      e: {
        a: "nothing",
        b: 1
      }
    }
  });
});

test("should convert array in object deeply", t => {
  const actual = vaper("foo", "bar")({
    a: 1,
    b: [
      "foo",
      "bar",
      "baz",
      {
        x: "bar",
        z: "foo"
      }
    ],
    c: "foo"
  });
  t.deepEqual(actual, {
    a: 1,
    b: [
      "bar",
      "bar",
      "baz",
      {
        x: "bar",
        z: "bar"
      }
    ],
    c: "bar"
  });
});

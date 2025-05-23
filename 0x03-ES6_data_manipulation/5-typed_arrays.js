// Creates an Int8 typed array of a given length, sets a value at a specific position,
// and returns a DataView of the buffer. Throws an error if the position is out of range.
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(newBuffer, 0, length);
  int8.set([value], position);
  return new DataView(newBuffer);
}

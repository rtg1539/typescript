// Error - TS2532: Object is possibly 'undefined'.
function toString(str: string | undefined) {
  return str.toString();
}

// Type Assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

// Optional Chaining
function toString(str: string | undefined) {
  return str?.toString();
}
const removedAdded = (previous = [], current = [
]) => {
  const removed = previous.filter((prev) => !current.includes(prev));
  const added = current.filter((curr) => !prev.includes(curr));
  return [removed, added];
};
export { removedAdded };

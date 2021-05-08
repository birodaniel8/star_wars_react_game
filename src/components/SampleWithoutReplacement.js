const sampleWithoutReplacement = (bucket, n) => {
  n = Math.min(n, bucket.length);

  // Array of indeces 0 to n:
  var idxs = [...Array(bucket.length).keys()];

  // Select a random index and remove it while returning:
  const getRandomIndex = () => {
    var randomIndex = Math.floor(Math.random() * idxs.length);
    return idxs.splice(randomIndex, 1)[0];
  };

  var sampled = [];
  for (var i = 0; i < n; i++) {
    sampled.push(bucket[getRandomIndex()]);
  }

  return sampled;
};

export default sampleWithoutReplacement;

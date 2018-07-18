const createAndAutoIncrement = function(data) {
  //debugger
  return (
    new Promise((resolve, reject) => {
      Users
        .find({ uid: { $exists: true } })
        .sort({ uid: -1 })
        .limit(1)
        .then(docs => {
          //debugger
          if (docs.length) {
            data.uid = docs[0].uid + 1;
          } else {
            data.uid = 0;
          }
          //debugger;
          Users
            .create(data)
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    })
  )
}

module.exports = createAndAutoIncrement;

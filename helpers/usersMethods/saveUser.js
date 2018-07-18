const saveUser = function (data) {
  return (
    new Promise((resolve, reject) => {
      debugger;
      bcrypt.hash(data.password, 10, async function (err, hash) {
        if (err) return reject(err);
        data.password = hash;
        debugger;
        let { ok, error, result } = await surePromise(Users.create(data));
        debugger;
        if (ok) return resolve(result);
        debugger;
        return reject(error);
      })
    })
  )
}

module.exports = saveUser;

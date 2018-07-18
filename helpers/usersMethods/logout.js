const logout = function ({ id = '' }) {
  return (
    new Promise(async (resolve, reject) => {
      if (id) {
        let user = await Users.findById(id);
        user.isLogin = false;
        user.save(function (error, done) {
          if (error) return reject(error);
          return resolve(done);
        })
      } else {
        return resolve(new Error('missingArguments'));
      }
    })
  )
}

module.exports = logout;

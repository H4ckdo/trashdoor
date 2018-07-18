const login = function ({password = null, userName = null}) {
  return (
    new Promise(async (resolve, reject) => {
      if(password && userName) {
        let user = await Users.findOne({userName});
        debugger;
        if (!user) return reject(new Error('notFound'));
        debugger;
        //console.log('password: ', password, ' user.password: ', user.password) ;
        bcrypt.compare(password, user.password, (error, match) => {
          debugger;
          if (error) return reject(new Error('serverError'));
          if (match) {
            user.isLogin = true;
            user.save(function (error, done) {
              debugger;
              if(error) return reject(error);
              //console.log('done ', done);
              return resolve(done);
            })
          } else {
            return reject(new Error('wrongPassword'));
          }
        })
      }
    })
  )
}

module.exports = login;

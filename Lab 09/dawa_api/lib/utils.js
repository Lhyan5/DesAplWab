const jwt = require('jsonwebtoken');

process.env.JWT_SECRET = "CaDEMa";

module.exports = {
	generateToken: user => {

		const u = {
			_id: user._id,
			name: user.name,
			username:  user.username,
			email: user.email
		};
		return token = jwt.sign(u, process.env.JWT_SECRET, {
			expiresIn: 60*60*24 //Expires in 25 hours
		});
	},
	verifyToken: token => {
		return new Promise((resolve,reject) =>{
			jwt.verify(token, process.env.JWT_SECRET,(err,user) =>{
				if(err){
					reject(err);
				}
				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const { password, age, createdAt, __v, ...exposedData} = user;
		return exposedData;
	}
};
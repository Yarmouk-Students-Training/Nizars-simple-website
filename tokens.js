const reIssue = async (req , res,refreshToken) =>{
    await jwt.verify(token, refreshTokenSecret, async (err, username) => {
          
        if (err) {
            return res.status(403).json({err:"invalid refresh token"});
         }

         let userToken = await UserToken.findOne({where :{usename}});

         if(userToken.refresh_token == refreshToken){
            const accessToken = jwt.sign(username, proccess.env.access_token_secret ,proccess.env.access_token_exp);

            res.json({
                accessToken,
                refreshToken
            });
         }

         else{
             return res.status(403).json("Old refresh token");
         }
         
    });
  
  }

  const verifyAccessToken = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (authHeader) {
        const token = authHeader;//authHeader.split(' ')[1];  
      await jwt.verify(token, proccess.env.access_token_secret, (err, username) => {
          
            if (err) {
                return res.sendStatus(403);
            }
            req.username = username;
            next();
        });
    } else {
        return res.sendStatus(401);
    }
  };

  module.exports={
    verifyAccessToken,
    reIssue
  }
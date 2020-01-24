const emailExistence=require('email-existence');
emailExistence.check('mukeshkannan22051999@calibraint.com', async(error, response)=>{
    console.log('res: '+response);
});
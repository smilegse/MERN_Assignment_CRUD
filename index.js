const app = require('./App');
const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log('API back-end running '+ PORT)
})
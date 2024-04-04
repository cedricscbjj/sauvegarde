const express = require('express')
const Datalink = require('./datamodel')

const app = express()
const port = 3000
const cors = require('cors');

const mongoose = require('mongoose')
const Product = require ('./datamodel')

app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/next', (req, res) => {
      res.send('Hello bitch!')
    })

  
  



           // fetching data with theme1


           app.get('/datalinks', async (req, res) => {
            const { theme1 } = req.query;
          
            try {
              let datalinks;
          
              if (theme1) {
                datalinks = await Datalink.find({ theme1: { $regex: theme1, $options: 'i' } });
              } else {
                datalinks = await Datalink.find();
              }
          
              res.json(datalinks);
            } catch (error) {
              console.error('Error:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          });
          


      

// fetching a specific data with the id

app.get('/datalinks/:id', async (req, res) =>{
    try {
      const {id} = req.params;
      const datalink = await Datalink.findById(id);
      res.status(200).json(datalink);

    }catch (error) {
      res.status(500).json({message: error.message})
    }
    })



// poster des donnees vers mongo db  
app.post('/datalinks', async (req, res) => {
    //console.log(req.body);
    //res.send(req.body)
  try{
    
  
    const datalink = await Datalink.create(req.body) 
    res.status(200).json(datalink)
  
  }catch (error){
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
  })






  //modifier

  app.put('/datalinks/:id' , async (req, res) => {
    try{
      const {id} = req.params;
      const datalink = await Datalink.findByIdAndUpdate(id, req.body);
      if (!datalink){
        return res.status(404).json({message : `cannot find ${id}`})
      }
      const updatedDatalink = await Datalink.findById(id);
      res.status(200).json(updatedDatalink);
    } catch  (error){
      res.status(500).json({message: error.message})
    
    }
    
    
    })



// delete a product
app.delete('/datalinks/:id' , async (req, res) => {

    try{
    const {id} = req.params;
    const datalink = await Datalink.findByIdAndDelete(id);
    if (!datalink){
      return res.status(404).json({message: `cannot find this id ${id}`})
    } res.status(200).json(datalink);
    
    } catch (error){
      res.status(500).json({message: error.message})
    
    }
    
    })



  

    
   /* mongoose.connect('mongodb+srv://csaintcharlescsc:yIvtA6iBQL7T1zpa@sauvegarde.iorkpxl.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  app.listen(port, () => {
    console.log(`on ecoute ce qui se passe sur ${port}`)
  }) 
console.log('connected to mongodb')})
.catch(() => {
console.log(error)
}) */
mongoose
  .connect('mongodb+srv://csaintcharlescsc:yIvtA6iBQL7T1zpa@sauvegarde.iorkpxl.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(port, () => {
      console.log(`on ecoute ce qui se passe sur ${port}`)
    });
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.log(error);
  });






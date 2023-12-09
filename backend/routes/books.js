import { Book } from "../models/bookModel.js";

import expres from 'express'
const router = expres.Router();


//POST Books
router.post('/', async(request, response)=>{

    try {
        if(
            //server levevl validation
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "send all required fields: title, author, publishYear"
            })
        }

        const newBook={
            title:request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const book = await Book.create(newBook)
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
        
    }
})
//GET All Books

router.get('/', async (req,res)=>{
    try {
        const books = await Book.find({});//find from mogoDB

        return res.status(200).json({
            count:books.length, //get a count of all the books available
            data :books
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})


//GET Book By ID

router.get('/:id', async (req,res)=>{
    try {
        const {id} =req.params;
        const book = await Book.findById(id);

        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

//Update book
router.put('/:id', async (req,res)=>{
    try {
        if(
            //server levevl validation
            !req.body.title||
            !req.body.author||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "send all required fields: title, author, publishYear"
            })
        }

        const {id} =req.params;

       const result= await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({message: 'Book not Found to Update'})
        }
        return res.status(200).send({message:'Book Updated Successfully!!'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
        
    }
})


//Delete book
router.delete('/:id', async (req, res)=>{
    try {
        const {id} =req.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message:'Book not found'});

        }

        return res.status(200).send({message:'Book deleted successfully!!'});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})


export default router;
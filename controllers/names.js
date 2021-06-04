
// import { v4 as uuidv4 } from 'uuid';

// let names = []

// export const getNames = (req, res) => {
//     res.send(names)
// }


// export const addName = (req, res) => {
//     console.log('POSTED!')
//     const newName = req.body
//     names.push({...newName, id: uuidv4()})
//     res.send(`The name ${newName.name} was added to the database!`)

// }

// export const getName = (req, res) => {
//     const { gender, name } = req.params
//     const findName = names.find((name) => name.gender == gender && name.name == name)
//     res.send(findName)
// }

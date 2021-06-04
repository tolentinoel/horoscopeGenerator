// import express from 'express';
import pool from '../db.js';
// import { v4 as uuidv4 } from 'uuid';


export const allNames = async (req, res) => {
    try {
        const allNames = await pool.query("SELECT * FROM names")
        res.json(allNames.rows)
    }catch (err) {
        console.error(err.message)
    }
}

export const findName = async(req, res) => {
    const {gender, firstname}= req.params;
    try {
      const resultName = await pool.query("SELECT * FROM names WHERE gender = $1 AND firstname = $2", [gender, firstname]);
      res.json(resultName.rows)
    }catch (err) {
      console.error(err.message)
    }
}

export const addName = async (req, res) => {
    console.log(req.body)
    try {
      const {firstname, gender, hexcode, meaning} = req.body
      // const { id } = uuidv4()
      const newData = await pool.query("INSERT INTO names (firstname, gender, hexcode, meaning) VALUES ($1, $2, $3, $4) RETURNING *",[firstname, gender, hexcode, meaning]);
      res.json(newData.rows[0])
    } catch (err){
      console.error(err.message)
    }

  }


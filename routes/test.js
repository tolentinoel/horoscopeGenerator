// import express from 'express';
import pool from '../db.js';


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


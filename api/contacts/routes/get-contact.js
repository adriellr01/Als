'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/Contact');
const router = express.Router();

router.route('/:id')
    .get((req, res) => {
        const _id = req.params.id;
        
        Contact.findOne({ _id: id }, (err, contact) => {
            if (err) {
                res.status(400).json(err);
            }

            if (!contact) {
                res.status(400).json({ message: 'No contact found' });
            }

            res.json(contact);
        })
    });

module.exports = router;
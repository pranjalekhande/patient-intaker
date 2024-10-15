import express from 'express';
import Patient from '../models/Patient.js';

const router = express.Router();
// In your patient.js route
router.post('/', async (req, res) => {
  console.log(req.body); // Log the incoming request body for debugging
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// // Create a new patient
// router.post('/', async (req, res) => {
//   try {
//     // Extract health questions and other data from the request body
//     const {
//       firstName,
//       middleName,
//       lastName,
//       mobileNumber,
//       email,
//       mailingAddress,
//       healthQuestions,
//       insuranceDetails,
//       appointmentDate,
//       tosAccepted
//     } = req.body;

//     // Create a new patient with the provided data
//     const patient = new Patient({
//       firstName,
//       middleName,
//       lastName,
//       mobileNumber,
//       email,
//       mailingAddress,
//       healthQuestions, // Include health questions
//       insuranceDetails,
//       appointmentDate,
//       tosAccepted
//     });

//     // Save the patient to the database
//     await patient.save();

//     // Respond with the created patient
//     res.status(201).json(patient);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes as needed (update, delete, etc.)

export default router;

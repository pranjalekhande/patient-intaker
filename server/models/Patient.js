import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  mailingAddress: { type: String, required: true },
  healthQuestions: {
    grayHairBeforeChildren: { type: Boolean },
    brokenBoneAfter16: { type: Boolean},
    tripOverSmallStones: { type: Boolean}
  },
  insuranceDetails: {
    carrier: String,
    policyNumber: String
  },
  insuranceCardImage: String,
  appointmentDate: Date,
  tosAccepted: { type: Boolean, default: false }
}, { timestamps: true });

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;
import mongoose, { Schema, model, Types } from 'mongoose';

interface IGuest extends mongoose.Document {
  from: Date;
  to: Date;
  guest: Schema.Types.ObjectId;
}
interface ITerms {
  adults: number;
  kids: number;
  sex: string;
  pets: number;
}
// interface IFeatures {
//   toilets: number;
//   bedrooms: number;
//   Beds: number;
//   bunkBeds: number;
//   environments: number;
//   kitchen: number;
//   pool: number;
//   balcony: number;
//   yard: number;
// }

interface IFeatures extends mongoose.Document {
  name: string;
  amount: number;
}
interface ILocation {
  street: string;
  number: number;
  location: string;
  province: string;
}

const LocationSchema = new Schema({
  street: String,
  number: Number,
  location: String,
  province: String
});
const TermsSchema = new Schema({
  adults: Number,
  kids: Number,
  sex: String,
  pets: Number
});
const FeaturesSchema = new Schema({
  name: String,
  amount: Number
});

export interface Publication extends mongoose.Document {
  name: string;
  location: ILocation;
  price: number;
  created: Date;
  owner: Schema.Types.ObjectId;
  services: Types.Array<string>;
  guests: Types.Array<IGuest>;
  description: string;
  terms: ITerms;
  rules: Types.Array<string>;
  features: [typeof FeaturesSchema];
}

const PublicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: LocationSchema,
    required: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  services: [
    {
      type: String,
      required: true
    }
  ],
  rules: [
    {
      type: String
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  description: {
    type: String,
    default: ''
  },
  terms: {
    type: TermsSchema,
    required: true
  },
  features: {
    type: [FeaturesSchema],
    required: true
  },
  guests: [
    {
      from: Date,
      to: Date,
      guest: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]
});

export default model<Publication>('Publication', PublicationSchema);

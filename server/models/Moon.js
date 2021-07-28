import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    name: { type: String, required: true },
    planetId: { type: ObjectId, ref: 'Planet' },
    starId: { type: ObjectId, ref: 'Star' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Moon.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

Moon.virtual('star', {
  localField: 'starId',
  ref: 'Star',
  foreignField: '_id',
  justOne: true
})

export default Moon

import ValueSchema from '../models/Value'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
import MoonSchema from '../models/Moon'
import SpeciesSchema from '../models/Species'
import mongoose from 'mongoose'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()

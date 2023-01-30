import * as joi from 'joi'

export const createCatSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().integer().required(),
    breed: joi.string().required()
})

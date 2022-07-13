const worldData = require('../world_data.json');
module.exports.COUNTRIES = (req, res) => {

}
module.exports.home = (req, res) => {
    res.send('Hello World!');
}
// const getOnlyCounties = () => {
//     const countries = worldData.map(country => country.name);
//     return countries;
// }
// const countryList = getOnlyCounties();
// const getStates = () => {
//     // loop through the countries and find the states then return the states and their country
//     const data = worldData.map(country => {
//         const states = country.states.map(state => {
//             return {
//                 name: state.name,
//                 country: country.name
//             }
//         }
//         )
//         return states;
//     }
//     )
//     return data;
// }
// const cimp = getStates()
const getCountries = () => {
    const countries = worldData.map(country => {
        return {
            name: country.name,
            flag: country.emoji,
            states: country.states.map(state => state.name)
        }
    }
    )
    return countries;
}
const countries = getCountries();
// console.log(countries);
// get the states of choosen in countries
const getStates = (value) => {
    const country = worldData.find(country => country.name === value);
    const states = country.states.map(state => state.name);
    return states;
}

module.exports.FETCH_COUNTRIES_AND_STATES = async (req, res) => {
    try {
        return res.status(200).json({
            countries,
            // states
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
module.exports.STATES = async (req, res) => {
    // const country = req.params.country;
    const data = getStates(req.params.country)
    console.log(data);
    try {
        const states = countries.find(country => country.name === req.params.country);
        return res.status(200).json({
            // country,
            states
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
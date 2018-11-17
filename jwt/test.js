var jwt = require('jsonwebtoken');
var token = 'eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFpbCI6InhAeC5kZSIsInJvbGUiOlsiYWRtaW4iLCJwb3dlcnVzZXIiXSwiaWF0IjoxNTQyMjA4ODg1LCJleHAiOjE2NDIyMTI0ODV9.Aa2QaDp_5daDQVmc6Y5BwbBUU3vC06voCggsQaRdBrQHfHwbhdyllLZ19_K6z2m-L3a-M1ziqSOVz-c59g-LYsKaAU_JJU3-FVeAkpkoqvqm7SXtye8jUXKWeWqz2uCfcCT03YX6TWaB7bEQkSY3SrAh-kaBJfIf37atjm6S5OBa9--N'
const jwtHandler = require('./jwtHandler')

console.log(jwtHandler.hasRole(token,'admin')) // bar
 
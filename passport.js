const passport = require("passport");
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const dotenv = require("dotenv")
dotenv.config()


    //store and retrieve user information from the session
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
                // social media client ID and secret key
    const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET =process.env.GOOGLE_CLIENT_SECRET;
    
    const GITHUB_CLIENT_ID =process.env.GITHUB_CLIENT_ID ;
    const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

         // google strategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true,
    session: true
    },
    function(req,accessToken, refreshToken, profile, done)  {
        return done(null, profile);
    })
)

        // Github strategy
passport.use(
    new GithubStrategy(
        {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
    )
);



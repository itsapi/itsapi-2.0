var everyauth = require('everyauth'),
    querystring = require('querystring'),
    util = require('util');

function checkLogin(login, password) {
    console.log('Authenticating: ' + login + ', ' + password)
    if (true) {//(usersByLogin[login] && usersByLogin[login].password === password) {
        console.log(login + ' logged in.')
        return [{'login': 'bob'}]//usersByLogin[login];
    } else {
        console.log('Login failed: ' + login)
        return ['Login failed'];
    }
}

function checkRegistration(newUserAttributes) {
    console.log('Registering user: ' + util.inspect(newUserAttributes))
    // Validate the registration input
    // Return undefined, null, or [] if validation succeeds
    // Return an array of error messages (or Promise promising this array)
    // if validation fails
    //
    // e.g., assuming you define validate with the following signature
    // var errors = validate(login, password, extraParams);
    // return errors;
    //
    // The `errors` you return show up as an `errors` local in your jade template
    return []
}

function register(newUserAttributes) {
    // This step is only executed if we pass the validateRegistration step without
    // any errors.
    //
    // Returns a user (or a Promise that promises a user) after adding it to
    // some user store.
    //
    // As an edge case, sometimes your database may make you aware of violation
    // of the unique login index, so if this error is sent back in an async
    // callback, then you can just return that error as a single element array
    // containing just that error message, and everyauth will automatically handle
    // that as a failed registration. Again, you will have access to this error via
    // the `errors` local in your register view jade template.
    // e.g.,
    // var promise = this.Promise();
    // User.create(newUserAttributes, function (err, user) {
    //   if (err) return promise.fulfill([err]);
    //   promise.fulfill(user);
    // });
    // return promise;
    //
    // Note: Index and db-driven validations are the only validations that occur
    // here; all other validations occur in the `validateRegistration` step documented above.
    console.log('Successfully registered user')
    return [newUserAttributes]
}

everyauth.password
    .loginFormFieldName('username')
    .passwordFormFieldName('password')
    .getLoginPath('/')
    .postLoginPath('/')
    .loginView('login.jade')
    .authenticate(checkLogin)
    .loginSuccessRedirect('/')

    // If login fails, we render the errors via the login view template,
    // so just make sure your loginView() template incorporates an `errors` local.
    // See './example/views/login.jade'

    .getRegisterPath('/') // Uri path to the registration page
    .postRegisterPath('/') // The Uri path that your registration form POSTs to
    .registerView('login.jade')
    .extractExtraRegistrationParams( function (req) {
        return {
            name: {
                first: req.body.first_name,
                last: req.body.last_name
            },
            email: req.body.email,
            password_again: req.body.password_again
        };
    })
    .validateRegistration(checkRegistration)
    .registerUser(register)
    .registerSuccessRedirect('/');

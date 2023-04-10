function conflictError(message : string) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function duplicatedEmailError(email : string) {
    return {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
      email,
    };
  }

  function duplicatedMovieError(movieName : string) {
    return {
      name: "DuplicatedMovielError",
      message: "There is already a movie with given name",
      movieName,
    };
  }
  
  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue",
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  
  function invalidCredentialsError() {
    return {
      name: "InvalidCredentialsError",
      message: "Email or password are incorrect",
    };
  }

 function invalidDataError(details: string[]) {
    return {
      name: 'InvalidDataError',
      message: 'Invalid data',
      details,
    };
  }
  
  export default {
    conflictError,
    duplicatedEmailError,
    duplicatedMovieError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    invalidDataError
  };
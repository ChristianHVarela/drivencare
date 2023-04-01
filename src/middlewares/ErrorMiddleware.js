import httpStatus from "http-status";

function handleApplicationErrors(err, req, res, next) {
  console.log(err);
  if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
    return res
      .status(httpStatus.CONFLICT)
      .send({ message: err.message, email: err.email });
  }

  if (err.name === "InvalidCredentialsError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }
  if (err.name === "MedicalAppointmentsError"){
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message
    })
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}

export { handleApplicationErrors }
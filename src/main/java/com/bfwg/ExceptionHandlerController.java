package com.bfwg;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@ControllerAdvice
//NoHandlerFoundException
@EnableWebMvc
public class ExceptionHandlerController {

    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(value= HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorResponse requestHandlingNoHandlerFound(NoHandlerFoundException exception) {
        return new ErrorResponse("custom_404", "message for 404 error code");
    }
}
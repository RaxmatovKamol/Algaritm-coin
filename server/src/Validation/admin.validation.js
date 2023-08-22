const AJV = require("ajv");

const ajv = new AJV();

class adminValidation {
    
    static async check(schema,data) {
      
    return new Promise(async (resolve, reject) => {
      try {
        const error = await ajv.validate(schema, data);
        if (!error) {
          reject(ajv.errorsText());
        } else {
          resolve(null);
        }
      } catch (err) {
        reject(ajv.errorsText());
      }
    });
  }

  static async login(req, res, next) {
    const data = await req.body;

    const schema = {
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 5,
          maxLength: 20,
          pattern: "^[a-zA-Z0-9]*$",
        },

        password: {
          type: "string",
          minLength: 5,
          maxLength: 20,
        },
      },

      additionalProperties: false,
      required: ["username", "password"],
    };

    try {
      const error = await adminValidation.check(schema, data);

      console.log(error);
      if (!error) {
        next();
      } else {
        res.status(401).json({
          message: "Invalid username or password",
          variant: "warning",
          error: err.message,
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        variant: "error",
        error: err.message,
      });
    }
  }
}

module.exports = adminValidation;

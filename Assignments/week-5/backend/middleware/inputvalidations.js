const { z } = require("zod");

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,20}$/;

const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name should not exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 30 characters")
    .regex(
      passwordRegex,
      "Password must include at least 1 uppercase letter, 1 number, and 1 special character"
    ),
});

function validateInputs(req, res, next) {
  const validationResult = signupSchema.safeParse(req.body);

  if (!validationResult.success) {
    const validationErrors = validationResult.error.errors.map((e) => ({
      field: e.path[0],
      message: e.message,
    }));

    return res.status(400).json({ errors: validationErrors });
  }

  next();
}

module.exports = validateInputs;

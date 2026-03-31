const token = jwt.sign(
  {
    id: user.id,
    role: user.role,
    membershipStatus: user.membershipStatus,
  },
  process.env.JWT_SECRET!,
  { expiresIn: "7d" }
);
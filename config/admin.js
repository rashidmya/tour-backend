module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bde341b773e2c9f88233838b3248642b'),
  },
});

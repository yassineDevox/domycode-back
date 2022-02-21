module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1c7f036f1d3d0236ece52bc093d5a53e'),
  },
});

module.exports = {

  test: {
    client: 'postgresql',
    connection: "postgres://localhost:5432/donut_test",
    debug: false
  },

  development: {
    client: 'postgresql',
    connection: "postgres://localhost:5432/donut_dev"
  },
}
